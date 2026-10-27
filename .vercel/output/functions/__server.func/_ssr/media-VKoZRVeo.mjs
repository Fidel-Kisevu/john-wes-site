import { o as __toESM } from "../_runtime.mjs";
import { $ as require_react, T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as loadEditorMedia, L as removeMedia, U as saveMedia } from "./router-DBUjRO_n.mjs";
import { a as Label, o as TextInput, s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-VKoZRVeo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MediaPage() {
	const state = useDesk("media", () => loadEditorMedia());
	const [alt, setAlt] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Loading media…"
	});
	if (state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-oxblood",
		children: state.error
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display text-4xl",
			children: "Media"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-sm text-muted",
			children: "JPEG, PNG, WebP, or GIF under 1.2 MB. Images are kept with the site, not on a separate disk."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 max-w-lg space-y-3",
			onSubmit: (event) => {
				event.preventDefault();
				const input = event.currentTarget.elements.namedItem("file");
				const file = input instanceof HTMLInputElement ? input.files?.[0] : void 0;
				if (!file) return setMessage("Choose a file.");
				if (file.size > 12e5) return setMessage("Images must be under 1.2 MB.");
				const reader = new FileReader();
				reader.onload = () => {
					const result = String(reader.result ?? "");
					const base64 = result.slice(result.indexOf(",") + 1);
					saveMedia({ data: {
						filename: file.name,
						mime: file.type,
						alt,
						caption,
						base64
					} }).then(() => {
						setMessage("Uploaded.");
						setAlt("");
						setCaption("");
						event.currentTarget.reset();
						state.reload();
					}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not upload."));
				};
				reader.readAsDataURL(file);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "file",
					children: "File"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "file",
					name: "file",
					type: "file",
					accept: "image/jpeg,image/png,image/webp,image/gif",
					className: "block w-full text-sm"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "alt",
					children: "Alternative text"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "alt",
					value: alt,
					onChange: (event) => setAlt(event.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "caption",
					children: "Caption"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "caption",
					value: caption,
					onChange: (event) => setCaption(event.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "h-11 bg-oxblood px-4 text-sm font-semibold text-paper",
					children: "Upload"
				}),
				message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "text-sm",
					children: message
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4",
			children: (state.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.url,
						alt: item.alt,
						className: "aspect-video w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 truncate text-sm",
						children: item.filename
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-1 text-sm text-oxblood",
						onClick: () => void removeMedia({ data: item.id }).then(() => state.reload()),
						children: "Remove"
					})
				]
			}, item.id))
		})
	] });
}
//#endregion
export { MediaPage as component };
