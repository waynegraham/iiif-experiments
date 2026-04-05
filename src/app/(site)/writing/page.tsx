import { Card } from "@/components/card";
import { getAllContent } from "@/lib/content";

export const metadata = {
  title: "Writing | IIIF Experiments",
};

export default function WritingPage() {
  const items = getAllContent("writing");

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Writing
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          Essays, notes, and focused thinking.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Read short-form writing that reflects on IIIF, publishing, and the design of rich media narratives.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card
            key={item.slug}
            title={item.title}
            description={item.description}
            href={`/writing/${item.slug}`}
            eyebrow={item.type}
          />
        ))}
      </div>
    </div>
  );
}
