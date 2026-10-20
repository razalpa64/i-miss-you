import stemCosmos from "../assets/stem-cosmos.webp";
import stemCosmosMirror from "../assets/stem-cosmos-mirror.webp";
import stemEucalyptus from "../assets/stem-eucalyptus.webp";
import stemEucalyptusSoft from "../assets/stem-eucalyptus-soft.webp";
import bouquetSmall from "../assets/bouquet-small.webp";
import butterfly from "../assets/butterfly.webp";

/**
 * Romantic background flowers without solid backgrounds, softly framing the viewport edges.
 * They gently sway and float on dedicated GPU compositor layers without obstructing readability.
 */
export function BotanicalFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {/* Top Left: Cosmos blossom & resting watercolor butterfly */}
      <img
        src={stemCosmos}
        alt=""
        className="sway pointer-events-none absolute -left-6 -top-8 w-[clamp(65px,8vw,120px)] rotate-[22deg] opacity-50 sm:-left-3 sm:-top-6"
        loading="lazy"
        decoding="async"
      />
      <img
        src={butterfly}
        alt=""
        className="float-soft pointer-events-none absolute left-12 top-10 hidden w-[clamp(26px,3.2vw,44px)] rotate-[-14deg] opacity-65 sm:block"
        loading="lazy"
        decoding="async"
      />

      {/* Top Right: Arched eucalyptus sprig */}
      <img
        src={stemEucalyptusSoft}
        alt=""
        className="sway-slow pointer-events-none absolute -right-4 -top-6 w-[clamp(60px,7.5vw,110px)] rotate-[168deg] opacity-45 sm:-right-2 sm:-top-4"
        loading="lazy"
        decoding="async"
      />

      {/* Mid Left: Soft mirrored cosmos bloom */}
      <img
        src={stemCosmosMirror}
        alt=""
        className="sway pointer-events-none absolute -left-5 top-[44%] w-[clamp(55px,7vw,115px)] rotate-[-8deg] opacity-40 sm:-left-3"
        loading="lazy"
        decoding="async"
      />

      {/* Mid Right: Wildflower bouquet resting softly */}
      <img
        src={bouquetSmall}
        alt=""
        className="float-soft pointer-events-none absolute -right-6 top-[50%] hidden w-[clamp(70px,8.5vw,130px)] rotate-[14deg] opacity-45 sm:block"
        loading="lazy"
        decoding="async"
      />

      {/* Bottom Left: Leafy eucalyptus stem */}
      <img
        src={stemEucalyptus}
        alt=""
        className="sway-slow pointer-events-none absolute -bottom-8 -left-5 w-[clamp(68px,8.5vw,125px)] rotate-[-15deg] opacity-45 sm:-left-2"
        loading="lazy"
        decoding="async"
      />

      {/* Bottom Right: Cosmos stem blooming upward */}
      <img
        src={stemCosmos}
        alt=""
        className="sway pointer-events-none absolute -bottom-10 -right-6 w-[clamp(75px,9.5vw,135px)] rotate-[35deg] opacity-50 sm:-right-3"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
