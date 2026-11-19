import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { agricultureCommodities, milestones, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Ecotech Innovations Limited — wholesale trading, business consultancy and compliance, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture commodity sourcing, mining (Coming Soon), and digital platforms.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Company Profile"
        title="Ecotech Innovations Limited"
        subtitle="A Zambian company focused on wholesale trading and practical business solutions, with operations and partners serving customers in Lusaka, Ndola and beyond."
        actions={[{ label: "Contact us", href: "/contact", primary: true }]}
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionHeading align="left" eyebrow="Who we are" title="Trading-led, solutions-focused" subtitle={site.description} />
              <div className="mt-8 space-y-4 text-[15.5px] leading-relaxed text-ink/70">
                <p>
                  Wholesale trading is our core business. We trade and supply products including cement, maize, fuels and acids (sourced and supplied), and consumer goods and household items, and we support the importation of cars.
                  We are currently an authorized agent for <strong className="text-ink">Chilanga Cement PLC</strong>.
                </p>
                <p>
                  Beyond trading, we provide business consultancy and compliance support (including registration and compliance with PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.), independent project monitoring and <strong className="text-ink">MVT verification</strong>, logistics management consultancy, and freight brokerage.
                </p>
                <p>
                  We also source and supply agricultural commodities such as maize, soya beans, groundnuts, beans, rice, etc. Mining is part of our growth pipeline and is currently marked as <strong className="text-ink">Coming Soon</strong>. Our digital platforms include FixCycle, MobiLink and Lala.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="rounded-[2px] border border-lime/30 bg-lime/10 p-7">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-forest" />
                <h2 className="font-display text-xl font-bold text-ink">Key facts</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  "Core business: Wholesale trading",
                  "Authorized agent for Chilanga Cement PLC",
                  "Fuels and acids sourced and supplied",
                  "Business consultancy & compliance (PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.)",
                  "Independent project monitoring and MVT verification",
                  "Logistics management consultancy & freight brokerage",
                  "Mining: Coming Soon",
                  "Digital Platforms: FixCycle, MobiLink, Lala",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink/75">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[2px] bg-paper p-4 ring-1 ring-ink/10">
                <p className="text-sm font-semibold text-ink">Agricultural commodities</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{agricultureCommodities.join(", ")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-soft py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our journey" title="Milestones and focus areas" subtitle="A high-level view of our establishment and growth areas." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {milestones.map((m, i) => (
              <Reveal key={`${m.year}-${m.title}`} delay={0.05 * i}>
                <div className="h-full rounded-[2px] border border-ink/10 bg-surface p-6 shadow-soft">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-forest">{m.year}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{m.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Contact & locations" title="Reach Ecotech Innovations" subtitle="Use the details below for enquiries. Additional contact details can be provided on request." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-7 shadow-soft">
                <Mail className="h-6 w-6 text-forest" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">Email</h3>
                <a href={`mailto:${site.enquiryEmail}`} className="mt-2 block text-[15px] font-semibold text-forest hover:underline">{site.enquiryEmail}</a>
                <p className="mt-2 text-sm text-ink/60">Used for contact, enquiries and notifications.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-7 shadow-soft">
                <Phone className="h-6 w-6 text-forest" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">Phone</h3>
                <a href={`tel:${site.phonePrimary.replace(/[^+\d]/g, "")}`} className="mt-2 block text-[15px] font-semibold text-ink hover:text-forest">{site.phonePrimary}</a>
                <p className="mt-2 text-sm text-ink/60">Primary contact number.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-7 shadow-soft">
                <Building2 className="h-6 w-6 text-forest" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">Locations</h3>
                <ul className="mt-3 space-y-2 text-[14.5px] text-ink/70">
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {site.addressHeadOffice}</li>
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {site.addressBranch}</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-6 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep hover:bg-lime-dim">
              Send an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
