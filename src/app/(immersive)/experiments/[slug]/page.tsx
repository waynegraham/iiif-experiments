import { notFound } from "next/navigation";
import { ContentHeader } from "@/components/content-header";
import { ContentMeta } from "@/components/content-meta";
import { mdxComponents } from "@/components/mdx-components";
import { getAllContent, getContentBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllContent("experiments").map((item) => ({ slug: item.slug }));
}

export default async function ExperimentPage({ params }: { params: { slug: string } }) {
  try {
    const { frontMatter, Content } = await getContentBySlug("experiments", params.slug);

    return (
      <article className="mx-auto max-w-4xl space-y-10 text-slate-100">
        <div className="space-y-6 rounded-4xl border border-white/10 bg-slate-950/95 p-8 shadow-xl shadow-black/10">
          <ContentHeader title={frontMatter.title} description={frontMatter.description} eyebrow="Experiment" />
          <ContentMeta date={frontMatter.date} tags={frontMatter.tags} type={frontMatter.type} />
        </div>

        <div className="prose max-w-none text-slate-100 prose-a:text-cyan-300 prose-a:underline prose-blockquote:border-slate-700 prose-code:bg-slate-900 prose-code:text-slate-100 dark:prose-code:bg-slate-900">
          <Content components={mdxComponents} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
