"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { divisions } from "@/lib/site";
import { cn } from "@/lib/utils";

/** "What we do" — four expandable division cards (reference style). */
export default function WhatWeDo() {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) => setActive((cur) => (cur === id ? null : id));

  return (
    <section id="what-we-do" className="bg-paper py-16 text-ink lg:py-24">
      <div className="wrap">
        <SectionHeading
          eyebrow="Our Divisions"
          title="Four ways we create value"
          subtitle="Tap a division to see the full range of services within it."
        />
      </div>

      <div className="wrap mt-14 grid grid-cols-1 border border-ink/10 bg-ink/10 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {divisions.map((d) => {
          const isOpen = active === d.id;
          return (
            <div
              key={d.id}
              id={d.id}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => toggle(d.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(d.id);
                }
              }}
              className={cn(
                "flex cursor-pointer flex-col border-t-[3px] bg-paper px-[26px] py-8 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-forest",
                isOpen ? "border-t-forest bg-paper-soft" : "border-t-transparent hover:border-t-forest hover:bg-paper-soft"
              )}
            >
              <span className="mb-[18px] block font-mono text-[11.5px] tracking-[0.1em] text-sage">
                {d.code}
              </span>
              <h3 className="font-display text-xl font-bold text-ink">{d.title}</h3>
              <p className="mb-4 mt-2.5 text-[14.5px] leading-relaxed text-[#4B554C]">{d.desc}</p>

              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-forest">
                <span className={cn("inline-block transition-transform duration-200", isOpen && "rotate-180")}>
                  ▾
                </span>
                View services
              </span>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <ul className="mt-1.5 list-none border-t border-ink/10 pt-[14px]">
                    {d.services.map((s) => (
                      <li key={s} className="relative py-[5px] pl-[14px] text-[13px] text-[#3C453D]">
                        <span className="absolute left-0 text-forest">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <Link
                  href={d.href}
                  onClick={(e) => e.stopPropagation()}
                  className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-forest transition-colors hover:text-lime-dim"
                >
                  Explore division
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
