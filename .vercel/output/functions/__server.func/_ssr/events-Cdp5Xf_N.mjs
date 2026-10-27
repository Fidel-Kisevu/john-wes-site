import { a as safeHttpUrl } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link, x as useRouteContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Route$27, v as SiteFrame } from "./router-DBUjRO_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Cdp5Xf_N.js
var import_jsx_runtime = require_jsx_runtime();
function EventBlock({ event }) {
	const registration = safeHttpUrl(event.registrationUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border-t border-line py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: event.whenLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-2 text-3xl",
				children: event.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					event.venue,
					event.timeZone ? ` · ${event.timeZone}` : "",
					event.status === "cancelled" ? " · Cancelled" : ""
				]
			}),
			event.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: event.description
			}) : null,
			registration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: registration,
				className: "mt-4 inline-block border-b border-oxblood text-sm text-oxblood",
				rel: "noopener noreferrer",
				children: "Registration link"
			}) : null
		]
	});
}
function EventsView({ upcoming, past }) {
	const settings = useRouteContext({ from: "__root__" }).settings;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-6xl px-5 pt-12 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Calendar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl md:text-6xl",
				children: "Speaking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl",
				children: settings.speakingNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "mt-6 inline-block border-b border-oxblood text-sm text-oxblood",
				children: "Send a speaking enquiry"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-2xl",
				children: "Upcoming"
			}),
			upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "No public dates just now. An enquiry is still welcome."
			}) : upcoming.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventBlock, { event }, event.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-12 text-2xl",
				children: "Earlier"
			}),
			past.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "Past gatherings will be listed here."
			}) : past.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventBlock, { event }, event.id))
		]
	})] });
}
function EventsRoute() {
	const data = Route$27.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsView, {
		upcoming: data.upcoming,
		past: data.past
	});
}
//#endregion
export { EventsRoute as component };
