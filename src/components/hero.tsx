interface HeroProps {
  title: string;
  description: string;
  label?: string;
}

export function Hero({ title, description, label = "Editorial IIIF Lab" }: HeroProps) {
  return (
    <section className="space-y-6 rounded-4xl border border-slate-200/80 bg-white/95 p-8 shadow-lg shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/95">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </section>
  );
}
