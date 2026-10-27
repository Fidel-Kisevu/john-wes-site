import { o as __toESM } from "../_runtime.mjs";
import { t as STOCK } from "./content-types-CXscOd2w.mjs";
import { $ as require_react, T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCurrentUserState } from "./use-current-user-B7Cbrtsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DeskFields-D6z4ybav.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useDesk(key, load) {
	const { user } = useCurrentUserState();
	const [tick, setTick] = (0, import_react.useState)(0);
	const [data, setData] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!user?.id) return;
		let cancel = false;
		setLoading(true);
		load().then((value) => {
			if (!cancel) {
				setData(value);
				setError("");
			}
		}).catch((reason) => {
			if (!cancel) setError(reason instanceof Error ? reason.message : "Could not open this desk.");
		}).finally(() => {
			if (!cancel) setLoading(false);
		});
		return () => {
			cancel = true;
		};
	}, [
		user?.id,
		key,
		tick
	]);
	return {
		data,
		error,
		loading,
		reload: () => setTick((value) => value + 1)
	};
}
function DeskNote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-6 border border-line bg-paper px-4 py-3 text-sm text-muted",
		children
	});
}
function Label({ children, htmlFor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor,
		className: "mb-1 block text-sm",
		children
	});
}
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "field"
	});
}
function Area(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: "field"
	});
}
function Actions({ pending, message, onDelete }) {
	const [armed, setArmed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				name: "intent",
				value: "draft",
				disabled: pending,
				className: "h-11 border border-line bg-paper px-4 text-sm",
				children: "Save draft"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				name: "intent",
				value: "published",
				disabled: pending,
				className: "h-11 bg-oxblood px-4 text-sm font-semibold text-paper",
				children: "Publish"
			}),
			onDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "h-11 px-4 text-sm text-oxblood",
				onClick: () => {
					if (!armed) {
						setArmed(true);
						return;
					}
					onDelete();
				},
				children: armed ? "Confirm delete" : "Delete"
			}) : null,
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "text-sm",
				children: message
			}) : null
		]
	});
}
function ImagePicker({ label, value, alt, media, onChange, onAlt }) {
	const options = [...STOCK.map((item) => ({
		url: item.src,
		alt: item.alt
	})), ...media.map((item) => ({
		url: item.url,
		alt: item.alt || item.filename
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "text-sm",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-2 overflow-x-auto pb-2",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": option.alt,
				onClick: () => {
					onChange(option.url);
					if (!alt) onAlt(option.alt);
				},
				className: value === option.url ? "shrink-0 border-2 border-oxblood p-0.5" : "shrink-0 border border-line p-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: option.url,
					alt: "",
					className: "h-16 w-20 object-cover"
				})
			}, option.url))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "field",
			value,
			onChange: (event) => onChange(event.target.value),
			"aria-label": `${label} address`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 block text-sm",
			children: ["Alternative text", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "field mt-1",
				value: alt,
				onChange: (event) => onAlt(event.target.value)
			})]
		})
	] });
}
//#endregion
export { Label as a, ImagePicker as i, Area as n, TextInput as o, DeskNote as r, useDesk as s, Actions as t };
