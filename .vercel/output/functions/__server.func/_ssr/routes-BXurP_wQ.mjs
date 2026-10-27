import { n as formatDay, r as interestLines } from "./content-types-CXscOd2w.mjs";
import { T as require_jsx_runtime, b as Link, x as useRouteContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Route$31, v as SiteFrame } from "./router-DBUjRO_n.mjs";
import { t as Photo } from "./Photo-CqNmJbV1.mjs";
import { n as NotesForm } from "./engage-DRa29nHd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BXurP_wQ.js
var import_jsx_runtime = require_jsx_runtime();
function BooksSection({ firstBook, otherBooks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-3xl",
					children: "Books"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/books",
					className: "text-sm text-oxblood",
					children: "All books"
				})]
			}), firstBook === void 0 && otherBooks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "No books published yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 md:grid-cols-12",
				children: [firstBook ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/books/$slug",
					params: { slug: firstBook.slug },
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: firstBook.coverImage,
							alt: firstBook.coverAlt || firstBook.title,
							ratio: "book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-4 text-2xl",
							children: firstBook.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: firstBook.subtitle
						})
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "md:col-span-7 md:pt-2",
					children: otherBooks.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line py-5 first:border-t-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/books/$slug",
							params: { slug: book.slug },
							className: "display text-2xl hover:text-oxblood",
							children: book.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [book.subtitle, book.publicationYear ? ` · ${book.publicationYear}` : ""]
						})]
					}, book.id))
				})]
			})]
		})
	});
}
function HomeHeroSection({ settings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-6 md:grid-cols-12 md:pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: settings.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-5xl text-ink md:text-7xl",
					children: settings.ministerName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg",
					children: settings.homepageIntro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles",
						search: { category: "" },
						className: "border-b border-oxblood pb-1 text-oxblood",
						children: "Read the essays"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "border-b border-line pb-1 hover:border-oxblood",
						children: "About the ministry"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "md:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: settings.portraitUrl,
				alt: settings.portraitAlt,
				ratio: "portrait",
				priority: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "display block text-2xl",
					children: settings.ministerName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: settings.professionalTitle
				})]
			})]
		})]
	});
}
function LeadEssaySection({ lead, rest }) {
	if (!lead) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto max-w-6xl px-5 py-12 text-muted",
		children: "Essays will appear here once they are published."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: lead.heroImage,
					alt: lead.heroAlt || "",
					ratio: "wide"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-oxblood",
						children: lead.categoryName || "Essay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-3xl md:text-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articles/$slug",
							params: { slug: lead.slug },
							className: "hover:text-oxblood",
							children: lead.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: lead.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: formatDay(lead.publishedAt)
					})
				]
			})]
		}), rest.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mx-auto max-w-6xl divide-y divide-line border-t border-line px-5",
			children: rest.map((essay, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 py-5 md:grid-cols-12 md:items-baseline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted md:col-span-1",
						children: String(index + 2).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles/$slug",
						params: { slug: essay.slug },
						className: "display text-2xl hover:text-oxblood md:col-span-7",
						children: essay.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted md:col-span-2",
						children: essay.categoryName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted md:col-span-2 md:text-right",
						children: formatDay(essay.publishedAt)
					})
				]
			}, essay.id))
		}) : null]
	});
}
function MessagesSection({ messages }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-3xl",
					children: "Latest messages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/messages",
					search: { series: "" },
					className: "text-sm text-oxblood",
					children: "All messages"
				})]
			}), messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Recorded messages will be listed here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 py-5 md:grid-cols-12 md:items-baseline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-oxblood md:col-span-3",
							children: message.scripture || message.series
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/messages/$slug",
							params: { slug: message.slug },
							className: "display text-xl hover:text-oxblood md:col-span-6",
							children: message.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted md:col-span-3 md:text-right",
							children: [message.duration, message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""]
						})
					]
				}, message.id))
			})]
		})
	});
}
function MinistrySection({ settings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: "The ministry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-3 text-3xl",
					children: "A teacher who stays with the text"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "display text-2xl leading-snug md:text-3xl",
						children: settings.pullQuote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl",
						children: settings.biographySummary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted",
						children: interestLines(settings.interests).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-6 inline-block border-b border-oxblood text-sm text-oxblood",
						children: "Read the biography"
					})
				]
			})]
		})
	});
}
function NextEventSection({ nextEvent }) {
	if (!nextEvent) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-oxblood",
					children: "Next gathering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-2 text-3xl md:text-4xl",
					children: nextEvent.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted",
					children: [nextEvent.whenLabel, nextEvent.venue ? ` · ${nextEvent.venue}` : ""]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				className: "text-sm text-oxblood",
				children: "Speaking and dates"
			})]
		})
	});
}
function HomeRoute() {
	const settings = useRouteContext({ from: "__root__" }).settings;
	const data = Route$31.useLoaderData();
	const [lead, ...rest] = data.essays;
	const [firstBook, ...otherBooks] = data.books;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHeroSection, { settings }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadEssaySection, {
			lead,
			rest
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BooksSection, {
			firstBook,
			otherBooks
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinistrySection, { settings }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSection, { messages: data.messages }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextEventSection, { nextEvent: data.nextEvent }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesForm, {
			heading: settings.newsletterHeading,
			text: settings.newsletterText
		})
	] });
}
//#endregion
export { HomeRoute as component };
