import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-[640px]",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-[22px] inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em]",
            light ? "text-lime" : "text-forest"
          )}
        >
          <span
            className={cn("inline-block h-px w-[22px]", light ? "bg-lime" : "bg-forest")}
            aria-hidden
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.15] tracking-tight",
          light ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-[520px] text-[15.5px] leading-relaxed",
            light ? "text-paper/70" : "text-sage",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
