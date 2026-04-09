import { ImmersiveReveal } from "./motion/ImmersiveReveal";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    phase: "Discover & Design",
    title: "Architecture & product definition",
    description:
      "Workshops, domain modeling, and technical spikes so we agree on scope, risks, and the smallest valuable release. You get roadmaps, APIs, data models, and UX that match how your team really works.",
    tags: ["Discovery", "Architecture", "UX & Flows"],
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  },
  {
    id: "02",
    phase: "Build & Ship",
    title: "Engineering, integrations & launch",
    description:
      "Full-stack implementation, third-party integrations, secure deployments, and handoff your team can run with. We've done this fifty times across industries — always as custom work, never a one-size template.",
    tags: ["Engineering", "Integrations", "Deployment"],
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      id="features"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <ImmersiveReveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/30">02</span>
            <div className="h-px w-8 bg-white/15" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              What we build
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Custom software,{" "}
              <span className="italic">end&nbsp;to&nbsp;end</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/45 sm:text-right">
              From first brief to production — we own the full delivery.
            </p>
          </div>
        </ImmersiveReveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ImmersiveReveal
              key={s.id}
              delay={i * 0.08}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
            >
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  src={s.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                {/* Index + phase row */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">
                    {s.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {s.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.1] px-3 py-1 text-[11px] uppercase tracking-wide text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ImmersiveReveal>
          ))}
        </div>

        {/* Pricing */}
        <ImmersiveReveal delay={0.1} className="mt-4">
          <div
            id="pricing"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
          >
            <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-white/30">03</span>
                  <div className="h-px w-8 bg-white/15" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Pricing
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
                  Every engagement is scoped to your stack, timeline, and risk.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Share goals, constraints, and a rough timeline — we'll respond
                  with a clear proposal: milestones, team shape, and what "done"
                  means for your first release.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Request a proposal
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
