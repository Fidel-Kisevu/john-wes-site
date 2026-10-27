import { useState } from "react";
import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";
import {
  authClient,
  authEnabled,
  signInWithEmail,
  signUpWithEmail,
} from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (isPending) return <main className="min-h-screen bg-ivory" />;
  if (user) return <Navigate to="/admin" />;

  const handleSignIn = async () => {
    if (!email.trim() || !password) {
      setStatus("Enter both your email and password.");
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      await signInWithEmail(email.trim(), password, { callbackURL: "/admin" });
      navigate({ to: "/admin" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Sign-in failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreateAccount = async () => {
    if (!email.trim() || !password) {
      setStatus("Enter your email and password to create an admin account.");
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      await signUpWithEmail(email.trim(), password, "Admin", { callbackURL: "/admin" });
      navigate({ to: "/admin" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Account creation failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 text-ink">
      <div className="w-full max-w-sm">
        <p className="text-sm text-oxblood">John Wes</p>
        <h1 className="display mt-2 text-4xl">Editor</h1>
        <p className="mt-3 text-sm text-muted">
          Use your email and password to access the publishing desk.
        </p>

        {authEnabled ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void handleSignIn();
            }}
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 w-full border border-line bg-paper px-3 text-sm outline-none"
                placeholder="admin@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 w-full border border-line bg-paper px-3 text-sm outline-none"
                placeholder="••••••••"
              />
            </div>

            {status ? <p className="text-sm text-oxblood">{status}</p> : null}

            <div className="space-y-2 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="h-11 w-full border border-line bg-ink text-paper text-sm disabled:opacity-60"
              >
                {submitting ? "Signing in…" : "Sign in"}
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={() => void handleCreateAccount()}
                className="h-11 w-full border border-line bg-paper text-sm disabled:opacity-60"
              >
                Create admin account
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-4 text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
    </main>
  );
}
