import { E as ssrStyleProperty, Q as createComponent, S as ssrAttribute, h as escape, w as ssrHydrationKey, x as ssr } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { l as cn } from "./button-DhSTr1ZL.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/logo-XuhPsPFD.js
var _tmpl$ = [
	"<svg",
	" viewBox=\"0 0 32 32\"",
	" fill=\"currentColor\"",
	" aria-hidden=\"true\"><rect x=\"3\" y=\"9\" width=\"7\" height=\"23\"></rect><rect x=\"12.5\" y=\"2\" width=\"7\" height=\"30\"",
	"></rect><rect x=\"22\" y=\"12\" width=\"7\" height=\"20\"></rect></svg>"
];
var _tmpl$2 = [
	"<span",
	"><span class=\"serif-display font-serif text-[1.6em] tracking-[-0.01em]\">Basalt<!--$-->",
	"<!--/--></span><!--$-->",
	"<!--/--></span>"
];
var _tmpl$3 = ["<span", " class=\"text-signal\">.</span>"];
var _tmpl$4 = [
	"<span",
	" class=\"mt-[0.35em] font-sans text-[0.32em] font-medium uppercase tracking-[0.34em] text-muted-foreground\">",
	"</span>"
];
var _tmpl$5 = [
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
	return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("width", escape(props.size ?? 28, true), false) + ssrAttribute("height", escape(props.size ?? 28, true), false), ssrAttribute("class", escape(props.class, true), false), ssrAttribute("fill", props.redBar ? escape(SIGNAL_RED, true) : escape(void 0, true), false));
}
function Wordmark(props) {
	return ssr(_tmpl$2, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col items-start leading-none", props.class), true), false), props.redDot && _tmpl$3[0] + ssrHydrationKey() + _tmpl$3[1], props.suffix && ssr(_tmpl$4, ssrHydrationKey(), escape(props.suffix)));
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
	return ssr(_tmpl$5, ssrHydrationKey() + ssrAttribute("class", escape(cn("inline-flex items-center gap-[0.55em] leading-none", props.class), true), false), ssrStyleProperty("font-size:", `${escape(props.size ?? 28, true)}px`), escape(createComponent(BasaltMark, {
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
//#endregion
export { Logo as t };
