import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-[34px] text-sm text-txt-2">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <span>{footer.copyright}</span>
        <span>
          {footer.links.map((link, i) => (
            <span key={link.href}>
              <a href={link.href} className="text-txt-2 no-underline hover:text-teal">
                {link.label}
              </a>
              {i < footer.links.length - 1 ? " · " : ""}
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
