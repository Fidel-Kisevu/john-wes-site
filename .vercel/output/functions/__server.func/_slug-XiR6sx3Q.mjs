import { a as safeHttpUrl } from "./_ssr/content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as Route$13, v as SiteFrame } from "./_ssr/router-DBUjRO_n.mjs";
import { t as Photo } from "./_ssr/Photo-CqNmJbV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-XiR6sx3Q.js
var import_jsx_runtime = require_jsx_runtime();
function BookDetailView({ book, related }) {
	const purchase = safeHttpUrl(book.purchaseUrl);
	const paragraphs = book.description.split(/\n{2,}/).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: book.coverImage,
					alt: book.coverAlt || book.title,
					ratio: "book",
					priority: true,
					className: "max-w-md"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-oxblood",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/books",
							children: "Books"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-3 text-4xl md:text-5xl",
						children: book.title
					}),
					book.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-muted",
						children: book.subtitle
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Author"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: book.authorName })] }),
							book.publisher ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Publisher"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: book.publisher })] }) : null,
							book.publicationYear ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Year"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: book.publicationYear })] }) : null,
							book.isbn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "ISBN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: book.isbn })] }) : null,
							book.price ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Sample price"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [book.currency ? `${book.currency} ` : "", book.price] })] }) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
					}),
					purchase ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: purchase,
							className: "inline-flex h-11 items-center bg-oxblood px-5 text-sm font-semibold text-paper",
							rel: "noopener noreferrer",
							children: "Order link"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 block text-sm text-muted",
							children: "Placeholder retailer. This site does not take payment."
						})]
					}) : null
				]
			})]
		}),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl",
					children: "Other books"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/books/$slug",
						params: { slug: item.slug },
						className: "hover:text-oxblood",
						children: item.title
					}) }, item.id))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Book",
				name: book.title,
				author: {
					"@type": "Person",
					name: book.authorName
				},
				description: book.subtitle || book.description.slice(0, 240)
			}).replace(/</g, "\\u003c") }
		})
	] });
}
function BookRoute() {
	const data = Route$13.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookDetailView, {
		book: data.book,
		related: data.related
	});
}
//#endregion
export { BookRoute as component };
