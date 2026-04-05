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
      className="group block rounded-4xl border border-slate-200/80 bg-white/90 p-6 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950/90 dark:hover:border-slate-700 dark:hover:bg-slate-900"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-xl font-semibold text-slate-950 transition group-hover:text-slate-900 dark:text-white dark:group-hover:text-slate-50">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Link>
  );
}
