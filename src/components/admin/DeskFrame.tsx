import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";
import { EditorSignIn } from "./EditorSignIn";

const LINKS = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/articles", label: "Articles" },
  { to: "/admin/books", label: "Books" },
  { to: "/admin/messages", label: "Messages" },
  { to: "/admin/events", label: "Events" },
  { to: "/admin/categories", label: "Categories" },
  { to: "/admin/media", label: "Media" },
  { to: "/admin/enquiries", label: "Enquiries" },
  { to: "/admin/settings", label: "Settings" },
] as const;

export function DeskFrame() {
  const { user, isPending } = useCurrentUserState();
  const path = useRouterState({ select: (state) => state.location.pathname });
  if (isPending) {
    return (
      <div className="min-h-screen bg-ivory px-5 py-12">
        <div className="h-8 w-48 animate-pulse bg-paper-2" />
      </div>
    );
  }
  if (!user) return <EditorSignIn />;
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/admin" className="display text-2xl">
            Publishing desk
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="hover:text-oxblood">
              View site
            </Link>
            <UserButton />
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 pb-3" aria-label="Editor">
          {LINKS.map((item) => {
            const on = item.to === "/admin" ? path === "/admin" : path === item.to || path.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={on ? "page" : undefined}
                className={on ? "shrink-0 bg-oxblood px-3 py-2 text-sm text-paper" : "shrink-0 px-3 py-2 text-sm hover:text-oxblood"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-8">
        <Outlet />
      </div>
    </div>
  );
}
