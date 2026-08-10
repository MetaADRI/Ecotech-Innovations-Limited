"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronDown, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col overflow-hidden bg-brand-blue text-white">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-green-deep" aria-hidden />
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] animate-float rounded-full bg-brand-green/25 blur-[120px]" aria-hidden />
      <div className="absolute right-0 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-brand-gold/15 blur-[110px]" aria-hidden />
      <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-teal/20 blur-[130px]" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div style={{ opacity: fade }} className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green-light ring-1 ring-white/20 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green-light" />
              Zambian sustainability-driven tech · Est. {site.established}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.2rem]"
            >
              Innovating Today for a{" "}
              <span className="text-gradient">Sustainable Tomorrow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            >
              We build smart, eco-friendly digital marketplaces that connect communities,
              reduce carbon footprints, and drive Africa&apos;s green economy — starting with{" "}
              <span className="font-semibold text-white">FixCycle</span>, Zambia&apos;s home-services platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="/fixcycle" size="lg">
                Explore FixCycle
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="/get-involved" variant="outline-light" size="lg">
                <Sparkles className="h-5 w-5" />
                Join Our Volunteer Team
              </ButtonLink>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
            >
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green-light" /> Vetted professionals
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-brand-green-light" /> Verified & rated
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-brand-green-light" /> Planet-first by design
              </li>
            </motion.ul>
          </motion.div>

          {/* Phone visual */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="relative mx-auto hidden lg:block"
          >
            {/* Glow behind phone */}
            <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/25 blur-[90px]" aria-hidden />
            <PhoneMockup tone="green" className="relative" />

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease }}
              className="absolute -left-14 top-16 animate-float rounded-2xl bg-white p-3.5 shadow-lift"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mint text-brand-green-dark">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-brand-ink">Pro verified</p>
                  <p className="text-[10px] text-brand-ink/50">Joseph K. · Electrician</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease }}
              className="absolute -right-16 bottom-28 animate-float-slow rounded-2xl bg-white p-3.5 shadow-lift"
            >
              <p className="font-mono text-lg font-bold text-brand-green-dark">-42 kg</p>
              <p className="text-[10px] font-medium uppercase tracking-wide text-brand-ink/50">
                CO₂ saved this week
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll prompt */}
      <motion.a
        href="#who-we-are"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to content"
      >
        <span className="flex h-12 w-12 animate-bounce-soft items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/20">
          <ChevronDown className="h-5 w-5 text-white" />
        </span>
      </motion.a>
    </section>
  );
}
