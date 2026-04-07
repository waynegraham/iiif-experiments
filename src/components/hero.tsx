interface HeroProps {
  title: string;
  description: string;
  label?: string;
}

export function Hero({ title, description, label = "Editorial IIIF Lab" }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--hero))] px-6 py-16 text-[rgb(var(--hero-foreground))] sm:px-8 sm:py-20 lg:min-h-[78vh] lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgb(255_255_255_/_0.08),transparent_22rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_12_17_/_0.18),rgb(6_12_17_/_0.72))]" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_40%_38%,rgb(var(--accent)_/_0.18),transparent_24%),radial-gradient(circle_at_62%_56%,rgb(255_255_255_/_0.07),transparent_18%),linear-gradient(180deg,rgb(255_255_255_/_0.03),rgb(255_255_255_/_0))] lg:block" />
      <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.7fr)] lg:items-end">
        <div className="space-y-7">
          <p className="editorial-kicker text-[rgb(var(--accent))]">
            {label}
          </p>
          <h1 className="max-w-5xl font-display text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-[6.3rem]">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[rgb(248_245_240_/_0.76)] sm:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-5 pt-4 text-sm leading-7 text-[rgb(248_245_240_/_0.72)] lg:max-w-xs lg:justify-self-end">
          <p>
            Designed for prose-first IIIF experiments, component notes, and writing that values pacing, atmosphere, and margins as much as feature density.
          </p>
          <p className="editorial-kicker text-[rgb(var(--hero-foreground))]">
            Experiments / Components / Writing
          </p>
        </div>
      </div>
    </section>
  );
}
