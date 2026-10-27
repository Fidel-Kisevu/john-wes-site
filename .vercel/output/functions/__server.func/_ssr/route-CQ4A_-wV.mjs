import { o as __toESM } from "../_runtime.mjs";
import { $ as require_react, T as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as hasGateSessionMarker, t as GROK_PROVIDERS } from "./server-C1fgOowX.mjs";
import { i as signOut, r as signIn } from "./client-1vAx-gM_.mjs";
import { n as useCurrentUserState, t as useCurrentUser } from "./use-current-user-B7Cbrtsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-CQ4A_-wV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
function EditorSignIn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-ivory px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: "Publishing desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Sign in to draft, publish, and unpublish. The first editor to arrive keeps the desk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "h-11 w-full border border-line bg-paper text-sm",
						onClick: () => void signIn(provider.providerId, { callbackURL: "/admin" }),
						children: ["Continue with ", provider.label]
					}, provider.providerId))
				})
			]
		})
	});
}
var LINKS = [
	{
		to: "/admin",
		label: "Overview"
	},
	{
		to: "/admin/articles",
		label: "Articles"
	},
	{
		to: "/admin/books",
		label: "Books"
	},
	{
		to: "/admin/messages",
		label: "Messages"
	},
	{
		to: "/admin/events",
		label: "Events"
	},
	{
		to: "/admin/categories",
		label: "Categories"
	},
	{
		to: "/admin/media",
		label: "Media"
	},
	{
		to: "/admin/enquiries",
		label: "Enquiries"
	},
	{
		to: "/admin/settings",
		label: "Settings"
	}
];
function DeskFrame() {
	const { user, isPending } = useCurrentUserState();
	const path = useRouterState({ select: (state) => state.location.pathname });
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-ivory px-5 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 animate-pulse bg-paper-2" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "display text-2xl",
					children: "Publishing desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-oxblood",
						children: "View site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 pb-3",
				"aria-label": "Editor",
				children: LINKS.map((item) => {
					const on = item.to === "/admin" ? path === "/admin" : path === item.to || path.startsWith(`${item.to}/`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": on ? "page" : void 0,
						className: on ? "shrink-0 bg-oxblood px-3 py-2 text-sm text-paper" : "shrink-0 px-3 py-2 text-sm hover:text-oxblood",
						children: item.label
					}, item.to);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
var SplitComponent = DeskFrame;
//#endregion
export { SplitComponent as component };
