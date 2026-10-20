import { useEffect, useRef, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A quiet, honest little counter: how long this page has been open.
 * It isn't a statistic — it's the joke inside the last line of the letter.
 */
export function SecondsTicker() {
  const [seconds, setSeconds] = useState(0);
  const started = useRef<number | null>(null);

  useEffect(() => {
    started.current = Date.now();
    let id = 0;
    const tick = () => {
      if (started.current) {
        setSeconds(Math.floor((Date.now() - started.current) / 1000));
      }
    };
    tick();
    id = window.setInterval(tick, 1000);
    const onVis = () => {
      if (!document.hidden) tick();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <div className="mt-12 border-y border-cocoa/12 py-5">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-6">
        <span className="eyebrow whitespace-nowrap text-[10px] text-rose-deep/80">
          on my mind for
        </span>
        <div className="flex items-baseline gap-3" aria-hidden="true">
          <span className="font-serif text-[clamp(1.55rem,3vw,2.05rem)] tabular-nums tracking-[0.04em] text-ink">
            {h > 0 && <>{pad(h)} : </>}
            {pad(m)} <span className="text-rose/70">:</span>{" "}
            <span className="text-rose-deep">{pad(s)}</span>
          </span>
          <span className="font-hand text-[1.05rem] text-rose-deep/80">and counting</span>
        </div>
        <span className="text-center font-hand text-[0.98rem] leading-tight text-cocoa/70 sm:text-right">
          seconds nobody else would notice
        </span>
      </div>
      <p className="sr-only">
        A live counter of the seconds since this letter was opened, because
        Razal misses Julian in seconds nobody else would notice.
      </p>
    </div>
  );
}
