import { lazy, Suspense, useState } from "react";
import DeferredSection from "./components/DeferredSection";
import { useDeferredMount } from "./hooks/useDeferredMount";
import { shouldSkipIntroLoader } from "./hooks/useSkipIntroLoader";
import OrbisLabsVideoSection from "./components/OrbisLabsVideoSection";
import SocialSpreadCard from "./components/SocialSpreadCard";

const LoadingScreen = lazy(() => import("./components/LoadingScreen"));
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
  const [isLoading, setIsLoading] = useState(() => !shouldSkipIntroLoader());
  const showWidgets = useDeferredMount();

  return (
    <>
      {isLoading && (
        <Suspense fallback={<div className="fixed inset-0 z-[9999] bg-black" aria-hidden />}>
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        </Suspense>
      )}
      <div className="min-h-screen overflow-x-hidden bg-black text-white">
        <OrbisLabsVideoSection />
        {showWidgets ? <SocialSpreadCard /> : null}

        <DeferredSection minHeight="32rem" rootMargin="240px 0px">
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <PrinciplesSection />
          </Suspense>
        </DeferredSection>

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
    </>
  );
}
