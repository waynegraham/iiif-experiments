interface ContentHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function ContentHeader({ title, description, eyebrow }: ContentHeaderProps) {
  return (
    <header className="space-y-5 pb-10">
      {eyebrow ? (
        <p className="editorial-kicker text-[rgb(var(--accent))]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-9 text-[rgb(var(--muted))]">
        {description}
      </p>
    </header>
  );
}
