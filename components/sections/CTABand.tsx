import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Forest CTA band — closing call to action on the home page. */
export default function CTABand() {
  return (
    <section id="contact" className="bg-forest py-[90px] text-center text-paper">
      <div className="wrap">
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] tracking-tight">
          Let&apos;s build what&apos;s next.
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-paper/75">
          Whether you need a trading partner, a consultancy engagement, or a technology platform —
          our four divisions work together to move your business forward.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-[2px] bg-paper px-[22px] py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-soft"
          >
            Explore Our Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-[2px] border border-paper/35 px-[22px] py-3.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
          >
            See Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
