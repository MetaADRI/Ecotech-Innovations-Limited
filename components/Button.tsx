import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark" | "white" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-[2px] font-mono font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-forest-deep shadow-glow hover:-translate-y-0.5 hover:bg-lime-dim active:translate-y-0",
  secondary:
    "bg-forest text-paper shadow-soft hover:-translate-y-0.5 hover:bg-forest-deep active:translate-y-0",
  "outline-light":
    "border border-paper/35 text-paper backdrop-blur-sm hover:-translate-y-0.5 hover:border-lime hover:text-lime active:translate-y-0",
  "outline-dark":
    "border border-ink/25 text-ink hover:-translate-y-0.5 hover:border-lime-dim hover:text-lime-dim active:translate-y-0",
  white:
    "bg-paper text-forest-deep shadow-soft hover:-translate-y-0.5 hover:bg-paper-soft active:translate-y-0",
  gold: "bg-lime text-forest-deep shadow-glow-gold hover:-translate-y-0.5 hover:bg-lime-dim active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11.5px]",
  md: "px-[22px] py-3 text-[12.5px]",
  lg: "px-7 py-3.5 text-[13px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Renders a Next <Link> styled as a brand button. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link> & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

/** Renders a plain <a> (for external links) styled as a brand button. */
export function ButtonAnchor({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a"> & { href: string }) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </a>
  );
}

/** Renders a <button> styled as a brand button (for forms etc.). */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
