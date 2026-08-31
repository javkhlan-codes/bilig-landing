import { cta } from "@/data/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arc } from "@/components/ui/Arc";
import { Reveal } from "@/components/ui/Reveal";
import { renderEmphasis } from "@/lib/emphasis";
import { ContactForm } from "./cta/ContactForm";

export function CTASection() {
  return (
    <section className="pb-[clamp(60px,7vw,96px)]" id="ehleh">
      <div className="wrap">
        <Reveal>
          <div className="c-cta-card relative z-[5] -mt-[70px] overflow-hidden p-[clamp(30px,4vw,48px)] min-[700px]:-mt-[50px]">
            <Arc variant="bl" opacity={0.3} style={{ bottom: -150, left: -100 }} />

            <div className="relative grid items-start gap-7 min-[840px]:grid-cols-[1fr_.85fr] min-[840px]:gap-[clamp(28px,4vw,54px)]">
              <div>
                <Eyebrow>{cta.eyebrow}</Eyebrow>
                <h2 className="font-display text-[clamp(24px,3vw,34px)] font-semibold leading-[1.12] tracking-[-0.028em]">
                  {renderEmphasis(cta.title)}
                </h2>
                <p className="mt-[18px] max-w-[56ch] text-[17px] font-light leading-[1.6] text-txt-2">{cta.lede}</p>
                <p className="mt-[22px] max-w-[56ch] font-mono-brand text-sm leading-[1.6] text-txt-2">
                  {cta.phone}
                  <br />
                  {cta.email}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
