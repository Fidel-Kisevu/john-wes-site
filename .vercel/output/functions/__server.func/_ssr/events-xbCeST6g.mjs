import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as loadEditorEvents } from "./router-DBUjRO_n.mjs";
import { s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-xbCeST6g.js
var import_jsx_runtime = require_jsx_runtime();
function EventList() {
	const state = useDesk("events", () => loadEditorEvents());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading events…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Events"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/events/$id",
			params: { id: "new" },
			className: "inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper",
			children: "New event"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line",
		children: (state.data ?? []).map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex justify-between gap-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/events/$id",
				params: { id: String(event.id) },
				className: "hover:text-oxblood",
				children: event.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted",
				children: [
					event.upcoming ? "Upcoming" : "Past",
					" · ",
					event.status
				]
			})]
		}, event.id))
	})] });
}
//#endregion
export { EventList as component };
