/**
 * Brand color name -> static Tailwind class lookup.
 *
 * Tailwind's scanner needs literal class strings somewhere in the source;
 * it can't resolve `text-${color}` at runtime. Keeping the lookup tables
 * here (rather than re-declaring them in every component) is what lets the
 * rest of the codebase stay data-driven.
 *
 * The BILIG kit defines exactly three brand colors (blue/purple/orange);
 * `danger` isn't one of them — it's the semantic red used only for actual
 * alert states (a double-booked class, an overdue payment), kept apart so
 * those states stay legible against the brand hues instead of blending in.
 * Content with more than three items in a list (the problem-tile grid, the
 * pricing plans, the five user-type avatars, …) just cycles blue/purple/
 * orange rather than inventing a fourth "brand" color.
 */
export type BrandColor = "blue" | "purple" | "orange" | "danger";

export const textColor: Record<BrandColor, string> = {
  blue: "text-blue",
  purple: "text-purple",
  orange: "text-orange",
  danger: "text-danger",
};

export const bgColor: Record<BrandColor, string> = {
  blue: "bg-blue",
  purple: "bg-purple",
  orange: "bg-orange",
  danger: "bg-danger",
};

export const bgTint: Record<BrandColor, string> = {
  blue: "bg-blue/12",
  purple: "bg-purple/12",
  orange: "bg-orange/12",
  danger: "bg-danger/12",
};

export const strokeColor: Record<BrandColor, string> = {
  blue: "stroke-blue",
  purple: "stroke-purple",
  orange: "stroke-orange",
  danger: "stroke-danger",
};

export const dotColor: Record<BrandColor, string> = {
  blue: "bg-blue",
  purple: "bg-purple",
  orange: "bg-orange",
  danger: "bg-danger",
};
