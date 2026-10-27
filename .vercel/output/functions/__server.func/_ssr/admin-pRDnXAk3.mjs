import { n as formatDay } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as loadOverview } from "./router-DBUjRO_n.mjs";
import { r as DeskNote, s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-pRDnXAk3.js
var import_jsx_runtime = require_jsx_runtime();
function Overview() {
	const state = useDesk("overview", () => loadOverview());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Opening the desk…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	if (!state.data) return null;
	const { counts, recent } = state.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Overview"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskNote, { children: "Sample essays, books, messages, and dates are already on the shelf. Drafts stay private. The first signed-in editor keeps this desk." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-3",
			children: [
				["Essays", counts.articles],
				["Drafts", counts.drafts],
				["Books", counts.books],
				["Messages", counts.messages],
				["Events", counts.events],
				["Enquiries", counts.enquiries]
			].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-sm text-muted",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "display text-3xl tabular-nums",
					children: value
				})]
			}, String(label)))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "display mt-10 text-2xl",
			children: "Recent essays"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 divide-y divide-line",
			children: recent.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-baseline justify-between gap-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/articles/$id",
					params: { id: String(item.id) },
					className: "hover:text-oxblood",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted",
					children: [item.status, item.updatedAt ? ` · ${formatDay(item.updatedAt)}` : ""]
				})]
			}, item.id))
		})
	] });
}
//#endregion
export { Overview as component };
