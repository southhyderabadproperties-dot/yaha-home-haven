import { createFileRoute, Link, Outlet, useMatch } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import { CtaBand, PageIntro } from "@/components/site-shell";
import { formatDate, getPosts, urlFor } from "@/lib/sanity";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "South Hyderabad Property Insights | Blog" },
    { name: "description", content: "Market trends, investment guidance and regional development news for property buyers in South Hyderabad." },
    { property: "og:title", content: "South Hyderabad Property Insights" },
    { property: "og:description", content: "Clear perspectives on real estate growth across South Hyderabad." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  loader: () => getPosts(),
  component: BlogPage,
});

function BlogPage() {
  const child = useMatch({ from: "/blog/$slug", shouldThrow: false });
  if (child) return <Outlet />;
  const posts = Route.useLoaderData();
  return (
    <>
      <PageIntro eyebrow="Property journal" title="Ideas for making your next move clearer.">
        <p>Local updates, buyer guidance and practical perspectives from South Hyderabad's evolving property market.</p>
      </PageIntro>
      <section className="section-pad">
        <div className="page-wrap">
          {posts.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">New articles are coming soon.</p>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post._id}>
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
                    {post.mainImage && (
                      <div className="image-card aspect-[4/3]">
                        <img src={urlFor(post.mainImage).width(800).height(600).fit("crop").auto("format").url()} alt={post.mainImage.alt ?? post.title} loading="lazy" />
                      </div>
                    )}
                    <div className="pt-6">
                      <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                        <span>{post.category}</span>
                        {post.publishedAt && <span className="flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.publishedAt)}</span>}
                      </div>
                      <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight group-hover:text-primary">{post.title}</h2>
                      {post.excerpt && <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>}
                      <span className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">Read insight <ArrowUpRight className="h-4 w-4" /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
