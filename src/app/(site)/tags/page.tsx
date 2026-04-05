import Link from "next/link";
import { getAllTags } from "@/lib/content";

export const metadata = {
  title: "Tags | IIIF Experiments",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Tags
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
          Discover by topic.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Browse the site by tag to find experiments, component notes, and essays that share common themes.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
