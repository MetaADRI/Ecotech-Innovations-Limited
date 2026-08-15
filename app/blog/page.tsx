import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Leaf, Newspaper, Recycle, Rocket } from "lucide-react";
import NewsletterForm from "@/components/forms/NewsletterForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FacebookFeed from "@/components/FacebookFeed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog & Updates",
  description:
    "Community updates, green-innovation stories and milestones from Ecotech Innovations — including our live Facebook feed.",
};

const posts = [
  {
    icon: Recycle,
    tint: "from-forest to-teal",
    date: "August 2026",
    tag: "Community",
    title: "How FixCycle is cutting unnecessary trips across Lusaka",
    excerpt:
      "By pairing customers with nearby verified pros and bundling jobs, FixCycle keeps thousands of vehicles off the road — and tonnes of CO₂ out of the air.",
  },
  {
    icon: Leaf,
    tint: "from-teal to-forest",
    date: "July 2026",
    tag: "Green Innovation",
    title: "Meet the artisans powering Zambia's circular economy",
    excerpt:
      "From appliance repairs to rewiring, FixCycle Pro artisans are keeping goods in circulation — and building real, dependable livelihoods.",
  },
  {
    icon: Rocket,
    tint: "from-charcoal to-teal",
    date: "June 2026",
    tag: "Opportunity",
    title: "Why we opened the Global Tech Volunteers door",
    excerpt:
      "A small team, a big mission, and a worldwide invite to help build Africa's next impact platform. Here's what volunteers can expect.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="News & Impact Hub"
        title="Updates, stories & milestones"
        subtitle="Fresh from our teams in Lusaka & Ndola — plus the live Facebook feed so you never miss a post."
      />

      {/* Featured stories */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Featured stories" title="Long reads & big moments" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-ink/10 bg-surface shadow-soft dark:ring-1 dark:ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-ink/25 hover:shadow-lift">
                  <div className={`relative flex h-44 items-end bg-gradient-to-br ${p.tint} p-5`}>
                    <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-[2px] bg-white/20 text-white ring-1 ring-white/25 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <p.icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
                      <span className="text-forest">{p.tag}</span>
                      <span className="flex items-center gap-1.5 text-brand-ink/40">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {p.date}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-brand-ink transition-colors group-hover:text-forest">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-ink/60">{p.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-lime">
                      Read the story
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feed + sidebar */}
      <section className="bg-paper-soft py-24 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Live feed"
              title="Straight from our Facebook"
              subtitle="The page plugin updates automatically — community news, green stories and milestone moments."
            />
            <Reveal direction="up" delay={0.15} className="mt-10">
              <FacebookFeed height={600} />
            </Reveal>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Newsletter */}
            <Reveal direction="left">
              <div className="rounded-[2px] bg-gradient-to-br from-forest via-forest-deep to-charcoal p-8 text-white shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-white/15 ring-1 ring-white/25">
                  <Newspaper className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">Never miss an update</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Monthly impact digests, product news and volunteer calls — straight to your inbox.
                </p>
                <div className="mt-5">
                  <NewsletterForm dark />
                </div>
              </div>
            </Reveal>

            {/* Follow cards */}
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-[2px] bg-surface p-6 shadow-soft ring-1 ring-black/5 dark:ring-white/10">
                <h3 className="font-display text-lg font-bold text-brand-ink">Follow us</h3>
                <div className="mt-4 space-y-3">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-[2px] bg-[#1877F2]/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1877F2]/20"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#1877F2] text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-brand-ink">Ecotech Innovations</p>
                      <p className="text-sm text-brand-ink/50">Facebook · Community updates</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-ink/30 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-[2px] bg-[#0A66C2]/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A66C2]/20"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#0A66C2] text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-brand-ink">Ecotech Innovations Limited</p>
                      <p className="text-sm text-brand-ink/50">LinkedIn · Professional profile</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-ink/30 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
