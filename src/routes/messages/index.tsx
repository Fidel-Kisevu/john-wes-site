import { createFileRoute } from "@tanstack/react-router";
import { MessagesIndexView } from "@/components/shared/messages/MessagesIndexView";
import { SiteFrame } from "@/components/site";
import { loadMessages } from "@/lib/cms";

type Search = { series: string };
type MessagesIndexData = Awaited<ReturnType<typeof loadMessages>>;

export const Route = createFileRoute("/messages/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    series: typeof search.series === "string" ? search.series.slice(0, 80) : "",
  }),
  loaderDeps: ({ search }) => ({ series: search.series }),
  loader: ({ deps }) => loadMessages({ data: deps.series }),
  head: () => ({
    meta: [
      { title: "Messages · John Wes" },
      { name: "description", content: "Sermons and recorded teachings from John Wes." },
    ],
  }),
  component: MessagesIndexRoute,
});

function MessagesIndexRoute() {
  const { series } = Route.useSearch();
  const data = Route.useLoaderData() as MessagesIndexData;

  return (
    <SiteFrame>
      <MessagesIndexView series={series} data={data} />
    </SiteFrame>
  );
}
