import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Ecotech logo in a clean white tile (the source logo sits on a light background). */
export default function Logo({ light = false, size = "md" }: { light?: boolean; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-11 w-11 rounded-xl";
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Ecotech Innovations — home">
      <span
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-white shadow-soft ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.04]",
          box
        )}
      >
        <Image
          src="/logo.jpeg"
          alt="Ecotech Innovations Limited logo"
          width={56}
          height={56}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            size === "lg" ? "text-2xl" : "text-lg",
            light ? "text-white" : "text-brand-ink"
          )}
        >
          Ecotech{" "}
          <span className={light ? "text-brand-green-light" : "text-brand-green"}>Innovations</span>
        </span>
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.2em]",
            light ? "text-white/60" : "text-brand-ink/45"
          )}
        >
          Zambia · Est. {site.established}
        </span>
      </span>
    </Link>
  );
}
