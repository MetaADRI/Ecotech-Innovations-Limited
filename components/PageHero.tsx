"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
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

/** Inner-page hero banner styled like the reference hero (forest radial gradient). */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  actions,
  logo,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  actions?: HeroAction[];
  logo?: { src: string; alt: string; width?: number; height?: number };
}) {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-14 text-paper lg:pb-20 lg:pt-[104px]"
      style={{
        background:
          "radial-gradient(120% 140% at 15% 0%, #1B4640 0%, #0F2E28 46%, #12332E 100%)",
      }}
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime/15 blur-[110px]"
        aria-hidden
      />

      <div className="wrap relative">
        {/* Optional logo — positioned far right */}
        {logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease }}
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto items-center justify-center lg:flex"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 240}
              height={logo.height ?? 240}
              className="h-auto w-[200px] xl:w-[240px]"
              style={{ filter: "drop-shadow(0 0 40px rgba(201,162,39,0.25))" }}
              priority
            />
          </motion.div>
        )}

        {/* Breadcrumb */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={anim}
          className="mb-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-paper/55"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-lime">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-lime">{crumb}</span>
        </motion.nav>

        <motion.span
          initial="hidden"
          animate="show"
          variants={anim}
          transition={{ delay: 0.12 }}
          className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-lime"
        >
          <span className="inline-block h-px w-[22px] bg-lime" aria-hidden />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={anim}
          transition={{ delay: 0.24 }}
          className="max-w-3xl font-display text-[clamp(32px,4.5vw,56px)] font-extrabold leading-[1.06] tracking-tight text-balance"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={anim}
            transition={{ delay: 0.36 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75"
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
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                )}
              </ButtonLink>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
