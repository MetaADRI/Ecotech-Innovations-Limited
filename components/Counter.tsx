"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

/** Animated count-up that triggers when scrolled into view. */
export default function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  grouping = true,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  /** Set to false to disable thousands separators (e.g. for years like 2021). */
  grouping?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            prefix +
            v.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
              useGrouping: grouping,
            }) +
            suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration, grouping]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
