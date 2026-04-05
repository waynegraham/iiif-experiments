import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { getFeaturedContent } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedContent();

  return (
    <div className="space-y-14">
      <Hero
        title="IIIF experiments built for editorial storytelling."
        description="A publication-first system for narrative experiments, reusable components, and concise writing about IIIF and media-rich workflows."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <Card
            key={`${item.type}-${item.slug}`}
            title={item.title}
            description={item.description}
            href={`/${item.type}/${item.slug}`}
            eyebrow={item.type}
          />
        ))}
      </section>

      <section className="rounded-4xl border border-slate-200/80 bg-white/95 p-8 dark:border-slate-800/80 dark:bg-slate-950/95">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">How the site is organized</h2>
        <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Experiments are narrative pages with interactive examples. Components provide reusable primitives with implementation notes. Writing is a place for essays, case studies, and focused observations.
          </p>
          <p>
            Every page is authored as MDX, supports React components inside content, and is rendered statically so the experience works without JavaScript.
          </p>
        </div>
      </section>
    </div>
  );
}
