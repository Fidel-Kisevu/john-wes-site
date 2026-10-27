import { o as __toESM } from "./_runtime.mjs";
import { o as slugify } from "./_ssr/content-types-CXscOd2w.mjs";
import { $ as require_react, C as useNavigate, T as require_jsx_runtime, b as Link, w as useRouter, x as useRouteContext } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as saveBook, P as removeBook, S as loadEditorBook, a as Route$6 } from "./_ssr/router-DBUjRO_n.mjs";
import { a as Label, i as ImagePicker, n as Area, o as TextInput, s as useDesk, t as Actions } from "./_ssr/DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CqhRrB7T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookEditor() {
	const { id } = Route$6.useParams();
	const settings = useRouteContext({ from: "__root__" }).settings;
	const state = useDesk(id, () => loadEditorBook({ data: id === "new" ? null : Number(id) }));
	const [form, setForm] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (!state.data) return;
		setForm(state.data.book ?? {
			id: 0,
			title: "",
			slug: "",
			subtitle: "",
			coverImage: "/images/linen.jpg",
			coverAlt: "",
			description: "",
			authorName: settings.ministerName,
			publisher: "",
			publicationYear: "",
			isbn: "",
			price: "",
			currency: "USD",
			purchaseUrl: "",
			featured: false,
			status: "draft",
			seoTitle: "",
			seoDescription: ""
		});
	}, [state.data, settings.ministerName]);
	if (state.loading || !form || !state.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: state.error || "Loading book…"
	});
	if (id !== "new" && !state.data.book) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That book is not on the desk." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (event) => {
			event.preventDefault();
			const status = event.nativeEvent.submitter?.value === "published" ? "published" : "draft";
			setPending(true);
			saveBook({ data: {
				...form,
				id: id === "new" ? null : Number(id),
				status
			} }).then(async (result) => {
				if (!result.ok) return setMessage(result.message);
				setMessage(status === "published" ? "Published." : "Draft saved.");
				await router.invalidate();
				if (id === "new") await navigate({
					to: "/admin/books/$id",
					params: { id: String(result.id) }
				});
				else state.reload();
			}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not save.")).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: id === "new" ? "New book" : "Edit book"
				}), id !== "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/preview/$kind/$id",
					params: {
						kind: "book",
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
					slug: form.slug || slugify(event.target.value)
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
				htmlFor: "subtitle",
				children: "Subtitle"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "subtitle",
				value: form.subtitle,
				onChange: (event) => setForm({
					...form,
					subtitle: event.target.value
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
				label: "Cover",
				value: form.coverImage,
				alt: form.coverAlt,
				media: state.data.media,
				onChange: (coverImage) => setForm({
					...form,
					coverImage
				}),
				onAlt: (coverAlt) => setForm({
					...form,
					coverAlt
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "author",
						children: "Author"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "author",
						value: form.authorName,
						onChange: (event) => setForm({
							...form,
							authorName: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "publisher",
						children: "Publisher"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "publisher",
						value: form.publisher,
						onChange: (event) => setForm({
							...form,
							publisher: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "year",
						children: "Year"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "year",
						value: form.publicationYear,
						onChange: (event) => setForm({
							...form,
							publicationYear: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "isbn",
						children: "ISBN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "isbn",
						value: form.isbn,
						onChange: (event) => setForm({
							...form,
							isbn: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "price",
						children: "Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "price",
						value: form.price,
						onChange: (event) => setForm({
							...form,
							price: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "currency",
						children: "Currency"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "currency",
						value: form.currency,
						onChange: (event) => setForm({
							...form,
							currency: event.target.value
						})
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "purchase",
				children: "Purchase URL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "purchase",
				value: form.purchaseUrl,
				onChange: (event) => setForm({
					...form,
					purchaseUrl: event.target.value
				})
			})] }),
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
				onDelete: id === "new" ? void 0 : () => void removeBook({ data: Number(id) }).then(() => navigate({ to: "/admin/books" }))
			})
		]
	});
}
//#endregion
export { BookEditor as component };
