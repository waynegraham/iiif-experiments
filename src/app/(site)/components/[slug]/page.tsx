import { notFound } from "next/navigation";
import { ContentHeader } from "@/components/content-header";
import { ContentMeta } from "@/components/content-meta";
import { mdxComponents } from "@/components/mdx-components";
import { getAllContent, getContentBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllContent("components").map((item) => ({ slug: item.slug }));
}

export default async function ComponentPage({ params }: { params: { slug: string } }) {
  try {
    const { frontMatter, Content } = await getContentBySlug("components", params.slug);

    return (
      <article className="mx-auto max-w-4xl space-y-10">
        <ContentHeader title={frontMatter.title} description={frontMatter.description} eyebrow="Component" />
        <ContentMeta date={frontMatter.date} tags={frontMatter.tags} type={frontMatter.type} />
        <div className="prose max-w-none text-slate-700 dark:text-slate-200">
          <Content components={mdxComponents} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
