import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Photo-CqNmJbV1.js
var import_jsx_runtime = require_jsx_runtime();
function Photo({ src, alt, ratio = "wide", priority = false, className = "" }) {
	if (!src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `overflow-hidden bg-paper-2 ${ratio === "portrait" ? "ratio-portrait" : ratio === "book" ? "ratio-book" : ratio === "photo" ? "ratio-photo" : "ratio-wide"} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full object-cover",
			width: ratio === "portrait" || ratio === "book" ? 900 : 1600,
			height: ratio === "portrait" ? 1200 : ratio === "book" ? 1350 : 900,
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			fetchPriority: priority ? "high" : "auto"
		})
	});
}
//#endregion
export { Photo as t };
