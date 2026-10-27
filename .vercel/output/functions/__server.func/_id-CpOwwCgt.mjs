import { o as __toESM } from "./_runtime.mjs";
import { o as slugify } from "./_ssr/content-types-CXscOd2w.mjs";
import { $ as require_react, C as useNavigate, T as require_jsx_runtime, b as Link, w as useRouter, x as useRouteContext } from "./_libs/@tanstack/react-router+[...].mjs";
import { N as removeArticle, b as loadEditorArticle, o as Route$8, z as saveArticle } from "./_ssr/router-DBUjRO_n.mjs";
import { a as Label, i as ImagePicker, n as Area, o as TextInput, s as useDesk, t as Actions } from "./_ssr/DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CpOwwCgt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fromArticle(article) {
	return {
		title: article.title,
		slug: article.slug,
		excerpt: article.excerpt,
		body: article.body,
		heroImage: article.heroImage,
		heroAlt: article.heroAlt,
		categoryId: article.categoryId ? String(article.categoryId) : "",
		authorName: article.authorName,
		featured: article.featured,
		seoTitle: article.seoTitle,
		seoDescription: article.seoDescription,
		publishedOn: article.publishedAt ? article.publishedAt.slice(0, 10) : "",
		slugTouched: true
	};
}
function ArticleEditor() {
	const { id } = Route$8.useParams();
	const settings = useRouteContext({ from: "__root__" }).settings;
	const state = useDesk(id, () => loadEditorArticle({ data: id === "new" ? null : Number(id) }));
	const [form, setForm] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (!state.data) return;
		if (state.data.article) setForm(fromArticle(state.data.article));
		else setForm({
			title: "",
			slug: "",
			excerpt: "",
			body: "",
			heroImage: "/images/desk.jpg",
			heroAlt: "A writing desk in morning light",
			categoryId: "",
			authorName: settings.ministerName,
			featured: false,
			seoTitle: "",
			seoDescription: "",
			publishedOn: "",
			slugTouched: false
		});
	}, [state.data, settings.ministerName]);
	if (state.loading || !form || !state.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: state.error || "Loading essay…"
	});
	if (id !== "new" && !state.data.article) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That essay is not on the desk." });
	const categories = state.data.categories;
	const media = state.data.media;
	function patch(partial) {
		setForm((current) => current ? {
			...current,
			...partial
		} : current);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (event) => {
			event.preventDefault();
			const status = event.nativeEvent.submitter?.value === "published" ? "published" : "draft";
			setPending(true);
			setMessage("");
			saveArticle({ data: {
				id: id === "new" ? null : Number(id),
				...form,
				categoryId: form.categoryId ? Number(form.categoryId) : null,
				status
			} }).then(async (result) => {
				if (!result.ok) {
					setMessage(result.message);
					return;
				}
				setMessage(status === "published" ? "Published." : "Draft saved. It is not on the public site.");
				await router.invalidate();
				if (id === "new") await navigate({
					to: "/admin/articles/$id",
					params: { id: String(result.id) }
				});
				else state.reload();
			}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not save.")).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl",
					children: id === "new" ? "New essay" : "Edit essay"
				}), id !== "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/preview/$kind/$id",
					params: {
						kind: "article",
						id
					},
					className: "text-sm text-oxblood",
					children: "Preview"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Blank line between paragraphs. Start a line with ## for a heading, ",
					">",
					" for a quotation, or - for a list."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "title",
				children: "Title"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "title",
				value: form.title,
				onChange: (event) => {
					const title = event.target.value;
					patch(form.slugTouched ? { title } : {
						title,
						slug: slugify(title)
					});
				}
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "slug",
				children: "Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "slug",
				value: form.slug,
				onChange: (event) => patch({
					slug: slugify(event.target.value),
					slugTouched: true
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "excerpt",
				children: "Summary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "excerpt",
				value: form.excerpt,
				onChange: (event) => patch({ excerpt: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "body",
				children: "Body"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "body",
				value: form.body,
				onChange: (event) => patch({ body: event.target.value }),
				className: "field min-h-80"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
				label: "Hero image",
				value: form.heroImage,
				alt: form.heroAlt,
				media,
				onChange: (heroImage) => patch({ heroImage }),
				onAlt: (heroAlt) => patch({ heroAlt })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "category",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "category",
						className: "field",
						value: form.categoryId,
						onChange: (event) => patch({ categoryId: event.target.value }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "None"
						}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: category.id,
							children: category.name
						}, category.id))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "author",
						children: "Author"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "author",
						value: form.authorName,
						onChange: (event) => patch({ authorName: event.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "date",
						children: "Publication date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "date",
						type: "date",
						value: form.publishedOn,
						onChange: (event) => patch({ publishedOn: event.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-7 flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: form.featured,
							onChange: (event) => patch({ featured: event.target.checked })
						}), "Feature on the homepage"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "seo-title",
				children: "SEO title"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "seo-title",
				value: form.seoTitle,
				onChange: (event) => patch({ seoTitle: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "seo-desc",
				children: "SEO description"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				id: "seo-desc",
				value: form.seoDescription,
				onChange: (event) => patch({ seoDescription: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, {
				pending,
				message,
				onDelete: id === "new" ? void 0 : () => {
					removeArticle({ data: Number(id) }).then(() => navigate({ to: "/admin/articles" }));
				}
			})
		]
	});
}
//#endregion
export { ArticleEditor as component };
