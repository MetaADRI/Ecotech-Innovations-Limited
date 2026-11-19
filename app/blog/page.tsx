import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Updates",
  description: "Updates and announcements from Ecotech Innovations Limited.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Updates"
        eyebrow="News"
        title="Updates and announcements"
        subtitle="Company updates, service information and announcements from Ecotech Innovations Limited."
      />
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft text-center sm:p-12">
              <h2 className="font-display text-2xl font-bold text-ink">Updates coming soon</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink/70">
                We’re preparing updates on our trading, consultancy and compliance, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture sourcing, and digital platform activities.
              </p>
              <p className="mt-4 text-[15px] text-ink/70">
                For the latest information or specific enquiries, please contact us at{" "}
                <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-forest hover:underline">{site.enquiryEmail}</a>.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-6 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep hover:bg-lime-dim">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`mailto:${site.enquiryEmail}`} className="inline-flex items-center gap-2 rounded-[2px] border border-ink/20 px-6 py-3.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink hover:border-forest hover:text-forest">
                  <Mail className="h-4 w-4" /> Email us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
