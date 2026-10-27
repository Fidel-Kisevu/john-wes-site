import { o as __toESM } from "./_runtime.mjs";
import { o as slugify } from "./_ssr/content-types-CXscOd2w.mjs";
import { $ as require_react, C as useNavigate, T as require_jsx_runtime, w as useRouter } from "./_libs/@tanstack/react-router+[...].mjs";
import { H as saveEvent, I as removeEvent, T as loadEditorEvent, i as Route$4 } from "./_ssr/router-DBUjRO_n.mjs";
import { a as Label, n as Area, o as TextInput, s as useDesk } from "./_ssr/DeskFields-D6z4ybav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-BuIay8ul.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventEditor() {
	const { id } = Route$4.useParams();
	const state = useDesk(id, () => loadEditorEvent({ data: id === "new" ? null : Number(id) }));
	const [form, setForm] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [armed, setArmed] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (!state.data) return;
		setForm(state.data.event ?? {
			id: 0,
			title: "",
			slug: "",
			description: "",
			startsOn: "",
			endsOn: "",
			whenLabel: "",
			timeZone: "Africa/Nairobi",
			venue: "",
			registrationUrl: "",
			status: "scheduled",
			upcoming: true
		});
	}, [state.data]);
	if (state.loading || !form || !state.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: state.error || "Loading event…"
	});
	if (id !== "new" && !state.data.event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That event is not on the desk." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (event) => {
			event.preventDefault();
			setPending(true);
			saveEvent({ data: {
				...form,
				id: id === "new" ? null : Number(id)
			} }).then(async (result) => {
				if (!result.ok) return setMessage(result.message);
				setMessage("Saved.");
				await router.invalidate();
				if (id === "new") await navigate({
					to: "/admin/events/$id",
					params: { id: String(result.id) }
				});
			}).catch((reason) => setMessage(reason instanceof Error ? reason.message : "Could not save.")).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display text-4xl",
				children: id === "new" ? "New event" : "Edit event"
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
				htmlFor: "when",
				children: "Date as visitors should read it"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "when",
				value: form.whenLabel,
				onChange: (event) => setForm({
					...form,
					whenLabel: event.target.value
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "start",
						children: "Starts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "start",
						type: "date",
						value: form.startsOn,
						onChange: (event) => setForm({
							...form,
							startsOn: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "end",
						children: "Ends"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "end",
						type: "date",
						value: form.endsOn,
						onChange: (event) => setForm({
							...form,
							endsOn: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "zone",
						children: "Time zone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "zone",
						value: form.timeZone,
						onChange: (event) => setForm({
							...form,
							timeZone: event.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "venue",
						children: "Venue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "venue",
						value: form.venue,
						onChange: (event) => setForm({
							...form,
							venue: event.target.value
						})
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "reg",
				children: "Registration URL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				id: "reg",
				value: form.registrationUrl,
				onChange: (event) => setForm({
					...form,
					registrationUrl: event.target.value
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
				htmlFor: "status",
				children: "Status"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "status",
				className: "field",
				value: form.status,
				onChange: (event) => setForm({
					...form,
					status: event.target.value === "cancelled" ? "cancelled" : "scheduled"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "scheduled",
					children: "Scheduled"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "cancelled",
					children: "Cancelled"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: pending,
						className: "h-11 bg-oxblood px-4 text-sm font-semibold text-paper",
						children: "Save"
					}),
					id !== "new" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 px-4 text-sm text-oxblood",
						onClick: () => {
							if (!armed) return setArmed(true);
							removeEvent({ data: Number(id) }).then(() => navigate({ to: "/admin/events" }));
						},
						children: armed ? "Confirm delete" : "Delete"
					}) : null,
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: "text-sm",
						children: message
					}) : null
				]
			})
		]
	});
}
//#endregion
export { EventEditor as component };
