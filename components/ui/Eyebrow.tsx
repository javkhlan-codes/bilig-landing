export function Eyebrow({ children }: { children: string }) {
  if (!children) return null;
  return <span className="c-eyebrow">{children}</span>;
}
