import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal, staggerChild, staggerParent } from "../Reveal";
import { SmallFlower } from "./ChapterBits";
import finalScene from "../../assets/final-scene.webp";
import stemCosmos from "../../assets/stem-cosmos.webp";
import stemEucalyptus from "../../assets/stem-eucalyptus.webp";
import petal1 from "../../assets/petal-1.webp";
import petal2 from "../../assets/petal-2.webp";
import petal3 from "../../assets/petal-3.webp";
import petal4 from "../../assets/petal-4.webp";

const PETALS = [petal1, petal2, petal3, petal4];

export function Finale({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-3.5%", "3.5%"]);

  return (
    <section id="always" aria-label="The last page" className="relative z-[2] mt-[clamp(4rem,9vw,7rem)]">
      <div ref={ref} className="relative min-h-[100svh] overflow-hidden">
        <motion.img
          src={finalScene}
          alt="A sunlit desk with a folded letter tied in ribbon, a bouquet of cosmos, a teddy bear and a sleeping cat."
          className="absolute inset-x-0 top-[-4%] h-[108%] w-full object-cover object-[50%_74%]"
          style={reduce ? undefined : { y }}
          loading="lazy"
          width={1500}
          height={844}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(52% 46% at 50% 52%, rgba(255,247,238,.97) 0%, rgba(255,247,238,.88) 52%, rgba(255,247,238,.42) 74%, rgba(255,247,238,.12) 100%)",
          }}
        />

        {/* flowers growing into the last page */}
        <motion.img
          src={stemCosmos}
          alt=""
          aria-hidden="true"
          className="sway pointer-events-none absolute -left-6 bottom-0 z-[2] w-[clamp(96px,13vw,180px)] opacity-90 sm:left-2"
          initial={reduce ? { opacity: 0 } : { scaleY: 0.25, opacity: 0, rotate: -6 }}
          animate={inView ? { scaleY: 1, opacity: 0.9, rotate: 0 } : {}}
          transition={{ duration: 2.1, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: "50% 100%" }}
        />
        <motion.img
          src={stemEucalyptus}
          alt=""
          aria-hidden="true"
          className="sway-slow pointer-events-none absolute -right-8 bottom-2 z-[2] w-[clamp(110px,14vw,200px)] opacity-85 sm:right-2"
          initial={reduce ? { opacity: 0 } : { scaleY: 0.25, opacity: 0, rotate: 5 }}
          animate={inView ? { scaleY: 1, opacity: 0.85, rotate: 0 } : {}}
          transition={{ duration: 2.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.45 }}
          style={{ transformOrigin: "50% 100%" }}
        />

        {/* a last drift of petals */}
        {!reduce &&
          PETALS.concat(PETALS).slice(0, 7).map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute z-[2] w-[clamp(12px,2.4vw,22px)] opacity-70"
              style={{ left: `${8 + i * 12.5}%`, top: "-6%" }}
              animate={{ y: ["0vh", "108vh"], x: [0, i % 2 ? 42 : -36, i % 2 ? -18 : 24], rotate: [0, 180 + i * 30] }}
              transition={{
                duration: 16 + i * 2.2,
                delay: 1.4 + i * 1.1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

        <div className="relative z-[3] flex min-h-[100svh] flex-col items-center justify-center px-6 py-[clamp(5rem,12vh,9rem)] text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[74%] w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[22px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,250,243,.92) 0%, rgba(255,249,240,.82) 46%, rgba(255,247,238,.35) 74%, rgba(255,247,238,0) 100%)",
            }}
          />
          <Reveal>
            <p className="eyebrow text-rose-deep/80">and until that day</p>
          </Reveal>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="mt-7 max-w-[680px]"
          >
            <motion.p
              variants={staggerChild}
              className="font-serif text-[clamp(1.3rem,2.7vw,1.85rem)] leading-[1.55] text-ink"
            >
              Until I can hold your hand for real, I’ll keep finding little ways to remind
              you that you’re loved.
            </motion.p>

            <motion.p
              variants={staggerChild}
              className="mt-8 font-serif text-[clamp(1.55rem,3.5vw,2.45rem)] italic leading-[1.35] text-rose-deep"
            >
              I miss you in seconds nobody else would notice.
            </motion.p>

            <motion.p
              variants={staggerChild}
              className="mt-8 font-serif text-[clamp(1.45rem,3vw,2.05rem)] leading-tight text-ink"
            >
              I love you, my babe.
            </motion.p>

            <motion.p
              variants={staggerChild}
              className="mt-7 font-sign text-[clamp(2.5rem,6.2vw,3.9rem)] leading-[0.92] text-rose-deep"
            >
              Always your
              <br />
              <span className="inline-flex items-baseline gap-3">
                Razal
                <span className="translate-y-[-0.1em] font-serif text-[0.4em] not-italic text-rose">♡</span>
              </span>
            </motion.p>
          </motion.div>

          <Reveal delay={0.2} className="mt-9 flex flex-col items-center gap-5">
            <div className="rule-flourish">
              <SmallFlower className="h-4 w-4 text-rose" />
            </div>
            <button
              type="button"
              onClick={onReplay}
              className="link-quiet rounded-full px-3 py-1 [text-shadow:0_1px_0_rgba(255,250,243,.9)]"
            >
              read it again
            </button>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-cocoa/10 bg-cream/80 px-6 py-8 text-center">
        <p className="eyebrow text-[9.5px] text-rose-deep/70">for julian · from razal</p>
        <p className="mt-2 font-hand text-[1.12rem] text-rose-deep/80">
          every second, I miss you ♡
        </p>
      </footer>
    </section>
  );
}
