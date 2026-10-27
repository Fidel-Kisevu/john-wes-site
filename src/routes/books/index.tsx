import { createFileRoute } from "@tanstack/react-router";
import { BooksIndexView } from "@/components/shared/books/BooksIndexView";
import { SiteFrame } from "@/components/site";
import { loadBooks } from "@/lib/cms";

type BooksIndexData = Awaited<ReturnType<typeof loadBooks>>;

export const Route = createFileRoute("/books/")({
  loader: () => loadBooks(),
  head: () => ({
    meta: [
      { title: "Books · John Wes" },
      { name: "description", content: "Books and sample publications by John Wes." },
    ],
  }),
  component: BooksIndexRoute,
});

function BooksIndexRoute() {
  const books = Route.useLoaderData() as BooksIndexData;

  return (
    <SiteFrame>
      <BooksIndexView books={books} />
    </SiteFrame>
  );
}
