import { W as mergeProps, Z as splitProps, _ as ssrElement } from "../_libs/solid-js.mjs";
import { J as cn } from "./src-BhApVd6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/input-BznnxyTF.js
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
//#endregion
export { Input as t };
