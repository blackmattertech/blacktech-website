import { ArrowRight, GithubIcon, Mail } from "lucide-react";
import StickySiteNav from "./StickySiteNav";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

export default function OrbisLabsVideoSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden rounded-b-[2.5rem] bg-black text-white"
    >
      <StickySiteNav />

      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 z-[1] bg-black/40" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 md:px-8 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-neon" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              BlackMatter Technologies
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-grotesk text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.95] tracking-tight">
            Transforming
            <br />
            <span className="text-white/30">chaos into</span>
            <br />
            systems.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            Custom software for complex operations — ERP, integrations, CRM,
            and internal platforms built exactly to how your business runs.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#selected-work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              View our work
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex items-center gap-4">
            <a
              href="mailto:info@blackmattertech.com"
              className="flex items-center gap-2 text-xs text-white/35 transition-colors hover:text-white/70"
            >
              <Mail className="h-3.5 w-3.5" />
              info@blackmattertech.com
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href="https://github.com/blackmattertech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/35 transition-colors hover:text-white/70"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              github.com/blackmattertech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
