export type ContentType = "experiments" | "components" | "writing";

export interface ContentFrontMatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  type: ContentType;
  featured?: boolean;
  immersive?: boolean;
}

export interface ContentItem extends ContentFrontMatter {
  excerpt?: string;
}
