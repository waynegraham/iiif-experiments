import Link from "next/link";

export function Navigation() {
  return (
    <nav className="hidden items-center gap-10 md:flex">
      <Link
        href="/"
        className="border-b border-[rgb(var(--foreground))] pb-1 font-display text-[0.78rem] uppercase tracking-[0.3em] text-[rgb(var(--foreground))]"
      >
        Home
      </Link>
      <Link
        href="/experiments"
        className="font-display text-[0.78rem] uppercase tracking-[0.3em] text-[rgb(var(--foreground)_/_0.62)] transition hover:text-[rgb(var(--accent))]"
      >
        Collection
      </Link>
      <Link
        href="/writing"
        className="font-display text-[0.78rem] uppercase tracking-[0.3em] text-[rgb(var(--foreground)_/_0.62)] transition hover:text-[rgb(var(--accent))]"
      >
        About
      </Link>
    </nav>
  );
}
