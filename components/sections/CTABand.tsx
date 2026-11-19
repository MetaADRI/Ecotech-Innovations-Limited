import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/lib/site";

export default function CTABand() {
  return (
    <section id="contact-cta" className="bg-forest py-[90px] text-center text-paper">
      <div className="wrap">
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] tracking-tight">
          Let&apos;s discuss your trading, compliance or project needs
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[15.5px] leading-relaxed text-paper/75">
          Contact {site.shortName} for wholesale trading and supply, business consultancy and compliance, independent project monitoring and MVT verification,
          logistics management consultancy, freight brokerage, agriculture commodity sourcing, or digital platform enquiries.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[2px] bg-paper px-[22px] py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-soft"
          >
            Send an enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${site.enquiryEmail}`}
            className="inline-flex items-center gap-2 rounded-[2px] border border-paper/35 px-[22px] py-3.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            <Mail className="h-4 w-4" />
            {site.enquiryEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
