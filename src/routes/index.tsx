import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { NotesForm } from "@/components/engage";
import { SiteFrame } from "@/components/site";
import { BooksSection } from "@/components/shared/home/BooksSection";
import { HomeHeroSection } from "@/components/shared/home/HomeHeroSection";
import { LeadEssaySection } from "@/components/shared/home/LeadEssaySection";
import { MessagesSection } from "@/components/shared/home/MessagesSection";
import { MinistrySection } from "@/components/shared/home/MinistrySection";
import { NextEventSection } from "@/components/shared/home/NextEventSection";
import { loadHome } from "@/lib/cms";
import type { Settings } from "@/lib/content-types";

export const Route = createFileRoute("/")({
  loader: () => loadHome(),
  component: HomeRoute,
});

type HomePageData = Awaited<ReturnType<typeof loadHome>>;

function HomeRoute() {
  const settings = useRouteContext({ from: "__root__" }).settings as Settings;
  const data = Route.useLoaderData() as HomePageData;
  const [lead, ...rest] = data.essays;
  const [firstBook, ...otherBooks] = data.books;

  return (
    <SiteFrame>
      <HomeHeroSection settings={settings} />
      <LeadEssaySection lead={lead} rest={rest} />
      <BooksSection firstBook={firstBook} otherBooks={otherBooks} />
      <MinistrySection settings={settings} />
      <MessagesSection messages={data.messages} />
      <NextEventSection nextEvent={data.nextEvent} />
      <NotesForm heading={settings.newsletterHeading} text={settings.newsletterText} />
    </SiteFrame>
  );
}
