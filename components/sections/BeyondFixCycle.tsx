import Link from "next/link";
import { ArrowUpRight, Boxes, FlaskConical, Sprout, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const sectors = [
  {
    icon: Truck,
    tint: "bg-brand-mint text-brand-green-dark",
    title: "Green Logistics",
    text: "Low-emission last-mile delivery that moves goods without moving the needle on carbon.",
  },
  {
    icon: Sprout,
    tint: "bg-emerald-50 text-emerald-600",
    title: "Agri-Tech",
    text: "Smart-farming support and market linkages that put more value in farmers' hands.",
  },
  {
    icon: Boxes,
    tint: "bg-sky-50 text-sky-600",
    title: "Supply Chain Innovation",
    text: "Transparent, efficient supply chains built for reliability and sustainability.",
  },
  {
    icon: FlaskConical,
    tint: "bg-amber-50 text-amber-600",
    title: "Research & Consultancy",
    text: "Sustainability advisory that turns data into cleaner, smarter business decisions.",
  },
];

export default function BeyondFixCycle() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beyond FixCycle"
          title="Green innovation across sectors"
          subtitle="FixCycle is our flagship — but the mission extends into logistics, agriculture, supply chains and research."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <Link
                href="/solutions"
                className="group flex h-full flex-col rounded-3xl border border-brand-green/10 bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-green/30 hover:shadow-lift"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.tint} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-ink/60">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark transition-colors group-hover:text-brand-green">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
