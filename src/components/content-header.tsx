interface ContentHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function ContentHeader({ title, description, eyebrow }: ContentHeaderProps) {
  return (
    <header className="space-y-3 pb-6">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </header>
  );
}
