import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-opacity">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between bg-[rgb(var(--surface)_/_0.8)] px-4 py-5 backdrop-blur-[14px] sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-[-0.04em] text-[rgb(var(--foreground))] transition hover:text-[rgb(var(--accent))] sm:text-3xl"
        >
          Curator&apos;s Folio
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
