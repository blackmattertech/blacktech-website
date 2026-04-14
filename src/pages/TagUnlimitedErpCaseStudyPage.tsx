import {
  Activity,
  ArrowRight,
  Box,
  CheckCircle,
  ClipboardList,
  Database,
  FileText,
  Package,
  Scissors,
  TrendingDown,
  Truck,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Fragment, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { openProjectFormModal } from "../constants/projectFormModal";

const ACCENT = "#FF3B1F";

const HERO_IMG =
  "https://images.unsplash.com/photo-1768746350424-ee28a364dcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400";
const PROBLEM_IMG =
  "https://images.unsplash.com/photo-1774352724311-ba2694681e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
/** “The interface” scroll carousel — slide 1 is final copy + product shot; others are placeholders. */
const INTERFACE_SLIDES = [
  {
    id: "1",
    textPanel: "dark" as const,
    title: "Built for Real-Time Control",
    body: "What used to be scattered across papers, calls, and guesswork is now visible in one place. Track orders, monitor production, analyze revenue, and measure team performance — all in real time.",
    image: "/case-studies/tag-unlimited-erp-slide-1.png",
  },
  {
    id: "2",
    textPanel: "light" as const,
    title: "Floor visibility",
    body: "Placeholder copy: live status by workstation so supervisors see bottlenecks before they become missed ship dates.",
    image: "https://picsum.photos/seed/tag-erp-02/960/1200",
  },
  {
    id: "3",
    textPanel: "dark" as const,
    title: "Materials & GRN",
    body: "Placeholder copy: receipts tied to POs and BOM lines so variance is visible the moment fabric hits the dock.",
    image: "https://picsum.photos/seed/tag-erp-03/960/1200",
  },
  {
    id: "4",
    textPanel: "light" as const,
    title: "Cut planning",
    body: "Placeholder copy: marker efficiency and layer counts feed forward into capacity planning for the week ahead.",
    image: "https://picsum.photos/seed/tag-erp-04/960/1200",
  },
  {
    id: "5",
    textPanel: "dark" as const,
    title: "Stitching progress",
    body: "Placeholder copy: bundle tracking from line to line with simple scans instead of paper traveler packets.",
    image: "https://picsum.photos/seed/tag-erp-05/960/1200",
  },
  {
    id: "6",
    textPanel: "light" as const,
    title: "QC & rework",
    body: "Placeholder copy: defects logged against style and operator so root-cause reviews have data, not anecdotes.",
    image: "https://picsum.photos/seed/tag-erp-06/960/1200",
  },
  {
    id: "7",
    textPanel: "dark" as const,
    title: "Packing & cartonization",
    body: "Placeholder copy: carton contents and weights flow to dispatch labels without a second system of record.",
    image: "https://picsum.photos/seed/tag-erp-07/960/1200",
  },
  {
    id: "8",
    textPanel: "light" as const,
    title: "Dispatch & proof of delivery",
    body: "Placeholder copy: handoff to logistics with timestamps so finance, CS, and ops agree the order left the building.",
    image: "https://picsum.photos/seed/tag-erp-08/960/1200",
  },
] as const;

const PROBLEM_ITEMS = [
  { icon: FileText, text: "8-10 documents manually created per order" },
  {
    icon: Database,
    text: "No centralized data — scattered across files and notebooks",
  },
  { icon: TrendingDown, text: "Zero visibility into production status" },
  {
    icon: Activity,
    text: "No employee performance tracking or accountability",
  },
] as const;

const SOLUTION_CARDS = [
  {
    title: "Order Management",
    body: "Digital order creation, tracking, and fulfillment workflows",
  },
  {
    title: "Inventory Tracking",
    body: "Real-time material tracking from procurement to finished goods",
  },
  {
    title: "Automated Accounting",
    body: "Integrated financial workflows eliminating manual data entry",
  },
  {
    title: "Production Flow",
    body: "End-to-end visibility across all manufacturing stages",
  },
  {
    title: "Employee KPIs",
    body: "Performance tracking and accountability metrics per worker",
  },
  {
    title: "Data Centralization",
    body: "Single source of truth for all operational data",
  },
] as const;

const PROCESS_STEPS = [
  { label: "Procurement", Icon: Package },
  { label: "BOM", Icon: ClipboardList },
  { label: "GRN", Icon: Database },
  { label: "Cutting", Icon: Scissors },
  { label: "Stitching", Icon: Activity },
  { label: "QC", Icon: CheckCircle },
  { label: "Packing", Icon: Box },
  { label: "Dispatch", Icon: Truck },
] as const;

const METRICS = [
  { value: "100%", label: "Paperless Operations" },
  { value: "Real-time", label: "Production Tracking" },
  { value: "Complete", label: "Data Visibility" },
  { value: "Full", label: "Employee Accountability" },
] as const;

const BEFORE_LIST = [
  "Paper-based documentation",
  "No centralized data",
  "Zero production visibility",
  "Manual accounting processes",
  "No performance metrics",
  "Reactive problem solving",
] as const;

const AFTER_LIST = [
  "Fully digital operations",
  "Single source of truth",
  "Real-time production insights",
  "Automated accounting workflows",
  "Comprehensive KPI tracking",
  "Proactive decision making",
] as const;

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[13px] font-medium uppercase tracking-[0.1em] ${
        dark ? "text-white/40" : "text-black/40"
      }`}
    >
      {children}
    </p>
  );
}

const INTERFACE_SLIDE_COUNT = INTERFACE_SLIDES.length;

const interfaceMotionEase = [0.22, 1, 0.36, 1] as const;
const interfaceMotionDuration = 0.48;

/**
 * Scroll-driven carousel: scrolling **down** advances slides **8 → 1** (reverse order).
 * On each change: **left text** exits **up** / enters **from below**; **right image** exits **down** / enters **from above** (opposite vertical motion).
 */
function ManufacturingInterfaceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const n = INTERFACE_SLIDE_COUNT;
  const [activeIndex, setActiveIndex] = useState(n - 1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(n - 1, Math.max(0, Math.floor((1 - p) * n)));
    setActiveIndex((prev) => (prev !== idx ? idx : prev));
  });

  const slide = INTERFACE_SLIDES[activeIndex];
  const textPanelDark = slide.textPanel === "dark";

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24 lg:px-12 lg:pb-14 lg:pt-28">
        <SectionLabel>The interface</SectionLabel>
        <h2
          className="mt-4 font-bold leading-[1.1] tracking-[-0.02em] text-black"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Designed for
          <br />
          Manufacturing
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${(n + 2) * 100}vh` }}
      >
        <div className="sticky top-0 flex min-h-screen flex-col justify-center bg-white py-12 lg:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-6">
              {/* Text block — same footprint as image (landscape); no shared outer frame */}
              <div className="relative aspect-video w-full min-h-0 overflow-hidden rounded-2xl lg:aspect-[16/10] lg:order-1">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-10 ${
                      textPanelDark
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -52 }}
                    transition={{
                      duration: interfaceMotionDuration,
                      ease: interfaceMotionEase,
                    }}
                  >
                    <p
                      className={`mb-3 font-mono text-[11px] ${
                        textPanelDark ? "text-white/40" : "text-black/45"
                      }`}
                    >
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(n).padStart(2, "0")}
                    </p>
                    <h3 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em]">
                      {slide.title}
                    </h3>
                    <p
                      className={`mt-4 text-[16px] leading-[1.65] sm:text-[17px] ${
                        textPanelDark ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      {slide.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image block — identical width/height ratio to text block; always white field */}
              <div className="relative aspect-video w-full min-h-0 overflow-hidden rounded-2xl bg-white lg:aspect-[16/10] lg:order-2">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: -56 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 56 }}
                    transition={{
                      duration: interfaceMotionDuration,
                      ease: interfaceMotionEase,
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-contain object-center"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-12 text-center text-[11px] uppercase tracking-[0.14em] text-black/35">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function TagUnlimitedErpCaseStudyPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-dvh bg-white font-body text-black antialiased">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-black/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link
            to="/"
            className="text-[15px] font-bold tracking-[-0.01em] text-black transition-opacity hover:opacity-70"
          >
            Black Matter Technologies
          </Link>
          <button
            type="button"
            onClick={() => openProjectFormModal()}
            className="bg-black px-6 py-2 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Contact
          </button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen overflow-hidden pt-16"
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Factory floor"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-center px-6 pb-32 pt-12 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-white"
          >
            <span
              className="inline-block px-3 py-1 text-[12px] font-medium uppercase tracking-[0.05em] text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Case study
            </span>
            <h1
              className="mt-6 max-w-4xl font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              From 10 Papers
              <br />
              Per Order to Zero
            </h1>
            <p className="mt-6 text-[20px] leading-[1.6] text-white/90">
              TAG Unlimited Clothing · Custom ERP System
            </p>
            <p className="mt-4 max-w-[600px] text-[18px] leading-[1.7] text-white/70">
              Transforming a paper-driven apparel manufacturer into a fully
              digital operation with real-time visibility, automated workflows,
              and complete operational control.
            </p>
            <a
              href="#challenge"
              className="group mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-[15px] font-medium text-black transition-opacity hover:opacity-90"
            >
              See how we did it
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/80">
            <div className="h-16 w-px bg-white/30" />
            <span className="text-[11px] uppercase tracking-[0.1em]">
              Scroll
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Problem */}
      <section id="challenge" className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <FadeUp>
                <SectionLabel>The challenge</SectionLabel>
                <h2
                  className="mb-10 mt-4 font-bold leading-[1.1] tracking-[-0.02em] text-black"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  Drowning in
                  <br />
                  Paperwork
                </h2>
              </FadeUp>
              <ul className="space-y-6">
                {PROBLEM_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 rounded-sm bg-black/5 p-2">
                      <item.icon
                        className="h-5 w-5 text-black/60"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-[17px] leading-[1.6] text-black/70">
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={PROBLEM_IMG}
                alt="Chaotic paperwork"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution grid */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="mb-20">
            <SectionLabel dark>The system we built</SectionLabel>
            <h2
              className="mt-4 font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Complete Operational
              <br />
              Control
            </h2>
          </FadeUp>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-black p-8 transition-colors hover:bg-white/5"
              >
                <div
                  className="mb-6 h-px w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <h3 className="text-[22px] font-semibold tracking-[-0.01em]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/60">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="mx-auto mb-16 max-w-4xl text-center">
            <SectionLabel>Production flow</SectionLabel>
            <h2
              className="mt-4 font-bold leading-[1.1] tracking-[-0.02em] text-black"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Built to Run the Factory,
              <br />
              Not Just Track It
            </h2>
          </FadeUp>

          <div className="-mx-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max items-center justify-center gap-0 px-2 lg:min-w-0 lg:flex-wrap lg:px-0">
              {PROCESS_STEPS.map((step, i) => (
                <Fragment key={step.label}>
                  {i > 0 ? (
                    <div
                      className="hidden h-px w-8 shrink-0 bg-black/20 sm:w-10 lg:block xl:w-12"
                      aria-hidden
                    />
                  ) : null}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex w-[104px] shrink-0 flex-col items-center sm:w-28 lg:w-24"
                  >
                    <div className="flex h-24 w-24 items-center justify-center bg-black transition-all duration-300 group-hover:bg-[#FF3B1F]">
                      <step.Icon
                        className="h-10 w-10 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="mt-4 max-w-[6.5rem] text-center text-[15px] font-semibold leading-tight tracking-[-0.01em] text-black">
                      {step.label}
                    </p>
                  </motion.div>
                </Fragment>
              ))}
            </div>
          </div>

          <FadeUp
            delay={0.15}
            className="mx-auto mt-16 max-w-2xl text-center text-[17px] leading-[1.7] text-black/60"
          >
            Every stage tracked in real-time. Every handoff automated. Every
            bottleneck visible.
          </FadeUp>
        </div>
      </section>

      <ManufacturingInterfaceSection />

      {/* Impact */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="mx-auto mb-20 max-w-4xl text-center">
            <SectionLabel>The transformation</SectionLabel>
            <h2
              className="mt-4 font-bold leading-[1.1] tracking-[-0.02em] text-black"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              From No Visibility
              <br />
              to Full Control
            </h2>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="font-bold leading-none tracking-[-0.03em]"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: ACCENT,
                  }}
                >
                  {m.value}
                </p>
                <p className="mt-3 text-[16px] font-medium tracking-[-0.01em] text-black">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="mx-auto mb-16 max-w-4xl text-center">
            <h2
              className="font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Before vs After
            </h2>
          </FadeUp>

          <div className="grid gap-px bg-white/10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black p-12"
            >
              <span className="inline-block bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.05em] text-white/60">
                Before
              </span>
              <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.01em]">
                Manual Chaos
              </h3>
              <ul className="mt-8 space-y-4">
                {BEFORE_LIST.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                    <span className="text-[16px] leading-[1.6] text-white/70">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black p-12"
            >
              <span
                className="inline-block px-3 py-1 text-[12px] font-medium uppercase tracking-[0.05em] text-white"
                style={{ backgroundColor: ACCENT }}
              >
                After
              </span>
              <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.01em]">
                Structured System
              </h3>
              <ul className="mt-8 space-y-4">
                {AFTER_LIST.map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: ACCENT }}
                      strokeWidth={1.5}
                    />
                    <span className="text-[16px] leading-[1.6] text-white">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <FadeUp>
            <div
              className="mx-auto mb-12 h-px w-16"
              style={{ backgroundColor: ACCENT }}
            />
            <blockquote
              className="font-normal leading-[1.4] tracking-[-0.01em] text-black"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              We went from drowning in paperwork to having complete visibility.
              Every order, every piece of fabric, every employee task — all in
              one system. It&apos;s transformed how we run the factory.
            </blockquote>
            <footer className="mt-10">
              <p className="text-[16px] font-semibold tracking-[-0.01em] text-black">
                Operations Director
              </p>
              <p className="mt-1 text-[15px] text-black/50">
                TAG Unlimited Clothing
              </p>
            </footer>
          </FadeUp>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <FadeUp>
            <h2
              className="font-bold leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              We don&apos;t just build software.
              <br />
              <span style={{ color: ACCENT }}>
                We build systems that run your business.
              </span>
            </h2>
            <button
              type="button"
              onClick={() => openProjectFormModal()}
              className="group mt-12 inline-flex items-center gap-2 bg-white px-10 py-5 text-[16px] font-semibold tracking-[-0.01em] text-black transition-opacity hover:opacity-90"
            >
              Build your system
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </button>
            <p className="mt-16 text-[14px] tracking-[0.05em] text-white/40">
              Black Matter Technologies · 2026
            </p>
            <Link
              to="/"
              className="mt-8 inline-block text-[14px] text-white/50 underline-offset-4 transition-colors hover:text-white"
            >
              ← Back to home
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
