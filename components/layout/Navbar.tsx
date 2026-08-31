import Link from "next/link";
import { nav } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <nav className="c-nav">
      <div className="wrap flex h-[70px] items-center gap-7">
        <Link href="#top" className="font-display c-brand text-lg font-bold tracking-[-0.01em] no-underline">
          {nav.brand}
          <span>.</span>
        </Link>

        <div className="ml-auto hidden gap-[26px] text-[15px] min-[900px]:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="c-nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-[10px] min-[900px]:ml-[22px]">
          <ThemeToggle />
          <Button href="#ehleh" variant="sec" size="sm" className="hidden min-[560px]:inline-flex">
            Демо цаг авах
          </Button>
          <Button href="#ehleh" variant="pri" size="sm">
            Үнэгүй турших
          </Button>
        </div>
      </div>
    </nav>
  );
}
