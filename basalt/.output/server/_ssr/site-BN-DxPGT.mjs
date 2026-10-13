import { n as Title, t as Meta } from "./ssr.mjs";
import { M as createComponent, h as ssr, l as escape, v as ssrHydrationKey } from "../_libs/solid-js.mjs";
import { m as Button } from "./src-CEr7MizD.mjs";
import { t as Logo } from "./logo-ekwqMmrK.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/site-BN-DxPGT.js
var _tmpl$ = [
	"<div",
	" class=\"min-h-svh bg-background text-foreground\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$2 = [
	"<header",
	" class=\"flex items-center justify-between px-6 py-5\"><a href=\"/\" aria-label=\"Basalt &amp; Company home\">",
	"</a><nav class=\"flex items-center gap-6\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></nav></header>"
];
var _tmpl$3 = [
	"<footer",
	" class=\"border-t border-border px-6 py-10\"><div class=\"flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between\"><div><!--$-->",
	"<!--/--><p class=\"mt-2 font-sans text-xs tracking-wide text-muted-foreground\">© 2026 Basalt &amp; Company</p></div><div class=\"flex items-center gap-6\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div></footer>"
];
function NavLink(props) {
	return createComponent(Button, {
		variant: "link",
		size: "link",
		as: "a",
		get href() {
			return props.href;
		},
		get children() {
			return props.children;
		}
	});
}
function Page(props) {
	return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Title, { get children() {
		return props.title;
	} })), escape(createComponent(Meta, {
		name: "description",
		get content() {
			return props.description;
		}
	})), escape(createComponent(SiteHeader, {})), escape(props.children), escape(createComponent(SiteFooter, {})));
}
function SiteHeader() {
	return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Logo, {
		variant: "word",
		redDot: true,
		suffix: "& Company",
		"class": "text-[20px]"
	})), escape(createComponent(NavLink, {
		href: "/contact",
		children: "Contact"
	})), escape(createComponent(NavLink, {
		href: "/writing",
		children: "Writing"
	})), escape(createComponent(NavLink, {
		href: "/careers",
		children: "Careers"
	})));
}
function SiteFooter() {
	return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Logo, {
		variant: "word",
		redDot: true,
		"class": "text-[18px]"
	})), escape(createComponent(NavLink, {
		href: "/newsletter",
		children: "Newsletter"
	})), escape(createComponent(Button, {
		variant: "link",
		size: "link",
		as: "a",
		href: "mailto:cpfeifer@basalt.ac",
		children: "Email"
	})), escape(createComponent(Button, {
		variant: "link",
		size: "link",
		as: "a",
		href: "https://cal.com/cpfeifer/info-meeting",
		target: "_blank",
		children: "Calendar"
	})));
}
//#endregion
export { Page as t };
