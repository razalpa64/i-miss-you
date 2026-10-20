import { Reveal } from "../Reveal";
import { ChapterHeader, WaxSeal } from "./ChapterBits";
import stamp from "../../assets/stamp.webp";
import stem from "../../assets/stem-eucalyptus.webp";
import stemCosmos from "../../assets/stem-cosmos.webp";

export function PartFour() {
  return (
    <section
      id="until"
      aria-labelledby="chapter-four"
      className="relative z-[2] px-6 pt-[clamp(1rem,3vh,2rem)] sm:px-10"
    >
      {/* Background botanical accent */}
      <img
        src={stemCosmos}
        alt=""
        aria-hidden="true"
        className="sway-slow pointer-events-none absolute -right-10 top-12 -z-[1] hidden w-[clamp(80px,10vw,135px)] rotate-[20deg] opacity-30 lg:block"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(54% 46% at 80% 24%, rgba(255,233,168,.34), rgba(255,247,238,0) 70%), radial-gradient(50% 44% at 14% 70%, rgba(201,216,191,.26), rgba(255,247,238,0) 72%)",
        }}
      />
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="relative mx-auto max-w-[660px]">
          <ChapterHeader
            chapter="chapter iv."
            kicker="the promise"
            title={<span id="chapter-four">Until we get that day</span>}
            note={
              <p className="hand text-[1.05rem] text-rose-deep/75">
                not a maybe. just not yet.
              </p>
            }
          />

          <div className="letter-body mt-8">
            <Reveal as="p">
              I don’t miss you because you always have to be available, Julian. I miss
              you because you’re you. There’s a difference, and I want you to feel it.
            </Reveal>

            <Reveal as="p" className="mt-5">
              You don’t have to reply to this with perfect words. You don’t have to feel
              better on my schedule, or tell me it’s alright if it isn’t. Take your time.
              I’m not going anywhere.
            </Reveal>

            <Reveal as="p" className="mt-5">
              Until then, my love, I’ll keep doing the small things. Saying good morning
              when I can. Telling you when I think of you. Listening better. Remembering
              what actually matters. A little reminder here, a stupid voice note there, a
              message that says: I’m still here, and I’m still yours.
            </Reveal>

            <Reveal as="p" className="mt-5">
              One day we’ll have a day that isn’t special to anyone else. Breakfast that
              goes cold because we’re talking. A walk that takes too long. Falling asleep
              during a film we’ve both already seen. I probably won’t notice it while
              it’s happening. I hope it lasts forever.
            </Reveal>

            <Reveal as="p" className="mt-5">
              Until then, I’m missing you in the seconds nobody else bothers to count.
            </Reveal>
          </div>

          {/* the signed card */}
          <Reveal className="relative mt-12">
            <div className="paper relative mx-auto rotate-[-0.4deg] px-6 pb-8 pt-9 sm:px-12 sm:pb-10 sm:pt-12">
              <span
                aria-hidden="true"
                className="tape left-[16%] -top-3 rotate-[-4deg]"
                style={{ ["--tape-color" as string]: "rgba(236,162,178,.5)" }}
              />

              {/* a real postage stamp — public-domain botanical plate */}
              <div className="absolute right-4 top-4 z-[2] sm:right-7 sm:top-6">
                <div className="relative rotate-[2.5deg] bg-[#fffdf8] p-[5px] shadow-[0_10px_18px_-12px_rgba(94,62,54,.55)]">
                  <img
                    src={stamp}
                    alt=""
                    aria-hidden="true"
                    className="block h-[62px] w-[58px] object-cover sm:h-[76px] sm:w-[70px]"
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[5px] ring-1 ring-inset ring-cocoa/15"
                  />
                </div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 120"
                  className="pointer-events-none absolute hidden -left-[62px] -bottom-[26px] h-[104px] w-[104px] rotate-[-12deg] text-cocoa/45 sm:block"
                >
                  <defs>
                    <path
                      id="postmark-arc"
                      d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                    />
                  </defs>
                  <circle cx="60" cy="60" r="53" fill="none" stroke="currentColor" strokeWidth="0.9" />
                  <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeWidth="0.9" />
                  <text fill="currentColor" fontSize="7.4" letterSpacing="2.1" fontFamily="DM Sans, sans-serif">
                    <textPath href="#postmark-arc" startOffset="3%">
                      FOR JULIAN · WITH LOVE · RAZAL ·
                    </textPath>
                  </text>
                  <path d="M52 56h16M52 61h16M52 66h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>

              {/* cancellation waves */}
              <svg
                aria-hidden="true"
                viewBox="0 0 90 60"
                className="pointer-events-none absolute -right-[34px] top-[86px] hidden h-12 w-16 text-cocoa/25 sm:block"
                fill="none"
              >
                {[0, 12, 24].map((d) => (
                  <path
                    key={d}
                    d={`M2 ${18 + d} q 10 -7 20 0 t 20 0 t 20 0 t 20 0`}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
              </svg>

              <p className="eyebrow pr-24 text-[9.5px] text-rose-deep/70 sm:pr-0">the last page, for now</p>

              <div className="mt-6 max-w-[330px]">
                <p className="font-serif text-[clamp(1.05rem,1.8vw,1.3rem)] italic leading-relaxed text-ink-soft">
                  I love you, my babe.
                </p>
                <p className="mt-5 font-sign text-[clamp(2.2rem,5.4vw,3.15rem)] leading-[1.05] text-rose-deep">
                  Always your{" "}
                  <span className="whitespace-nowrap">
                    Razal
                    <span className="ml-2 inline-block translate-y-[-0.18em] font-serif text-[0.36em] not-italic text-rose">
                      ♡
                    </span>
                  </span>
                </p>
              </div>

              <div className="mt-7 flex items-end justify-between gap-4">
                <div className="relative">
                  <img
                    src={stem}
                    alt=""
                    aria-hidden="true"
                    className="w-[64px] rotate-[-16deg] opacity-85 sm:w-[78px]"
                    loading="lazy"
                  />
                  <p className="mt-2 max-w-[176px] font-hand text-[1.02rem] leading-tight text-rose-deep/80">
                    no reply needed, babe.
                    <br />
                    I just wanted you to know.
                  </p>
                </div>
                <div className="pb-1">
                  <WaxSeal size={50} className="seal-shimmer" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
