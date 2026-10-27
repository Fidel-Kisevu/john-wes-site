import { o as __toESM } from "../_runtime.mjs";
import { o as slugify } from "./content-types-CXscOd2w.mjs";
import { $ as require_react, T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as removeCategory, V as saveCategory, w as loadEditorCategories } from "./router-DBUjRO_n.mjs";
import { a as Label, o as TextInput, s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-CIwt-lPC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoriesPage() {
	const state = useDesk("categories", () => loadEditorCategories());
	const [name, setName] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading categories…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Categories"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 divide-y divide-line",
			children: (state.data ?? []).map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: category.description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-oxblood",
					onClick: () => void removeCategory({ data: category.id }).then(() => state.reload()),
					children: "Remove"
				})]
			}, category.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 max-w-lg space-y-3",
			onSubmit: (event) => {
				event.preventDefault();
				saveCategory({ data: {
					name,
					slug: slugify(name),
					description
				} }).then((result) => {
					if (!result.ok) return setMessage(result.message);
					setName("");
					setDescription("");
					setMessage("Added.");
					state.reload();
				}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not add."));
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl",
					children: "Add a category"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "name",
					value: name,
					onChange: (event) => setName(event.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "description",
					children: "Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "description",
					value: description,
					onChange: (event) => setDescription(event.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "h-11 bg-oxblood px-4 text-sm font-semibold text-paper",
					children: "Add"
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "text-sm",
					children: message
				}) : null
			]
		})
	] });
}
//#endregion
export { CategoriesPage as component };
