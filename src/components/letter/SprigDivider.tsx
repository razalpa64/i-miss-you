import { Reveal } from "../Reveal";
import sprig from "../../assets/stem-eucalyptus-soft.webp";

/** A pressed sprig between chapters — a page-turn, in flowers. */
export function SprigDivider({ note }: { note?: string }) {
  return (
    <div className="relative z-[2] mx-auto flex w-full max-w-[1080px] items-center justify-center gap-5 px-6 py-[clamp(1.75rem,4vw,3rem)] sm:px-10">
      <Reveal className="flex items-center gap-5">
        <span className="h-px w-[clamp(40px,10vw,110px)] bg-gradient-to-r from-transparent to-cocoa/25" />
        <img
          src={sprig}
          alt=""
          aria-hidden="true"
          className="h-[clamp(40px,4.4vw,58px)] w-auto rotate-180 opacity-70"
          loading="lazy"
        />
        <span className="h-px w-[clamp(40px,10vw,110px)] bg-gradient-to-l from-transparent to-cocoa/25" />
      </Reveal>
      {note && (
        <span className="sr-only">{note}</span>
      )}
    </div>
  );
}
