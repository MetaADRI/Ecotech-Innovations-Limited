import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark" | "white" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white shadow-glow hover:bg-brand-green-deep hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-brand-blue text-white shadow-soft hover:bg-brand-blue-soft hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 active:translate-y-0",
  "outline-dark":
    "border-2 border-brand-ink/20 text-brand-ink hover:border-brand-green hover:text-brand-green-dark hover:-translate-y-0.5 active:translate-y-0",
  white:
    "bg-white text-brand-green-dark shadow-soft hover:bg-[#e8f7ee] hover:-translate-y-0.5 active:translate-y-0",
  gold: "bg-brand-gold text-white shadow-glow-gold hover:bg-brand-gold-light hover:text-brand-blue hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-8 py-4 text-base",
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
