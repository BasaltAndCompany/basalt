import { C as ssrElement, _t as splitProps, ut as mergeProps } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { l as cn } from "./button-DhSTr1ZL.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/card-VdNGGBB9.js
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
//#endregion
export { CardFooter as a, CardDescription as i, Card as n, CardHeader as o, CardContent as r, CardTitle as s, Badge as t };
