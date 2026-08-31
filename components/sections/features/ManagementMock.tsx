import { managementFeature } from "@/data/content";
import { textColor } from "@/lib/colors";
import { renderMoney } from "@/lib/money";
import { MockWindow } from "./MockWindow";

export function ManagementMock() {
  return (
    <MockWindow>
      <div className="mb-[14px] grid grid-cols-3 gap-[10px]">
        {managementFeature.kpis.map((kpi) => (
          <div key={kpi.label} className="c-cell p-[13px]">
            <b className={`font-display block text-[18.5px] font-bold tracking-[-0.04em] ${textColor[kpi.color]}`}>
              {renderMoney(kpi.value)}
            </b>
            <span className="text-[11px] text-txt-2">{kpi.label}</span>
          </div>
        ))}
      </div>
      <div className="c-cell c-bars flex h-[112px] items-end gap-[9px] p-[14px]">
        {managementFeature.bars.map((height, i) => (
          <i key={i} style={{ height: `${height}%` }} />
        ))}
      </div>
    </MockWindow>
  );
}
