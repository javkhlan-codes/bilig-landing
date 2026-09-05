import { scheduleCard } from "@/data/content";

export function ConflictChip() {
  const { conflict } = scheduleCard;
  return (
    <div className="c-chip">
      <div className="flex items-center gap-[7px] text-[13px] font-semibold">
        <span className="c-chip__dot" />
        {conflict.title}
      </div>
      <div className="mt-[3px] text-[12.5px] leading-[1.45] text-txt-2">{conflict.body}</div>
      <span className="mt-2 inline-block font-mono-brand text-[11px] font-medium text-blue">{conflict.action}</span>
    </div>
  );
}
