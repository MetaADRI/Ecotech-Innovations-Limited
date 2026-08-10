"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ecotech-theme";

/** Dark / light mode toggle. Persists to localStorage; defaults to system preference. */
export default function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Read the theme once on mount — the pre-paint script already set the .dark
    // class, and a lazy initializer would cause a hydration mismatch (SSR is light).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* private mode etc. — class toggle still works for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "group inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      <span className="relative block h-5 w-5 transition-transform duration-500 group-hover:rotate-[25deg]">
        <Sun
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
      </span>
    </button>
  );
}
