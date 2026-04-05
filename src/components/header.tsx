import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--background)_/_0.84)] py-5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[rgb(var(--muted))]">
            Museum Notes / IIIF
          </p>
          <Link href="/" className="mt-2 inline-block font-display text-3xl leading-none tracking-[-0.04em] text-[rgb(var(--foreground))] transition hover:text-[rgb(var(--accent))] sm:text-4xl">
            IIIF Experiments
          </Link>
          <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
            Publication-first experiments, reusable UI, and editorial writing shaped like an exhibition program rather than a product surface.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:justify-end">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
