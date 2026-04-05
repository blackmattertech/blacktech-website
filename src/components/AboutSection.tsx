import { ImmersiveReveal } from "./motion/ImmersiveReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 pb-10 pt-32 md:pb-14 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <ImmersiveReveal>
          <p className="text-sm uppercase tracking-widest text-white/40">
            About Us
          </p>
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.06} intensity="deep" className="mt-6 block">
          <h2
            className="text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="italic text-white/60">BlackMatter Technologies</span>{" "}
            builds software that simplifies complex operations—replacing
            spreadsheets, brittle integrations, and{" "}
            <span className="italic text-white/60">chaos</span>
            <br className="hidden sm:block" />
            <span className="italic text-white/60">
              with systems shaped to how your business actually runs.
            </span>
          </h2>
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.14} className="mt-14 block">
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                50+
              </p>
              <p className="mt-2 text-sm text-white/45">
                Custom software products shipped—from internal ops tools to
                customer-facing platforms.
              </p>
            </div>
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Every
              </p>
              <p className="mt-2 text-sm text-white/45">
                Industry served. If your problem is unique, your software should
                be too—not a forced template.
              </p>
            </div>
            <div>
              <p
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                One
              </p>
              <p className="mt-2 text-sm text-white/45">
                Motto: transform chaos into systems. Clarity, ownership, and code
                you can grow with.
              </p>
            </div>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
