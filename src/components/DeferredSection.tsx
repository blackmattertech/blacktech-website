import { type ReactNode, useRef } from "react";
import { useInView } from "../hooks/useInView";

type DeferredSectionProps = {
  children: ReactNode;
  /** Placeholder height before section mounts. */
  minHeight?: string;
  rootMargin?: string;
  className?: string;
};

/** Mount children only when scrolled near — keeps first paint light. */
export default function DeferredSection({
  children,
  minHeight = "28rem",
  rootMargin = "320px 0px",
  className = "",
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { rootMargin, once: true });

  return (
    <div
      ref={ref}
      className={className}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
