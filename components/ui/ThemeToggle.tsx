"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

/** Toggles `data-theme` on `<html>` and persists the choice. Both icons are
 * always rendered; which one is visible is decided purely by CSS attribute
 * selectors keyed off `data-theme` (see `.c-theme-toggle` in globals.css) —
 * that avoids needing React state (and its hydration mismatch / lint
 * pitfalls) just to mirror DOM state that a client script already owns.
 * The initial `data-theme` itself is stamped pre-hydration by the inline
 * script in `app/layout.tsx`. */
export function ThemeToggle() {
  function toggle() {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    window.localStorage.setItem("bilig-theme", next);
  }

  return (
    <button className="c-theme-toggle" onClick={toggle} aria-label="Гэрэл / харанхуй горим">
      <SunIcon className="c-theme-toggle__icon c-theme-toggle__icon--sun h-[17px] w-[17px] stroke-current stroke-[1.8]" fill="none" />
      <MoonIcon className="c-theme-toggle__icon c-theme-toggle__icon--moon h-[17px] w-[17px] stroke-current stroke-[1.8]" fill="none" />
    </button>
  );
}
