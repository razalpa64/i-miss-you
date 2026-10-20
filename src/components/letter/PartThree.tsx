import { Reveal } from "../Reveal";
import { ChapterHeader, SmallFlower } from "./ChapterBits";
import catFlower from "../../assets/cat-flower.webp";
import bouquet from "../../assets/bouquet-small.webp";

const WISHES = [
  "talk about nothing until it’s suddenly late",
  "be the reason you laugh on a heavy day",
  "hold your hand somewhere completely ordinary",
  "hug you when you’re too tired to talk",
  "watch your face while you talk about what you love",
  "say goodnight without wishing the distance away",
];

export function PartThree() {
  return (
    <section
      id="wishes"
      aria-labelledby="chapter-three"
      className="relative z-[2] px-6 pt-[clamp(4.5rem,10vh,8rem)] sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,660px)_280px] lg:gap-16">
          <div>
            <ChapterHeader
              chapter="chapter iii."
              kicker="the wishing"
              title={<span id="chapter-three">I wish you were here</span>}
            />

            <div className="letter-body mt-8">
              <Reveal as="p">
                Some days the distance is just a fact. I get on with things, we text, we
                talk, and it’s fine. Then there are days like today, when I want one
                completely ordinary thing with you and it feels like hunger.
              </Reveal>

              <Reveal as="p" className="mt-5">
                I want to sit with you and talk about absolutely nothing. I want to be
                the one who makes you laugh on a day that’s been heavy, even if it takes
                me ten tries and nine of them land badly. I want to hold your hand in the
                boring aisle of a shop. I want to hug you when you’re tired — the kind of
                hug where nobody says anything for a minute.
              </Reveal>

              <Reveal as="p" className="mt-5">
                I want to watch you talk about something you love with your whole face. I
                want to know what you’re excited about before you finish telling me. I
                want to hear the small things, the ones you think aren’t worth mentioning.
              </Reveal>

              <Reveal as="p" className="mt-5">
                I want one quiet day. No occasion, no plan, no countdown. Just a day with
                you in it, at normal speed. And at night, I want to say goodnight to you
                without the small ache of wishing the distance weren’t there. Just:
                goodnight, see you tomorrow — and mean it as simply as it sounds.
              </Reveal>
            </div>
          </div>

          <Reveal className="relative mx-auto w-[min(232px,56vw)] lg:sticky lg:top-28">
            <img
              src={catFlower}
              alt="A sleeping kitten hugging a pink tulip, petals resting beside it."
              className="sway w-full opacity-95 drop-shadow-[0_20px_26px_rgba(121,91,84,0.16)]"
              loading="lazy"
              width={700}
              height={823}
            />
            <p className="mt-2 text-center font-hand text-[1rem] text-rose-deep/70">
              he’s holding one for you
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-[660px]">
          <Reveal>
            <figure className="paper relative rotate-[-0.35deg] px-6 py-7 sm:px-10 sm:py-9">
              <span
                aria-hidden="true"
                className="tape left-1/2 -top-3 -translate-x-1/2 rotate-[-2deg]"
                style={{ ["--tape-color" as string]: "rgba(201,216,191,.7)" }}
              />
              <figcaption>
                <p className="eyebrow text-center text-[10px] text-rose-deep/75">
                  a small list, kept in my notes
                </p>
                <p className="mt-2 text-center font-serif text-[clamp(1.25rem,2.2vw,1.55rem)] italic text-ink">
                  ordinary things I want with you
                </p>
              </figcaption>
              <ol className="mt-5">
                {WISHES.map((wish, i) => (
                  <li
                    key={wish}
                    className="group flex items-baseline gap-3 border-b border-cocoa/10 py-[0.7rem] last:border-b-0"
                  >
                    <span className="eyebrow w-6 shrink-0 text-[9.5px] text-rose-deep/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[1.04rem] leading-relaxed text-ink">
                      {wish}
                    </span>
                    <span className="dotted-leader hidden sm:block" aria-hidden="true" />
                    <SmallFlower className="ml-auto hidden h-3.5 w-3.5 text-rose/70 transition-transform duration-500 group-hover:rotate-45 sm:ml-0 sm:block" />
                  </li>
                ))}
              </ol>
              <img
                src={bouquet}
                alt=""
                aria-hidden="true"
                className="float-soft pointer-events-none absolute -bottom-12 -right-4 w-[clamp(64px,8vw,96px)] rotate-[8deg] opacity-90 sm:-right-8"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <Reveal className="mt-10">
            <div className="border-l border-rose/40 pl-6 sm:ml-2">
              <p className="font-serif text-[clamp(1.15rem,2vw,1.42rem)] italic leading-relaxed text-ink">
                No occasion. No plan. No countdown. Just a day with you in it,{" "}
                <span className="text-rose-deep">at normal speed.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
