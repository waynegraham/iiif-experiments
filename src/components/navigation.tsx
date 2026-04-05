import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
      <Link href="/experiments" className="transition hover:text-slate-900 dark:hover:text-white">
        Experiments
      </Link>
      <Link href="/components" className="transition hover:text-slate-900 dark:hover:text-white">
        Components
      </Link>
      <Link href="/writing" className="transition hover:text-slate-900 dark:hover:text-white">
        Writing
      </Link>
      <Link href="/tags" className="transition hover:text-slate-900 dark:hover:text-white">
        Tags
      </Link>
    </nav>
  );
}
