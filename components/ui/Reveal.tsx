"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades + slides a section into view the first time it crosses the
 * viewport, via IntersectionObserver. Mirrors the original `.rv` / `.rv.in`
 * scroll-reveal behaviour, and no-ops (renders visible immediately) when
 * the user prefers reduced motion. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // One-time read of an external system (the media query) at mount —
      // there's no render-time equivalent that stays SSR-safe, so this
      // intentionally skips the "no setState in effect body" guidance.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`c-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
