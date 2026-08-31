import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Unbounded, Onest, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Mongolian copy needs the cyrillic subset alongside latin for every brand
// typeface; next/font subsets + self-hosts them at build time (no runtime
// request to fonts.googleapis.com).
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BILIG LMS — Сургалтын төвийн удирдлагын систем",
  description:
    "Хуваарь, ирц, төлбөр, эцэг эхийн харилцаа — сургалтын төвийн бүх ажил нэг системд. 14 хоног үнэгүй.",
};

/** Runs before hydration to stamp `data-theme` on `<html>` synchronously,
 * avoiding a flash of the wrong theme. Defaults to dark (the brand's
 * primary theme), same as the original static page. */
const themeInitScript = `(function(){try{var t=localStorage.getItem('bilig-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="mn"
      data-theme="dark"
      className={`${unbounded.variable} ${onest.variable} ${jetbrainsMono.variable}`}
      // `themeInitScript` below overwrites `data-theme` before hydration
      // (from localStorage) so it can differ from this server-rendered
      // default on purpose — that's the whole point of the script, not a
      // bug, so React shouldn't warn about it.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
