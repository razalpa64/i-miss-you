import { Reveal } from "../Reveal";
import { ChapterHeader, SmallFlower } from "./ChapterBits";
import teddy from "../../assets/teddy-letter.webp";
import stem from "../../assets/stem-cosmos.webp";

const BETTER = [
  "Giving you my full attention whenever we talk.",
  "Never letting a busy day make you feel forgotten.",
  "Listening with an open heart whenever you're ready to share.",
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
                decoding="async"
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

            <div className="letter-body mt-8 space-y-5">
              <Reveal as="p" className="letter-lead font-serif text-[1.12em] leading-relaxed text-rose-deep">
                Babe, I&apos;m really sorry about yesterday. 🥺❤️
              </Reveal>

              <Reveal as="p">
                I&apos;m so sorry, na. I know I couldn&apos;t talk to you properly, and I didn&apos;t even see your messages because my phone was in the locker room. Please believe me, babe, I wasn&apos;t ignoring you. The very first thing I did after getting my phone was check your messages because you were the first person I wanted to hear from. I wanted to know how you were, what you were doing, and whether you had messaged me.
              </Reveal>

              <Reveal as="p">
                And babe, honestly, even though I was enjoying the trip with my family, I don&apos;t think I was enjoying every moment the way I could have. You kept coming into my mind, na. Every time I went on a ride, I imagined how much more fun it would&apos;ve been if you were there with me. On every roller coaster, I wanted you beside me. On every water slide, I wished you were there, laughing with me. I wanted to hold your hand and walk around the amusement park with you, tease you, watch your reactions, and make memories together. I kept thinking about how much I wished I could experience all those little things with you. ❤️
              </Reveal>

              <Reveal as="p">
                And babe, there&apos;s something that&apos;s been hurting me a lot. When I tell you I love you and you don&apos;t say it back, I don&apos;t know why, but it keeps haunting me. I keep wondering if I&apos;ve hurt you, if you&apos;re upset with me, or if something has changed. I&apos;m not saying you have to say it back every time, na. I just miss the way we talk, and I miss feeling close to you. Maybe I&apos;m overthinking, but I can&apos;t pretend it isn&apos;t making me sad.
              </Reveal>

              <Reveal as="p">
                Today, every time my phone notification rings, I immediately think it&apos;s you. I pick up my phone hoping to see your message, and when it&apos;s not you, I feel a little disappointed. Then I put my phone down, and a little later, when it rings again, I do the same thing. It&apos;s silly, maybe, but I miss you that much, babe. I miss talking to you properly. I miss your messages. I miss feeling like I can share every little thing with you.
              </Reveal>

              <Reveal as="p">
                I&apos;m not telling you this to make you feel bad or to force you to talk to me. I just want you to understand what&apos;s going on in my heart, na. I&apos;m genuinely sorry if I made you feel ignored yesterday. You matter so much to me, and I never wanted a day out with my family to make you feel like you had less importance in my life.
              </Reveal>

              <Reveal as="p">
                <strong className="font-semibold text-rose-deep">Babe, please forgive me if I hurt you.</strong> I wish I had checked my messages sooner. I wish I could go back and make sure you didn&apos;t feel forgotten. I can&apos;t change what happened yesterday, but I can listen to you, understand how you felt, and try to do better.
              </Reveal>

              <Reveal as="p">
                I miss you so much, Julian. I wish I could tell you all this while holding your hand instead of typing it through a screen. I wish I could hug you right now and tell you that I&apos;m sorry, that I love you, and that even when I&apos;m somewhere else, you&apos;re still someone I carry in my thoughts.
              </Reveal>

              <Reveal as="p">
                I don&apos;t know if you&apos;re upset with me, babe, and I don't want to assume. If something is bothering you, please tell me when you&apos;re ready. I want to understand you, too.
              </Reveal>

              <Reveal as="p" className="font-serif italic text-[1.14em] text-rose-deep">
                I love you, my babe. So much. And I&apos;m sorry about yesterday. ❤️🥺
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
                  p.s. Whenever you&apos;re ready to talk, I&apos;m right here.
                  <br />
                  I miss your voice so much.
                </p>
                <img
                  src={stem}
                  alt=""
                  aria-hidden="true"
                  className="float-soft pointer-events-none absolute -bottom-10 -right-10 w-[74px] rotate-[18deg] opacity-80"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
