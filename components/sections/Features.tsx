import { managementFeature, financeFeature, parentFeature } from "@/data/content";
import { Arc } from "@/components/ui/Arc";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureRow } from "./features/FeatureRow";
import { ManagementMock } from "./features/ManagementMock";
import { FinanceMock } from "./features/FinanceMock";
import { ParentMock } from "./features/ParentMock";

export function Features() {
  return (
    <section className="sec bg-s relative overflow-hidden" id="boloms">
      <Arc variant="bl" />
      <div className="wrap flex flex-col gap-[clamp(56px,7vw,96px)]">
        <Reveal>
          <FeatureRow
            eyebrow={managementFeature.eyebrow}
            title={managementFeature.title}
            body={managementFeature.body}
            ticks={managementFeature.ticks}
            visual={<ManagementMock />}
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            eyebrow={financeFeature.eyebrow}
            title={financeFeature.title}
            body={financeFeature.body}
            ticks={financeFeature.ticks}
            visual={<FinanceMock />}
            reverse
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            eyebrow={parentFeature.eyebrow}
            title={parentFeature.title}
            body={parentFeature.body}
            ticks={parentFeature.ticks}
            visual={<ParentMock />}
          />
        </Reveal>
      </div>
    </section>
  );
}
