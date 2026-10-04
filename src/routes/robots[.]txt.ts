import { createFileRoute } from "@tanstack/react-router";

const bots = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "Applebot",
  "Twitterbot",
  "facebookexternalhit",
  "*",
];

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body =
          bots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n") +
          `\n\nSitemap: ${origin}/sitemap.xml\n`;
        return new Response(body, { headers: { "Content-Type": "text/plain" } });
      },
    },
  },
});
