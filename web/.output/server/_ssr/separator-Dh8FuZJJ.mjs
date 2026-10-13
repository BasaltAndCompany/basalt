import { M as createComponent, W as mergeProps, Z as splitProps } from "../_libs/solid-js.mjs";
import { Dt as mergeDefaultProps, H as __export, J as cn, M as Polymorphic, pt as createTagName } from "./src-BhApVd6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/separator-Dh8FuZJJ.js
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
export { SeparatorRoot as n, Separator as t };
