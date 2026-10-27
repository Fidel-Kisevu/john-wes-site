import { o as __toESM } from "./_runtime.mjs";
import { o as slugify } from "./_ssr/content-types-CXscOd2w.mjs";
import { $ as require_react, C as useNavigate, T as require_jsx_runtime, b as Link, w as useRouter, x as useRouteContext } from "./_libs/@tanstack/react-router+[...].mjs";
import { O as loadEditorMessage, R as removeMessage, W as saveMessage, r as Route$2 } from "./_ssr/router-DBUjRO_n.mjs";
import { a as Label, i as ImagePicker, n as Area, o as TextInput, s as useDesk, t as Actions } from "./_ssr/DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CAblrexj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MessageEditor() {
	const { id } = Route$2.useParams();
	const settings = useRouteContext({ from: "__root__" }).settings;
	const state = useDesk(id, () => loadEditorMessage({ data: id === "new" ? null : Number(id) }));
	const [form, setForm] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (!state.data) return;
		setForm(state.data.message ?? {
			id: 0,
			title: "",
			slug: "",
			description: "",
			videoUrl: "",
			thumbnail: "/images/lectern.jpg",
			thumbnailAlt: "",
			speaker: settings.ministerName,
			recordedOn: "",
			duration: "",
			series: "",
			scripture: "",
			categoryId: null,
			categoryName: "",
			featured: false,
			status: "draft",
			seoTitle: "",
			seoDescription: ""
		});
	}, [state.data, settings.ministerName]);
	if (state.loading || !form || !state.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: state.error || "Loading message…"
	});
	if (id !== "new" && !state.data.message) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That message is not on the desk." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (event) => {
			event.preventDefault();
			const status = event.nativeEvent.submitter?.value === "published" ? "published" : "draft";
			setPending(true);
			saveMessage({ data: {
				...form,
				id: id === "new" ? null : Number(id),
				status,
				categoryId: form.categoryId
			} }).then(async (result) => {
				if (!result.ok) return setMessage(result.message);
				setMessage(status === "published" ? "Published." : "Draft saved.");
				await router.invalidate();
				if (id === "new") await navigate({
					to: "/admin/messages/$id",
					params: { id: String(result.id) }
				});
				else state.reload();
			}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not save.")).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: id === "new" ? "New message" : "Edit message"
				}), id !== "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/preview/$kind/$id",
					params: {
						kind: "message",
						id
					},
					className: "text-sm text-oxblood",
					children: "Preview"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "title",
				children: "Title"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "title",
				value: form.title,
				onChange: (event) => setForm({
					...form,
					title: event.target.value,
					slug: slugify(event.target.value)
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "slug",
				children: "Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "slug",
				value: form.slug,
				onChange: (event) => setForm({
					...form,
					slug: slugify(event.target.value)
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "description",
				children: "Description"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "description",
				value: form.description,
				onChange: (event) => setForm({
					...form,
					description: event.target.value
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "video",
				children: "Video URL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "video",
				value: form.videoUrl,
				placeholder: "https://www.youtube.com/watch?v=",
				onChange: (event) => setForm({
					...form,
					videoUrl: event.target.value
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
				label: "Thumbnail",
				value: form.thumbnail,
				alt: form.thumbnailAlt,
				media: state.data.media,
				onChange: (thumbnail) => setForm({
					...form,
					thumbnail
				}),
				onAlt: (thumbnailAlt) => setForm({
					...form,
					thumbnailAlt
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "speaker",
						children: "Speaker"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "speaker",
						value: form.speaker,
						onChange: (event) => setForm({
							...form,
							speaker: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "date",
						children: "Recorded on"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "date",
						type: "date",
						value: form.recordedOn,
						onChange: (event) => setForm({
							...form,
							recordedOn: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "duration",
						children: "Duration"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "duration",
						value: form.duration,
						onChange: (event) => setForm({
							...form,
							duration: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "series",
						children: "Series"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "series",
						value: form.series,
						onChange: (event) => setForm({
							...form,
							series: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "scripture",
						children: "Scripture"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "scripture",
						value: form.scripture,
						onChange: (event) => setForm({
							...form,
							scripture: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "category",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "category",
						className: "field",
						value: form.categoryId ?? "",
						onChange: (event) => setForm({
							...form,
							categoryId: event.target.value ? Number(event.target.value) : null
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "None"
						}), state.data.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: category.id,
							children: category.name
						}, category.id))]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: form.featured,
					onChange: (event) => setForm({
						...form,
						featured: event.target.checked
					})
				}), "Feature on the homepage"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, {
				pending,
				message,
				onDelete: id === "new" ? void 0 : () => void removeMessage({ data: Number(id) }).then(() => navigate({ to: "/admin/messages" }))
			})
		]
	});
}
//#endregion
export { MessageEditor as component };
