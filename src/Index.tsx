import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import AboutSection from "./components/AboutSection";
import PrinciplesSection from "./components/PrinciplesSection";
import ContactSection from "./components/ContactSection";
import SplineFooterSection from "./components/SplineFooterSection";
import LoadingScreen from "./components/LoadingScreen";
import MarqueeStrip from "./components/MarqueeStrip";
import OrbisLabsVideoSection from "./components/OrbisLabsVideoSection";
import PhilosophySection from "./components/PhilosophySection";
import PremiumCapabilitiesMarquee from "./components/PremiumCapabilitiesMarquee";
import ServicesSection from "./components/ServicesSection";
import SpaceCTASection from "./components/SpaceCTASection";
import SocialSpreadCard from "./components/SocialSpreadCard";
import SystemsCollectionSection from "./components/SystemsCollectionSection";

export default function Index() {
  const reduce = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reduce) setIsLoading(false);
  }, [reduce]);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <div className="min-h-screen bg-black text-white">
        <SocialSpreadCard />
        <OrbisLabsVideoSection />

        <AboutSection />
        <PrinciplesSection />
        <ServicesSection />
        <SystemsCollectionSection />
        <PremiumCapabilitiesMarquee />
        <PhilosophySection />
        <SpaceCTASection />
        <MarqueeStrip />
        <ContactSection />
        <SplineFooterSection />
      </div>
    </>
  );
}
