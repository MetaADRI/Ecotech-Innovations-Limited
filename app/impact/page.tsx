import type { Metadata } from "next";
import { Car, CloudFog, HandCoins, Home, Route, Sprout, TreePine } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import GoalBar from "@/components/GoalBar";
import { ButtonLink } from "@/components/Button";
import { impactGoals, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Ecotech Innovations' sustainability metrics, case studies and community stories — measured, shared and compounding.",
};

const bigNumbers = [
  { icon: CloudFog, label: "Tonnes of CO₂ reduced", value: site.stats.co2Tonnes, suffix: "+" },
  { icon: HandCoins, label: "Jobs created for artisans", value: site.stats.jobsCreated, suffix: "+" },
  { icon: Home, label: "Homes served", value: site.stats.homesServed, suffix: "+" },
  { icon: Route, label: "Unnecessary trips avoided", value: 5000, suffix: "+" },
];

const stories = [
  {
    tint: "from-brand-green to-brand-teal",
    title: "From dust road to digital doorstep",
    text: "How a Lusaka artisan doubled his bookings after joining FixCycle Pro — and cut his travel by a third.",
    tag: "Artisan story",
  },
  {
    tint: "from-brand-blue to-brand-teal",
    title: "Green logistics pilot, Ndola",
    text: "Consolidated delivery routes shaved 18% off a partner's last-mile fuel bill in three months.",
    tag: "Partner story",
  },
  {
    tint: "from-brand-gold to-brand-green-deep",
    title: "Volunteers building, together",
    text: "Thirty remote tech volunteers shipped FixCycle's new scheduling engine in a single sprint.",
    tag: "Community story",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        crumb="Impact"
        eyebrow="Measured · Shared · Compounding"
        title="Impact we can count, stories we can share"
        subtitle="Sustainability isn't a slogan here — it's a set of numbers we track, publish and improve against."
      />

      {/* Big numbers */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bigNumbers.map((n, i) => (
              <Reveal key={n.label} delay={0.08 * i}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-green/10 bg-brand-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-lift">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-green/10 transition-transform duration-500 group-hover:scale-150" aria-hidden />
                  <span className="relative inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <n.icon className="h-6 w-6" />
                  </span>
                  <p className="relative mt-5 font-mono text-4xl font-bold tracking-tight text-brand-ink">
                    <Counter to={n.value} suffix={n.suffix} />
                  </p>
                  <p className="relative mt-2 text-sm font-medium text-brand-ink/60">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case study */}
          <Reveal className="mt-20">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-green-deep p-9 text-white shadow-lift sm:p-12">
              <div className="bg-grid-dark absolute inset-0" aria-hidden />
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-green/25 blur-[100px]" aria-hidden />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-light ring-1 ring-white/20">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green-light" />
                    Case study · Lusaka
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
                    How FixCycle eliminated{" "}
                    <span className="text-gradient-gold">5,000+ unnecessary vehicle trips</span>{" "}
                    this year
                  </h2>
                  <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/75">
                    By connecting customers with the nearest verified pro and bundling nearby
                    jobs, FixCycle keeps vehicles off the road. Every short trip avoided means
                    cleaner air, quieter streets and a smaller fuel bill — for customers and the planet.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                    {[
                      { v: "5,000+", l: "Trips avoided" },
                      { v: "≈18 t", l: "CO₂ kept out of the air" },
                      { v: "60 km", l: "Avg. distance saved / day" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-mono text-2xl font-bold text-brand-green-light">{s.v}</p>
                        <p className="text-sm text-white/60">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-xs">
                  <Car className="h-10 w-10 text-white/20" />
                  <div className="mt-3 space-y-3">
                    {[95, 62, 78, 44, 30].map((w, i) => (
                      <div key={i} className="h-8 rounded-xl bg-white/10 ring-1 ring-white/10" style={{ width: `${w}%` }} />
                    ))}
                    <p className="pt-1 text-xs text-white/45">Illustrative: trips consolidated per week</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sustainability goals */}
      <section className="bg-brand-cream py-24 sm:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Sustainability goals"
            title="Progress we're transparent about"
            subtitle="Ambitious targets, tracked publicly. Percentages reflect current progress (placeholder data)."
          />
          <div className="mt-14 space-y-8">
            {impactGoals.map((g, i) => (
              <GoalBar key={g.label} label={g.label} value={g.value} caption={g.caption} delay={i * 0.08} />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12">
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-green/15 bg-surface p-7 text-center shadow-soft sm:flex-row sm:text-left">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-brand-green-dark">
                <TreePine className="h-6 w-6" />
              </span>
              <p className="flex-1 text-[15px] text-brand-ink/65">
                Partnering on <strong className="text-brand-green-dark">tree planting</strong> and community
                green spaces across Lusaka &amp; Ndola. Know an organisation we should work with?
              </p>
              <ButtonLink href="/contact" variant="outline-dark" size="sm">
                <Sprout className="h-4 w-4" />
                Let&apos;s talk
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community stories */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Community stories"
            title="People behind the numbers"
            subtitle="Impact only counts if it changes lives. Here are a few of those stories."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * i}>
                <div className="group h-full overflow-hidden rounded-3xl border border-brand-green/10 bg-surface shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-green/30 hover:shadow-lift">
                  <div className={`relative flex h-40 items-end bg-gradient-to-br ${s.tint} p-5`}>
                    <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
                    <span className="relative rounded-full bg-white/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25 backdrop-blur">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold leading-snug text-brand-ink transition-colors group-hover:text-brand-green-dark">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-brand-ink/60">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="text-[15px] text-brand-ink/55">
              Share your own Ecotech story with us on{" "}
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-green-dark underline-offset-4 hover:underline">
                Facebook
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
