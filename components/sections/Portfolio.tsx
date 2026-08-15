import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { platforms } from "@/lib/site";

/** Dark portfolio section — the innovation platforms. */
export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-charcoal py-16 text-paper lg:py-24">
      <div className="wrap">
        <SectionHeading
          light
          eyebrow="Our Innovation Portfolio"
          title="Platforms built for how Zambia actually moves, works and lives"
          subtitle="This is where our sustainable technology division comes to life — a portfolio of homegrown digital platforms, not just another trading company."
        />
      </div>

      <div className="wrap mt-14 grid grid-cols-1 gap-px border border-paper/[0.14] bg-paper/[0.14] lg:grid-cols-3">
        {platforms.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group flex flex-col bg-charcoal px-8 py-[38px] transition-colors duration-200 hover:bg-[#1A2020] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-lime"
          >
            <span className="mb-[18px] inline-block self-start rounded-[2px] border border-lime/40 px-[9px] py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-lime">
              {p.tag}
            </span>
            <h3 className="font-display text-2xl font-bold text-paper">{p.title}</h3>
            <p className="mt-2.5 max-w-[400px] text-[14.5px] leading-relaxed text-paper/65">{p.text}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-lime opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
