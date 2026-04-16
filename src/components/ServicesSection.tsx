import { openProjectFormModal } from "../constants/projectFormModal";
import { SpotlightSectionHeading } from "./SpotlightSectionHeading";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";
import { AnimatePresence, motion } from "framer-motion";
import { type MouseEvent, useEffect, useRef, useState } from "react";

const WEB_DESIGN_POINTS = [
  {
    title: "We Accept the Challenge",
    body: "Every business process has edge-cases and constraints. We map those realities first, then design systems that reduce manual effort without breaking what already works for your team.",
  },
  {
    title: "We Design the Solution",
    body: "From structure to interface, each flow is designed around your operations and goals. You get custom software decisions that are practical to ship, easy to adopt, and scalable.",
  },
  {
    title: "We Deliver Quality",
    body: "Delivery includes traceable builds, rigorous QA, and measurable outcomes. We focus on reliable releases that your team can trust in daily operations.",
  },
  {
    title: "Invest Total",
    body: "We act like a long-term product partner, not a one-off vendor. The goal is sustained business impact through software that keeps improving with your needs.",
  },
] as const;
const PLATFORM_LABELS = [
  "WordPress",
  "Shopify",
  "Wix",
  "Custom Websites",
] as const;
const ECOMMERCE_POINTS = [
  {
    title: "We Map the Buying Journey",
    body: "From product discovery to checkout, we design flows that reduce drop-offs and improve conversions.",
  },
  {
    title: "We Optimize for Sales",
    body: "Smart product pages, fast checkout, and trust-building elements — everything focused on increasing revenue.",
  },
  {
    title: "We Integrate Operations",
    body: "Inventory, payments, shipping, CRM — your store connects seamlessly with your backend operations.",
  },
  {
    title: "We Scale with You",
    body: "Built to handle growth — more products, more traffic, more complexity without breaking performance.",
  },
] as const;
const ECOMMERCE_LABELS = [
  "Shopify",
  "WooCommerce",
  "Custom Commerce",
] as const;
const WEB_APPLICATION_POINTS = [
  {
    title: "We Solve Real Problems",
    body: "We build web apps that replace manual work, reduce errors, and bring clarity to your operations.",
  },
  {
    title: "We Design Around Workflows",
    body: "Every screen, every action is mapped to how your team actually works — not generic templates.",
  },
  {
    title: "We Focus on Usability",
    body: "Clean interfaces, logical flows, and minimal learning curve — your team adopts it faster.",
  },
  {
    title: "We Build for Reliability",
    body: "Secure, scalable, and stable systems that your business can depend on daily.",
  },
] as const;
const WEB_APPLICATION_LABELS = [
  "Custom Web Apps",
  "Dashboards",
  "Internal Tools",
] as const;
const MOBILE_POINTS = [
  {
    title: "We Start with Use Cases",
    body: "We define what users actually need before jumping into features or screens.",
  },
  {
    title: "We Design for Engagement",
    body: "Smooth UX, fast performance, and intuitive navigation that keeps users coming back.",
  },
  {
    title: "We Build Cross-Platform Smartly",
    body: "Where possible, we use efficient frameworks to reduce cost and time without compromising quality.",
  },
  {
    title: "We Ensure Scalability",
    body: "Apps are built to handle user growth, feature expansion, and future integrations.",
  },
] as const;
const MOBILE_LABELS = ["iOS", "Android", "Cross-platform Apps"] as const;
const SAAS_POINTS = [
  {
    title: "We Define the Core Product",
    body: "We help you identify the MVP — what to build first to validate and launch quickly.",
  },
  {
    title: "We Build for Speed to Market",
    body: "Lean development, faster iterations, and quick deployments to get you live sooner.",
  },
  {
    title: "We Design for Users",
    body: "Simple onboarding, clear flows, and intuitive dashboards — reducing friction from day one.",
  },
  {
    title: "We Enable Long-Term Scale",
    body: "Multi-tenant architecture, performance optimization, and systems ready for growth.",
  },
] as const;
const SAAS_LABELS = ["Startup MVPs", "Full SaaS Systems"] as const;
const UIUX_POINTS = [
  {
    title: "We Focus on Clarity",
    body: "Design is not decoration — it’s communication. Every element has a purpose.",
  },
  {
    title: "We Design for Users",
    body: "User journeys, behavior, and psychology drive our design decisions.",
  },
  {
    title: "We Maintain Consistency",
    body: "Design systems that ensure uniform experience across platforms and features.",
  },
  {
    title: "We Balance Form & Function",
    body: "Visually strong, but always practical — design that supports real usage.",
  },
] as const;
const UIUX_LABELS = ["Web Design", "App Design", "Product Design"] as const;
const AUTOMATION_POINTS = [
  {
    title: "We Identify Bottlenecks",
    body: "We analyze where time, effort, and errors are happening in your processes.",
  },
  {
    title: "We Build Smart Systems",
    body: "Custom tools that automate repetitive tasks and improve operational efficiency.",
  },
  {
    title: "We Connect Everything",
    body: "Integrations between tools, departments, and workflows for seamless operations.",
  },
  {
    title: "We Drive Measurable Impact",
    body: "Reduced manual work, better visibility, and improved decision-making across teams.",
  },
] as const;
const AUTOMATION_LABELS = [
  "CRM",
  "HRM",
  "Internal Tools",
  "Process Automation",
] as const;

