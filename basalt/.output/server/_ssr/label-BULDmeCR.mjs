import { W as mergeProps, Z as splitProps, _ as ssrElement } from "../_libs/solid-js.mjs";
import { J as cn } from "./src-CEr7MizD.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/label-BULDmeCR.js
var Label = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("label", mergeProps({ get ["class"]() {
		return cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", local.class);
	} }, others), void 0, true);
};
//#endregion
export { Label as t };
