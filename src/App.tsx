import { useCallback, useState } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { PetalField } from "./components/PetalField";
import { BotanicalFrame } from "./components/BotanicalFrame";
import { SideRail } from "./components/SideRail";
import { Hero } from "./components/Hero";
import { OpeningOverlay } from "./components/OpeningOverlay";
import { PartOne } from "./components/letter/PartOne";
import { DoodleDivider } from "./components/letter/DoodleDivider";
import { SprigDivider } from "./components/letter/SprigDivider";
import { PartTwo } from "./components/letter/PartTwo";
import { Interlude } from "./components/letter/Interlude";
import { PartThree } from "./components/letter/PartThree";
import { PartFour } from "./components/letter/PartFour";
import { Finale } from "./components/letter/Finale";

export default function App() {
  const [opening, setOpening] = useState(false);
  const reduce = useReducedMotion();

  const open = useCallback(() => setOpening(true), []);

  const done = useCallback(() => {
    setOpening(false);
    window.setTimeout(() => {
      document.getElementById("letter")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }, 120);
  }, [reduce]);

  const replay = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [reduce]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#letter"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-paper focus:px-4 focus:py-2 focus:font-sans focus:text-xs focus:tracking-widest focus:text-ink focus:shadow-lg"
      >
        Skip to the letter
      </a>

      <BotanicalFrame />
      <PetalField />
      <SideRail />

      <main className="page">
        <Hero onOpen={open} />
        <DoodleDivider />
        <PartOne />
        <PartTwo />
        <Interlude />
        <PartThree />
        <SprigDivider note="between the wishing and the promise" />
        <PartFour />
        <Finale onReplay={replay} />
      </main>

      <OpeningOverlay open={opening} onDone={done} />
    </MotionConfig>
  );
}
