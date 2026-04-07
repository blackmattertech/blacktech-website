import { ImmersiveReveal } from "./motion/ImmersiveReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ImmersiveReveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/30">00</span>
            <div className="h-px w-8 bg-white/15" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              About
            </span>
          </div>
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.06} intensity="deep" className="mt-6 block">
          <h2
            className="text-4xl leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We build software that replaces{" "}
            <span className="italic text-white/40">spreadsheets, broken
            integrations, and manual workarounds</span>{" "}
            with systems shaped to how your business actually runs.
          </h2>
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.12} className="mt-14 block">
          <div className="grid grid-cols-1 gap-8 border-t border-white/[0.07] pt-10 sm:grid-cols-3">
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                50+
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                Custom software products shipped — from internal ops tools to
                customer-facing platforms.
              </p>
            </div>
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                12+
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                Industries served. Healthcare, finance, logistics, and more —
                no two solutions the same.
              </p>
            </div>
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                100%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                Custom. Every system we ship is scoped, built, and handed off
                specifically for your operations.
              </p>
            </div>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
