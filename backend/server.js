const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 4000);
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, "data"));
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.jsonl");
const NOTIFY_TO = (process.env.NOTIFY_TO || "ecotechinnoltd@gmail.com").trim();
const NOTIFY_FROM = (process.env.NOTIFY_FROM || "Ecotech Website <no-reply@eilzm.com>").trim();
const ADMIN_TOKEN = (process.env.ADMIN_TOKEN || "").trim();

function ensureDataDir() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function parseOrigins(value) {
  return String(value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

const allowedOrigins = parseOrigins(process.env.CORS_ORIGIN || "http://localhost:3000");

app.set("trust proxy", 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "32kb" }));
app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // server-to-server / curl / same-origin cases
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many requests. Please try again later." },
});

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function clean(value, max = 2000) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim().slice(0, max);
}

function multiline(value, max = 5000) {
  return String(value == null ? "" : value).trim().slice(0, max);
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true" || port === 465;
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

async function maybeSendEmail(record) {
  const transport = createTransport();
  if (!transport) return { sent: false, reason: "smtp_not_configured" };

  const subject = `[Ecotech Website] ${record.subject || "New enquiry"} - ${record.name || "Visitor"}`;
  const text = [
    "New website enquiry",
    "",
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone || "-"}`,
    `Company: ${record.company || "-"}`,
    `Interest: ${record.interest || "-"}`,
    `Subject: ${record.subject}`,
    `Source: ${record.source || "website"}`,
    `Received: ${record.createdAt}`,
    "",
    "Message:",
    record.message,
  ].join("\n");

  await transport.sendMail({
    from: NOTIFY_FROM,
    to: NOTIFY_TO,
    replyTo: record.email,
    subject,
    text,
  });
  return { sent: true };
}

function saveEnquiry(record) {
  ensureDataDir();
  fs.appendFileSync(ENQUIRIES_FILE, JSON.stringify(record) + "\n", "utf8");
}

function readEnquiries(limit = 100) {
  if (!fs.existsSync(ENQUIRIES_FILE)) return [];
  const content = fs.readFileSync(ENQUIRIES_FILE, "utf8");
  const lines = content.split(/\r?\n/).filter(Boolean);
  return lines
    .slice(-Math.max(1, Math.min(limit, 500)))
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .reverse();
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "eil-website-backend", time: new Date().toISOString() });
});

app.post("/api/enquiries", limiter, async (req, res) => {
  try {
    const body = req.body || {};

    // Honeypot/spam trap fields used by the frontend forms.
    if (clean(body._gotcha, 200) || clean(body.website, 200)) {
      return res.status(202).json({ ok: true, accepted: true });
    }

    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name: clean(body.name, 120),
      email: clean(body.email, 200).toLowerCase(),
      phone: clean(body.phone, 40),
      company: clean(body.company, 120),
      interest: clean(body.interest, 120),
      subject: clean(body.subject, 160) || "General enquiry",
      message: multiline(body.message, 5000),
      source: clean(body.source, 60) || "website",
      page: clean(body.page, 200),
      userAgent: clean(req.get("user-agent"), 300),
      ip: clean(req.ip, 80),
    };

    if (!record.name) return res.status(400).json({ ok: false, error: "Name is required." });
    if (!isEmail(record.email)) return res.status(400).json({ ok: false, error: "A valid email is required." });
    if (!record.message || record.message.length < 5) {
      return res.status(400).json({ ok: false, error: "Message is required." });
    }

    saveEnquiry(record);

    let email = { sent: false, reason: "not_attempted" };
    try {
      email = await maybeSendEmail(record);
    } catch (err) {
      console.error("Email notification failed:", err && err.message ? err.message : err);
      email = { sent: false, reason: "send_failed" };
    }

    return res.status(201).json({ ok: true, id: record.id, stored: true, email });
  } catch (err) {
    console.error("Enquiry error:", err);
    return res.status(500).json({ ok: false, error: "Unable to submit enquiry." });
  }
});

app.get("/api/enquiries", (req, res) => {
  if (!ADMIN_TOKEN) {
    return res.status(503).json({ ok: false, error: "Admin listing is not configured (set ADMIN_TOKEN)." });
  }
  const auth = String(req.get("authorization") || "");
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token || token !== ADMIN_TOKEN) {
    return res.status(401).json({ ok: false, error: "Unauthorized." });
  }
  const limit = Number(req.query.limit || 100);
  const items = readEnquiries(limit);
  return res.json({ ok: true, count: items.length, items });
});

app.use((err, _req, res, _next) => {
  if (err && err.message === "Not allowed by CORS") {
    return res.status(403).json({ ok: false, error: "Origin not allowed." });
  }
  console.error(err);
  return res.status(500).json({ ok: false, error: "Server error." });
});

ensureDataDir();
app.listen(PORT, () => {
  console.log(`EIL backend listening on http://localhost:${PORT}`);
  console.log(`Notifications -> ${NOTIFY_TO} (SMTP ${createTransport() ? "configured" : "not configured"})`);
});
