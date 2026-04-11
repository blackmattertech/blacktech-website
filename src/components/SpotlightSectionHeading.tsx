import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export const SPOTLIGHT_SECTION_HEADING_TYPO =
  "text-balance text-4xl font-semibold uppercase tracking-[0.12em] sm:text-5xl sm:tracking-[0.16em] md:text-6xl md:tracking-[0.18em]";

export function SpotlightSectionHeading({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [diameterPx, setDiameterPx] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const rClip = useMotionValue(0);
  const cx = useTransform([x, rClip], ([xv, rv]) => (xv as number) + (rv as number));
  const clipPath = useMotionTemplate`circle(${rClip}px at ${cx}px 50%)`;

  useLayoutEffect(() => {
    const track = trackRef.current;
    const text = textRef.current;
    if (!track || !text) return;
    const measure = () => {
      const h = text.getBoundingClientRect().height;
      const d = Math.max(24, h * 2);
      rClip.set(d / 2);
      setDiameterPx(d);
      setMaxX(Math.max(0, track.offsetWidth - d));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [rClip]);

  useEffect(() => {
    if (reduceMotion || maxX <= 0) {
      x.set(0);
      return;
    }
    const controls = animate(x, [0, maxX], {
      duration: 3.6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [maxX, reduceMotion, x]);

  return (
    <div ref={trackRef} className="group relative inline-block max-w-full">
      <p
        ref={textRef}
        className={`relative z-0 m-0 text-white transition-colors duration-300 group-hover:text-neon ${SPOTLIGHT_SECTION_HEADING_TYPO}`}
      >
        {children}
      </p>

      {!reduceMotion && diameterPx > 0 ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-visible opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            style={{ clipPath }}
          >
            <p
              className={`m-0 text-neon ${SPOTLIGHT_SECTION_HEADING_TYPO} pointer-events-none`}
            >
              {children}
            </p>
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/2 z-[11] rounded-full border border-white/25 bg-black/10 shadow-[0_0_48px_rgba(0,0,0,0.45)] transition-opacity duration-300 group-hover:opacity-0"
            style={{
              width: diameterPx,
              height: diameterPx,
              x,
              y: "-50%",
            }}
          />
        </>
      ) : null}
    </div>
  );
}
