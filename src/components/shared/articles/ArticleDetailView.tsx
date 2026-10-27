import { Link } from "@tanstack/react-router";
import { ShareRow } from "@/components/engage";
import { Markdown } from "@/components/markdown";
import { Photo, SiteFrame } from "@/components/site";
import { formatDay, readingMinutes, type Article } from "@/lib/content-types";

export function ArticleDetailView({ article, related }: { article: Article; related: Article[] }) {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm text-oxblood">
          <Link to="/articles" search={{ category: article.categorySlug }} className="hover:underline">
            {article.categoryName || "Essay"}
          </Link>
        </p>
        <h1 className="display mt-3 max-w-3xl text-4xl md:text-6xl">{article.title}</h1>
        <p className="mt-5 max-w-2xl text-lg">{article.excerpt}</p>
        <p className="mt-4 text-sm text-muted">
          {article.authorName}
          {article.publishedAt ? ` · ${formatDay(article.publishedAt)}` : ""} · {readingMinutes(article.body)} minute read
        </p>
        <div className="mt-8 max-w-3xl">
          <Photo src={article.heroImage} alt={article.heroAlt || ""} ratio="wide" priority />
        </div>
        <div className="mt-10 max-w-2xl text-lg">
          <Markdown source={article.body} />
        </div>
        <div className="mt-10 max-w-2xl border-t border-line pt-6">
          <ShareRow title={article.title} />
        </div>
      </article>
      {related.length > 0 ? (
        <aside className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="display text-2xl">Continue reading</h2>
            <ul className="mt-4 divide-y divide-line">
              {related.map((item) => (
                <li key={item.id} className="py-4">
                  <Link to="/articles/$slug" params={{ slug: item.slug }} className="display text-xl hover:text-oxblood">
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted">{item.categoryName}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt || undefined,
            author: { "@type": "Person", name: article.authorName },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </SiteFrame>
  );
}
