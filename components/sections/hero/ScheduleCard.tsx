import { Fragment } from "react";
import { scheduleCard, type CellKind } from "@/data/content";
import { ConflictChip } from "./ConflictChip";

const kindClass: Record<Exclude<CellKind, null>, string> = {
  t: "c-k-t",
  i: "c-k-i",
  v: "c-k-v",
  x: "c-k-x",
};

/** The signature hero visual: a week schedule grid with a floating
 * "teacher double-booked" alert chip, exactly as in the source deck. */
export function ScheduleCard() {
  const ariaLabel =
    "Долоо хоногийн хичээлийн хуваарь. Лхагва гарагийн 14:00 цагт багшийн давхардал илэрсэн.";

  return (
    <div className="c-card c-card--lg relative p-5">
      <div className="mb-[14px] flex items-center gap-[10px] border-b border-line pb-[14px]">
        <span className="font-mono-brand text-[11.5px] uppercase tracking-[.1em] text-txt-2">
          {scheduleCard.title}
        </span>
        <span className="ml-auto rounded-full bg-pill px-[11px] py-1 font-mono-brand text-[11px] text-teal">
          {scheduleCard.pill}
        </span>
      </div>

      <div className="c-tt" role="img" aria-label={ariaLabel}>
        <span />
        {scheduleCard.days.map((d) => (
          <span key={d} className="c-tt__d">
            {d}
          </span>
        ))}

        {scheduleCard.rows.map((row) => (
          <Fragment key={row.time}>
            <span className="c-tt__t">{row.time}</span>
            {row.cells.map((cell, i) => (
              <span
                key={`${row.time}-${i}`}
                className={`c-tt__c ${cell.kind ? kindClass[cell.kind] : ""}`}
              >
                {cell.label}
              </span>
            ))}
          </Fragment>
        ))}
      </div>

      <ConflictChip />
    </div>
  );
}
