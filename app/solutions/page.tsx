import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { platforms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Digital platforms and solutions by Ecotech Innovations Limited, including FixCycle, MobiLink and Lala.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumb="Solutions"
        eyebrow="Digital Platforms"
        title="Digital platforms supporting access, mobility and services"
        subtitle="Alongside our core trading, consultancy and operations services, Ecotech Innovations Limited develops and supports digital platforms including FixCycle, MobiLink and Lala."
        actions={[
          { label: "Contact us", href: "/contact", primary: true },
          { label: "View services", href: "/services" },
        ]}
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Platform portfolio"
            title="FixCycle, MobiLink and Lala"
            subtitle="Each platform addresses a specific service or access need and forms part of our broader solutions offering."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {platforms.map((p, i) => {
              const isExternal = (p as { external?: boolean }).external;
              return (
                <Reveal key={p.id} delay={0.06 * i}>
                  <div id={p.id} className="flex h-full flex-col rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft">
                    <span className="inline-flex self-start rounded-[2px] border border-lime/40 bg-lime/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-forest">
                      {p.tag}
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-bold text-ink">{p.title}</h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{p.text}</p>
                    <div className="mt-7">
                      {isExternal ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-forest hover:text-lime-dim"
                        >
                          Visit {p.title} <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link href={p.href} className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-forest hover:text-lime-dim">
                          View {p.title} <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2px] bg-forest p-8 text-paper">
                <h3 className="font-display text-xl font-bold">Solutions aligned with our operations</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/75">
                  Our digital platforms complement our wider work in wholesale trading and supply, business consultancy and compliance,
                  independent project monitoring and MVT verification, logistics management consultancy and freight brokerage, and agriculture commodity sourcing and supply.
                </p>
              </div>
              <div className="rounded-[2px] border border-ink/10 bg-paper-soft p-8">
                <h3 className="font-display text-xl font-bold text-ink">Discuss a partnership or platform enquiry</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                  For enquiries related to FixCycle, MobiLink, Lala or other solution opportunities, contact us at {site.enquiryEmail}.
                </p>
                <Link href={`/contact?subject=${encodeURIComponent("Digital platforms (FixCycle, MobiLink, Lala)")}`} className="mt-5 inline-flex items-center gap-2 rounded-[2px] bg-lime px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-forest-deep hover:bg-lime-dim">
                  Platform enquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
