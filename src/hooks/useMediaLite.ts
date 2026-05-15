import { useEffect, useState } from "react";

/** True on mobile, save-data, slow network, or reduced motion — skip heavy media. */
export function useMediaLite() {
  const [lite, setLite] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const conn = (
        navigator as Navigator & {
          connection?: { saveData?: boolean; effectiveType?: string };
        }
      ).connection;
      const saveData = conn?.saveData === true;
      const slow =
        conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";
      setLite(
        narrow.matches || reduceMotion.matches || saveData || slow
      );
    };

    update();
    narrow.addEventListener("change", update);
    reduceMotion.addEventListener("change", update);
    return () => {
      narrow.removeEventListener("change", update);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  return lite;
}
