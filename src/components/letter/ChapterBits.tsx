import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

export function ChapterHeader({
  chapter,
  kicker,
  title,
  note,
}: {
  chapter: string;
  kicker: string;
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <header className="relative">
      <Reveal y={12}>
        <div className="flex items-center gap-4">
          <span className="font-serif text-[0.95rem] italic text-rose">{chapter}</span>
          <span className="h-px w-10 bg-cocoa/25" aria-hidden="true" />
          <span className="eyebrow">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08} y={18}>
        <h2 className="display mt-5 text-[clamp(2.15rem,4.4vw,3.6rem)]">{title}</h2>
      </Reveal>
      {note && (
        <Reveal delay={0.16} y={10}>
          <div className="mt-4">{note}</div>
        </Reveal>
      )}
    </header>
  );
}

export function MarginNote({
  children,
  className = "",
  rotate = -2,
  arrow = false,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  arrow?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden max-w-[170px] xl:block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {arrow && (
        <svg viewBox="0 0 60 34" className="mb-1 h-7 w-14 text-rose/70" fill="none">
          <path
            d="M58 3c-9 1.5-21 6-30 14-6 5-10 10-14 14"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
          <path d="M13 24l1 7 7-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <p className="font-hand text-[clamp(1rem,1.3vw,1.18rem)] leading-tight text-rose-deep/85">
        {children}
      </p>
    </div>
  );
}

export function WaxSeal({ size = 54, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "47% 53% 51% 49% / 52% 47% 53% 48%",
        background:
          "radial-gradient(circle at 34% 28%, #d18c9d 0%, #b86f83 40%, #9c5466 76%, #864454 100%)",
        boxShadow:
          "0 2px 5px rgba(94,62,54,.32), 0 1px 0 rgba(255,255,255,.32) inset, 0 -2px 5px rgba(80,40,50,.35) inset",
      }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.52} height={size * 0.52} aria-hidden="true">
        <path
          d="M12 20s-7.2-4.35-9.1-8.1C1.28 8.6 3.3 5.3 6.5 5.3c2 0 3.4 1.1 4.2 2.35l1.3 1.9 1.3-1.9c.8-1.25 2.2-2.35 4.2-2.35 3.2 0 5.22 3.3 3.6 6.6C19.2 15.65 12 20 12 20z"
          fill="rgba(255,247,238,.55)"
        />
      </svg>
    </span>
  );
}

export function SmallFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      fill="none"
    >
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="10"
          cy="5.4"
          rx="2.9"
          ry="3.6"
          fill="currentColor"
          opacity="0.5"
          transform={`rotate(${a} 10 10)`}
        />
      ))}
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
