import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Portfolio from "@/components/sections/Portfolio";
import ImpactBand from "@/components/sections/ImpactBand";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import CTABand from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Portfolio />
      <ImpactBand />
      <TestimonialsSection />
      <UpdatesSection />
      <CTABand />
    </>
  );
}
