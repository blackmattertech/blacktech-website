import { Github, Mail, MessageSquare } from "lucide-react";
import PageContainer from "./layout/PageContainer";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

/**
 * Space-themed full-bleed strip for BlackMatter Technologies (Anton + Condiment).
 */
export default function OrbisLabsVideoSection() {
  return (
    <section
      id="orbis-labs"
      className="relative min-h-screen overflow-hidden rounded-b-[32px] bg-space text-cream"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-space/45" />

      <PageContainer className="relative z-20 pt-6 md:pt-8">
        <span className="inline-block font-grotesk text-base uppercase tracking-wide">
          BlackMatter Technologies
        </span>
      </PageContainer>

      <div className="absolute right-6 top-24 z-20 hidden lg:flex lg:flex-col lg:gap-3 xl:top-28">
        <a
          href="mailto:info@blackmattertech.com"
          className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition-colors hover:bg-white/10"
          aria-label="Email BlackMatter Technologies"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/blackmattertech"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition-colors hover:bg-white/10"
          aria-label="BlackMatter Technologies on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition-colors hover:bg-white/10"
          aria-label="Contact form"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      <PageContainer className="relative z-10 flex flex-col justify-center py-28 pb-32 lg:py-36 lg:pb-40">
        <div className="relative max-w-[880px] lg:ml-32">
          <h2 className="font-grotesk text-[40px] uppercase leading-[1.05] sm:text-[60px] sm:leading-[1] md:text-[75px] lg:text-[90px]">
            Custom software
            <br />
            for teams who&apos;ve
            <br />
            outgrown
            <br />
            off-the-shelf
          </h2>
          <div className="pointer-events-none mt-6 max-w-md lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:max-w-[min(100%,14rem)] lg:-translate-y-1/2 lg:translate-x-[4%] xl:max-w-xs xl:translate-x-[10%]">
            <p className="-rotate-1 font-condiment text-2xl normal-case leading-tight text-neon opacity-90 mix-blend-exclusion sm:text-3xl md:text-4xl xl:text-[48px]">
              Chaos into systems
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-3 lg:hidden">
          <a
            href="mailto:info@blackmattertech.com"
            className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream hover:bg-white/10"
            aria-label="Email BlackMatter Technologies"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/blackmattertech"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream hover:bg-white/10"
            aria-label="BlackMatter Technologies on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream hover:bg-white/10"
            aria-label="Contact form"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
