import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const PRINCIPLES = [
  {
    title: "We Care About What Actually Matters",
    body: [
      "We show up when it counts — at moments where decisions feel heavy and the stakes are real.",
      "Not just to deliver work, but to bring clarity, direction, and confidence when it's needed the most.",
    ],
  },
  {
    title: "We Believe Work Should Mean Something",
    body: [
      "Anyone can make something look good.",
      "We care about what it does — how it performs, how it feels to use, and how it impacts your business every single day.",
    ],
  },
  {
    title: "We Build With You, Not For You",
    body: [
      "We don't see ourselves as vendors.",
      "We work alongside you — understanding your journey, your challenges, and your ambition — building systems that grow with you over time.",
    ],
  },
  {
    title: "We Bring Order to Chaos",
    body: [
      "Most businesses don't fail because of lack of effort — they struggle because of lack of clarity.",
      "We create structure, systems, and simplicity so your team can focus, move faster, and operate with confidence.",
    ],
  },
] as const;

/** Off-white panel (#F9F9F9) — matches reference layout; dark type for contrast. */
export default function PrinciplesSection() {
  return (
    <section
      id="principles"
      data-header-surface="light"
      className="border-t border-[#E8E8E8] bg-[#F9F9F9] py-20 text-[#111111] md:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <ImmersiveReveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#737373]">
            How we work
          </p>
          <h2 className="font-grotesk text-[clamp(1.65rem,4vw,2.75rem)] font-bold uppercase leading-[1.12] tracking-tight">
            <span className="text-neon">Why choose us</span>{" "}
            <span className="text-black">as your software partner</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-normal leading-relaxed text-[#4A4A4A] md:text-lg">
            Clarity, partnership, and systems — held together by{" "}
            <span className="font-medium text-[#1a1a1a]">
              standards we actually live by
            </span>
            , not slides. Our{" "}
            <span className="font-semibold text-neon">Principles</span>{" "}
            keep us honest when projects get complex.
          </p>
        </ImmersiveReveal>

        <div className="mt-14 border-t border-[#E5E5E5] pt-12 md:mt-16 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {PRINCIPLES.map((item, i) => (
              <ImmersiveReveal
                key={item.title}
                delay={0.06 + i * 0.05}
                className="h-full"
              >
                <article
                  className={[
                    "group relative flex h-full flex-col py-10 text-left transition-[transform,color] duration-300 ease-out hover:-translate-y-0.5 lg:py-8",
                    i < PRINCIPLES.length - 1
                      ? "border-b border-[#E5E5E5] lg:border-b-0"
                      : "",
                    i > 0
                      ? "lg:pl-8 lg:before:absolute lg:before:left-0 lg:before:top-[6%] lg:before:h-[88%] lg:before:w-px lg:before:bg-[#E5E5E5] lg:before:content-[''] xl:pl-10"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3 className="font-body text-lg font-bold leading-snug tracking-tight text-black md:text-xl">
                    {item.title}
                  </h3>
                  <div className="mt-4 space-y-3 font-body text-sm font-normal leading-relaxed text-[#4A4A4A] transition-colors duration-300 group-hover:text-[#333333] md:text-[15px]">
                    {item.body.map((para, j) => (
                      <p key={`${i}-${j}`}>{para}</p>
                    ))}
                  </div>
                </article>
              </ImmersiveReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
