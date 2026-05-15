import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

type LazyVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  rootMargin?: string;
  loop?: boolean;
  /** When false, render nothing (caller supplies fallback). */
  enabled?: boolean;
};

/** Loads and plays video only when near the viewport. */
export default function LazyVideo({
  src,
  className,
  poster,
  rootMargin = "160px 0px",
  loop = true,
  enabled = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { rootMargin, once: true });

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !inView || !video) return;

    if (!video.getAttribute("src")) {
      video.src = src;
      video.load();
    }

    video.muted = true;
    video.playsInline = true;
    void video.play().catch(() => {});

    return () => {
      video.pause();
    };
  }, [enabled, inView, src]);

  if (!enabled) return null;

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop={loop}
      playsInline
      preload="none"
      aria-hidden
    />
  );
}
