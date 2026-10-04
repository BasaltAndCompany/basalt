import { K as Show, Q as createComponent, S as ssrAttribute, ft as onCleanup, h as escape, ot as createSignal, pt as onMount, w as ssrHydrationKey, x as ssr } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as Button } from "./button-DhSTr1ZL.mjs";
import { t as Logo } from "./logo-XuhPsPFD.mjs";
import { t as initHeroVideo } from "./site-state-ihm8ahx4.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/routes-BglEzAeP.js
var _tmpl$ = ["<div", " class=\"lava-glow absolute inset-x-0 bottom-0 h-72\" aria-hidden=\"true\"></div>"];
var _tmpl$2 = ["<svg", " class=\"absolute bottom-0 left-0 h-40 w-full\" viewBox=\"0 0 1200 160\" preserveAspectRatio=\"none\"><g fill=\"#050505\"><rect x=\"0\" y=\"148\" width=\"1200\" height=\"12\"></rect><rect x=\"170\" y=\"66\" width=\"170\" height=\"94\"></rect><rect x=\"515\" y=\"14\" width=\"190\" height=\"146\"></rect><rect x=\"880\" y=\"92\" width=\"165\" height=\"68\"></rect></g></svg>"];
var _tmpl$3 = [
	"<div",
	" class=\"bg-background text-foreground\"><div class=\"fixed inset-0\" aria-hidden=\"true\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><div class=\"fixed inset-x-0 top-0 z-20 flex items-start justify-between px-6 py-5\"><!--$-->",
	"<!--/--><nav class=\"flex flex-col items-end gap-2 pt-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></nav></div><div class=\"fixed right-0 bottom-0 z-20 px-6 pb-5 text-right\"><p class=\"font-sans text-xs tracking-wide text-muted-foreground\">© 2026 Basalt &amp; Company</p></div><div aria-hidden=\"true\">",
	"</div><div class=\"pointer-events-none fixed bottom-0 left-0 z-20 max-w-2xl px-6 pb-10\"><!--$-->",
	"<!--/--><div class=\"pointer-events-auto mt-6 flex items-center gap-8\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div><button",
	" class=\"fixed bottom-5 left-1/2 z-20 -translate-x-1/2 text-foreground/60 transition-colors hover:text-foreground\"><svg viewBox=\"0 0 24 24\" class=\"",
	"\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg></button></div>"
];
var _tmpl$4 = ["<video", " autoplay loop playsinline class=\"absolute inset-0 h-full w-full object-cover opacity-40\"></video>"];
var _tmpl$5 = ["<div", " class=\"absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background\"></div>"];
var _tmpl$6 = ["<div", " class=\"h-svh snap-start\"></div>"];
var _tmpl$7 = [
	"<h1",
	" class=\"font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl\">",
	"</h1>"
];
var _tmpl$8 = [
	"<div",
	" class=\"msg-in\"><!--$-->",
	"<!--/--><p class=\"mt-4 max-w-lg font-sans text-base leading-relaxed text-muted-foreground\">",
	"</p></div>"
];
var _tmpl$9 = [
	"<p",
	" class=\"font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl\">",
	"</p>"
];
var id$$ = "src/routes/index.tsx?pick=Site&pick=default&pick=$css";
/**
* The scroll narrative. One message per 100vh screen; the bottom-left corner
* swaps between them as you scroll. Edit copy here — nowhere else.
* Facts from the Mad Cactus marketing page, in the Basalt voice.
*/
var MESSAGES = [
	{
		title: "The rock under everything.",
		body: "We turn working businesses AI-native — the intelligence layer, the agents, the workflows that make it real."
	},
	{
		title: "First the audit. Then the brain. Then the agents.",
		body: "Our agent learns every workflow from your people. Your data, docs, and institutional knowledge become one intelligence layer. Custom agents take entire tasks off your team."
	},
	{
		title: "Proven in production.",
		body: "An autonomous agent transformed IU's ticket-resolution pipeline — productivity up, resolution time down. Measured impact, from real clients."
	},
	{
		title: "Hand tasks to agents, or don't pay.",
		body: "We don't sell hours. We embed with your team, build the layer, deploy the agents, and train your people to run them. The work speaks for itself."
	}
];
function LinkText(props) {
	return createComponent(Button, {
		variant: "link",
		size: "link",
		as: "a",
		get href() {
			return props.href ?? "#";
		},
		get onClick() {
			return props.onClick;
		},
		get ["class"]() {
			return props.dim ? "text-foreground/40" : void 0;
		},
		get children() {
			return props.children;
		}
	});
}
function Site(props) {
	const [index, setIndex] = createSignal(0);
	const last = () => index() === MESSAGES.length - 1;
	onMount(() => {
		const onScroll = () => setIndex(Math.max(0, Math.min(MESSAGES.length - 1, Math.round(window.scrollY / window.innerHeight))));
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		onCleanup(() => window.removeEventListener("scroll", onScroll));
	});
	return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Show, {
		get when() {
			return props.heroVideo;
		},
		keyed: true,
		children: (src) => [ssr(_tmpl$4, ssrHydrationKey() + ssrAttribute("src", escape(src, true), false)), ssr(_tmpl$5, ssrHydrationKey())]
	})), escape(createComponent(Show, {
		get when() {
			return !props.heroVideo;
		},
		get children() {
			return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey())];
		}
	})), escape(createComponent(Logo, {
		variant: "word",
		redDot: true,
		suffix: "& Company",
		"class": "text-[24px]"
	})), escape(createComponent(LinkText, {
		href: "/contact",
		children: "Contact"
	})), escape(createComponent(LinkText, {
		href: "/writing",
		children: "Writing"
	})), escape(createComponent(LinkText, {
		href: "/careers",
		children: "Careers"
	})), escape(MESSAGES.map(() => ssr(_tmpl$6, ssrHydrationKey()))), escape(createComponent(Show, {
		get when() {
			return MESSAGES[index()];
		},
		keyed: true,
		children: (msg) => ssr(_tmpl$8, ssrHydrationKey(), escape(createComponent(Show, {
			get when() {
				return index() === 0;
			},
			get fallback() {
				return ssr(_tmpl$9, ssrHydrationKey(), escape(msg.title));
			},
			get children() {
				return ssr(_tmpl$7, ssrHydrationKey(), escape(msg.title));
			}
		})), escape(msg.body))
	})), escape(createComponent(LinkText, {
		href: "/contact",
		children: "Start a conversation"
	})), escape(createComponent(LinkText, {
		dim: true,
		href: "/writing",
		children: "Read the thesis"
	})), ssrAttribute("aria-label", last() ? "Back to top" : "Scroll down", false), `h-7 w-7 ${last() ? "rotate-180" : ""} ${index() === 0 ? "chev-bob" : ""}`);
}
function Home() {
	const [heroVideo, setHeroVideo] = createSignal(null);
	onMount(() => setHeroVideo(initHeroVideo()));
	return createComponent(Site, { get heroVideo() {
		return heroVideo();
	} });
}
//#endregion
export { Site, Home as default, id$$ };
