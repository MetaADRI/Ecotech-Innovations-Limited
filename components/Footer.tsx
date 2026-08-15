import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";
import { EilBadge } from "@/components/Logo";

const divisions = [
  { label: "Trading & Supply", href: "/services#export-import-trading" },
  { label: "Business Consultancy", href: "/services#business-consultancy-compliance" },
  { label: "Sustainable Technology", href: "/solutions" },
  { label: "Logistics & Mobility", href: "/services#freight-brokerage" },
];

const portfolio = [
  { label: "FixCycle", href: "/fixcycle" },
  { label: "MobiLink", href: "/solutions#mobilink" },
  { label: "Lala", href: "/solutions#lala" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partner With Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-7 pt-16 text-[#F5F1E8]/60">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 border-b border-[#F5F1E8]/[0.14] pb-12 min-[760px]:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="footer-col footer-brand">
            <div className="mb-2.5 flex items-center gap-[9px]">
              <EilBadge className="h-[26px] w-[26px]" />
              <span className="font-display text-xl font-extrabold leading-none text-lime">eil</span>
            </div>
            <p className="mt-3 max-w-[280px] text-[13.5px] leading-relaxed text-[#F5F1E8]/55">
              Ecotech Innovations Limited — innovating today for a sustainable tomorrow, across
              trading, consultancy, technology and logistics.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-white/[0.07] ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:text-lime hover:ring-lime"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-white/[0.07] ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:text-lime hover:ring-lime"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sage">Divisions</h4>
            <ul>
              {divisions.map((d) => (
                <li key={d.label} className="mb-[9px] text-sm">
                  <Link href={d.href} className="transition-colors hover:text-paper">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sage">Portfolio</h4>
            <ul>
              {portfolio.map((p) => (
                <li key={p.label} className="mb-[9px] text-sm">
                  <Link href={p.href} className="transition-colors hover:text-paper">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li className="mb-[9px] text-sm text-[#F5F1E8]/45">FixCycle Pro</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sage">Company</h4>
            <ul>
              {company.map((c) => (
                <li key={c.label} className="mb-[9px] text-sm">
                  <Link href={c.href} className="transition-colors hover:text-paper">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-start gap-2 pt-1 text-[13px] text-[#F5F1E8]/55">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[13px] text-[#F5F1E8]/55">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                {site.phoneLusaka}
              </li>
              <li className="flex items-start gap-2 pt-1 text-[13px] text-[#F5F1E8]/55">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                {site.addressLusaka}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[11.5px] uppercase tracking-[0.05em] text-[#F5F1E8]/40">
          <span>© {new Date().getFullYear()} Ecotech Innovations Limited</span>
          <span>Ndola · Zambia</span>
        </div>
      </div>
    </footer>
  );
}
