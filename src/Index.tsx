import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DeferredSection from "./components/DeferredSection";
import LoadingScreen from "./components/LoadingScreen";
import OrbisLabsVideoSection from "./components/OrbisLabsVideoSection";
import SocialSpreadCard from "./components/SocialSpreadCard";

const AboutSection = lazy(() => import("./components/AboutSection"));
const PrinciplesSection = lazy(() => import("./components/PrinciplesSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const SystemsCollectionSection = lazy(
  () => import("./components/SystemsCollectionSection")
);
const PremiumCapabilitiesMarquee = lazy(
  () => import("./components/PremiumCapabilitiesMarquee")
);
const PhilosophySection = lazy(() => import("./components/PhilosophySection"));
const SpaceCTASection = lazy(() => import("./components/SpaceCTASection"));
const MarqueeStrip = lazy(() => import("./components/MarqueeStrip"));
const FaqSection = lazy(() => import("./components/FaqSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const SplineFooterSection = lazy(
  () => import("./components/SplineFooterSection")
);

function SectionFallback() {
  return <div className="min-h-[20rem] bg-black" aria-hidden />;
}

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
      {!isLoading && (
        <div className="min-h-screen overflow-x-hidden bg-black text-white">
          <SocialSpreadCard />
          <OrbisLabsVideoSection />

          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <PrinciplesSection />
          </Suspense>

          <DeferredSection minHeight="48rem">
            <Suspense fallback={<SectionFallback />}>
              <ServicesSection />
            </Suspense>
          </DeferredSection>

          <DeferredSection minHeight="40rem">
            <Suspense fallback={<SectionFallback />}>
              <SystemsCollectionSection />
              <PremiumCapabilitiesMarquee />
              <PhilosophySection />
            </Suspense>
          </DeferredSection>

          <DeferredSection minHeight="36rem">
            <Suspense fallback={<SectionFallback />}>
              <SpaceCTASection />
              <MarqueeStrip />
              <FaqSection />
              <ContactSection />
            </Suspense>
          </DeferredSection>

          <DeferredSection minHeight="50rem">
            <Suspense fallback={<SectionFallback />}>
              <SplineFooterSection />
            </Suspense>
          </DeferredSection>
        </div>
      )}
    </>
  );
}
