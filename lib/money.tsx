import { Fragment, type ReactNode } from "react";

/**
 * The brand display face (Unbounded) has no glyph for ₮ (U+20AE, Mongolian
 * Tugrik), so the browser silently falls back to a system font for just
 * that character. That fallback glyph sits under the heading's negative
 * letter-spacing (tracking-normal resets it here) and, being a much
 * narrower shape than Unbounded's digits, reads as jammed up against its
 * neighbour without a hair of margin to separate them.
 */
export function renderMoney(text: string): ReactNode {
  const parts = text.split(/(₮)/g);
  return parts.map((part, i) =>
    part === "₮" ? (
      <span key={i} className="font-sans tracking-normal mx-1">
        ₮
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
