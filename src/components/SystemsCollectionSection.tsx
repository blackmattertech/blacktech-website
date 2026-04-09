import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const GITHUB_ORG = "https://github.com/blackmattertech";

const CARDS = [
  {
    id: "01",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    label: "ERP & Operations",
    detail: "TypeScript · production",
    tags: ["ERP", "Ops", "TypeScript"],
    href: `${GITHUB_ORG}/erp`,
  },
  {
    id: "02",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    label: "Integrations & PPF",
    detail: "APIs · document flows",
    tags: ["APIs", "Integration", "Docs"],
    href: `${GITHUB_ORG}/xcel-ppf`,
  },
  {
    id: "03",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    label: "CRM & Customer Ops",
    detail: "JavaScript · TypeScript",
    tags: ["CRM", "Sales", "Automation"],
    href: `${GITHUB_ORG}/xcelcrm`,
  },
] as const;

export default function SystemsCollectionSection() {
  return (
    <section
      id="systems-collection"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <ImmersiveReveal className="mb-12 md:mb-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/30">03</span>
                <div className="h-px w-8 bg-white/15" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Systems
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                We ship &amp; <span className="italic">maintain</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                Production-grade systems shipped across industries — ERP, CRM,
                integrations, and internal platforms your team can extend.
              </p>
            </div>

            <motion.a
              href={GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60 transition-all duration-200 hover:border-white/35 hover:text-white sm:self-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </ImmersiveReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={card.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Index + label row */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] text-white/30">
                      {card.id}
                    </span>
                    <h3 className="mt-1.5 text-base font-medium tracking-tight text-white">
                      {card.label}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/40">{card.detail}</p>
                  </div>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon text-black shadow-[0_0_16px_rgba(111,255,0,0.25)] transition-transform duration-200 hover:scale-110"
                    aria-label={`Open ${card.label} on GitHub`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.1] px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
