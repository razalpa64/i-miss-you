import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Envelope } from "./Envelope";
import bouquet from "../assets/bouquet-small.webp";
import petal1 from "../assets/petal-1.webp";
import petal2 from "../assets/petal-2.webp";
import petal3 from "../assets/petal-3.webp";
import petal4 from "../assets/petal-4.webp";

const PETALS = [petal1, petal2, petal3, petal4];

export function OpeningOverlay({
  open,
  onDone,
}: {
  open: boolean;
  onDone: () => void;
}) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<"idle" | "open">("idle");
  const [gift, setGift] = useState(false);
  const timers = useRef<number[]>([]);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    timers.current.forEach((t) => window.clearTimeout(t));
    onDone();
  }, [onDone]);

  useEffect(() => {
    if (!open) {
      finished.current = false;
      setStage("idle");
      setGift(false);
      return;
    }
    const at = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    if (reduce) {
      at(100, () => setStage("open"));
      at(300, () => setGift(true));
      at(900, finish);
    } else {
      at(520, () => setStage("open"));
      at(2150, () => setGift(true));
      at(4600, finish);
    }

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [open, reduce, finish]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, finish]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="opening"
          role="dialog"
          aria-modal="true"
          aria-label="Opening the letter"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden px-6"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 20%, #fffaf2 0%, #fdf0e3 55%, #f9e7da 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.2 : 0.7, ease: "easeOut" }}
          onClick={finish}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(247,198,208,.65), rgba(255,214,189,.25) 60%, rgba(255,247,238,0) 80%)",
            }}
          />

          <motion.p
            className="eyebrow relative z-10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            for julian, from razal
          </motion.p>

          <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center sm:flex-row sm:items-end sm:justify-center sm:gap-2">
            <motion.div
              className="relative w-[min(400px,76vw)]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.95, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: reduce ? 0.3 : 1.1, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Envelope state={stage} showLetter />
              {!reduce &&
                PETALS.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-[38%] w-[clamp(14px,3.4vw,26px)]"
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={
                      stage === "open"
                        ? {
                            opacity: [0, 0.9, 0],
                            x: (i % 2 ? 1 : -1) * (40 + i * 22),
                            y: -80 - i * 16,
                            rotate: (i % 2 ? 1 : -1) * (60 + i * 24),
                          }
                        : {}
                    }
                    transition={{ duration: 2.2, delay: 0.8 + i * 0.08, ease: "easeOut" }}
                  />
                ))}
            </motion.div>

            {/* the gift: flowers for her */}
            <motion.div
              className="relative mt-5 w-[min(150px,38vw)] sm:mb-6 sm:mt-0 sm:w-[clamp(110px,13vw,158px)]"
              initial={{ opacity: 0, y: 26, rotate: 6, scale: 0.9 }}
              animate={gift ? { opacity: 1, y: 0, rotate: 3, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={bouquet}
                alt="A small hand-tied bouquet of pastel cosmos, tulips and daisies."
                className="w-full drop-shadow-[0_18px_22px_rgba(121,91,84,0.18)]"
                loading="eager"
                width={285}
                height={460}
              />
            </motion.div>
          </div>

          <motion.p
            className="relative z-10 mt-7 max-w-[34ch] text-center font-serif text-[clamp(1rem,1.5vw,1.15rem)] italic text-ink-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: gift ? 1 : 0, y: gift ? 0 : 8 }}
            transition={{ duration: 0.9 }}
          >
            a few flowers, since I can’t hand them to you yet
          </motion.p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              finish();
            }}
            className="link-quiet absolute bottom-8 right-6 z-20 opacity-70 sm:right-10"
          >
            skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
