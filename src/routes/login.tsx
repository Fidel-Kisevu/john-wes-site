import { createFileRoute, Navigate } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <main className="min-h-screen bg-ivory" />;
  if (user) return <Navigate to="/admin" />;
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 text-ink">
      <div className="w-full max-w-sm">
        <p className="text-sm text-oxblood">John Wes</p>
        <h1 className="display mt-2 text-4xl">Editor</h1>
        <p className="mt-3 text-sm text-muted">
          The publishing desk belongs to the first person who signs in. Everyone else can still read the public site.
        </p>
        {authEnabled ? (
          <div className="mt-6 space-y-3">
            {GROK_PROVIDERS.map((provider) => (
              <button
                key={provider.providerId}
                type="button"
                className="h-11 w-full border border-line bg-paper text-sm"
                onClick={() => void signIn(provider.providerId, { callbackURL: "/admin" })}
              >
                Continue with {provider.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
    </main>
  );
}
