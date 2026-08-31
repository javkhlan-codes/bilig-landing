import { parentFeature } from "@/data/content";
import { dotColor } from "@/lib/colors";
import { MockWindow } from "./MockWindow";

export function ParentMock() {
  return (
    <MockWindow>
      <div className="grid gap-[9px]">
        {parentFeature.rows.map((row) => (
          <div key={row.label} className="c-cell flex items-center gap-[11px] px-[14px] py-3 text-[13.5px]">
            <span className={`h-2 w-2 flex-none rounded-full ${dotColor[row.dot]}`} />
            {row.label}
            <small className="ml-auto font-mono-brand text-[11.5px] text-txt-2">{row.note}</small>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}
