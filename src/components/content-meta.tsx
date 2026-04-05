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
    <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--muted))]">
      <span>{formattedDate}</span>
      <span className="capitalize">{type}</span>
      <span className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="border border-[rgb(var(--border)_/_0.45)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent)_/_0.55)] hover:text-[rgb(var(--accent))]"
          >
            {tag}
          </Link>
        ))}
      </span>
    </div>
  );
}
