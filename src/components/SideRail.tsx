import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SECTIONS = [
  { id: "cover", label: "cover" },
  { id: "letter", label: "one" },
  { id: "sorry", label: "two" },
  { id: "wishes", label: "three" },
  { id: "until", label: "four" },
  { id: "always", label: "always" },
] as const;

/** A discreet chapter rail — a bookmark ribbon of sorts. */
export function SideRail() {
  const [active, setActive] = useState<string>("cover");
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const target = document.getElementById("always");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.06 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.42;
        let current = "cover";
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top <= line) current = s.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Chapters of the letter"
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-700 lg:block ${
        hidden ? "pointer-events-none translate-x-6 opacity-0" : "opacity-100"
      }`}
    >
      <ul className="flex flex-col items-end gap-[18px]">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="group flex items-center gap-3">
              <span
                className={`font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                  isActive
                    ? "translate-x-0 text-rose-deep opacity-100"
                    : "translate-x-1 text-cocoa/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <button
                type="button"
                onClick={() => go(s.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to ${s.label === "cover" ? "the cover" : `chapter ${s.label}`}`}
                className="flex h-6 w-8 items-center justify-end"
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    isActive
                      ? "w-7 bg-rose"
                      : "w-3.5 bg-cocoa/45 group-hover:w-5 group-hover:bg-cocoa/70"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
