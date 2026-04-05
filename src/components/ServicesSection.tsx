import { ImmersiveReveal } from "./motion/ImmersiveReveal";
import { ArrowUpRight } from "lucide-react";

const CARD_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
] as const;

export default function ServicesSection() {
  return (
    <section id="features" className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />

        <ImmersiveReveal className="relative mb-12 flex items-end justify-between md:mb-16">
          <h2 className="text-3xl tracking-tight text-white md:text-5xl">
            What we build
          </h2>
          <p className="hidden text-sm text-white/40 md:block">
            Custom software, end to end
          </p>
        </ImmersiveReveal>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <ImmersiveReveal delay={0.06} className="group liquid-glass overflow-hidden rounded-3xl">
            <div className="relative aspect-video overflow-hidden">
              <video
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={CARD_VIDEOS[0]}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Discover & design
                </span>
                <span className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </div>
              <h3 className="mb-3 text-xl tracking-tight text-white md:text-2xl">
                Architecture & product definition
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Workshops, domain modeling, and technical spikes so we agree on
                scope, risks, and the smallest valuable release. You get
                roadmaps, APIs, data models, and UX that match how your team
                really works.
              </p>
            </div>
          </ImmersiveReveal>

          <ImmersiveReveal delay={0.14} className="group liquid-glass overflow-hidden rounded-3xl">
            <div className="relative aspect-video overflow-hidden">
              <video
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={CARD_VIDEOS[1]}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Build & ship
                </span>
                <span className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </div>
              <h3 className="mb-3 text-xl tracking-tight text-white md:text-2xl">
                Engineering, integrations & launch
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Full-stack implementation, third-party integrations, secure
                deployments, and handoff your team can run with. We’ve done this
                fifty times across industries—always as custom work, never a
                one-size template.
              </p>
            </div>
          </ImmersiveReveal>
        </div>

        <ImmersiveReveal delay={0.08} className="mt-16 block md:mt-20">
          <div
            id="pricing"
            className="relative scroll-mt-24 border-t border-white/10 pt-12 md:pt-16"
          >
            <div className="liquid-glass mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-10">
              <p className="text-xs uppercase tracking-widest text-white/45">
                Pricing
              </p>
              <p className="mt-3 text-lg text-white md:text-xl">
                Every engagement is scoped to your stack, timeline, and risk.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Share goals, constraints, and a rough timeline—we’ll respond with
                a clear proposal: milestones, team shape, and what “done” means for
                your first release.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Request a proposal
              </a>
            </div>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
