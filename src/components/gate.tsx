import { useState, type ReactNode } from "react";
import { authEnabled, signInWithEmail, signUpWithEmail } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function EditorGate({ children }: { children: ReactNode }) {
  const { user, isPending } = useCurrentUserState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (isPending) return <div className="min-h-screen bg-ivory" />;
  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-ivory px-6">
        <div className="w-full max-w-sm">
          <h1 className="display text-4xl">Editor only</h1>
          <p className="mt-3 text-sm text-muted">Previews of unpublished work are not public.</p>
          {authEnabled ? (
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                void (async () => {
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
                })();
              }}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="gate-email">Email</label>
                <input id="gate-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-11 w-full border border-line bg-paper px-3 text-sm" placeholder="admin@example.com" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="gate-password">Password</label>
                <input id="gate-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="h-11 w-full border border-line bg-paper px-3 text-sm" placeholder="••••••••" />
              </div>
              {status ? <p className="text-sm text-oxblood">{status}</p> : null}
              <div className="space-y-2 pt-2">
                <button type="submit" disabled={submitting} className="h-11 w-full border border-line bg-ink text-paper text-sm disabled:opacity-60">{submitting ? "Signing in…" : "Sign in"}</button>
                <button type="button" disabled={submitting} onClick={() => void (async () => { if (!email || !password) { setStatus("Enter your email and password to create an admin account."); return; } setSubmitting(true); setStatus(null); try { await signUpWithEmail(email.trim(), password, "Admin", { callbackURL: "/admin" }); window.location.href = "/admin"; } catch (error) { setStatus(error instanceof Error ? error.message : "Account creation failed."); } finally { setSubmitting(false); } })()} className="h-11 w-full border border-line bg-paper text-sm disabled:opacity-60">Create admin account</button>
              </div>
            </form>
          ) : null}
        </div>
      </main>
    );
  }
  return <>{children}</>;
}
