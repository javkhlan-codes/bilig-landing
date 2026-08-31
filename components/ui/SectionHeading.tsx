import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { renderEmphasis } from "@/lib/emphasis";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  center?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Eyebrow + H2 (with `*emphasis*`) + lede paragraph — the recurring
 * section header pattern used across almost every section. */
export function SectionHeading({ eyebrow, title, lede, center, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-[clamp(27px,3.7vw,43px)] font-semibold leading-[1.12] tracking-[-0.028em]">
        {renderEmphasis(title)}
      </h2>
      {lede ? (
        <p className={`mt-[18px] max-w-[56ch] text-[17px] font-light leading-[1.6] text-txt-2 ${center ? "mx-auto" : ""}`}>
          {lede}
        </p>
      ) : null}
      {children}
    </div>
  );
}
