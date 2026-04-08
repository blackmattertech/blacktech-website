import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Ship", "Systems", "Scale"];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2700;
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setCount(Math.floor(t * 100));
      if (t < 1) raf = requestAnimationFrame(step);
      else {
        setCount(100);
        window.setTimeout(onComplete, 400);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-black text-white">
      <motion.div
        className="absolute left-6 top-6 md:left-10 md:top-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/logo.svg"
          alt="BlackMatter Technologies"
          className="h-12 w-auto max-w-[min(72vw,15rem)] object-contain object-left sm:h-14 sm:max-w-[17rem] md:h-16 md:max-w-[19rem]"
          width={385}
          height={102}
          decoding="async"
        />
      </motion.div>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="relative h-[4.5rem] w-full max-w-xl md:h-[5.5rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={WORDS[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-center justify-center text-center font-display text-4xl italic text-white/80 md:text-6xl lg:text-7xl"
            >
              {WORDS[wordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-end px-6 pb-8 md:px-10 md:pb-12">
        <p className="font-display text-6xl tabular-nums md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </p>
        <div className="mt-4 h-[3px] w-full max-w-md overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-full origin-left rounded-full accent-gradient"
            initial={false}
            animate={{ scaleX: count / 100 }}
            transition={{ duration: 0.05 }}
            style={{
              boxShadow: "0 0 10px rgba(111, 255, 0, 0.45)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
