interface ContentHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function ContentHeader({ title, description, eyebrow }: ContentHeaderProps) {
  return (
    <header className="space-y-4 border-b border-[rgb(var(--border)_/_0.45)] pb-8">
      {eyebrow ? (
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[rgb(var(--muted))]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-8 text-[rgb(var(--muted))]">
        {description}
      </p>
    </header>
  );
}
