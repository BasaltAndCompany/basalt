import { E as ssrStyleProperty, K as Show, Q as createComponent, S as ssrAttribute, at as createSignal, dt as onCleanup, ft as onMount, h as escape, w as ssrHydrationKey, x as ssr } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { l as cn, t as Button } from "./button-DTuGqGhm.mjs";
import { t as initHeroVideo } from "./site-state-ihm8ahx4.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/routes-V2YpIvxh.js
var _tmpl$$1 = [
	"<svg",
	" viewBox=\"0 0 32 32\"",
	" fill=\"currentColor\"",
	" aria-hidden=\"true\"><rect x=\"3\" y=\"9\" width=\"7\" height=\"23\"></rect><rect x=\"12.5\" y=\"2\" width=\"7\" height=\"30\"",
	"></rect><rect x=\"22\" y=\"12\" width=\"7\" height=\"20\"></rect></svg>"
];
var _tmpl$2$1 = [
	"<span",
	"><span class=\"serif-display font-serif text-[1.6em] tracking-[-0.01em]\">Basalt<!--$-->",
	"<!--/--></span><!--$-->",
	"<!--/--></span>"
];
var _tmpl$3$1 = ["<span", " class=\"text-signal\">.</span>"];
var _tmpl$4$1 = [
	"<span",
	" class=\"mt-[0.35em] font-sans text-[0.32em] font-medium uppercase tracking-[0.34em] text-muted-foreground\">",
	"</span>"
];
var _tmpl$5$1 = [
	"<span",
	" style=\"",
	"\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></span>"
];
/**
* Basalt brand marks. One geometry: three basalt pillars, staggered tops.
* Ink on paper, paper on ink. The middle pillar may take the signal red —
* that is the only color the brand gets.
*/
var SIGNAL_RED = "#C8102E";
function BasaltMark(props) {
	return ssr(_tmpl$$1, ssrHydrationKey(), ssrAttribute("width", escape(props.size ?? 28, true), false) + ssrAttribute("height", escape(props.size ?? 28, true), false), ssrAttribute("class", escape(props.class, true), false), ssrAttribute("fill", props.redBar ? escape(SIGNAL_RED, true) : escape(void 0, true), false));
}
function Wordmark(props) {
	return ssr(_tmpl$2$1, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col items-start leading-none", props.class), true), false), props.redDot && _tmpl$3$1[0] + ssrHydrationKey() + _tmpl$3$1[1], props.suffix && ssr(_tmpl$4$1, ssrHydrationKey(), escape(props.suffix)));
}
/**
* Full lockup scales with `size` via em units — mark, word, and suffix all move together.
*/
function Logo(props) {
	if (props.variant === "mark") return createComponent(BasaltMark, {
		get size() {
			return props.size;
		},
		get redBar() {
			return props.redBar;
		},
		get ["class"]() {
			return props.class;
		}
	});
	if (props.variant === "word") return createComponent(Wordmark, {
		get suffix() {
			return props.suffix;
		},
		get redDot() {
			return props.redDot;
		},
		get ["class"]() {
			return cn("text-[1em]", props.class);
		}
	});
	return ssr(_tmpl$5$1, ssrHydrationKey() + ssrAttribute("class", escape(cn("inline-flex items-center gap-[0.55em] leading-none", props.class), true), false), ssrStyleProperty("font-size:", `${escape(props.size ?? 28, true)}px`), escape(createComponent(BasaltMark, {
		get size() {
			return props.size;
		},
		get redBar() {
			return props.redBar;
		}
	})), escape(createComponent(Wordmark, {
		get suffix() {
			return props.suffix;
		},
		get redDot() {
			return props.redDot;
		}
	})));
}
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
		href: "#",
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
	})), escape(createComponent(LinkText, { children: "Contact" })), escape(createComponent(LinkText, { children: "Writing" })), escape(createComponent(LinkText, { children: "Careers" })), escape(MESSAGES.map(() => ssr(_tmpl$6, ssrHydrationKey()))), escape(createComponent(Show, {
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
	})), escape(createComponent(LinkText, { children: "Start a conversation" })), escape(createComponent(LinkText, {
		dim: true,
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
