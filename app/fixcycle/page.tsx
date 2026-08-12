import type { Metadata } from "next";
import { Apple, Download, Play, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FixCycleTabs from "@/components/fixcycle/FixCycleTabs";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "FixCycle",
  description:
    "FixCycle connects households with verified local service providers — and FixCycle Pro helps skilled artisans find jobs and get paid digitally.",
};

const stores = [
  {
    icon: Play,
    title: "Google Play",
    sub: "Android — FixCycle",
    note: "Get it on",
    href: "#",
  },
  {
    icon: Download,
    title: "Direct APK",
    sub: "Install on any Android",
    note: "Download",
    href: "#",
  },
  {
    icon: Apple,
    title: "App Store",
    sub: "iOS — coming soon",
    note: "Get it on",
    href: "#",
    soon: true,
  },
];

export default function FixCyclePage() {
  return (
    <>
      <PageHero
        crumb="FixCycle"
        eyebrow="The Flagship Platform"
        title="FixCycle — Zambia's home-services marketplace"
        subtitle="Two apps, one mission: connect every household with trusted, verified service providers — and give skilled artisans the platform they deserve."
      />

      {/* Tabs */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FixCycleTabs />
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative scroll-mt-24 overflow-hidden bg-brand-cream py-24 sm:py-28">
        <div className="bg-dots absolute right-0 top-0 h-72 w-72 opacity-60" aria-hidden />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Get the app"
            title="Download FixCycle today"
            subtitle="Join thousands of customers and artisans across Lusaka & Ndola. It takes less than a minute."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stores.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * i}>
                <div
                  className={`group flex h-full items-center gap-4 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                    s.soon
                      ? "cursor-not-allowed border-dashed border-brand-green/30 bg-surface/60 opacity-70"
                      : "border-brand-green/10 bg-surface shadow-soft hover:border-brand-green/30"
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-white transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-ink/50">{s.note}</p>
                    <p className="font-display text-lg font-bold text-brand-ink">{s.title}</p>
                    <p className="text-sm text-brand-ink/55">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="mx-auto max-w-xl text-[15px] text-brand-ink/55">
              Need help getting set up? Our team is one message away —{" "}
              <ButtonLink href="/contact" variant="outline-dark" size="sm" className="ml-1">
                <Smartphone className="h-4 w-4" />
                Contact us
              </ButtonLink>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
