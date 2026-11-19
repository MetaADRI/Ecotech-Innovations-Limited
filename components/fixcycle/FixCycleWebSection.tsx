import Image from "next/image";
import { Car, ExternalLink, Package, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ButtonAnchor } from "@/components/Button";
import { fixcycleWeb } from "@/lib/site";

const pillarIcons = [Car, Package, Wrench];

/** Bare-bones browser chrome so the desktop shot reads as a live web app. */
function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[2px] bg-charcoal shadow-lift ring-1 ring-white/15">
      {/* Chrome */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-forest-deep px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-[2px] bg-white/[0.07] px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
          <span className="truncate font-mono text-[11px] tracking-wide text-paper/70">
            {fixcycleWeb.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </span>
      </div>
      {/* Viewport */}
      <div className="relative aspect-[16/9] w-full bg-forest-deep">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/** Phone bezel for the mobile shot. */
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[240px] rounded-[2px] bg-charcoal p-2.5 shadow-lift ring-1 ring-white/15">
      <div className="relative aspect-[828/1792] w-full overflow-hidden rounded-[2px] bg-forest-deep">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="240px"
          className="object-cover object-top"
        />
        {/* Notch */}
        <span
          className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-charcoal/90"
          aria-hidden
        />
      </div>
    </div>
  );
}

/**
 * "Under development" showcase for the FixCycle browser build. The link to the
 * live preview stays clickable so visitors can try it, while the copy makes
 * clear the platform is still a work in progress.
 */
export default function FixCycleWebSection() {
  return (
    <section
      id="web-version"
      className="relative scroll-mt-24 overflow-hidden bg-forest-deep py-20 sm:py-28"
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-teal/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-lime/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Now in the browser"
          title="FixCycle on the web"
          subtitle={fixcycleWeb.summary}
        />

        {/* Status + CTA */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2.5 rounded-[2px] bg-lime px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-forest-deep">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forest-deep" aria-hidden />
              {fixcycleWeb.status}
            </span>

            <ButtonAnchor
              href={fixcycleWeb.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
            >
              Open the web app
              <ExternalLink className="h-4 w-4" />
            </ButtonAnchor>

            <p className="font-mono text-[12px] tracking-wide text-paper/45">
              {fixcycleWeb.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} — free to try, no
              install required
            </p>
          </div>
        </Reveal>

        {/* Screenshots — drop real captures into /public using the same names */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.55fr_0.75fr]">
          <Reveal>
            <BrowserFrame
              src={fixcycleWeb.desktopShot}
              alt="FixCycle web app on a desktop browser"
            />
            <p className="mt-4 text-center font-mono text-[11.5px] uppercase tracking-[0.12em] text-paper/40">
              Desktop
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <PhoneFrame
              src={fixcycleWeb.mobileShot}
              alt="FixCycle web app on a mobile phone"
            />
            <p className="mt-4 text-center font-mono text-[11.5px] uppercase tracking-[0.12em] text-paper/40">
              Mobile
            </p>
          </Reveal>
        </div>

        {/* What the web version covers */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {fixcycleWeb.pillars.map((p, i) => {
            const Icon = pillarIcons[i] ?? Wrench;
            return (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="h-full rounded-[2px] border border-white/12 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-lime/40 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[2px] bg-lime/15 text-lime">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-paper">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/65">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
