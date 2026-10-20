import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  as?: "div" | "p" | "span" | "li" | "h2" | "h3" | "figure" | "blockquote";
  once?: boolean;
};

/** A quiet entrance: lifts, settles and sharpens. Never bounces. */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  blur = false,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, ...(blur ? { filter: "blur(6px)" } : {}) }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once, margin: "-6% 0px -8% 0px" }}
      transition={{ duration: reduce ? 0.35 : 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
  },
};
