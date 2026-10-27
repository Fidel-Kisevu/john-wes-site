import { createFileRoute } from "@tanstack/react-router";
import { ResourcesView } from "@/components/shared/resources/ResourcesView";
import { loadArticles, loadBooks, loadMessages } from "@/lib/cms";

type ResourceData = {
  essays: Awaited<ReturnType<typeof loadArticles>>["articles"];
  books: Awaited<ReturnType<typeof loadBooks>>;
  messages: Awaited<ReturnType<typeof loadMessages>>["messages"];
};

export const Route = createFileRoute("/resources")({
  loader: async () => {
    const articles = await loadArticles({ data: "" });
    const books = await loadBooks();
    const messages = await loadMessages({ data: "" });
    return {
      essays: articles.articles.slice(0, 4),
      books: books.slice(0, 3),
      messages: messages.messages.slice(0, 4),
    } satisfies ResourceData;
  },
  head: () => ({
    meta: [
      { title: "Resources · John Wes" },
      { name: "description", content: "A guided shelf of essays, books, and messages." },
    ],
  }),
  component: ResourcesRoute,
});

function ResourcesRoute() {
  const data = Route.useLoaderData() as ResourceData;
  return <ResourcesView data={data} />;
}
