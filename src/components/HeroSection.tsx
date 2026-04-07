import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize, Snowflake, Zap } from "lucide-react";

const SPLINE_SCENE =
  "https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SPECS = [
  { label: "Stack", value: "TypeScript + React + Node" },
  { label: "Delivery", value: "Discovery → production" },
  { label: "Shipped", value: "50+ custom products" },
  { label: "Scale", value: "Multi-industry teams" },
] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <Suspense
          fallback={<div className="h-full w-full bg-black" aria-hidden />}
        >
          <div
            className="absolute inset-0 h-full w-full [&_canvas]:pointer-events-auto"
            style={{ transform: "translateX(15%)" }}
          >
            <Spline
              scene={SPLINE_SCENE}
              className="pointer-events-auto h-full w-full !absolute !inset-0"
            />
          </div>
        </Suspense>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
          aria-hidden
        />
      </div>

      <nav className="relative z-20 px-4 pt-6 md:px-6 md:pt-10 pointer-events-auto">
        <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
          <div className="flex min-w-0 items-center">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white"
              aria-hidden
            >
              BM
            </span>
            <span className="ml-2 truncate font-semibold text-sm text-white sm:text-base">
              <span className="sm:hidden">BlackMatter</span>
              <span className="hidden sm:inline">BlackMatter Technologies</span>
            </span>
            <div className="ml-3 hidden flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-white/80 md:ml-6 md:flex lg:gap-x-4 lg:text-sm">
              <a href="#features" className="transition-colors hover:text-white">
                Services
              </a>
              <a
                href="#tech-insights"
                className="transition-colors hover:text-white"
              >
                Insights
              </a>
              <a
                href="#selected-work"
                className="transition-colors hover:text-white"
              >
                Work
              </a>
              <a href="#pricing" className="transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline"
            >
              Start a project
            </a>
            <a
              href="#contact"
              className="liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white sm:px-5 sm:text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5.5rem)] flex-col justify-between px-4 pb-6 pt-4 md:min-h-[calc(100svh-7rem)] md:px-6 md:pb-8 md:pt-6 pointer-events-none">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 space-y-6 md:space-y-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="max-w-xl font-orbitron text-[40px] font-light uppercase leading-[1] tracking-tight text-transparent sm:text-[56px] md:text-[72px] md:leading-[0.9] bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text">
                BlackMatter
                <br />
                Technologies •
              </h1>
            </motion.div>

            <motion.p
              className="max-w-md font-space-grotesk text-sm font-light leading-relaxed text-white"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: reduce ? 0 : 0.2 }}
            >
              We build intelligent, scalable digital systems for teams who&apos;ve
              outgrown off-the-shelf tools—from ERP and CRM to integrations and
              internal platforms. Chaos into systems; code you can grow with.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: reduce ? 0 : 0.4 }}
            >
              {(
                [
                  { Icon: Snowflake, label: "Precision engineering" },
                  { Icon: Maximize, label: "Full-viewport craft" },
                  { Icon: Zap, label: "Fast iteration" },
                ] as const
              ).map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/60"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-white/80" strokeWidth={1.75} />
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-stretch justify-between gap-12 md:mt-0 md:flex-row md:items-end md:gap-0">
          <motion.div
            className="pointer-events-auto w-full p-6 md:max-w-md md:p-8"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduce ? 0 : 0.8 }}
          >
            <p className="mb-5 font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/60">
              Technical specs
            </p>
            <div className="space-y-4">
              {SPECS.map(({ label, value }) => (
                <div
                  key={label}
                  className="group flex cursor-default items-end justify-between border-b border-white/10 pb-3"
                >
                  <span className="font-space-grotesk text-xs text-white/70 transition-colors group-hover:text-white">
                    {label}
                  </span>
                  <span className="font-jetbrains text-xs tracking-tight text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex w-full items-center md:w-auto"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: reduce ? 0 : 1 }}
          >
            <div className="pointer-events-auto flex w-full flex-wrap gap-2 rounded-2xl border border-white/5 bg-white/10 p-2 backdrop-blur-md md:w-auto md:rounded-full">
              <span className="rounded-full bg-white px-4 py-2 font-jetbrains text-[10px] tracking-widest text-black">
                TS/JS
              </span>
              <span className="rounded-full border border-white/20 px-3 py-2 font-jetbrains text-[10px] tracking-widest text-white">
                50+
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 font-jetbrains text-[10px] tracking-widest text-white">
                Full-stack
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 font-jetbrains text-[10px] tracking-widest text-white">
                Cloud-ready
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
