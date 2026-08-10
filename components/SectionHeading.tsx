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
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em]",
            light ? "bg-white/10 text-brand-green-light ring-1 ring-white/20" : "bg-brand-mint text-brand-green-dark ring-1 ring-brand-green/20"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/70" : "text-brand-ink/65")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
