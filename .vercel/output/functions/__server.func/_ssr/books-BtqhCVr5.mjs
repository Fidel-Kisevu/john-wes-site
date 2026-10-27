import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Route$14, v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as Photo } from "./Photo-CqNmJbV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/books-BtqhCVr5.js
var import_jsx_runtime = require_jsx_runtime();
function BooksIndexView({ books }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-5 pt-12 pb-4 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Publications"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl md:text-6xl",
				children: "Books"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: "Short books for congregations and readers who want Scripture kept in the foreground. Purchase links on this demonstration go to placeholder addresses and do not take payment."
			})
		]
	}), books.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto max-w-6xl px-5 py-16 text-muted",
		children: "No books published yet."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4",
		children: books.map((book, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: index === 0 ? "sm:col-span-2" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/books/$slug",
				params: { slug: book.slug },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: book.coverImage,
						alt: book.coverAlt || book.title,
						ratio: "book",
						className: index === 0 ? "max-w-md" : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-4 text-2xl",
						children: book.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [book.subtitle, book.publicationYear ? ` · ${book.publicationYear}` : ""]
					})
				]
			})
		}, book.id))
	})] });
}
function BooksIndexRoute() {
	const books = Route$14.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BooksIndexView, { books }) });
}
//#endregion
export { BooksIndexRoute as component };
