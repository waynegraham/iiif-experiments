import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--surface-strong))] py-14 text-sm text-[rgb(var(--muted))]">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="font-display text-3xl leading-none tracking-[-0.05em] text-[rgb(var(--foreground))]">
            Built for publishable IIIF narratives.
          </p>
          <p className="mt-4 leading-8">
            An editorial shell for experiments, components, and writing with room for motion, annotation, and careful typography.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.32em]">
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
