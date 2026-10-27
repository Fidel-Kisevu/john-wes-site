import { n as formatDay } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as loadEnquiries } from "./router-DBUjRO_n.mjs";
import { s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiries-xSpnDW2U.js
var import_jsx_runtime = require_jsx_runtime();
function EnquiriesPage() {
	const state = useDesk("enquiries", () => loadEnquiries());
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading enquiries…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	const data = state.data;
	if (!data) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Enquiries"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-sm text-muted",
			children: "Notes from the contact form are stored here. Nothing is emailed, because no mail service is connected."
		}),
		data.enquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-muted",
			children: "No notes yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 divide-y divide-line",
			children: data.enquiries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-oxblood",
						children: [
							item.enquiryType,
							" · ",
							formatDay(item.createdAt)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							item.name,
							" · ",
							item.email
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap",
						children: item.message
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "display mt-12 text-2xl",
			children: "Note list"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Addresses saved from the homepage. No messages have been sent to them."
		}),
		data.notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: "No addresses yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-line",
			children: data.notes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex justify-between py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: formatDay(item.createdAt)
				})]
			}, item.email))
		})
	] });
}
//#endregion
export { EnquiriesPage as component };
