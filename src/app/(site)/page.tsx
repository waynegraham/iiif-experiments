import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { getFeaturedContent } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedContent();
  const sections = [
    {
      title: "Experiments",
      description:
        "Narrative IIIF pages where media, sequence, and interaction support reading rather than compete with it.",
    },
    {
      title: "Components",
      description:
        "Reusable primitives documented with enough restraint to feel like a public reference, not a demo dump.",
    },
    {
      title: "Writing",
      description:
        "Essays, notes, and implementation snippets that keep the editorial voice intact while staying practical.",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20">
      <Hero
        title="IIIF experiments shaped like an exhibition program."
        description="A publication-first system for narrative experiments, reusable components, and writing about media-rich workflows with the pacing, hierarchy, and atmosphere of museum and gallery websites."
      />

      <section className="grid gap-4 border-y border-[rgb(var(--border)_/_0.45)] py-8 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="grid gap-3 py-2 lg:border-l lg:border-[rgb(var(--border)_/_0.45)] lg:px-6 lg:py-0 first:lg:border-l-0"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[rgb(var(--muted))]">
              0{index + 1}
            </p>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-[rgb(var(--foreground))]">
              {section.title}
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[rgb(var(--muted))]">
              {section.description}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 border-b border-[rgb(var(--border)_/_0.45)] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[rgb(var(--muted))]">
              Featured Selection
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.05em] text-[rgb(var(--foreground))]">
              Current entries
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[rgb(var(--muted))]">
            Featured items carry the public voice of the site first: cinematic when needed, restrained when not, and always readable without extra effects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item) => (
            <Card
              key={`${item.type}-${item.slug}`}
              title={item.title}
              description={item.description}
              href={`/${item.type}/${item.slug}`}
              eyebrow={item.type}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-8 border border-[rgb(var(--border)_/_0.45)] bg-[rgb(var(--surface)_/_0.68)] px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:px-10">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[rgb(var(--muted))]">
            Editorial Structure
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-5xl">
            A shell designed to frame narrative work, not distract from it.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))]">
          <p>
            Experiments remain prose-first and can still host interactive sequences, maps, viewers, or immersive breakouts when the story demands it.
          </p>
          <p>
            Components stay reusable and documented. Writing stays concise, legible, and publication-ready. The theme gives all three a shared institutional tone without flattening them into one template.
          </p>
        </div>
      </section>
    </div>
  );
}
