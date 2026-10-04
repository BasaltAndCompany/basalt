import { C as ssrElement, Q as createComponent, gt as splitProps, lt as mergeProps } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { A as mergeDefaultProps, a as __export, i as Polymorphic, l as cn, p as createTagName } from "./button-DTuGqGhm.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/separator-Bsik0zom.js
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		secondary: "border-transparent bg-secondary text-secondary-foreground",
		destructive: "border-transparent bg-destructive text-white",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
var Badge = (props) => {
	const [local, others] = splitProps(props, ["class", "variant"]);
	return ssrElement("span", mergeProps({ get ["class"]() {
		return cn(badgeVariants({ variant: local.variant }), local.class);
	} }, others), void 0, true);
};
var Card = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("rounded-lg border bg-card text-card-foreground shadow-sm", local.class);
	} }, others), void 0, true);
};
var CardHeader = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("flex flex-col space-y-1.5 p-6", local.class);
	} }, others), void 0, true);
};
var CardTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("h3", mergeProps({ get ["class"]() {
		return cn("text-lg font-semibold leading-none tracking-tight", local.class);
	} }, others), void 0, true);
};
var CardDescription = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("p", mergeProps({ get ["class"]() {
		return cn("text-sm text-muted-foreground", local.class);
	} }, others), void 0, true);
};
var CardContent = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("p-6 pt-0", local.class);
	} }, others), void 0, true);
};
var CardFooter = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("flex items-center p-6 pt-0", local.class);
	} }, others), void 0, true);
};
var Input = (props) => {
	const [local, others] = splitProps(props, ["class", "type"]);
	return ssrElement("input", mergeProps({
		get type() {
			return local.type ?? "text";
		},
		get ["class"]() {
			return cn("border-input placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", local.class);
		}
	}, others), void 0, true);
};
var Label = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("label", mergeProps({ get ["class"]() {
		return cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", local.class);
	} }, others), void 0, true);
};
__export({}, {
	Root: () => SeparatorRoot,
	Separator: () => Separator$1
});
function SeparatorRoot(props) {
	let ref;
	const [local, others] = splitProps(mergeDefaultProps({ orientation: "horizontal" }, props), ["ref", "orientation"]);
	const tagName = createTagName(() => ref, () => "hr");
	return createComponent(Polymorphic, mergeProps({
		as: "hr",
		get role() {
			return tagName() !== "hr" ? "separator" : void 0;
		},
		get ["aria-orientation"]() {
			return local.orientation === "vertical" ? "vertical" : void 0;
		},
		get ["data-orientation"]() {
			return local.orientation;
		}
	}, others));
}
var Separator$1 = SeparatorRoot;
var Separator = (props) => {
	const [local, others] = splitProps(props, ["class", "orientation"]);
	return createComponent(SeparatorRoot, mergeProps({
		get orientation() {
			return local.orientation ?? "horizontal";
		},
		get ["class"]() {
			return cn("shrink-0 bg-border", local.orientation === "vertical" ? "h-full w-px" : "h-px w-full", local.class);
		}
	}, others));
};
//#endregion
export { CardFooter as a, Input as c, SeparatorRoot as d, CardDescription as i, Label as l, Card as n, CardHeader as o, CardContent as r, CardTitle as s, Badge as t, Separator as u };
