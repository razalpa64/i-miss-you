import { motion, useReducedMotion } from "framer-motion";

type Props = {
  state?: "idle" | "hover" | "open";
  showLetter?: boolean;
  className?: string;
};

const INK = "rgba(150, 82, 100, 0.32)";

/**
 * A cream envelope with a rose wax seal.
 * Layers: back panel → opened flap → letter → pocket → closing flap.
 * The seam at the top of the pocket is drawn so it reads as paper.
 */
export function Envelope({ state = "idle", showLetter = false, className = "" }: Props) {
  const reduce = useReducedMotion();
  const s = state;
  const open = s === "open";

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      aria-hidden="true"
    >
      <div className="relative aspect-[1.55/1] w-full" style={{ containerType: "inline-size" }}>
        {/* ── back panel ── */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "2.5% / 4%",
            background: "linear-gradient(172deg, #f0d5bb 0%, #f6e1ca 55%, #fbeadb 100%)",
            boxShadow: "0 26px 40px -30px rgba(94,62,54,.6), 0 0 0 1px rgba(184,111,131,.18)",
          }}
        />

        {/* ── the envelope's inner pocket, visible once opened ── */}
        <motion.div
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: "40%",
            background: "linear-gradient(180deg, #eed6bd 0%, #f6e4d0 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            borderRadius: "2.5% 2.5% 0 0 / 8% 8% 0 0",
            boxShadow: "0 10px 18px -14px rgba(94,62,54,.5) inset",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={reduce ? { duration: 0.2 } : { duration: 0.7, delay: 0.35 }}
        />

        {/* ── letter ── */}
        <motion.div
          className="absolute inset-x-[7%] top-[7%] z-[2] origin-bottom"
          initial={{ y: "2%", opacity: showLetter ? 1 : 0 }}
          animate={
            open
              ? { y: ["2%", "-72%", "-66%"], opacity: 1 }
              : s === "hover"
                ? { y: "-9%", opacity: showLetter ? 1 : 0 }
                : { y: "2%", opacity: showLetter ? 1 : 0 }
          }
          transition={
            reduce
              ? { duration: 0.2 }
              : open
                ? {
                    duration: 2.4,
                    times: [0, 0.55, 1],
                    ease: [0.22, 0.61, 0.36, 1],
                    delay: 0.42,
                  }
                : { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }
          }
        >
          <div
            className="relative w-full overflow-hidden px-[7%] pb-[9%] pt-[7%]"
            style={{
              borderRadius: "1.2%",
              background: "linear-gradient(178deg,#fffdf8 0%,#fff8ee 70%,#fdf1e2 100%)",
              boxShadow:
                "0 18px 30px -20px rgba(94,62,54,.6), 0 0 0 1px rgba(184,111,131,.16), 0 1px 0 rgba(255,255,255,.9) inset",
            }}
          >
            <p
              className="font-hand leading-[1.2] text-rose-deep"
              style={{ fontSize: "6.2cqw" }}
            >
              my babe, Julian,
            </p>
            <p
              className="mt-[4%] font-hand leading-[1.32] text-ink/85"
              style={{ fontSize: "5.2cqw" }}
            >
              I don’t just miss talking to you. I miss the little moments I wish I could
              share with you — one ordinary second at a time.
            </p>
            <div className="mt-[6%] flex items-end justify-between">
              <span
                className="font-sign leading-none text-rose"
                style={{ fontSize: "10cqw" }}
              >
                Razal
              </span>
              {/* a pressed petal tucked in */}
              <svg viewBox="0 0 40 40" style={{ width: "10cqw" }} className="mb-[1%] opacity-70">
                <path
                  d="M20 4c8 4 12 10 12 17 0 7-5 13-12 15-7-2-12-8-12-15C8 14 12 8 20 4z"
                  fill="rgba(236,162,178,.55)"
                  stroke="rgba(184,111,131,.5)"
                  strokeWidth=".8"
                />
                <path d="M20 8v24" stroke="rgba(184,111,131,.35)" strokeWidth=".7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ── front pocket ── */}
        <div className="absolute inset-0 z-[3] overflow-hidden" style={{ borderRadius: "2.5% / 4%" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(188deg, #fdf2e3 0%, #f9e7d3 46%, #f3d9c1 100%)",
              clipPath: "polygon(0 4%, 50% 49%, 100% 4%, 100% 100%, 0 100%)",
            }}
          />
          <svg
            viewBox="0 0 155 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 4 L77.5 49 L155 4"
              fill="none"
              stroke={INK}
              strokeWidth=".55"
              vectorEffect="non-scaling-stroke"
            />
            <path d="M0 100 L77.5 49" fill="none" stroke={INK} strokeWidth=".45" vectorEffect="non-scaling-stroke" opacity=".6" />
            <path d="M155 100 L77.5 49" fill="none" stroke={INK} strokeWidth=".45" vectorEffect="non-scaling-stroke" opacity=".6" />
            {/* soft top light on the pocket edge */}
            <path
              d="M0 4 L77.5 49 L155 4"
              fill="none"
              stroke="rgba(255,255,255,.75)"
              strokeWidth="1.1"
              vectorEffect="non-scaling-stroke"
              transform="translate(0,1.2)"
            />
          </svg>
        </div>

        {/* ── closing flap + wax seal (fades away as it swings back) ── */}
        <motion.div
          className="absolute inset-x-0 top-0 z-[4] origin-top"
          style={{ transformStyle: "preserve-3d", height: "52%" }}
          initial={{ rotateX: 0, opacity: 1 }}
          animate={
            open
              ? { rotateX: -178, opacity: [1, 1, 0] }
              : s === "hover"
                ? { rotateX: -16, opacity: 1 }
                : { rotateX: 0, opacity: 1 }
          }
          transition={
            reduce
              ? { duration: 0.2 }
              : {
                  rotateX: { duration: 1.15, ease: [0.32, 0.72, 0.2, 1] },
                  opacity: { duration: 0.9, times: [0, 0.48, 0.68], ease: "linear" },
                }
          }
        >
          <div
            className="relative h-full w-full"
            style={{
              background: "linear-gradient(180deg, #fffbf4 0%, #fbeadb 52%, #f6dfc9 100%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              backfaceVisibility: "hidden",
              filter: "drop-shadow(0 10px 8px rgba(94,62,54,.12))",
            }}
          >
            <span
              className="absolute inset-x-0 top-0 block"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(184,111,131,.28), transparent)",
              }}
            />
          </div>

          {/* wax seal */}
          <div
            className="absolute left-1/2 top-full z-[5] -translate-x-1/2 -translate-y-1/2"
            style={{ width: "20%", aspectRatio: "1" }}
          >
            <motion.div
              className="grid h-full w-full place-items-center"
              animate={{ scale: open ? 0.82 : s === "hover" ? 1.04 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background:
                  "radial-gradient(circle at 34% 26%, #d18c9d 0%, #b86f83 40%, #9c5466 76%, #864454 100%)",
                borderRadius: "46% 54% 51% 49% / 52% 47% 53% 48%",
                boxShadow:
                  "0 2px 5px rgba(94,62,54,.4), 0 1px 0 rgba(255,255,255,.32) inset, 0 -2px 5px rgba(80,40,50,.4) inset",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-[54%] w-[54%] opacity-80">
                <path
                  d="M12 20s-7.2-4.35-9.1-8.1C1.28 8.6 3.3 5.3 6.5 5.3c2 0 3.4 1.1 4.2 2.35l1.3 1.9 1.3-1.9c.8-1.25 2.2-2.35 4.2-2.35 3.2 0 5.22 3.3 3.6 6.6C19.2 15.65 12 20 12 20z"
                  fill="rgba(255,247,238,.55)"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
