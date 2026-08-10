import {
  Battery,
  Droplets,
  Home,
  MapPin,
  MessageSquare,
  Plug,
  Search,
  Signal,
  Star,
  User,
  Wifi,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Plumbing", "Electrical", "Cleaning"];

const jobs = [
  {
    icon: Droplets,
    tint: "bg-sky-100 text-sky-600",
    title: "Tap & pipe repair",
    pro: "Bwalya K. · Plumber",
    price: "K150",
  },
  {
    icon: Plug,
    tint: "bg-amber-100 text-amber-600",
    title: "Socket installation",
    pro: "Joseph K. · Electrician",
    price: "K220",
  },
  {
    icon: Wrench,
    tint: "bg-emerald-100 text-emerald-600",
    title: "Fridge service",
    pro: "Mutale N. · Technician",
    price: "K310",
  },
];

export default function PhoneMockup({ tone = "green", className }: { tone?: "green" | "blue"; className?: string }) {
  const accent = tone === "green" ? "bg-brand-green" : "bg-brand-blue-soft";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-[300px] shrink-0 rounded-[2.9rem] border-[10px] border-brand-blue p-0 shadow-lift dark:border-brand-blue-soft sm:w-[330px]",
        className
      )}
    >
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2.2rem] bg-brand-mint">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-white px-6 pb-2 pt-3 text-[11px] font-semibold text-brand-ink/80 dark:bg-surface">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <Battery className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* App header */}
        <div className={cn("px-5 pb-4 pt-2 text-white", accent)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 font-display text-xs font-bold">
                E
              </span>
              <span className="font-display text-sm font-bold tracking-tight">FixCycle</span>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium">
              <MapPin className="h-3 w-3" /> Lusaka
            </span>
          </div>

          <p className="mt-3 text-[13px] font-medium text-white/90">Good morning 👋</p>
          <p className="text-[10px] text-white/70">What do you need fixed today?</p>

          <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2.5 text-[11px] text-brand-ink/50 shadow-sm">
            <Search className="h-3.5 w-3.5 text-brand-green" />
            Search services or pros…
          </div>

          <div className="mt-3 flex gap-1.5">
            {categories.map((c, i) => (
              <span
                key={c}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[10px] font-semibold",
                  i === 0 ? "bg-white text-brand-green-dark" : "bg-white/15 text-white"
                )}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Job cards */}
        <div className="space-y-2.5 bg-brand-mint px-4 pb-4 pt-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 dark:bg-surface"
            >
              <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", job.tint)}>
                <job.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-bold text-brand-ink">{job.title}</p>
                <div className="flex items-center gap-1 text-[10px] text-brand-ink/55">
                  <span className="flex items-center gap-0.5 text-brand-gold">
                    <Star className="h-3 w-3 fill-current" /> 4.9
                  </span>
                  <span className="truncate">· {job.pro}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-[12px] font-bold text-brand-green-dark">{job.price}</p>
                <span className={cn("mt-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold text-white", accent)}>
                  Book
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-around border-t border-black/5 bg-white px-2 py-2.5 text-brand-ink/40 dark:border-white/10 dark:bg-surface">
          <Home className="h-5 w-5 text-brand-green" />
          <Search className="h-5 w-5" />
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-green text-white shadow-glow">
            <MessageSquare className="h-4 w-4" />
          </span>
          <User className="h-5 w-5" />
          <span className="h-5 w-5 rounded-full border-[3px] border-brand-ink/30" />
        </div>
      </div>
    </div>
  );
}
