import { ArrowRight, BadgeCheck, Check, Download, Smartphone, TrendingUp, Wallet } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";

const customerPoints = [
  "Vetted, background-checked professionals",
  "Transparent, upfront pricing",
  "Book in seconds — right from your phone",
  "Eco-friendly service options by default",
];

const proPoints = [
  "A steady stream of new jobs",
  "Fast, reliable digital payments",
  "Build your reputation with ratings",
  "Free training & growth resources",
];

export default function Platforms() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Platforms"
          title="One mission, two powerful apps"
          subtitle="FixCycle is the heart of Ecotech — a marketplace that makes hiring trusted help effortless, and makes earning from your skills rewarding."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Customer card */}
          <Reveal direction="left">
            <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-green to-brand-green-deep p-8 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-10">
              <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-125" aria-hidden />

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                  <Smartphone className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  FixCycle — for Customers
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  Find and book verified plumbers, electricians and home-service pros in
                  minutes. Every booking is a small win for your home — and the planet.
                </p>

                <ul className="mt-7 space-y-3.5">
                  {customerPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href="/fixcycle" variant="white" className="relative">
                    <Download className="h-4 w-4" />
                    Download the App
                  </ButtonLink>
                  <ButtonLink href="/fixcycle" variant="outline-light">
                    How it works
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pro card */}
          <Reveal direction="right">
            <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-teal p-8 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-10">
              <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
              <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-gold/20 blur-2xl transition-all duration-700 group-hover:scale-125" aria-hidden />

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                  <BadgeCheck className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  FixCycle Pro — for Artisans
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  Skilled, independent workers get a pipeline of verified jobs, digital
                  payments and a reputation that grows with every completed task.
                </p>

                <ul className="mt-7 space-y-3.5">
                  {proPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Mini earnings card */}
                <div className="relative mt-9 flex max-w-sm items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold text-brand-blue">
                    <Wallet className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/60">This week</p>
                    <p className="font-mono text-lg font-bold">14 jobs · K3,400 earned</p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-brand-green-light" />
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/fixcycle#pro" variant="gold" className="relative">
                    Register as a Pro
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
