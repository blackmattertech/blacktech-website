import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWorkBento() {
  return (
    <section
      id="selected-work"
      className="border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* ── Header ── */}
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/30">01</span>
            <div className="h-px w-8 bg-white/15" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Selected work
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Featured <span className="italic">projects</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                Representative systems we build and maintain — open source and
                production code lives on our GitHub organization.
              </p>
            </div>
            <a
              href="https://github.com/blackmattertech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60 transition-all duration-200 hover:border-white/35 hover:text-white sm:self-auto"
            >
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.header>

        {/* ── Bento Grid ──
            Two separate grid rows. Each article has an EXPLICIT height so
            both cards in the same row are always the same height — no
            aspect-ratio fighting with CSS Grid's row stretch. */}
        <div className="space-y-3">

          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-3">

            {/* Card 01 — wide */}
            <motion.article
              className="group relative col-span-12 h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-72 md:col-span-7 md:h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
            >
              <a href="https://github.com/blackmattertech/erp" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Enterprise ERP core">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" alt="Enterprise ERP core" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-sm">01</span>
                  <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 backdrop-blur-sm">Operations</span>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-medium leading-snug text-white md:text-base">Enterprise ERP core</p>
                </div>
              </a>
            </motion.article>

            {/* Card 02 — narrow */}
            <motion.article
              className="group relative col-span-12 h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-72 md:col-span-5 md:h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              <a href="https://github.com/blackmattertech" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Healthcare & compliance stacks">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Healthcare & compliance stacks" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-sm">02</span>
                  <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 backdrop-blur-sm">Healthcare</span>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-medium leading-snug text-white md:text-base">Healthcare & compliance stacks</p>
                </div>
              </a>
            </motion.article>

          </div>{/* /Row 1 */}

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-3">

            {/* Card 03 — narrow */}
            <motion.article
              className="group relative col-span-12 h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-72 md:col-span-5 md:h-[360px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <a href="https://github.com/blackmattertech/xcel-ppf" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Xcel integrations & PPF">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Xcel integrations & PPF" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-sm">03</span>
                  <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 backdrop-blur-sm">Finance</span>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-medium leading-snug text-white md:text-base">Xcel integrations & PPF</p>
                </div>
              </a>
            </motion.article>

            {/* Card 04 — wide */}
            <motion.article
              className="group relative col-span-12 h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-72 md:col-span-7 md:h-[360px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <a href="https://github.com/blackmattertech/xcelcrm" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="CRM & revenue operations">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="CRM & revenue operations" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-sm">04</span>
                  <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/50 backdrop-blur-sm">Sales</span>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-medium leading-snug text-white md:text-base">CRM & revenue operations</p>
                </div>
              </a>
            </motion.article>

          </div>{/* /Row 2 */}

        </div>{/* /Bento grid */}
      </div>
    </section>
  );
}
