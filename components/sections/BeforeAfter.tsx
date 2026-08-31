import { beforeAfter } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfter() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <SectionHeading eyebrow={beforeAfter.eyebrow} title={beforeAfter.title} />
        </Reveal>

        <Reveal>
          <div className="border-t border-line">
            {beforeAfter.rows.map((row) => (
              <div key={row.before} className="c-ba__r">
                <span className="c-ba__o">{row.before}</span>
                <span className="text-center font-mono-brand text-[13px] text-teal">→</span>
                <span className="text-[16px] font-semibold">{row.after}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
