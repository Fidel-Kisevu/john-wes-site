import { createFileRoute } from "@tanstack/react-router";
import { useDesk } from "@/components/desk";
import { loadEnquiries } from "@/lib/cms";
import { formatDay } from "@/lib/content-types";

export const Route = createFileRoute("/admin/enquiries")({ component: EnquiriesPage });

function EnquiriesPage() {
  const state = useDesk("enquiries", () => loadEnquiries());
  if (state.loading) return <p className="text-sm text-muted">Loading enquiries…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  const data = state.data;
  if (!data) return null;
  return (
    <div>
      <h1 className="display text-4xl">Enquiries</h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        Notes from the contact form are stored here. Nothing is emailed, because no mail service is connected.
      </p>
      {data.enquiries.length === 0 ? <p className="mt-8 text-muted">No notes yet.</p> : (
        <ul className="mt-6 divide-y divide-line">
          {data.enquiries.map((item) => (
            <li key={item.id} className="py-4">
              <p className="text-sm text-oxblood">{item.enquiryType} · {formatDay(item.createdAt)}</p>
              <p className="mt-1">{item.name} · {item.email}</p>
              <p className="mt-2 whitespace-pre-wrap">{item.message}</p>
            </li>
          ))}
        </ul>
      )}
      <h2 className="display mt-12 text-2xl">Note list</h2>
      <p className="mt-2 text-sm text-muted">Addresses saved from the homepage. No messages have been sent to them.</p>
      {data.notes.length === 0 ? <p className="mt-4 text-muted">No addresses yet.</p> : (
        <ul className="mt-4 divide-y divide-line">
          {data.notes.map((item) => (
            <li key={item.email} className="flex justify-between py-2 text-sm">
              <span>{item.email}</span>
              <span className="text-muted">{formatDay(item.createdAt)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
