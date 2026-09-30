import { PortableText } from "@portabletext/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { CtaBand } from "@/components/site-shell";
import { formatDate, getPost, urlFor } from "@/lib/sanity";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData?.seo?.metaTitle ?? `${loaderData?.title ?? "Article"} | South Hyderabad Properties` },
    { name: "description", content: loaderData?.seo?.metaDescription ?? loaderData?.excerpt ?? "Property insights from South Hyderabad Properties." },
    ...(loaderData?.seo?.focusKeyword ? [{ name: "keywords", content: loaderData.seo.focusKeyword }] : []),
    { property: "og:title", content: loaderData?.seo?.metaTitle ?? loaderData?.title ?? "Article" },
    { property: "og:description", content: loaderData?.seo?.metaDescription ?? loaderData?.excerpt ?? "Property insights from South Hyderabad." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    ...(loaderData?.mainImage ? [
      { property: "og:image", content: urlFor(loaderData.mainImage).width(1200).height(630).url() },
      { name: "twitter:image", content: urlFor(loaderData.mainImage).width(1200).height(630).url() },
    ] : []),
  ] }),
  notFoundComponent: () => (
    <div className="page-wrap py-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block font-bold text-primary">Back to blog</Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <>
      <article className="page-wrap max-w-3xl py-16 sm:py-24">
        <Link to="/blog" className="flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" /> All articles</Link>
        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">{post.category} {post.publishedAt && <span className="text-muted-foreground">· {formatDate(post.publishedAt)}</span>}</p>
        {post.author && <p className="mt-3 text-sm font-semibold text-muted-foreground">By {post.author}</p>}
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
        {post.mainImage && (
          <img className="mt-10 w-full rounded-xl" src={urlFor(post.mainImage).width(1400).auto("format").url()} alt={post.mainImage.alt ?? post.title} />
        )}
        <div className="mt-10 space-y-5 text-base leading-8 text-foreground/85 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic">
          {post.body && (
            <PortableText
              value={post.body as never}
              components={{ types: { image: ({ value }) => <img className="rounded-xl" src={urlFor(value).width(1200).auto("format").url()} alt="" /> } }}
            />
          )}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
