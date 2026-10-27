import { n as formatDay } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Route$16, v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as Photo } from "./Photo-CqNmJbV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles-D17g_dqc.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlesIndexView({ category, articles, categories }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-5 pt-12 pb-6 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Writing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl md:text-6xl",
				children: "Essays"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: "Reflections on Scripture, the church, prayer, and the Christian week."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				role: "list",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articles",
					search: { category: "" },
					className: category ? "border border-line px-3 py-2 text-sm" : "border border-oxblood px-3 py-2 text-sm text-oxblood",
					"aria-current": category ? void 0 : "page",
					children: "All"
				}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articles",
					search: { category: item.slug },
					className: category === item.slug ? "border border-oxblood px-3 py-2 text-sm text-oxblood" : "border border-line px-3 py-2 text-sm",
					"aria-current": category === item.slug ? "page" : void 0,
					children: item.name
				}, item.id))]
			})
		]
	}), articles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto max-w-6xl px-5 py-16 text-muted",
		children: "Nothing published in this category yet."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto max-w-6xl px-5 pb-16",
		children: articles.map((article, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid items-center gap-6 border-t border-line py-8 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: index === 0 ? "md:col-span-5" : "hidden md:col-span-3 md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: article.heroImage,
					alt: article.heroAlt || "",
					ratio: index === 0 ? "photo" : "photo"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: index === 0 ? "md:col-span-7" : "md:col-span-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [article.categoryName, article.publishedAt ? ` · ${formatDay(article.publishedAt)}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-2 text-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articles/$slug",
							params: { slug: article.slug },
							className: "hover:text-oxblood",
							children: article.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl",
						children: article.excerpt
					})
				]
			})]
		}, article.id))
	})] });
}
function ArticlesIndexRoute() {
	const { category } = Route$16.useSearch();
	const data = Route$16.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticlesIndexView, {
		category,
		articles: data.articles,
		categories: data.categories
	}) });
}
//#endregion
export { ArticlesIndexRoute as component };
