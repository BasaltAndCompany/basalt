import { Q as createComponent, _t as splitProps, ut as mergeProps } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { A as mergeDefaultProps, a as __export, i as Polymorphic, l as cn, p as createTagName } from "./button-DhSTr1ZL.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/separator-DDZ3XAMA.js
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
