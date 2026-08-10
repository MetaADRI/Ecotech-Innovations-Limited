"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

/** Newsletter signup (placeholder UX — connect a provider when ready). */
export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-3 text-sm font-semibold text-brand-green-light">
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        Subscribed! Watch your inbox for updates.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur focus-within:ring-brand-green">
        <input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className={`w-full bg-transparent px-4 py-3 text-sm focus:outline-none ${
            dark ? "text-white placeholder:text-white/40" : "text-brand-ink placeholder:text-brand-ink/35"
          }`}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex items-center gap-1 bg-brand-green px-4 text-sm font-semibold transition-colors hover:bg-brand-green-deep"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      {dark && <p className="mt-2 text-xs text-white/40">Placeholder — wire up later if the CEO wants it.</p>}
    </form>
  );
}
