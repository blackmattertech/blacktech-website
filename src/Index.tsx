import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import HeroSection from "./components/OrbisLabsVideoSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import SelectedWorkBento from "./components/SelectedWorkBento";
import ServicesSection from "./components/ServicesSection";
import SystemsCollectionSection from "./components/SystemsCollectionSection";
import IndustriesSection from "./components/IndustriesSection";
import StatsSection from "./components/StatsSection";
import SpaceCTASection from "./components/SpaceCTASection";
import MarqueeStrip from "./components/MarqueeStrip";
import ContactSection from "./components/ContactSection";
import SplineFooterSection from "./components/SplineFooterSection";
import LoadingScreen from "./components/LoadingScreen";

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
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <SelectedWorkBento />
        <ServicesSection />
        <SystemsCollectionSection />
        <IndustriesSection />
        <StatsSection />
        <SpaceCTASection />
        <MarqueeStrip />
        <ContactSection />
        <SplineFooterSection />
      </div>
    </>
  );
}
