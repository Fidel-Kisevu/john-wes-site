//#region node_modules/.nitro/vite/services/ssr/assets/content-types-CXscOd2w.js
var STOCK = [
	{
		src: "/images/portrait.jpg",
		alt: "Portrait of Minister Benja, in a charcoal jacket against a pale wall"
	},
	{
		src: "/images/desk.jpg",
		alt: "A wooden writing desk with a book, tea, and morning light"
	},
	{
		src: "/images/bible.jpg",
		alt: "An open Bible on a dark wooden table, pages soft in the light"
	},
	{
		src: "/images/chapel.jpg",
		alt: "Empty wooden pews in a quiet chapel with a shaft of afternoon light"
	},
	{
		src: "/images/highlands.jpg",
		alt: "Mist over rolling highlands at dawn"
	},
	{
		src: "/images/hands.jpg",
		alt: "Hands writing slowly in a notebook at a wooden table"
	},
	{
		src: "/images/lectern.jpg",
		alt: "A simple wooden lectern with a closed clothbound book"
	},
	{
		src: "/images/linen.jpg",
		alt: "Ivory linen paper beside a band of deep burgundy cloth"
	}
];
function slugify(input) {
	return input.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
function readingMinutes(body) {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}
function formatDay(iso) {
	if (!iso) return "";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
	return new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC"
	}).format(d);
}
function youtubeId(url) {
	if (!url) return null;
	try {
		const u = new URL(url);
		const host = u.hostname.replace(/^www\./, "");
		if (host === "youtu.be") {
			const id = u.pathname.split("/").filter(Boolean)[0] ?? "";
			return /^[\w-]{6,}$/.test(id) ? id : null;
		}
		if (host === "youtube.com" || host === "youtube-nocookie.com" || host === "m.youtube.com") {
			if (u.pathname.startsWith("/embed/")) {
				const id = u.pathname.split("/")[2] ?? "";
				return /^[\w-]{6,}$/.test(id) ? id : null;
			}
			const id = u.searchParams.get("v") ?? "";
			return /^[\w-]{6,}$/.test(id) ? id : null;
		}
	} catch {
		return null;
	}
	return null;
}
function safeHttpUrl(value) {
	const trimmed = value.trim();
	if (!trimmed) return null;
	let url;
	try {
		url = new URL(trimmed);
	} catch {
		return null;
	}
	if (url.protocol !== "https:" && url.protocol !== "http:") return null;
	return url.toString();
}
function interestLines(value) {
	return value.split("\n").map((line) => line.trim()).filter(Boolean);
}
//#endregion
export { safeHttpUrl as a, readingMinutes as i, formatDay as n, slugify as o, interestLines as r, youtubeId as s, STOCK as t };
