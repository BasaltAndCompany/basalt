import { E as Show, M as createComponent, h as ssr, l as escape, v as ssrHydrationKey, w as For } from "../_libs/solid-js.mjs";
import { t as createAsync } from "./createAsync-COGvrKs3.mjs";
import { m as Button } from "./src-CEr7MizD.mjs";
import { t as Page } from "./site-n8E3Se2v.mjs";
import { t as Input } from "./input-DcyE3u5y.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/newsletter-Bb6AGKQu.js
var _tmpl$ = [
	"<section",
	" class=\"mx-auto max-w-3xl px-6 pb-20 pt-14 text-center\"><h1 class=\"font-serif text-5xl leading-[1.05] tracking-[-0.01em] md:text-6xl\">AI teardowns<br><em>from our real clients.</em></h1><p class=\"mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground\">Weekly breakdowns of real AI deployments. What we built, what it cost, and the blueprint to do the same thing. Higher margins, more revenue, no new headcount.</p><form class=\"mx-auto mt-8 flex max-w-md items-center gap-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></form></section>"
];
var _tmpl$2 = [
	"<section",
	" class=\"mx-auto max-w-6xl px-6 pb-20\"><div class=\"grid gap-10 md:grid-cols-3\">",
	"</div></section>"
];
var _tmpl$3 = [
	"<section",
	" class=\"mx-auto max-w-3xl px-6 pb-24\"><h2 class=\"font-serif text-3xl\">Past issues</h2><div class=\"mt-8 divide-y divide-border\">",
	"</div></section>"
];
var _tmpl$4 = [
	"<div",
	"><div class=\"font-serif text-2xl text-signal\">",
	"</div><h3 class=\"mt-2 font-serif text-xl\">",
	"</h3><p class=\"mt-2 font-sans text-sm leading-relaxed text-muted-foreground\">",
	"</p></div>"
];
var _tmpl$5 = ["<p", " class=\"font-sans text-sm text-muted-foreground\">Loading…</p>"];
var _tmpl$6 = [
	"<a",
	" href=\"",
	"\" class=\"group block py-6\"><div class=\"flex items-baseline justify-between gap-4\"><span class=\"font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground\">Issue <!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></span><span class=\"font-serif text-sm text-foreground/60 transition-colors group-hover:text-foreground\">{ READ THE TEARDOWN }</span></div><h3 class=\"mt-2 font-serif text-2xl\">",
	"</h3></a>"
];
var id$$ = "src/routes/newsletter/index.tsx?pick=default&pick=$css";
var DASHBOARD = "https://madcactus.org";
function Newsletter() {
	const issues = createAsync(async () => {
		const res = await fetch(`${DASHBOARD}/api/newsletter-issues`);
		if (!res.ok) return [];
		return (await res.json()).issues;
	});
	return createComponent(Page, {
		title: "The Cactus Dispatch | Basalt & Company",
		description: "Weekly AI teardowns for business owners. Real deployments, real numbers, and the blueprint your team needs to build the same thing.",
		get children() {
			return [
				ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Input, {
					type: "email",
					name: "email",
					placeholder: "your@email.com",
					required: true,
					autocomplete: "email",
					spellcheck: false
				})), escape(createComponent(Button, {
					type: "submit",
					"class": "shrink-0",
					children: "{ SUBSCRIBE }"
				}))),
				ssr(_tmpl$2, ssrHydrationKey(), escape([
					[
						"01",
						"The story",
						"The company, the problem, why it mattered. What we deployed and where it moved the needle."
					],
					[
						"02",
						"The blueprint",
						"The full agent lifecycle. The tools, the prompts, the evals. Forward it to your team each week for a quick AI win."
					],
					[
						"03",
						"The numbers",
						"Real cost, real hours saved, real revenue. No hypotheticals — what actually happened when it shipped."
					]
				].map(([num, title, body]) => ssr(_tmpl$4, ssrHydrationKey(), escape(num), escape(title), escape(body))))),
				ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Show, {
					get when() {
						return issues();
					},
					get fallback() {
						return ssr(_tmpl$5, ssrHydrationKey());
					},
					keyed: true,
					children: (list) => createComponent(For, {
						each: list,
						children: (i) => ssr(_tmpl$6, ssrHydrationKey(), `/newsletter/${escape(i.id, true)}`, escape(String(i.issueNumber).padStart(2, "0")), i.publishedAt ? ` · ${escape(new Date(i.publishedAt).toLocaleDateString("en-US", {
							month: "long",
							year: "numeric"
						}))}` : "", escape(i.title))
					})
				})))
			];
		}
	});
}
//#endregion
export { Newsletter as default, id$$ };
