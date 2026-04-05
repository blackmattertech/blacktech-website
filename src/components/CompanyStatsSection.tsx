import { motion } from "framer-motion";
import PageContainer from "./layout/PageContainer";
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
    <section id="company-stats" className="relative overflow-hidden bg-folio-bg py-16 text-folio-text md:py-24">
      <div className="pointer-events-none absolute inset-0 min-h-[280px] opacity-30">
        <HlsVideo
          src={MUX_HLS}
          className="absolute inset-0 h-full min-h-[280px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-folio-bg/85" />
      </div>

      <PageContainer className="relative z-10">
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-t border-folio-line pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0 first:md:border-l-0 first:md:pl-0"
            >
              <p className="font-display text-5xl italic tabular-nums md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wide text-folio-muted">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  );
}
