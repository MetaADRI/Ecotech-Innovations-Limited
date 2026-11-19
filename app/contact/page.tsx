import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ecotech Innovations Limited for wholesale trading, consultancy and compliance, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture sourcing, and digital platform enquiries.",
};

function ContactFormFallback() {
  return (
    <div aria-hidden="true" className="rounded-[2px] border border-ink/15 bg-surface p-8 shadow-soft sm:p-10">
      <div className="h-7 w-48 animate-pulse rounded-[2px] bg-brand-mint" />
      <div className="mt-4 space-y-3">
        <div className="h-12 animate-pulse rounded-[2px] bg-paper-soft" />
        <div className="h-12 animate-pulse rounded-[2px] bg-paper-soft" />
        <div className="h-32 animate-pulse rounded-[2px] bg-paper-soft" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Send an enquiry"
        subtitle="Contact us for wholesale trading and supply, business consultancy and compliance, independent project monitoring and MVT verification, logistics management consultancy, freight brokerage, agriculture commodity sourcing, or digital platform enquiries."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="right">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </Reveal>

          <div className="space-y-6">
            <Reveal direction="left">
              <div className="rounded-[2px] bg-paper-soft p-8 ring-1 ring-ink/10">
                <h2 className="font-display text-xl font-bold text-brand-ink">Contact details</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Email (contact, enquiries & notifications)</p>
                      <a href={`mailto:${site.enquiryEmail}`} className="font-semibold text-brand-ink hover:text-forest break-all">
                        {site.enquiryEmail}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Phone</p>
                      <a href={`tel:${site.phonePrimary.replace(/[^+\d]/g, "")}`} className="font-semibold text-brand-ink hover:text-forest">
                        {site.phonePrimary}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Locations</p>
                      <p className="font-semibold text-brand-ink">{site.addressHeadOffice}</p>
                      <p className="mt-1 text-[15px] text-brand-ink/75">{site.addressBranch}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-brand-mint text-forest shadow-soft">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-brand-ink/50">Response</p>
                      <p className="font-semibold text-brand-ink">We aim to respond to enquiries promptly by email.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="rounded-[2px] border border-lime/30 bg-lime/10 p-7">
                <h3 className="font-display text-lg font-bold text-ink">What you can enquire about</h3>
                <ul className="mt-4 space-y-2 text-[14.5px] text-ink/75">
                  <li>• Wholesale trading & supply (cement, maize, fuels and acids, vehicle importation, consumer & household goods)</li>
                  <li>• Business consultancy & compliance (PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.)</li>
                  <li>• Independent project monitoring and MVT verification</li>
                  <li>• Logistics management consultancy & freight brokerage</li>
                  <li>• Agriculture commodity sourcing and supply</li>
                  <li>• Mining (Coming Soon) and digital platforms (FixCycle, MobiLink, Lala)</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}