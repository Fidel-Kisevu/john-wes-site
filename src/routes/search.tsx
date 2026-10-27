import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SearchView } from "@/components/shared/search/SearchView";
import { loadSearch } from "@/lib/cms";

type Search = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    q: typeof search.q === "string" ? search.q.slice(0, 120) : "",
  }),
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: async ({ deps }) => {
    try {
      return { hits: await loadSearch({ data: deps.q }), error: "" };
    } catch {
      return { hits: [], error: "Search is unavailable just now." };
    }
  },
  head: () => ({
    meta: [
      { title: "Search · John Wes" },
      { name: "description", content: "Search published essays, books, and messages." },
    ],
  }),
  component: SearchRoute,
});

function SearchRoute() {
  const { q } = Route.useSearch();
  const { hits, error } = Route.useLoaderData();
  const navigate = useNavigate();
  const [value, setValue] = useState(q);

  return (
    <SearchView
      q={q}
      hits={hits}
      error={error}
      value={value}
      onValueChange={setValue}
      onSubmit={() => {
        void navigate({ to: "/search", search: { q: value } });
      }}
    />
  );
}
