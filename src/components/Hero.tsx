import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Envelope } from "./Envelope";
import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";
import heroCats from "../assets/hero-cats.webp";
import stemCosmos from "../assets/stem-cosmos.webp";
import stemEucalyptus from "../assets/stem-eucalyptus.webp";
import petal1 from "../assets/petal-1.webp";
import petal3 from "../assets/petal-3.webp";

export function Hero({ onOpen }: { onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section id="cover" className="relative z-[2] flex min-h-[100svh] flex-col">
      {/* soft morning light + botanicals */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-[18%] -top-[26%] h-[72vh] w-[72vw] opacity-70 blur-[46px]"
          style={{
            background:
              "conic-gradient(from 196deg at 60% 40%, rgba(255,233,168,0) 0deg, rgba(255,224,150,.8) 15deg, rgba(255,247,238,0) 38deg, rgba(255,214,189,.5) 64deg, rgba(255,247,238,0) 92deg)",
          }}
        />
        <div
          className="absolute -left-[10%] top-[22%] h-[46vh] w-[50vw] opacity-45 blur-[52px]"
          style={{
            background:
              "radial-gradient(60% 60% at 40% 40%, rgba(247,198,208,.8), rgba(255,247,238,0) 70%)",
          }}
        />
        <img
          src={stemCosmos}
          alt=""
          className="sway absolute -left-10 top-[21%] w-[clamp(84px,10vw,158px)] opacity-[0.45] sm:-left-5"
        />
        <img
          src={stemEucalyptus}
          alt=""
          className="sway-slow absolute -right-12 bottom-[1%] w-[clamp(100px,12vw,188px)] opacity-[0.42] sm:-right-7"
        />
        <img
          src={petal1}
          alt=""
          className="float-soft absolute left-[12%] bottom-[16%] hidden w-[26px] opacity-50 lg:block"
        />
        <img
          src={petal3}
          alt=""
          className="float-soft absolute right-[14%] bottom-[30%] hidden w-[20px] opacity-40 lg:block"
          style={{ animationDelay: "2.5s" }}
        />
        <Butterfly className="left-[17%] top-[27%] hidden sm:block" size={38} duration={30} />
        <Butterfly
          className="right-[18%] top-[21%] hidden sm:block"
          size={28}
          duration={36}
          delay={4}
          drift={-44}
        />
      </div>

      <header className="relative mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 pt-[clamp(1.4rem,5.4vh,2.6rem)] sm:px-10">
        <span className="eyebrow flex items-center gap-2 text-[10px]">
          razal <span aria-hidden="true" className="text-rose">·</span> julian
        </span>
        <span className="eyebrow hidden pr-14 text-[10px] text-rose-deep/80 lg:block">
          a letter, in ordinary seconds
        </span>
      </header>

      <div className="relative mx-auto flex w-full max-w-[1000px] flex-1 flex-col items-center justify-center gap-y-[clamp(0.55rem,2vh,1.05rem)] px-6 pb-[clamp(1.5rem,4vh,2.75rem)] pt-[clamp(0.75rem,2vh,1.5rem)] text-center sm:px-10">
        <Reveal y={12}>
          <p className="eyebrow">for my babe, julian</p>
        </Reveal>

        <Reveal y={24} delay={0.08}>
          <h1 className="display text-[clamp(2.65rem,6.8vw,5.1rem)]">
            Every second,
            <br />
            <em className="italic text-rose-deep">I miss you.</em>
          </h1>
        </Reveal>

        <Reveal y={14} delay={0.16}>
          <p className="mx-auto mt-1 max-w-[36ch] font-serif text-[clamp(1rem,1.25vw,1.26rem)] italic leading-relaxed text-ink-soft">
            For the girl I miss, even when only a second has passed.
          </p>
          <p className="mt-2 font-hand text-[clamp(1.2rem,1.7vw,1.5rem)] text-rose-deep">
            My babe, Julian <span className="text-strawberry">♡</span>
          </p>
        </Reveal>

        {/* the sleeping scene */}
        <Reveal y={26} delay={0.24} className="relative w-full">
          <div className="relative mx-auto" style={{ width: "min(62vw, 292px)" }}>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[46%] h-[112%] w-[132%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[26px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(247,198,208,.95), rgba(255,214,189,.48) 58%, rgba(255,247,238,0) 78%)",
              }}
            />
            <img
              src={heroCats}
              alt="Two fluffy kittens asleep beside a teddy bear holding a pink tulip."
              className="breathe relative z-[2] w-full drop-shadow-[0_22px_26px_rgba(121,91,84,0.18)]"
              width={1000}
              height={752}
              fetchPriority="high"
            />
          </div>
          <p className="mt-1 font-hand text-[clamp(0.92rem,1.3vw,1.05rem)] text-rose-deep/75">
            they fell asleep waiting for you
          </p>
        </Reveal>

        {/* the invitation */}
        <motion.div
          className="relative"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={onOpen}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            aria-label="Open my little letter"
            className="btn-letter rounded-sm"
          >
            <Envelope
              state={hover ? "hover" : "idle"}
              className="w-[clamp(140px,15vw,172px)]"
            />
            <span className="label">Open my little letter</span>
          </button>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center pb-3">
        <span className="eyebrow text-[10px] text-rose-deep/70">scroll gently</span>
        <span className="mt-2 block h-7 w-px overflow-hidden bg-cocoa/15">
          <motion.span
            aria-hidden="true"
            className="block h-3 w-px bg-rose/70"
            animate={reduce ? {} : { y: [-12, 28] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
