import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Briefcase,
  CalendarCheck,
  Code2,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Laptop,
  LineChart,
  Palette,
  PenTool,
  Rocket,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { ButtonLink } from "@/components/Button";
import { volunteerBenefits, volunteerRoles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the Global Tech Volunteers programme at Ecotech Innovations — build Africa's next impact platform from anywhere in the world.",
};

const activities = [
  { icon: Code2, title: "Develop features", text: "Ship real product features for FixCycle and our green-tech tools." },
  { icon: PenTool, title: "Design", text: "Craft clean, accessible interfaces for Zambian users." },
  { icon: Laptop, title: "Mentor & support", text: "Coach junior talent and share your expertise with the team." },
  { icon: CalendarCheck, title: "Test & QA", text: "Make sure every release is smooth, safe and reliable." },
];

const roleIcons: Record<(typeof volunteerRoles)[number]["icon"], typeof Code2> = {
  code: Code2,
  palette: Palette,
  chart: LineChart,
  clipboard: Briefcase,
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        eyebrow="Global Tech Volunteers"
        title="Help us build Africa's next impact platform"
        subtitle="We're calling passionate developers, engineers and tech volunteers worldwide to join a small, mission-driven team building the green economy — one app at a time."
      />

      {/* Banner CTA */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-green via-brand-green to-brand-teal p-9 text-white shadow-lift sm:p-12">
              <div className="bg-grid-dark absolute inset-0" aria-hidden />
              <div className="absolute -right-24 -top-24 h-80 w-80 animate-float-slow rounded-full bg-brand-gold/25 blur-[100px]" aria-hidden />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ring-white/25">
                    <Globe2 className="h-4 w-4" />
                    Remote · Flexible · Real impact
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
                    Calling Global Tech Volunteers — join us in building{" "}
                    <span className="text-gradient-gold">Africa&apos;s next impact platform!</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/80">
                    Work alongside our team on products that connect communities and cut carbon
                    footprints. Contribute a few hours a week — or dive in deep. It&apos;s up to you.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display text-lg font-bold text-brand-green-dark shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <Rocket className="h-6 w-6" />
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you'll do */}
      <section className="bg-surface pb-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What you'll do" title="Build, shape and sharpen" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={0.08 * i}>
                <div className="group h-full rounded-3xl border border-brand-green/10 bg-brand-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-lift">
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">{a.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-ink/60">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we need + benefits */}
      <section className="bg-brand-cream py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Reveal direction="right">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-dark ring-1 ring-brand-green/20">
                  <Users className="h-3.5 w-3.5" />
                  Who we need
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink">
                  Bring your skills. <span className="text-brand-green dark:text-brand-green-light">Leave your mark.</span>
                </h2>
              </Reveal>
              <div className="mt-8 space-y-4">
                {volunteerRoles.map((r, i) => {
                  const Icon = roleIcons[r.icon];
                  return (
                    <Reveal key={r.title} delay={0.06 * i}>
                      <div className="group flex items-start gap-4 rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-green-dark transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-brand-ink">{r.title}</h3>
                          <p className="mt-0.5 text-sm text-brand-ink/55">{r.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div>
              <Reveal direction="left">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-dark ring-1 ring-brand-green/20">
                  <HeartHandshake className="h-3.5 w-3.5" />
                  What you get
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink">
                  More than a <span className="text-brand-green dark:text-brand-green-light">reference letter</span>
                </h2>
              </Reveal>
              <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-teal p-8 text-white shadow-lift sm:p-10">
                <ul className="space-y-4">
                  {volunteerBenefits.map((b, i) => (
                    <Reveal key={b} delay={0.06 * i}>
                      <li className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-blue">
                          <Award className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-[15px] leading-relaxed text-white/85">{b}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="#apply" variant="gold">
                    <Lightbulb className="h-4 w-4" />
                    Apply now
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline-light">
                    Ask a question
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="bg-surface py-24 sm:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Apply now"
            title="Ready to build with us?"
            subtitle="Fill in the form and our community lead will get back to you within a few days."
          />
          <Reveal delay={0.15} className="mt-12">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-dashed border-brand-green/35 bg-surface/70 p-10 text-center sm:flex-row sm:text-left">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-brand-green-dark">
                <Briefcase className="h-8 w-8" />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-xl font-bold text-brand-ink">Careers at Ecotech</h2>
                <p className="mt-1.5 text-[15px] text-brand-ink/60">
                  No open full-time positions right now — but we&apos;re always looking for
                  passionate people. Send your CV to{" "}
                  <a href={`mailto:${site.emailCareers}`} className="font-semibold text-brand-green-dark underline-offset-4 hover:underline">
                    {site.emailCareers}
                  </a>{" "}
                  and tell us what you&apos;d love to build.
                </p>
              </div>
              <ButtonLink href={`mailto:${site.emailCareers}`} variant="outline-dark" className="shrink-0">
                Email us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
