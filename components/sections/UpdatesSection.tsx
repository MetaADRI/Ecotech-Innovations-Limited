import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import FacebookFeed from "@/components/FacebookFeed";
import { ButtonLink } from "@/components/Button";

const stories = [
  {
    icon: Recycle,
    tint: "from-forest to-teal",
    tag: "Community",
    title: "How FixCycle is cutting unnecessary trips across Lusaka",
  },
  {
    icon: Leaf,
    tint: "from-teal to-forest",
    tag: "Green Innovation",
    title: "Meet the artisans powering Zambia's circular economy",
  },
  {
    icon: Rocket,
    tint: "from-charcoal to-teal",
    tag: "Opportunity",
    title: "Why we opened the Global Tech Volunteers door",
  },
];

export default function UpdatesSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Stories */}
          <div>
            <Reveal direction="right">
              <span className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-forest">
                <span className="inline-block h-px w-[22px] bg-forest" aria-hidden />
                Latest updates
              </span>
              <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                News from the <span className="text-forest dark:text-lime">field</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg text-ink/60">
                Milestones, community stories and green-innovation wins — fresh from our
                teams in Lusaka &amp; Ndola.
              </p>
            </Reveal>

            <div className="mt-9 space-y-5">
              {stories.map((s, i) => (
                <Reveal key={s.title} delay={0.08 * i} direction="up">
                  <Link
                    href="/blog"
                    className="group flex items-center gap-5 rounded-[2px] border border-ink/10 bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lift"
                  >
                    <span
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[2px] bg-gradient-to-br ${s.tint} text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                    >
                      <s.icon className="h-8 w-8" />
                    </span>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-forest">
                        {s.tag}
                      </span>
                      <h3 className="mt-1 font-display text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-forest">
                        {s.title}
                      </h3>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-forest/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-forest" />
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-9">
              <ButtonLink href="/blog" variant="outline-dark">
                Visit our blog
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </Reveal>
          </div>

          {/* Facebook feed */}
          <Reveal direction="left" className="lg:sticky lg:top-28">
            <FacebookFeed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
