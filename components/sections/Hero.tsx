import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <div
        className="absolute -left-32 top-24 h-96 w-96 animate-float rounded-full bg-lime/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 animate-float-slow rounded-full bg-teal/15 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 pb-0 pt-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-[120px]">
        {/* Copy */}
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-lime">
            <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
            eil · Ecotech Innovations Limited · Ndola, Zambia
          </div>
          <h1 className="font-display text-[clamp(38px,5.4vw,68px)] font-extrabold leading-[1.04] tracking-tight text-balance">
            Innovating today for a <em className="not-italic text-lime">sustainable</em> tomorrow.
          </h1>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-paper/75">
            We deliver trading, consultancy, sustainable technology and logistics solutions that
            help businesses operate smarter, grow efficiently and transition toward a sustainable
            future.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[2px] bg-lime px-[22px] py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-dim"
            >
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[2px] border border-paper/35 px-[22px] py-3.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Network visual (reference illustration) */}
        <div className="relative h-[280px] lg:h-[420px]" aria-hidden="true">
          <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path className="hero-route-solid hero-draw" d="M40,340 C120,300 140,200 90,140 C60,100 100,60 160,60" />
            <path className="hero-route hero-draw" d="M40,340 L200,260 L260,320 L380,200" />
            <path className="hero-route-solid hero-draw" d="M160,60 C220,60 240,120 300,120 C350,120 370,170 340,220" />
            <path className="hero-route hero-draw" d="M300,120 L260,320" />
            <path className="hero-route-solid hero-draw" d="M200,260 C170,200 190,140 160,60" />
            <circle className="hero-node hero-pulse" cx="40" cy="340" r="5" />
            <circle className="hero-node hero-pulse" cx="160" cy="60" r="4" style={{ animationDelay: "0.3s" }} />
            <circle className="hero-node hero-pulse" cx="300" cy="120" r="6" style={{ animationDelay: "0.6s" }} />
            <circle className="hero-node hero-pulse" cx="380" cy="200" r="4" style={{ animationDelay: "0.9s" }} />
            <circle className="hero-node hero-pulse" cx="260" cy="320" r="5" style={{ animationDelay: "1.2s" }} />
            <circle className="hero-node hero-pulse" cx="200" cy="260" r="4" style={{ animationDelay: "1.5s" }} />
            <circle className="hero-node hero-pulse" cx="340" cy="220" r="3.5" style={{ animationDelay: "1.8s" }} />
            <circle className="hero-node hero-pulse" cx="90" cy="140" r="3.5" style={{ animationDelay: "2.1s" }} />
          </svg>
        </div>
      </div>

      {/* Divisions strip */}
      <div className="relative z-10 border-t border-[#F5F1E8]/[0.14] bg-[#082720]/60">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-x-[30px] gap-y-[14px] px-5 py-[18px] font-mono text-[12px] uppercase tracking-[0.1em] text-paper/60 sm:px-8">
          <span>
            <b className="font-medium text-paper">01</b> Trading &amp; Supply
          </span>
          <span className="text-lime">/</span>
          <span>
            <b className="font-medium text-paper">02</b> Business Consultancy
          </span>
          <span className="text-lime">/</span>
          <span>
            <b className="font-medium text-paper">03</b> Sustainable Technology
          </span>
          <span className="text-lime">/</span>
          <span>
            <b className="font-medium text-paper">04</b> Logistics &amp; Mobility
          </span>
        </div>
      </div>
    </section>
  );
}
