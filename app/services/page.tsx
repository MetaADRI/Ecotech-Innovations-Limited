import type { Metadata } from "next";
import {
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  CarFront,
  Check,
  ClipboardCheck,
  Handshake,
  Landmark,
  Leaf,
  PackageSearch,
  Phone,
  Route,
  Scale,
  Ship,
  Sprout,
  Tractor,
  Truck,
  Warehouse,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Export & import trading, strategic sourcing & procurement, freight brokerage, and business registration & compliance from Ecotech Innovations Limited — plus green-tech platforms like FixCycle.",
};

const services = [
  {
    id: "export-import-trading",
    icon: Ship,
    tint: "from-brand-blue to-brand-teal",
    title: "Export & Import Trading",
    headline: "Moving goods across borders, without the headaches",
    text: "We facilitate the export and import of goods for businesses and individuals — handling documentation, coordination and logistics so your trade moves smoothly from origin to destination. Whether you're bringing equipment into Zambia or moving local products into regional markets, we manage the process end to end.",
    points: [
      "Import and export coordination",
      "Trade documentation support",
      "Supplier and buyer connections across regional markets",
      "Customs and clearance guidance",
    ],
    icons: [ArrowLeftRight, Warehouse, Handshake],
    cta: "Request a Trade Quote",
    subject: "Export & Import Trading",
    href: null,
  },
  {
    id: "strategic-sourcing-procurement",
    icon: PackageSearch,
    tint: "from-brand-gold to-brand-green-deep",
    title: "Strategic Sourcing & Procurement",
    headline: "The right goods, the right suppliers, the right price",
    text: "We help businesses and organisations source what they need — from equipment and industrial supplies to bulk goods — by tapping into vetted local and international supplier networks. We handle the sourcing legwork so you get quality, cost-efficiency and reliability without the back-and-forth.",
    points: [
      "Supplier identification and vetting",
      "Competitive quotation and price benchmarking",
      "Online goods procurement and importation",
      "Order tracking and delivery coordination",
    ],
    icons: [PackageSearch, Scale, ClipboardCheck],
    cta: "Start a Procurement Request",
    subject: "Strategic Sourcing & Procurement",
    href: null,
  },
  {
    id: "freight-brokerage",
    icon: Truck,
    tint: "from-brand-green to-brand-teal",
    title: "Freight Brokerage",
    headline: "Your cargo, matched with the right route",
    text: "We connect shippers with reliable carriers — coordinating freight movement across road and regional trade corridors. Our brokerage service takes the guesswork out of logistics: better rates, dependable transit times, and one point of contact from pickup to delivery.",
    points: [
      "Carrier sourcing and rate negotiation",
      "Freight coordination and shipment tracking",
      "Domestic and cross-border cargo movement",
      "Logistics planning for bulk and time-sensitive goods",
    ],
    icons: [Truck, Route, CarFront],
    cta: "Get a Freight Quote",
    subject: "Freight Brokerage",
    href: null,
  },
  {
    id: "business-consultancy-compliance",
    icon: BadgeCheck,
    tint: "from-brand-blue to-brand-green-deep",
    title: "Business Consultancy, Registration & Compliance",
    headline: "Get set up right — and stay compliant",
    text: "Starting or running a business in Zambia comes with regulatory steps that are easy to get wrong. We handle the registration and compliance process so you can focus on running your business, not paperwork.",
    points: [
      "PACRA company registration",
      "NAPSA registration",
      "NHIMA registration",
      "Workers' Compensation Fund registration",
      "Ongoing compliance and advisory support",
    ],
    icons: [Landmark, BadgeCheck, ClipboardCheck],
    cta: "Book a Consultation",
    subject: "Business Consultancy & Compliance",
    href: null,
  },
  {
    id: "green-logistics-agritech",
    icon: Sprout,
    tint: "from-brand-teal to-brand-green-deep",
    title: "Green Logistics & Agri-Tech",
    headline: "Sustainability built into every mile",
    text: "Low-emission last-mile delivery and smart-farming market linkages that put more value in local hands while reducing environmental impact.",
    points: [
      "Low-emission last-mile delivery",
      "Smart-farming support and advisory",
      "Direct-to-market linkages for farmers",
    ],
    icons: [Sprout, Leaf, Tractor],
    cta: "Learn More",
    subject: null,
    href: "/solutions",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Trade, sourcing, logistics and business support — built for Africa's growing economy"
        subtitle="Ecotech Innovations Limited helps businesses move goods, source smart, and stay compliant — while our green-tech platforms serve everyday Zambian households. One company, two engines of impact."
        actions={[
          { label: "Talk to Our Team", href: "/contact", primary: true },
          { label: "See FixCycle", href: "/fixcycle" },
        ]}
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-24 px-5 sm:px-8">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            const ctaHref = s.href ?? `/contact?subject=${encodeURIComponent(s.subject ?? "")}`;
            return (
              <div key={s.title} id={s.id} className="scroll-mt-28">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  {/* Visual panel */}
                  <Reveal direction={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                    <div
                      className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.tint} p-10 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-12`}
                    >
                      <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
                      <div
                        className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-125"
                        aria-hidden
                      />

                      <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <s.icon className="h-8 w-8" />
                      </span>

                      <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="relative mt-2 text-lg font-medium text-white/80">{s.headline}</p>

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
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                      {s.headline}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-brand-ink/65">{s.text}</p>

                    <h3 className="mt-7 font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-ink/45">
                      What we handle
                    </h3>
                    <ul className="mt-4 space-y-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[15px] text-brand-ink/75">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-green-dark">
                            <Check className="h-3 w-3" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <ButtonLink href={ctaHref} variant="outline-dark" className="mt-8">
                      {s.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </ButtonLink>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden bg-brand-blue py-24 text-white sm:py-28">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div
          className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-green/25 blur-[110px]"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-gold/15 blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            light
            eyebrow="Let's work together"
            title="Have a business need that doesn't fit in a box?"
            subtitle="Whether it's a one-off import, an ongoing sourcing partnership, or getting your company registered — our team is ready to help."
          />

          <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" variant="white" size="lg">
              Contact Our Team
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={`tel:${site.phoneLusaka.replace(/[^+\d]/g, "")}`} variant="outline-light" size="lg">
              <Phone className="h-5 w-5" />
              Call {site.phoneLusaka}
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
