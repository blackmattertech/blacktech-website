import { Github, Mail, MessageSquare } from "lucide-react";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

const CTA_LINES = [
  "Ship",
  "systems",
  "your",
  "operators",
  "trust.",
  "Scale",
  "with",
  "clarity.",
] as const;

export default function SpaceCTASection() {
  return (
    <section
      id="space-cta"
      className="relative bg-black text-white"
      aria-labelledby="space-cta-heading"
    >
      <div className="relative w-full">
        <video
          className="block h-auto min-h-[360px] w-full object-cover sm:min-h-[420px] lg:min-h-[480px]"
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/75" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />

        <div className="absolute inset-0 z-10 flex min-h-[min(70vh,640px)] items-center">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
              <div className="flex justify-center lg:col-span-4 lg:justify-start xl:col-span-5">
                <div
                  className="flex w-full max-w-[15rem] flex-col overflow-hidden rounded-xl border border-white/15 bg-black/30 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:max-w-[14.375rem] lg:rounded-2xl"
                  role="navigation"
                  aria-label="Contact and social"
                >
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
                        label: "Contact form",
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
                      className={`flex h-16 items-center justify-center text-white transition-colors hover:bg-white/10 sm:h-[4.25rem] lg:h-[4.5rem] ${
                        i < 2 ? "border-b border-white/10" : ""
                      }`}
                      aria-label={label}
                    >
                      <Icon
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        strokeWidth={1.75}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative text-center lg:col-span-8 lg:pr-4 lg:text-right xl:col-span-7 xl:pr-8">
                <p
                  className="mb-2 font-condiment text-xl normal-case text-neon mix-blend-exclusion sm:text-3xl md:text-4xl lg:mb-3 lg:text-5xl xl:text-[clamp(2.5rem,4vw,4.25rem)]"
                  id="space-cta-heading"
                >
                  Go beyond
                </p>
                <h2 className="font-grotesk text-2xl uppercase leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[clamp(3rem,5.5vw,4.5rem)]">
                  Work with us.
                </h2>
                <div className="mt-8 font-grotesk text-lg uppercase leading-[1.05] tracking-tight text-white/95 sm:text-xl md:text-2xl lg:mt-10 lg:text-3xl xl:text-4xl">
                  {CTA_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
