"use client";

import { useState, type FormEvent } from "react";
import { cta } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to the real lead-capture endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h3 className="text-[20px]">{cta.successTitle}</h3>
        <p className="mt-[10px] text-[15px] text-txt-2">{cta.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {cta.fields.map((field) => (
        <div key={field.id} className="c-field mb-[14px]">
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            name={field.id}
            type={field.type === "numeric" ? "text" : field.type}
            inputMode={field.type === "numeric" ? "numeric" : undefined}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      <Button type="submit" variant="pri" className="mt-1.5 w-full">
        {cta.submit}
      </Button>
      <p className="mt-3 text-[12.5px] leading-[1.5] text-txt-3">{cta.fine}</p>
    </form>
  );
}
