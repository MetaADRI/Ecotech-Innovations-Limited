import Link from "next/link";
import { ArrowRight, ClipboardCheck, Package, Sprout, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: Package,
    tint: "from-forest to-teal",
    tag: "Trading",
    title: "Wholesale trading & supply",
    text: "Cement (authorized agent for Chilanga Cement PLC), maize, fuels and acids sourced and supplied, vehicle importation, consumer goods and household items.",
  },
  {
    icon: ClipboardCheck,
    tint: "from-teal to-forest",
    tag: "Consultancy & Monitoring",
    title: "Compliance and independent oversight",
    text: "Business registration and compliance (PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.) plus independent project monitoring and MVT verification.",
  },
  {
    icon: Truck,
    tint: "from-charcoal to-teal",
    tag: "Logistics",
    title: "Logistics consultancy & freight brokerage",
    text: "Coordination and management support for moving goods and meeting delivery requirements.",
  },
  {
    icon: Sprout,
    tint: "from-forest-deep to-forest",
    tag: "Agriculture & Growth",
    title: "Commodity sourcing and mining pipeline",
    text: "Agriculture commodity sourcing and supply (maize, soya beans, groundnuts, beans, rice, etc.). Mining: Coming Soon.",
  },
];

export default function UpdatesSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-forest">
            <span className="inline-block h-px w-[22px] bg-forest" aria-hidden />
            Service highlights
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            A practical partner across trading and operations
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/60">
            From sourcing and supply to compliance, monitoring and logistics, we support businesses with dependable execution.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {highlights.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i} direction="up">
              <div className="group flex h-full items-start gap-5 rounded-[2px] border border-ink/10 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lift">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] bg-gradient-to-br ${s.tint} text-white`}>
                  <s.icon className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-forest">{s.tag}</span>
                  <h3 className="mt-1 font-display text-[18px] font-bold leading-snug text-ink">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <Link href="/services" className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-forest hover:text-lime-dim">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
