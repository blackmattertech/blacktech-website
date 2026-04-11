import { type MouseEvent, useId, useLayoutEffect, useRef, useState } from "react";
import { openProjectFormModal } from "../constants/projectFormModal";

/** ASCII-only label for SVG textPath (no bidi / zero-width chars). */
const CONTACT_ORBIT_ARC_ASCII =
  "* CONTACT US * CONTACT US "
    .replace(/[\u200B-\u200D\uFEFF\u200E\u200F\u202A-\u202E]/g, "")
    .replace(/\u00A0/g, " ");

/** Path radius in viewBox units (0–100); must stay outside inner white disc (r≈20). */
const ORBIT_PATH_RADIUS = 41;
/** Circumference for textLength so the full string fits along the path. */
const ORBIT_PATH_TEXT_LENGTH = Math.round(2 * Math.PI * ORBIT_PATH_RADIUS);

/** Viewport strip from top — overlap with a light section switches nav to dark theme. */
const HEADER_LIGHT_OVERLAP_PX = 96;

function isAnyLightSurfaceBehindHeader(): boolean {
  const sections = document.querySelectorAll<HTMLElement>(
    "[data-header-surface=\"light\"]"
  );
  for (const el of sections) {
    const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < HEADER_LIGHT_OVERLAP_PX) return true;
  }
  return false;
}

export default function StickySiteNav() {
  const orbitPathId = useId().replace(/:/g, "");
  const ry = 50 - ORBIT_PATH_RADIUS;
  const [onLightSurface, setOnLightSurface] = useState(false);
  const rafRef = useRef<number>(0);

  const handleOpenProjectForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openProjectFormModal();
  };

  useLayoutEffect(() => {
    const tick = () => {
      setOnLightSurface(isAnyLightSurfaceBehindHeader());
    };
    tick();

    const schedule = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const link =
    "transition-colors " +
    (onLightSurface
      ? "text-black/70 hover:text-black"
      : "text-white/80 hover:text-white");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto max-w-5xl px-5 pt-6 sm:px-7 sm:pt-6">
        <nav
          className={
            "site-nav relative flex items-center justify-between gap-3 overflow-visible rounded-full px-4 py-2.5 sm:px-6 sm:py-3 " +
            (onLightSurface
              ? "site-nav--on-light border border-black/[0.08] bg-white/80 shadow-sm backdrop-blur-md"
              : "liquid-glass")
          }
          aria-label="Primary"
        >
          <div className="flex min-w-0 flex-1 items-center">
            <a
              href="#hero"
              className="flex min-w-0 max-w-full items-center transition-opacity hover:opacity-90"
            >
              <img
                src="/logo.svg"
                alt="BlackMatter Technologies"
                className={
                  "h-7 w-auto max-w-[min(100%,11rem)] shrink-0 object-contain object-left transition-[filter] duration-300 sm:h-8 sm:max-w-[13rem] md:max-w-[15.5rem] lg:h-9 lg:max-w-[17.5rem] " +
                  (onLightSurface ? "brightness-0" : "")
                }
                width={385}
                height={102}
                decoding="async"
              />
            </a>
          </div>
          <div className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-x-3 gap-y-1 text-[12px] font-medium md:flex lg:gap-x-4 lg:text-sm">
            <a href="#hero" className={link}>
              Home
            </a>
            <a href="#about" className={link}>
              About
            </a>
            <a href="#features" className={link}>
              Services
            </a>
            <a href="#selected-work" className={link}>
              Case Studies
            </a>
            <a
              href="#contact"
              onClick={handleOpenProjectForm}
              className={link}
            >
              Contact
            </a>
            <a href="/blog" className={link}>
              Blog
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={handleOpenProjectForm}
              className={
                "hidden text-sm font-medium transition-colors lg:inline " +
                (onLightSurface
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white")
              }
            >
              Start a project
            </a>
            <a
              href="#contact"
              onClick={handleOpenProjectForm}
              className="nav-contact-orbit"
              aria-label="Contact us"
            >
              <svg
                className="nav-contact-orbit__text"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden
              >
                <defs>
                  <path
                    id={orbitPathId}
                    d={`M 50 ${ry} a ${ORBIT_PATH_RADIUS} ${ORBIT_PATH_RADIUS} 0 1 1 0 ${2 * ORBIT_PATH_RADIUS} a ${ORBIT_PATH_RADIUS} ${ORBIT_PATH_RADIUS} 0 1 1 0 ${-2 * ORBIT_PATH_RADIUS}`}
                    fill="none"
                  />
                </defs>
                <text
                  className="nav-contact-orbit__svg-text"
                  dominantBaseline="middle"
                  textLength={ORBIT_PATH_TEXT_LENGTH}
                  lengthAdjust="spacingAndGlyphs"
                >
                  <textPath
                    href={`#${orbitPathId}`}
                    xlinkHref={`#${orbitPathId}`}
                    startOffset="0%"
                  >
                    {CONTACT_ORBIT_ARC_ASCII}
                  </textPath>
                </text>
              </svg>
              <div className="nav-contact-orbit__circle">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-contact-orbit__icon"
                  aria-hidden
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-contact-orbit__icon nav-contact-orbit__icon--copy"
                  aria-hidden
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
