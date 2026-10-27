import { o as __toESM } from "../_runtime.mjs";
import { $ as require_react, Q as notFound, T as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, w as useRouter, x as useRouteContext, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn, s as __exportAll } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-B1SXvDvZ.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { n as auth } from "./server-C1fgOowX.mjs";
import { i as Menu, n as TriangleAlert, r as Search, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-G5fnZ7va.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function idOrNull(value) {
	if (value == null || value === "" || value === "new") return null;
	const id = typeof value === "number" ? value : Number(value);
	if (!Number.isInteger(id) || id <= 0) throw new Error("That record could not be found.");
	return id;
}
var loadSettings = createServerFn({ method: "GET" }).handler(createSsrRpc("b8946a541fac14fc1b965f4027c5023bf55e7c213556a2ebb25c2b76af6fe7a8"));
var loadHome = createServerFn({ method: "GET" }).handler(createSsrRpc("d13a6226884d00a5aa2a1cb99c13909d54e38ab85194c3de5304c70b9ed67ed0"));
var loadArticles = createServerFn({ method: "GET" }).validator((category) => typeof category === "string" ? category.slice(0, 80) : "").handler(createSsrRpc("d6a6bf4c3d5911ee74368a35b3595f6fedfae12ffc15f6ded15862b0e26a447a"));
var loadArticle = createServerFn({ method: "GET" }).validator((slug) => {
	if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
	return slug;
}).handler(createSsrRpc("0d3c0240187805dfa18c7bdbf97a26645455f29da652f82bdacefb69e571d4fa"));
var loadBooks = createServerFn({ method: "GET" }).handler(createSsrRpc("e3d9677d1d17fcc942792d84e04a9dd1aae7baceb83f4646704c14824e5ca794"));
var loadBook = createServerFn({ method: "GET" }).validator((slug) => {
	if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
	return slug;
}).handler(createSsrRpc("effc6331e780b1ed81827741319bf8ebf1465c9d142ea3badc91bc6403cc3580"));
var loadMessages = createServerFn({ method: "GET" }).validator((series) => typeof series === "string" ? series.slice(0, 80) : "").handler(createSsrRpc("58692229f331ae54fe0218414393566b26ae0104f6fea96ae2decd6fcef99918"));
var loadMessage = createServerFn({ method: "GET" }).validator((slug) => {
	if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
	return slug;
}).handler(createSsrRpc("8f35cfa4b4ae73c416be6e69355aaed36dba53e711dde927db655198f16f8bd3"));
var loadEvents = createServerFn({ method: "GET" }).handler(createSsrRpc("f5bae382610876c7f1fca15d71fae740d69f398cc7d1ad3a49616522a789486d"));
var loadSearch = createServerFn({ method: "GET" }).validator((query) => typeof query === "string" ? query.slice(0, 120) : "").handler(createSsrRpc("79c007f467d30932ecff231530ea9f8fe0a93cbd9756a03669f880aaf99c25ce"));
createServerFn({ method: "GET" }).handler(createSsrRpc("d9a4512ee697b997c4ef6335552808e47b524ec4abf73990483d35386c195c7d"));
var sendContact = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("d3353cb2b1b1799edd14dc14ef392691062da5be30a51852cea62da3fe89c601"));
var joinNotes = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("7f703a376ac460908454b5fbbf49103e29db2168c7ce5e9a39b2fa0081e6c81b"));
var loadOverview = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("13f335d0811a07211273fc97397ec414dc0f6b1727858b89ea1968e3d1818f96"));
var loadEditorArticles = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("1edaeb1510a78e9f9894caa4998717a7fa580e31333f2099aab33393677bff27"));
var loadEditorArticle = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => idOrNull(id)).handler(createSsrRpc("70411811feb81418fc72b39185ec1c2445eb1b7af226655d0dbff2b7c7ecff0b"));
var saveArticle = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("5b17516c5e9dfa55d19b87155ad5d590525197d06ada58c0e9b45c5530d3e5d6"));
var removeArticle = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That essay could not be found.");
	return parsed;
}).handler(createSsrRpc("5023b2cfcabd23c2f9637634b3a9499dc8163baf90801f65b79bc939e201f070"));
var loadEditorBooks = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("2c128e6bfb68726cde4c34be41ee107cddf5162be6c64057d39e7dbfbcd12212"));
var loadEditorBook = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => idOrNull(id)).handler(createSsrRpc("a7464fea761507320f59573e9ba1f564e0c2da4d7d75654c240eb7d76cabe7ad"));
var saveBook = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("075ba63a8731ae2c4a9d42f6ec327ed4e6111799e6ff198e963fd51e50e9a998"));
var removeBook = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That book could not be found.");
	return parsed;
}).handler(createSsrRpc("635facf10b97bfa1442fa1cf9c2ed75d50ce6cffeaa2393898d814cfc35544b0"));
var loadEditorMessages = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("6d3af33e052227c2cf4e79992f5fdcd8d42922b6d0cb219f417469138186046f"));
var loadEditorMessage = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => idOrNull(id)).handler(createSsrRpc("0804b7230edca327997c6aeae1fb1bfeff68cfb7fd2972ab93f3239dcb7dc8bb"));
var saveMessage = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("80461b3fb17647db5b274b0a22dd222129a9f84d3f54622bc67540c13e96f450"));
var removeMessage = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That message could not be found.");
	return parsed;
}).handler(createSsrRpc("5b078bb83b51cb3ac735dc6dc64459ebe63f618d925ff39b6356d9f3608e2e54"));
var loadEditorEvents = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("66b26fded88387a9b6aa641507f48aa8bd57a730028d549c4b4be30d49c81722"));
var loadEditorEvent = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => idOrNull(id)).handler(createSsrRpc("8eef66bb8c3744de3c7b51cafb2061fd3012c2adf9ccc7fcee776e3f35095353"));
var saveEvent = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("cda0374784f44f25bc413e2e32c9bcda22f282529a1fccfa18c49337776710d4"));
var removeEvent = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That event could not be found.");
	return parsed;
}).handler(createSsrRpc("1cfb54e68e4f49fc527c413fbfc449d60b1747e88009dedcac42e371befd94a3"));
var loadEditorCategories = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("5ae839efe26a2c0985881b84663b37f6d782938d45637671f1400e8ad1cc9da9"));
var saveCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("e83ffe87c77cb367109a3fb42be9f3f2152d303706e3b637b3da3f6fc41e4eea"));
var removeCategory = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That category could not be found.");
	return parsed;
}).handler(createSsrRpc("6b9ce3d06d5e20ff0145953ff5dec60e455ecfdaea0c67a87eedd7802cb81845"));
var loadEditorMedia = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("825763905b9ebbd6dd9b02064f56d648a56c99144a0165fef7fdd7ed3e61403c"));
var saveMedia = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("139bce72a6d30183b71bb0244b3e44ee1ecadca11d66fbe2c99cb92653c5427b"));
var removeMedia = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => {
	const parsed = idOrNull(id);
	if (parsed == null) throw new Error("That image could not be found.");
	return parsed;
}).handler(createSsrRpc("821de3b7292757afac80b4a8c30e83b07b30cfdd95a22206b97139525a0ca874"));
var saveSettings = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("a04324fdbd48ff783e370f6536919b37bd03ae12edeb0d9cc7ae5270f588acf1"));
var loadEnquiries = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("5bbd1971e6ed3420d6621fa7c9091fee06fe97ea0fbe73cc6641e47d1bebabd9"));
var loadPreview = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((input) => {
	const value = input ?? {};
	const kind = value.kind === "book" || value.kind === "message" || value.kind === "article" ? value.kind : null;
	const id = idOrNull(value.id);
	if (!kind || id == null) throw new Error("That preview could not be found.");
	return {
		kind,
		id
	};
}).handler(createSsrRpc("aef042a21d4b0a7f0602c8f54d0d186dedbdb480b92e9e0a6878d05711a491ab"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFrame-S6zfLYGH.js
function useSettings$1() {
	return useRouteContext({ from: "__root__" }).settings;
}
function SocialLinkItem({ label, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "hover:text-oxblood",
		rel: "noopener noreferrer",
		children: label
	}) }, label);
}
function SiteFooterView({ settings, socials }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl",
						children: settings.ministerName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-muted",
						children: settings.footerNote
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Ministry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-oxblood",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "hover:text-oxblood",
							children: "Speaking"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-oxblood",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resources",
							className: "hover:text-oxblood",
							children: "Resources"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hover:text-oxblood",
							children: "Editor"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Elsewhere"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [socials.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinkItem, {
						label,
						href
					}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${settings.contactEmail}`,
						className: "hover:text-oxblood",
						children: settings.contactEmail
					}) })]
				})] })
			]
		}), settings.showSampleNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto max-w-6xl px-5 pb-8 text-sm text-muted",
			children: "Illustrative sample for a fictional minister. Replace the biography, essays, books, and recordings before a public launch."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6" })]
	});
}
function SiteFooter() {
	const settings = useSettings$1();
	const socials = [
		["YouTube", settings.youtubeUrl],
		["X", settings.xUrl],
		["Facebook", settings.facebookUrl],
		["Instagram", settings.instagramUrl]
	].filter((item) => Boolean(item[1]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooterView, {
		settings,
		socials
	});
}
var NAV = [
	{
		to: "/articles",
		label: "Essays"
	},
	{
		to: "/books",
		label: "Books"
	},
	{
		to: "/messages",
		label: "Messages"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/about",
		label: "About"
	}
];
function useSettings() {
	return useRouteContext({ from: "__root__" }).settings;
}
function SkipToContentLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#content",
		className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2",
		children: "Skip to content"
	});
}
function NavLinkItem({ item, path }) {
	const on = path === item.to || path.startsWith(`${item.to}/`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		"aria-current": on ? "page" : void 0,
		className: on ? "text-sm text-oxblood" : "text-sm text-ink hover:text-oxblood",
		children: item.label
	}, item.to);
}
function MobileNavPanel({ path }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		id: "mobile-nav",
		"aria-label": "Mobile",
		className: "border-t border-line bg-ivory px-5 py-6 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "space-y-1",
			children: [
				NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "block py-3 font-serif text-3xl",
					children: item.label
				}) }, item.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/search",
					search: { q: "" },
					className: "block py-3 font-serif text-3xl",
					children: "Search"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "block py-3 font-serif text-3xl",
					children: "Contact"
				}) })
			]
		})
	});
}
function SiteHeaderView({ settings, path, open, onToggleMenu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipToContentLink, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs tracking-widest text-muted uppercase",
							children: "Minister"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display block truncate text-2xl text-ink",
							children: settings.ministerName.replace(/^Minister\s+/i, "") || settings.ministerName
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 md:flex",
						"aria-label": "Primary",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinkItem, {
							item,
							path
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							search: { q: "" },
							"aria-label": "Search",
							className: "text-ink hover:text-oxblood",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-5",
								strokeWidth: 1.75
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center md:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: onToggleMenu,
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavPanel, { path }) : null
		]
	});
}
function SiteHeader() {
	const settings = useSettings();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeaderView, {
		settings,
		path,
		open,
		onToggleMenu: () => setOpen((value) => !value)
	});
}
function SiteFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DBUjRO_n.js
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-ivory px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-oxblood",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-2xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Missing({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-oxblood",
				children: "Not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-3 text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-block border-b border-oxblood text-oxblood",
				children: "Return home"
			})
		]
	}) });
}
var styles_default = "/assets/styles-DhpX1evs.css";
var Route$32 = createRootRoute({
	beforeLoad: async () => ({ settings: await loadSettings() }),
	head: ({ match }) => {
		const settings = match.context?.settings;
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: settings?.seoTitle || "Minister Benja" },
				{
					name: "description",
					content: settings?.seoDescription || "Essays, books, and messages from Minister Benja."
				},
				{
					name: "theme-color",
					content: "#f3eee6"
				}
			],
			links: [
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg"
				},
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "manifest",
					href: "/__grok/manifest.webmanifest"
				},
				{
					rel: "apple-touch-icon",
					href: "/__grok/icon-180.png"
				}
			]
		};
	},
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Missing, {
		title: "This page is not on the shelf.",
		body: "The address may be mistyped, or the piece is still a draft and not public."
	})
});
var $$splitComponentImporter$27 = () => import("./routes-BXurP_wQ.mjs");
var Route$31 = createFileRoute("/")({
	loader: () => loadHome(),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./about-bIBKmBLi.mjs");
var Route$30 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About · Minister Benja" }, {
		name: "description",
		content: "Biography and teaching concerns of Minister Benja, a Bible teacher and writer."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./route-CQ4A_-wV.mjs");
var Route$29 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./contact-dhzK9Rqm.mjs");
var Route$28 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact · Minister Benja" }, {
		name: "description",
		content: "Write to Minister Benja about speaking, writing, or a general enquiry."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./events-Cdp5Xf_N.mjs");
var Route$27 = createFileRoute("/events")({
	loader: () => loadEvents(),
	head: () => ({ meta: [{ title: "Events · Minister Benja" }, {
		name: "description",
		content: "Speaking dates and past gatherings for Minister Benja."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./login-BNF0sHWi.mjs");
var Route$26 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./resources-DG6NLBeO.mjs");
var Route$25 = createFileRoute("/resources")({
	loader: async () => {
		const articles = await loadArticles({ data: "" });
		const books = await loadBooks();
		const messages = await loadMessages({ data: "" });
		return {
			essays: articles.articles.slice(0, 4),
			books: books.slice(0, 3),
			messages: messages.messages.slice(0, 4)
		};
	},
	head: () => ({ meta: [{ title: "Resources · Minister Benja" }, {
		name: "description",
		content: "A guided shelf of essays, books, and messages."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var Route$24 = createFileRoute("/robots.txt")({ server: { handlers: { GET: ({ request }) => {
	const body = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /login\nDisallow: /preview\n\nSitemap: ${new URL(request.url).origin}/sitemap.xml\n`;
	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
} } } });
var $$splitComponentImporter$20 = () => import("./search-BYc7CfTr.mjs");
var Route$23 = createFileRoute("/search")({
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q.slice(0, 120) : "" }),
	loaderDeps: ({ search }) => ({ q: search.q }),
	loader: async ({ deps }) => {
		try {
			return {
				hits: await loadSearch({ data: deps.q }),
				error: ""
			};
		} catch {
			return {
				hits: [],
				error: "Search is unavailable just now."
			};
		}
	},
	head: () => ({ meta: [{ title: "Search · Minister Benja" }, {
		name: "description",
		content: "Search published essays, books, and messages."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var Route$22 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const { readSitemap } = await import("./cms-core-D8jqEKhg.mjs");
	const data = await readSitemap();
	const origin = new URL(request.url).origin;
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/articles",
		"/books",
		"/messages",
		"/events",
		"/resources",
		"/contact",
		"/search",
		...data.articles.map((slug) => `/articles/${slug}`),
		...data.books.map((slug) => `/books/${slug}`),
		...data.messages.map((slug) => `/messages/${slug}`)
	].map((path) => `<url><loc>${origin}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
	return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
} } } });
var $$splitComponentImporter$19 = () => import("./admin-pRDnXAk3.mjs");
var Route$21 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./categories-CIwt-lPC.mjs");
var Route$20 = createFileRoute("/admin/categories")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./enquiries-xSpnDW2U.mjs");
var Route$19 = createFileRoute("/admin/enquiries")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./media-VKoZRVeo.mjs");
var Route$18 = createFileRoute("/admin/media")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./settings-CGmF-7GE.mjs");
var Route$17 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./articles-D17g_dqc.mjs");
var Route$16 = createFileRoute("/articles/")({
	validateSearch: (search) => ({ category: typeof search.category === "string" ? search.category.slice(0, 80) : "" }),
	loaderDeps: ({ search }) => ({ category: search.category }),
	loader: ({ deps }) => loadArticles({ data: deps.category }),
	head: () => ({ meta: [{ title: "Essays · Minister Benja" }, {
		name: "description",
		content: "Essays and theological reflections from Minister Benja."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_slug--aKUZjJO.mjs");
var $$splitNotFoundComponentImporter$2 = () => import("../_slug-C7X8Plpl.mjs");
var Route$15 = createFileRoute("/articles/$slug")({
	loader: async ({ params }) => {
		const result = await loadArticle({ data: params.slug });
		if (!result) throw notFound();
		return result;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.article.seoTitle || loaderData?.article.title || "Essay"} · Minister Benja` }, {
		name: "description",
		content: loaderData?.article.seoDescription || loaderData?.article.excerpt || ""
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./books-BtqhCVr5.mjs");
var Route$14 = createFileRoute("/books/")({
	loader: () => loadBooks(),
	head: () => ({ meta: [{ title: "Books · Minister Benja" }, {
		name: "description",
		content: "Books and sample publications by Minister Benja."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_slug-XiR6sx3Q.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("../_slug-DeUnjsUi.mjs");
var Route$13 = createFileRoute("/books/$slug")({
	loader: async ({ params }) => {
		const result = await loadBook({ data: params.slug });
		if (!result) throw notFound();
		return result;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.book.seoTitle || loaderData?.book.title || "Book"} · Minister Benja` }, {
		name: "description",
		content: loaderData?.book.seoDescription || loaderData?.book.subtitle || ""
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var Route$12 = createFileRoute("/media/$id")({ server: { handlers: { GET: async ({ params }) => {
	const id = Number(params.id);
	if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });
	const { readMediaFile } = await import("./cms-core-D8jqEKhg.mjs");
	const file = await readMediaFile(id);
	if (!file) return new Response("Not found", { status: 404 });
	const binary = Uint8Array.from(atob(file.bytes_base64), (char) => char.charCodeAt(0));
	return new Response(binary, { headers: {
		"Content-Type": file.mime,
		"Cache-Control": "public, max-age=86400",
		"X-Content-Type-Options": "nosniff"
	} });
} } } });
var $$splitComponentImporter$10 = () => import("./messages-CvlA9iJL.mjs");
var Route$11 = createFileRoute("/messages/")({
	validateSearch: (search) => ({ series: typeof search.series === "string" ? search.series.slice(0, 80) : "" }),
	loaderDeps: ({ search }) => ({ series: search.series }),
	loader: ({ deps }) => loadMessages({ data: deps.series }),
	head: () => ({ meta: [{ title: "Messages · Minister Benja" }, {
		name: "description",
		content: "Sermons and recorded teachings from Minister Benja."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_slug-Ctcfwqg5.mjs");
var $$splitNotFoundComponentImporter = () => import("../_slug-DV2kmS_o.mjs");
var Route$10 = createFileRoute("/messages/$slug")({
	loader: async ({ params }) => {
		const result = await loadMessage({ data: params.slug });
		if (!result) throw notFound();
		return result;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.message.seoTitle || loaderData?.message.title || "Message"} · Minister Benja` }, {
		name: "description",
		content: loaderData?.message.seoDescription || loaderData?.message.description || ""
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./articles-D3EbueJG.mjs");
var Route$9 = createFileRoute("/admin/articles/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("../_id-CpOwwCgt.mjs");
var Route$8 = createFileRoute("/admin/articles/$id")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./books-BONkk8ER.mjs");
var Route$7 = createFileRoute("/admin/books/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("../_id-CqhRrB7T.mjs");
var Route$6 = createFileRoute("/admin/books/$id")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./events-xbCeST6g.mjs");
var Route$5 = createFileRoute("/admin/events/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("../_id-BuIay8ul.mjs");
var Route$4 = createFileRoute("/admin/events/$id")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./messages-BCtkwGxv.mjs");
var Route$3 = createFileRoute("/admin/messages/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("../_id-CAblrexj.mjs");
var Route$2 = createFileRoute("/admin/messages/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$1 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var $$splitComponentImporter = () => import("../_id-CF0t4tTN.mjs");
var Route = createFileRoute("/preview/$kind/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$32
});
var AboutRoute = Route$30.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$32
});
var AdminRouteRoute = Route$29.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$32
});
var ContactRoute = Route$28.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$32
});
var EventsRoute = Route$27.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$32
});
var LoginRoute = Route$26.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$32
});
var ResourcesRoute = Route$25.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$32
});
var RobotsDottxtRoute = Route$24.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$32
});
var SearchRoute = Route$23.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$32
});
var SitemapDotxmlRoute = Route$22.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$32
});
var AdminIndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRouteRoute
});
var AdminCategoriesRoute = Route$20.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => AdminRouteRoute
});
var AdminEnquiriesRoute = Route$19.update({
	id: "/enquiries",
	path: "/enquiries",
	getParentRoute: () => AdminRouteRoute
});
var AdminMediaRoute = Route$18.update({
	id: "/media",
	path: "/media",
	getParentRoute: () => AdminRouteRoute
});
var AdminSettingsRoute = Route$17.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRouteRoute
});
var ArticlesIndexRoute = Route$16.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => Route$32
});
var ArticlesSlugRoute = Route$15.update({
	id: "/articles/$slug",
	path: "/articles/$slug",
	getParentRoute: () => Route$32
});
var BooksIndexRoute = Route$14.update({
	id: "/books/",
	path: "/books/",
	getParentRoute: () => Route$32
});
var BooksSlugRoute = Route$13.update({
	id: "/books/$slug",
	path: "/books/$slug",
	getParentRoute: () => Route$32
});
var MediaIdRoute = Route$12.update({
	id: "/media/$id",
	path: "/media/$id",
	getParentRoute: () => Route$32
});
var MessagesIndexRoute = Route$11.update({
	id: "/messages/",
	path: "/messages/",
	getParentRoute: () => Route$32
});
var MessagesSlugRoute = Route$10.update({
	id: "/messages/$slug",
	path: "/messages/$slug",
	getParentRoute: () => Route$32
});
var AdminArticlesIndexRoute = Route$9.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => AdminRouteRoute
});
var AdminArticlesIdRoute = Route$8.update({
	id: "/articles/$id",
	path: "/articles/$id",
	getParentRoute: () => AdminRouteRoute
});
var AdminBooksIndexRoute = Route$7.update({
	id: "/books/",
	path: "/books/",
	getParentRoute: () => AdminRouteRoute
});
var AdminBooksIdRoute = Route$6.update({
	id: "/books/$id",
	path: "/books/$id",
	getParentRoute: () => AdminRouteRoute
});
var AdminEventsIndexRoute = Route$5.update({
	id: "/events/",
	path: "/events/",
	getParentRoute: () => AdminRouteRoute
});
var AdminEventsIdRoute = Route$4.update({
	id: "/events/$id",
	path: "/events/$id",
	getParentRoute: () => AdminRouteRoute
});
var AdminMessagesIndexRoute = Route$3.update({
	id: "/messages/",
	path: "/messages/",
	getParentRoute: () => AdminRouteRoute
});
var AdminMessagesIdRoute = Route$2.update({
	id: "/messages/$id",
	path: "/messages/$id",
	getParentRoute: () => AdminRouteRoute
});
var ApiAuthSplatRoute = Route$1.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$32
});
var PreviewKindIdRoute = Route.update({
	id: "/preview/$kind/$id",
	path: "/preview/$kind/$id",
	getParentRoute: () => Route$32
});
var AdminRouteRouteChildren = {
	AdminCategoriesRoute,
	AdminEnquiriesRoute,
	AdminMediaRoute,
	AdminSettingsRoute,
	AdminIndexRoute,
	AdminArticlesIdRoute,
	AdminBooksIdRoute,
	AdminEventsIdRoute,
	AdminMessagesIdRoute,
	AdminArticlesIndexRoute,
	AdminBooksIndexRoute,
	AdminEventsIndexRoute,
	AdminMessagesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRouteRoute: AdminRouteRoute._addFileChildren(AdminRouteRouteChildren),
	AboutRoute,
	ContactRoute,
	EventsRoute,
	LoginRoute,
	ResourcesRoute,
	RobotsDottxtRoute,
	SearchRoute,
	SitemapDotxmlRoute,
	ArticlesSlugRoute,
	BooksSlugRoute,
	MediaIdRoute,
	MessagesSlugRoute,
	ArticlesIndexRoute,
	BooksIndexRoute,
	MessagesIndexRoute,
	ApiAuthSplatRoute,
	PreviewKindIdRoute
};
var routeTree = Route$32._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { loadEnquiries as A, saveBook as B, loadEditorBooks as C, loadEditorMedia as D, loadEditorEvents as E, removeCategory as F, saveSettings as G, saveEvent as H, removeEvent as I, sendContact as K, removeMedia as L, loadPreview as M, removeArticle as N, loadEditorMessage as O, removeBook as P, removeMessage as R, loadEditorBook as S, loadEditorEvent as T, saveMedia as U, saveCategory as V, saveMessage as W, Missing as _, Route$6 as a, loadEditorArticle as b, Route$11 as c, Route$15 as d, Route$16 as f, Route$31 as g, Route$27 as h, Route$4 as i, loadOverview as j, loadEditorMessages as k, Route$13 as l, Route$25 as m, Route as n, Route$8 as o, Route$23 as p, Route$2 as r, Route$10 as s, router_exports as t, Route$14 as u, SiteFrame as v, loadEditorCategories as w, loadEditorArticles as x, joinNotes as y, saveArticle as z };
