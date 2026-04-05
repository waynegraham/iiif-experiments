import { Card } from "@/components/card";
import { getAllContent } from "@/lib/content";

export const metadata = {
  title: "Components | IIIF Experiments",
};

export default function ComponentsPage() {
  const items = getAllContent("components");

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Components
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          Reusable building blocks and implementation notes.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Explore shared components that support editorial layouts, IIIF presentation, and interactive content.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card
            key={item.slug}
            title={item.title}
            description={item.description}
            href={`/components/${item.slug}`}
            eyebrow={item.type}
          />
        ))}
      </div>
    </div>
  );
}
