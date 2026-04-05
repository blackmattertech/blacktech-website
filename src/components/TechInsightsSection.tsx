import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ENTRIES = [
  {
    title: "ERP patterns we reuse across industries",
    time: "Repo",
    date: "Open source",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&q=80",
    href: "https://github.com/blackmattertech/erp",
  },
  {
    title: "Xcel PPF — integrations & document flows",
    time: "Repo",
    date: "TypeScript",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80",
    href: "https://github.com/blackmattertech/xcel-ppf",
  },
  {
    title: "Shipping CRM and customer operations tools",
    time: "Repo",
    date: "Production",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80",
    href: "https://github.com/blackmattertech/xcelcrm",
  },
  {
    title: "More libraries and experiments on GitHub",
    time: "Org",
    date: "blackmattertech",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80",
    href: "https://github.com/blackmattertech",
  },
] as const;

export default function TechInsightsSection() {
  return (
    <section id="tech-insights" className="bg-folio-bg py-16 text-folio-text md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.header
          className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-folio-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-folio-muted">
                GitHub
              </span>
            </div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl">
              Code &amp; <span className="italic">repos</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-folio-muted">
              Explore what we&apos;re building in the open—ERP, CRM, integrations,
              and supporting tooling.
            </p>
          </div>
          <a
            href="https://github.com/blackmattertech"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 self-start rounded-full border border-folio-line px-5 py-2 text-sm hover:bg-folio-surface md:inline-flex"
          >
            All repositories
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.header>

        <ul className="flex flex-col gap-4">
          {ENTRIES.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 rounded-[40px] border border-folio-line bg-folio-surface/30 p-4 transition-colors hover:bg-folio-surface sm:flex-row sm:items-center sm:gap-6 sm:rounded-full sm:p-4"
              >
                <img
                  src={e.img}
                  alt=""
                  className="h-20 w-full rounded-2xl object-cover sm:h-16 sm:w-24 sm:rounded-xl"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-folio-text">{e.title}</p>
                  <p className="mt-1 text-xs text-folio-muted">
                    {e.time} · {e.date}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
