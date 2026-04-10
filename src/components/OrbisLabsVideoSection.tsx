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
        <div className="relative mt-4 w-full max-w-none text-center max-md:pr-12 sm:mt-6 sm:max-md:pr-14 md:mt-8">
          <h1 className="font-grotesk w-full max-w-none text-balance uppercase leading-[1.1] tracking-[-0.02em] text-white sm:leading-[1.08] md:leading-[1.06] lg:leading-[1.05] xl:leading-[1.04] text-[clamp(1.406rem,calc(4.875vw+0.825rem),2.813rem)] sm:text-[clamp(1.594rem,calc(5.625vw+0.563rem),3.375rem)] md:text-[clamp(1.875rem,calc(6vw+0.638rem),4.313rem)] lg:text-[clamp(2.25rem,calc(6.375vw+0.375rem),5.25rem)] xl:text-[clamp(2.625rem,calc(6.75vw+0.188rem),6rem)] 2xl:text-[clamp(3rem,calc(7.125vw+0.375rem),7.125rem)]">
            Custom software for teams who&apos;ve outgrown off-the-shelf
          </h1>
          <div className="pointer-events-none mx-auto mt-8 w-full max-w-[min(100%,42rem)] sm:mt-10 md:mt-12 md:max-w-[min(100%,48rem)] lg:max-w-[min(100%,56rem)]">
            <p className="-rotate-1 font-condiment normal-case leading-snug text-neon opacity-95 mix-blend-exclusion sm:leading-normal text-[clamp(1.013rem,calc(2.85vw+0.488rem),1.688rem)] sm:text-[clamp(1.125rem,calc(3.15vw+0.375rem),2.063rem)] md:text-[clamp(1.313rem,calc(3.375vw+0.375rem),2.438rem)] lg:text-[clamp(1.5rem,calc(3.6vw+0.188rem),2.813rem)] xl:text-[clamp(1.688rem,3.75vw,3.188rem)]">
              Transforming Chaos into Systems
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
