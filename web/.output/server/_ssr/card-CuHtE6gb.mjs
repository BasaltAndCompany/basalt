import { W as mergeProps, Z as splitProps, _ as ssrElement } from "../_libs/solid-js.mjs";
import { J as cn } from "./src-BhApVd6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/card-CuHtE6gb.js
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
export { CardHeader as a, CardFooter as i, CardContent as n, CardTitle as o, CardDescription as r, Card as t };
