import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Route$25, v as SiteFrame } from "./router-DBUjRO_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DG6NLBeO.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesView({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-5 pt-12 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Start here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl md:text-6xl",
				children: "Resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: "A short path through the shelf, rather than everything at once."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-2xl",
				children: "If you are new"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-4",
				children: [data.essays.slice(0, 2).map((essay) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articles/$slug",
					params: { slug: essay.slug },
					className: "hover:text-oxblood",
					children: essay.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: essay.categoryName
				})] }, essay.id)), data.books[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/books/$slug",
					params: { slug: data.books[0].slug },
					className: "hover:text-oxblood",
					children: data.books[0].title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Book"
				})] }) : null]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-2xl",
				children: "For a congregation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-4",
				children: data.messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages/$slug",
					params: { slug: message.slug },
					className: "hover:text-oxblood",
					children: message.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: message.scripture
				})] }, message.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl",
					children: "On the shelf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: data.books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/books/$slug",
						params: { slug: book.slug },
						className: "hover:text-oxblood",
						children: book.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: book.publicationYear
					})] }, book.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/search",
					search: { q: "" },
					className: "mt-6 inline-block text-sm text-oxblood",
					children: "Search the library"
				})
			] })
		]
	})] });
}
function ResourcesRoute() {
	const data = Route$25.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesView, { data });
}
//#endregion
export { ResourcesRoute as component };
