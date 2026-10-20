import { useEffect, useRef } from "react";
import petal1 from "../assets/petal-1.webp";
import petal2 from "../assets/petal-2.webp";
import petal3 from "../assets/petal-3.webp";
import petal4 from "../assets/petal-4.webp";

type P = {
  x: number;
  y: number;
  w: number;
  vy: number;
  vx: number;
  rot: number;
  vr: number;
  phase: number;
  amp: number;
  alpha: number;
  sprite: number;
};

const SPRITES = [petal1, petal2, petal3, petal4];

/**
 * A slow drift of real painted petals behind the letter.
 * Kept inexpensive: one canvas, a dozen sprites, paused when hidden.
 */
export function PetalField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const imgs = SPRITES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: P[] = [];
    let raf = 0;
    let last = performance.now();
    let alive = true;

    const make = (initial = false): P => {
      const sprite = Math.floor(Math.random() * 4);
      const size = 9 + Math.random() * 20;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -40 - Math.random() * 120,
        w: size,
        vy: 9 + Math.random() * 18,
        vx: -6 + Math.random() * 12,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.35,
        phase: Math.random() * Math.PI * 2,
        amp: 10 + Math.random() * 24,
        alpha: 0.2 + Math.random() * 0.26,
        sprite,
      };
    };

    const resize = () => {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 640 ? 6 : w < 1100 ? 9 : 12;
      particles = Array.from({ length: count }, () => make(true));
    };

    const draw = (p: P, t: number) => {
      const img = imgs[p.sprite];
      if (!img.complete || !img.naturalWidth) return;
      const ratio = img.naturalHeight / img.naturalWidth;
      const height = p.w * ratio;
      const sway = Math.sin(t * 0.00035 + p.phase) * p.amp;

      // Softly reduce petal opacity near text center without expensive CSS mask-image
      const cx = (p.x - w * 0.5) / (w * 0.5);
      const cy = (p.y - h * 0.44) / (h * 0.44);
      const distSq = cx * cx + cy * cy;
      const edgeFactor = Math.min(1, Math.max(0.15, (distSq - 0.12) * 1.4));

      ctx.save();
      ctx.globalAlpha = p.alpha * edgeFactor;
      ctx.translate(p.x + sway, p.y);
      ctx.rotate(p.rot + Math.sin(t * 0.00025 + p.phase) * 0.22);
      ctx.drawImage(img, -p.w / 2, -height / 2, p.w, height);
      ctx.restore();
    };

    const step = (now: number) => {
      if (!alive) return;
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y += p.vy * dt;
        p.x += p.vx * dt;
        p.rot += p.vr * dt;
        if (p.y > h + 60) {
          Object.assign(p, make(false));
        }
        if (p.x < -60) p.x = w + 40;
        if (p.x > w + 60) p.x = -40;
        draw(p, now);
      }
      raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    if (reduce) {
      const paint = () => {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) draw(p, 0);
      };
      if (imgs.every((i) => i.complete)) paint();
      else imgs.forEach((i) => i.addEventListener("load", paint, { once: true }));
    } else {
      raf = requestAnimationFrame(step);
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
