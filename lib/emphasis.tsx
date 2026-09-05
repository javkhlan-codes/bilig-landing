import { Fragment, type ReactNode } from "react";

/**
 * Content in `data/content.ts` marks the brand-colored word(s) of a heading
 * with `*asterisks*` (e.g. "Юу нь *өөрчлөгдөх* вэ"). This renders that
 * string as React nodes, wrapping the marked segment in the shared
 * `.c-em` (brand blue) style — mirrors the original `<em>` usage.
 */
export function renderEmphasis(text: string, emClassName = "c-em"): ReactNode {
  const parts = text.split(/\*(.+?)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className={emClassName}>
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
