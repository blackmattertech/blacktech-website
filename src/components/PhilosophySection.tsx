import { SpotlightSectionHeading } from "./SpotlightSectionHeading";

const MAIL = "mailto:info@blackmattertech.com";
const BLOCKS = [
  {
    title: "Leads Coming, But Not Converting?",
    problem:
      "Leads come from your website, ads, or WhatsApp, but there is no consistent system to track, follow up, and convert them.",
    solution:
      "We build CRM-driven sales systems to capture every lead, automate follow-ups, and track the full pipeline.",
    outcome: "No opportunity is missed.",
  },
  {
    title: "Operations Feel Chaotic?",
    problem:
      "Managing orders, inventory, or workflows manually creates confusion and delays across teams.",
    solution:
      "We build operational systems that track everything in one place and bring clarity to day-to-day execution.",
    outcome: "Your business runs smoothly with fewer errors.",
  },
  {
    title: "Too Many Tools, No Real System?",
    problem:
      "Disconnected apps create data loss, miscommunication, and inefficiency across departments.",
    solution:
      "We connect your website, CRM, WhatsApp, and automation stack into one unified system.",
    outcome: "Your team works from one source of truth.",
  },
  {
    title: "Growth Feels Stuck?",
    problem:
      "Marketing and sales efforts continue, but outcomes are inconsistent and hard to scale.",
    solution:
      "We design systems that scale with your business, not quick fixes that break later.",
    outcome: "You get clarity, control, and predictable growth.",
  },
] as const;

/**
 * BlackMatter spotlight — matches site dark theme (black, white type, liquid-glass CTAs).
 */
export default function PhilosophySection() {
  return (
    <section
      id="growth-hero"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-6 md:px-8">
        <div className="w-full py-16 lg:py-0">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
            BlackMatter Technologies
          </p>
          <div className="max-w-5xl">
            <SpotlightSectionHeading>
              From Scattered Tools to Scalable Systems
            </SpotlightSectionHeading>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl">
            If your business is running on WhatsApp, Excel, and disconnected
            tools - you are not alone. But you are also not set up to scale.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {BLOCKS.map((block) => (
              <article key={block.title} className="bm-problem-card">
                <div className="bm-problem-card__corner" aria-hidden>
                  <span className="bm-problem-card__arrow">→</span>
                </div>
                <h3 className="bm-problem-card__title text-base font-semibold text-white sm:text-lg">
                  {block.title}
                </h3>
                <p className="bm-problem-card__body mt-1.5 text-sm leading-relaxed text-white/65">
                  {block.problem}
                </p>
                <p className="bm-problem-card__body mt-2 text-sm leading-relaxed text-white/75">
                  {block.solution}
                </p>
                <p className="bm-problem-card__body mt-2 text-sm font-medium text-white/95">
                  {block.outcome}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/88 sm:text-lg">
            We do not just build software. We build systems that bring clarity,
            control, and growth to your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-medium text-black transition-opacity hover:opacity-90"
            >
              Let&apos;s Build Your System
            </a>
            <a
              href={MAIL}
              className="liquid-glass inline-flex h-14 items-center justify-center rounded-full px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-white/5"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
