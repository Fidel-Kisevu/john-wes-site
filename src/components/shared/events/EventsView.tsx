import { Link, useRouteContext } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site";
import { safeHttpUrl, type Gathering, type Settings } from "@/lib/content-types";

function EventBlock({ event }: { event: Gathering }) {
  const registration = safeHttpUrl(event.registrationUrl);
  return (
    <article className="border-t border-line py-8">
      <p className="text-sm text-oxblood">{event.whenLabel}</p>
      <h2 className="display mt-2 text-3xl">{event.title}</h2>
      <p className="mt-2 text-sm text-muted">
        {event.venue}
        {event.timeZone ? ` · ${event.timeZone}` : ""}
        {event.status === "cancelled" ? " · Cancelled" : ""}
      </p>
      {event.description ? <p className="mt-4 max-w-2xl">{event.description}</p> : null}
      {registration ? (
        <a href={registration} className="mt-4 inline-block border-b border-oxblood text-sm text-oxblood" rel="noopener noreferrer">
          Registration link
        </a>
      ) : null}
    </article>
  );
}

export function EventsView({ upcoming, past }: { upcoming: Gathering[]; past: Gathering[] }) {
  const settings = useRouteContext({ from: "__root__" }).settings as Settings;

  return (
    <SiteFrame>
      <header className="mx-auto max-w-6xl px-5 pt-12 md:pt-16">
        <p className="text-sm text-oxblood">Calendar</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Speaking</h1>
        <p className="mt-4 max-w-2xl">{settings.speakingNote}</p>
        <Link to="/contact" className="mt-6 inline-block border-b border-oxblood text-sm text-oxblood">
          Send a speaking enquiry
        </Link>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="display text-2xl">Upcoming</h2>
        {upcoming.length === 0 ? (
          <p className="mt-4 text-muted">No public dates just now. An enquiry is still welcome.</p>
        ) : (
          upcoming.map((event) => <EventBlock key={event.id} event={event} />)
        )}
        <h2 className="display mt-12 text-2xl">Earlier</h2>
        {past.length === 0 ? (
          <p className="mt-4 text-muted">Past gatherings will be listed here.</p>
        ) : (
          past.map((event) => <EventBlock key={event.id} event={event} />)
        )}
      </div>
    </SiteFrame>
  );
}
