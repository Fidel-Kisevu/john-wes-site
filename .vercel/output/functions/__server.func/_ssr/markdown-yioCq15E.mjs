import { T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/markdown-yioCq15E.js
var import_jsx_runtime = require_jsx_runtime();
function inline(text) {
	return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**") && part.length > 4) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, index);
		if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: part.slice(1, -1) }, index);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
	});
}
function Markdown({ source }) {
	const blocks = source.trim().split(/\n{2,}/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "essay",
		children: blocks.map((block, index) => {
			const lines = block.split("\n").map((line) => line.trimEnd());
			if (lines.length > 0 && lines.every((line) => line.startsWith("> "))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: inline(lines.map((line) => line.slice(2)).join(" ")) }, index);
			if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: lines.map((line, item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: inline(line.slice(2)) }, item)) }, index);
			if (block.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: inline(block.slice(3).trim()) }, index);
			if (block.startsWith("### ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: inline(block.slice(4).trim()) }, index);
			if (block.trim() === "---") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "mt-8 border-line" }, index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: inline(block.replace(/\n/g, " ").trim()) }, index);
		})
	});
}
//#endregion
export { Markdown as t };
