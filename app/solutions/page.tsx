import type { Metadata } from "next";
import {
  ArrowRight,
  Boxes,
  CarFront,
  Check,
  FlaskConical,
  Leaf,
  Package,
  Route,
  ShieldCheck,
  Sprout,
  Tractor,
  Truck,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Green logistics, agri-tech, supply-chain innovation and research consultancy from Ecotech Innovations Limited.",
};

const sectors = [
  {
    icon: Truck,
    tint: "from-forest to-teal",
    title: "Green Logistics",
    lead: "Last-mile delivery, minus the emissions.",
    text: "We design and operate low-emission last-mile delivery models — consolidated routes, efficient vehicles and smart scheduling that keep goods moving without moving the needle on carbon.",
    points: ["Consolidated, route-optimised delivery", "Electric & low-emission options", "Real-time tracking for businesses"],
    icons: [Route, CarFront, Package],
  },
  {
    icon: Sprout,
    tint: "from-teal to-leaf",
    title: "Agri-Tech",
    lead: "Smart farming, stronger market links.",
    text: "From smart-farming support to direct market linkages, we help smallholder farmers access information, inputs and buyers — reducing waste and raising incomes across the value chain.",
    points: ["Farm data & advisory tools", "Direct-to-market linkages", "Cold-chain & storage insights"],
    icons: [Tractor, TrendingUp, Leaf],
  },
  {
    icon: Boxes,
    tint: "from-charcoal to-teal",
    title: "Supply Chain Innovation",
    lead: "Transparent, efficient, sustainable.",
    text: "We build transparent supply chains that businesses can trust — digitising flows, cutting inefficiencies and making sustainability measurable from source to shelf.",
    points: ["End-to-end traceability", "Digitised procurement flows", "Waste-reduction analytics"],
    icons: [Package, ShieldCheck, TrendingUp],
  },
  {
    icon: FlaskConical,
    tint: "from-teal to-forest",
    title: "Research & Consultancy",
    lead: "Sustainability, turned into strategy.",
    text: "Our advisory arm helps organisations measure, understand and reduce their environmental footprint — turning sustainability data into cleaner, smarter business decisions.",
    points: ["Carbon & impact assessments", "Green strategy roadmaps", "Policy & market research"],
    icons: [FlaskConical, TrendingUp, Leaf],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumb="Solutions"
        eyebrow="Diversified Sectors"
        title="Green innovation, across the value chain"
        subtitle="FixCycle is our flagship — and the same planet-first thinking powers logistics, agriculture, supply chains and research."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto space-y-24 w-full max-w-7xl px-5 sm:px-8">
          {sectors.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${flip ? "" : ""}`}
              >
                {/* Visual panel */}
                <Reveal direction={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                  <div className={`group relative overflow-hidden rounded-[2px] bg-gradient-to-br ${s.tint} p-10 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-12`}>
                    <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
                    <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-125" aria-hidden />

                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[2px] bg-white/15 ring-1 ring-white/25 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <s.icon className="h-8 w-8" />
                    </span>

                    <h3 className="relative mt-6 font-display text-3xl font-bold tracking-tight">{s.title}</h3>
                    <p className="relative mt-1 text-lg font-medium text-white/80">{s.lead}</p>

                    <div className="relative mt-8 flex gap-3">
                      {s.icons.map((Icon, j) => (
                        <span
                          key={j}
                          className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-white/15 ring-1 ring-white/20 transition-transform duration-300 hover:scale-110"
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal direction={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-forest">
                    Sector {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-ink/65">{s.text}</p>

                  <ul className="mt-7 space-y-3.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-brand-ink/75">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink href="/contact" variant="outline-dark" className="mt-8">
                    Partner with us
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sibling platforms */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-paper sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lime">
            Technology Division
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Platforms built for how Zambia actually moves, works and lives
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/65">
            The same sustainable-technology engine behind FixCycle powers two more homegrown digital platforms.
          </p>

          <div className="mt-12 grid gap-px bg-paper/15 sm:grid-cols-2">
            <div id="mobilink" className="scroll-mt-28 bg-charcoal p-8 sm:p-10">
              <span className="inline-block bg-lime px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-deep">
                Mobility &amp; Parcels
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">MobiLink</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                An intercity ride-sharing and parcel delivery platform, moving people and cargo between
                Zambia&apos;s cities more efficiently.
              </p>
              <ButtonAnchor
                href="https://eilzm.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                className="mt-8"
              >
                Visit MobiLink
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonAnchor>
            </div>

            <div id="lala" className="scroll-mt-28 bg-charcoal p-8 sm:p-10">
              <span className="inline-block bg-lime px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-deep">
                Hospitality
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">Lala</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                A mobile-first, budget accommodation booking platform via Mobile Money and WhatsApp — covering
                Lusaka, the Copperbelt and Livingstone.
              </p>
              <ButtonAnchor
                href="https://www.lalabookings.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                className="mt-8"
              >
                Visit Lala
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
