/**
 * Brand color name -> static Tailwind class lookup.
 *
 * Tailwind's scanner needs literal class strings somewhere in the source;
 * it can't resolve `text-${color}` at runtime. Keeping the lookup tables
 * here (rather than re-declaring them in every component) is what lets the
 * rest of the codebase stay data-driven.
 */
export type BrandColor = "teal" | "indigo" | "violet" | "amber" | "rose";

export const textColor: Record<BrandColor, string> = {
  teal: "text-teal",
  indigo: "text-indigo",
  violet: "text-violet",
  amber: "text-amber",
  rose: "text-rose",
};

export const bgColor: Record<BrandColor, string> = {
  teal: "bg-teal",
  indigo: "bg-indigo",
  violet: "bg-violet",
  amber: "bg-amber",
  rose: "bg-rose",
};

export const bgTint: Record<BrandColor, string> = {
  teal: "bg-teal/12",
  indigo: "bg-indigo/12",
  violet: "bg-violet/12",
  amber: "bg-amber/12",
  rose: "bg-rose/12",
};

export const strokeColor: Record<BrandColor, string> = {
  teal: "stroke-teal",
  indigo: "stroke-indigo",
  violet: "stroke-violet",
  amber: "stroke-amber",
  rose: "stroke-rose",
};

export const dotColor: Record<BrandColor, string> = {
  teal: "bg-teal",
  indigo: "bg-indigo",
  violet: "bg-violet",
  amber: "bg-amber",
  rose: "bg-rose",
};
