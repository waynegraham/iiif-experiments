interface HeroProps {
  title: string;
  description: string;
  label?: string;
}

export function Hero({ title, description, label = "Editorial IIIF Lab" }: HeroProps) {
  return (
    <section className="relative overflow-hidden border border-[rgb(var(--border)_/_0.45)] bg-[linear-gradient(135deg,rgb(var(--surface)),rgb(var(--background))_58%,rgb(var(--surface-strong)))] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top_right,rgb(var(--accent)_/_0.18),transparent_58%)] lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.8fr)] lg:items-end">
        <div className="space-y-6">
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-[rgb(var(--muted))]">
            {label}
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-4 border-t border-[rgb(var(--border)_/_0.45)] pt-6 text-sm leading-7 text-[rgb(var(--muted))] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p>
            Designed for prose-first IIIF experiments, component notes, and writing that values pacing, margins, and atmosphere.
          </p>
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[rgb(var(--foreground))]">
            Experiments / Components / Writing
          </p>
        </div>
      </div>
    </section>
  );
}
