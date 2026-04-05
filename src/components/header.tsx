import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-background/90 py-6 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950 transition hover:text-slate-900 dark:text-white dark:hover:text-slate-100">
            IIIF Experiments
          </Link>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Publication-first experiments, reusable UI, and editorial writing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
