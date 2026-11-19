import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FixCycle Pro",
  description: "FixCycle Pro is part of the FixCycle digital platform in the Ecotech Innovations Limited portfolio.",
};

export default function FixCycleProPage() {
  return (
    <>
      <PageHero
        crumb="FixCycle Pro"
        eyebrow="Digital Platform"
        title="FixCycle Pro"
        subtitle="FixCycle Pro is associated with the FixCycle platform within Ecotech Innovations Limited’s digital solutions portfolio."
        actions={[
          { label: "Platform enquiries", href: `/contact?subject=${encodeURIComponent("Digital platforms (FixCycle, MobiLink, Lala)")}`, primary: true },
        ]}
      />
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold text-ink">About FixCycle Pro</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
                FixCycle Pro forms part of our FixCycle digital platform offering. For current availability, partnerships or related enquiries, please contact us.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
                Email: <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest hover:underline">{site.enquiryEmail}</a>
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/fixcycle" className="inline-flex items-center gap-2 rounded-[2px] bg-forest px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-paper hover:bg-forest-deep">
                  View FixCycle <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/solutions" className="inline-flex items-center gap-2 rounded-[2px] border border-ink/20 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink hover:border-forest hover:text-forest">
                  All solutions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
