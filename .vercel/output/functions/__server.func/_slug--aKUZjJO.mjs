import { i as readingMinutes, n as formatDay } from "./_ssr/content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as Route$15, v as SiteFrame } from "./_ssr/router-DBUjRO_n.mjs";
import { t as Photo } from "./_ssr/Photo-CqNmJbV1.mjs";
import { r as ShareRow } from "./_ssr/engage-DRa29nHd.mjs";
import { t as Markdown } from "./_ssr/markdown-yioCq15E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug--aKUZjJO.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleDetailView({ article, related }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles",
						search: { category: article.categorySlug },
						className: "hover:underline",
						children: article.categoryName || "Essay"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-3 max-w-3xl text-4xl md:text-6xl",
					children: article.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg",
					children: article.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						article.authorName,
						article.publishedAt ? ` · ${formatDay(article.publishedAt)}` : "",
						" · ",
						readingMinutes(article.body),
						" minute read"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: article.heroImage,
						alt: article.heroAlt || "",
						ratio: "wide",
						priority: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-2xl text-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { source: article.body })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-2xl border-t border-line pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareRow, { title: article.title })
				})
			]
		}),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl",
					children: "Continue reading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articles/$slug",
							params: { slug: item.slug },
							className: "display text-xl hover:text-oxblood",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.categoryName
						})]
					}, item.id))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: article.title,
				description: article.excerpt,
				datePublished: article.publishedAt || void 0,
				author: {
					"@type": "Person",
					name: article.authorName
				}
			}).replace(/</g, "\\u003c") }
		})
	] });
}
function ArticleRoute() {
	const data = Route$15.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleDetailView, {
		article: data.article,
		related: data.related
	});
}
//#endregion
export { ArticleRoute as component };
