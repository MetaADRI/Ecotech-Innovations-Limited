import { BadgeCheck, ClipboardCheck, Package, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { ButtonLink } from "@/components/Button";

export default function ImpactBand() {
  const items = [
    { icon: Package, label: "Core focus on wholesale trading & supply", value: 1, suffix: "" },
    { icon: BadgeCheck, label: "Authorized agent for Chilanga Cement PLC", value: 1, suffix: "" },
    { icon: ClipboardCheck, label: "Independent project monitoring and MVT verification", value: 1, suffix: "" },
    { icon: Truck, label: "Logistics consultancy & freight brokerage support", value: 1, suffix: "" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest to-forest-deep py-24 text-paper sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-24 top-0 h-80 w-80 animate-float-slow rounded-full bg-lime/15 blur-[100px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-[90px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-[22px] inline-flex items-center justify-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-lime">
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
            At a glance
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Reliable trading, compliance and delivery support
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            We combine wholesale trading with consultancy, independent monitoring and MVT verification, logistics and freight brokerage,
            agriculture sourcing, and digital platforms to serve customers and partners.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={0.08 * i}>
              <div className="group relative h-full overflow-hidden rounded-[2px] bg-white/[0.06] p-7 ring-1 ring-paper/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-[2px] bg-white/15 ring-1 ring-paper/25">
                  <item.icon className="h-7 w-7 text-lime" />
                </span>
                <p className="mt-5 text-center font-mono text-4xl font-bold tracking-tight text-gradient-gold">
                  <Counter to={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2.5 text-center text-[14.5px] font-medium leading-relaxed text-paper/80">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <ButtonLink href="/about" variant="white" size="lg">
            Learn more about Ecotech
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
