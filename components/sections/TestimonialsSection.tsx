import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 sm:py-28">
      <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[100px]" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Built on dependable service and clear communication"
          subtitle="What customers and partners value when working with Ecotech Innovations."
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
