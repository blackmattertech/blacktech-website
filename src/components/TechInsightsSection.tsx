import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const ENTRIES = [
  {
    id: "01",
    title: "ERP patterns we reuse across industries",
    type: "Repo",
    meta: "Open source",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&q=80",
    href: "https://github.com/blackmattertech/erp",
  },
  {
    id: "02",
    title: "Xcel PPF — integrations & document flows",
    type: "Repo",
    meta: "TypeScript",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80",
    href: "https://github.com/blackmattertech/xcel-ppf",
  },
  {
    id: "03",
    title: "Shipping CRM and customer operations tools",
    type: "Repo",
    meta: "Production",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80",
    href: "https://github.com/blackmattertech/xcelcrm",
  },
  {
    id: "04",
    title: "More libraries and experiments on GitHub",
    type: "Org",
    meta: "blackmattertech",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80",
    href: "https://github.com/blackmattertech",
  },
] as const;

export default function TechInsightsSection() {
  return (
    <section
      id="tech-insights"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <ImmersiveReveal className="mb-12 md:mb-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/30">04</span>
                <div className="h-px w-8 bg-white/15" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  GitHub
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
                Code &amp; <span className="italic">repos</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                Explore what we're building in the open — ERP, CRM,
                integrations, and supporting tooling.
              </p>
            </div>
            <a
              href="https://github.com/blackmattertech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60 transition-all duration-200 hover:border-white/35 hover:text-white sm:self-auto"
            >
              All repositories
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </ImmersiveReveal>

        {/* Repo list */}
        <ul className="flex flex-col gap-3">
          {ENTRIES.map((e, i) => (
            <motion.li
              key={e.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.04] sm:gap-5 sm:p-5"
              >
                {/* Image */}
                <img
                  src={e.img}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
                />

                {/* Index */}
                <span className="hidden font-mono text-[10px] text-white/25 sm:block">
                  {e.id}
                </span>

                {/* Title + meta */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-white md:text-base">
                    {e.title}
                  </p>
                  <p className="mt-0.5 text-xs text-white/40">
                    {e.type} · {e.meta}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/25 transition-all duration-200 group-hover:text-white/70" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
