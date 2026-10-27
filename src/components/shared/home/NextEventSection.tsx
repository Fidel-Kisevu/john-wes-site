import { Link } from "@tanstack/react-router";
import type { Gathering } from "@/lib/content-types";

export function NextEventSection({ nextEvent }: { nextEvent: Gathering | null }) {
  if (!nextEvent) return null;

  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-oxblood">Next gathering</p>
          <h2 className="display mt-2 text-3xl md:text-4xl">{nextEvent.title}</h2>
          <p className="mt-3 text-muted">
            {nextEvent.whenLabel}
            {nextEvent.venue ? ` · ${nextEvent.venue}` : ""}
          </p>
        </div>
        <Link to="/events" className="text-sm text-oxblood">
          Speaking and dates
        </Link>
      </div>
    </section>
  );
}
