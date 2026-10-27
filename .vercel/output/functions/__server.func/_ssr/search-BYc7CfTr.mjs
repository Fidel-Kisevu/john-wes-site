import { o as __toESM } from "../_runtime.mjs";
import { $ as require_react, C as useNavigate, T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as Route$23, v as SiteFrame } from "./router-DBUjRO_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BYc7CfTr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KIND = {
	article: "Essay",
	book: "Book",
	message: "Message"
};
function SearchView({ q, hits, error, value, onValueChange, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-3xl px-5 pt-12 md:pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl md:text-6xl",
			children: "Search"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 flex flex-col gap-3 sm:flex-row",
			onSubmit: (event) => {
				event.preventDefault();
				onSubmit();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "q",
					children: "Search published work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "q",
					value,
					onChange: (event) => onValueChange(event.target.value),
					className: "field sm:flex-1",
					placeholder: "A word, a book, a passage"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "inline-flex h-11 items-center justify-center bg-oxblood px-5 text-sm font-semibold text-paper",
					children: "Search"
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-10",
		children: [
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-oxblood",
				children: error
			}) : null,
			!error && q.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Enter at least two letters. Only published work is searched."
			}) : null,
			!error && q.trim().length >= 2 && hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"No published essays, books, or messages match “",
				q.trim(),
				"”."
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line",
				children: hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-oxblood",
							children: KIND[hit.kind]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: hit.kind === "article" ? "/articles/$slug" : hit.kind === "book" ? "/books/$slug" : "/messages/$slug",
							params: { slug: hit.slug },
							className: "display text-2xl hover:text-oxblood",
							children: hit.title
						}),
						hit.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: hit.summary
						}) : null
					]
				}, `${hit.kind}-${hit.slug}`))
			})
		]
	})] });
}
function SearchRoute() {
	const { q } = Route$23.useSearch();
	const { hits, error } = Route$23.useLoaderData();
	const navigate = useNavigate();
	const [value, setValue] = (0, import_react.useState)(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchView, {
		q,
		hits,
		error,
		value,
		onValueChange: setValue,
		onSubmit: () => {
			navigate({
				to: "/search",
				search: { q: value }
			});
		}
	});
}
//#endregion
export { SearchRoute as component };
