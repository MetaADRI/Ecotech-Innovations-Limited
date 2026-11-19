import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  History,
  Bell,
  Play,
  ExternalLink,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { fixcycleWeb } from "@/lib/site";

export const metadata: Metadata = {
  title: "FixCycle Pro",
  description:
    "Grow your handyman business with FixCycle Pro — manage services, bookings, availability, and earnings from one app. A web version is coming soon.",
};

const features = [
  {
    icon: Briefcase,
    title: "Service Selection",
    desc: "Choose the categories of services you want to offer — plumbing, electrical, carpentry, and more.",
  },
  {
    icon: CalendarCheck,
    title: "Manage Availability",
    desc: "Set your time slots to ensure seamless scheduling with customers who need your skills.",
  },
  {
    icon: CheckCircle2,
    title: "Handle Bookings",
    desc: "Accept or reject booking requests based on your availability — you stay in control.",
  },
  {
    icon: CreditCard,
    title: "Track Earnings",
    desc: "View your earnings in the dedicated Earnings tab with full transparency and breakdowns.",
  },
  {
    icon: History,
    title: "Booking History",
    desc: "Access your full booking history to review completed jobs and track your growth.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    desc: "Stay updated with instant alerts for new bookings, cancellations, and status updates.",
  },
];

export default function FixCycleProPage() {
  return (
    <>
      <PageHero
        crumb="FixCycle Pro"
        eyebrow="For Artisans"
        title="Grow your business with FixCycle Pro"
        subtitle="Join the FixCycle Pro app to manage your services, bookings, and earnings — all in one place."
        logo={{ src: "/fixcycle-pro-logo.png", alt: "FixCycle Pro logo" }}
        actions={[{ label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.fixcyclehandy.driver&hl=en", primary: true }]}
      />

      {/* Web version — coming soon */}
      <section className="border-b border-ink/10 bg-surface-soft py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[2px] border border-dashed border-ink/20 bg-surface p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-forest-deep">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forest-deep" aria-hidden />
                  Coming soon
                </span>
                <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  FixCycle Pro web version
                </h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink/60">
                  Run your whole business from any browser — bookings, availability and earnings
                  without installing the app. Meanwhile, the FixCycle web platform is live and
                  open to try.
                </p>
              </div>
              <a
                href={fixcycleWeb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-[2px] bg-forest px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-paper shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-deep sm:self-auto"
              >
                Open the FixCycle web app
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="About this app"
            title="Built for skilled tradespeople"
            subtitle="Whether you're a plumber, electrician, or offer other handyman services, this app lets you take control of your work schedule and bookings."
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.06 * i}>
                  <div className="group rounded-[2px] border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-ink/25">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                      <f.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              Download FixCycle Pro today
            </h2>
            <p className="mt-4 text-lg text-paper/70">
              Streamline your workflow, maximize your earnings, and provide exceptional services.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.fixcyclehandy.driver&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-[2px] bg-lime px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-forest-deep transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Play className="h-5 w-5" />
                Get it on Google Play
              </a>
            </div>
            <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-paper/50">
              Web version — coming soon
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/fixcycle-pro-logo.png"
                alt="FixCycle Pro"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
