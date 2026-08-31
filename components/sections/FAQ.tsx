import { faq } from "@/data/content";
import { renderEmphasis } from "@/lib/emphasis";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="pb-0" id="asuult">
      <div className="wrap">
        <Reveal>
          <div className="c-band c-band--tl p-[clamp(34px,5vw,60px)]">
            <div className="relative mx-auto max-w-[880px]">
              <h2 className="font-display mb-[34px] text-center text-[clamp(24px,3.2vw,36px)] text-white">
                {renderEmphasis(faq.title, "not-italic text-[var(--grad-txt)]")}
              </h2>

              {faq.items.map((item) => (
                <details key={item.q} className="c-faq-item">
                  <summary>{item.q}</summary>
                  <p className="mb-[22px] max-w-[72ch] text-[15.5px] font-light text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
