import { Reveal } from "../Reveal";
import { ChapterHeader, SmallFlower } from "./ChapterBits";
import teddy from "../../assets/teddy-letter.webp";
import stem from "../../assets/stem-cosmos.webp";

const BETTER = [
  "More time — the real kind, when I have it.",
  "Clearer words when my day gets loud.",
  "Better listening, even when I’m tired.",
];

export function PartTwo() {
  return (
    <section
      id="sorry"
      aria-labelledby="chapter-two"
      className="relative z-[2] px-6 pt-[clamp(4.5rem,10vh,8rem)] sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(58% 54% at 22% 42%, rgba(247,198,208,.30), rgba(255,247,238,0) 70%), radial-gradient(46% 40% at 86% 76%, rgba(255,214,189,.28), rgba(255,247,238,0) 72%)",
        }}
      />
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="grid items-start gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-16">
          {/* the teddy, holding a letter for her */}
          <Reveal className="relative mx-auto w-[min(240px,58vw)] lg:sticky lg:top-28">
            <div className="relative">
              <img
                src={teddy}
                alt="A small teddy bear holding a cream envelope sealed with a rose heart."
                className="relative z-[2] w-full drop-shadow-[0_22px_28px_rgba(121,91,84,0.18)]"
                loading="lazy"
                width={760}
                height={780}
              />
              <div className="paper absolute -right-3 bottom-14 z-[3] w-[124px] rotate-[5deg] px-3.5 py-3 sm:-right-8">
                <span
                  aria-hidden="true"
                  className="tape left-1/2 -top-2.5 h-[18px] w-[58px] -translate-x-1/2 rotate-[-3deg]"
                  style={{ ["--tape-color" as string]: "rgba(255,214,189,.8)" }}
                />
                <p className="font-hand text-[1.08rem] leading-[1.2] text-rose-deep">
                  I mean it,
                  <br />
                  babe.
                </p>
              </div>
            </div>
            <p className="mt-3 text-center font-hand text-[0.98rem] text-rose-deep/65">
              no excuses. just sorry.
            </p>
          </Reveal>

          <div className="max-w-[620px]">
            <ChapterHeader
              chapter="chapter ii."
              kicker="the apology"
              title={<span id="chapter-two">I’m sorry about yesterday, babe</span>}
            />

            <div className="letter-body mt-8">
              <Reveal as="p">
                I know I couldn’t spend much time talking to you yesterday because I was
                on my trip. I’m sorry if that made you feel ignored, or if it felt like I
                wasn’t making enough time for you. I never wanted you to feel that way.
                Even when I couldn’t talk to you properly, it didn’t mean you weren’t on
                my mind.
              </Reveal>

              <Reveal as="p" className="mt-5">
                I’m not going to dress it up. The day was busy, but I could have found a
                few quiet minutes, and I didn’t. That part is on me.
              </Reveal>

              <Reveal as="p" className="mt-5">
                I’ve been thinking about what love actually looks like on a normal day.
                It can’t only be “I love you” sent in a hurry before sleeping. It has to
                be time — real time, when I have it. Clearer words when I’m busy, even if
                it’s just three lines saying I’m not free right now and I’ll come back.
                Listening properly when I’m tired and still want to hear you. That’s the
                part I want to get better at, not because you asked me to, but because
                you deserve it.
              </Reveal>

              <Reveal as="p" className="mt-5">
                So, I’m sorry. Sincerely. Not so you’ll tell me it’s fine — I just wanted
                you to know that I noticed, and I’m listening.
              </Reveal>
            </div>

            <Reveal className="mt-8">
              <p className="font-hand text-[1.12rem] text-rose-deep/80">
                what I want to get better at
              </p>
              <ul className="mt-4 space-y-3">
                {BETTER.map((line) => (
                  <li key={line} className="flex items-baseline gap-3">
                    <SmallFlower className="h-3.5 w-3.5 translate-y-[2px] text-rose/80" />
                    <span className="font-serif text-[1.06rem] leading-relaxed text-ink">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="relative mt-9 inline-block">
              <div className="paper relative rotate-[-1deg] px-6 py-5 sm:px-8">
                <span
                  aria-hidden="true"
                  className="tape left-7 -top-3 rotate-[-4deg]"
                  style={{ ["--tape-color" as string]: "rgba(236,162,178,.5)" }}
                />
                <p className="font-hand text-[clamp(1.05rem,1.6vw,1.25rem)] leading-snug text-rose-deep">
                  p.s. I’ll call when you’re free — no rush.
                  <br />
                  I just miss your voice.
                </p>
                <img
                  src={stem}
                  alt=""
                  aria-hidden="true"
                  className="float-soft pointer-events-none absolute -bottom-10 -right-10 w-[74px] rotate-[18deg] opacity-80"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
