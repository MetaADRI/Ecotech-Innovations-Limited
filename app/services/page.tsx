import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { agricultureCommodities, serviceGroups, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wholesale trading and supply, business consultancy and compliance, independent project monitoring and MVT verification, logistics management consultancy, freight brokerage, agriculture commodity sourcing, mining (Coming Soon), and digital platforms.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Wholesale trading at the core, supported by consultancy and operations"
        subtitle="Ecotech Innovations Limited provides trading and supply, business consultancy and compliance, independent project monitoring and MVT verification, logistics management consultancy and freight brokerage, agriculture commodity sourcing and supply, and digital platforms."
        actions={[
          { label: "Send an enquiry", href: "/contact", primary: true },
          { label: "View solutions", href: "/solutions" },
        ]}
      />

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-[2px] border border-lime/30 bg-lime/10 p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-forest">Cement supply</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink">Authorized agent for Chilanga Cement PLC</h2>
                  <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink/70">
                    As part of our wholesale trading operations, we are currently an authorized agent for Chilanga Cement PLC, supplying cement alongside other traded goods.
                  </p>
                </div>
                <Link
                  href={`/contact?subject=${encodeURIComponent("Cement (Chilanga Cement PLC)")}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[2px] bg-forest px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-forest-deep"
                >
                  Enquire about cement <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 space-y-8">
            {serviceGroups.map((group, i) => (
              <Reveal key={group.id} delay={0.04 * i}>
                <section id={group.id} className="scroll-mt-28 rounded-[2px] border border-ink/10 bg-paper p-7 shadow-soft sm:p-9">
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-forest">Service area</span>
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{group.title}</h2>
                      <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">{group.summary}</p>
                      <p className="mt-4 inline-flex items-start gap-2 rounded-[2px] bg-surface-soft px-4 py-3 text-[14px] font-medium text-ink/80 ring-1 ring-ink/10">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                        {group.highlight}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={`/contact?subject=${encodeURIComponent(group.title)}`}
                          className="inline-flex items-center gap-2 rounded-[2px] border border-ink/20 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink transition-colors hover:border-forest hover:text-forest"
                        >
                          {group.cta} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="rounded-[2px] bg-surface-soft p-6 ring-1 ring-ink/10">
                      <h3 className="font-display text-lg font-bold text-ink">Includes</h3>
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink/75">
                            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {group.id === "agriculture-mining-digital" && (
                    <div className="mt-8 grid gap-6 border-t border-ink/10 pt-8 lg:grid-cols-2">
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink">Agricultural commodities (including but not limited to)</h3>
                        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {agricultureCommodities.map((c) => (
                            <li key={c} className="flex items-center gap-2 text-[14.5px] text-ink/75">
                              <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-[2px] border border-dashed border-ink/25 bg-paper p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-forest">Mining</p>
                        <p className="mt-2 font-display text-xl font-bold text-ink">Coming Soon</p>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">
                          Mining is part of our planned growth areas. Contact us for partnership or future opportunity discussions.
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-[2px] bg-forest p-8 text-paper sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Need a specific product, service or compliance support?</h2>
              <p className="mt-3 max-w-3xl text-[15.5px] leading-relaxed text-paper/75">
                Send us your requirements for wholesale trading and supply, consultancy and compliance, independent project monitoring and MVT verification, logistics or freight brokerage.
                All enquiries are directed to {site.enquiryEmail}.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-forest-deep hover:bg-lime-dim">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`mailto:${site.enquiryEmail}`} className="inline-flex items-center gap-2 rounded-[2px] border border-paper/30 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-paper hover:border-lime hover:text-lime">
                  <Mail className="h-4 w-4" /> {site.enquiryEmail}
                </a>
                <a href={`tel:${site.phonePrimary.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-[2px] border border-paper/30 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-paper hover:border-lime hover:text-lime">
                  <Phone className="h-4 w-4" /> {site.phonePrimary}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
