import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function PhilosophySection() {
  return (
    <section className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <ImmersiveReveal intensity="deep" className="mb-16 block md:mb-24">
          <h2 className="text-5xl tracking-tight text-white md:text-7xl lg:text-8xl">
            <span
              className="italic text-white/40"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Chaos
            </span>{" "}
            into{" "}
            <span
              className="italic text-white/40"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              systems
            </span>
          </h2>
        </ImmersiveReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <ImmersiveReveal delay={0.08} className="aspect-[4/3] overflow-hidden rounded-3xl">
            <video
              className="h-full w-full object-cover"
              src={VIDEO_SRC}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </ImmersiveReveal>

          <ImmersiveReveal delay={0.14} className="flex flex-col justify-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                From chaos
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Messy processes, legacy data, and “we’ve always done it this
                way” are where custom software earns its keep. We untangle
                requirements with your team, document decisions, and build so
                you’re not dependent on a black box—ownership stays with you.
              </p>
            </div>
            <div className="my-8 h-px w-full bg-white/10" />
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                To systems
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                A real system is observable, maintainable, and ready for the
                next feature. Whether you need a greenfield product or a
                surgical rebuild, we ship software that your operators trust and
                your engineers can extend—with tests, monitoring, and sensible
                boundaries between services.
              </p>
            </div>
          </ImmersiveReveal>
        </div>
      </div>
    </section>
  );
}
