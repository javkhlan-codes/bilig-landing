import { logoStrip } from "@/data/content";

export function LogoStrip() {
  return (
    <div className="border-y border-line py-[34px]">
      <div className="wrap">
        <p className="mb-[18px] text-center font-mono-brand text-[11.5px] uppercase tracking-[.14em] text-txt-3">
          {logoStrip.label}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {logoStrip.slots.map((slot) => (
            <span key={slot} className="c-slot">
              {slot}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
