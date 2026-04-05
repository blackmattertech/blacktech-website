import { type ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

type ImmersiveRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Deeper motion: more blur and travel */
  intensity?: "normal" | "deep";
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate">;

export function ImmersiveReveal({
  children,
  className,
  delay = 0,
  intensity = "normal",
  ...rest
}: ImmersiveRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  const deep = intensity === "deep";
  const blur = deep ? 16 : 10;
  const y = deep ? 72 : 48;
  const scale = deep ? 0.94 : 0.96;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y,
              scale,
              filter: `blur(${blur}px)`,
            }
      }
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : reduce
            ? { opacity: 1 }
            : {}
      }
      transition={{
        duration: reduce ? 0.2 : 0.88,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
