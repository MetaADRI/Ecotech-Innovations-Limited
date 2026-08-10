import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Platforms from "@/components/sections/Platforms";
import BeyondFixCycle from "@/components/sections/BeyondFixCycle";
import ImpactBand from "@/components/sections/ImpactBand";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import UpdatesSection from "@/components/sections/UpdatesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Platforms />
      <BeyondFixCycle />
      <ImpactBand />
      <TestimonialsSection />
      <UpdatesSection />
    </>
  );
}
