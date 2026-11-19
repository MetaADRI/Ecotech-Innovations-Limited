import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { fixcycleWeb, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FixCycle",
  description: "FixCycle is a digital platform in the Ecotech Innovations Limited solutions portfolio.",
};

export default function FixCyclePage() {
  return (
    <>
      <PageHero
        crumb="FixCycle"
        eyebrow="Digital Platform"
        title="FixCycle"
        subtitle="FixCycle is part of the Ecotech Innovations Limited digital platforms portfolio, alongside MobiLink and Lala."
        actions={[
          { label: "Contact us", href: `/contact?subject=${encodeURIComponent("Digital platforms (FixCycle, MobiLink, Lala)")}`, primary: true },
          { label: "View all solutions", href: "/solutions" },
        ]}
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl space-y-8 px-5 sm:px-8">
          <Reveal>
            <div className="rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold text-ink">Platform overview</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">{fixcycleWeb.summary}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
                For partnership, product or platform enquiries, contact us at{" "}
                <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest hover:underline">{site.enquiryEmail}</a>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={fixcycleWeb.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] bg-forest px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-paper hover:bg-forest-deep"
                >
                  Open web preview <ExternalLink className="h-4 w-4" />
                </a>
                <Link href="/solutions" className="inline-flex items-center gap-2 rounded-[2px] border border-ink/20 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink hover:border-forest hover:text-forest">
                  Back to solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45">Status: {fixcycleWeb.status}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="grid gap-5 sm:grid-cols-3">
              {fixcycleWeb.pillars.map((p) => (
                <div key={p.title} className="rounded-[2px] border border-ink/10 bg-paper-soft p-6">
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
