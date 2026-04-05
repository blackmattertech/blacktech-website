import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import AboutSection from "./components/AboutSection";
import CompanyStatsSection from "./components/CompanyStatsSection";
import FeaturedVideoSection from "./components/FeaturedVideoSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import MarqueeStrip from "./components/MarqueeStrip";
import OrbisLabsVideoSection from "./components/OrbisLabsVideoSection";
import PhilosophySection from "./components/PhilosophySection";
import SelectedWorkBento from "./components/SelectedWorkBento";
import ServicesSection from "./components/ServicesSection";
import SpaceCTASection from "./components/SpaceCTASection";
import SpaceIntroSection from "./components/SpaceIntroSection";
import SystemsCollectionSection from "./components/SystemsCollectionSection";
import TechInsightsSection from "./components/TechInsightsSection";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

function animateOpacity(
  el: HTMLVideoElement,
  from: number,
  to: number,
  durationMs: number,
  onComplete?: () => void
) {
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const v = from + (to - from) * t;
    el.style.opacity = String(v);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  };
  requestAnimationFrame(step);
}

const heroEase = [0.16, 1, 0.3, 1] as const;

export default function Index() {
  const reduce = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeOutStartedRef = useRef(false);

  useEffect(() => {
    if (reduce) setIsLoading(false);
  }, [reduce]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      void video.play();
      animateOpacity(video, 0, 1, 500);
    };

    const onTimeUpdate = () => {
      if (!video.duration || fadeOutStartedRef.current) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55) {
        fadeOutStartedRef.current = true;
        const from = parseFloat(video.style.opacity) || 1;
        animateOpacity(video, from, 0, 500);
      }
    };

    const onEnded = () => {
      fadeOutStartedRef.current = false;
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
        animateOpacity(video, 0, 1, 500);
      }, 100);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <div className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          style={{ opacity: 0 }}
          src={HERO_VIDEO_SRC}
          muted
          autoPlay
          playsInline
          preload="auto"
        />

        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
            <div className="flex items-center">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white"
                aria-hidden
              >
                BM
              </span>
              <span className="ml-2 font-semibold text-lg text-white lg:text-base">
                <span className="lg:hidden">BlackMatter</span>
                <span className="hidden lg:inline">
                  BlackMatter Technologies
                </span>
              </span>
              <div className="ml-4 hidden flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[13px] font-medium md:ml-6 md:flex lg:ml-8 lg:gap-x-4 lg:text-sm xl:gap-x-5">
                <a
                  href="#features"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Services
                </a>
                <a
                  href="#tech-insights"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Insights
                </a>
                <a
                  href="#selected-work"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Work
                </a>
                <a
                  href="#pricing"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Start a project
              </a>
              <a
                href="#contact"
                className="liquid-glass rounded-full px-5 py-2 text-sm font-medium text-white sm:px-6"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[12%] md:-translate-y-[20%]">
          <motion.p
            className="mb-4 max-w-xl text-xs uppercase tracking-[0.2em] text-white/45 md:text-sm"
            initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: heroEase }}
          >
            Custom software for every industry
          </motion.p>
          <motion.h1
            className="max-w-5xl text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(18px)", scale: 0.97 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: heroEase, delay: reduce ? 0 : 0.1 }}
          >
            <span className="block md:inline">Transform chaos</span>{" "}
            <span className="block md:inline">
              into <em className="italic">systems</em>
            </span>
          </motion.h1>

          <motion.form
            className="mt-10 w-full max-w-xl"
            onSubmit={(e) => e.preventDefault()}
            initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: heroEase, delay: reduce ? 0 : 0.22 }}
          >
            <div className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2">
              <input
                type="email"
                name="email"
                placeholder="Work email — tell us what you're building"
                className="min-w-0 flex-1 border-0 bg-transparent text-white outline-none ring-0 placeholder:text-white/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white p-3 text-black"
                aria-label="Request a conversation"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </motion.form>

          <motion.p
            className="mt-6 max-w-xl px-4 text-sm leading-relaxed text-white/85"
            initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: heroEase, delay: reduce ? 0 : 0.34 }}
          >
            Intelligent, scalable digital systems for teams who&apos;ve outgrown
            generic tools.{" "}
            <span className="text-white">
              50+ custom products shipped
            </span>{" "}
            across healthcare, finance, logistics, media, and more.
          </motion.p>

          <motion.a
            href="#about"
            className="liquid-glass mt-8 inline-flex rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: heroEase, delay: reduce ? 0 : 0.44 }}
          >
            Why we exist
          </motion.a>
        </div>

        <div className="relative z-10 flex justify-center gap-4 pb-12">
          <a
            href="mailto:info@blackmattertech.com"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
            aria-label="Email info@blackmattertech.com"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/blackmattertech"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
            aria-label="BlackMatter Technologies on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </section>

      <AboutSection />
      <OrbisLabsVideoSection />
      <SelectedWorkBento />
      <FeaturedVideoSection />
      <PhilosophySection />
      <SpaceIntroSection />
      <CompanyStatsSection />
      <ServicesSection />
      <SystemsCollectionSection />
      <TechInsightsSection />
      <SpaceCTASection />
      <MarqueeStrip />
      <ContactSection />
      <Footer />
    </div>
    </>
  );
}
