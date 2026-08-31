import type { CSSProperties } from "react";

export function Arc({ variant, opacity, style }: { variant: "tr" | "bl"; opacity?: number; style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className={`c-arc ${variant === "tr" ? "c-arc--tr" : "c-arc--bl"}`}
      style={opacity !== undefined ? { opacity, ...style } : style}
    />
  );
}
