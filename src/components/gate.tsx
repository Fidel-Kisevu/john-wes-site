import type { ReactNode } from "react";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function EditorGate({ children }: { children: ReactNode }) {
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <div className="min-h-screen bg-ivory" />;
  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-ivory px-6">
        <div className="w-full max-w-sm">
          <h1 className="display text-4xl">Editor only</h1>
          <p className="mt-3 text-sm text-muted">Previews of unpublished work are not public.</p>
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
          ) : null}
        </div>
      </main>
    );
  }
  return <>{children}</>;
}
