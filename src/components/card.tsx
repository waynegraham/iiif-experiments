import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
}

export function Card({ title, description, href, eyebrow }: CardProps) {
  return (
    <Link
      href={href}
      className="group block h-full border border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--surface)_/_0.74)] p-6 transition hover:-translate-y-1 hover:border-[rgb(var(--accent)_/_0.55)] hover:bg-[rgb(var(--surface))]"
    >
      {eyebrow ? (
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[rgb(var(--muted))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-[rgb(var(--foreground))] transition group-hover:text-[rgb(var(--accent))]">
        {title}
      </h2>
      <p className="mt-4 max-w-md text-sm leading-7 text-[rgb(var(--muted))]">
        {description}
      </p>
      <p className="mt-8 text-[0.68rem] uppercase tracking-[0.3em] text-[rgb(var(--foreground))]">
        View Entry
      </p>
    </Link>
  );
}
