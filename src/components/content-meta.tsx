import Link from "next/link";

interface ContentMetaProps {
  date: string;
  tags: string[];
  type: string;
}

export function ContentMeta({ date, tags, type }: ContentMetaProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
      <span>{formattedDate}</span>
      <span className="capitalize">{type}</span>
      <span className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700/80 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            {tag}
          </Link>
        ))}
      </span>
    </div>
  );
}
