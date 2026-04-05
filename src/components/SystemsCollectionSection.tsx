import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import PageContainer from "./layout/PageContainer";

const GITHUB_ORG = "https://github.com/blackmattertech";

const CARDS = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    label: "ERP & operations",
    detail: "TypeScript · production",
    href: `${GITHUB_ORG}/erp`,
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    label: "Integrations & PPF",
    detail: "APIs · document flows",
    href: `${GITHUB_ORG}/xcel-ppf`,
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    label: "CRM & customer ops",
    detail: "JavaScript · TypeScript",
    href: `${GITHUB_ORG}/xcelcrm`,
  },
] as const;

export default function SystemsCollectionSection() {
  return (
    <section id="systems-collection" className="bg-space py-16 text-cream md:py-24">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-grotesk text-[32px] uppercase leading-tight md:text-4xl lg:text-[60px]">
              Systems we
              <br />
              <span className="ml-12 mt-2 block sm:ml-16 md:ml-24 lg:ml-32">
                <span className="font-condiment normal-case text-neon">Ship</span>{" "}
                <span className="font-grotesk uppercase">&amp; maintain</span>
              </span>
            </h2>
          </div>

          <motion.a
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-2">
              <span className="font-grotesk text-[32px] uppercase leading-none md:text-4xl lg:text-[60px]">
                View
              </span>
              <div className="flex flex-col font-grotesk text-[20px] uppercase leading-tight md:text-2xl lg:text-4xl">
                <span>on</span>
                <span>GitHub</span>
              </div>
            </div>
            <div className="mt-2 h-2 w-full bg-neon md:h-2.5 lg:h-[10px]" />
          </motion.a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card) => (
            <article
              key={card.video}
              className="liquid-glass rounded-[32px] p-[18px] transition-colors hover:bg-white/10"
            >
              <div className="relative w-full overflow-hidden rounded-[24px] pb-[100%]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={card.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="liquid-glass mt-4 flex items-center justify-between gap-3 rounded-[20px] px-5 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-cream/70">
                    Product line
                  </p>
                  <p className="mt-1 font-grotesk text-base uppercase">
                    {card.label}
                  </p>
                  <p className="mt-0.5 text-xs text-cream/55">{card.detail}</p>
                </div>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition-transform hover:scale-110"
                  aria-label={`Open ${card.label} on GitHub`}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
