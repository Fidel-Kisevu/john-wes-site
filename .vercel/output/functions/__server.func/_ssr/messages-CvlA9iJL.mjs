import { n as formatDay } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Route$11, v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as Photo } from "./Photo-CqNmJbV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-CvlA9iJL.js
var import_jsx_runtime = require_jsx_runtime();
function MessagesIndexView({ series, data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-5 pt-12 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Recorded"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl md:text-6xl",
				children: "Messages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: "Sermons, series, and conversations. A player loads only after you choose to play."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					search: { series: "" },
					className: series ? "border border-line px-3 py-2 text-sm" : "border border-oxblood px-3 py-2 text-sm text-oxblood",
					children: "All"
				}), data.series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					search: { series: item },
					className: series === item ? "border border-oxblood px-3 py-2 text-sm text-oxblood" : "border border-line px-3 py-2 text-sm",
					children: item
				}, item))]
			})
		]
	}), data.messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto max-w-6xl px-5 py-16 text-muted",
		children: "No messages in this series yet."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto max-w-6xl px-5 py-8",
		children: data.messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid items-center gap-6 border-t border-line py-7 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: message.thumbnail,
					alt: message.thumbnailAlt || "",
					ratio: "wide"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-oxblood",
						children: message.scripture || message.series
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-2 text-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/messages/$slug",
							params: { slug: message.slug },
							className: "hover:text-oxblood",
							children: message.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl",
						children: message.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							message.speaker,
							message.duration ? ` · ${message.duration}` : "",
							message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""
						]
					})
				]
			})]
		}, message.id))
	})] });
}
function MessagesIndexRoute() {
	const { series } = Route$11.useSearch();
	const data = Route$11.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesIndexView, {
		series,
		data
	}) });
}
//#endregion
export { MessagesIndexRoute as component };
