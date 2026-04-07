const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";

const LEAD =
  "BlackMatter Technologies designs and ships intelligent, scalable software—ERP, CRM, integrations, and internal platforms—when off-the-shelf products stop matching how you operate.";

const DECOR_LINES = [
  "Chaos into systems: clear scope, production-grade code, and ownership you keep.",
  "From discovery to handoff—APIs, workflows, and data models your team can extend.",
  "Healthcare, finance, logistics, and beyond: custom stacks for complex domains.",
] as const;

export default function SpaceIntroSection() {
  return (
    <section
      id="space-intro"
      className="relative min-h-screen overflow-hidden rounded-b-[32px] bg-black text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <h2 className="font-grotesk text-[32px] uppercase leading-[1.05] sm:text-4xl md:text-5xl lg:text-[60px]">
              Hello!
              <br />
              We&apos;re BlackMatter
            </h2>
            <p className="mt-3 font-condiment text-[clamp(2rem,6vw,4.25rem)] normal-case leading-none text-neon opacity-90 mix-blend-exclusion">
              Technologies
            </p>
          </div>

          <p className="max-w-[min(100%,320px)] font-mono text-xs uppercase leading-relaxed text-white sm:text-sm md:text-base">
            {LEAD}
          </p>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-10 lg:mt-24 lg:flex-row lg:gap-8">
          <div className="max-w-xl space-y-6 font-mono text-xs uppercase leading-relaxed text-white/[0.07] lg:text-sm">
            <p>{DECOR_LINES[0]}</p>
            <p>{DECOR_LINES[1]}</p>
          </div>
          <div className="hidden max-w-xl space-y-6 font-mono text-sm uppercase leading-relaxed text-white/[0.07] lg:block">
            <p>{DECOR_LINES[2]}</p>
            <p>{DECOR_LINES[0]}</p>
          </div>
        </div>

        <div className="mt-10 space-y-6 font-mono text-xs uppercase leading-relaxed text-white/5 lg:hidden">
          <p>{DECOR_LINES[1]}</p>
          <p>{DECOR_LINES[2]}</p>
        </div>
      </div>
    </section>
  );
}
