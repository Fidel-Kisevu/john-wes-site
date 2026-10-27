import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export function EditorSignIn() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6">
      <div className="w-full max-w-sm">
        <h1 className="display text-4xl">Publishing desk</h1>
        <p className="mt-3 text-sm text-muted">Sign in to draft, publish, and unpublish. The first editor to arrive keeps the desk.</p>
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
          <p className="mt-4 text-sm">Sign-in is disabled.</p>
        )}
      </div>
    </main>
  );
}
