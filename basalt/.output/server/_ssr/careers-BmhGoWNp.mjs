import { Q as createComponent, h as escape, w as ssrHydrationKey, x as ssr } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as Button } from "./button-DhSTr1ZL.mjs";
import { t as Page } from "./site-BEFr8Sts.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/careers-BmhGoWNp.js
var _tmpl$ = [
	"<section",
	" class=\"mx-auto max-w-xl px-6 pb-24 pt-14\"><h1 class=\"font-serif text-5xl leading-[1.05] tracking-[-0.01em]\">Careers</h1><p class=\"mt-6 font-sans text-base leading-relaxed text-muted-foreground\">No open roles right now. We stay deliberately small — the agents handle the volume, and the humans handle the judgment. When that balance breaks, we hire.</p><p class=\"mt-4 font-sans text-base leading-relaxed text-muted-foreground\">Think you'd be one of them? Say so before there's an opening.</p><!--$-->",
	"<!--/--></section>"
];
var id$$ = "src/routes/careers.tsx?pick=default&pick=$css";
function Careers() {
	return createComponent(Page, {
		title: "Careers | Basalt & Company",
		description: "No open roles right now — but we hire the moment the work demands it.",
		get children() {
			return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Button, {
				as: "a",
				href: "/contact",
				variant: "outline",
				"class": "mt-8",
				children: "{ SAY SO }"
			})));
		}
	});
}
//#endregion
export { Careers as default, id$$ };
