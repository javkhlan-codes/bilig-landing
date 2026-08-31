import { modules } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Modules() {
  return (
    <section className="sec bg-s">
      <div className="wrap">
        <Reveal>
          <SectionHeading eyebrow={modules.eyebrow} title={modules.title} lede={modules.lede} center />
        </Reveal>

        <Reveal>
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 min-[640px]:grid-cols-2">
            {modules.items.map((item) => (
              <div key={item.title} className="c-scard p-[26px]">
                <h3 className="font-display text-[17.5px] tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-[9px] text-[14.8px] leading-[1.55] text-txt-2">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
