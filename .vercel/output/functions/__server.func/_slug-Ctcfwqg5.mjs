import { n as formatDay, s as youtubeId } from "./_ssr/content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as Route$10 } from "./_ssr/router-DBUjRO_n.mjs";
import { i as VideoEmbed, r as ShareRow } from "./_ssr/engage-DRa29nHd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Ctcfwqg5.js
var import_jsx_runtime = require_jsx_runtime();
function MessageDetailView({ message, related }) {
	const externalSample = Boolean(youtubeId(message.videoUrl));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					search: { series: message.series },
					children: message.series || "Message"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 max-w-3xl text-4xl md:text-6xl",
				children: message.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					message.speaker,
					message.scripture ? ` · ${message.scripture}` : "",
					message.duration ? ` · ${message.duration}` : "",
					message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoEmbed, {
					url: message.videoUrl,
					title: message.title,
					poster: message.thumbnail
				}), externalSample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Sample embed for the demonstration player. It is not a recording by Minister Benja. Replace the link in the editor."
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-lg",
				children: message.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareRow, { title: message.title })
			})
		]
	}), related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-2xl",
				children: "Related messages"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/messages/$slug",
						params: { slug: item.slug },
						className: "display text-xl hover:text-oxblood",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: item.scripture
					})]
				}, item.id))
			})]
		})
	}) : null] });
}
function MessageRoute() {
	const data = Route$10.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageDetailView, {
		message: data.message,
		related: data.related
	});
}
//#endregion
export { MessageRoute as component };
