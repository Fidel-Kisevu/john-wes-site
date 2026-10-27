import { o as __toESM } from "../_runtime.mjs";
import { a as safeHttpUrl, s as youtubeId } from "./content-types-CXscOd2w.mjs";
import { $ as require_react, T as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as sendContact, y as joinNotes } from "./router-DBUjRO_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engage-DRa29nHd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VideoEmbed({ url, title, poster }) {
	const id = youtubeId(url);
	const [play, setPlay] = (0, import_react.useState)(false);
	if (!url) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ratio-wide relative flex items-end overflow-hidden bg-paper-2 p-6",
		children: [poster ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: poster,
			alt: "",
			className: "absolute inset-0 h-full w-full object-cover"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "relative bg-ivory/90 px-3 py-2 text-sm text-ink",
			children: "Recording to be added."
		})]
	});
	if (!id) {
		const href = safeHttpUrl(url);
		if (!href) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "inline-block border-b border-oxblood text-oxblood",
			rel: "noopener noreferrer",
			children: "Open the recording"
		});
	}
	if (!play) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setPlay(true),
		className: "ratio-wide relative block w-full overflow-hidden bg-ink text-left",
		children: [poster ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: poster,
			alt: "",
			className: "h-full w-full object-cover opacity-90"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute bottom-4 left-4 bg-ivory px-4 py-2 text-sm text-ink",
			children: "Play recording"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ratio-wide bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			className: "h-full w-full",
			src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
			title,
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
			allowFullScreen: true
		})
	});
}
function ShareRow({ title }) {
	const [href, setHref] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setHref(window.location.href);
	}, []);
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Share"
	});
	const url = encodeURIComponent(href);
	const text = encodeURIComponent(title);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex flex-wrap gap-4 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "border-b border-line hover:border-oxblood",
				href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
				children: "Share on X"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "border-b border-line hover:border-oxblood",
				href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
				children: "Facebook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "border-b border-line hover:border-oxblood",
				href: `mailto:?subject=${text}&body=${url}`,
				children: "Email"
			})
		]
	});
}
function NotesForm({ heading, text }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-3xl md:text-4xl",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (event) => {
					event.preventDefault();
					setStatus("saving");
					joinNotes({ data: {
						email,
						company
					} }).then((result) => {
						if (!result.ok) {
							setStatus("error");
							setMessage(result.message);
							return;
						}
						setStatus("done");
						setMessage("Saved on this site. No letter will be sent until a mailing service is connected.");
						setEmail("");
					}).catch(() => {
						setStatus("error");
						setMessage("Could not save that address. Try again.");
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm",
						htmlFor: "notes-email",
						children: "Email address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "notes-email",
							type: "email",
							required: true,
							autoComplete: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							className: "field sm:flex-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "saving",
							className: "inline-flex h-11 items-center justify-center bg-oxblood px-5 text-sm font-semibold text-paper disabled:opacity-60",
							children: status === "saving" ? "Saving" : "Keep me posted"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "hp",
						htmlFor: "notes-company",
						children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "notes-company",
							value: company,
							onChange: (event) => setCompany(event.target.value),
							tabIndex: -1,
							autoComplete: "off"
						})]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: status === "error" ? "text-sm text-oxblood" : "text-sm text-ink",
						children: message
					}) : null
				]
			})]
		})
	});
}
var ENQUIRIES = [
	"Speaking",
	"Writing",
	"Media",
	"General"
];
function ContactForm() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		enquiryType: "Speaking",
		message: "",
		company: ""
	});
	const [fields, setFields] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	function set(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		noValidate: true,
		onSubmit: (event) => {
			event.preventDefault();
			setStatus("saving");
			setFields({});
			sendContact({ data: form }).then((result) => {
				if (!result.ok) {
					setStatus("error");
					setMessage(result.message);
					setFields(result.fields ?? {});
					return;
				}
				setStatus("done");
				setMessage(result.saved ? "Saved for the minister. Email delivery is not configured, so this note stays on the site rather than arriving in an inbox." : "Thank you.");
				setForm({
					name: "",
					email: "",
					enquiryType: "Speaking",
					message: "",
					company: ""
				});
			}).catch(() => {
				setStatus("error");
				setMessage("Could not save the note. Try again in a moment.");
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Name",
				id: "contact-name",
				error: fields.name,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "contact-name",
					className: "field",
					autoComplete: "name",
					value: form.name,
					onChange: (event) => set("name", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				id: "contact-email",
				error: fields.email,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "contact-email",
					type: "email",
					className: "field",
					autoComplete: "email",
					value: form.email,
					onChange: (event) => set("email", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Enquiry",
				id: "contact-type",
				error: fields.enquiryType,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "contact-type",
					className: "field",
					value: form.enquiryType,
					onChange: (event) => set("enquiryType", event.target.value),
					children: ENQUIRIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				id: "contact-message",
				error: fields.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "contact-message",
					className: "field",
					value: form.message,
					onChange: (event) => set("message", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "hp",
				htmlFor: "contact-company",
				children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "contact-company",
					value: form.company,
					onChange: (event) => set("company", event.target.value),
					tabIndex: -1,
					autoComplete: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "saving",
				className: "inline-flex h-11 items-center bg-oxblood px-5 text-sm font-semibold text-paper disabled:opacity-60",
				children: status === "saving" ? "Sending" : "Send the note"
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: status === "error" ? "text-sm text-oxblood" : "text-sm text-ink",
				children: message
			}) : null
		]
	});
}
function Field({ label, id, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "mb-1 block text-sm",
			children: label
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-oxblood",
			children: error
		}) : null
	] });
}
//#endregion
export { VideoEmbed as i, NotesForm as n, ShareRow as r, ContactForm as t };