const DRAW_CIRCLE_PATH =
  "M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1";

/** Hover-only background for Website Development title column (raw video, no overlay). */
const WEBSITE_DEV_TEXT_HOVER_VIDEO = "/website.mp4";

/** Hover-only background for Ecommerce Development title column (same behavior as website dev). */
const ECOMMERCE_TEXT_HOVER_VIDEO = "/ecommerce.mp4";

/** Hover-only background for Web Applications title column. */
const WEB_APPLICATIONS_TEXT_HOVER_VIDEO = "/crm.mp4";

/** Hover-only background for Mobile Applications title column. */
const MOBILE_APPLICATIONS_TEXT_HOVER_VIDEO = "/mobileapps.mp4";

/** Hover-only background for SaaS Platforms title column. */
const SAAS_PLATFORMS_TEXT_HOVER_VIDEO = "/saas.mp4";

/** Hover-only background for UI/UX Design title column. */
const UI_UX_TEXT_HOVER_VIDEO = "/ui-ux.mp4";

/** Hover-only background for Automation & Systems title column. */
const AUTOMATION_SYSTEMS_TEXT_HOVER_VIDEO = "/automation.mp4";

function SpotlightLabel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const glowRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (!labelRef.current || !glowRef.current) return;
    const rect = labelRef.current.getBoundingClientRect();
    const left = `${((e.clientX - rect.left) / rect.width) * 100}%`;
    glowRef.current.animate({ left }, { duration: 220, fill: "forwards" });
  };

  const handleMouseLeave = () => {
    if (!glowRef.current) return;
    glowRef.current.animate({ left: "50%" }, { duration: 140, fill: "forwards" });
  };

  return (
    <motion.span
      whileTap={{ scale: 0.985 }}
      ref={labelRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-flex cursor-default items-center overflow-hidden rounded-full px-2 pb-1 pt-0.5 text-xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-black md:text-2xl ${className}`}
    >
      <span className="relative z-10">{label}</span>
      <span
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/95 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </motion.span>
  );
}

function ServiceFeaturePanel({
  activeCycle,
  cycleOffset,
  flipLayout,
  labels,
  points,
  textBlockHoverVideoSrc,
  hoverVideoSegmentLoopSec,
  title,
}: {
  activeCycle: number;
  cycleOffset: number;
  flipLayout: boolean;
  labels: readonly string[];
  points: readonly { title: string; body: string }[];
  title: string;
  textBlockHoverVideoSrc?: string;
  /** If set, loop only `[0, min(this, duration)]` instead of the full file. */
  hoverVideoSegmentLoopSec?: number;
}) {
  const n = labels.length;
  const hoverVideoRef = useRef<HTMLVideoElement | null>(null);
  const textShadowOnVideo =
    "drop-shadow-[0_2px_18px_rgba(0,0,0,0.92)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]";

  const handleHoverVideoTimeUpdate = () => {
    if (hoverVideoSegmentLoopSec == null) return;
    const v = hoverVideoRef.current;
    if (!v) return;
    const duration = v.duration;
    const end =
      Number.isFinite(duration) && duration > 0
        ? Math.min(hoverVideoSegmentLoopSec, duration)
        : hoverVideoSegmentLoopSec;
    if (v.currentTime >= end - 0.04) {
      v.currentTime = 0;
    }
  };

  const handleHoverVideoEnded = () => {
    if (hoverVideoSegmentLoopSec == null) return;
    const v = hoverVideoRef.current;
    if (!v) return;
    const duration = v.duration;
    if (
      Number.isFinite(duration) &&
      duration > 0 &&
      duration < hoverVideoSegmentLoopSec
    ) {
      v.currentTime = 0;
      void v.play();
    }
  };

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.12] bg-black/60">
      <div
        className={`grid min-w-0 grid-cols-1 divide-y divide-white/[0.1] lg:divide-y-0 ${
          flipLayout ? "lg:grid-cols-[1.72fr,1.28fr]" : "lg:grid-cols-[1.28fr,1.72fr]"
        }`}
      >
        <div
          className={`group relative isolate min-w-0 overflow-visible p-10 md:p-12 lg:p-14 ${
            flipLayout
              ? "lg:order-2 lg:border-l lg:border-white/[0.1] lg:text-right"
              : "lg:order-1 lg:border-r lg:border-white/[0.1]"
          }`}
          onMouseEnter={() => {
            if (!textBlockHoverVideoSrc) return;
            void hoverVideoRef.current?.play();
          }}
          onMouseLeave={() => {
            if (!hoverVideoRef.current) return;
            hoverVideoRef.current.pause();
            hoverVideoRef.current.currentTime = 0;
          }}
        >
          {textBlockHoverVideoSrc ? (
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <video
                ref={hoverVideoRef}
                className="h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                src={textBlockHoverVideoSrc}
                muted
                loop={hoverVideoSegmentLoopSec == null}
                playsInline
                preload="metadata"
                aria-hidden
                onTimeUpdate={handleHoverVideoTimeUpdate}
                onEnded={handleHoverVideoEnded}
              />
            </div>
          ) : null}
          <div className="relative z-10 min-w-0">
            <h2
              className={`font-grotesk w-full min-w-0 max-w-full text-balance break-words uppercase leading-[0.92] tracking-tight text-white text-[clamp(1.75rem,4.2vw+0.35rem,3.35rem)] sm:text-[clamp(2rem,4.8vw+0.25rem,3.75rem)] md:text-[clamp(2.15rem,5vw+0.2rem,4.25rem)] lg:text-[clamp(1.55rem,0.85rem+3.1vw,3.2rem)] xl:text-[clamp(2rem,1.1rem+3.4vw,4rem)] 2xl:text-[clamp(2.25rem,1.2rem+3.5vw,4.5rem)] [overflow-wrap:anywhere] ${
                textBlockHoverVideoSrc ? textShadowOnVideo : ""
              }`}
            >
              {title}
            </h2>
            <div
              className={`mt-7 flex flex-wrap items-end gap-x-6 gap-y-3 md:mt-8 md:gap-x-8 ${
                flipLayout ? "lg:justify-end" : ""
              } ${textBlockHoverVideoSrc ? textShadowOnVideo : ""}`}
            >
            {labels.map((label, idx) => (
              <span
                key={label}
                className="relative inline-flex items-center px-1 text-xl font-semibold tracking-tight text-white md:text-2xl"
              >
                <span className="relative z-10">{label}</span>
                <AnimatePresence mode="wait">
                  {idx === (activeCycle + cycleOffset) % n && (
                    <motion.svg
                      key={`${label}-${activeCycle}`}
                      viewBox="0 0 286 73"
                      fill="none"
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[1.9em] w-[calc(100%+1.2rem)] -translate-x-1/2 -translate-y-1/2"
                      aria-hidden
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        d={DRAW_CIRCLE_PATH}
                        stroke="#6FFF00"
                        strokeWidth="2.6"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </span>
            ))}
            </div>
          </div>
        </div>
        <div
          className={`grid min-w-0 grid-cols-1 divide-y divide-white/[0.1] sm:grid-cols-2 sm:divide-x sm:divide-y-0 ${
            flipLayout
              ? "lg:order-1 lg:border-r lg:border-white/[0.1]"
              : "lg:order-2"
          }`}
        >
          {points.map((item, idx) => (
            <article
              key={item.title}
              className={`p-8 md:p-10 lg:p-12 ${idx >= 2 ? "sm:border-t sm:border-white/[0.1]" : ""}`}
            >
              <h3 className="text-3xl font-medium leading-tight tracking-tight text-white">
                <SpotlightLabel
                  label={item.title}
                  className="text-3xl px-1 pb-0.5"
                />
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeCycle, setActiveCycle] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveCycle((prev) => prev + 1);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="features"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 xl:max-w-[90rem] xl:px-10">
        <ImmersiveReveal className="mb-10 md:mb-12">
          <div className="mb-8 sm:mb-10">
            <SpotlightSectionHeading>What we build</SpotlightSectionHeading>
          </div>
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={0}
            flipLayout={false}
            title="Website Development"
            labels={PLATFORM_LABELS}
            points={WEB_DESIGN_POINTS}
            textBlockHoverVideoSrc={WEBSITE_DEV_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={1}
            flipLayout
            title="Ecommerce Development"
            labels={ECOMMERCE_LABELS}
            points={ECOMMERCE_POINTS}
            textBlockHoverVideoSrc={ECOMMERCE_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={2}
            flipLayout={false}
            title="Web Applications"
            labels={WEB_APPLICATION_LABELS}
            points={WEB_APPLICATION_POINTS}
            textBlockHoverVideoSrc={WEB_APPLICATIONS_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={3}
            flipLayout
            title="Mobile Applications"
            labels={MOBILE_LABELS}
            points={MOBILE_POINTS}
            textBlockHoverVideoSrc={MOBILE_APPLICATIONS_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={4}
            flipLayout={false}
            title="SaaS Platforms"
            labels={SAAS_LABELS}
            points={SAAS_POINTS}
            textBlockHoverVideoSrc={SAAS_PLATFORMS_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={5}
            flipLayout
            title="UI/UX Design"
            labels={UIUX_LABELS}
            points={UIUX_POINTS}
            textBlockHoverVideoSrc={UI_UX_TEXT_HOVER_VIDEO}
            hoverVideoSegmentLoopSec={20}
          />
        </ImmersiveReveal>
        <ImmersiveReveal className="mb-10 md:mb-12">
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={6}
            flipLayout={false}
            title="Automation & Systems"
            labels={AUTOMATION_LABELS}
            points={AUTOMATION_POINTS}
            textBlockHoverVideoSrc={AUTOMATION_SYSTEMS_TEXT_HOVER_VIDEO}
          />
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.1} className="mt-4">
          <div
            id="pricing"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
          >
            <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-xl">
                <h3 className="text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
                  Every engagement is scoped to your stack, timeline, and risk.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Share goals, constraints, and a rough timeline — we&apos;ll respond
                  with a clear proposal: milestones, team shape, and what
                  &quot;done&quot; means for your first release.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    openProjectFormModal();
                  }}
                  className="proposal-cta"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="proposal-cta__arr proposal-cta__arr--left"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="proposal-cta__text">Request a proposal</span>
                  <span className="proposal-cta__circle" aria-hidden />
                  <svg
                    viewBox="0 0 24 24"
                    className="proposal-cta__arr proposal-cta__arr--right"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ImmersiveReveal>

      </div>
    </section>
  );
}
