import { createFileRoute } from "@tanstack/react-router";

import { getPosts } from "@/lib/sanity";
import { projectPages, staticPages } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const posts = await getPosts();
        const urls: { loc: string; lastmod?: string }[] = [
          ...staticPages.map((p) => ({ loc: p })),
          ...projectPages.map((p) => ({ loc: p.path })),
          ...posts.map((p) => ({ loc: `/blog/${p.slug}`, lastmod: p.publishedAt })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${origin}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod.slice(0, 10)}</lastmod>` : ""}</url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
