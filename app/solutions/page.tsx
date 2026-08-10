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
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Green logistics, agri-tech, supply-chain innovation and research consultancy from Ecotech Innovations Limited.",
};

const sectors = [
  {
    icon: Truck,
    tint: "from-brand-green to-brand-teal",
    title: "Green Logistics",
    lead: "Last-mile delivery, minus the emissions.",
    text: "We design and operate low-emission last-mile delivery models — consolidated routes, efficient vehicles and smart scheduling that keep goods moving without moving the needle on carbon.",
    points: ["Consolidated, route-optimised delivery", "Electric & low-emission options", "Real-time tracking for businesses"],
    icons: [Route, CarFront, Package],
  },
  {
    icon: Sprout,
    tint: "from-brand-teal to-brand-green-deep",
    title: "Agri-Tech",
    lead: "Smart farming, stronger market links.",
    text: "From smart-farming support to direct market linkages, we help smallholder farmers access information, inputs and buyers — reducing waste and raising incomes across the value chain.",
    points: ["Farm data & advisory tools", "Direct-to-market linkages", "Cold-chain & storage insights"],
    icons: [Tractor, TrendingUp, Leaf],
  },
  {
    icon: Boxes,
    tint: "from-brand-blue to-brand-teal",
    title: "Supply Chain Innovation",
    lead: "Transparent, efficient, sustainable.",
    text: "We build transparent supply chains that businesses can trust — digitising flows, cutting inefficiencies and making sustainability measurable from source to shelf.",
    points: ["End-to-end traceability", "Digitised procurement flows", "Waste-reduction analytics"],
    icons: [Package, ShieldCheck, TrendingUp],
  },
  {
    icon: FlaskConical,
    tint: "from-brand-gold to-brand-green-deep",
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
                  <div className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.tint} p-10 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-12`}>
                    <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
                    <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-125" aria-hidden />

                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <s.icon className="h-8 w-8" />
                    </span>

                    <h3 className="relative mt-6 font-display text-3xl font-bold tracking-tight">{s.title}</h3>
                    <p className="relative mt-1 text-lg font-medium text-white/80">{s.lead}</p>

                    <div className="relative mt-8 flex gap-3">
                      {s.icons.map((Icon, j) => (
                        <span
                          key={j}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 transition-transform duration-300 hover:scale-110"
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal direction={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand-green-dark">
                    Sector {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-ink/65">{s.text}</p>

                  <ul className="mt-7 space-y-3.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-brand-ink/75">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-green-dark">
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
    </>
  );
}
