import { ArrowRight } from "lucide-react";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

export default function SpaceCTASection() {
  return (
    <section
      id="space-cta"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-36">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-neon" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              Ready to start
            </span>
          </div>

          <h2 className="font-grotesk text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-tight">
            Turn your
            <br />
            <span className="text-white/30">chaos into</span>
            <br />
            a system.
          </h2>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/55 md:text-lg">
            Tell us what you're building. We'll scope it, ship it, and hand it
            off as software your team actually owns.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@blackmattertech.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Email us directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
