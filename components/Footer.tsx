import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FacebookIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { site, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue text-white">
      {/* Decorative background */}
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-green/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-gold/15 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-white/20">
                <Image src="/logo.jpeg" alt="Ecotech Innovations logo" width={48} height={48} className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-xl font-bold leading-tight">
                Ecotech <span className="text-brand-green-light">Innovations</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
              A Zambian sustainability-driven technology company building smart, eco-friendly
              digital marketplaces — and driving Africa&apos;s green economy.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-green hover:ring-brand-green"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-green hover:ring-brand-green"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-green-light">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1.5 text-[15px] text-white/70 transition-colors hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-green-light">
              Our Platforms
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li><span className="font-medium text-white">FixCycle</span> — book verified pros in seconds</li>
              <li><span className="font-medium text-white">FixCycle Pro</span> — more jobs, digital pay</li>
              <li><span className="font-medium text-white">Green Logistics</span> — low-emission last mile</li>
              <li><span className="font-medium text-white">Agri-Tech</span> — smart farming & market links</li>
              <li><span className="font-medium text-white">Research</span> — sustainability consultancy</li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-green-light">
              Stay Connected
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-light" />
                {site.addressLusaka}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-light" />
                {site.addressNdola}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-green-light" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-green-light" />
                {site.phoneLusaka}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
            Proudly Zambian 🇿🇲 · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
