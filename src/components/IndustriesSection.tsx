import { motion } from "framer-motion";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const INDUSTRIES = [
  {
    name: "Healthcare",
    description: "Compliance, clinical ops, patient data",
  },
  {
    name: "Finance",
    description: "Risk, trading platforms, banking systems",
  },
  {
    name: "Logistics",
    description: "Fleet, routing, dispatch & fulfilment",
  },
  {
    name: "Manufacturing",
    description: "ERP, production ops, quality control",
  },
  {
    name: "Real Estate",
    description: "Property management & portfolio tools",
  },
  {
    name: "SaaS",
    description: "Platform engineering & API infrastructure",
  },
  {
    name: "Government",
    description: "Citizen services & data systems",
  },
  {
    name: "E-commerce",
    description: "Ops, inventory & fulfilment platforms",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <ImmersiveReveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              05
            </span>
            <span className="h-px flex-1 max-w-[40px] bg-white/[0.12]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              Industries
            </span>
          </div>

          <h2 className="font-grotesk text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] tracking-tight">
            Built for every
            <br />
            <span className="text-white/30">sector.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
            If your problem is complex and your team has outgrown generic
            software, we've likely solved something similar.
          </p>
        </ImmersiveReveal>

        {/* Industries grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={cardVariants}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
            >
              <h3 className="font-grotesk text-sm uppercase tracking-widest text-white">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
