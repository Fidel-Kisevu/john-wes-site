import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { AboutView } from "@/components/shared/about/AboutView";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · John Wes" },
      {
        name: "description",
        content: "Biography and teaching concerns of John Wes, a Bible teacher and writer.",
      },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  const settings = useRouteContext({ from: "__root__" }).settings;
  return <AboutView settings={settings} />;
}
