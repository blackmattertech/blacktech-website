import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Maximize,
  Snowflake,
  Zap,
} from "lucide-react";

const CONTACT_EMAIL = "info@blackmattertech.com";

const CONTACT_PILLS = [
  {
    label: "GitHub",
    href: "https://github.com/blackmattertech",
    Icon: Github,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/blackmattertech",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blackmattertech",
    Icon: Instagram,
  },
] as const;

const SPLINE_SCENE =
  "https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SPECS = [
  { label: "Stack", value: "TypeScript + React + Node" },
  { label: "Delivery", value: "Discovery → production" },
  { label: "Shipped", value: "50+ custom products" },
  { label: "Scale", value: "Multi-industry teams" },
] as const;

/**
 * Site footer: Spline scene + specs + sole “Contact us” entry point (no SiteFooter).
 */
export default function SplineFooterSection() {
  const reduce = useReducedMotion();

  return (
    <footer
      id="spline-footer"
      className="relative min-h-[min(100svh,900px)] overflow-x-hidden bg-black text-white selection:bg-white selection:text-black"
      aria-label="Site footer"
    >
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

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,900px)] max-w-6xl flex-col justify-between px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16 pointer-events-none">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 space-y-6 md:space-y-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="mb-2 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/45">
                BlackMatter
              </p>
              <h2 className="max-w-xl font-orbitron text-[32px] font-light uppercase leading-[1] tracking-tight text-transparent sm:text-[44px] md:text-[56px] md:leading-[0.95] bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text">
                Systems
                <br />
                at a glance •
              </h2>
            </motion.div>

            <motion.p
              className="max-w-md font-space-grotesk text-sm font-light leading-relaxed text-white/80"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: reduce ? 0 : 0.2 }}
            >
              How we build: typed stacks, clear delivery, and production habits
              you can run long after launch.
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
            className="pointer-events-auto w-full p-2 md:max-w-md md:p-4"
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
            <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
              © {new Date().getFullYear()} BlackMatter Technologies. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-stretch gap-3 md:w-auto md:items-end"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: reduce ? 0 : 1 }}
          >
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/50">
              Contact us
            </p>
            <div className="pointer-events-auto flex w-full flex-wrap gap-2 rounded-2xl border border-white/5 bg-white/10 p-2 backdrop-blur-md md:w-auto md:justify-end md:rounded-full">
              {CONTACT_PILLS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 font-jetbrains text-[10px] tracking-widest transition-colors md:px-4 ${
                    label === "Email"
                      ? "border-transparent bg-white text-black hover:bg-white/90"
                      : "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
