import { createFileRoute, notFound } from "@tanstack/react-router";
import { Missing } from "@/components/site";
import { MessageDetailView } from "@/components/shared/messages/MessageDetailView";
import { loadMessage } from "@/lib/cms";

type MessageRouteData = NonNullable<Awaited<ReturnType<typeof loadMessage>>>;

export const Route = createFileRoute("/messages/$slug")({
  loader: async ({ params }) => {
    const result = await loadMessage({ data: params.slug });
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.message.seoTitle || loaderData?.message.title || "Message"} · John Wes` },
      { name: "description", content: loaderData?.message.seoDescription || loaderData?.message.description || "" },
    ],
  }),
  notFoundComponent: () => <Missing title="This message is not public." body="It may still be a draft." />,
  component: MessageRoute,
});

function MessageRoute() {
  const data = Route.useLoaderData() as MessageRouteData;
  return <MessageDetailView message={data.message} related={data.related} />;
}
