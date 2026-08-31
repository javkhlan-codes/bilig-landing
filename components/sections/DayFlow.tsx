import { dayFlow } from "@/data/content";
import { Arc } from "@/components/ui/Arc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function DayFlow() {
  return (
    <section className="sec relative overflow-hidden" id="odor">
      <Arc variant="tr" opacity={0.35} />
      <div className="wrap">
        <Reveal>
          <SectionHeading eyebrow={dayFlow.eyebrow} title={dayFlow.title} lede={dayFlow.lede} />
        </Reveal>

        <Reveal>
          <div>
            {dayFlow.items.map((item) => (
              <div key={item.time} className="c-day">
                <div className="c-day__t">{item.time}</div>
                <div className="c-day__c">
                  <h3 className="font-display text-[19px] tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-2 max-w-[62ch] text-[15.5px] font-light text-txt-2">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
