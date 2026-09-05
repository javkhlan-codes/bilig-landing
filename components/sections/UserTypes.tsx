import { userTypes } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { bgColor } from "@/lib/colors";

export function UserTypes() {
  return (
    <section className="sec bg-s">
      <div className="wrap">
        <Reveal>
          <div className="grid items-center gap-[clamp(30px,5vw,64px)] min-[840px]:grid-cols-2">
            <SectionHeading
              eyebrow={userTypes.eyebrow}
              title={userTypes.title}
              lede={userTypes.lede}
              className="mb-0"
            />

            <div className="flex flex-wrap gap-[13px]">
              {userTypes.people.map((person) => (
                <div key={person.name} className="c-av">
                  <i className={`c-av__i ${bgColor[person.bg]}`}>{person.initial}</i>
                  <span className="text-[14.5px] font-medium">
                    {person.name}
                    <small className="block text-xs font-normal text-txt-2">{person.note}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
