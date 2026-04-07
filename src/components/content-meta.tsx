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
            className="bg-[rgb(var(--surface-strong))] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[rgb(var(--foreground))] transition hover:bg-[rgb(var(--surface-deep))] hover:text-[rgb(var(--accent))]"
          >
            {tag}
          </Link>
        ))}
      </span>
    </div>
  );
}
