import fs from "fs";
import path from "path";
import type { ContentItem, ContentType } from "./types";

const contentRoot = path.join(process.cwd(), "content");

function parseYamlValue(value: string): string | boolean | string[] {
  if (value === "true") return true;
  if (value === "false") return false;

  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean);
  }

  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseFrontMatter(source: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
  const raw = match?.[1];
  const content = match ? source.slice(match[0].length) : source;

  const data = raw
    ? raw.split(/\r?\n/).reduce<Record<string, unknown>>((acc, line) => {
        const [key, value] = line.split(/:(.+)/);
        if (!key || typeof value === "undefined") {
          return acc;
        }

        acc[key.trim()] = parseYamlValue(value.trim());
        return acc;
      }, {})
    : {};

  return { data, content };
}

function normalizeTags(rawTags: unknown): string[] {
  if (Array.isArray(rawTags)) {
    return rawTags.filter(Boolean).map(String);
  }

  if (typeof rawTags === "string") {
    return rawTags.split(",").map((tag) => tag.trim()).filter(Boolean);
  }

  return [];
}

function buildContentItem(type: ContentType, slug: string, data: Record<string, unknown>): ContentItem {
  return {
    type,
    slug,
    title: String(data.title || slug),
    description: String(data.description || ""),
    date: String(data.date || ""),
    tags: normalizeTags(data.tags),
    featured: Boolean(data.featured),
    immersive: Boolean(data.immersive),
  };
}

export function getAllContent(type: ContentType): ContentItem[] {
  const folder = path.join(contentRoot, type);
  const files = fs.existsSync(folder)
    ? fs.readdirSync(folder).filter((file) => file.endsWith(".mdx"))
    : [];

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(folder, file), "utf8");
      const { data } = parseFrontMatter(source);
      return buildContentItem(type, slug, data);
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export async function getContentBySlug(type: ContentType, slug: string) {
  const sourcePath = path.join(contentRoot, type, `${slug}.mdx`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Content not found: ${type}/${slug}`);
  }

  const source = fs.readFileSync(sourcePath, "utf8");
  const { data } = parseFrontMatter(source);
  const module = await import(`../../content/${type}/${slug}.mdx`);

  return {
    frontMatter: buildContentItem(type, slug, data),
    Content: module.default,
  };
}

export function getFeaturedContent(): ContentItem[] {
  return ["experiments", "components", "writing"].flatMap((type) =>
    getAllContent(type as ContentType).filter((item) => item.featured),
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  ["experiments", "components", "writing"].forEach((type) => {
    getAllContent(type as ContentType).forEach((item) => {
      item.tags.forEach((tag) => tags.add(tag));
    });
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
