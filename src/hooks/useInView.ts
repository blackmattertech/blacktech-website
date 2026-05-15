import { useEffect, useState, type RefObject } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  {
    rootMargin = "200px 0px",
    threshold = 0,
    once = true,
  }: UseInViewOptions = {}
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold, once]);

  return inView;
}
