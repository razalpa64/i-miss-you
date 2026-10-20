import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Butterfly } from "../Butterfly";
import { Reveal } from "../Reveal";
import { SmallFlower } from "./ChapterBits";
import windowScene from "../../assets/window-scene.webp";

/** A breath between chapters: the room she'd like, and the line that stays. */
export function Interlude() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-0.9, 0.5]);

  return (
    <section
      aria-label="A quiet morning at the window"
      className="relative z-[2] mt-[clamp(4rem,9vw,7rem)] overflow-hidden py-[clamp(3.5rem,8vw,6rem)]"
    >
      {/* a wash of morning light behind the spread */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 60% at 26% 42%, rgba(255,233,168,.30), rgba(255,247,238,0) 68%), radial-gradient(60% 50% at 84% 62%, rgba(247,198,208,.30), rgba(255,247,238,0) 72%)",
        }}
      />
      <Butterfly className="right-[6%] top-[12%] hidden sm:block" size={32} duration={32} delay={3} />
      <Butterfly className="left-[4%] bottom-[16%] hidden lg:block" size={26} duration={38} delay={1} drift={38} />

      <div
        ref={ref}
        className="relative mx-auto grid w-full max-w-[1080px] items-center gap-10 px-6 sm:gap-14 sm:px-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:gap-12 lg:gap-20"
      >
        {/* the window, framed like a print */}
        <Reveal className="relative mx-auto w-full max-w-[400px] md:mx-0">
          <motion.figure
            style={reduce ? undefined : { rotate }}
            className="arch relative"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={windowScene}
                alt="A sunlit bedroom window with lace curtains, a vase of cosmos and a teddy bear, and two kittens asleep together on a sage-green cushion."
                className="block h-[clamp(360px,52vw,520px)] w-full object-cover object-[50%_74%] sm:h-[clamp(420px,46vw,560px)]"
                style={reduce ? undefined : { y }}
                loading="lazy"
                width={1080}
                height={1350}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 90% at 50% 30%, rgba(255,247,238,0) 40%, rgba(255,240,224,.22) 78%, rgba(255,240,224,.5) 100%)",
                }}
              />
            </div>
          </motion.figure>
          <div className="pointer-events-none absolute -right-6 top-[62%] hidden w-[150px] lg:block xl:-right-16 xl:w-[186px]">
            <svg viewBox="0 0 60 40" className="mb-1 h-8 w-12 rotate-[200deg] text-rose/60" fill="none">
              <path d="M58 4c-10 2-23 8-33 17-5 4-9 9-13 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="1 4" />
              <path d="M12 28l1 7 7-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-hand text-[1.02rem] leading-tight text-rose-deep/80 [text-shadow:0_1px_10px_rgba(255,247,238,.9)]">
              the light was doing that golden thing you’d like
            </p>
          </div>
          <p className="mt-4 text-center font-hand text-[1rem] leading-tight text-rose-deep/70 lg:hidden">
            the light was doing that golden thing you’d like
          </p>
        </Reveal>

        {/* the line */}
        <div className="relative">
          <Reveal y={14}>
            <div className="flex items-center gap-3">
              <SmallFlower className="h-3.5 w-3.5 text-rose/80" />
              <span className="eyebrow text-[10px] text-rose-deep/80">a window, some morning</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={18}>
            <blockquote className="mt-6">
              <p className="font-serif text-[clamp(1.55rem,3.5vw,2.6rem)] italic leading-[1.42] text-ink">
                “I don’t just miss talking to you, Julian. I miss the little moments I
                wish I could share with you,{" "}
                <span className="not-italic text-rose-deep">one ordinary second at a time.</span>”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-cocoa/25" aria-hidden="true" />
              <span className="font-hand text-[1.05rem] text-cocoa/70">R.</span>
            </div>
          </Reveal>

          <Reveal delay={0.28} className="mt-10 hidden md:block">
            <div className="max-w-[300px] border-l border-rose/30 pl-5">
              <p className="font-serif text-[0.98rem] italic leading-relaxed text-ink-soft">
                Two cats, a cushion, a window. It isn’t much. I’d give a lot for it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
