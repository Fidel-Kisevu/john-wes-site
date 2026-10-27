import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as loadEditorBooks } from "./router-DBUjRO_n.mjs";
import { s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/books-BONkk8ER.js
var import_jsx_runtime = require_jsx_runtime();
function BookList() {
	const state = useDesk("books", () => loadEditorBooks());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading books…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Books"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/books/$id",
			params: { id: "new" },
			className: "inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper",
			children: "New book"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line",
		children: (state.data ?? []).map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex justify-between gap-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/books/$id",
				params: { id: String(book.id) },
				className: "hover:text-oxblood",
				children: book.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted",
				children: [book.status, book.featured ? " · featured" : ""]
			})]
		}, book.id))
	})] });
}
//#endregion
export { BookList as component };
