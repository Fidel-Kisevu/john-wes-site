import { createFileRoute, Link } from "@tanstack/react-router";
import { useDesk } from "@/components/desk";
import { loadEditorEvents } from "@/lib/cms";

export const Route = createFileRoute("/admin/events/")({ component: EventList });

function EventList() {
  const state = useDesk("events", () => loadEditorEvents());
  if (state.loading) return <p className="text-sm text-muted">Loading events…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="display text-4xl">Events</h1>
        <Link to="/admin/events/$id" params={{ id: "new" }} className="inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper">New event</Link>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {(state.data ?? []).map((event) => (
          <li key={event.id} className="flex justify-between gap-4 py-3">
            <Link to="/admin/events/$id" params={{ id: String(event.id) }} className="hover:text-oxblood">{event.title}</Link>
            <span className="text-sm text-muted">{event.upcoming ? "Upcoming" : "Past"} · {event.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
