import { a as useParams, n as Title } from "./_ssr/ssr.mjs";
import { K as Show, Q as createComponent, h as escape, w as ssrHydrationKey, x as ssr } from "./_libs/@solid-primitives/event-listener+[...].mjs";
import { t as createAsync } from "./_ssr/createAsync-BHIljAf5.mjs";
import { t as Button } from "./_ssr/button-DhSTr1ZL.mjs";
import { t as Page } from "./_ssr/site-BEFr8Sts.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/_id_-DLIGv-8z.js
var _tmpl$ = ["<div", " class=\"mx-auto max-w-2xl px-6 py-24 text-center\"><p class=\"font-sans text-muted-foreground\">Loading…</p></div>"];
var _tmpl$2 = ["<div", " class=\"mx-auto max-w-2xl px-6 py-24 text-center\"><p class=\"font-sans text-muted-foreground\">That issue doesn't exist.</p></div>"];
var _tmpl$3 = [
	"<article",
	" class=\"issue-body mx-auto max-w-2xl px-6 pb-16 pt-10\"><p class=\"font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground\"><a href=\"/newsletter\" class=\"hover:text-foreground\">The Cactus Dispatch</a> / Issue <!--$-->",
	"<!--/--></p><h1 class=\"mt-4 font-serif text-4xl leading-tight md:text-5xl\">",
	"</h1><div class=\"mt-8\">",
	"</div></article>"
];
var _tmpl$4 = [
	"<section",
	" class=\"mx-auto max-w-2xl px-6 pb-24 text-center\"><h3 class=\"font-serif text-2xl\">Want to start turning your company AI-native?</h3><p class=\"mx-auto mt-3 max-w-md font-sans text-sm text-muted-foreground\">I build a custom company brain for one reader every week, completely free. All you have to do is click below.</p><!--$-->",
	"<!--/--></section>"
];
var id$$ = "src/routes/newsletter/[id].tsx?pick=default&pick=$css";
function DispatchIssuePage() {
	const params = useParams();
	const issue = createAsync(async () => {
		const res = await fetch(`https://madcactus.org/api/newsletter-issues/${params.id}`);
		if (!res.ok) return null;
		return await res.json();
	});
	return createComponent(Show, {
		get when() {
			return issue() !== void 0;
		},
		get fallback() {
			return createComponent(Page, {
				title: "The Cactus Dispatch",
				description: "",
				get children() {
					return ssr(_tmpl$, ssrHydrationKey());
				}
			});
		},
		get children() {
			return createComponent(Show, {
				get when() {
					return issue();
				},
				get fallback() {
					return createComponent(Page, {
						title: "Issue not found — The Cactus Dispatch",
						description: "",
						get children() {
							return ssr(_tmpl$2, ssrHydrationKey());
						}
					});
				},
				children: (i) => createComponent(Page, {
					get title() {
						return `${i().subject} — The Cactus Dispatch`;
					},
					get description() {
						return i().subject;
					},
					get children() {
						return [
							createComponent(Title, { get children() {
								return [i().subject, " — The Cactus Dispatch"];
							} }),
							ssr(_tmpl$3, ssrHydrationKey(), escape(String(i().issueNumber).padStart(2, "0")), escape(i().subject), i().html),
							ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(Button, {
								as: "a",
								get href() {
									return `/brain?ref=${i().id}`;
								},
								"class": "mt-6",
								children: "{ GET YOUR COMPANY BRAIN }"
							})))
						];
					}
				})
			});
		}
	});
}
//#endregion
export { DispatchIssuePage as default, id$$ };
