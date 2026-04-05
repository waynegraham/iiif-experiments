import { Card } from "@/components/card";
import { getAllContent } from "@/lib/content";

export const metadata = {
  title: "Experiments | IIIF Experiments",
};

export default function ExperimentsPage() {
  const experiments = getAllContent("experiments");

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Experiments
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          Narrative work and interactive prototypes.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Browse the current experiments and open the pages to see how MDX content and React components can work together.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiments.map((item) => (
          <Card
            key={item.slug}
            title={item.title}
            description={item.description}
            href={`/experiments/${item.slug}`}
            eyebrow={item.type}
          />
        ))}
      </div>
    </div>
  );
}
