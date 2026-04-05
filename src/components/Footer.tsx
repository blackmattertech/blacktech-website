import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-semibold text-lg text-white">BlackMatter Technologies</p>
          <p className="mt-2 text-sm leading-relaxed text-white/50">
            Software innovation company building intelligent, scalable digital
            systems that simplify complex business operations—from discovery
            through production.
          </p>
          <a
            href="mailto:info@blackmattertech.com"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            <Mail className="h-4 w-4" aria-hidden />
            info@blackmattertech.com
          </a>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
              Navigate
            </p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#features" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#tech-insights" className="hover:text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#orbis-labs" className="hover:text-white">
                  Labs
                </a>
              </li>
              <li>
                <a href="#selected-work" className="hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#space-intro" className="hover:text-white">
                  Studio
                </a>
              </li>
              <li>
                <a href="#systems-collection" className="hover:text-white">
                  Systems
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
              Connect
            </p>
            <div className="flex gap-3">
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
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-white/35 md:text-left">
        © {new Date().getFullYear()} BlackMatter Technologies. All rights
        reserved.
      </div>
    </footer>
  );
}
