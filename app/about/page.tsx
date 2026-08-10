import type { Metadata } from "next";
import { Building2, Eye, Heart, Leaf, Lightbulb, MapPin, Target, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { site, milestones } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission and vision of Ecotech Innovations — a Zambian sustainability-driven technology company founded in 2021, with operations in Lusaka and Ndola.",
};

const team = [
  { initials: "EO", name: "Chief Executive Officer", role: "Founder & CEO", tint: "from-brand-green to-brand-teal" },
  { initials: "CT", name: "Technology Lead", role: "Engineering & Product", tint: "from-brand-blue to-brand-teal" },
  { initials: "OP", name: "Operations Lead", role: "Lusaka & Ndola", tint: "from-brand-teal to-brand-green-deep" },
  { initials: "CM", name: "Community Lead", role: "Volunteers & Partners", tint: "from-brand-gold to-brand-green" },
];

const values = [
  { icon: Leaf, title: "Planet first", text: "Every product decision starts with its environmental impact." },
  { icon: Users, title: "Community driven", text: "Built with — not just for — the people we serve." },
  { icon: Lightbulb, title: "Relentless innovation", text: "Small, fast, and always learning. Africa needs builders." },
  { icon: Heart, title: "Integrity", text: "Transparent pricing, fair pay for artisans, honest impact data." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Built in Zambia, for a Greener World."
        subtitle={`From a Lusaka idea in ${site.established} to a two-city platform connecting homes with trusted service providers — this is who we are and where we're headed.`}
      />

      {/* Mission & Vision */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-green to-brand-green-deep p-9 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-11">
              <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
              <Target className="absolute -bottom-8 -right-8 h-44 w-44 text-white/10 transition-transform duration-700 group-hover:rotate-12" aria-hidden />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Target className="h-7 w-7" />
              </span>
              <h2 className="relative mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Mission</h2>
              <p className="relative mt-4 text-[16px] leading-relaxed text-white/85">
                To build smart, eco-friendly digital marketplaces and green solutions that
                connect Zambian communities, create dignified work, and measurably reduce
                carbon footprints — proving that technology can be both profitable and planetary.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-teal p-9 text-white shadow-lift transition-transform duration-500 hover:-translate-y-2 sm:p-11">
              <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden />
              <Eye className="absolute -bottom-8 -right-8 h-44 w-44 text-white/10 transition-transform duration-700 group-hover:rotate-12" aria-hidden />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Eye className="h-7 w-7" />
              </span>
              <h2 className="relative mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">Our Vision</h2>
              <p className="relative mt-4 text-[16px] leading-relaxed text-white/85">
                A Zambia — and an Africa — where sustainable innovation is the default: every
                household has access to trusted services, every artisan can earn digitally,
                and every business measures the good it does for the planet.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we stand for" title="Values that keep us grounded" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="group h-full rounded-3xl border border-brand-green/10 bg-brand-cream p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-lift">
                  <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">{v.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-ink/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-brand-cream py-24 sm:py-28">
        <div className="bg-dots absolute left-0 top-10 h-64 w-64 opacity-60" aria-hidden />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones on the road so far"
            subtitle="From founding team to two cities — the steps that shaped Ecotech Innovations."
          />

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand-green via-brand-teal to-brand-gold sm:left-1/2" aria-hidden />

            <div className="space-y-12">
              {milestones.map((m, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={m.year} direction={left ? "right" : "left"}>
                    <div className={`relative flex sm:w-1/2 ${left ? "sm:pr-14" : "sm:ml-auto sm:pl-14"} pl-14 sm:pl-0 ${left ? "sm:pl-0" : ""}`}>
                      {/* Dot */}
                      <span
                        className={`absolute left-5 top-1.5 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center ${
                          left ? "sm:left-auto sm:right-0 sm:translate-x-1/2" : "sm:left-0"
                        }`}
                      >
                        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-brand-green/40" />
                        <span className="relative h-3.5 w-3.5 rounded-full bg-brand-green ring-4 ring-white" />
                      </span>

                      <div className={`${left ? "sm:ml-auto" : ""} w-full rounded-3xl bg-surface p-7 shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift`}>
                        <span className="font-mono text-sm font-bold tracking-widest text-brand-green-dark">
                          {m.year}
                        </span>
                        <h3 className="mt-2 font-display text-xl font-bold text-brand-ink">{m.title}</h3>
                        <p className="mt-2.5 leading-relaxed text-brand-ink/60">{m.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The people"
            title="Small team, big ambitions"
            subtitle="You're here too — Ecotech is a growing family of developers, dreamers and doers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={0.08 * i}>
                <div className="group h-full rounded-3xl border border-brand-green/10 bg-brand-cream p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-lift">
                  <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} font-display text-2xl font-bold text-white shadow-soft ring-4 ring-white transition-transform duration-300 group-hover:scale-110`}>
                    {t.initials}
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold text-brand-ink">{t.name}</h3>
                  <p className="mt-1 text-sm text-brand-ink/55">{t.role}</p>
                </div>
              </Reveal>
            ))}

            {/* You card */}
            <Reveal delay={0.32}>
              <div className="group flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-brand-green/40 bg-brand-mint/50 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand-green-dark shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-9 w-9" />
                </span>
                <h3 className="mt-5 font-display text-[17px] font-bold text-brand-ink">You</h3>
                <p className="mt-1 text-sm text-brand-ink/55">
                  Team members, volunteers &amp; partners — <span className="font-semibold text-brand-green-dark">join us</span>.
                </p>
                <ButtonLink href="/get-involved" size="sm" className="mt-4">
                  Get involved
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-brand-cream py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where to find us"
            title="Lusaka & Ndola"
            subtitle="Two cities, one mission. Drop by, call, or follow us online."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              { city: "Lusaka", note: "Head Office", q: "Lusaka, Zambia", phone: site.phoneLusaka },
              { city: "Ndola", note: "Branch Office", q: "Ndola, Zambia", phone: site.phoneNdola },
            ].map((loc, i) => (
              <Reveal key={loc.city} direction={i === 0 ? "left" : "right"}>
                <div className="overflow-hidden rounded-3xl bg-surface shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:shadow-lift">
                  <iframe
                    title={`Map of ${loc.city}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.q)}&z=11&output=embed`}
                    className="h-72 w-full border-0 grayscale-[35%] transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="flex items-center justify-between gap-4 p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint text-brand-green-dark">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-brand-ink">{loc.city}</h3>
                        <p className="text-sm text-brand-ink/55">{loc.note}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 rounded-full bg-brand-mint px-3.5 py-2 font-mono text-xs font-semibold text-brand-green-dark">
                      <Building2 className="h-3.5 w-3.5" />
                      {loc.phone}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
