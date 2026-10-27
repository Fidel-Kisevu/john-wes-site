import { T as require_jsx_runtime, x as useRouteContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as ContactForm } from "./engage-DRa29nHd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-dhzK9Rqm.js
var import_jsx_runtime = require_jsx_runtime();
function ContactView({ settings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: "Correspondence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-3 text-4xl md:text-6xl",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5",
					children: settings.speakingNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "border-b border-line hover:border-oxblood",
						href: `mailto:${settings.contactEmail}`,
						children: settings.contactEmail
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: settings.footerNote
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:col-span-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
		})]
	}) });
}
function ContactRoute() {
	const settings = useRouteContext({ from: "__root__" }).settings;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactView, { settings });
}
//#endregion
export { ContactRoute as component };
