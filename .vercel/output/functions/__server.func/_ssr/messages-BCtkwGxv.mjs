import { T as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as loadEditorMessages } from "./router-DBUjRO_n.mjs";
import { s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-BCtkwGxv.js
var import_jsx_runtime = require_jsx_runtime();
function MessageList() {
	const state = useDesk("messages", () => loadEditorMessages());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading messages…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Messages"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/messages/$id",
			params: { id: "new" },
			className: "inline-flex h-11 items-center bg-oxblood px-4 text-sm font-semibold text-paper",
			children: "New message"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line",
		children: (state.data ?? []).map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex justify-between gap-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/messages/$id",
				params: { id: String(message.id) },
				className: "hover:text-oxblood",
				children: message.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: message.status
			})]
		}, message.id))
	})] });
}
//#endregion
export { MessageList as component };
