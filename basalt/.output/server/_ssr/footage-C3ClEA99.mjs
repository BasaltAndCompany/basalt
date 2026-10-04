import { K as Show, Q as createComponent, S as ssrAttribute, ft as onCleanup, h as escape, ot as createSignal, tt as createEffect, w as ssrHydrationKey, x as ssr } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as Button } from "./button-DhSTr1ZL.mjs";
import { t as Input } from "./input-XviP54Bz.mjs";
import { t as Label } from "./label-BMNGCOqc.mjs";
import { n as Card, t as Badge } from "./card-VdNGGBB9.mjs";
import { t as Separator } from "./separator-DDZ3XAMA.mjs";
import { t as initHeroVideo } from "./site-state-ihm8ahx4.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/footage-C3ClEA99.js
var _tmpl$ = [
	"<div",
	" class=\"mt-6 flex items-center gap-3 font-sans text-xs text-muted-foreground\"><!--$-->",
	"<!--/--><span>A Commons clip is the current hero background.</span><!--$-->",
	"<!--/--></div>"
];
var _tmpl$2 = [
	"<div",
	" class=\"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$3 = [
	"<div",
	" class=\"min-h-svh\"><header class=\"border-b border-border\"><div class=\"mx-auto flex max-w-5xl items-center justify-between px-6 py-4\"><p class=\"font-serif text-xl\">Footage library</p><!--$-->",
	"<!--/--></div></header><div class=\"mx-auto max-w-5xl px-6 py-10\"><p class=\"max-w-xl font-sans text-sm leading-relaxed text-muted-foreground\">Free, licensed stock video from Wikimedia Commons. Click any clip to preview it looping full-bleed, then set it as the hero background. Files under ~15 MB loop best on first load.</p><!--$-->",
	"<!--/--><div class=\"flex max-w-sm flex-col gap-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><div class=\"mt-4 flex flex-wrap gap-2\">",
	"</div><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><!--$-->",
	"<!--/--></div>"
];
var _tmpl$4 = ["<p", " class=\"mt-10 font-sans text-sm text-muted-foreground\">Searching…</p>"];
var _tmpl$5 = ["<img", " alt class=\"h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100\">"];
var _tmpl$6 = [
	"<div",
	" class=\"aspect-video w-full bg-card\">",
	"</div>"
];
var _tmpl$7 = [
	"<button",
	" class=\"group text-left\"><!--$-->",
	"<!--/--><p class=\"mt-2 truncate font-sans text-xs text-muted-foreground\">",
	"</p><p class=\"font-sans text-[10px] text-muted-foreground/60\"><!--$-->",
	"<!--/--> MB</p></button>"
];
var _tmpl$8 = [
	"<p",
	" class=\"col-span-full font-sans text-sm text-muted-foreground\">Nothing found for “<!--$-->",
	"<!--/-->”. Try another topic.</p>"
];
var _tmpl$9 = [
	"<div",
	" class=\"fixed inset-0 z-50 bg-background/95\"><video",
	" autoplay loop playsinline class=\"h-full w-full object-cover opacity-80\"></video><div class=\"absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background to-transparent p-8\"><div class=\"min-w-0 pr-4\"><p class=\"truncate font-sans text-sm\">",
	"</p><p class=\"font-sans text-xs text-muted-foreground\"><!--$-->",
	"<!--/--> MB · <!--$-->",
	"<!--/--></p></div><div class=\"flex shrink-0 items-center gap-6\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div></div>"
];
var TOPICS = [
	"lava flow",
	"volcano eruption",
	"ocean waves",
	"stormy sea",
	"clouds timelapse",
	"foggy forest",
	"geyser eruption",
	"glacier ice"
];
var KEY = "basalt.heroVideo";
/**
* Footage picker: scrolls Wikimedia Commons' free (CC) video library.
* Pick a clip, preview it looping full-bleed, set it as the hero background.
* ponytail: Commons = zero keys and stable URLs; swap in Pexels/Coverr later
* if the quality bar demands it.
*/
function VideoPicker(props) {
	const [query, setQuery] = createSignal("lava flow");
	const [clips, setClips] = createSignal([]);
	const [loading, setLoading] = createSignal(false);
	const [preview, setPreview] = createSignal(null);
	createEffect(() => {
		const q = query();
		const ctrl = new AbortController();
		setLoading(true);
		const params = new URLSearchParams({
			action: "query",
			format: "json",
			origin: "*",
			generator: "search",
			gsrsearch: `filetype:video ${q}`,
			gsrnamespace: "6",
			gsrlimit: "24",
			prop: "imageinfo",
			iiprop: "url|mime|size",
			iiurlwidth: "480"
		});
		fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { signal: ctrl.signal }).then((r) => r.json()).then((data) => {
			const pages = data.query?.pages ?? {};
			const found = Object.values(pages).map((p) => {
				const info = p.imageinfo?.[0];
				if (!info) return null;
				const mime = String(info.mime ?? "");
				if (mime !== "video/webm" && mime !== "video/mp4") return null;
				return {
					title: String(p.title).replace(/^File:/, ""),
					url: String(info.url),
					poster: info.thumburl ?? void 0,
					mb: Math.round(Number(info.size ?? 0) / 1e6),
					mime
				};
			}).filter((c) => c !== null);
			setClips(found);
			setLoading(false);
		}).catch(() => setLoading(false));
		onCleanup(() => ctrl.abort());
	});
	const setHero = (url) => {
		if (url) localStorage.setItem(KEY, url);
		else localStorage.removeItem(KEY);
		props.onSetHero(url);
		setPreview(null);
	};
	return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Button, {
		variant: "link",
		size: "link",
		as: "a",
		href: "#",
		"class": "text-muted-foreground",
		onClick: (e) => {
			e.preventDefault();
			props.onBack();
		},
		children: "← Back to site"
	})), escape(createComponent(Separator, { "class": "my-8" })), escape(createComponent(Label, {
		"for": "footage-search",
		"class": "text-muted-foreground",
		children: "Search Commons"
	})), escape(createComponent(Input, {
		id: "footage-search",
		placeholder: "e.g. lava flow",
		get value() {
			return query();
		},
		onInput: (e) => setQuery(e.currentTarget.value)
	})), escape(TOPICS.map((t) => createComponent(Button, {
		variant: "outline",
		size: "sm",
		get ["data-active"]() {
			return query() === t;
		},
		onClick: () => setQuery(t),
		"class": "text-muted-foreground hover:bg-transparent data-[active=true]:bg-foreground data-[active=true]:text-background data-[active=true]:hover:bg-foreground data-[active=true]:hover:text-background",
		children: t
	}))), escape(createComponent(Show, {
		get when() {
			return props.heroVideo;
		},
		get children() {
			return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Badge, {
				variant: "outline",
				children: "hero set"
			})), escape(createComponent(Button, {
				variant: "link",
				size: "link",
				as: "a",
				href: "#",
				"class": "text-signal",
				onClick: (e) => {
					e.preventDefault();
					setHero(null);
				},
				children: "Remove it"
			})));
		}
	})), escape(createComponent(Show, {
		get when() {
			return !loading();
		},
		get fallback() {
			return ssr(_tmpl$4, ssrHydrationKey());
		},
		get children() {
			return ssr(_tmpl$2, ssrHydrationKey(), escape(clips().map((c) => ssr(_tmpl$7, ssrHydrationKey(), escape(createComponent(Card, {
				"class": "overflow-hidden border-0 bg-transparent p-0 shadow-none",
				get children() {
					return ssr(_tmpl$6, ssrHydrationKey(), escape(createComponent(Show, {
						get when() {
							return c.poster;
						},
						get children() {
							return ssr(_tmpl$5, ssrHydrationKey() + ssrAttribute("src", escape(c.poster, true), false));
						}
					})));
				}
			})), escape(c.title), escape(c.mb)))), clips().length === 0 && ssr(_tmpl$8, ssrHydrationKey(), escape(query())));
		}
	})), escape(createComponent(Show, {
		get when() {
			return preview();
		},
		keyed: true,
		children: (clip) => ssr(_tmpl$9, ssrHydrationKey(), ssrAttribute("src", escape(clip.url, true), false) + ssrAttribute("poster", escape(clip.poster, true), false), escape(clip.title), escape(clip.mb), escape(clip.mime), escape(createComponent(Button, {
			variant: "link",
			size: "link",
			as: "a",
			href: "#",
			"class": "text-signal",
			onClick: (e) => {
				e.preventDefault();
				setHero(clip.url);
			},
			children: "Use in hero"
		})), escape(createComponent(Button, {
			variant: "link",
			size: "link",
			as: "a",
			href: "#",
			"class": "text-muted-foreground",
			onClick: (e) => {
				e.preventDefault();
				setPreview(null);
			},
			children: "Close"
		})))
	})));
}
var id$$ = "src/routes/footage.tsx?pick=default&pick=$css";
function Footage() {
	return createComponent(VideoPicker, {
		get heroVideo() {
			return initHeroVideo();
		},
		onSetHero: () => {},
		onBack: () => {
			window.location.href = "/";
		}
	});
}
//#endregion
export { Footage as default, id$$ };
