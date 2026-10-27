import { createFileRoute, Link } from "@tanstack/react-router";
import { DeskNote, useDesk } from "@/components/desk";
import { loadOverview } from "@/lib/cms";
import { formatDay } from "@/lib/content-types";

export const Route = createFileRoute("/admin/")({
  component: Overview,
});

function Overview() {
  const state = useDesk("overview", () => loadOverview());
  if (state.loading) return <p className="text-sm text-muted">Opening the desk…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  if (!state.data) return null;
  const { counts, recent } = state.data;
  return (
    <div>
      <h1 className="display text-4xl">Overview</h1>
      <DeskNote>
        Sample essays, books, messages, and dates are already on the shelf. Drafts stay private. The first signed-in editor keeps this desk.
      </DeskNote>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {[
          ["Essays", counts.articles],
          ["Drafts", counts.drafts],
          ["Books", counts.books],
          ["Messages", counts.messages],
          ["Events", counts.events],
          ["Enquiries", counts.enquiries],
        ].map(([label, value]) => (
          <div key={String(label)} className="border-t border-line py-3">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="display text-3xl tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <h2 className="display mt-10 text-2xl">Recent essays</h2>
      <ul className="mt-3 divide-y divide-line">
        {recent.map((item) => (
          <li key={item.id} className="flex items-baseline justify-between gap-4 py-3">
            <Link to="/admin/articles/$id" params={{ id: String(item.id) }} className="hover:text-oxblood">
              {item.title}
            </Link>
            <span className="text-sm text-muted">
              {item.status}
              {item.updatedAt ? ` · ${formatDay(item.updatedAt)}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
