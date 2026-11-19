import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Partner with Ecotech Innovations Limited or enquire about opportunities.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        eyebrow="Partnerships & Opportunities"
        title="Work with Ecotech Innovations"
        subtitle="We welcome enquiries from customers, suppliers, partners and collaborators across trading, consultancy and compliance, monitoring, logistics, agriculture and digital platforms."
        actions={[{ label: "Send an enquiry", href: "/contact", primary: true }]}
      />
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-brand-mint text-forest"><Handshake className="h-6 w-6" /></span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">Partnerships & supply</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink/70">
                Contact us for wholesale trading and supply opportunities (including cement as an authorized agent for Chilanga Cement PLC, fuels and acids, vehicle importation, consumer and household goods), agriculture commodity sourcing and supply, logistics and freight brokerage, or other collaboration enquiries.
              </p>
              <Link href={`/contact?subject=${encodeURIComponent("Partnership enquiry")}`} className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-forest hover:text-lime-dim">
                Partnership enquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-[2px] border border-ink/10 bg-paper p-8 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-brand-mint text-forest"><Mail className="h-6 w-6" /></span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">General opportunities</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink/70">
                For opportunities, proposals or general enquiries, please reach out to us directly by email. We review messages and respond as appropriate.
              </p>
              <a href={`mailto:${site.enquiryEmail}`} className="mt-4 inline-flex text-[15px] font-semibold text-forest hover:underline">{site.enquiryEmail}</a>
              <p className="mt-4 text-sm text-ink/55">All enquiries are directed to {site.enquiryEmail}.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}