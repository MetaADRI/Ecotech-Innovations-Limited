"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function TestimonialCarousel() {
  const items = site.testimonials;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const item = items[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-surface p-8 shadow-lift ring-1 ring-black/5 dark:ring-white/10 sm:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-mint" aria-hidden />

        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex gap-1 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl font-medium leading-relaxed text-brand-ink sm:text-2xl">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-teal font-display text-sm font-bold text-white">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold text-brand-ink">{item.name}</p>
                <p className="text-sm text-brand-ink/55">{item.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-brand-ink shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all hover:-translate-y-0.5 hover:text-brand-green-dark"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-brand-green" : "w-2.5 bg-brand-green/25 hover:bg-brand-green/50"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-brand-ink shadow-soft ring-1 ring-black/5 dark:ring-white/10 transition-all hover:-translate-y-0.5 hover:text-brand-green-dark"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
