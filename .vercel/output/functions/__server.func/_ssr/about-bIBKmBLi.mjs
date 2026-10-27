import { r as interestLines } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link, x as useRouteContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as Photo } from "./Photo-CqNmJbV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-bIBKmBLi.js
var import_jsx_runtime = require_jsx_runtime();
function AboutView({ settings }) {
	const paragraphs = settings.biography.split(/\n{2,}/).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: settings.portraitUrl,
				alt: settings.portraitAlt,
				ratio: "portrait",
				priority: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: settings.professionalTitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-3 text-4xl md:text-6xl",
					children: settings.ministerName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg",
					children: settings.biographySummary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 32)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-10 text-2xl",
					children: "Areas of attention"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: interestLines(settings.interests).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-line py-2",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-muted",
					children: settings.credentialsNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articles",
							search: { category: "" },
							className: "border-b border-oxblood text-oxblood",
							children: "Essays"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/books",
							className: "border-b border-line hover:border-oxblood",
							children: "Books"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "border-b border-line hover:border-oxblood",
							children: "Speaking enquiries"
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			name: settings.ministerName,
			jobTitle: settings.professionalTitle,
			description: settings.biographySummary,
			email: settings.contactEmail
		}).replace(/</g, "\\u003c") }
	})] });
}
function AboutRoute() {
	const settings = useRouteContext({ from: "__root__" }).settings;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutView, { settings });
}
//#endregion
export { AboutRoute as component };
