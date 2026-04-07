export default function StickySiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-5xl px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          className="liquid-glass flex items-center justify-between gap-3 rounded-full px-4 py-2.5 sm:px-6 sm:py-3"
          aria-label="Primary"
        >
          <div className="flex min-w-0 flex-1 items-center">
            <a
              href="#hero"
              className="flex min-w-0 items-center transition-opacity hover:opacity-90"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white"
                aria-hidden
              >
                BM
              </span>
              <span className="ml-2 truncate font-semibold text-sm text-white sm:text-base">
                <span className="sm:hidden">BlackMatter</span>
                <span className="hidden sm:inline">BlackMatter Technologies</span>
              </span>
            </a>
            <div className="ml-2 hidden flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-white/80 md:ml-5 md:flex lg:gap-x-4 lg:text-sm">
              <a href="#features" className="transition-colors hover:text-white">
                Services
              </a>
              <a
                href="#tech-insights"
                className="transition-colors hover:text-white"
              >
                Insights
              </a>
              <a
                href="#selected-work"
                className="transition-colors hover:text-white"
              >
                Work
              </a>
              <a href="#pricing" className="transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white lg:inline"
            >
              Start a project
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
