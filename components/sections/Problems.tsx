import { problems } from "@/data/content";
import { problemIcons } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { bgTint, strokeColor } from "@/lib/colors";

export function Problems() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <SectionHeading eyebrow={problems.eyebrow} title={problems.title} lede={problems.lede} center />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-[26px] min-[560px]:grid-cols-2 min-[900px]:grid-cols-4 min-[900px]:gap-[30px]">
            {problems.items.map((item) => {
              const Icon = problemIcons[item.icon];
              return (
                <div key={item.title}>
                  <div className={`mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border border-line ${bgTint[item.color]}`}>
                    <Icon className={`c-igrid-icon h-[21px] w-[21px] fill-none ${strokeColor[item.color]}`} />
                  </div>
                  <h3 className="font-display text-[17px] tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-[9px] text-[14.8px] leading-[1.55] text-txt-2">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
