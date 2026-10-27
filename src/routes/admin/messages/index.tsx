import { createFileRoute, Link } from "@tanstack/react-router";
import { useDesk } from "@/components/desk";
import { loadEditorMessages } from "@/lib/cms";

export const Route = createFileRoute("/admin/messages/")({ component: MessageList });

function MessageList() {
  const state = useDesk("messages", () => loadEditorMessages());
  if (state.loading) return <p className="text-sm text-muted">Loading messages…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="display text-4xl">Messages</h1>
        <Link to="/admin/messages/$id" params={{ id: "new" }} className="inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper">New message</Link>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {(state.data ?? []).map((message) => (
          <li key={message.id} className="flex justify-between gap-4 py-3">
            <Link to="/admin/messages/$id" params={{ id: String(message.id) }} className="hover:text-oxblood">{message.title}</Link>
            <span className="text-sm text-muted">{message.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
