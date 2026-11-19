import Link from "next/link";
import { ArrowRight, BadgeCheck, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-paper"
      style={{
        background:
          "radial-gradient(120% 140% at 15% 0%, #1B4640 0%, #0F2E28 46%, #12332E 100%)",
      }}
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-32 top-24 h-96 w-96 animate-float rounded-full bg-lime/15 blur-[120px]" aria-hidden />
      <div className="absolute right-0 top-1/3 h-80 w-80 animate-float-slow rounded-full bg-teal/15 blur-[110px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 pb-0 pt-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-[120px]">
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-lime">
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
            {site.name} — Lusaka & Ndola, Zambia
          </div>
          <h1 className="font-display text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.05] tracking-tight text-balance">
            Wholesale trading, consultancy and <em className="not-italic text-lime">practical business solutions</em>.
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-paper/75">
            Our core business is wholesale trading — including cement, maize, fuels and acids (sourced and supplied),
            importation of cars, and consumer goods and household items. We also provide business consultancy and compliance,
            independent project monitoring and MVT verification, logistics management consultancy and freight brokerage,
            agriculture commodity sourcing and supply, and digital platforms.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-[2px] border border-lime/30 bg-lime/10 px-3 py-2 text-sm text-paper/90">
            <BadgeCheck className="h-4 w-4 text-lime" />
            Currently an authorized agent for Chilanga Cement PLC
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-[22px] py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-dim"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[2px] border border-paper/35 px-[22px] py-3.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
            >
              Send an Enquiry
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/70">
            <a href={`mailto:${site.enquiryEmail}`} className="inline-flex items-center gap-2 hover:text-lime">
              <Mail className="h-4 w-4" /> {site.enquiryEmail}
            </a>
            <a href={`tel:${site.phonePrimary.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-lime">
              <Phone className="h-4 w-4" /> {site.phonePrimary}
            </a>
          </div>
        </div>

        <div className="relative lg:pb-8">
          <div className="rounded-[2px] border border-paper/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime">What we do</p>
            <ul className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-paper/80">
              <li>• Wholesale trading & supply (cement, maize, fuels and acids, vehicle importation, consumer & household goods)</li>
              <li>• Business consultancy & compliance (PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.)</li>
              <li>• Independent project monitoring and MVT verification</li>
              <li>• Logistics management consultancy & freight brokerage</li>
              <li>• Agriculture commodity sourcing and supply (maize, soya beans, groundnuts, beans, rice, etc.)</li>
              <li>• Mining <span className="font-semibold text-lime">(Coming Soon)</span></li>
              <li>• Digital Platforms: FixCycle, MobiLink, Lala</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 border-t border-[#F5F1E8]/[0.14] bg-[#082720]/60">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-x-[22px] gap-y-[10px] px-5 py-[16px] font-mono text-[11.5px] uppercase tracking-[0.08em] text-paper/60 sm:px-8">
          <span><b className="font-medium text-paper">01</b> Wholesale Trading</span>
          <span className="text-lime">/</span>
          <span><b className="font-medium text-paper">02</b> Consultancy & Compliance</span>
          <span className="text-lime">/</span>
          <span><b className="font-medium text-paper">03</b> Monitoring & MVT verification</span>
          <span className="text-lime">/</span>
          <span><b className="font-medium text-paper">04</b> Logistics & Freight</span>
          <span className="text-lime">/</span>
          <span><b className="font-medium text-paper">05</b> Agriculture, Mining & Digital</span>
        </div>
      </div>
    </section>
  );
}
