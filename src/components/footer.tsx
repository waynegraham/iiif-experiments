import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--surface)_/_0.56)] py-10 text-sm text-[rgb(var(--muted))]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-2xl leading-none tracking-[-0.04em] text-[rgb(var(--foreground))]">
            Built for publishable IIIF narratives.
          </p>
          <p className="mt-3 leading-7">
            An editorial shell for experiments, components, and writing with room for motion, annotation, and careful typography.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.28em]">
          <Link href="/experiments" className="transition hover:text-[rgb(var(--foreground))]">
            Experiments
          </Link>
          <Link href="/components" className="transition hover:text-[rgb(var(--foreground))]">
            Components
          </Link>
          <Link href="/writing" className="transition hover:text-[rgb(var(--foreground))]">
            Writing
          </Link>
        </div>
      </div>
    </footer>
  );
}
