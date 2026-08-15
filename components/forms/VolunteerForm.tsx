"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { site } from "@/lib/site";

const roleOptions = [
  "Frontend Developer",
  "Backend Developer",
  "UI / UX Designer",
  "Data Analyst",
  "Project Manager",
  "QA / Testing",
  "Other",
];

type Status = "idle" | "sending" | "done" | "error";

export default function VolunteerForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Formspree niceties: readable subject line + reply-to in notification emails.
    data._subject = `Volunteer application — ${data.role ?? "General"}`;
    if (data.email) data._replyto = data.email;

    // If a Formspree endpoint is configured, submit there.
    if (site.formspreeVolunteer) {
      setStatus("sending");
      try {
        const res = await fetch(site.formspreeVolunteer, {
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

    // No endpoint configured yet → build a mailto fallback.
    const subject = encodeURIComponent(`Volunteer application — ${data.role ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nRole: ${data.role}\n\n${data.message}`
    );
    window.location.href = `mailto:${site.emailCareers}?subject=${subject}&body=${body}`;
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-[2px] border border-forest/25 bg-brand-mint p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">Application received 🎉</h3>
        <p className="mt-2 text-[15px] text-brand-ink/65">
          Thanks for offering your time! We&apos;ll be in touch with next steps.
          {!site.formspreeVolunteer && (
            <>
              {" "}
              (If your email app didn&apos;t open, write to us directly at{" "}
              <a href={`mailto:${site.emailCareers}`} className="font-semibold text-forest underline">
                {site.emailCareers}
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
      <h3 className="font-display text-2xl font-bold text-brand-ink">Apply now</h3>
      <p className="mt-2 text-sm text-brand-ink/55">
        Tell us who you are and what you&apos;d love to build. We reply fast.
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
          <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Full name</span>
          <input
            name="name"
            required
            placeholder="Bwalya M."
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
        <span className="mb-1.5 block text-sm font-semibold text-brand-ink">I can help as a…</span>
        <select
          name="role"
          required
          defaultValue=""
          className="w-full rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
        >
          <option value="" disabled>
            Choose a role
          </option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-ink">Why do you want to join?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="A sentence or two is perfect…"
          className="w-full resize-y rounded-[2px] border border-ink/20 bg-paper-soft px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25"
        />
      </label>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600">
          <Mail className="h-4 w-4" />
          Something went wrong — please email us at{" "}
          <a href={`mailto:${site.emailCareers}`} className="underline">
            {site.emailCareers}
          </a>
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
            Send my application
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-brand-ink/45">
        Prefer a direct message? Email{" "}
        <a href={`mailto:${site.emailCareers}`} className="font-semibold text-forest">
          {site.emailCareers}
        </a>
      </p>
    </form>
  );
}
