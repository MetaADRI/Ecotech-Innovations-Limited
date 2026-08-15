import type { Metadata } from "next";
import { Suspense } from "react";
import { Building2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ecotech Innovations Limited — offices in Lusaka and Ndola, Zambia.",
};

const socials = [
  {
    name: "Facebook",
    href: site.facebook,
    bg: "bg-[#1877F2]",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
  {
    name: "LinkedIn",
    href: site.linkedin,
    bg: "bg-[#0A66C2]",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  },
];

function ContactFormFallback() {
  return (
    <div aria-hidden="true" className="rounded-[2px] border border-ink/15 bg-surface p-8 shadow-soft sm:p-10">
      <div className="h-7 w-48 animate-pulse rounded-[2px] bg-brand-mint" />
      <div className="mt-2 h-4 w-72 max-w-full animate-pulse rounded-[2px] bg-brand-mint/60" />
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse rounded-[2px] bg-paper-soft" />
        <div className="h-12 animate-pulse rounded-[2px] bg-paper-soft" />
      </div>
      <div className="mt-5 h-12 animate-pulse rounded-[2px] bg-paper-soft" />
      <div className="mt-5 h-32 animate-pulse rounded-[2px] bg-paper-soft" />
      <div className="mt-7 h-12 w-44 animate-pulse rounded-[2px] bg-brand-mint" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="We're listening"
        title="Let's talk green"
        subtitle="Whether you're a customer, artisan, partner or future volunteer — our doors (and inboxes) are open."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Reveal direction="right">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </Reveal>

          {/* Details */}
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="rounded-[2px] bg-paper-soft p-8 ring-1 ring-ink/10">
                <h3 className="font-display text-xl font-bold text-brand-ink">Contact details</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Email us</p>
                      <a href={`mailto:${site.email}`} className="font-semibold text-brand-ink hover:text-forest">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Phone</p>
                      <p className="font-semibold text-brand-ink">{site.phoneLusaka}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Working hours</p>
                      <p className="font-semibold text-brand-ink">Mon–Fri · 08:00 – 17:00 CAT</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-[2px] bg-surface p-8 shadow-soft ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="font-display text-xl font-bold text-brand-ink">Find our offices</h3>
                <div className="mt-5 space-y-4">
                  {[site.addressLusaka, site.addressNdola].map((addr) => (
                    <p key={addr} className="flex items-start gap-3 text-[15px] text-brand-ink/70">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                      {addr}
                    </p>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-[2px] border border-ink/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-soft"
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-[2px] ${s.bg} text-white transition-transform duration-300 group-hover:scale-110`}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d={s.path} />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold text-brand-ink">Follow us on {s.name}</p>
                        <p className="text-sm text-brand-ink/50">Latest news & community updates</p>
                      </div>
                      <Send className="ml-auto h-4 w-4 text-brand-ink/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-lime" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="bg-paper-soft py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              { city: "Lusaka HQ", q: "Lusaka, Zambia", note: site.addressLusaka },
              { city: "Ndola Office", q: "Ndola, Zambia", note: site.addressNdola },
            ].map((m, i) => (
              <Reveal key={m.city} direction={i === 0 ? "left" : "right"}>
                <div className="overflow-hidden rounded-[2px] bg-surface shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lift">
                  <iframe
                    title={`Map — ${m.city}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(m.q)}&z=11&output=embed`}
                    className="h-80 w-full border-0 grayscale-[35%] transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="flex items-center gap-3 p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-brand-mint text-forest">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-brand-ink">{m.city}</p>
                      <p className="text-sm text-brand-ink/55">{m.note}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
