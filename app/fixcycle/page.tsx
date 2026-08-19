import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Apple, BadgeCheck, Download, Play, Smartphone } from "lucide-react";
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
    href: "https://play.google.com/store/apps/details?id=com.fixcyclehandy.user",
  },
  {
    icon: BadgeCheck,
    title: "FixCycle Pro",
    sub: "Android — for artisans",
    note: "Get it on",
    href: "https://play.google.com/store/apps/details?id=com.fixcyclehandy.driver",
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
        logo={{ src: "/fixcycle-logo.png", alt: "FixCycle logo" }}
      />

      {/* Tabs */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FixCycleTabs />
        </div>
      </section>

      {/* FixCycle Pro CTA */}
      <section className="relative overflow-hidden bg-forest-deep py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              <Image
                src="/fixcycle-pro-logo.png"
                alt="FixCycle Pro"
                width={140}
                height={140}
                className="h-[120px] w-[120px] shrink-0 object-cover lg:h-[140px] lg:w-[140px]"
                priority
              />
              <div className="flex-1">
                <span className="inline-block bg-lime px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-deep">
                  For Artisans
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                  Meet FixCycle Pro
                </h2>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-paper/70">
                  Grow your handyman business — manage services, bookings, availability, and earnings all in one app.
                </p>
                <Link
                  href="/fixcycle-pro"
                  className="mt-6 inline-flex items-center gap-2 rounded-[2px] bg-lime px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-forest-deep transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Learn more about FixCycle Pro
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative scroll-mt-24 overflow-hidden bg-paper-soft py-24 sm:py-28">
        <div className="bg-dots absolute right-0 top-0 h-72 w-72 opacity-60" aria-hidden />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Get the app"
            title="Download FixCycle today"
            subtitle="Join thousands of customers and artisans across Lusaka & Ndola. It takes less than a minute."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stores.map((s, i) => {
              const linkable = !s.soon && s.href && s.href !== "#";
              const card = (
                <div
                  className={`group flex h-full items-center gap-4 rounded-[2px] border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                    s.soon
                      ? "cursor-not-allowed border-dashed border-ink/25 bg-surface/60 opacity-70"
                      : "border-ink/10 bg-surface shadow-soft hover:border-ink/25"
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] bg-forest text-white transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-ink/50">{s.note}</p>
                    <p className="font-display text-lg font-bold text-brand-ink">{s.title}</p>
                    <p className="text-sm text-brand-ink/55">{s.sub}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={s.title} delay={0.08 * i}>
                  {linkable ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
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
