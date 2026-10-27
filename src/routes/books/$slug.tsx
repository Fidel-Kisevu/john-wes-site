import { createFileRoute, notFound } from "@tanstack/react-router";
import { Missing } from "@/components/site";
import { BookDetailView } from "@/components/shared/books/BookDetailView";
import { loadBook } from "@/lib/cms";

type BookRouteData = NonNullable<Awaited<ReturnType<typeof loadBook>>>;

export const Route = createFileRoute("/books/$slug")({
  loader: async ({ params }) => {
    const result = await loadBook({ data: params.slug });
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.book.seoTitle || loaderData?.book.title || "Book"} · John Wes` },
      { name: "description", content: loaderData?.book.seoDescription || loaderData?.book.subtitle || "" },
    ],
  }),
  notFoundComponent: () => <Missing title="This book is not public." body="It may still be a draft." />,
  component: BookRoute,
});

function BookRoute() {
  const data = Route.useLoaderData() as BookRouteData;
  return <BookDetailView book={data.book} related={data.related} />;
}
