import { useState } from "react";
import { authEnabled, signInWithEmail, signUpWithEmail } from "@/lib/auth/client";

export function EditorSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      setStatus("Enter both your email and password.");
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      await signInWithEmail(email.trim(), password, { callbackURL: "/admin" });
      window.location.href = "/admin";
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Sign-in failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreate = async () => {
    if (!email || !password) {
      setStatus("Enter your email and password to create an admin account.");
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      await signUpWithEmail(email.trim(), password, "Admin", { callbackURL: "/admin" });
      window.location.href = "/admin";
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Account creation failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6">
      <div className="w-full max-w-sm">
        <h1 className="display text-4xl">Publishing desk</h1>
        <p className="mt-3 text-sm text-muted">Sign in to draft, publish, and unpublish. The first editor to arrive keeps the desk.</p>
        {authEnabled ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void handleSignIn();
            }}
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="editor-email">Email</label>
              <input
                id="editor-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 w-full border border-line bg-paper px-3 text-sm"
                placeholder="admin@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="editor-password">Password</label>
              <input
                id="editor-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 w-full border border-line bg-paper px-3 text-sm"
                placeholder="••••••••"
              />
            </div>
            {status ? <p className="text-sm text-oxblood">{status}</p> : null}
            <div className="space-y-2 pt-2">
              <button type="submit" disabled={submitting} className="h-11 w-full border border-line bg-ink text-paper text-sm disabled:opacity-60">
                {submitting ? "Signing in…" : "Sign in"}
              </button>
              <button type="button" disabled={submitting} onClick={() => void handleCreate()} className="h-11 w-full border border-line bg-paper text-sm disabled:opacity-60">
                Create admin account
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-4 text-sm">Sign-in is disabled.</p>
        )}
      </div>
    </main>
  );
}
