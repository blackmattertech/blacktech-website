import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const CHUNK =
  "BLACKMATTER TECHNOLOGIES • CHAOS INTO SYSTEMS • INTELLIGENT DIGITAL SYSTEMS • ";

export default function MarqueeStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { x: "0%" },
      {
        x: "-50%",
        duration: 40,
        ease: "none",
        repeat: -1,
      }
    );
    return () => {
      tween.kill();
    };
  }, []);

  const text = Array(10).fill(CHUNK).join("");

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-black py-3">
      <div ref={trackRef} className="flex w-[200%]">
        <p className="w-1/2 shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-white/25">
          {text}
        </p>
        <p
          className="w-1/2 shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-white/25"
          aria-hidden
        >
          {text}
        </p>
      </div>
    </div>
  );
}
