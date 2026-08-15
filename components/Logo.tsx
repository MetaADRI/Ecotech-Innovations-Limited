import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** The Ecotech "eil" brand badge — leaf + circuit mark with fixed brand colors. */
export function EilBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className} fill="none">
      <circle cx="20" cy="20" r="17" stroke="#C9A227" strokeWidth="2" />
      <path d="M13 27 C13 18 18 13 27 12 C26 21 21 26 13 27 Z" fill="#5FA646" />
      <path d="M13 27 C16 23 19 20 23 17" stroke="#F5F1E8" strokeWidth="1" />
      <rect x="15" y="22" width="7" height="7" rx="1" fill="#8A9186" />
      <path
        d="M15 21v2M17 21v2M19 21v2M15 30v-2M17 30v-2M19 30v-2M14 24h-2M14 26h-2M23 24h2M23 26h2"
        stroke="#8A9186"
        strokeWidth="1"
      />
      <path d="M28 14 L23 22 L27 22 L24 29 L31 20 L27 20 Z" fill="#2F8F92" />
    </svg>
  );
}

/** Reference-style logo: leaf badge + "eil" mark with tagline underneath. */
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const badge = size === "lg" ? "h-8 w-8" : "h-[26px] w-[26px]";
  const mark = size === "lg" ? "text-2xl" : "text-xl";
  return (
    <Link
      href="/"
      aria-label="Ecotech Innovations Limited — home"
      className="group flex shrink-0 flex-col gap-[2px]"
    >
      <span className="flex items-center gap-[9px]">
        <EilBadge className={cn(badge, "shrink-0")} />
        <span className={cn("font-display font-extrabold leading-none text-lime", mark)}>eil</span>
      </span>
      <span className="hidden font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-sage min-[480px]:block">
        {site.tagline}
      </span>
    </Link>
  );
}
