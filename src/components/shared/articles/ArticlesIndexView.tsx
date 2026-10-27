import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import { formatDay, type Article, type Category } from "@/lib/content-types";

export function ArticlesIndexView({
  category,
  articles,
  categories,
}: {
  category: string;
  articles: Article[];
  categories: Category[];
}) {
  return (
    <>
      <header className="mx-auto max-w-6xl px-5 pt-12 pb-6 md:pt-16">
        <p className="text-sm text-oxblood">Writing</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Essays</h1>
        <p className="mt-4 max-w-2xl">Reflections on Scripture, the church, prayer, and the Christian week.</p>
        <div className="mt-6 flex flex-wrap gap-2" role="list">
          <Link
            to="/articles"
            search={{ category: "" }}
            className={category ? "border border-line px-3 py-2 text-sm" : "border border-oxblood px-3 py-2 text-sm text-oxblood"}
            aria-current={category ? undefined : "page"}
          >
            All
          </Link>
          {categories.map((item) => (
            <Link
              key={item.id}
              to="/articles"
              search={{ category: item.slug }}
              className={category === item.slug ? "border border-oxblood px-3 py-2 text-sm text-oxblood" : "border border-line px-3 py-2 text-sm"}
              aria-current={category === item.slug ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </header>
      {articles.length === 0 ? (
        <p className="mx-auto max-w-6xl px-5 py-16 text-muted">Nothing published in this category yet.</p>
      ) : (
        <ul className="mx-auto max-w-6xl px-5 pb-16">
          {articles.map((article, index) => (
            <li key={article.id} className="grid items-center gap-6 border-t border-line py-8 md:grid-cols-12">
              <div className={index === 0 ? "md:col-span-5" : "hidden md:col-span-3 md:block"}>
                <Photo src={article.heroImage} alt={article.heroAlt || ""} ratio={index === 0 ? "photo" : "photo"} />
              </div>
              <div className={index === 0 ? "md:col-span-7" : "md:col-span-9"}>
                <p className="text-sm text-muted">
                  {article.categoryName}
                  {article.publishedAt ? ` · ${formatDay(article.publishedAt)}` : ""}
                </p>
                <h2 className="display mt-2 text-3xl">
                  <Link to="/articles/$slug" params={{ slug: article.slug }} className="hover:text-oxblood">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl">{article.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
