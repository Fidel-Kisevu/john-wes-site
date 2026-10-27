import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Missing } from "@/components/site";
import { loadSettings } from "@/lib/cms";
import type { Settings } from "@/lib/content-types";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  beforeLoad: async () => ({ settings: await loadSettings() }),
  head: ({ match }) => {
    const settings = (match.context as { settings?: Settings } | undefined)?.settings;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: settings?.seoTitle || "John Wes" },
        {
          name: "description",
          content: settings?.seoDescription || "Essays, books, and messages from John Wes.",
        },
        { name: "theme-color", content: "#f3eee6" },
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      ],
    };
  },
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <Missing
      title="This page is not on the shelf."
      body="The address may be mistyped, or the piece is still a draft and not public."
    />
  ),
});
