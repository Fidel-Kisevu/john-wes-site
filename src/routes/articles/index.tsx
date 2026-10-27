import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site";
import { ArticlesIndexView } from "@/components/shared/articles/ArticlesIndexView";
import { loadArticles } from "@/lib/cms";

type Search = { category: string };

type ArticlesIndexData = Awaited<ReturnType<typeof loadArticles>>;

export const Route = createFileRoute("/articles/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search.category === "string" ? search.category.slice(0, 80) : "",
  }),
  loaderDeps: ({ search }) => ({ category: search.category }),
  loader: ({ deps }) => loadArticles({ data: deps.category }),
  head: () => ({
    meta: [
      { title: "Essays · John Wes" },
      { name: "description", content: "Essays and theological reflections from John Wes." },
    ],
  }),
  component: ArticlesIndexRoute,
});

function ArticlesIndexRoute() {
  const { category } = Route.useSearch();
  const data = Route.useLoaderData() as ArticlesIndexData;

  return (
    <SiteFrame>
      <ArticlesIndexView category={category} articles={data.articles} categories={data.categories} />
    </SiteFrame>
  );
}
