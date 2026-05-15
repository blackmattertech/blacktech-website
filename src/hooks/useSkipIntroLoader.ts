/** Skip splash on mobile / save-data / slow network — improves FCP & LCP on Lighthouse mobile. */
export function shouldSkipIntroLoader(): boolean {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(max-width: 767px)").matches) return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  if (conn?.saveData) return true;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") {
    return true;
  }

  return false;
}
