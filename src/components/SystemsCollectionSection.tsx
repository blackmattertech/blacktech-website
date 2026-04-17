import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";
import SplitText from "./SplitText";
import { SPOTLIGHT_SECTION_HEADING_TYPO } from "./SpotlightSectionHeading";

const GITHUB_ORG = "https://github.com/blackmattertech";

const CARDS = [
  {
    id: "01",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    label: "CRM & Customer Ops",
    detail: "JavaScript · TypeScript",
    tags: ["CRM", "Sales", "Automation"],
    href: `${GITHUB_ORG}/xcelcrm`,
    external: true,
  },
  {
    id: "02",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    label: "Integrations & PPF",
    detail: "APIs · document flows",
    tags: ["APIs", "Integration", "Docs"],
    href: `${GITHUB_ORG}/xcel-ppf`,
    external: true,
  },
  {
    id: "03",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    label: "Custom ERP",
    detail: "TAG Unlimited Clothing",
    tags: ["ERP", "Ops", "TypeScript"],
    href: "/case-studies/tag-unlimited-erp",
    external: false,
  },
  {
    id: "04",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    label: "Inventory & Fulfillment",
    detail: "Warehouse · dispatch flows",
    tags: ["Inventory", "Operations", "Tracking"],
    href: `${GITHUB_ORG}/xcel-ppf`,
    external: true,
  },
  {
    id: "05",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    label: "Order Orchestration",
    detail: "B2B workflows · approvals",
    tags: ["Orders", "Workflow", "Automation"],
    href: `${GITHUB_ORG}/erp`,
    external: true,
  },
  {
    id: "06",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    label: "Analytics Dashboards",
    detail: "KPI monitoring · BI views",
    tags: ["Analytics", "BI", "Dashboards"],
    href: `${GITHUB_ORG}`,
    external: true,
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
          <div className="max-w-full">
            <SplitText
              text="Case studies"
              tag="h2"
              className={`m-0 text-white ${SPOTLIGHT_SECTION_HEADING_TYPO}`}
              textAlign="left"
              splitType="chars"
            />
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
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] text-white/30">
                      {card.id}
                    </span>
                    <h3 className="mt-1.5 text-balance text-base font-medium leading-snug tracking-tight text-white">
                      {card.label}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/40">{card.detail}</p>
                  </div>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon text-black shadow-[0_0_16px_rgba(111,255,0,0.25)] transition-transform duration-200 hover:scale-110"
                      aria-label={`Open ${card.label} on GitHub`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      to={card.href}
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon text-black shadow-[0_0_16px_rgba(111,255,0,0.25)] transition-transform duration-200 hover:scale-110"
                      aria-label={`View ${card.label} case study`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
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
