import stemCosmosMirror from "../assets/stem-cosmos-mirror.webp";
import stemEucalyptusSoft from "../assets/stem-eucalyptus-soft.webp";

/**
 * Background-free flowers that live on the page itself, not inside cards.
 * Fixed to the viewport edges, softly masked at the centre so they never
 * compete with the letter. Decorative only.
 */
export function BotanicalFrame() {
  const fade =
    "linear-gradient(180deg, transparent 0%, #000 14%, #000 82%, transparent 100%)";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] block"
    >
      <img
        src={stemCosmosMirror}
        alt=""
        className="sway absolute -left-4 top-[54%] w-[clamp(46px,6.4vw,104px)] opacity-[0.30]"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        loading="lazy"
      />
      <img
        src={stemEucalyptusSoft}
        alt=""
        className="sway-slow absolute -right-3 top-[7%] w-[clamp(44px,5.6vw,92px)] rotate-[172deg] opacity-[0.26]"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        loading="lazy"
      />
      <img
        src={stemCosmosMirror}
        alt=""
        className="sway-slow absolute right-[6%] bottom-[-6%] hidden w-[clamp(56px,5vw,84px)] rotate-[188deg] opacity-[0.20] sm:block"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        loading="lazy"
      />
    </div>
  );
}
