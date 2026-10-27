import { createFileRoute, Link } from "@tanstack/react-router";
import { useDesk } from "@/components/desk";
import { loadEditorBooks } from "@/lib/cms";

export const Route = createFileRoute("/admin/books/")({ component: BookList });

function BookList() {
  const state = useDesk("books", () => loadEditorBooks());
  if (state.loading) return <p className="text-sm text-muted">Loading books…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="display text-4xl">Books</h1>
        <Link to="/admin/books/$id" params={{ id: "new" }} className="inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper">
          New book
        </Link>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {(state.data ?? []).map((book) => (
          <li key={book.id} className="flex justify-between gap-4 py-3">
            <Link to="/admin/books/$id" params={{ id: String(book.id) }} className="hover:text-oxblood">{book.title}</Link>
            <span className="text-sm text-muted">{book.status}{book.featured ? " · featured" : ""}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
