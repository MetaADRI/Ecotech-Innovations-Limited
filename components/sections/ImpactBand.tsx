import { ArrowRight, CloudFog, HandCoins, Home } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export default function ImpactBand() {
  const items = [
    {
      icon: CloudFog,
      label: "Tonnes of CO₂ reduced",
      value: site.stats.co2Tonnes,
      suffix: "+",
    },
    {
      icon: HandCoins,
      label: "Jobs created for artisans",
      value: site.stats.jobsCreated,
      suffix: "+",
    },
    {
      icon: Home,
      label: "Homes served",
      value: site.stats.homesServed,
      suffix: "+",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green via-brand-green to-brand-green-deep py-24 text-white sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-24 top-0 h-80 w-80 animate-float-slow rounded-full bg-brand-gold/20 blur-[100px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-[90px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/25">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Impact highlights
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Small acts, <span className="text-gradient-gold">compounding impact</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Every FixCycle booking is one less unnecessary trip. Here&apos;s what that adds up to.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={0.1 * i}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/20 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </span>
                <p className="mt-5 font-mono text-5xl font-bold tracking-tight">
                  <Counter to={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2.5 text-[15px] font-medium text-white/75">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <ButtonLink href="/impact" variant="white" size="lg">
            See our full impact story
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
