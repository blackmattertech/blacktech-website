import { motion } from "framer-motion";
import { HlsVideo } from "./HlsVideo";

const MUX_HLS =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const STATS = [
  { value: "50+", label: "Custom systems shipped" },
  { value: "12+", label: "Industries in production" },
  { value: "100%", label: "Dedicated product teams" },
] as const;

export default function CompanyStatsSection() {
  return (
    <section
      id="company-stats"
      className="relative overflow-hidden border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      {/* Video background */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <HlsVideo
          src={MUX_HLS}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="border-t border-white/[0.08] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0 first:md:border-l-0 first:md:pl-0"
            >
              <p className="font-display text-5xl italic tabular-nums text-white md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
