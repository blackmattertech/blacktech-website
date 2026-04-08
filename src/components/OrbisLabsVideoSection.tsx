import { Github, Mail, MessageSquare } from "lucide-react";
import PageContainer from "./layout/PageContainer";
import StickySiteNav from "./StickySiteNav";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

/**
 * Full-viewport hero: space video, headline, neon tagline, vertical contact stack.
 */
export default function OrbisLabsVideoSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh scroll-mt-16 overflow-hidden rounded-b-2xl bg-black text-white sm:rounded-b-[32px]"
    >
      <StickySiteNav />
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-[1] bg-black/50" />

      <div className="absolute right-4 top-[5.5rem] z-20 flex flex-col gap-3 sm:right-6 md:hidden xl:right-8">
        <a
          href="mailto:info@blackmattertech.com"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="Email BlackMatter Technologies"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/blackmattertech"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="BlackMatter Technologies on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="Contact form"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      <PageContainer className="relative z-10 flex min-h-dvh w-full !max-w-none flex-col justify-center px-4 py-14 pb-16 pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4.25rem))] sm:px-6 sm:py-20 sm:pb-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 xl:py-32">
        <div className="relative w-full max-w-none max-md:pr-12 sm:max-md:pr-14">
          <h1 className="font-grotesk w-full max-w-none text-balance uppercase leading-[1.1] tracking-[-0.02em] text-white sm:leading-[1.08] md:leading-[1.06] lg:leading-[1.05] xl:leading-[1.04] text-[clamp(1.875rem,calc(6.5vw+1.1rem),3.75rem)] sm:text-[clamp(2.125rem,calc(7.5vw+0.75rem),4.5rem)] md:text-[clamp(2.5rem,calc(8vw+0.85rem),5.75rem)] lg:text-[clamp(3rem,calc(8.5vw+0.5rem),7rem)] xl:text-[clamp(3.5rem,calc(9vw+0.25rem),8rem)] 2xl:text-[clamp(4rem,calc(9.5vw+0.5rem),9.5rem)]">
            Custom software for teams who&apos;ve outgrown off-the-shelf
          </h1>
          <div className="pointer-events-none mt-8 w-full max-w-[min(100%,42rem)] sm:mt-10 md:mt-12 md:max-w-[min(100%,48rem)] lg:max-w-[min(100%,56rem)]">
            <p className="-rotate-1 font-condiment normal-case leading-snug text-neon opacity-95 mix-blend-exclusion sm:leading-normal text-[clamp(1.35rem,calc(3.8vw+0.65rem),2.25rem)] sm:text-[clamp(1.5rem,calc(4.2vw+0.5rem),2.75rem)] md:text-[clamp(1.75rem,calc(4.5vw+0.5rem),3.25rem)] lg:text-[clamp(2rem,calc(4.8vw+0.25rem),3.75rem)] xl:text-[clamp(2.25rem,5vw,4.25rem)]">
              Transforming Chaos into Systems
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
