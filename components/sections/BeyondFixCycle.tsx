import Link from "next/link";
import { ArrowUpRight, BadgeCheck, PackageSearch, Ship, Sprout, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: "export-import-trading",
    icon: Ship,
    tint: "bg-sky-50 text-sky-600",
    title: "Export & Import Trading",
    text: "Reliable cross-border trade support — connecting Zambian businesses to regional and international markets, and bringing quality goods in.",
  },
  {
    id: "strategic-sourcing-procurement",
    icon: PackageSearch,
    tint: "bg-brand-mint text-brand-green-dark",
    title: "Strategic Sourcing & Procurement",
    text: "We source, vet and procure goods and equipment on your behalf — cutting costs, cutting delays, and cutting out the guesswork.",
  },
  {
    id: "freight-brokerage",
    icon: Truck,
    tint: "bg-amber-50 text-amber-600",
    title: "Freight Brokerage",
    text: "End-to-end freight coordination — matching your cargo with the right carriers, routes and rates, door to destination.",
  },
  {
    id: "business-consultancy-compliance",
    icon: BadgeCheck,
    tint: "bg-emerald-50 text-emerald-600",
    title: "Business Consultancy, Registration & Compliance",
    text: "From PACRA company registration to NAPSA, NHIMA and Workers' Compensation compliance — we get your business legally set up and stay compliant.",
  },
  {
    id: "green-logistics-agritech",
    icon: Sprout,
    tint: "bg-teal-50 text-teal-600",
    title: "Green Logistics & Agri-Tech",
    text: "Low-emission last-mile delivery and smart-farming market linkages — sustainability built into every mile and every harvest.",
  },
];

export default function BeyondFixCycle() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Beyond FixCycle"
          subtitle="FixCycle is our flagship — but our mission extends into trade, logistics, sourcing and business advisory across Africa."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <Link
                href={`/services#${s.id}`}
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
