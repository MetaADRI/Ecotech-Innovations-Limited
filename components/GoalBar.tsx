"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

/** Animated sustainability goal progress bar. */
export default function GoalBar({
  label,
  value,
  caption,
  delay = 0,
}: {
  label: string;
  value: number;
  caption: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <div className="mb-2.5 flex items-end justify-between gap-4">
          <p className="font-medium text-brand-ink">{label}</p>
          <p className="font-mono text-lg font-bold text-forest">{value}%</p>
        </div>
        <div className="h-3.5 overflow-hidden rounded-[2px] bg-forest/10 ring-1 ring-forest/15">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-[2px] bg-gradient-to-r from-forest via-teal to-lime"
          />
        </div>
        <p className="mt-2 text-sm text-brand-ink/50">{caption}</p>
      </div>
    </Reveal>
  );
}
