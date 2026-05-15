import { ImmersiveReveal } from "./motion/ImmersiveReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <ImmersiveReveal>
          <div className="mb-2 text-left">
            <p
              className="font-grotesk uppercase leading-[0.92] tracking-tight text-white"
              style={{
                fontSize: "clamp(2.75rem, 11vw, 5.75rem)",
              }}
            >
              HELLO!
            </p>
            <p
              className="font-grotesk uppercase leading-[0.92] tracking-tight text-white"
              style={{
                fontSize: "clamp(2.75rem, 11vw, 5.75rem)",
                marginTop: "-0.04em",
              }}
            >
              WE&apos;RE BLACKMATTER
            </p>
            <p
              className="font-yellowtail font-normal normal-case leading-none text-neon"
              style={{
                fontSize: "clamp(2.25rem, 7vw, 4.25rem)",
                marginTop: "0.02em",
                /* ~width of "WE'RE " in Anton at this scale — aligns T under B */
                paddingLeft: "clamp(3.1rem, 17.5vw, 8.35rem)",
              }}
            >
              Technologies
            </p>
          </div>
        </ImmersiveReveal>

        <ImmersiveReveal delay={0.06} intensity="deep" className="mt-10 block md:mt-12">
          <h2
            className="text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="italic text-white/60">A trusted</span>{" "}
            custom software development partner that simplifies{" "}
            <span className="italic text-neon">complex operations</span>
            —replacing spreadsheets, brittle integrations, and{" "}
            <span className="italic text-neon">chaos</span>
            <br className="hidden sm:block" />
            <span className="italic text-white/60">
              with systems shaped to how your business{" "}
            </span>
            <span className="italic text-neon">actually runs.</span>
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
