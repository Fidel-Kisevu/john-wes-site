import { createFileRoute } from "@tanstack/react-router";
import { EventsView } from "@/components/shared/events/EventsView";
import { loadEvents } from "@/lib/cms";

type EventsData = Awaited<ReturnType<typeof loadEvents>>;

export const Route = createFileRoute("/events")({
  loader: () => loadEvents(),
  head: () => ({
    meta: [
      { title: "Events · John Wes" },
      { name: "description", content: "Speaking dates and past gatherings for John Wes." },
    ],
  }),
  component: EventsRoute,
});

function EventsRoute() {
  const data = Route.useLoaderData() as EventsData;
  return <EventsView upcoming={data.upcoming} past={data.past} />;
}
