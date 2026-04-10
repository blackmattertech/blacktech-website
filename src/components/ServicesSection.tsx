import { ImmersiveReveal } from "./motion/ImmersiveReveal";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  type MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

const WHAT_WE_BUILD_TYPO =
  "text-balance text-4xl font-semibold uppercase tracking-[0.12em] sm:text-5xl sm:tracking-[0.16em] md:text-6xl md:tracking-[0.18em]";

function WhatWeBuildSpotlightHeading() {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [diameterPx, setDiameterPx] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const rClip = useMotionValue(0);
  const cx = useTransform([x, rClip], ([xv, rv]) => (xv as number) + (rv as number));
  const clipPath = useMotionTemplate`circle(${rClip}px at ${cx}px 50%)`;

  useLayoutEffect(() => {
    const track = trackRef.current;
    const text = textRef.current;
    if (!track || !text) return;
    const measure = () => {
      const h = text.getBoundingClientRect().height;
      const d = Math.max(24, h * 2);
      rClip.set(d / 2);
      setDiameterPx(d);
      setMaxX(Math.max(0, track.offsetWidth - d));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [rClip]);

  useEffect(() => {
    if (reduceMotion || maxX <= 0) {
      x.set(0);
      return;
    }
    const controls = animate(x, [0, maxX], {
      duration: 3.6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [maxX, reduceMotion, x]);

  return (
    <div ref={trackRef} className="group relative inline-block max-w-full">
      <p
        ref={textRef}
        className={`relative z-0 m-0 text-white transition-colors duration-300 group-hover:text-neon ${WHAT_WE_BUILD_TYPO}`}
      >
        What we build
      </p>

      {!reduceMotion && diameterPx > 0 ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-visible opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            style={{ clipPath }}
          >
            <p
              className={`m-0 text-neon ${WHAT_WE_BUILD_TYPO} pointer-events-none`}
            >
              What we build
            </p>
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/2 z-[11] rounded-full border border-white/25 bg-black/10 shadow-[0_0_48px_rgba(0,0,0,0.45)] transition-opacity duration-300 group-hover:opacity-0"
            style={{
              width: diameterPx,
              height: diameterPx,
              x,
              y: "-50%",
            }}
          />
        </>
      ) : null}
    </div>
  );
}

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
  title,
}: {
  activeCycle: number;
  cycleOffset: number;
  flipLayout: boolean;
  labels: readonly string[];
  points: readonly { title: string; body: string }[];
  title: string;
}) {
  const n = labels.length;
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-black/60">
      <div
        className={`grid grid-cols-1 divide-y divide-white/[0.1] lg:divide-y-0 ${
          flipLayout ? "lg:grid-cols-[1.95fr,1.05fr]" : "lg:grid-cols-[1.05fr,1.95fr]"
        }`}
      >
        <div
          className={`p-8 md:p-10 ${
            flipLayout
              ? "lg:order-2 lg:border-l lg:border-white/[0.1] lg:text-right"
              : "lg:order-1 lg:border-r lg:border-white/[0.1]"
          }`}
        >
          <h2 className="font-grotesk text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h2>
          <div
            className={`mt-7 flex flex-wrap items-end gap-x-6 gap-y-3 md:mt-8 md:gap-x-8 ${
              flipLayout ? "lg:justify-end" : ""
            }`}
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
        <div
          className={`grid grid-cols-1 divide-y divide-white/[0.1] sm:grid-cols-2 sm:divide-x sm:divide-y-0 ${
            flipLayout
              ? "lg:order-1 lg:border-r lg:border-white/[0.1]"
              : "lg:order-2"
          }`}
        >
          {points.map((item, idx) => (
            <article
              key={item.title}
              className={`p-6 md:p-8 ${idx >= 2 ? "sm:border-t sm:border-white/[0.1]" : ""}`}
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
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ImmersiveReveal className="mb-10 md:mb-12">
          <div className="mb-8 sm:mb-10">
            <WhatWeBuildSpotlightHeading />
          </div>
          <ServiceFeaturePanel
            activeCycle={activeCycle}
            cycleOffset={0}
            flipLayout={false}
            title="Website Development"
            labels={PLATFORM_LABELS}
            points={WEB_DESIGN_POINTS}
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
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Request a proposal
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ImmersiveReveal>

      </div>
    </section>
  );
}
