import { motion } from "framer-motion";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const STEPS = [
  {
    index: "01",
    title: "Discover",
    description:
      "We map your domain, workflows, and constraints. Output: agreed scope, risk register, and a measurable definition of done.",
  },
  {
    index: "02",
    title: "Architect",
    description:
      "APIs, data models, and system design documented before writing code. Every decision is reviewed and agreed with your team.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "Full-stack implementation with CI/CD from day one. Typed, tested, and reviewed at every commit.",
  },
  {
    index: "04",
    title: "Ship",
    description:
      "Production deploy, runbooks, and a codebase your team can extend long after we hand off.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <ImmersiveReveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              02
            </span>
            <span className="h-px flex-1 max-w-[40px] bg-white/[0.12]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              How we work
            </span>
          </div>

          <h2 className="font-grotesk text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] tracking-tight">
            From brief to
            <br />
            <span className="text-white/30">production.</span>
          </h2>
        </ImmersiveReveal>

        {/* Steps grid */}
        <div className="relative mt-16">
          {/* Connector line — desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-px bg-white/[0.07] lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.index}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={cardVariants}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
              >
                {/* Large decorative index number */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] leading-none text-white/[0.04] select-none"
                >
                  {step.index}
                </div>

                {/* Step marker dot */}
                <div className="relative mb-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-neon" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
                    {step.index}
                  </span>
                </div>

                <h3 className="font-grotesk text-lg uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
