"use client";

import { useState } from "react";
import { pricing } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlanCard } from "./pricing/PlanCard";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="sec bg-s" id="une">
      <div className="wrap">
        <Reveal>
          <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} lede={pricing.lede} center>
            <div className="c-toggle" role="group" aria-label="Төлбөрийн давтамж">
              <button aria-pressed={!yearly} onClick={() => setYearly(false)}>
                Сар бүр
              </button>
              <button aria-pressed={yearly} onClick={() => setYearly(true)}>
                Жилээр · 2 сар үнэгүй
              </button>
            </div>
          </SectionHeading>
        </Reveal>

        <Reveal>
          <div className="mt-[38px] grid grid-cols-1 items-start gap-[14px] min-[560px]:grid-cols-2 min-[980px]:grid-cols-4">
            {pricing.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} yearly={yearly} />
            ))}
          </div>
        </Reveal>

        <p className="mt-[22px] text-center text-[14.5px] text-txt-2">{pricing.note}</p>
      </div>
    </section>
  );
}
