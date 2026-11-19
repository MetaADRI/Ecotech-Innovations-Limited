import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";
import Logo from "@/components/Logo";

const businessAreas = [
  { label: "Wholesale Trading & Supply", href: "/services#wholesale-trading" },
  { label: "Business Consultancy & Compliance", href: "/services#business-consultancy" },
  { label: "Monitoring, Logistics & Brokerage", href: "/services#monitoring-logistics" },
  { label: "Agriculture, Mining & Digital", href: "/services#agriculture-mining-digital" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-7 pt-16 text-[#F5F1E8]/60">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 border-b border-[#F5F1E8]/[0.14] pb-12 min-[760px]:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light size="lg" />
            <p className="mt-3 max-w-[320px] text-[13.5px] leading-relaxed text-[#F5F1E8]/55">
              {site.description}
            </p>
            <p className="mt-3 max-w-[320px] text-[13px] leading-relaxed text-lime/80">
              Currently an authorized agent for Chilanga Cement PLC.
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

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sage">Business Areas</h4>
            <ul>
              {businessAreas.map((d) => (
                <li key={d.label} className="mb-[9px] text-sm">
                  <Link href={d.href} className="transition-colors hover:text-paper">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sage">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-[13px] text-[#F5F1E8]/55">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[13px] text-[#F5F1E8]/55">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                <a href={`tel:${site.phonePrimary.replace(/[^+\d]/g, "")}`} className="hover:text-paper">
                  {site.phonePrimary}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[13px] text-[#F5F1E8]/55">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                <span>{site.addressHeadOffice}</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] text-[#F5F1E8]/55">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                <span>{site.addressBranch}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[11.5px] uppercase tracking-[0.05em] text-[#F5F1E8]/40">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Enquiries: {site.enquiryEmail}</span>
        </div>
      </div>
    </footer>
  );
}
