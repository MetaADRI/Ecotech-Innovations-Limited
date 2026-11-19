import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, Package, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Focus",
  description:
    "Ecotech Innovations Limited focuses on wholesale trading, consultancy and compliance, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture commodity sourcing, and digital platforms.",
};

const focusAreas = [
  {
    icon: Package,
    title: "Wholesale Trading & Supply",
    text: "Core trading in cement (authorized agent for Chilanga Cement PLC), maize, fuels and acids sourced and supplied, vehicle importation, and consumer goods and household items.",
  },
  {
    icon: BadgeCheck,
    title: "Consultancy & Compliance",
    text: "Business registration and compliance support including PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.",
  },
  {
    icon: ClipboardCheck,
    title: "Monitoring & MVT verification",
    text: "Independent project monitoring and MVT verification to support accountability and informed decision-making.",
  },
  {
    icon: Truck,
    title: "Logistics, Agriculture & Growth",
    text: "Logistics management consultancy, freight brokerage, agriculture commodity sourcing and supply (maize, soya beans, groundnuts, beans, rice, etc.), and mining (Coming Soon).",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        crumb="Our Focus"
        eyebrow="Capabilities"
        title="Focused on dependable delivery"
        subtitle="Our work spans wholesale trading, consultancy and compliance, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture commodity sourcing, and digital platforms."
        actions={[{ label: "View services", href: "/services", primary: true }]}
      />
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we prioritize" title="Practical support across the value chain" subtitle="Clear communication, reliable coordination and compliance-aware execution." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {focusAreas.map((f, i) => (
              <Reveal key={f.title} delay={0.05 * i}>
                <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-7 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-brand-mint text-forest"><f.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-12 text-center">
            <p className="text-[15px] text-ink/60">For enquiries, contact <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest hover:underline">{site.enquiryEmail}</a>.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-[2px] bg-lime px-6 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep hover:bg-lime-dim">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
