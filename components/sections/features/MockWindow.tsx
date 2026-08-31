import type { ReactNode } from "react";

/** Shared "browser/app window" chrome (traffic-light dots + surface card)
 * wrapping each feature row's dashboard mock. */
export function MockWindow({ children }: { children: ReactNode }) {
  return (
    <div className="c-card p-5">
      <div className="mb-4 flex gap-[6px]">
        <i className="block h-[9px] w-[9px] rounded-full bg-line-2" />
        <i className="block h-[9px] w-[9px] rounded-full bg-line-2" />
        <i className="block h-[9px] w-[9px] rounded-full bg-line-2" />
      </div>
      {children}
    </div>
  );
}
