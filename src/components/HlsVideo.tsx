import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HlsVideoProps = {
  src: string;
  className?: string;
};

/** Mux / HLS stream when supported; falls back to direct src for Safari. */
export function HlsVideo({ src, className }: HlsVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;

    if (src.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => {
          hls.destroy();
        };
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        return undefined;
      }
      return undefined;
    }

    video.src = src;
    return undefined;
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
