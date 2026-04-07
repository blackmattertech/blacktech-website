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
      className="relative min-h-screen scroll-mt-16 overflow-hidden rounded-b-[32px] bg-space text-cream"
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
      <div className="absolute inset-0 z-[1] bg-space/45" />

      <div className="absolute right-4 top-[5.5rem] z-20 flex flex-col gap-3 sm:right-6 sm:top-24 md:top-28 lg:top-32 xl:right-8">
        <a
          href="mailto:info@blackmattertech.com"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-cream transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="Email BlackMatter Technologies"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/blackmattertech"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-cream transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="BlackMatter Technologies on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-xl text-cream transition-colors hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-[1rem]"
          aria-label="Contact form"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      <PageContainer className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 pb-28 sm:py-24 sm:pb-32 lg:min-h-screen lg:py-28 lg:pb-40">
        <div className="relative max-w-[min(100%,920px)] pr-14 sm:pr-4 lg:ml-8 lg:max-w-[880px] xl:ml-16">
          <h1 className="font-grotesk text-[clamp(1.35rem,4.2vw,3.35rem)] uppercase leading-[1.02] tracking-tight sm:leading-[0.98] md:text-[clamp(1.75rem,4.5vw,4.25rem)] lg:text-[clamp(2.25rem,4.8vw,5.5rem)]">
            Custom software for teams who&apos;ve outgrown off-the-shelf
          </h1>
          <div className="pointer-events-none mt-5 max-w-md sm:mt-6 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:max-w-[min(100%,15rem)] lg:-translate-y-1/2 lg:translate-x-[2%] xl:max-w-xs xl:translate-x-[8%]">
            <p className="-rotate-1 font-condiment text-2xl normal-case leading-tight text-neon opacity-95 mix-blend-exclusion sm:text-3xl md:text-4xl lg:text-[clamp(2rem,3.5vw,3rem)] xl:text-[48px]">
              Chaos into systems
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
