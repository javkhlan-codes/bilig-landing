import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Golos_Text, Onest, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Unbounded (the previous display face) draws lowercase "ө" at a fraction
// of the correct x-height in Cyrillic — a real glyph-design bug, easy to
// miss in Latin-only testing but glaring in Mongolian, where "ө" is one of
// the most common letters. Golos Text is built with the Cyrillic script as
// a first-class citizen (not a bolted-on subset) and has no such issue —
// verified directly against Onest/JetBrains Mono, which were already fine.
const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
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

const themeInitScript = `(function(){try{var t=localStorage.getItem('bilig-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="mn"
      data-theme="dark"
      className={`${golosText.variable} ${onest.variable} ${jetbrainsMono.variable}`}
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
