import { createFileRoute, notFound } from "@tanstack/react-router";
import { Missing } from "@/components/site";
import { ArticleDetailView } from "@/components/shared/articles/ArticleDetailView";
import { loadArticle } from "@/lib/cms";

type ArticleRouteData = NonNullable<Awaited<ReturnType<typeof loadArticle>>>;

export const Route = createFileRoute("/articles/$slug")({
  loader: async ({ params }) => {
    const result = await loadArticle({ data: params.slug });
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.seoTitle || loaderData?.article.title || "Essay"} · John Wes` },
      { name: "description", content: loaderData?.article.seoDescription || loaderData?.article.excerpt || "" },
    ],
  }),
  notFoundComponent: () => (
    <Missing title="This essay is not public." body="It may be a draft, or the address may have changed." />
  ),
  component: ArticleRoute,
});

function ArticleRoute() {
  const data = Route.useLoaderData() as ArticleRouteData;
  return <ArticleDetailView article={data.article} related={data.related} />;
}
