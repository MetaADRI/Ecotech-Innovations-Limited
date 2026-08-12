"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Leaf } from "lucide-react";
import { ButtonLink } from "@/components/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const anim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

type HeroAction = {
  label: string;
  href: string;
  primary?: boolean;
};

/** Inner-page hero banner with breadcrumb and decorative background. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  actions?: HeroAction[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue pb-24 pt-40 text-white">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/25 blur-[110px]"
        aria-hidden
      />
      <div
        className="absolute -left-20 top-32 h-80 w-80 rounded-full bg-brand-gold/15 blur-[100px]"
        aria-hidden
      />
      <Leaf className="absolute right-10 top-28 h-16 w-16 rotate-12 text-white/5" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={anim}
          className="mb-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/55"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-brand-green-light">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-brand-green-light">{crumb}</span>
        </motion.nav>

        <motion.span
          initial="hidden"
          animate="show"
          variants={anim}
          transition={{ delay: 0.12 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green-light ring-1 ring-white/20"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green-light" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={anim}
          transition={{ delay: 0.24 }}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={anim}
            transition={{ delay: 0.36 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {subtitle}
          </motion.p>
        )}

        {actions && actions.length > 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={anim}
            transition={{ delay: 0.48 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {actions.map((a) => (
              <ButtonLink
                key={a.label}
                href={a.href}
                variant={a.primary ? "white" : "outline-light"}
                size="lg"
              >
                {a.label}
                {a.primary && (
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                )}
              </ButtonLink>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
