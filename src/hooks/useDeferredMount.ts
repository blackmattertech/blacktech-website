import { useEffect, useState } from "react";

/** Mount after first paint / idle — keeps main thread free for LCP. */
export function useDeferredMount(delayMs = 0) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const run = () => setMounted(true);

    if (delayMs > 0) {
      const t = window.setTimeout(run, delayMs);
      return () => window.clearTimeout(t);
    }

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }

    const t = window.setTimeout(run, 1);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  return mounted;
}
