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
    <div className="space-y-24 lg:space-y-32">
      <Hero
        title="The modern gallery framework for IIIF experiments."
        description="A publication-first system for narrative experiments, reusable components, and writing about media-rich workflows with the pacing, hierarchy, and atmosphere of a quiet institutional site."
        label="Vol. I / Digital Presentation"
      />

      <section className="flex flex-col gap-5 bg-[rgb(var(--surface))] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex flex-wrap gap-4">
          <a
            href="#featured-selection"
            className="bg-[rgb(var(--foreground))] px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-[rgb(var(--surface))] transition hover:bg-[rgb(var(--accent))]"
          >
            Explore Archive
          </a>
          <a
            href="/writing"
            className="border-b border-[rgb(var(--foreground)_/_0.2)] px-1 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
          >
            Read Writing
          </a>
        </div>
        <p className="max-w-2xl text-sm leading-8 text-[rgb(var(--muted))]">
          The shell is designed to preserve the artifact-first tone of IIIF work while staying usable without motion-heavy behavior.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 text-center sm:px-0">
        <p className="editorial-kicker text-[rgb(var(--accent))]">Introduction</p>
        <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-6xl">
          Digital artifacts deserve the same reverence as their physical counterparts.
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-9 text-[rgb(var(--muted))] sm:text-lg">
          The interface should feel like a silent curator. It should clarify sequence, provenance, and scale without crowding the object or flattening the reading experience into generic product UI.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:items-start">
        <div className="space-y-5 lg:sticky lg:top-32">
          <p className="editorial-kicker text-[rgb(var(--accent))]">Collections</p>
          <h2 className="max-w-sm font-display text-4xl leading-[0.98] tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-5xl">
            Exhibition highlights across the publication.
          </h2>
          <p className="max-w-md text-sm leading-8 text-[rgb(var(--muted))]">
            Experiments lead the system, while components and writing stay close at hand as supporting rooms in the same exhibition.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => (
            <div key={section.title} className="bg-[rgb(var(--surface-strong))] px-6 py-8">
              <p className="editorial-kicker text-[rgb(var(--accent))]">0{index + 1}</p>
              <h3 className="mt-5 font-display text-3xl tracking-[-0.04em] text-[rgb(var(--foreground))]">
                {section.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-8 text-[rgb(var(--muted))]">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="featured-selection" className="space-y-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-end">
          <div>
            <p className="editorial-kicker text-[rgb(var(--accent))]">
              Featured Selection
            </p>
            <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.05em] text-[rgb(var(--foreground))] sm:text-5xl">
              Current entries
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-[rgb(var(--muted))]">
            Featured items carry the public voice of the site first: cinematic when needed, restrained when not, and always readable without theatrical interface behavior.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="bg-[rgb(var(--foreground))] px-6 py-14 text-[rgb(var(--surface))] sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          <p className="font-display text-2xl italic text-[rgb(var(--accent))]">
            Stay informed on new acquisitions.
          </p>
          <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.05em] sm:text-6xl">
            Join the Curator&apos;s Registry.
          </h2>
          <div className="mx-auto mt-4 flex w-full max-w-xl items-end gap-4 border-b border-[rgb(255_255_255_/_0.22)] pb-3">
            <span className="text-[0.72rem] uppercase tracking-[0.34em] text-[rgb(255_255_255_/_0.42)]">
              Enter your email
            </span>
            <span className="ml-auto text-[0.72rem] uppercase tracking-[0.34em] text-[rgb(var(--accent))]">
              Submit
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
