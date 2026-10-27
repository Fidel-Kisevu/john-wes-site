import { createFileRoute, Link } from "@tanstack/react-router";
import { useDesk } from "@/components/desk";
import { loadEditorArticles } from "@/lib/cms";

export const Route = createFileRoute("/admin/articles/")({
  component: ArticleList,
});

function ArticleList() {
  const state = useDesk("articles", () => loadEditorArticles());
  if (state.loading) return <p className="text-sm text-muted">Loading essays…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h1 className="display text-4xl">Essays</h1>
        <Link to="/admin/articles/$id" params={{ id: "new" }} className="inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper">
          New essay
        </Link>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {(state.data ?? []).map((article) => (
          <li key={article.id} className="flex items-baseline justify-between gap-4 py-3">
            <Link to="/admin/articles/$id" params={{ id: String(article.id) }} className="hover:text-oxblood">
              {article.title}
            </Link>
            <span className="text-sm text-muted">{article.status}{article.featured ? " · featured" : ""}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
