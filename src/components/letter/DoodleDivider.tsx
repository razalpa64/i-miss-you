import { Reveal } from "../Reveal";
import doodle from "../../assets/cats-doodle.webp";

/** A quiet pencil sketch from Razal's own folder — two cats, a few lines. */
export function DoodleDivider() {
  return (
    <div className="relative z-[2] mx-auto flex w-full max-w-[1080px] flex-col items-center px-6 pb-0 pt-[clamp(2rem,4.5vw,3rem)] sm:px-10">
      <Reveal y={16}>
        <figure className="relative">
          <img
            src={doodle}
            alt="A hand-drawn sketch of two cats curled up together with tiny hearts and sparkles."
            className="w-[clamp(150px,17vw,214px)] opacity-90"
            loading="lazy"
            width={552}
            height={550}
          />
          <figcaption className="mt-1 text-center font-hand text-[clamp(0.95rem,1.3vw,1.08rem)] leading-tight text-rose-deep/75">
            the two of us, in a few lines
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
