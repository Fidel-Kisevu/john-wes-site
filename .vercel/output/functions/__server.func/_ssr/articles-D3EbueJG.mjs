import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as loadEditorArticles } from "./router-DBUjRO_n.mjs";
import { s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles-D3EbueJG.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleList() {
	const state = useDesk("articles", () => loadEditorArticles());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading essays…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Essays"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/articles/$id",
			params: { id: "new" },
			className: "inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper",
			children: "New essay"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line",
		children: (state.data ?? []).map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-baseline justify-between gap-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/articles/$id",
				params: { id: String(article.id) },
				className: "hover:text-oxblood",
				children: article.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted",
				children: [article.status, article.featured ? " · featured" : ""]
			})]
		}, article.id))
	})] });
}
//#endregion
export { ArticleList as component };
