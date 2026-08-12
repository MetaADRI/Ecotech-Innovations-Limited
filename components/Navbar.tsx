"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "border-b border-brand-green/20 bg-surface/90 shadow-soft backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8">
        <Logo light={transparent} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200",
                  transparent ? "text-white/85 hover:text-white" : "text-brand-ink/75 hover:text-brand-green-dark",
                  active && (transparent ? "text-white" : "text-brand-green-dark")
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                      transparent ? "bg-brand-green-light" : "bg-brand-green"
                    )}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle
            className={cn(
              transparent
                ? "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur"
                : "bg-brand-mint text-brand-ink ring-1 ring-brand-green/20"
            )}
          />
          <Link
            href="/get-involved"
            className={cn(
              "hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:inline-flex",
              transparent
                ? "bg-white text-brand-green-dark shadow-soft hover:shadow-lift"
                : "bg-brand-green text-white shadow-glow hover:bg-brand-green-deep"
            )}
          >
            Volunteer
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:h-11 sm:w-11 lg:hidden",
              transparent ? "bg-white/10 text-white ring-1 ring-white/25" : "bg-brand-mint text-brand-ink"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-green/10 bg-surface lg:hidden"
            aria-label="Mobile"
          >
            {/* Scrollable on short / landscape screens (76px = fixed header height) */}
            <div className="max-h-[calc(100vh-76px)] overflow-y-auto overscroll-contain supports-[height:100dvh]:max-h-[calc(100dvh-76px)]">
              <div className="space-y-1 px-4 py-4 sm:px-5">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                          active
                            ? "bg-brand-mint text-brand-green-dark"
                            : "text-brand-ink/75 hover:bg-brand-cream"
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* The desktop Volunteer CTA is hidden below md — surface it here on mobile */}
              <div className="px-4 pb-6 pt-1 sm:px-5">
                <Link
                  href="/get-involved"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-green-deep"
                >
                  Volunteer with us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
