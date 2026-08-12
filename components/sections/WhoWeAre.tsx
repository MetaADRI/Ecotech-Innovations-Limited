import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Store } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { site } from "@/lib/site";

const pillars = [
  { icon: Store, label: "Digital Marketplaces" },
  { icon: Leaf, label: "Green Innovation" },
  { icon: Recycle, label: "Diversified Sectors" },
];

export default function WhoWeAre() {
  const { stats } = site;

  return (
    <section id="who-we-are" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div className="bg-dots absolute right-0 top-0 h-72 w-72 opacity-60" aria-hidden />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <Reveal direction="right">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-dark ring-1 ring-brand-green/20">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Who we are
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem]">
            A Zambian company with a{" "}
            <span className="text-brand-green dark:text-brand-green-light">planet-first mindset</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">
            {site.name} designs smart, eco-friendly digital marketplaces and green solutions
            for Zambian communities. Our flagship, <strong className="text-brand-ink">FixCycle</strong>,
            connects households with verified local service providers — cutting unnecessary trips,
            boosting local livelihoods, and shrinking carbon footprints across Lusaka and Ndola.
          </p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2.5 rounded-full border border-brand-green/20 bg-brand-cream px-4 py-2.5 text-sm font-medium text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green hover:shadow-soft"
              >
                <p.icon className="h-4 w-4 text-brand-green-dark" />
                {p.label}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-green-dark transition-colors hover:text-brand-green"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { label: "Founded", value: stats.founded, suffix: "", grouping: false },
            { label: "Cities with operations", value: stats.cities, suffix: "", grouping: true },
            { label: "Verified artisans", value: stats.artisans, suffix: "+", grouping: true },
            { label: "App downloads", value: stats.downloads, suffix: "+", grouping: true },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.1 * i} direction="up">
              <div className="group relative overflow-hidden rounded-3xl border border-brand-green/10 bg-brand-cream p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-lift">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-green/10 transition-transform duration-500 group-hover:scale-150" aria-hidden />
                <p className="font-mono text-4xl font-bold tracking-tight text-brand-ink sm:text-[2.6rem]">
                  <Counter to={s.value} suffix={s.suffix} grouping={s.grouping} />
                </p>
                <p className="mt-2 text-sm font-medium text-brand-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
