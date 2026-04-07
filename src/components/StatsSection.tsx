import { motion } from "framer-motion";

const STATS = [
  {
    value: "50+",
    label: "Custom systems shipped",
    description:
      "From internal ops tools to customer-facing platforms across industries.",
  },
  {
    value: "12+",
    label: "Sectors in production",
    description: "Healthcare, finance, logistics, manufacturing, and more.",
  },
  {
    value: "100%",
    label: "Scoped to your stack",
    description:
      "No templates, no SaaS wrappers. Every system is purpose-built.",
  },
  {
    value: "<90d",
    label: "Average to launch",
    description:
      "From signed brief to live production on our fastest engagements.",
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              06
            </span>
            <span className="h-px flex-1 max-w-[40px] bg-white/[0.12]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
              By the numbers
            </span>
          </div>

          <h2 className="font-grotesk text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] tracking-tight">
            Proven at
            <br />
            <span className="text-white/30">scale.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-white/[0.07] py-10 first:border-t-0 first:pt-0 sm:border-l sm:border-t-0 sm:px-8 sm:py-0 sm:first:border-l-0 sm:first:pl-0 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(3)]:border-l-0 sm:[&:nth-child(3)]:border-t sm:[&:nth-child(3)]:pt-10 lg:[&:nth-child(3)]:border-l lg:[&:nth-child(3)]:border-t-0 lg:[&:nth-child(3)]:pt-0"
            >
              <p className="font-display text-5xl italic leading-none tracking-tight text-white md:text-7xl">
                {stat.value}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                {stat.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
