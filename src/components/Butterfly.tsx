import { motion, useReducedMotion } from "framer-motion";
import butterfly from "../assets/butterfly.webp";

type Props = {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  drift?: number;
};

/** One unhurried butterfly, wings opening and closing. */
export function Butterfly({ className = "", size = 46, duration = 26, delay = 0, drift = 60 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <img
        src={butterfly}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute opacity-70 ${className}`}
        style={{ width: size }}
      />
    );
  }
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size }}
      animate={{
        x: [0, drift, drift * 0.3, -drift * 0.4, 0],
        y: [0, -26, 10, -34, 0],
        rotate: [-4, 6, -3, 7, -4],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.img
        src={butterfly}
        alt=""
        className="w-full drop-shadow-[0_6px_10px_rgba(184,111,131,0.18)]"
        animate={{ scaleX: [1, 0.72, 1], scaleY: [1, 1.03, 1] }}
        transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
