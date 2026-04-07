const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_192508_4eecde4c-f835-4f4b-b255-eafd1156da99.mp4";

const MAIL = "mailto:info@blackmattertech.com";

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
        <div className="max-w-xl py-16 lg:py-0 lg:pr-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
            BlackMatter Technologies
          </p>
          <h1
            className="text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Custom software when off-the-shelf stops working
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            We design and ship intelligent, scalable systems—dashboards, APIs,
            integrations, and platforms your team can own.{" "}
            <span className="text-white/95">50+ products delivered</span> across
            healthcare, finance, logistics, and more: from chaos to clarity,
            with code you can grow.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-medium text-black transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href={MAIL}
              className="liquid-glass inline-flex h-14 items-center justify-center rounded-full px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-white/5"
            >
              Email us
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block">
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent" />
        <video
          className="relative z-0 h-full w-full rounded-bl-2xl object-cover opacity-90"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
