import { C as ssrElement, _t as splitProps, ut as mergeProps } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { l as cn } from "./button-DhSTr1ZL.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/label-BMNGCOqc.js
var Label = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("label", mergeProps({ get ["class"]() {
		return cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", local.class);
	} }, others), void 0, true);
};
//#endregion
export { Label as t };
