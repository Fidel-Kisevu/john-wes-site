import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { readSitemap } = await import("@/lib/cms-core");
        const data = await readSitemap();
        const origin = new URL(request.url).origin;
        const paths = [
          "/",
          "/about",
          "/articles",
          "/books",
          "/messages",
          "/events",
          "/resources",
          "/contact",
          "/search",
          ...data.articles.map((slug) => `/articles/${slug}`),
          ...data.books.map((slug) => `/books/${slug}`),
          ...data.messages.map((slug) => `/messages/${slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
          .map((path) => `<url><loc>${origin}${path}</loc></url>`)
          .join("\n")}\n</urlset>\n`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
