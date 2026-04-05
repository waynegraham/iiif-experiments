import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-background/90 py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed for publishable IIIF narratives, component reference, and thoughtful writing.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/experiments" className="transition hover:text-slate-900 dark:hover:text-white">
            Experiments
          </Link>
          <Link href="/components" className="transition hover:text-slate-900 dark:hover:text-white">
            Components
          </Link>
          <Link href="/writing" className="transition hover:text-slate-900 dark:hover:text-white">
            Writing
          </Link>
        </div>
      </div>
    </footer>
  );
}
