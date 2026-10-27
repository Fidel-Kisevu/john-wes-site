import { o as __toESM } from "../_runtime.mjs";
import { $ as require_react, T as require_jsx_runtime, w as useRouter, x as useRouteContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as loadEditorMedia, G as saveSettings } from "./router-DBUjRO_n.mjs";
import { a as Label, i as ImagePicker, n as Area, o as TextInput, s as useDesk } from "./DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CGmF-7GE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const current = useRouteContext({ from: "__root__" }).settings;
	const media = useDesk("settings-media", () => loadEditorMedia());
	const [form, setForm] = (0, import_react.useState)(current);
	const [message, setMessage] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		setForm(current);
	}, [current]);
	function set(key, value) {
		setForm((item) => ({
			...item,
			[key]: value
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (event) => {
			event.preventDefault();
			setPending(true);
			saveSettings({ data: form }).then(async (result) => {
				if (!result.ok) return setMessage(result.message);
				setMessage("Settings saved.");
				await router.invalidate();
			}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not save.")).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display text-4xl",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "name",
					value: form.ministerName,
					onChange: (event) => set("ministerName", event.target.value)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "title",
					children: "Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "title",
					value: form.professionalTitle,
					onChange: (event) => set("professionalTitle", event.target.value)
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "kicker",
				children: "Kicker"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "kicker",
				value: form.kicker,
				onChange: (event) => set("kicker", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "intro",
				children: "Homepage introduction"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "intro",
				value: form.homepageIntro,
				onChange: (event) => set("homepageIntro", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "quote",
				children: "Pull quote"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "quote",
				value: form.pullQuote,
				onChange: (event) => set("pullQuote", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "summary",
				children: "Short biography"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "summary",
				value: form.biographySummary,
				onChange: (event) => set("biographySummary", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "bio",
				children: "Biography"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "bio",
				value: form.biography,
				onChange: (event) => set("biography", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "interests",
				children: "Areas of attention, one per line"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "interests",
				value: form.interests,
				onChange: (event) => set("interests", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "credentials",
				children: "Note on credentials"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "credentials",
				value: form.credentialsNote,
				onChange: (event) => set("credentialsNote", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
				label: "Portrait",
				value: form.portraitUrl,
				alt: form.portraitAlt,
				media: media.data ?? [],
				onChange: (portraitUrl) => set("portraitUrl", portraitUrl),
				onAlt: (portraitAlt) => set("portraitAlt", portraitAlt)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "email",
				children: "Contact email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "email",
				value: form.contactEmail,
				onChange: (event) => set("contactEmail", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "youtube",
						children: "YouTube"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "youtube",
						value: form.youtubeUrl,
						onChange: (event) => set("youtubeUrl", event.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "x",
						children: "X"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "x",
						value: form.xUrl,
						onChange: (event) => set("xUrl", event.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "facebook",
						children: "Facebook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "facebook",
						value: form.facebookUrl,
						onChange: (event) => set("facebookUrl", event.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "instagram",
						children: "Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "instagram",
						value: form.instagramUrl,
						onChange: (event) => set("instagramUrl", event.target.value)
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "seoTitle",
				children: "SEO title"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "seoTitle",
				value: form.seoTitle,
				onChange: (event) => set("seoTitle", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "seoDescription",
				children: "SEO description"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "seoDescription",
				value: form.seoDescription,
				onChange: (event) => set("seoDescription", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "footer",
				children: "Footer line"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "footer",
				value: form.footerNote,
				onChange: (event) => set("footerNote", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "newsHead",
				children: "Notes heading"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "newsHead",
				value: form.newsletterHeading,
				onChange: (event) => set("newsletterHeading", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "newsBody",
				children: "Notes explanation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "newsBody",
				value: form.newsletterText,
				onChange: (event) => set("newsletterText", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "speaking",
				children: "Speaking note"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "speaking",
				value: form.speakingNote,
				onChange: (event) => set("speakingNote", event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: form.showSampleNotice,
					onChange: (event) => set("showSampleNotice", event.target.checked)
				}), "Show the sample-content notice in the footer"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: pending,
				className: "h-11 bg-oxblood px-4 text-sm font-semibold text-paper",
				children: "Save settings"
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "text-sm",
				children: message
			}) : null
		]
	});
}
//#endregion
export { SettingsPage as component };
