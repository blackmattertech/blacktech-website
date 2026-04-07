export default function StickySiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-6xl px-6 pt-4 md:px-8 md:pt-5">
        <nav
          className="liquid-glass flex items-center justify-between gap-3 rounded-full px-5 py-3"
          aria-label="Primary"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[9px] font-bold text-white">
              BM
            </span>
            <span className="truncate text-sm font-semibold text-white">
              <span className="sm:hidden">BlackMatter</span>
              <span className="hidden sm:inline">BlackMatter Technologies</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden items-center gap-5 text-[12px] font-medium text-white/60 md:flex lg:gap-6 lg:text-sm">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#process" className="transition-colors hover:text-white">Process</a>
            <a href="#selected-work" className="transition-colors hover:text-white">Work</a>
            <a href="#features" className="transition-colors hover:text-white">Services</a>
            <a href="#industries" className="transition-colors hover:text-white">Industries</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
