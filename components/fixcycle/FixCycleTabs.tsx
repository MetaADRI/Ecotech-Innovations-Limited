"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  CreditCard,
  GraduationCap,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "customer", label: "For Customers", sub: "FixCycle User App" },
  { id: "pro", label: "For Artisans", sub: "FixCycle Pro" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const customerBenefits = [
  { icon: ShieldCheck, title: "Vetted pros", text: "Every provider is verified and background-checked before their first booking." },
  { icon: Banknote, title: "Transparent pricing", text: "Clear, upfront quotes — no surprises when the job is done." },
  { icon: Search, title: "Book in seconds", text: "Search, compare and confirm a trusted pro from your phone." },
  { icon: Leaf, title: "Eco-friendly options", text: "Nearby pros and consolidated trips that cut unnecessary kilometres." },
];

const proBenefits = [
  { icon: TrendingUp, title: "More jobs", text: "A steady pipeline of verified bookings without the marketing cost." },
  { icon: Wallet, title: "Digital payments", text: "Get paid reliably and on time, straight to your mobile wallet." },
  { icon: Star, title: "Build your reputation", text: "Ratings and reviews that turn great work into more work." },
  { icon: BookOpen, title: "Free training", text: "Resources and mentorship to grow your skills and your business." },
];

const customerSteps = [
  { n: "01", icon: Search, title: "Search", text: "Describe the job or browse verified pros near you." },
  { n: "02", icon: BadgeCheck, title: "Book", text: "Compare quotes, pick your pro and confirm in seconds." },
  { n: "03", icon: CreditCard, title: "Pay digitally", text: "Pay securely on completion — mobile money or card." },
];

const proSteps = [
  { n: "01", icon: UserRoundCheck, title: "Sign up", text: "Create your Pro profile and showcase your trade." },
  { n: "02", icon: ShieldCheck, title: "Get verified", text: "Complete the quick verification of your skills and documents." },
  { n: "03", icon: Banknote, title: "Start earning", text: "Accept jobs, earn ratings and get paid digitally." },
];

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function StepRow({ steps }: { steps: typeof customerSteps }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-[2px] border border-ink/10 bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-lift"
        >
          <span className="absolute right-6 top-5 font-mono text-sm font-bold text-forest/25">{s.n}</span>
          <span className="flex h-13 w-13 items-center justify-center rounded-[2px] bg-brand-mint text-forest transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <s.icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">{s.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-brand-ink/60">{s.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function FixCycleTabs() {
  const [active, setActive] = useState<TabId>(() => {
    if (typeof window !== "undefined" && window.location.hash === "#pro") {
      return "pro";
    }
    return "customer";
  });
  const isPro = active === "pro";

  return (
    <div>
      {/* Tab switcher */}
      <div className="mx-auto flex w-fit flex-col gap-3 rounded-[2px] bg-paper-soft p-2 ring-1 ring-ink/15 sm:flex-row">
        {tabs.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setActive(t.id);
                history.replaceState(null, "", t.id === "pro" ? "#pro" : "#customer");
              }}
              className={cn(
                "relative rounded-[2px] px-8 py-3.5 text-left transition-colors duration-300 sm:text-center",
                on ? "text-white" : "text-brand-ink/65 hover:text-forest"
              )}
            >
              {on && (
                <motion.span
                  layoutId="fixcycle-tab"
                  className={cn(
                    "absolute inset-0 rounded-[2px] shadow-lift",
                    isPro
                      ? "bg-gradient-to-br from-charcoal via-forest-deep to-teal"
                      : "bg-gradient-to-br from-forest to-teal"
                  )}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}
              <span className="relative block font-display text-base font-bold leading-tight">
                {t.label}
              </span>
              <span className={cn("relative block text-xs", on ? "text-white/75" : "text-brand-ink/45")}>
                {t.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          {!isPro ? (
            /* ── CUSTOMER ── */
            <div className="space-y-20">
              <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative mx-auto hidden lg:block">
                  <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/15 blur-[90px]" aria-hidden />
                  <PhoneMockup className="relative" />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    The easiest way to get things <span className="text-forest">fixed at home</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-ink/60">
                    From a dripping tap to a full wiring job — FixCycle puts verified
                    professionals one tap away, with pricing you can trust.
                  </p>
                  <ul className="mt-8 space-y-5">
                    {customerBenefits.map((b) => (
                      <li key={b.title} className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest">
                          <b.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-brand-ink">{b.title}</h3>
                          <p className="text-[15px] leading-relaxed text-brand-ink/55">{b.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink href="#downloads" size="lg">
                      Download the App
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-9 text-center font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                  How it works — <span className="text-forest">three easy steps</span>
                </h3>
                <StepRow steps={customerSteps} />
              </div>
            </div>
          ) : (
            /* ── PRO ── */
            <div className="space-y-20">
              <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    Your skills deserve <span className="text-teal">steady work</span> — and fair pay
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-ink/60">
                    Join hundreds of plumbers, electricians, technicians and handymen earning
                    more, working smarter, and building a reputation that travels.
                  </p>
                  <ul className="mt-8 space-y-5">
                    {proBenefits.map((b) => (
                      <li key={b.title} className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-forest text-white">
                          <b.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-brand-ink">{b.title}</h3>
                          <p className="text-[15px] leading-relaxed text-brand-ink/55">{b.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink
                      href="/fixcycle-pro"
                      variant="secondary"
                      size="lg"
                    >
                      Learn more about FixCycle Pro
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </ButtonLink>
                  </div>
                </div>

                {/* Pro earnings visual */}
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/15 blur-[80px]" aria-hidden />
                  <div className="relative rounded-[2px] bg-gradient-to-br from-forest via-forest-deep to-charcoal p-6 text-white shadow-lift">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold">Pro Dashboard</span>
                      <span className="rounded-[2px] bg-lime px-2.5 py-1 font-mono text-[10px] font-bold text-forest-deep">
                        VERIFIED
                      </span>
                    </div>

                    <div className="mt-5 rounded-[2px] bg-white/10 p-4 ring-1 ring-white/15">
                      <p className="text-xs text-white/60">Earnings this month</p>
                      <p className="font-mono text-3xl font-bold text-brand-gold-light">K14,850</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-brand-green-light">
                        <TrendingUp className="h-3.5 w-3.5" /> +32% vs last month
                      </p>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {[
                        { label: "Jobs completed", value: "48", tint: "bg-brand-green-light" },
                        { label: "Rating", value: "4.9 ★", tint: "bg-brand-gold-light" },
                        { label: "Next payout", value: "K3,200", tint: "bg-white/70" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between rounded-[2px] bg-white/10 px-4 py-3 ring-1 ring-white/10">
                          <span className="text-sm text-white/75">{row.label}</span>
                          <span className="font-mono text-sm font-bold">{row.value}</span>
                          <span className={`ml-2 h-2 w-2 rounded-full ${row.tint}`} />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[2px] bg-white/10 p-4 ring-1 ring-white/10">
                      <p className="flex items-center gap-2 text-sm text-white/85">
                        <GraduationCap className="h-4 w-4 text-brand-green-light" />
                        “Completed the Safety & Pricing masterclass.”
                      </p>
                    </div>
                  </div>

                  {/* Floating testimonial chip */}
                  <div className="absolute -bottom-8 -left-4 w-64 animate-float rounded-[2px] bg-surface p-4 shadow-lift sm:-left-6">
                    <div className="flex gap-1 text-lime">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-1.5 text-[13px] font-medium leading-snug text-brand-ink">
                      “FixCycle Pro changed how I work — more jobs, paid on time.”
                    </p>
                    <p className="mt-1.5 text-xs font-semibold text-forest">Joseph K. · Electrician, Ndola</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-9 text-center font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                  How to join — <span className="text-teal">three simple steps</span>
                </h3>
                <StepRow steps={proSteps} />
                <div className="mt-10 flex justify-center">
                  <ButtonLink href="/get-involved" variant="gold" size="lg">
                    Apply as a Pro
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
