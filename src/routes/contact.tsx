import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { ContactView } from "@/components/shared/contact/ContactView";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · John Wes" },
      { name: "description", content: "Write to John Wes about speaking, writing, or a general enquiry." },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const settings = useRouteContext({ from: "__root__" }).settings;
  return <ContactView settings={settings} />;
}
