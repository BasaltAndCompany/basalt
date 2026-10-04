import { B as createSignal, E as Show, M as createComponent, h as ssr, l as escape, v as ssrHydrationKey } from "../_libs/solid-js.mjs";
import { m as Button } from "./src-CEr7MizD.mjs";
import { t as Page } from "./site-n8E3Se2v.mjs";
import { t as Input } from "./input-DcyE3u5y.mjs";
import { t as Label } from "./label-BULDmeCR.mjs";
import { t as Textarea } from "./textarea-4BFrY__8.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/contact-B8p6bWTk.js
var _tmpl$ = [
	"<form",
	" class=\"mt-10 space-y-6\"><div class=\"absolute -left-[9999px]\" aria-hidden=\"true\"><label for=\"website\">Website</label><!--$-->",
	"<!--/--></div><div class=\"space-y-1.5\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><div class=\"space-y-1.5\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><div class=\"space-y-1.5\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><p class=\"min-h-5 font-sans text-sm text-destructive\" role=\"alert\">",
	"</p><!--$-->",
	"<!--/--></form>"
];
var _tmpl$2 = [
	"<section",
	" class=\"mx-auto max-w-xl px-6 pb-24 pt-14\"><h1 class=\"font-serif text-5xl leading-[1.05] tracking-[-0.01em]\">Start a conversation</h1><p class=\"mt-5 font-sans text-base leading-relaxed text-muted-foreground\">Tell us what your business is wrestling with. We read everything and reply within a couple of days.</p><!--$-->",
	"<!--/--></section>"
];
var _tmpl$3 = ["<p", " class=\"mt-10 font-serif text-lg leading-relaxed\">Received. We'll reply shortly. — Collin</p>"];
var id$$ = "src/routes/contact.tsx?pick=default&pick=$css";
function Contact() {
	const [sending, setSending] = createSignal(false);
	const [done, setDone] = createSignal(false);
	const [error, setError] = createSignal("");
	return createComponent(Page, {
		title: "Contact | Basalt & Company",
		description: "Start a conversation with Basalt & Company.",
		get children() {
			return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Show, {
				get when() {
					return !done();
				},
				get fallback() {
					return ssr(_tmpl$3, ssrHydrationKey());
				},
				get children() {
					return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Input, {
						id: "website",
						name: "website",
						type: "text",
						tabindex: -1,
						autocomplete: "off"
					})), escape(createComponent(Label, {
						"for": "contact-name",
						children: "Name *"
					})), escape(createComponent(Input, {
						id: "contact-name",
						name: "name",
						required: true,
						autocomplete: "name"
					})), escape(createComponent(Label, {
						"for": "contact-email",
						children: "Email *"
					})), escape(createComponent(Input, {
						id: "contact-email",
						name: "email",
						type: "email",
						required: true,
						autocomplete: "email",
						spellcheck: false
					})), escape(createComponent(Label, {
						"for": "contact-message",
						children: "What's on your mind? *"
					})), escape(createComponent(Textarea, {
						id: "contact-message",
						name: "message",
						rows: 5,
						required: true
					})), escape(error()), escape(createComponent(Button, {
						type: "submit",
						size: "lg",
						get disabled() {
							return sending();
						},
						get children() {
							return sending() ? "{ SENDING }" : "{ SEND }";
						}
					})));
				}
			})));
		}
	});
}
//#endregion
export { Contact as default, id$$ };
