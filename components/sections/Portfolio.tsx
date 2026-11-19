import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { platforms } from "@/lib/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-charcoal py-16 text-paper lg:py-24">
      <div className="wrap">
        <SectionHeading
          light
          eyebrow="Digital Platforms"
          title="FixCycle, MobiLink and Lala"
          subtitle="Digital platforms developed and supported by Ecotech Innovations Limited as part of our broader solutions portfolio."
        />
      </div>

      <div className="wrap mt-14 grid grid-cols-1 gap-px border border-paper/[0.14] bg-paper/[0.14] lg:grid-cols-3">
        {platforms.map((p) => {
          const isExternal = (p as { external?: boolean }).external;
          const common = "group flex flex-col bg-charcoal px-8 py-[38px] transition-colors duration-200 hover:bg-[#1A2020] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-lime";
          const content = (
            <>
              <span className="mb-[18px] inline-block self-start rounded-[2px] border border-lime/40 px-[9px] py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-lime">
                {p.tag}
              </span>
              <h3 className="font-display text-2xl font-bold text-paper">{p.title}</h3>
              <p className="mt-2.5 max-w-[400px] text-[14.5px] leading-relaxed text-paper/65">{p.text}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-lime opacity-90 transition-opacity duration-200 group-hover:opacity-100">
                {isExternal ? "Visit platform" : "View details"}
                {isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
              </span>
            </>
          );

          return isExternal ? (
            <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className={common}>
              {content}
            </a>
          ) : (
            <Link key={p.title} href={p.href} className={common}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
