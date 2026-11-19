"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site, contactSubjects } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

function buildMailto(data: Record<string, string>) {
  const subject = encodeURIComponent(`Website enquiry — ${data.subject || "General enquiry"}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.name || ""}`,
      `Email: ${data.email || ""}`,
      data.phone ? `Phone: ${data.phone}` : "",
      data.company ? `Company: ${data.company}` : "",
      `Subject: ${data.subject || ""}`,
      "",
      data.message || "",
    ]
      .filter(Boolean)
      .join("\n")
  );
  return `mailto:${site.enquiryEmail}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const requestedSubject = searchParams.get("subject") ?? "";
  const presetSubject = contactSubjects.includes(requestedSubject) ? requestedSubject : "";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    if (data.website) {
      setStatus("done");
      form.reset();
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      subject: data.subject || "General enquiry",
      message: data.message,
      website: data.website || "",
      source: "website-contact-form",
    };

    const endpoint = site.enquiryEndpoint || site.formspreeContact;
    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setStatus("done");
          form.reset();
          return;
        }
        window.location.href = buildMailto(data);
        setStatus("done");
        form.reset();
        return;
      } catch {
        window.location.href = buildMailto(data);
        setStatus("done");
        form.reset();
        return;
      }
    }

    window.location.href = buildMailto(data);
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-[2px] border border-forest/25 bg-brand-mint p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">Enquiry submitted</h3>
        <p className="mt-2 text-[15px] text-brand-ink/65">
          Thank you for contacting {site.shortName}. If your email app did not open or if no backend is configured,
          you can email us directly at{" "}
          <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest underline">
            {site.enquiryEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2px] border border-ink/15 bg-surface p-8 shadow-soft sm:p-10">
      <h3 className="font-display text-2xl font-bold text-brand-ink">Send an enquiry</h3>
      <p className="mt-2 text-sm text-brand-ink/55">
        Tell us what you need and we’ll respond by email. Enquiries are directed to{" "}
        <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest underline-offset-2 hover:underline">
          {site.enquiryEmail}
        </a>
        .
      </p>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Name</span>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Phone (optional)</span>
          <input
            name="phone"
            placeholder="+260 ..."
            className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Company (optional)</span>
          <input
            name="company"
            placeholder="Company or organisation"
            className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Subject</span>
        <select
          name="subject"
          required
          defaultValue={presetSubject}
          className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
        >
          <option value="" disabled>
            Choose a subject
          </option>
          {contactSubjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us about your enquiry (products, quantities, timelines, compliance needs, monitoring/logistics requirements, etc.)"
          className="w-full resize-y rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-lime px-8 py-4 font-semibold text-forest-deep shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-dim disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send enquiry
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-brand-ink/45">
        Submissions use a configured enquiry endpoint when available, otherwise your email app opens to {site.enquiryEmail}.
      </p>
    </form>
  );
}
