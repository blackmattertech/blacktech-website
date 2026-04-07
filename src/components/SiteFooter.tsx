import { Github, Mail } from "lucide-react";

const LINKS = [
  { href: "#features", label: "Services" },
  { href: "#tech-insights", label: "Insights" },
  { href: "#about", label: "About" },
  { href: "#orbis-labs", label: "Labs" },
  { href: "#selected-work", label: "Work" },
  { href: "#space-intro", label: "Studio" },
  { href: "#systems-collection", label: "Systems" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="font-semibold text-lg text-white">
              BlackMatter Technologies
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
              Software innovation company building intelligent, scalable digital
              systems that simplify complex business operations—from discovery
              through production.
            </p>
            <a
              href="mailto:info@blackmattertech.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              info@blackmattertech.com
            </a>
          </div>

          <nav
            className="lg:col-span-4"
            aria-label="Site"
          >
            <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm text-white/60 sm:max-w-xs">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:justify-self-end lg:text-right">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
              Connect
            </p>
            <div className="flex gap-3 lg:justify-end">
              <a
                href="mailto:info@blackmattertech.com"
                className="liquid-glass rounded-full p-3 text-white/70 transition-all hover:bg-white/5 hover:text-white"
                aria-label="Email BlackMatter Technologies"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/blackmattertech"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full p-3 text-white/70 transition-all hover:bg-white/5 hover:text-white"
                aria-label="BlackMatter Technologies on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs text-white/35">
          © {new Date().getFullYear()} BlackMatter Technologies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
