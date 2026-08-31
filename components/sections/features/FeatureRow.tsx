import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { renderEmphasis } from "@/lib/emphasis";

interface FeatureRowProps {
  eyebrow: string;
  title: string;
  body: string;
  ticks: string[];
  visual: ReactNode;
  /** Puts the visual first in DOM order (desktop: visual sits in the left
   * column; mobile: visual stacks above the copy) — matches the
   * alternating layout of the original "row" / "row row--flip" markup. */
  reverse?: boolean;
}

function Copy({ eyebrow, title, body, ticks }: Omit<FeatureRowProps, "visual" | "reverse">) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="font-display text-[clamp(22px,2.6vw,30px)] tracking-[-0.03em]">{renderEmphasis(title)}</h3>
      <p className="mt-[14px] text-[16.5px] font-light text-txt-2">{body}</p>
      <ul className="c-ticks mt-[22px] list-none p-0">
        {ticks.map((tick) => (
          <li key={tick}>{tick}</li>
        ))}
      </ul>
    </div>
  );
}

export function FeatureRow({ eyebrow, title, body, ticks, visual, reverse }: FeatureRowProps) {
  return (
    <div className="grid items-center gap-8 min-[900px]:grid-cols-2 min-[900px]:gap-[clamp(32px,5vw,72px)]">
      {reverse ? (
        <>
          <div>{visual}</div>
          <Copy eyebrow={eyebrow} title={title} body={body} ticks={ticks} />
        </>
      ) : (
        <>
          <Copy eyebrow={eyebrow} title={title} body={body} ticks={ticks} />
          <div>{visual}</div>
        </>
      )}
    </div>
  );
}
