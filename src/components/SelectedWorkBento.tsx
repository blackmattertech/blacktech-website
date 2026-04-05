import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Enterprise ERP core",
    span: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[21/9]",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    href: "https://github.com/blackmattertech/erp",
  },
  {
    title: "Healthcare & compliance stacks",
    span: "md:col-span-5",
    aspect: "aspect-square md:aspect-[4/5]",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    href: "https://github.com/blackmattertech",
  },
  {
    title: "Xcel integrations & PPF",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    href: "https://github.com/blackmattertech/xcel-ppf",
  },
  {
    title: "CRM & revenue operations",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    href: "https://github.com/blackmattertech/xcelcrm",
  },
] as const;

export default function SelectedWorkBento() {
  return (
    <section id="selected-work" className="bg-folio-bg py-12 text-folio-text md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.header
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-folio-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-folio-muted">
              Selected work
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl text-folio-text md:text-5xl">
            Featured <span className="italic">projects</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm text-folio-muted md:text-base">
            Representative systems we build and maintain—open source and
            production code lives on our GitHub organization.
          </p>
          <a
            href="https://github.com/blackmattertech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 hidden items-center gap-2 rounded-full border border-folio-line px-5 py-2 text-sm text-folio-text transition-colors hover:border-transparent hover:bg-folio-surface md:inline-flex"
          >
            View on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-folio-line bg-folio-surface ${p.span} ${p.aspect}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="contents">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute inset-0 flex items-end bg-folio-bg/0 p-6 opacity-0 backdrop-blur-lg transition-all duration-500 group-hover:bg-folio-bg/70 group-hover:opacity-100">
                <span className="rounded-full border border-folio-line bg-folio-text px-4 py-2 text-sm text-folio-bg">
                  GitHub —{" "}
                  <span className="font-display italic">{p.title}</span>
                </span>
              </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
