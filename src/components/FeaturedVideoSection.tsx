import { motion } from "framer-motion";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";

export default function FeaturedVideoSection() {
  return (
    <section className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="relative mx-auto max-w-6xl">
        <ImmersiveReveal intensity="deep" className="relative block aspect-video overflow-hidden rounded-3xl">
          <video
            className="h-full w-full object-cover"
            src={VIDEO_SRC}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
                  Our approach
                </p>
                <p className="text-sm leading-relaxed text-white md:text-base">
                  BlackMatter Technologies maps your workflows, constraints, and
                  edge cases—then ships software that fits: APIs, dashboards,
                  automation, and integrations that stay maintainable in
                  production.
                </p>
              </div>
              <motion.a
                href="#features"
                className="liquid-glass inline-flex shrink-0 rounded-full px-8 py-3 text-sm font-medium text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See how we build
              </motion.a>
            </div>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
