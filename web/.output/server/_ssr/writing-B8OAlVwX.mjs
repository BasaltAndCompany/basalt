import { E as Show, M as createComponent, h as ssr, l as escape, v as ssrHydrationKey, w as For } from "../_libs/solid-js.mjs";
import { t as createAsync } from "./createAsync-Bhn6yo3Y.mjs";
import { t as Page } from "./site-U7vXey32.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/writing-B8OAlVwX.js
var _tmpl$ = [
	"<section",
	" class=\"mx-auto max-w-3xl px-6 pb-24 pt-14\"><h1 class=\"font-serif text-5xl leading-[1.05] tracking-[-0.01em]\">Writing</h1><div class=\"mt-12\"><a href=\"/iu\" class=\"group block border-b border-border py-6\"><p class=\"font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground\">Case Study</p><h2 class=\"mt-2 font-serif text-2xl transition-colors group-hover:text-foreground\">Indiana <em>University</em> — the autonomous ticket agent</h2><p class=\"mt-1 font-sans text-sm text-muted-foreground\">45% productivity increase, measured across Q2—Q3.</p></a></div><div class=\"divide-y divide-border\">",
	"</div></section>"
];
var _tmpl$2 = ["<p", " class=\"py-6 font-sans text-sm text-muted-foreground\">Loading…</p>"];
var _tmpl$3 = [
	"<a",
	" href=\"",
	"\" class=\"group block py-6\"><p class=\"font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground\">The Cactus Dispatch · Issue <!--$-->",
	"<!--/--></p><h2 class=\"mt-2 font-serif text-2xl\">",
	"</h2></a>"
];
var id$$ = "src/routes/writing.tsx?pick=default&pick=$css";
function Writing() {
	const issues = createAsync(async () => {
		const res = await fetch("https://madcactus.org/api/newsletter-issues");
		if (!res.ok) return [];
		return (await res.json()).issues;
	});
	return createComponent(Page, {
		title: "Writing | Basalt & Company",
		description: "Essays and teardowns from real deployments.",
		get children() {
			return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Show, {
				get when() {
					return issues();
				},
				get fallback() {
					return ssr(_tmpl$2, ssrHydrationKey());
				},
				keyed: true,
				children: (list) => createComponent(For, {
					each: list,
					children: (i) => ssr(_tmpl$3, ssrHydrationKey(), `/newsletter/${escape(i.id, true)}`, escape(String(i.issueNumber).padStart(2, "0")), escape(i.title))
				})
			})));
		}
	});
}
//#endregion
export { Writing as default, id$$ };
