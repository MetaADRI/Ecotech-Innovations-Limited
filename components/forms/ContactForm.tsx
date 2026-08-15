"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

const subjects = [
  "General enquiry",
  "Export & Import Trading",
  "Strategic Sourcing & Procurement",
  "Freight Brokerage",
  "Business Consultancy & Compliance",
  "Green Logistics & Agri-Tech",
  "FixCycle — I'm a customer",
  "FixCycle Pro — I'm an artisan",
  "Partner with us",
  "Volunteer programme",
  "Press & media",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const requestedSubject = searchParams.get("subject") ?? "";
  const presetSubject = subjects.includes(requestedSubject) ? requestedSubject : "";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Formspree niceties: readable subject line + reply-to in notification emails.
    data._subject = `Ecotech website — ${data.subject ?? "Enquiry"}`;
    if (data.email) data._replyto = data.email;

    if (site.formspreeContact) {
      setStatus("sending");
      try {
        const res = await fetch(site.formspreeContact, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus("done");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Website enquiry — ${data.subject ?? ""}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-[2px] border border-forest/25 bg-brand-mint p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">Message sent 🎉</h3>
        <p className="mt-2 text-[15px] text-brand-ink/65">
          Thanks for reaching out — we&apos;ll get back to you within 1–2 working days.
          {!site.formspreeContact && (
            <>
              {" "}
              (If your email app didn&apos;t open, email us directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-forest underline">
                {site.email}
              </a>
              .)
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2px] border border-ink/15 bg-surface p-8 shadow-soft sm:p-10">
      <h3 className="font-display text-2xl font-bold text-brand-ink">Send us a message</h3>
      <p className="mt-2 text-sm text-brand-ink/55">
        Questions, partnerships, feedback — we read everything.
      </p>

      {/* Formspree honeypot — hidden from humans; bots that fill it get silently dropped. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

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
          {subjects.map((s) => (
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
          rows={5}
          required
          placeholder="How can we help?"
          className="w-full resize-y rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
        />
      </label>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">
          Something went wrong — please email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

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
            Send message
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
