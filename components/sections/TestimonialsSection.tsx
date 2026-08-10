import Link from "next/link";
import { MessageSquareHeart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { site } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 sm:py-28">
      <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[100px]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Community Spotlight"
          title="Loved by customers, trusted by pros"
          subtitle="Real stories from the people powering Zambia's green economy."
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
        <p className="mt-8 text-center text-sm text-brand-ink/55">
          <MessageSquareHeart className="mr-1.5 inline h-4 w-4 text-brand-green-dark" />
          More stories on our{" "}
          <Link href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-green-dark underline-offset-4 hover:underline">
            Facebook community
          </Link>{" "}
          and{" "}
          <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-green-dark underline-offset-4 hover:underline">
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
