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
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest to-forest-deep py-24 text-paper sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-24 top-0 h-80 w-80 animate-float-slow rounded-full bg-lime/15 blur-[100px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-[90px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-[22px] inline-flex items-center justify-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-lime">
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
            Impact highlights
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Small acts, <span className="text-gradient-gold">compounding impact</span>
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            Every FixCycle booking is one less unnecessary trip. Here&apos;s what that adds up to.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={0.1 * i}>
              <div className="group relative h-full overflow-hidden rounded-[2px] bg-white/[0.06] p-8 text-center ring-1 ring-paper/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-[2px] bg-white/15 ring-1 ring-paper/25 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-lime" />
                </span>
                <p className="mt-5 font-mono text-5xl font-bold tracking-tight text-gradient-gold">
                  <Counter to={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2.5 text-[15px] font-medium text-paper/75">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <ButtonLink href="/impact" variant="white" size="lg">
            See our full impact story
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
