import { Reveal } from "../Reveal";
import { ChapterHeader, MarginNote, SmallFlower } from "./ChapterBits";
import { SecondsTicker } from "./SecondsTicker";
import stemCosmos from "../../assets/stem-cosmos.webp";
import stemEucalyptus from "../../assets/stem-eucalyptus.webp";

const LITTLE_THINGS = [
  {
    n: "01",
    text: "your laugh, halfway through a sentence",
    hint: "the best sound",
    span: "lg:col-span-3",
    rot: "rotate-[0.7deg]",
    tape: "left-6 -top-3 rotate-[-4deg]",
    color: "rgba(236,162,178,.5)",
  },
  {
    n: "02",
    text: "the pause before you say something silly",
    hint: "I always wait for it",
    span: "lg:col-span-3",
    rot: "rotate-[-0.8deg]",
    tape: "right-8 -top-3 rotate-[3deg]",
    color: "rgba(201,216,191,.65)",
  },
  {
    n: "03",
    text: "your good morning, before the world wakes up",
    hint: "",
    span: "lg:col-span-2",
    rot: "rotate-[0.35deg]",
    tape: "left-1/2 -top-3 -translate-x-1/2 rotate-[-2deg]",
    color: "rgba(255,214,189,.7)",
  },
  {
    n: "04",
    text: "your goodnight, after everything else",
    hint: "",
    span: "lg:col-span-2",
    rot: "rotate-[-0.45deg]",
    tape: "left-1/2 -top-3 -translate-x-1/2 rotate-[2deg]",
    color: "rgba(236,162,178,.45)",
  },
  {
    n: "05",
    text: "an ordinary day we haven’t had yet",
    hint: "coming, I promise",
    span: "lg:col-span-2",
    rot: "rotate-[0.55deg]",
    tape: "right-6 -top-3 rotate-[-3deg]",
    color: "rgba(255,233,168,.8)",
  },
];

export function PartOne() {
  return (
    <section
      id="letter"
      aria-labelledby="chapter-one"
      className="relative z-[2] px-6 pt-[clamp(2.25rem,5vh,3.75rem)] sm:px-10"
    >
      {/* Background botanical accents */}
      <img
        src={stemCosmos}
        alt=""
        aria-hidden="true"
        className="sway pointer-events-none absolute -left-10 top-16 -z-[1] hidden w-[clamp(80px,11vw,140px)] rotate-[-14deg] opacity-35 lg:block"
        loading="lazy"
        decoding="async"
      />
      <img
        src={stemEucalyptus}
        alt=""
        aria-hidden="true"
        className="sway-slow pointer-events-none absolute -right-10 top-[45%] -z-[1] hidden w-[clamp(85px,11.5vw,145px)] rotate-[24deg] opacity-30 lg:block"
        loading="lazy"
        decoding="async"
      />
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="relative mx-auto max-w-[660px]">
          <ChapterHeader
            chapter="chapter i."
            kicker="the missing"
            title={<span id="chapter-one">I miss you every second</span>}
            note={
              <p className="hand text-[1.05rem] text-rose-deep/75">
                and I mean every one of them
              </p>
            }
          />

          <MarginNote className="-right-[196px] top-[248px]" rotate={-2.5} arrow>
            even in the boring
            <br />
            parts of the day
          </MarginNote>
          <MarginNote className="-right-[188px] top-[548px]" rotate={2}>
            it happens more
            <br />
            than I admit
          </MarginNote>

          <div className="letter-body mt-9">
            <Reveal as="p" className="letter-lead">
              <span className="lead-word">Babe,</span> sometimes I wish you could see
              what my ordinary days feel like from inside my heart. Maybe then you’d
              understand how often I think about you, even when nothing special is
              happening.
            </Reveal>

            <Reveal as="p" className="mt-5">
              It’s not only the big things. It’s the small, unremarkable gaps in my day
              that keep filling up with you. I wake up and my first thought is you —
              half asleep, still deciding whether it’s worth opening my eyes. And before
              I sleep, I replay pieces of our conversations until they start to blur.
            </Reveal>

            <Reveal as="p" className="mt-5">
              Something funny happens and my first instinct is to tell you. I hear a song
              and think, “she’d like this one.” I see a cat doing something ridiculous on
              the street, and I wish you were beside me so I could just point at it and
              say nothing at all.
            </Reveal>

            <Reveal as="p" className="mt-5">
              It’s strange, missing someone in the middle of a conversation with them.
              We’ll be talking, and I’ll want to be sitting next to you, close enough to
              hear your laugh without the phone. I want to hold your hand and not say
              anything important. I want to sit with you in a quiet room and be
              completely fine with the silence.
            </Reveal>

            <Reveal as="p" className="mt-5">
              And here’s the part I don’t know how to say properly: I miss things we
              haven’t done yet. I miss a Sunday morning that hasn’t happened. I miss
              leaving somewhere too late with no real plan. I miss the version of us that
              argues about what to watch and then falls asleep before the opening
              credits.
            </Reveal>
          </div>

          {/* the central line */}
          <Reveal className="relative mt-11">
            <div
              aria-hidden="true"
              className="absolute inset-0 rotate-[-0.7deg] rounded-[2px]"
              style={{
                background:
                  "linear-gradient(184deg, rgba(251,224,229,.9), rgba(255,244,233,.92))",
                boxShadow: "0 18px 34px -30px rgba(94,62,54,.5)",
              }}
            />
            <figure className="relative border border-rose/15 px-6 py-8 sm:px-10 sm:py-10">
              <span
                aria-hidden="true"
                className="tape left-8 -top-3 rotate-[-5deg]"
                style={{ ["--tape-color" as string]: "rgba(236,162,178,.55)" }}
              />
              <blockquote className="font-serif text-center text-[clamp(1.3rem,2.5vw,1.95rem)] italic leading-[1.5] text-ink">
                “I don’t just miss talking to you, Julian. I miss the little moments I
                wish I could share with you,{" "}
                <span className="text-rose-deep">one ordinary second at a time.</span>”
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-center gap-2">
                <SmallFlower className="h-3.5 w-3.5 text-rose" />
                <span className="eyebrow text-[9.5px] text-rose-deep/75">
                  the whole truth, really
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* the little things */}
          <div className="mt-14">
            <Reveal>
              <p className="text-center font-hand text-[clamp(1.05rem,1.7vw,1.3rem)] text-rose-deep/85">
                the little things my day keeps reminding me of
              </p>
            </Reveal>

            <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-6">
              {LITTLE_THINGS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.n}
                  delay={i * 0.05}
                  className={`${item.span} ${item.rot}`}
                >
                  <div className="paper group relative h-full p-5 transition-transform duration-500 hover:-translate-y-1">
                    <span
                      aria-hidden="true"
                      className={`tape ${item.tape}`}
                      style={{ ["--tape-color" as string]: item.color }}
                    />
                    <span className="eyebrow text-[9.5px] text-rose-deep/60">{item.n}</span>
                    <p className="mt-2 font-serif text-[1.02rem] italic leading-snug text-ink">
                      {item.text}
                    </p>
                    {item.hint && (
                      <p className="mt-2 font-hand text-[0.95rem] leading-none text-rose-deep/70">
                        {item.hint}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <SecondsTicker />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
