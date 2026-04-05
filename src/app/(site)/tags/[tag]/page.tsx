import { notFound } from "next/navigation";
import { Card } from "@/components/card";
import { getAllContent, getAllTags } from "@/lib/content";

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  const allContent = [
    ...getAllContent("experiments"),
    ...getAllContent("components"),
    ...getAllContent("writing"),
  ];
  const items = allContent.filter((item) => item.tags.includes(tag));

  if (!items.length) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Tag
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          {tag}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Content tagged with “{tag}” across experiments, component documentation, and writing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card
            key={`${item.type}-${item.slug}`}
            title={item.title}
            description={item.description}
            href={`/${item.type}/${item.slug}`}
            eyebrow={item.type}
          />
        ))}
      </div>
    </div>
  );
}
