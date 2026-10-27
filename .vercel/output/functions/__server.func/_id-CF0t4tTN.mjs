import { T as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as GROK_PROVIDERS } from "./_ssr/server-C1fgOowX.mjs";
import { M as loadPreview, n as Route, v as SiteFrame } from "./_ssr/router-DBUjRO_n.mjs";
import { r as signIn } from "./_ssr/client-1vAx-gM_.mjs";
import { n as useCurrentUserState } from "./_ssr/use-current-user-B7Cbrtsy.mjs";
import { s as useDesk } from "./_ssr/DeskFields-D6z4ybav.mjs";
import { t as Photo } from "./_ssr/Photo-CqNmJbV1.mjs";
import { i as VideoEmbed } from "./_ssr/engage-DRa29nHd.mjs";
import { t as Markdown } from "./_ssr/markdown-yioCq15E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CF0t4tTN.js
var import_jsx_runtime = require_jsx_runtime();
function EditorGate({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-ivory" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-ivory px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: "Editor only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Previews of unpublished work are not public."
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function PreviewPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBody, {}) });
}
function PreviewBody() {
	const { kind, id } = Route.useParams();
	const state = useDesk(`${kind}-${id}`, () => loadPreview({ data: {
		kind,
		id: Number(id)
	} }));
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bg-ivory px-5 py-16 text-sm text-muted",
		children: "Opening preview…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bg-ivory px-5 py-16 text-oxblood",
		children: state.error
	});
	const data = state.data;
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bg-ivory px-5 py-16",
		children: "Nothing to preview."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "bg-oxblood px-5 py-3 text-center text-sm text-paper",
			children: "Draft preview. Visitors cannot see this until it is published."
		}),
		data.kind === "article" && data.article ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-2xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: data.article.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: data.article.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: data.article.heroImage,
						alt: data.article.heroAlt,
						ratio: "wide"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { source: data.article.body })
				})
			]
		}) : null,
		data.kind === "book" && data.book ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: data.book.coverImage,
				alt: data.book.coverAlt || data.book.title,
				ratio: "book"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display text-4xl",
				children: data.book.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4",
				children: data.book.description
			})] })]
		}) : null,
		data.kind === "message" && data.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: data.message.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoEmbed, {
						url: data.message.videoUrl,
						title: data.message.title,
						poster: data.message.thumbnail
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: data.message.description
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-5 pb-12 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin",
				className: "text-oxblood",
				children: "Back to the desk"
			})
		})
	] });
}
//#endregion
export { PreviewPage as component };
