"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Primary desktop links (the rest live in the mobile menu + footer). */
const desktopLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fixcycle", label: "FixCycle" },
  { href: "/solutions", label: "Solutions" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile menu is open (fixes janky scroll-under
  // on small phones).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href.split("#")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-[#F5F1E8]/[0.14] bg-[#14181A]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-[18px] sm:px-8">
        <Logo light />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[18px] lg:flex" aria-label="Primary">
          {desktopLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b pb-1 font-mono text-[13px] uppercase tracking-[0.06em] transition-all duration-200",
                  active ? "border-lime text-paper" : "border-transparent text-paper/70 hover:border-lime hover:text-paper"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden bg-white/10 text-paper/80 ring-1 ring-white/15 backdrop-blur transition-colors hover:text-paper sm:inline-flex" />

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[2px] bg-lime px-[22px] py-3 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-dim md:inline-flex"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-paper ring-1 ring-white/15 transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#F5F1E8]/[0.14] bg-[#14181A] lg:hidden"
            aria-label="Mobile"
          >
            <div className="max-h-[calc(100dvh-73px)] overflow-y-auto overscroll-contain">
              <div className="space-y-1 px-5 py-5">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -14, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between border-b border-transparent py-3 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors",
                          active ? "border-lime text-lime" : "text-paper/75 hover:text-paper"
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 px-5 pb-6 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-[2px] bg-lime px-5 py-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-forest-deep transition-colors hover:bg-lime-dim"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center justify-center gap-2 pt-1 text-xs text-paper/50">
                  <ThemeToggle className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] bg-white/10 text-paper/80 ring-1 ring-white/15" />
                  <span className="font-mono uppercase tracking-[0.08em]">Toggle theme</span>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
