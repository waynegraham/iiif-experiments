import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 border border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--surface)_/_0.72)] px-4 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
      <Link href="/experiments" className="transition hover:text-[rgb(var(--foreground))]">
        Experiments
      </Link>
      <Link href="/components" className="transition hover:text-[rgb(var(--foreground))]">
        Components
      </Link>
      <Link href="/writing" className="transition hover:text-[rgb(var(--foreground))]">
        Writing
      </Link>
      <Link href="/tags" className="transition hover:text-[rgb(var(--foreground))]">
        Tags
      </Link>
    </nav>
  );
}
