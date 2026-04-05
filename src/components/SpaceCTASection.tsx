import { Github, Mail, MessageSquare } from "lucide-react";
import PageContainer from "./layout/PageContainer";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

export default function SpaceCTASection() {
  return (
    <section id="space-cta" className="relative bg-space text-cream">
      <div className="relative w-full">
        <video
          className="block h-auto w-full"
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-space/40" />

        <div className="absolute inset-0 flex items-center justify-end">
          <PageContainer className="relative h-full w-full">
            <div className="absolute right-0 top-1/2 w-full max-w-xl -translate-y-1/2 px-4 text-right lg:pr-[20%] lg:pl-[15%]">
              <p
                className="pointer-events-none absolute -left-2 -top-8 font-condiment normal-case text-[17px] text-neon mix-blend-exclusion sm:-top-10 sm:text-2xl md:text-4xl lg:-top-16 lg:text-5xl xl:text-[68px]"
              >
                Go beyond
              </p>
              <h2 className="font-grotesk text-base uppercase leading-tight sm:text-xl md:text-3xl lg:text-4xl xl:text-[60px]">
                <span className="mb-4 block sm:mb-8 lg:mb-12">
                  Work with us.
                </span>
                Ship systems your
                <br />
                operators trust.
                <br />
                Scale with clarity.
              </h2>
            </div>
          </PageContainer>
        </div>

        <div className="absolute bottom-[12%] left-[8%] sm:bottom-[15%] lg:bottom-[20%]">
          <div className="liquid-glass flex flex-col overflow-hidden rounded-[0.5rem] sm:rounded-xl lg:rounded-[1.25rem]">
            {(
              [
                {
                  Icon: Mail,
                  label: "Email",
                  href: "mailto:info@blackmattertech.com",
                  external: false,
                },
                {
                  Icon: Github,
                  label: "GitHub",
                  href: "https://github.com/blackmattertech",
                  external: true,
                },
                {
                  Icon: MessageSquare,
                  label: "Contact",
                  href: "#contact",
                  external: false,
                },
              ] as const
            ).map(({ Icon, label, href, external }, i) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`flex items-center justify-center text-cream transition-colors hover:bg-white/10 ${
                  i < 2 ? "border-b border-white/10" : ""
                } h-12 w-[14vw] sm:h-14 sm:w-[14.375rem] md:h-16 md:w-[10.78125rem] lg:h-[4.5rem] lg:w-[16.77rem]`}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
