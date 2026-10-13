import { $ as untrack, B as createSignal, E as Show, F as createEffect, G as on, I as createMemo, K as onCleanup, M as createComponent, O as Switch, P as createContext, T as Match, V as createUniqueId, W as mergeProps, Z as splitProps, _ as ssrElement, c as Portal, d as memo, et as useContext, g as ssrAttribute, h as ssr, j as children, l as escape, n as produce, q as onMount, t as createStore, v as ssrHydrationKey, w as For, y as ssrStyle } from "../_libs/solid-js.mjs";
import { $ as createControllableBooleanSignal, A as FormControlErrorMessage, At as scrollIntoViewport, B as SelectValue, C as DialogTrigger$1, Ct as index_default$1, D as FORM_CONTROL_PROP_NAMES, Dt as mergeDefaultProps, E as FORM_CONTROL_FIELD_PROP_NAMES, Et as isWebKit$1, F as Select, H as __export, I as SelectContent, J as cn, K as callHandler, L as SelectHiddenSelect, M as Polymorphic, Mt as useFormControlContext, N as Popper, Nt as useLocale, O as FormControlContext, P as PopperArrow, Pt as visuallyHiddenStyles, Q as createControllableArraySignal, R as SelectItem, S as DialogTitle$1, St as index_default, T as EventKey, Tt as isPointInPolygon, U as access$1, V as Toaster, W as addItemToArray, X as composeEventHandlers, Y as combineStyle, Z as contains$1, _ as DialogContent$1, _t as getDocument, a as AlertDialogCancel, at as createFormResetListener, b as DialogPortal$1, bt as getWindow$1, c as AlertDialogFooter, ct as createListState, d as AlertDialogTrigger, dt as createSelectableItem, et as createControllableSignal, f as AlertTitle, ft as createSelectableList, g as DialogCloseButton, gt as focusWithoutScrolling, h as ButtonRoot, i as AlertDialogAction, it as createFormControlField, j as FormControlLabel, jt as toast, k as FormControlDescription, kt as removeItemFromArray, l as AlertDialogHeader, lt as createRegisterId, m as Button, mt as dialog_exports, n as AlertDescription, nt as createFocusScope, o as AlertDialogContent, ot as createGenerateId, p as Badge, pt as createTagName, q as chain, r as AlertDialog, rt as createFormControl, s as AlertDialogDescription, st as createHideOutside, t as Alert, tt as createDisclosureState, u as AlertDialogTitle, ut as createSelectableCollection, v as DialogDescription$1, w as DismissableLayer, wt as isFunction, x as DialogRoot, y as DialogOverlay$1, yt as getFocusableTreeWalker, z as SelectTrigger } from "./src-BhApVd6d.mjs";
import { t as Input$1 } from "./input-BznnxyTF.mjs";
import { t as Label } from "./label-DOPFZeUu.mjs";
import { t as Textarea } from "./textarea-Dc6q7q4R.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-CuHtE6gb.mjs";
import { n as SeparatorRoot, t as Separator$1 } from "./separator-Dh8FuZJJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/ui-CK3TGcz9.js
/**
* Utility for chaining multiple `ref` assignments with `props.ref` forwarding.
* @param refs list of ref setters. Can be a `props.ref` prop for ref forwarding or a setter to a local variable (`el => ref = el`).
* @example
* ```tsx
* interface ButtonProps {
*    ref?: Ref<HTMLButtonElement>
* }
* function Button (props: ButtonProps) {
*    let ref: HTMLButtonElement | undefined
*    onMount(() => {
*        // use the local ref
*    })
*    return <button ref={mergeRefs(props.ref, el => ref = el)} />
* }
*
* // in consumer's component:
* let ref: HTMLButtonElement | undefined
* <Button ref={ref} />
* ```
*/
function mergeRefs(...refs) {
	return chain(refs);
}
function createToggleState(props = {}) {
	const [isSelected, _setIsSelected] = createControllableBooleanSignal({
		value: () => access$1(props.isSelected),
		defaultValue: () => !!access$1(props.defaultIsSelected),
		onChange: (value) => props.onSelectedChange?.(value)
	});
	const setIsSelected = (value) => {
		if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) _setIsSelected(value);
	};
	const toggle = () => {
		if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) _setIsSelected(!isSelected());
	};
	return {
		isSelected,
		setIsSelected,
		toggle
	};
}
__export({}, {
	Checkbox: () => Checkbox$1,
	Control: () => CheckboxControl,
	Description: () => CheckboxDescription,
	ErrorMessage: () => CheckboxErrorMessage,
	Indicator: () => CheckboxIndicator,
	Input: () => CheckboxInput,
	Label: () => CheckboxLabel,
	Root: () => CheckboxRoot,
	useCheckboxContext: () => useCheckboxContext
});
var CheckboxContext = createContext();
function useCheckboxContext() {
	const context = useContext(CheckboxContext);
	if (context === void 0) throw new Error("[kobalte]: `useCheckboxContext` must be used within a `Checkbox` component");
	return context;
}
function CheckboxControl(props) {
	const formControlContext = useFormControlContext();
	const context = useCheckboxContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("control") }, props), ["onClick", "onKeyDown"]);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		context.toggle();
		context.inputRef()?.focus({ preventScroll: true });
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.key === EventKey.Space) {
			context.toggle();
			context.inputRef()?.focus({ preventScroll: true });
		}
	};
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		onClick,
		onKeyDown
	}, () => formControlContext.dataset(), () => context.dataset(), others));
}
function CheckboxDescription(props) {
	const context = useCheckboxContext();
	return createComponent(FormControlDescription, mergeProps(() => context.dataset(), props));
}
function CheckboxErrorMessage(props) {
	const context = useCheckboxContext();
	return createComponent(FormControlErrorMessage, mergeProps(() => context.dataset(), props));
}
function CheckboxIndicator(props) {
	const formControlContext = useFormControlContext();
	const context = useCheckboxContext();
	const [ref, setRef] = createSignal();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("indicator") }, props), ["ref", "forceMount"]);
	const { present } = index_default({
		show: () => local.forceMount || context.indeterminate() || context.checked(),
		element: () => ref() ?? null
	});
	return createComponent(Show, {
		get when() {
			return present();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({ as: "div" }, () => formControlContext.dataset(), () => context.dataset(), others));
		}
	});
}
function CheckboxInput(props) {
	let ref;
	const formControlContext = useFormControlContext();
	const context = useCheckboxContext();
	const [local, formControlFieldProps, others] = splitProps(mergeDefaultProps({ id: context.generateId("input") }, props), [
		"ref",
		"style",
		"onChange",
		"onFocus",
		"onBlur"
	], FORM_CONTROL_FIELD_PROP_NAMES);
	const { fieldProps } = createFormControlField(formControlFieldProps);
	const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
	const onChange = (e) => {
		callHandler(e, local.onChange);
		e.stopPropagation();
		if (!isInternalChangeEvent()) {
			const target = e.target;
			context.setIsChecked(target.checked);
			target.checked = context.checked();
		}
		setIsInternalChangeEvent(false);
	};
	const onFocus = (e) => {
		callHandler(e, local.onFocus);
		context.setIsFocused(true);
	};
	const onBlur = (e) => {
		callHandler(e, local.onBlur);
		context.setIsFocused(false);
	};
	createEffect(on([() => context.checked(), () => context.value()], () => {
		setIsInternalChangeEvent(true);
	}, { defer: true }));
	createEffect(on([
		() => ref,
		() => context.indeterminate(),
		() => context.checked()
	], ([ref2, indeterminate]) => {
		if (ref2) ref2.indeterminate = indeterminate;
	}));
	return createComponent(Polymorphic, mergeProps({
		as: "input",
		type: "checkbox",
		get id() {
			return fieldProps.id();
		},
		get name() {
			return formControlContext.name();
		},
		get value() {
			return context.value();
		},
		get checked() {
			return context.checked();
		},
		get required() {
			return formControlContext.isRequired();
		},
		get disabled() {
			return formControlContext.isDisabled();
		},
		get readonly() {
			return formControlContext.isReadOnly();
		},
		get style() {
			return combineStyle(visuallyHiddenStyles, local.style);
		},
		get ["aria-label"]() {
			return fieldProps.ariaLabel();
		},
		get ["aria-labelledby"]() {
			return fieldProps.ariaLabelledBy();
		},
		get ["aria-describedby"]() {
			return fieldProps.ariaDescribedBy();
		},
		get ["aria-invalid"]() {
			return formControlContext.validationState() === "invalid" || void 0;
		},
		get ["aria-required"]() {
			return formControlContext.isRequired();
		},
		get ["aria-disabled"]() {
			return formControlContext.isDisabled();
		},
		get ["aria-readonly"]() {
			return formControlContext.isReadOnly();
		},
		onChange,
		onFocus,
		onBlur
	}, () => formControlContext.dataset(), () => context.dataset(), others));
}
function CheckboxLabel(props) {
	const context = useCheckboxContext();
	return createComponent(FormControlLabel, mergeProps(() => context.dataset(), props));
}
function CheckboxRoot(props) {
	let ref;
	const [local, formControlProps, others] = splitProps(mergeDefaultProps({
		value: "on",
		id: `checkbox-${createUniqueId()}`
	}, props), [
		"ref",
		"children",
		"value",
		"checked",
		"defaultChecked",
		"indeterminate",
		"onChange",
		"onPointerDown"
	], FORM_CONTROL_PROP_NAMES);
	const [inputRef, setInputRef] = createSignal();
	const [isFocused, setIsFocused] = createSignal(false);
	const { formControlContext } = createFormControl(formControlProps);
	const state = createToggleState({
		isSelected: () => local.checked,
		defaultIsSelected: () => local.defaultChecked,
		onSelectedChange: (selected) => local.onChange?.(selected),
		isDisabled: () => formControlContext.isDisabled(),
		isReadOnly: () => formControlContext.isReadOnly()
	});
	createFormResetListener(() => ref, () => state.setIsSelected(local.defaultChecked ?? false));
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		if (isFocused()) e.preventDefault();
	};
	const dataset = createMemo(() => ({
		"data-checked": state.isSelected() ? "" : void 0,
		"data-indeterminate": local.indeterminate ? "" : void 0
	}));
	const context = {
		value: () => local.value,
		dataset,
		checked: () => state.isSelected(),
		indeterminate: () => local.indeterminate ?? false,
		inputRef,
		generateId: createGenerateId(() => access$1(formControlProps.id)),
		toggle: () => state.toggle(),
		setIsChecked: (isChecked) => state.setIsSelected(isChecked),
		setIsFocused,
		setInputRef
	};
	return createComponent(FormControlContext.Provider, {
		value: formControlContext,
		get children() {
			return createComponent(CheckboxContext.Provider, {
				value: context,
				get children() {
					return createComponent(Polymorphic, mergeProps({
						as: "div",
						role: "group",
						get id() {
							return access$1(formControlProps.id);
						},
						onPointerDown
					}, () => formControlContext.dataset(), dataset, others, { get children() {
						return createComponent(CheckboxRootChild, {
							state: context,
							get children() {
								return local.children;
							}
						});
					} }));
				}
			});
		}
	});
}
function CheckboxRootChild(props) {
	return children(() => {
		const body = props.children;
		return isFunction(body) ? body(props.state) : body;
	})();
}
var Checkbox$1 = Object.assign(CheckboxRoot, {
	Control: CheckboxControl,
	Description: CheckboxDescription,
	ErrorMessage: CheckboxErrorMessage,
	Indicator: CheckboxIndicator,
	Input: CheckboxInput,
	Label: CheckboxLabel
});
var _tmpl$$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M5 12l5 5l10 -10\"></path></svg>"];
var _tmpl$2$3 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M5 12l14 0\"></path></svg>"];
var Checkbox = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(CheckboxRoot, mergeProps({ get ["class"]() {
		return cn("items-top group relative flex space-x-2", local.class);
	} }, others, { get children() {
		return [createComponent(CheckboxInput, { "class": "peer" }), createComponent(CheckboxControl, {
			"class": "size-4 shrink-0 rounded-sm border border-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 data-[checked]:border-none data-[indeterminate]:border-none data-[checked]:bg-primary data-[indeterminate]:bg-primary data-[checked]:text-primary-foreground data-[indeterminate]:text-primary-foreground",
			get children() {
				return createComponent(CheckboxIndicator, { get children() {
					return createComponent(Switch, { get children() {
						return [createComponent(Match, {
							get when() {
								return !others.indeterminate;
							},
							get children() {
								return ssr(_tmpl$$5, ssrHydrationKey());
							}
						}), createComponent(Match, {
							get when() {
								return others.indeterminate;
							},
							get children() {
								return ssr(_tmpl$2$3, ssrHydrationKey());
							}
						})];
					} });
				} });
			}
		})];
	} }));
};
__export({}, {
	Control: () => SwitchControl$1,
	Description: () => SwitchDescription,
	ErrorMessage: () => SwitchErrorMessage,
	Input: () => SwitchInput,
	Label: () => SwitchLabel$1,
	Root: () => SwitchRoot,
	Switch: () => Switch$2,
	Thumb: () => SwitchThumb$1,
	useSwitchContext: () => useSwitchContext
});
var SwitchContext = createContext();
function useSwitchContext() {
	const context = useContext(SwitchContext);
	if (context === void 0) throw new Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");
	return context;
}
function SwitchControl$1(props) {
	const formControlContext = useFormControlContext();
	const context = useSwitchContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("control") }, props), ["onClick", "onKeyDown"]);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		context.toggle();
		context.inputRef()?.focus({ preventScroll: true });
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.key === EventKey.Space) {
			context.toggle();
			context.inputRef()?.focus({ preventScroll: true });
		}
	};
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		onClick,
		onKeyDown
	}, () => formControlContext.dataset(), () => context.dataset(), others));
}
function SwitchDescription(props) {
	const context = useSwitchContext();
	return createComponent(FormControlDescription, mergeProps(() => context.dataset(), props));
}
function SwitchErrorMessage(props) {
	const context = useSwitchContext();
	return createComponent(FormControlErrorMessage, mergeProps(() => context.dataset(), props));
}
function SwitchInput(props) {
	const formControlContext = useFormControlContext();
	const context = useSwitchContext();
	const [local, formControlFieldProps, others] = splitProps(mergeDefaultProps({ id: context.generateId("input") }, props), [
		"ref",
		"style",
		"onChange",
		"onFocus",
		"onBlur"
	], FORM_CONTROL_FIELD_PROP_NAMES);
	const { fieldProps } = createFormControlField(formControlFieldProps);
	const onChange = (e) => {
		callHandler(e, local.onChange);
		e.stopPropagation();
		const target = e.target;
		context.setIsChecked(target.checked);
		target.checked = context.checked();
	};
	const onFocus = (e) => {
		callHandler(e, local.onFocus);
		context.setIsFocused(true);
	};
	const onBlur = (e) => {
		callHandler(e, local.onBlur);
		context.setIsFocused(false);
	};
	return createComponent(Polymorphic, mergeProps({
		as: "input",
		type: "checkbox",
		role: "switch",
		get id() {
			return fieldProps.id();
		},
		get name() {
			return formControlContext.name();
		},
		get value() {
			return context.value();
		},
		get checked() {
			return context.checked();
		},
		get required() {
			return formControlContext.isRequired();
		},
		get disabled() {
			return formControlContext.isDisabled();
		},
		get readonly() {
			return formControlContext.isReadOnly();
		},
		get style() {
			return combineStyle({ ...visuallyHiddenStyles }, local.style);
		},
		get ["aria-checked"]() {
			return context.checked();
		},
		get ["aria-label"]() {
			return fieldProps.ariaLabel();
		},
		get ["aria-labelledby"]() {
			return fieldProps.ariaLabelledBy();
		},
		get ["aria-describedby"]() {
			return fieldProps.ariaDescribedBy();
		},
		get ["aria-invalid"]() {
			return formControlContext.validationState() === "invalid" || void 0;
		},
		get ["aria-required"]() {
			return formControlContext.isRequired() || void 0;
		},
		get ["aria-disabled"]() {
			return formControlContext.isDisabled() || void 0;
		},
		get ["aria-readonly"]() {
			return formControlContext.isReadOnly() || void 0;
		},
		onChange,
		onFocus,
		onBlur
	}, () => formControlContext.dataset(), () => context.dataset(), others));
}
function SwitchLabel$1(props) {
	const context = useSwitchContext();
	return createComponent(FormControlLabel, mergeProps(() => context.dataset(), props));
}
function SwitchRoot(props) {
	let ref;
	const [local, formControlProps, others] = splitProps(mergeDefaultProps({
		value: "on",
		id: `switch-${createUniqueId()}`
	}, props), [
		"ref",
		"children",
		"value",
		"checked",
		"defaultChecked",
		"onChange",
		"onPointerDown"
	], FORM_CONTROL_PROP_NAMES);
	const [inputRef, setInputRef] = createSignal();
	const [isFocused, setIsFocused] = createSignal(false);
	const { formControlContext } = createFormControl(formControlProps);
	const state = createToggleState({
		isSelected: () => local.checked,
		defaultIsSelected: () => local.defaultChecked,
		onSelectedChange: (selected) => local.onChange?.(selected),
		isDisabled: () => formControlContext.isDisabled(),
		isReadOnly: () => formControlContext.isReadOnly()
	});
	createFormResetListener(() => ref, () => state.setIsSelected(local.defaultChecked ?? false));
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		if (isFocused()) e.preventDefault();
	};
	const dataset = createMemo(() => ({ "data-checked": state.isSelected() ? "" : void 0 }));
	const context = {
		value: () => local.value,
		dataset,
		checked: () => state.isSelected(),
		inputRef,
		generateId: createGenerateId(() => access$1(formControlProps.id)),
		toggle: () => state.toggle(),
		setIsChecked: (isChecked) => state.setIsSelected(isChecked),
		setIsFocused,
		setInputRef
	};
	return createComponent(FormControlContext.Provider, {
		value: formControlContext,
		get children() {
			return createComponent(SwitchContext.Provider, {
				value: context,
				get children() {
					return createComponent(Polymorphic, mergeProps({
						as: "div",
						role: "group",
						get id() {
							return access$1(formControlProps.id);
						},
						onPointerDown
					}, () => formControlContext.dataset(), dataset, others, { get children() {
						return createComponent(SwitchRootChild, {
							state: context,
							get children() {
								return local.children;
							}
						});
					} }));
				}
			});
		}
	});
}
function SwitchRootChild(props) {
	return children(() => {
		const body = props.children;
		return isFunction(body) ? body(props.state) : body;
	})();
}
function SwitchThumb$1(props) {
	const formControlContext = useFormControlContext();
	const context = useSwitchContext();
	return createComponent(Polymorphic, mergeProps({ as: "div" }, () => formControlContext.dataset(), () => context.dataset(), mergeDefaultProps({ id: context.generateId("thumb") }, props)));
}
var Switch$2 = Object.assign(SwitchRoot, {
	Control: SwitchControl$1,
	Description: SwitchDescription,
	ErrorMessage: SwitchErrorMessage,
	Input: SwitchInput,
	Label: SwitchLabel$1,
	Thumb: SwitchThumb$1
});
var Switch$1 = SwitchRoot;
var SwitchControl = (props) => {
	const [local, others] = splitProps(props, ["class", "children"]);
	return [createComponent(SwitchInput, { get ["class"]() {
		return cn("[&:focus-visible+div]:outline-none [&:focus-visible+div]:ring-2 [&:focus-visible+div]:ring-ring [&:focus-visible+div]:ring-offset-2 [&:focus-visible+div]:ring-offset-background", local.class);
	} }), createComponent(SwitchControl$1, mergeProps({ get ["class"]() {
		return cn("inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-[color,background-color,box-shadow] data-[disabled]:cursor-not-allowed data-[checked]:bg-primary data-[disabled]:opacity-50", local.class);
	} }, others, { get children() {
		return local.children;
	} }))];
};
var SwitchThumb = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(SwitchThumb$1, mergeProps({ get ["class"]() {
		return cn("pointer-events-none block size-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-5", local.class);
	} }, others));
};
var SwitchLabel = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(SwitchLabel$1, mergeProps({ get ["class"]() {
		return cn("text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70", local.class);
	} }, others));
};
var _tmpl$$4 = [
	"<div",
	" class=\"fixed inset-0 z-50 flex items-start justify-center sm:items-center\">",
	"</div>"
];
var _tmpl$2$2 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
var _tmpl$3$2 = ["<span", " class=\"sr-only\">Close</span>"];
var Dialog$1 = DialogRoot;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = (props) => {
	const [, rest] = splitProps(props, ["children"]);
	return createComponent(DialogPortal$1, mergeProps(rest, { get children() {
		return ssr(_tmpl$$4, ssrHydrationKey(), escape(props.children));
	} }));
};
var DialogOverlay = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(DialogOverlay$1, mergeProps({ get ["class"]() {
		return cn("fixed inset-0 z-50 bg-background/80 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0", props.class);
	} }, rest));
};
var DialogContent = (props) => {
	const [, rest] = splitProps(props, ["class", "children"]);
	return createComponent(DialogPortal, { get children() {
		return [createComponent(DialogOverlay, {}), createComponent(DialogContent$1, mergeProps({ get ["class"]() {
			return cn("fixed left-1/2 top-1/2 z-50 grid max-h-screen w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg", props.class);
		} }, rest, { get children() {
			return [props.children, createComponent(DialogCloseButton, {
				"class": "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground",
				get children() {
					return [ssr(_tmpl$2$2, ssrHydrationKey()), ssr(_tmpl$3$2, ssrHydrationKey())];
				}
			})];
		} }))];
	} });
};
var DialogHeader = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("flex flex-col space-y-1.5 text-center sm:text-left", props.class);
	} }, rest), void 0, true);
};
var DialogFooter = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", props.class);
	} }, rest), void 0, true);
};
var DialogTitle = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(DialogTitle$1, mergeProps({ get ["class"]() {
		return cn("text-lg font-semibold leading-none tracking-tight", props.class);
	} }, rest));
};
var DialogDescription = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(DialogDescription$1, mergeProps({ get ["class"]() {
		return cn("text-sm text-muted-foreground", props.class);
	} }, rest));
};
var DomCollectionContext = createContext();
function useOptionalDomCollectionContext() {
	return useContext(DomCollectionContext);
}
function useDomCollectionContext() {
	const context = useOptionalDomCollectionContext();
	if (context === void 0) throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
	return context;
}
function isElementPreceding(a, b) {
	return Boolean(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
function findDOMIndex(items, item) {
	const itemEl = item.ref();
	if (!itemEl) return -1;
	let length = items.length;
	if (!length) return -1;
	while (length--) {
		const currentItemEl = items[length]?.ref();
		if (!currentItemEl) continue;
		if (isElementPreceding(currentItemEl, itemEl)) return length + 1;
	}
	return 0;
}
function sortBasedOnDOMPosition(items) {
	const pairs = items.map((item, index) => [index, item]);
	let isOrderDifferent = false;
	pairs.sort(([indexA, a], [indexB, b]) => {
		const elementA = a.ref();
		const elementB = b.ref();
		if (elementA === elementB) return 0;
		if (!elementA || !elementB) return 0;
		if (isElementPreceding(elementA, elementB)) {
			if (indexA > indexB) isOrderDifferent = true;
			return -1;
		}
		if (indexA < indexB) isOrderDifferent = true;
		return 1;
	});
	if (isOrderDifferent) return pairs.map(([_, item]) => item);
	return items;
}
function setItemsBasedOnDOMPosition(items, setItems) {
	const sortedItems = sortBasedOnDOMPosition(items);
	if (items !== sortedItems) setItems(sortedItems);
}
function getCommonParent(items) {
	const firstItem = items[0];
	const lastItemEl = items[items.length - 1]?.ref();
	let parentEl = firstItem?.ref()?.parentElement;
	while (parentEl) {
		if (lastItemEl && parentEl.contains(lastItemEl)) return parentEl;
		parentEl = parentEl.parentElement;
	}
	return getDocument(parentEl).body;
}
function createTimeoutObserver(items, setItems) {
	createEffect(() => {
		const timeout = setTimeout(() => {
			setItemsBasedOnDOMPosition(items(), setItems);
		});
		onCleanup(() => clearTimeout(timeout));
	});
}
function createSortBasedOnDOMPosition(items, setItems) {
	if (typeof IntersectionObserver !== "function") {
		createTimeoutObserver(items, setItems);
		return;
	}
	let previousItems = [];
	createEffect(() => {
		const callback = () => {
			const hasPreviousItems = !!previousItems.length;
			previousItems = items();
			if (!hasPreviousItems) return;
			setItemsBasedOnDOMPosition(items(), setItems);
		};
		const root = getCommonParent(items());
		const observer = new IntersectionObserver(callback, { root });
		for (const item of items()) {
			const itemEl = item.ref();
			if (itemEl) observer.observe(itemEl);
		}
		onCleanup(() => observer.disconnect());
	});
}
function createDomCollection(props = {}) {
	const [items, setItems] = createControllableArraySignal({
		value: () => access$1(props.items),
		onChange: (value) => props.onItemsChange?.(value)
	});
	createSortBasedOnDOMPosition(items, setItems);
	const registerItem = (item) => {
		setItems((prevItems) => {
			return addItemToArray(prevItems, item, findDOMIndex(prevItems, item));
		});
		return () => {
			setItems((prevItems) => {
				const nextItems = prevItems.filter((prevItem) => prevItem.ref() !== item.ref());
				if (prevItems.length === nextItems.length) return prevItems;
				return nextItems;
			});
		};
	};
	const DomCollectionProvider = (props2) => {
		return createComponent(DomCollectionContext.Provider, {
			value: { registerItem },
			get children() {
				return props2.children;
			}
		});
	};
	return { DomCollectionProvider };
}
function createDomCollectionItem(props) {
	const context = useDomCollectionContext();
	const mergedProps = mergeDefaultProps({ shouldRegisterItem: true }, props);
	createEffect(() => {
		if (!mergedProps.shouldRegisterItem) return;
		onCleanup(context.registerItem(mergedProps.getItem()));
	});
}
var MenubarContext = createContext();
function useOptionalMenubarContext() {
	return useContext(MenubarContext);
}
var NavigationMenuContext = createContext();
function useOptionalNavigationMenuContext() {
	return useContext(NavigationMenuContext);
}
var MenuContext = createContext();
function useOptionalMenuContext() {
	return useContext(MenuContext);
}
function useMenuContext() {
	const context = useOptionalMenuContext();
	if (context === void 0) throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
	return context;
}
var MenuRootContext = createContext();
function useMenuRootContext() {
	const context = useContext(MenuRootContext);
	if (context === void 0) throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
	return context;
}
function getPointerGraceArea(placement, event, contentEl) {
	const basePlacement = placement.split("-")[0];
	const contentRect = contentEl.getBoundingClientRect();
	const polygon = [];
	const pointerX = event.clientX;
	const pointerY = event.clientY;
	switch (basePlacement) {
		case "top":
			polygon.push([pointerX, pointerY + 5]);
			polygon.push([contentRect.left, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.top]);
			polygon.push([contentRect.right, contentRect.top]);
			polygon.push([contentRect.right, contentRect.bottom]);
			break;
		case "right":
			polygon.push([pointerX - 5, pointerY]);
			polygon.push([contentRect.left, contentRect.top]);
			polygon.push([contentRect.right, contentRect.top]);
			polygon.push([contentRect.right, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.bottom]);
			break;
		case "bottom":
			polygon.push([pointerX, pointerY - 5]);
			polygon.push([contentRect.right, contentRect.top]);
			polygon.push([contentRect.right, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.top]);
			break;
		case "left":
			polygon.push([pointerX + 5, pointerY]);
			polygon.push([contentRect.right, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.bottom]);
			polygon.push([contentRect.left, contentRect.top]);
			polygon.push([contentRect.right, contentRect.top]);
			break;
	}
	return polygon;
}
function isPointerInGraceArea(event, area) {
	if (!area) return false;
	return isPointInPolygon([event.clientX, event.clientY], area);
}
function Menu(props) {
	const rootContext = useMenuRootContext();
	const parentDomCollectionContext = useOptionalDomCollectionContext();
	const parentMenuContext = useOptionalMenuContext();
	const optionalMenubarContext = useOptionalMenubarContext();
	const optionalNavigationMenuContext = useOptionalNavigationMenuContext();
	const [local, others] = splitProps(mergeDefaultProps({ placement: rootContext.orientation() === "horizontal" ? "bottom-start" : "right-start" }, props), [
		"open",
		"defaultOpen",
		"onOpenChange"
	]);
	let pointerGraceTimeoutId = 0;
	let pointerGraceIntent = null;
	let pointerDir = "right";
	const [triggerId, setTriggerId] = createSignal();
	const [contentId, setContentId] = createSignal();
	const [triggerRef, setTriggerRef] = createSignal();
	const [contentRef, setContentRef] = createSignal();
	const [focusStrategy, setFocusStrategy] = createSignal(true);
	const [currentPlacement, setCurrentPlacement] = createSignal(others.placement);
	const [nestedMenus, setNestedMenus] = createSignal([]);
	const [items, setItems] = createSignal([]);
	const { DomCollectionProvider } = createDomCollection({
		items,
		onItemsChange: setItems
	});
	const disclosureState = createDisclosureState({
		open: () => local.open,
		defaultOpen: () => local.defaultOpen,
		onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
	});
	const { present: contentPresent } = index_default({
		show: () => rootContext.forceMount() || disclosureState.isOpen(),
		element: () => contentRef() ?? null
	});
	const listState = createListState({
		selectionMode: "none",
		dataSource: items
	});
	const open = (focusStrategy2) => {
		setFocusStrategy(focusStrategy2);
		disclosureState.open();
	};
	const close = (recursively = false) => {
		disclosureState.close();
		if (recursively && parentMenuContext) parentMenuContext.close(true);
	};
	const toggle = (focusStrategy2) => {
		setFocusStrategy(focusStrategy2);
		disclosureState.toggle();
	};
	const _focusContent = () => {
		const content = contentRef();
		if (content) {
			focusWithoutScrolling(content);
			listState.selectionManager().setFocused(true);
			listState.selectionManager().setFocusedKey(void 0);
		}
	};
	const focusContent = () => {
		if (optionalNavigationMenuContext != null) setTimeout(() => _focusContent());
		else _focusContent();
	};
	const registerNestedMenu = (element) => {
		setNestedMenus((prev) => [...prev, element]);
		const parentUnregister = parentMenuContext?.registerNestedMenu(element);
		return () => {
			setNestedMenus((prev) => removeItemFromArray(prev, element));
			parentUnregister?.();
		};
	};
	const isPointerMovingToSubmenu = (e) => {
		return pointerDir === pointerGraceIntent?.side && isPointerInGraceArea(e, pointerGraceIntent?.area);
	};
	const onItemEnter = (e) => {
		if (isPointerMovingToSubmenu(e)) e.preventDefault();
	};
	const onItemLeave = (e) => {
		if (isPointerMovingToSubmenu(e)) return;
		focusContent();
	};
	const onTriggerLeave = (e) => {
		if (isPointerMovingToSubmenu(e)) e.preventDefault();
	};
	createHideOutside({
		isDisabled: () => {
			return !(parentMenuContext == null && disclosureState.isOpen() && rootContext.isModal());
		},
		targets: () => [contentRef(), ...nestedMenus()].filter(Boolean)
	});
	createEffect(() => {
		const contentEl = contentRef();
		if (!contentEl || !parentMenuContext) return;
		const parentUnregister = parentMenuContext.registerNestedMenu(contentEl);
		onCleanup(() => {
			parentUnregister();
		});
	});
	createEffect(() => {
		if (parentMenuContext !== void 0) return;
		optionalMenubarContext?.registerMenu(rootContext.value(), [contentRef(), ...nestedMenus()]);
	});
	createEffect(() => {
		if (parentMenuContext !== void 0 || optionalMenubarContext === void 0) return;
		if (optionalMenubarContext.value() === rootContext.value()) {
			triggerRef()?.focus();
			if (optionalMenubarContext.autoFocusMenu()) open(true);
		} else close();
	});
	createEffect(() => {
		if (parentMenuContext !== void 0 || optionalMenubarContext === void 0) return;
		if (disclosureState.isOpen()) optionalMenubarContext.setValue(rootContext.value());
	});
	onCleanup(() => {
		if (parentMenuContext !== void 0) return;
		optionalMenubarContext?.unregisterMenu(rootContext.value());
	});
	const context = {
		dataset: createMemo(() => ({
			"data-expanded": disclosureState.isOpen() ? "" : void 0,
			"data-closed": !disclosureState.isOpen() ? "" : void 0
		})),
		isOpen: disclosureState.isOpen,
		contentPresent,
		nestedMenus,
		currentPlacement,
		pointerGraceTimeoutId: () => pointerGraceTimeoutId,
		autoFocus: focusStrategy,
		listState: () => listState,
		parentMenuContext: () => parentMenuContext,
		triggerRef,
		contentRef,
		triggerId,
		contentId,
		setTriggerRef,
		setContentRef,
		open,
		close,
		toggle,
		focusContent,
		onItemEnter,
		onItemLeave,
		onTriggerLeave,
		setPointerDir: (dir) => pointerDir = dir,
		setPointerGraceTimeoutId: (id) => pointerGraceTimeoutId = id,
		setPointerGraceIntent: (intent) => pointerGraceIntent = intent,
		registerNestedMenu,
		registerItemToParentDomCollection: parentDomCollectionContext?.registerItem,
		registerTriggerId: createRegisterId(setTriggerId),
		registerContentId: createRegisterId(setContentId)
	};
	return createComponent(DomCollectionProvider, { get children() {
		return createComponent(MenuContext.Provider, {
			value: context,
			get children() {
				return createComponent(Show, {
					when: optionalNavigationMenuContext === void 0,
					get fallback() {
						return others.children;
					},
					get children() {
						return createComponent(Popper, mergeProps({
							anchorRef: triggerRef,
							contentRef,
							onCurrentPlacementChange: setCurrentPlacement
						}, others));
					}
				});
			}
		});
	} });
}
var MenuItemContext = createContext();
function useMenuItemContext() {
	const context = useContext(MenuItemContext);
	if (context === void 0) throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");
	return context;
}
function MenuItemBase(props) {
	let ref;
	const rootContext = useMenuRootContext();
	const menuContext = useMenuContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: rootContext.generateId(`item-${createUniqueId()}`) }, props), [
		"ref",
		"textValue",
		"disabled",
		"closeOnSelect",
		"checked",
		"indeterminate",
		"onSelect",
		"onPointerMove",
		"onPointerLeave",
		"onPointerDown",
		"onPointerUp",
		"onClick",
		"onKeyDown",
		"onMouseDown",
		"onFocus"
	]);
	const [labelId, setLabelId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const [labelRef, setLabelRef] = createSignal();
	const selectionManager = () => menuContext.listState().selectionManager();
	const key = () => others.id;
	const isHighlighted = () => selectionManager().focusedKey() === key();
	const onSelect = () => {
		local.onSelect?.();
		if (local.closeOnSelect) setTimeout(() => {
			menuContext.close(true);
		}, 1);
	};
	createDomCollectionItem({ getItem: () => ({
		ref: () => ref,
		type: "item",
		key: key(),
		textValue: local.textValue ?? labelRef()?.textContent ?? void 0 ?? "",
		disabled: local.disabled ?? false
	}) });
	const selectableItem = createSelectableItem({
		key,
		selectionManager,
		shouldSelectOnPressUp: true,
		allowsDifferentPressOrigin: true,
		disabled: () => local.disabled
	}, () => ref);
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (e.pointerType !== "mouse") return;
		if (local.disabled) menuContext.onItemLeave(e);
		else {
			menuContext.onItemEnter(e);
			if (!e.defaultPrevented) {
				focusWithoutScrolling(e.currentTarget);
				menuContext.listState().selectionManager().setFocused(true);
				menuContext.listState().selectionManager().setFocusedKey(key());
			}
		}
	};
	const onPointerLeave = (e) => {
		callHandler(e, local.onPointerLeave);
		if (e.pointerType !== "mouse") return;
		menuContext.onItemLeave(e);
	};
	const onPointerUp = (e) => {
		callHandler(e, local.onPointerUp);
		if (!local.disabled && e.button === 0) onSelect();
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.repeat) return;
		if (local.disabled) return;
		switch (e.key) {
			case "Enter":
			case " ":
				onSelect();
				break;
		}
	};
	const ariaChecked = createMemo(() => {
		if (local.indeterminate) return "mixed";
		if (local.checked == null) return;
		return local.checked;
	});
	const dataset = createMemo(() => ({
		"data-indeterminate": local.indeterminate ? "" : void 0,
		"data-checked": local.checked && !local.indeterminate ? "" : void 0,
		"data-disabled": local.disabled ? "" : void 0,
		"data-highlighted": isHighlighted() ? "" : void 0
	}));
	const context = {
		isChecked: () => local.checked,
		dataset,
		setLabelRef,
		generateId: createGenerateId(() => others.id),
		registerLabel: createRegisterId(setLabelId),
		registerDescription: createRegisterId(setDescriptionId)
	};
	return createComponent(MenuItemContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				get tabIndex() {
					return selectableItem.tabIndex();
				},
				get ["aria-checked"]() {
					return ariaChecked();
				},
				get ["aria-disabled"]() {
					return local.disabled;
				},
				get ["aria-labelledby"]() {
					return labelId();
				},
				get ["aria-describedby"]() {
					return descriptionId();
				},
				get ["data-key"]() {
					return selectableItem.dataKey();
				},
				get onPointerDown() {
					return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
				},
				get onPointerUp() {
					return composeEventHandlers([onPointerUp, selectableItem.onPointerUp]);
				},
				get onClick() {
					return composeEventHandlers([local.onClick, selectableItem.onClick]);
				},
				get onKeyDown() {
					return composeEventHandlers([onKeyDown, selectableItem.onKeyDown]);
				},
				get onMouseDown() {
					return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
				},
				get onFocus() {
					return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
				},
				onPointerMove,
				onPointerLeave
			}, dataset, others));
		}
	});
}
function MenuCheckboxItem(props) {
	const [local, others] = splitProps(mergeDefaultProps({ closeOnSelect: false }, props), [
		"checked",
		"defaultChecked",
		"onChange",
		"onSelect"
	]);
	const state = createToggleState({
		isSelected: () => local.checked,
		defaultIsSelected: () => local.defaultChecked,
		onSelectedChange: (checked) => local.onChange?.(checked),
		isDisabled: () => others.disabled
	});
	const onSelect = () => {
		local.onSelect?.();
		state.toggle();
	};
	return createComponent(MenuItemBase, mergeProps({
		role: "menuitemcheckbox",
		get checked() {
			return state.isSelected();
		},
		onSelect
	}, others));
}
var MENUBAR_KEYS = {
	next: (dir, orientation) => dir === "ltr" ? orientation === "horizontal" ? "ArrowRight" : "ArrowDown" : orientation === "horizontal" ? "ArrowLeft" : "ArrowUp",
	previous: (dir, orientation) => MENUBAR_KEYS.next(dir === "ltr" ? "rtl" : "ltr", orientation)
};
var MENU_KEYS = {
	first: (orientation) => orientation === "horizontal" ? "ArrowDown" : "ArrowRight",
	last: (orientation) => orientation === "horizontal" ? "ArrowUp" : "ArrowLeft"
};
function MenuTrigger(props) {
	const rootContext = useMenuRootContext();
	const context = useMenuContext();
	const optionalMenubarContext = useOptionalMenubarContext();
	const { direction } = useLocale();
	const [local, others] = splitProps(mergeDefaultProps({ id: rootContext.generateId("trigger") }, props), [
		"ref",
		"id",
		"disabled",
		"onPointerDown",
		"onClick",
		"onKeyDown",
		"onMouseOver",
		"onFocus"
	]);
	let key = () => rootContext.value();
	if (optionalMenubarContext !== void 0) {
		key = () => rootContext.value() ?? local.id;
		if (optionalMenubarContext.lastValue() === void 0) optionalMenubarContext.setLastValue(key);
	}
	const tagName = createTagName(() => context.triggerRef(), () => "button");
	const isNativeLink = createMemo(() => {
		return tagName() === "a" && context.triggerRef()?.getAttribute("href") != null;
	});
	createEffect(on(() => optionalMenubarContext?.value(), (value) => {
		if (!isNativeLink()) return;
		if (value === key()) context.triggerRef()?.focus();
	}));
	const handleClick = () => {
		if (optionalMenubarContext !== void 0) {
			if (!context.isOpen()) {
				if (!optionalMenubarContext.autoFocusMenu()) optionalMenubarContext.setAutoFocusMenu(true);
				context.open(false);
			} else if (optionalMenubarContext.value() === key()) optionalMenubarContext.closeMenu();
		} else context.toggle(true);
	};
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		e.currentTarget.dataset.pointerType = e.pointerType;
		if (!local.disabled && e.pointerType !== "touch" && e.button === 0) handleClick();
	};
	const onClick = (e) => {
		callHandler(e, local.onClick);
		if (!local.disabled) {
			if (e.currentTarget.dataset.pointerType === "touch") handleClick();
		}
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (local.disabled) return;
		if (isNativeLink()) switch (e.key) {
			case "Enter":
			case " ": return;
		}
		switch (e.key) {
			case "Enter":
			case " ":
			case MENU_KEYS.first(rootContext.orientation()):
				e.stopPropagation();
				e.preventDefault();
				scrollIntoViewport(e.currentTarget);
				context.open("first");
				optionalMenubarContext?.setAutoFocusMenu(true);
				optionalMenubarContext?.setValue(key);
				break;
			case MENU_KEYS.last(rootContext.orientation()):
				e.stopPropagation();
				e.preventDefault();
				context.open("last");
				break;
			case MENUBAR_KEYS.next(direction(), rootContext.orientation()):
				if (optionalMenubarContext === void 0) break;
				e.stopPropagation();
				e.preventDefault();
				optionalMenubarContext.nextMenu();
				break;
			case MENUBAR_KEYS.previous(direction(), rootContext.orientation()):
				if (optionalMenubarContext === void 0) break;
				e.stopPropagation();
				e.preventDefault();
				optionalMenubarContext.previousMenu();
				break;
		}
	};
	const onMouseOver = (e) => {
		callHandler(e, local.onMouseOver);
		if (context.triggerRef()?.dataset.pointerType === "touch") return;
		if (!local.disabled && optionalMenubarContext !== void 0 && optionalMenubarContext.value() !== void 0) optionalMenubarContext.setValue(key);
	};
	const onFocus = (e) => {
		callHandler(e, local.onFocus);
		if (optionalMenubarContext !== void 0 && e.currentTarget.dataset.pointerType !== "touch") optionalMenubarContext.setValue(key);
	};
	createEffect(() => onCleanup(context.registerTriggerId(local.id)));
	return createComponent(ButtonRoot, mergeProps({
		get ["data-kb-menu-value-trigger"]() {
			return rootContext.value();
		},
		get id() {
			return local.id;
		},
		get disabled() {
			return local.disabled;
		},
		"aria-haspopup": "true",
		get ["aria-expanded"]() {
			return context.isOpen();
		},
		get ["aria-controls"]() {
			return memo(() => !!context.isOpen())() ? context.contentId() : void 0;
		},
		get ["data-highlighted"]() {
			return key() !== void 0 && optionalMenubarContext?.value() === key() ? true : void 0;
		},
		get tabIndex() {
			return optionalMenubarContext !== void 0 ? optionalMenubarContext.value() === key() || optionalMenubarContext.lastValue() === key() ? 0 : -1 : void 0;
		},
		onPointerDown,
		onMouseOver,
		onClick,
		onKeyDown,
		onFocus,
		role: optionalMenubarContext !== void 0 ? "menuitem" : void 0
	}, () => context.dataset(), others));
}
function MenuContentBase(props) {
	let ref;
	const rootContext = useMenuRootContext();
	const context = useMenuContext();
	const optionalMenubarContext = useOptionalMenubarContext();
	const optionalNavigationMenuContext = useOptionalNavigationMenuContext();
	const { direction } = useLocale();
	const [local, others] = splitProps(mergeDefaultProps({ id: rootContext.generateId(`content-${createUniqueId()}`) }, props), [
		"ref",
		"id",
		"style",
		"onOpenAutoFocus",
		"onCloseAutoFocus",
		"onEscapeKeyDown",
		"onFocusOutside",
		"onPointerEnter",
		"onPointerMove",
		"onKeyDown",
		"onMouseDown",
		"onFocusIn",
		"onFocusOut"
	]);
	let lastPointerX = 0;
	const isRootModalContent = () => {
		return context.parentMenuContext() == null && optionalMenubarContext === void 0 && rootContext.isModal();
	};
	const selectableList = createSelectableList({
		selectionManager: context.listState().selectionManager,
		collection: context.listState().collection,
		autoFocus: context.autoFocus,
		deferAutoFocus: true,
		shouldFocusWrap: true,
		disallowTypeAhead: () => !context.listState().selectionManager().isFocused(),
		orientation: () => rootContext.orientation() === "horizontal" ? "vertical" : "horizontal"
	}, () => ref);
	createFocusScope({
		trapFocus: () => isRootModalContent() && context.isOpen(),
		onMountAutoFocus: (event) => {
			if (optionalMenubarContext === void 0) local.onOpenAutoFocus?.(event);
		},
		onUnmountAutoFocus: local.onCloseAutoFocus
	}, () => ref);
	const onKeyDown = (e) => {
		if (!contains$1(e.currentTarget, e.target)) return;
		if (e.key === "Tab" && context.isOpen()) e.preventDefault();
		if (optionalMenubarContext !== void 0) {
			if (e.currentTarget.getAttribute("aria-haspopup") !== "true") switch (e.key) {
				case MENUBAR_KEYS.next(direction(), rootContext.orientation()):
					e.stopPropagation();
					e.preventDefault();
					context.close(true);
					optionalMenubarContext.setAutoFocusMenu(true);
					optionalMenubarContext.nextMenu();
					break;
				case MENUBAR_KEYS.previous(direction(), rootContext.orientation()):
					if (e.currentTarget.hasAttribute("data-closed")) break;
					e.stopPropagation();
					e.preventDefault();
					context.close(true);
					optionalMenubarContext.setAutoFocusMenu(true);
					optionalMenubarContext.previousMenu();
					break;
			}
		}
	};
	const onEscapeKeyDown = (e) => {
		local.onEscapeKeyDown?.(e);
		optionalMenubarContext?.setAutoFocusMenu(false);
		context.close(true);
	};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		if (rootContext.isModal()) e.preventDefault();
	};
	const onPointerEnter = (e) => {
		callHandler(e, local.onPointerEnter);
		if (!context.isOpen()) return;
		context.parentMenuContext()?.listState().selectionManager().setFocused(false);
		context.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0);
	};
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (e.pointerType !== "mouse") return;
		const target = e.target;
		const pointerXHasChanged = lastPointerX !== e.clientX;
		if (contains$1(e.currentTarget, target) && pointerXHasChanged) {
			context.setPointerDir(e.clientX > lastPointerX ? "right" : "left");
			lastPointerX = e.clientX;
		}
	};
	createEffect(() => onCleanup(context.registerContentId(local.id)));
	onCleanup(() => context.setContentRef(void 0));
	const commonAttributes = {
		ref: mergeRefs((el) => {
			context.setContentRef(el);
			ref = el;
		}, local.ref),
		role: "menu",
		get id() {
			return local.id;
		},
		get tabIndex() {
			return selectableList.tabIndex();
		},
		get "aria-labelledby"() {
			return context.triggerId();
		},
		onKeyDown: composeEventHandlers([
			local.onKeyDown,
			selectableList.onKeyDown,
			onKeyDown
		]),
		onMouseDown: composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]),
		onFocusIn: composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]),
		onFocusOut: composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]),
		onPointerEnter,
		onPointerMove,
		get "data-orientation"() {
			return rootContext.orientation();
		}
	};
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Show, {
				get when() {
					return optionalNavigationMenuContext === void 0 || context.parentMenuContext() != null;
				},
				get fallback() {
					return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), commonAttributes, others));
				},
				get children() {
					return createComponent(Popper.Positioner, { get children() {
						return createComponent(DismissableLayer, mergeProps({
							get disableOutsidePointerEvents() {
								return memo(() => !!isRootModalContent())() && context.isOpen();
							},
							get excludedElements() {
								return [context.triggerRef];
							},
							bypassTopMostLayerCheck: true,
							get style() {
								return combineStyle({
									"--kb-menu-content-transform-origin": "var(--kb-popper-content-transform-origin)",
									position: "relative"
								}, local.style);
							},
							onEscapeKeyDown,
							onFocusOutside,
							get onDismiss() {
								return context.close;
							}
						}, () => context.dataset(), commonAttributes, others));
					} });
				}
			});
		}
	});
}
function MenuContent(props) {
	const rootContext = useMenuRootContext();
	const context = useMenuContext();
	const [local, others] = splitProps(props, ["ref"]);
	index_default$1({
		element: () => null,
		enabled: () => context.contentPresent() && rootContext.preventScroll()
	});
	return createComponent(MenuContentBase, others);
}
var MenuGroupContext = createContext();
function useMenuGroupContext() {
	const context = useContext(MenuGroupContext);
	if (context === void 0) throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");
	return context;
}
function MenuGroup(props) {
	const mergedProps = mergeDefaultProps({ id: useMenuRootContext().generateId(`group-${createUniqueId()}`) }, props);
	const [labelId, setLabelId] = createSignal();
	const context = {
		generateId: createGenerateId(() => mergedProps.id),
		registerLabelId: createRegisterId(setLabelId)
	};
	return createComponent(MenuGroupContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				role: "group",
				get ["aria-labelledby"]() {
					return labelId();
				}
			}, mergedProps));
		}
	});
}
function MenuGroupLabel(props) {
	const context = useMenuGroupContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerLabelId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "span",
		get id() {
			return local.id;
		},
		"aria-hidden": "true"
	}, others));
}
function MenuIcon(props) {
	const context = useMenuContext();
	return createComponent(Polymorphic, mergeProps({
		as: "span",
		"aria-hidden": "true"
	}, () => context.dataset(), mergeDefaultProps({ children: "▼" }, props)));
}
function MenuItem(props) {
	return createComponent(MenuItemBase, mergeProps({
		role: "menuitem",
		closeOnSelect: true
	}, props));
}
function MenuItemDescription(props) {
	const context = useMenuItemContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("description") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerDescription(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get id() {
			return local.id;
		}
	}, () => context.dataset(), others));
}
function MenuItemIndicator(props) {
	const context = useMenuItemContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("indicator") }, props), ["forceMount"]);
	return createComponent(Show, {
		get when() {
			return local.forceMount || context.isChecked();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), others));
		}
	});
}
function MenuItemLabel(props) {
	const context = useMenuItemContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["ref", "id"]);
	createEffect(() => onCleanup(context.registerLabel(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get id() {
			return local.id;
		}
	}, () => context.dataset(), others));
}
function MenuPortal(props) {
	const context = useMenuContext();
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Portal, props);
		}
	});
}
var MenuRadioGroupContext = createContext();
function useMenuRadioGroupContext() {
	const context = useContext(MenuRadioGroupContext);
	if (context === void 0) throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");
	return context;
}
function MenuRadioGroup(props) {
	const [local, others] = splitProps(mergeDefaultProps({ id: useMenuRootContext().generateId(`radiogroup-${createUniqueId()}`) }, props), [
		"value",
		"defaultValue",
		"onChange",
		"disabled"
	]);
	const [selected, setSelected] = createControllableSignal({
		value: () => local.value,
		defaultValue: () => local.defaultValue,
		onChange: (value) => local.onChange?.(value)
	});
	return createComponent(MenuRadioGroupContext.Provider, {
		value: {
			isDisabled: () => local.disabled,
			isSelectedValue: (value) => value === selected(),
			setSelectedValue: (value) => setSelected(value)
		},
		get children() {
			return createComponent(MenuGroup, others);
		}
	});
}
function MenuRadioItem(props) {
	const context = useMenuRadioGroupContext();
	const [local, others] = splitProps(mergeDefaultProps({ closeOnSelect: false }, props), ["value", "onSelect"]);
	const onSelect = () => {
		local.onSelect?.();
		context.setSelectedValue(local.value);
	};
	return createComponent(MenuItemBase, mergeProps({
		role: "menuitemradio",
		get checked() {
			return context.isSelectedValue(local.value);
		},
		onSelect
	}, others));
}
function MenuRoot(props) {
	const optionalMenubarContext = useOptionalMenubarContext();
	const [local, others] = splitProps(mergeDefaultProps({
		id: `menu-${createUniqueId()}`,
		modal: true
	}, props), [
		"id",
		"modal",
		"preventScroll",
		"forceMount",
		"open",
		"defaultOpen",
		"onOpenChange",
		"value",
		"orientation"
	]);
	const disclosureState = createDisclosureState({
		open: () => local.open,
		defaultOpen: () => local.defaultOpen,
		onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
	});
	const context = {
		isModal: () => local.modal ?? true,
		preventScroll: () => local.preventScroll ?? context.isModal(),
		forceMount: () => local.forceMount ?? false,
		generateId: createGenerateId(() => local.id),
		value: () => local.value,
		orientation: () => local.orientation ?? optionalMenubarContext?.orientation() ?? "horizontal"
	};
	return createComponent(MenuRootContext.Provider, {
		value: context,
		get children() {
			return createComponent(Menu, mergeProps({
				get open() {
					return disclosureState.isOpen();
				},
				get onOpenChange() {
					return disclosureState.setIsOpen;
				}
			}, others));
		}
	});
}
function MenuSub(props) {
	const { direction } = useLocale();
	return createComponent(Menu, mergeProps({
		get placement() {
			return direction() === "rtl" ? "left-start" : "right-start";
		},
		flip: true
	}, props));
}
var SUB_CLOSE_KEYS = { close: (dir, orientation) => {
	if (dir === "ltr") return [orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"];
	return [orientation === "horizontal" ? "ArrowRight" : "ArrowDown"];
} };
function MenuSubContent(props) {
	const context = useMenuContext();
	const rootContext = useMenuRootContext();
	const [local, others] = splitProps(props, ["onFocusOutside", "onKeyDown"]);
	const { direction } = useLocale();
	const onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	const onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		const target = e.target;
		if (!contains$1(context.triggerRef(), target)) context.close();
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		const isKeyDownInside = contains$1(e.currentTarget, e.target);
		const isCloseKey = SUB_CLOSE_KEYS.close(direction(), rootContext.orientation()).includes(e.key);
		const isSubMenu = context.parentMenuContext() != null;
		if (isKeyDownInside && isCloseKey && isSubMenu) {
			context.close();
			focusWithoutScrolling(context.triggerRef());
		}
	};
	return createComponent(MenuContentBase, mergeProps({
		onOpenAutoFocus,
		onCloseAutoFocus,
		onFocusOutside,
		onKeyDown
	}, others));
}
var SELECTION_KEYS = ["Enter", " "];
var SUB_OPEN_KEYS = { open: (dir, orientation) => {
	if (dir === "ltr") return [...SELECTION_KEYS, orientation === "horizontal" ? "ArrowRight" : "ArrowDown"];
	return [...SELECTION_KEYS, orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"];
} };
function MenuSubTrigger(props) {
	let ref;
	const rootContext = useMenuRootContext();
	const context = useMenuContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: rootContext.generateId(`sub-trigger-${createUniqueId()}`) }, props), [
		"ref",
		"id",
		"textValue",
		"disabled",
		"onPointerMove",
		"onPointerLeave",
		"onPointerDown",
		"onPointerUp",
		"onClick",
		"onKeyDown",
		"onMouseDown",
		"onFocus"
	]);
	let openTimeoutId = null;
	const { direction } = useLocale();
	const key = () => local.id;
	const parentSelectionManager = () => {
		const parentMenuContext = context.parentMenuContext();
		if (parentMenuContext == null) throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
		return parentMenuContext.listState().selectionManager();
	};
	const collection = () => context.listState().collection();
	const isHighlighted = () => parentSelectionManager().focusedKey() === key();
	const selectableItem = createSelectableItem({
		key,
		selectionManager: parentSelectionManager,
		shouldSelectOnPressUp: true,
		allowsDifferentPressOrigin: true,
		disabled: () => local.disabled
	}, () => ref);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		if (!context.isOpen() && !local.disabled) context.open(true);
	};
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (e.pointerType !== "mouse") return;
		const parentMenuContext = context.parentMenuContext();
		parentMenuContext?.onItemEnter(e);
		if (e.defaultPrevented) return;
		if (local.disabled) {
			parentMenuContext?.onItemLeave(e);
			return;
		}
		if (!context.isOpen() && !openTimeoutId) {
			context.parentMenuContext()?.setPointerGraceIntent(null);
			openTimeoutId = window.setTimeout(() => {
				context.open(false);
			}, 100);
		}
		parentMenuContext?.onItemEnter(e);
		if (!e.defaultPrevented) {
			if (context.listState().selectionManager().isFocused()) {
				context.listState().selectionManager().setFocused(false);
				context.listState().selectionManager().setFocusedKey(void 0);
			}
			focusWithoutScrolling(e.currentTarget);
			parentMenuContext?.listState().selectionManager().setFocused(true);
			parentMenuContext?.listState().selectionManager().setFocusedKey(key());
		}
	};
	const onPointerLeave = (e) => {
		callHandler(e, local.onPointerLeave);
		if (e.pointerType !== "mouse") return;
		const parentMenuContext = context.parentMenuContext();
		const contentEl = context.contentRef();
		if (contentEl) {
			parentMenuContext?.setPointerGraceIntent({
				area: getPointerGraceArea(context.currentPlacement(), e, contentEl),
				side: context.currentPlacement().split("-")[0]
			});
			window.clearTimeout(parentMenuContext?.pointerGraceTimeoutId());
			const pointerGraceTimeoutId = window.setTimeout(() => {
				parentMenuContext?.setPointerGraceIntent(null);
			}, 300);
			parentMenuContext?.setPointerGraceTimeoutId(pointerGraceTimeoutId);
		} else {
			parentMenuContext?.onTriggerLeave(e);
			if (e.defaultPrevented) return;
			parentMenuContext?.setPointerGraceIntent(null);
		}
		parentMenuContext?.onItemLeave(e);
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.repeat) return;
		if (local.disabled) return;
		if (SUB_OPEN_KEYS.open(direction(), rootContext.orientation()).includes(e.key)) {
			e.stopPropagation();
			e.preventDefault();
			parentSelectionManager().setFocused(false);
			parentSelectionManager().setFocusedKey(void 0);
			if (!context.isOpen()) context.open("first");
			context.focusContent();
			context.listState().selectionManager().setFocused(true);
			context.listState().selectionManager().setFocusedKey(collection().getFirstKey());
		}
	};
	createEffect(() => {
		if (context.registerItemToParentDomCollection == null) throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
		onCleanup(context.registerItemToParentDomCollection({
			ref: () => ref,
			type: "item",
			key: key(),
			textValue: local.textValue ?? void 0 ?? "",
			disabled: local.disabled ?? false
		}));
	});
	createEffect(on(() => context.parentMenuContext()?.pointerGraceTimeoutId(), (pointerGraceTimer) => {
		onCleanup(() => {
			window.clearTimeout(pointerGraceTimer);
			context.parentMenuContext()?.setPointerGraceIntent(null);
		});
	}));
	createEffect(() => onCleanup(context.registerTriggerId(local.id)));
	onCleanup(() => {});
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get id() {
			return local.id;
		},
		role: "menuitem",
		get tabIndex() {
			return selectableItem.tabIndex();
		},
		"aria-haspopup": "true",
		get ["aria-expanded"]() {
			return context.isOpen();
		},
		get ["aria-controls"]() {
			return memo(() => !!context.isOpen())() ? context.contentId() : void 0;
		},
		get ["aria-disabled"]() {
			return local.disabled;
		},
		get ["data-key"]() {
			return selectableItem.dataKey();
		},
		get ["data-highlighted"]() {
			return isHighlighted() ? "" : void 0;
		},
		get ["data-disabled"]() {
			return local.disabled ? "" : void 0;
		},
		get onPointerDown() {
			return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
		},
		get onPointerUp() {
			return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
		},
		get onClick() {
			return composeEventHandlers([onClick, selectableItem.onClick]);
		},
		get onKeyDown() {
			return composeEventHandlers([onKeyDown, selectableItem.onKeyDown]);
		},
		get onMouseDown() {
			return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
		},
		get onFocus() {
			return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
		},
		onPointerMove,
		onPointerLeave
	}, () => context.dataset(), others));
}
__export({}, {
	Arrow: () => PopperArrow,
	CheckboxItem: () => MenuCheckboxItem,
	Content: () => DropdownMenuContent$1,
	DropdownMenu: () => DropdownMenu$1,
	Group: () => MenuGroup,
	GroupLabel: () => MenuGroupLabel,
	Icon: () => MenuIcon,
	Item: () => MenuItem,
	ItemDescription: () => MenuItemDescription,
	ItemIndicator: () => MenuItemIndicator,
	ItemLabel: () => MenuItemLabel,
	Portal: () => MenuPortal,
	RadioGroup: () => MenuRadioGroup,
	RadioItem: () => MenuRadioItem,
	Root: () => DropdownMenuRoot,
	Separator: () => SeparatorRoot,
	Sub: () => MenuSub,
	SubContent: () => MenuSubContent,
	SubTrigger: () => MenuSubTrigger,
	Trigger: () => MenuTrigger
});
function DropdownMenuContent$1(props) {
	const rootContext = useMenuRootContext();
	const context = useMenuContext();
	const [local, others] = splitProps(props, ["onCloseAutoFocus", "onInteractOutside"]);
	let hasInteractedOutside = false;
	const onCloseAutoFocus = (e) => {
		local.onCloseAutoFocus?.(e);
		if (!hasInteractedOutside) focusWithoutScrolling(context.triggerRef());
		hasInteractedOutside = false;
		e.preventDefault();
	};
	const onInteractOutside = (e) => {
		local.onInteractOutside?.(e);
		if (!rootContext.isModal() || e.detail.isContextMenu) hasInteractedOutside = true;
	};
	return createComponent(MenuContent, mergeProps({
		onCloseAutoFocus,
		onInteractOutside
	}, others));
}
function DropdownMenuRoot(props) {
	return createComponent(MenuRoot, mergeDefaultProps({ id: `dropdownmenu-${createUniqueId()}` }, props));
}
var DropdownMenu$1 = Object.assign(DropdownMenuRoot, {
	Arrow: PopperArrow,
	CheckboxItem: MenuCheckboxItem,
	Content: DropdownMenuContent$1,
	Group: MenuGroup,
	GroupLabel: MenuGroupLabel,
	Icon: MenuIcon,
	Item: MenuItem,
	ItemDescription: MenuItemDescription,
	ItemIndicator: MenuItemIndicator,
	ItemLabel: MenuItemLabel,
	Portal: MenuPortal,
	RadioGroup: MenuRadioGroup,
	RadioItem: MenuRadioItem,
	Separator: SeparatorRoot,
	Sub: MenuSub,
	SubContent: MenuSubContent,
	SubTrigger: MenuSubTrigger,
	Trigger: MenuTrigger
});
var DropdownMenuTrigger = MenuTrigger;
var DropdownMenu = (props) => {
	return createComponent(DropdownMenuRoot, mergeProps({ gutter: 4 }, props));
};
var DropdownMenuContent = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(MenuPortal, { get children() {
		return createComponent(DropdownMenuContent$1, mergeProps({ get ["class"]() {
			return cn("z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show", props.class);
		} }, rest));
	} });
};
var DropdownMenuItem = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(MenuItem, mergeProps({ get ["class"]() {
		return cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class);
	} }, rest));
};
var DropdownMenuLabel = (props) => {
	const [, rest] = splitProps(props, ["class", "inset"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class);
	} }, rest), void 0, true);
};
var DropdownMenuSeparator = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return createComponent(SeparatorRoot, mergeProps({ get ["class"]() {
		return cn("-mx-1 my-1 h-px bg-muted", props.class);
	} }, rest));
};
__export({}, {
	Anchor: () => PopoverAnchor,
	Arrow: () => PopperArrow,
	CloseButton: () => PopoverCloseButton,
	Content: () => PopoverContent$1,
	Description: () => PopoverDescription,
	Popover: () => Popover$1,
	Portal: () => PopoverPortal,
	Root: () => PopoverRoot,
	Title: () => PopoverTitle,
	Trigger: () => PopoverTrigger$1,
	usePopoverContext: () => usePopoverContext
});
var PopoverContext = createContext();
function usePopoverContext() {
	const context = useContext(PopoverContext);
	if (context === void 0) throw new Error("[kobalte]: `usePopoverContext` must be used within a `Popover` component");
	return context;
}
function PopoverAnchor(props) {
	const context = usePopoverContext();
	const [local, others] = splitProps(props, ["ref"]);
	return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), others));
}
function PopoverCloseButton(props) {
	const context = usePopoverContext();
	const [local, others] = splitProps(props, ["aria-label", "onClick"]);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		context.close();
	};
	return createComponent(ButtonRoot, mergeProps({
		get ["aria-label"]() {
			return local["aria-label"] || context.translations().dismiss;
		},
		onClick
	}, () => context.dataset(), others));
}
function PopoverContent$1(props) {
	let ref;
	const context = usePopoverContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("content") }, props), [
		"ref",
		"style",
		"onOpenAutoFocus",
		"onCloseAutoFocus",
		"onPointerDownOutside",
		"onFocusOutside",
		"onInteractOutside"
	]);
	let isRightClickOutside = false;
	let hasInteractedOutside = false;
	let hasPointerDownOutside = false;
	const onCloseAutoFocus = (e) => {
		local.onCloseAutoFocus?.(e);
		if (context.isModal()) {
			e.preventDefault();
			if (!isRightClickOutside) focusWithoutScrolling(context.triggerRef());
		} else {
			if (!e.defaultPrevented) {
				if (!hasInteractedOutside) focusWithoutScrolling(context.triggerRef());
				e.preventDefault();
			}
			hasInteractedOutside = false;
			hasPointerDownOutside = false;
		}
	};
	const onPointerDownOutside = (e) => {
		local.onPointerDownOutside?.(e);
		if (context.isModal()) isRightClickOutside = e.detail.isContextMenu;
	};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		if (context.isOpen() && context.isModal()) e.preventDefault();
	};
	const onInteractOutside = (e) => {
		local.onInteractOutside?.(e);
		if (context.isModal()) return;
		if (!e.defaultPrevented) {
			hasInteractedOutside = true;
			if (e.detail.originalEvent.type === "pointerdown") hasPointerDownOutside = true;
		}
		if (contains$1(context.triggerRef(), e.target)) e.preventDefault();
		if (e.detail.originalEvent.type === "focusin" && hasPointerDownOutside) e.preventDefault();
	};
	createHideOutside({
		isDisabled: () => !(context.isOpen() && context.isModal()),
		targets: () => []
	});
	index_default$1({
		element: () => null,
		enabled: () => context.contentPresent() && context.preventScroll()
	});
	createFocusScope({
		trapFocus: () => context.isOpen() && context.isModal(),
		onMountAutoFocus: local.onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus
	}, () => ref);
	createEffect(() => onCleanup(context.registerContentId(others.id)));
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Popper.Positioner, { get children() {
				return createComponent(DismissableLayer, mergeProps({
					role: "dialog",
					tabIndex: -1,
					get disableOutsidePointerEvents() {
						return memo(() => !!context.isOpen())() && context.isModal();
					},
					get excludedElements() {
						return [context.triggerRef];
					},
					get style() {
						return combineStyle({
							"--kb-popover-content-transform-origin": "var(--kb-popper-content-transform-origin)",
							position: "relative"
						}, local.style);
					},
					get ["aria-labelledby"]() {
						return context.titleId();
					},
					get ["aria-describedby"]() {
						return context.descriptionId();
					},
					onPointerDownOutside,
					onFocusOutside,
					onInteractOutside,
					get onDismiss() {
						return context.close;
					}
				}, () => context.dataset(), others));
			} });
		}
	});
}
function PopoverDescription(props) {
	const context = usePopoverContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("description") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerDescriptionId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "p",
		get id() {
			return local.id;
		}
	}, () => context.dataset(), others));
}
function PopoverPortal(props) {
	const context = usePopoverContext();
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Portal, props);
		}
	});
}
var POPOVER_INTL_TRANSLATIONS = { dismiss: "Dismiss" };
function PopoverRoot(props) {
	const [local, others] = splitProps(mergeDefaultProps({
		id: `popover-${createUniqueId()}`,
		modal: false,
		translations: POPOVER_INTL_TRANSLATIONS
	}, props), [
		"translations",
		"id",
		"open",
		"defaultOpen",
		"onOpenChange",
		"modal",
		"preventScroll",
		"forceMount",
		"anchorRef"
	]);
	const [defaultAnchorRef, setDefaultAnchorRef] = createSignal();
	const [triggerRef, setTriggerRef] = createSignal();
	const [contentRef, setContentRef] = createSignal();
	const [contentId, setContentId] = createSignal();
	const [titleId, setTitleId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const disclosureState = createDisclosureState({
		open: () => local.open,
		defaultOpen: () => local.defaultOpen,
		onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
	});
	const anchorRef = () => {
		return local.anchorRef?.() ?? defaultAnchorRef() ?? triggerRef();
	};
	const { present: contentPresent } = index_default({
		show: () => local.forceMount || disclosureState.isOpen(),
		element: () => contentRef() ?? null
	});
	const context = {
		translations: () => local.translations ?? POPOVER_INTL_TRANSLATIONS,
		dataset: createMemo(() => ({
			"data-expanded": disclosureState.isOpen() ? "" : void 0,
			"data-closed": !disclosureState.isOpen() ? "" : void 0
		})),
		isOpen: disclosureState.isOpen,
		isModal: () => local.modal ?? false,
		preventScroll: () => local.preventScroll ?? context.isModal(),
		contentPresent,
		triggerRef,
		contentId,
		titleId,
		descriptionId,
		setDefaultAnchorRef,
		setTriggerRef,
		setContentRef,
		close: disclosureState.close,
		toggle: disclosureState.toggle,
		generateId: createGenerateId(() => local.id),
		registerContentId: createRegisterId(setContentId),
		registerTitleId: createRegisterId(setTitleId),
		registerDescriptionId: createRegisterId(setDescriptionId)
	};
	return createComponent(PopoverContext.Provider, {
		value: context,
		get children() {
			return createComponent(Popper, mergeProps({
				anchorRef,
				contentRef
			}, others));
		}
	});
}
function PopoverTitle(props) {
	const context = usePopoverContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("title") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerTitleId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "h2",
		get id() {
			return local.id;
		}
	}, () => context.dataset(), others));
}
function PopoverTrigger$1(props) {
	const context = usePopoverContext();
	const [local, others] = splitProps(props, [
		"ref",
		"onClick",
		"onPointerDown"
	]);
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		e.preventDefault();
	};
	const onClick = (e) => {
		callHandler(e, local.onClick);
		context.toggle();
	};
	return createComponent(ButtonRoot, mergeProps({
		"aria-haspopup": "dialog",
		get ["aria-expanded"]() {
			return context.isOpen();
		},
		get ["aria-controls"]() {
			return memo(() => !!context.isOpen())() ? context.contentId() : void 0;
		},
		onPointerDown,
		onClick
	}, () => context.dataset(), others));
}
var Popover$1 = Object.assign(PopoverRoot, {
	Anchor: PopoverAnchor,
	Arrow: PopperArrow,
	CloseButton: PopoverCloseButton,
	Content: PopoverContent$1,
	Description: PopoverDescription,
	Portal: PopoverPortal,
	Title: PopoverTitle,
	Trigger: PopoverTrigger$1
});
var PopoverTrigger = PopoverTrigger$1;
var Popover = (props) => {
	return createComponent(PopoverRoot, mergeProps({ gutter: 4 }, props));
};
var PopoverContent = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(PopoverPortal, { get children() {
		return createComponent(PopoverContent$1, mergeProps({ get ["class"]() {
			return cn("z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95", local.class);
		} }, others));
	} });
};
__export({}, {
	Arrow: () => PopperArrow,
	Content: () => TooltipContent$1,
	Portal: () => TooltipPortal,
	Root: () => TooltipRoot,
	Tooltip: () => Tooltip$1,
	Trigger: () => TooltipTrigger$1,
	useTooltipContext: () => useTooltipContext
});
var TooltipContext = createContext();
function useTooltipContext() {
	const context = useContext(TooltipContext);
	if (context === void 0) throw new Error("[kobalte]: `useTooltipContext` must be used within a `Tooltip` component");
	return context;
}
function TooltipContent$1(props) {
	const context = useTooltipContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("content") }, props), ["ref", "style"]);
	createEffect(() => onCleanup(context.registerContentId(others.id)));
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Popper.Positioner, { get children() {
				return createComponent(DismissableLayer, mergeProps({
					role: "tooltip",
					disableOutsidePointerEvents: false,
					get style() {
						return combineStyle({
							"--kb-tooltip-content-transform-origin": "var(--kb-popper-content-transform-origin)",
							position: "relative"
						}, local.style);
					},
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => context.hideTooltip(true)
				}, () => context.dataset(), others));
			} });
		}
	});
}
function TooltipPortal(props) {
	const context = useTooltipContext();
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Portal, props);
		}
	});
}
var tooltips = {};
var tooltipsCounter = 0;
function TooltipRoot(props) {
	const defaultId = `tooltip-${createUniqueId()}`;
	const tooltipId = `${++tooltipsCounter}`;
	const mergedProps = mergeDefaultProps({
		id: defaultId,
		openDelay: 700,
		closeDelay: 300,
		skipDelayDuration: 300
	}, props);
	const [local, others] = splitProps(mergedProps, [
		"id",
		"open",
		"defaultOpen",
		"onOpenChange",
		"disabled",
		"triggerOnFocusOnly",
		"openDelay",
		"closeDelay",
		"skipDelayDuration",
		"ignoreSafeArea",
		"forceMount",
		"onCurrentPlacementChange"
	]);
	let closeTimeoutId;
	const [contentId, setContentId] = createSignal();
	const [triggerRef, setTriggerRef] = createSignal();
	const [contentRef, setContentRef] = createSignal();
	const [currentPlacement, setCurrentPlacement] = createSignal(others.placement);
	const disclosureState = createDisclosureState({
		open: () => local.open,
		defaultOpen: () => local.defaultOpen,
		onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
	});
	const { present: contentPresent } = index_default({
		show: () => local.forceMount || disclosureState.isOpen(),
		element: () => contentRef() ?? null
	});
	const hideTooltip = (immediate = false) => {};
	const openTooltip = (immediate = false) => {};
	const cancelOpening = () => {};
	const isTargetOnTooltip = (target) => {
		return contains$1(triggerRef(), target) || contains$1(contentRef(), target);
	};
	createEffect(() => {});
	createEffect(() => {
		const trigger = triggerRef();
		if (!trigger || !disclosureState.isOpen()) return;
		const handleScroll = (event) => {
			const target = event.target;
			if (contains$1(target, trigger));
		};
		const win = getWindow$1();
		win.addEventListener("scroll", handleScroll, { capture: true });
		onCleanup(() => {
			win.removeEventListener("scroll", handleScroll, { capture: true });
		});
	});
	onCleanup(() => {
		clearTimeout(closeTimeoutId);
		if (tooltips[tooltipId]) delete tooltips[tooltipId];
	});
	const context = {
		dataset: createMemo(() => ({
			"data-expanded": disclosureState.isOpen() ? "" : void 0,
			"data-closed": !disclosureState.isOpen() ? "" : void 0
		})),
		isOpen: disclosureState.isOpen,
		isDisabled: () => local.disabled ?? false,
		triggerOnFocusOnly: () => local.triggerOnFocusOnly ?? false,
		contentId,
		contentPresent,
		openTooltip,
		hideTooltip,
		cancelOpening,
		generateId: createGenerateId(() => mergedProps.id),
		registerContentId: createRegisterId(setContentId),
		isTargetOnTooltip,
		setTriggerRef,
		setContentRef
	};
	return createComponent(TooltipContext.Provider, {
		value: context,
		get children() {
			return createComponent(Popper, mergeProps({
				anchorRef: triggerRef,
				contentRef,
				onCurrentPlacementChange: (value) => {
					setCurrentPlacement(value);
					local.onCurrentPlacementChange?.(value);
				}
			}, others));
		}
	});
}
function TooltipTrigger$1(props) {
	let ref;
	const context = useTooltipContext();
	const [local, others] = splitProps(props, [
		"ref",
		"onPointerEnter",
		"onPointerLeave",
		"onPointerDown",
		"onClick",
		"onFocus",
		"onBlur"
	]);
	let isPointerDown = false;
	let isHovered = false;
	let isFocused = false;
	const handlePointerUp = () => {
		isPointerDown = false;
	};
	const handleShow = () => {
		if (!context.isOpen() && (isHovered || isFocused)) context.openTooltip(isFocused);
	};
	const handleHide = (immediate) => {
		if (context.isOpen() && !isHovered && !isFocused) context.hideTooltip(immediate);
	};
	const onPointerEnter = (e) => {
		callHandler(e, local.onPointerEnter);
		if (e.pointerType === "touch" || context.triggerOnFocusOnly() || context.isDisabled() || e.defaultPrevented) return;
		isHovered = true;
		handleShow();
	};
	const onPointerLeave = (e) => {
		callHandler(e, local.onPointerLeave);
		if (e.pointerType === "touch") return;
		isHovered = false;
		isFocused = false;
		if (context.isOpen()) handleHide();
		else context.cancelOpening();
	};
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		isPointerDown = true;
		getDocument(ref).addEventListener("pointerup", handlePointerUp, { once: true });
	};
	const onClick = (e) => {
		callHandler(e, local.onClick);
		isHovered = false;
		isFocused = false;
		handleHide(true);
	};
	const onFocus = (e) => {
		callHandler(e, local.onFocus);
		if (context.isDisabled() || e.defaultPrevented || isPointerDown) return;
		isFocused = true;
		handleShow();
	};
	const onBlur = (e) => {
		callHandler(e, local.onBlur);
		const relatedTarget = e.relatedTarget;
		if (context.isTargetOnTooltip(relatedTarget)) return;
		isHovered = false;
		isFocused = false;
		handleHide(true);
	};
	onCleanup(() => {});
	return createComponent(Polymorphic, mergeProps({
		as: "button",
		get ["aria-describedby"]() {
			return memo(() => !!context.isOpen())() ? context.contentId() : void 0;
		},
		onPointerEnter,
		onPointerLeave,
		onPointerDown,
		onClick,
		onFocus,
		onBlur,
		type: "button"
	}, () => context.dataset(), others));
}
var Tooltip$1 = Object.assign(TooltipRoot, {
	Arrow: PopperArrow,
	Content: TooltipContent$1,
	Portal: TooltipPortal,
	Trigger: TooltipTrigger$1
});
var TooltipTrigger = TooltipTrigger$1;
var Tooltip = (props) => {
	return createComponent(TooltipRoot, mergeProps({ gutter: 4 }, props));
};
var TooltipContent = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(TooltipPortal, { get children() {
		return createComponent(TooltipContent$1, mergeProps({ get ["class"]() {
			return cn("z-50 origin-[var(--kb-popover-content-transform-origin)] overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95", local.class);
		} }, others));
	} });
};
var _tmpl$$3 = [
	"<div",
	" class=\"relative w-full overflow-auto\">",
	"</div>"
];
var Table = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssr(_tmpl$$3, ssrHydrationKey(), ssrElement("table", mergeProps({ get ["class"]() {
		return cn("w-full caption-bottom text-sm", local.class);
	} }, others), void 0, false));
};
var TableHeader = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("thead", mergeProps({ get ["class"]() {
		return cn("[&_tr]:border-b", local.class);
	} }, others), void 0, true);
};
var TableBody = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("tbody", mergeProps({ get ["class"]() {
		return cn("[&_tr:last-child]:border-0", local.class);
	} }, others), void 0, true);
};
var TableRow = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("tr", mergeProps({ get ["class"]() {
		return cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", local.class);
	} }, others), void 0, true);
};
var TableHead = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("th", mergeProps({ get ["class"]() {
		return cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", local.class);
	} }, others), void 0, true);
};
var TableCell = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("td", mergeProps({ get ["class"]() {
		return cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", local.class);
	} }, others), void 0, true);
};
var TabsKeyboardDelegate = class {
	collection;
	direction;
	orientation;
	constructor(collection, direction, orientation) {
		this.collection = collection;
		this.direction = direction;
		this.orientation = orientation;
	}
	flipDirection() {
		return this.direction() === "rtl" && this.orientation() === "horizontal";
	}
	getKeyLeftOf(key) {
		if (this.flipDirection()) return this.getNextKey(key);
		if (this.orientation() === "horizontal") return this.getPreviousKey(key);
	}
	getKeyRightOf(key) {
		if (this.flipDirection()) return this.getPreviousKey(key);
		if (this.orientation() === "horizontal") return this.getNextKey(key);
	}
	getKeyAbove(key) {
		if (this.orientation() === "vertical") return this.getPreviousKey(key);
	}
	getKeyBelow(key) {
		if (this.orientation() === "vertical") return this.getNextKey(key);
	}
	getFirstKey() {
		let key = this.collection().getFirstKey();
		if (key == null) return;
		if (this.collection().getItem(key)?.disabled) key = this.getNextKey(key);
		return key;
	}
	getLastKey() {
		let key = this.collection().getLastKey();
		if (key == null) return;
		if (this.collection().getItem(key)?.disabled) key = this.getPreviousKey(key);
		return key;
	}
	getNextKey(key) {
		let nextKey = key;
		let nextItem;
		do {
			nextKey = this.collection().getKeyAfter(nextKey) ?? this.collection().getFirstKey();
			if (nextKey == null) return;
			nextItem = this.collection().getItem(nextKey);
			if (nextItem == null) return;
		} while (nextItem.disabled);
		return nextKey;
	}
	getPreviousKey(key) {
		let previousKey = key;
		let previousItem;
		do {
			previousKey = this.collection().getKeyBefore(previousKey) ?? this.collection().getLastKey();
			if (previousKey == null) return;
			previousItem = this.collection().getItem(previousKey);
			if (previousItem == null) return;
		} while (previousItem.disabled);
		return previousKey;
	}
};
__export({}, {
	Content: () => TabsContent$1,
	Indicator: () => TabsIndicator,
	List: () => TabsList$1,
	Root: () => TabsRoot,
	Tabs: () => Tabs$1,
	Trigger: () => TabsTrigger$1,
	useTabsContext: () => useTabsContext
});
var TabsContext = createContext();
function useTabsContext() {
	const context = useContext(TabsContext);
	if (context === void 0) throw new Error("[kobalte]: `useTabsContext` must be used within a `Tabs` component");
	return context;
}
function TabsContent$1(props) {
	const [ref, setRef] = createSignal();
	const context = useTabsContext();
	const [local, others] = splitProps(props, [
		"ref",
		"id",
		"value",
		"forceMount"
	]);
	const [tabIndex, setTabIndex] = createSignal(0);
	const id = () => local.id ?? context.generateContentId(local.value);
	const isSelected = () => context.listState().selectedKey() === local.value;
	const { present } = index_default({
		show: () => local.forceMount || isSelected(),
		element: () => ref() ?? null
	});
	createEffect(on([() => ref(), () => present()], ([ref2, isPresent]) => {
		if (ref2 == null || !isPresent) return;
		const updateTabIndex = () => {
			const walker = getFocusableTreeWalker(ref2, { tabbable: true });
			setTabIndex(walker.nextNode() ? void 0 : 0);
		};
		updateTabIndex();
		const observer = new MutationObserver(updateTabIndex);
		observer.observe(ref2, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ["tabindex", "disabled"]
		});
		onCleanup(() => {
			observer.disconnect();
		});
	}));
	createEffect(on([() => local.value, id], ([value, id2]) => {
		context.contentIdsMap().set(value, id2);
	}));
	return createComponent(Show, {
		get when() {
			return present();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				get id() {
					return id();
				},
				role: "tabpanel",
				get tabIndex() {
					return tabIndex();
				},
				get ["aria-labelledby"]() {
					return context.triggerIdsMap().get(local.value);
				},
				get ["data-orientation"]() {
					return context.orientation();
				},
				get ["data-selected"]() {
					return isSelected() ? "" : void 0;
				}
			}, others));
		}
	});
}
function TabsIndicator(props) {
	const context = useTabsContext();
	const [local, others] = splitProps(props, ["style"]);
	const [style, setStyle] = createSignal();
	const { direction } = useLocale();
	const computeStyle = () => {
		const selectedTab = context.selectedTab();
		if (selectedTab == null || selectedTab.getClientRects().length === 0) return;
		const styleObj = {
			transform: void 0,
			width: void 0,
			height: void 0,
			transition: style() == null ? "none" : void 0
		};
		const offset = direction() === "rtl" ? -1 * (selectedTab.offsetParent?.offsetWidth - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
		styleObj.transform = context.orientation() === "vertical" ? `translateY(${selectedTab.offsetTop}px)` : `translateX(${offset}px)`;
		if (context.orientation() === "horizontal") styleObj.width = `${selectedTab.offsetWidth}px`;
		else styleObj.height = `${selectedTab.offsetHeight}px`;
		setStyle(styleObj);
	};
	createEffect(on([
		context.selectedTab,
		context.orientation,
		direction
	], () => {
		if (style() != null) computeStyle();
	}, { defer: true }));
	const [resizing, setResizing] = createSignal(false);
	context.selectedTab;
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		role: "presentation",
		get style() {
			return combineStyle(style() ?? { visibility: "hidden" }, local.style);
		},
		get ["data-orientation"]() {
			return context.orientation();
		},
		get ["data-resizing"]() {
			return resizing();
		}
	}, others));
}
function TabsList$1(props) {
	let ref;
	const context = useTabsContext();
	const [local, others] = splitProps(props, [
		"ref",
		"onKeyDown",
		"onMouseDown",
		"onFocusIn",
		"onFocusOut"
	]);
	const { direction } = useLocale();
	const delegate = new TabsKeyboardDelegate(() => context.listState().collection(), direction, context.orientation);
	const selectableCollection = createSelectableCollection({
		selectionManager: () => context.listState().selectionManager(),
		keyboardDelegate: () => delegate,
		selectOnFocus: () => context.activationMode() === "automatic",
		shouldFocusWrap: false,
		disallowEmptySelection: true
	}, () => ref);
	createEffect(() => {});
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		role: "tablist",
		get ["aria-orientation"]() {
			return context.orientation();
		},
		get ["data-orientation"]() {
			return context.orientation();
		},
		get onKeyDown() {
			return composeEventHandlers([local.onKeyDown, selectableCollection.onKeyDown]);
		},
		get onMouseDown() {
			return composeEventHandlers([local.onMouseDown, selectableCollection.onMouseDown]);
		},
		get onFocusIn() {
			return composeEventHandlers([local.onFocusIn, selectableCollection.onFocusIn]);
		},
		get onFocusOut() {
			return composeEventHandlers([local.onFocusOut, selectableCollection.onFocusOut]);
		}
	}, others));
}
function createSingleSelectListState(props) {
	const [selectedKey, setSelectedKey] = createControllableSignal({
		value: () => access$1(props.selectedKey),
		defaultValue: () => access$1(props.defaultSelectedKey),
		onChange: (value) => props.onSelectionChange?.(value)
	});
	const selectedKeys = createMemo(() => {
		const selection = selectedKey();
		return selection != null ? [selection] : [];
	});
	const [, defaultCreateListStateProps] = splitProps(props, ["onSelectionChange"]);
	const { collection, selectionManager } = createListState(mergeProps(defaultCreateListStateProps, {
		selectionMode: "single",
		disallowEmptySelection: true,
		allowDuplicateSelectionEvents: true,
		selectedKeys,
		onSelectionChange: (keys) => {
			const key = keys.values().next().value;
			if (key === void 0) return;
			if (key === selectedKey()) props.onSelectionChange?.(key);
			setSelectedKey(key);
		}
	}));
	return {
		collection,
		selectionManager,
		selectedKey,
		setSelectedKey,
		selectedItem: createMemo(() => {
			const selection = selectedKey();
			return selection != null ? collection().getItem(selection) : void 0;
		})
	};
}
function TabsRoot(props) {
	const [local, others] = splitProps(mergeDefaultProps({
		id: `tabs-${createUniqueId()}`,
		orientation: "horizontal",
		activationMode: "automatic"
	}, props), [
		"value",
		"defaultValue",
		"onChange",
		"orientation",
		"activationMode",
		"disabled"
	]);
	const [items, setItems] = createSignal([]);
	const [selectedTab, setSelectedTab] = createSignal();
	const { DomCollectionProvider } = createDomCollection({
		items,
		onItemsChange: setItems
	});
	const listState = createSingleSelectListState({
		selectedKey: () => local.value,
		defaultSelectedKey: () => local.defaultValue,
		onSelectionChange: (key) => local.onChange?.(String(key)),
		dataSource: items
	});
	let lastSelectedKey = listState.selectedKey();
	createEffect(on([
		() => listState.selectionManager(),
		() => listState.collection(),
		() => listState.selectedKey()
	], ([selectionManager, collection, currentSelectedKey]) => {
		let selectedKey = currentSelectedKey;
		if (selectionManager.isEmpty() || selectedKey == null || !collection.getItem(selectedKey)) {
			selectedKey = collection.getFirstKey();
			let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
			while (selectedItem?.disabled && selectedItem.key !== collection.getLastKey()) {
				selectedKey = collection.getKeyAfter(selectedItem.key);
				selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
			}
			if (selectedItem?.disabled && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
			if (selectedKey != null) selectionManager.setSelectedKeys([selectedKey]);
		}
		if (selectionManager.focusedKey() == null || !selectionManager.isFocused() && selectedKey !== lastSelectedKey) selectionManager.setFocusedKey(selectedKey);
		lastSelectedKey = selectedKey;
	}));
	const triggerIdsMap = /* @__PURE__ */ new Map();
	const contentIdsMap = /* @__PURE__ */ new Map();
	const context = {
		isDisabled: () => local.disabled ?? false,
		orientation: () => local.orientation,
		activationMode: () => local.activationMode,
		triggerIdsMap: () => triggerIdsMap,
		contentIdsMap: () => contentIdsMap,
		listState: () => listState,
		selectedTab,
		setSelectedTab,
		generateTriggerId: (value) => `${others.id}-trigger-${value}`,
		generateContentId: (value) => `${others.id}-content-${value}`
	};
	return createComponent(DomCollectionProvider, { get children() {
		return createComponent(TabsContext.Provider, {
			value: context,
			get children() {
				return createComponent(Polymorphic, mergeProps({
					as: "div",
					get ["data-orientation"]() {
						return context.orientation();
					}
				}, others));
			}
		});
	} });
}
function TabsTrigger$1(props) {
	let ref;
	const context = useTabsContext();
	const [local, others] = splitProps(mergeDefaultProps({ type: "button" }, props), [
		"ref",
		"id",
		"value",
		"disabled",
		"onPointerDown",
		"onPointerUp",
		"onClick",
		"onKeyDown",
		"onMouseDown",
		"onFocus"
	]);
	const id = () => local.id ?? context.generateTriggerId(local.value);
	const isHighlighted = () => context.listState().selectionManager().focusedKey() === local.value;
	const isDisabled = () => local.disabled || context.isDisabled();
	const contentId = () => context.contentIdsMap().get(local.value);
	createDomCollectionItem({ getItem: () => ({
		ref: () => ref,
		type: "item",
		key: local.value,
		textValue: "",
		disabled: isDisabled()
	}) });
	const selectableItem = createSelectableItem({
		key: () => local.value,
		selectionManager: () => context.listState().selectionManager(),
		disabled: isDisabled
	}, () => ref);
	const onClick = (e) => {
		if (isWebKit$1()) focusWithoutScrolling(e.currentTarget);
	};
	createEffect(on([() => local.value, id], ([value, id2]) => {
		context.triggerIdsMap().set(value, id2);
	}));
	return createComponent(Polymorphic, mergeProps({
		as: "button",
		get id() {
			return id();
		},
		role: "tab",
		get tabIndex() {
			return memo(() => !!!isDisabled())() ? selectableItem.tabIndex() : void 0;
		},
		get disabled() {
			return isDisabled();
		},
		get ["aria-selected"]() {
			return selectableItem.isSelected();
		},
		get ["aria-disabled"]() {
			return isDisabled() || void 0;
		},
		get ["aria-controls"]() {
			return memo(() => !!selectableItem.isSelected())() ? contentId() : void 0;
		},
		get ["data-key"]() {
			return selectableItem.dataKey();
		},
		get ["data-orientation"]() {
			return context.orientation();
		},
		get ["data-selected"]() {
			return selectableItem.isSelected() ? "" : void 0;
		},
		get ["data-highlighted"]() {
			return isHighlighted() ? "" : void 0;
		},
		get ["data-disabled"]() {
			return isDisabled() ? "" : void 0;
		},
		get onPointerDown() {
			return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
		},
		get onPointerUp() {
			return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
		},
		get onClick() {
			return composeEventHandlers([
				local.onClick,
				selectableItem.onClick,
				onClick
			]);
		},
		get onKeyDown() {
			return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
		},
		get onMouseDown() {
			return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
		},
		get onFocus() {
			return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
		}
	}, others));
}
var Tabs$1 = Object.assign(TabsRoot, {
	Content: TabsContent$1,
	Indicator: TabsIndicator,
	List: TabsList$1,
	Trigger: TabsTrigger$1
});
var Tabs = TabsRoot;
var TabsList = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(TabsList$1, mergeProps({ get ["class"]() {
		return cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", local.class);
	} }, others));
};
var TabsTrigger = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(TabsTrigger$1, mergeProps({ get ["class"]() {
		return cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm", local.class);
	} }, others));
};
var TabsContent = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(TabsContent$1, mergeProps({ get ["class"]() {
		return cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", local.class);
	} }, others));
};
__export({}, {
	Root: () => Skeleton$1,
	Skeleton: () => Skeleton2
});
function Skeleton$1(props) {
	const [local, others] = splitProps(mergeDefaultProps({
		visible: true,
		animate: true,
		id: `skeleton-${createUniqueId()}`
	}, props), [
		"style",
		"radius",
		"animate",
		"height",
		"width",
		"visible",
		"circle"
	]);
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		role: "group",
		get ["data-animate"]() {
			return local.animate || void 0;
		},
		get ["data-visible"]() {
			return local.visible || void 0;
		},
		get style() {
			return combineStyle({
				"border-radius": local.circle ? "9999px" : local.radius ? `${local.radius}px` : void 0,
				width: local.circle ? `${local.height}px` : local.width ? `${local.width}px` : "100%",
				height: local.height ? `${local.height}px` : "auto"
			}, local.style);
		}
	}, others));
}
var Skeleton2 = Skeleton$1;
var Skeleton = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(Skeleton$1, mergeProps({ get ["class"]() {
		return cn("bg-primary/10 data-[animate='true']:animate-pulse", local.class);
	} }, others));
};
var SCORE_CONTINUE_MATCH = 1;
var SCORE_SPACE_WORD_JUMP = .9;
var SCORE_NON_SPACE_WORD_JUMP = .8;
var SCORE_CHARACTER_JUMP = .17;
var SCORE_TRANSPOSITION = .1;
var PENALTY_SKIPPED = .999;
var PENALTY_CASE_MISMATCH = .9999;
var PENALTY_NOT_COMPLETE = .99;
var IS_GAP_REGEXP = /[\\\/_+.#"@\[\(\{&]/;
var COUNT_GAPS_REGEXP = /[\\\/_+.#"@\[\(\{&]/g;
var IS_SPACE_REGEXP = /[\s-]/;
var COUNT_SPACE_REGEXP = /[\s-]/g;
function commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex, memoizedResults) {
	if (abbreviationIndex === abbreviation.length) {
		if (stringIndex === string.length) return SCORE_CONTINUE_MATCH;
		return PENALTY_NOT_COMPLETE;
	}
	var memoizeKey = `${stringIndex},${abbreviationIndex}`;
	if (memoizedResults[memoizeKey] !== void 0) return memoizedResults[memoizeKey];
	var abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
	var index = lowerString.indexOf(abbreviationChar, stringIndex);
	var highScore = 0;
	var score, transposedScore, wordBreaks, spaceBreaks;
	while (index >= 0) {
		score = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1, memoizedResults);
		if (score > highScore) {
			if (index === stringIndex) score *= SCORE_CONTINUE_MATCH;
			else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
				score *= SCORE_NON_SPACE_WORD_JUMP;
				wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
				if (wordBreaks && stringIndex > 0) score *= Math.pow(PENALTY_SKIPPED, wordBreaks.length);
			} else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
				score *= SCORE_SPACE_WORD_JUMP;
				spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);
				if (spaceBreaks && stringIndex > 0) score *= Math.pow(PENALTY_SKIPPED, spaceBreaks.length);
			} else {
				score *= SCORE_CHARACTER_JUMP;
				if (stringIndex > 0) score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
			}
			if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) score *= PENALTY_CASE_MISMATCH;
		}
		if (score < SCORE_TRANSPOSITION && lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) || lowerAbbreviation.charAt(abbreviationIndex + 1) === lowerAbbreviation.charAt(abbreviationIndex) && lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
			transposedScore = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2, memoizedResults);
			if (transposedScore * SCORE_TRANSPOSITION > score) score = transposedScore * SCORE_TRANSPOSITION;
		}
		if (score > highScore) highScore = score;
		index = lowerString.indexOf(abbreviationChar, index + 1);
	}
	memoizedResults[memoizeKey] = highScore;
	return highScore;
}
function formatInput(string) {
	return string.toLowerCase().replace(COUNT_SPACE_REGEXP, " ");
}
function commandScore(string, abbreviation, aliases) {
	string = aliases && aliases.length > 0 ? `${string + " " + aliases.join(" ")}` : string;
	return commandScoreInner(string, abbreviation, formatInput(string), formatInput(abbreviation), 0, 0, {});
}
var _tmpl$$2 = [
	"<label cmdk-label",
	" style=\"",
	"\">",
	"</label>"
];
var _tmpl$2$1 = [
	"<div",
	" cmdk-group-heading aria-hidden=\"true\"",
	">",
	"</div>"
];
var _tmpl$3$1 = [
	"<div cmdk-group-items role=\"group\"",
	">",
	"</div>"
];
var _tmpl$4$1 = [
	"<div",
	" cmdk-list-sizer>",
	"</div>"
];
var _tmpl$5$1 = [
	"<div",
	" aria-hidden=\"true\">",
	"</div>"
];
var GROUP_SELECTOR = `[cmdk-group=""]`;
var GROUP_HEADING_SELECTOR = `[cmdk-group-heading=""]`;
var ITEM_SELECTOR = `[cmdk-item=""]`;
var VALID_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([aria-disabled="true"])`;
var SELECT_EVENT = `cmdk-item-select`;
var VALUE_ATTR = `data-value`;
var DIALOG_ROOT_KEYS = [
	"open",
	"defaultOpen",
	"onOpenChange",
	"id",
	"modal",
	"preventScroll",
	"forceMount",
	"translations"
];
var defaultFilter = (value, search, keywords) => commandScore(value, search, keywords);
var CommandContext = createContext();
var useCommand = () => useContext(CommandContext);
var StoreContext = createContext();
var useStore = () => useContext(StoreContext);
var GroupContext = createContext(() => void 0);
var Command$1 = (props) => {
	const [uncontrolledValue, setUncontrolledValue] = createSignal(props.value?.trim() ?? props.defaultValue ?? "");
	const [state, setState] = createStore({
		search: "",
		get value() {
			return props.value !== void 0 ? props.value.trim() : uncontrolledValue();
		},
		get filtered() {
			return filtered();
		},
		items: [],
		groups: {},
		ids: {}
	});
	const mergedProps = mergeProps({
		vimBindings: true,
		disablePointerSelection: false
	}, props);
	const filtered = createMemo(() => {
		const skipFiltering = !state.search || mergedProps.shouldFilter === false;
		const items = state.items.reduce((acc, id) => {
			const registered = state.ids[id];
			acc[id] = skipFiltering ? 1 : registered ? score(registered.value(), registered.keywords?.()) : 0;
			return acc;
		}, {});
		const groups = Object.keys(state.groups).filter((groupId) => {
			return state.groups[groupId].some((id) => (items[id] || 0) > 0);
		});
		return {
			count: Object.values(items).filter((score2) => score2 > 0).length,
			items,
			groups
		};
	});
	const [, etc] = splitProps(mergedProps, [
		"label",
		"children",
		"value",
		"onValueChange",
		"filter",
		"shouldFilter",
		"loop",
		"disablePointerSelection",
		"vimBindings"
	]);
	const listId = createUniqueId();
	const labelId = createUniqueId();
	const inputId = createUniqueId();
	const [listInnerRef, setListInnerRef] = createSignal(null);
	const schedule = useSchedule();
	onMount(() => {
		schedule(6, scrollSelectedIntoView);
	});
	const store = {
		state,
		setState: (key, value, opts) => {
			if (untrack(() => Object.is(state[key], value))) return;
			if (key === "value") setUncontrolledValue(value);
			else setState(key, value);
			if (key === "search") schedule(8, selectFirstItem);
			else if (key === "value") {
				if (!opts) schedule(5, scrollSelectedIntoView);
				if (mergedProps.value !== void 0) {
					const newValue = value ?? "";
					mergedProps.onValueChange?.(newValue);
					return;
				}
			}
		}
	};
	const context = {
		value: (id, value, keywords) => {
			setState(produce((draft) => {
				draft.ids[id] = {
					value,
					keywords
				};
			}));
			return () => {
				setState(produce((draft) => {
					delete draft.ids[id];
				}));
			};
		},
		item: (id, groupId) => {
			if (!listInnerRef()) console.warn("Mount Command.Item inside a Command.List component.");
			setState(produce((draft) => {
				if (!draft.items.includes(id)) draft.items.push(id);
				if (groupId) {
					const group = draft.groups[groupId] ??= [];
					if (!group.includes(id)) group.push(id);
				}
			}));
			schedule(3, () => {
				if (!state.value) selectFirstItem();
			});
			return () => {
				setState(produce((draft) => {
					const index = draft.items.indexOf(id);
					if (index !== -1) draft.items.splice(index, 1);
					if (groupId) {
						const group = draft.groups[groupId];
						const groupIndex = group?.indexOf(id) ?? -1;
						if (group && groupIndex !== -1) group.splice(groupIndex, 1);
					}
				}));
				if (getSelectedItem()?.getAttribute("id") === id) schedule(1, () => selectFirstItem());
			};
		},
		group: (id) => {
			if (!listInnerRef()) console.warn("Mount Command.Group inside a Command.List component.");
			setState(produce((draft) => {
				draft.groups[id] ??= [];
			}));
			return () => {
				setState(produce((draft) => {
					delete draft.groups[id];
				}));
			};
		},
		filter: () => {
			return mergedProps.shouldFilter !== false;
		},
		label: () => mergedProps.label || props["aria-label"] || "",
		disablePointerSelection: () => !!mergedProps.disablePointerSelection,
		listId,
		inputId,
		labelId,
		listInnerRef,
		setListInnerRef
	};
	function score(value, keywords) {
		const filter = mergedProps.filter ?? defaultFilter;
		return value ? filter(value, state.search, keywords) : 0;
	}
	function selectFirstItem() {
		const value = getValidItems().find((item2) => item2.getAttribute("aria-disabled") !== "true")?.getAttribute(VALUE_ATTR) || "";
		store.setState("value", value);
	}
	function scrollSelectedIntoView() {
		requestAnimationFrame(() => {
			const item = getSelectedItem();
			if (item) {
				if (item.parentElement?.firstChild === item) item.closest(GROUP_SELECTOR)?.querySelector(GROUP_HEADING_SELECTOR)?.scrollIntoView({ block: "nearest" });
				item.scrollIntoView({ block: "nearest" });
			}
		});
	}
	function getSelectedItem() {
		return listInnerRef()?.querySelector(`${ITEM_SELECTOR}[aria-selected="true"]`);
	}
	function getValidItems() {
		return Array.from(listInnerRef()?.querySelectorAll(VALID_ITEM_SELECTOR) || []);
	}
	return ssrElement("div", mergeProps({ tabIndex: -1 }, etc, { "cmdk-root": "" }), () => [
		ssr(_tmpl$$2, ssrAttribute("for", escape(context.inputId, true), false) + ssrAttribute("id", escape(context.labelId, true), false), ssrStyle(srOnlyStyles), escape(mergedProps.label)),
		"<!--$-->",
		escape(createComponent(StoreContext.Provider, {
			value: store,
			get children() {
				return createComponent(CommandContext.Provider, {
					value: context,
					get children() {
						return props.children;
					}
				});
			}
		})),
		"<!--/-->"
	], true);
};
var Item = (props) => {
	const store = useStore();
	const id = createUniqueId();
	const [ref, setRef] = createSignal();
	const groupContext = useContext(GroupContext);
	const context = useCommand();
	const rendered = createMemo((wasRendered) => wasRendered || !!ref() && !props.disabled, false);
	onMount(() => {
		const unregisterValue = context.value(id, value, () => props.keywords);
		if (forceMount()) {
			onCleanup(unregisterValue);
			return;
		}
		const unregisterItem = context.item(id, groupContext()?.id);
		onCleanup(() => {
			unregisterItem();
			unregisterValue();
		});
	});
	const [textValue, setTextValue] = createSignal("");
	createEffect(on(ref, (el) => {
		if (el) setTextValue(el.textContent || "");
	}));
	const value = () => props.value || textValue();
	createEffect(on([value, ref], ([value2, el]) => {
		el?.setAttribute(VALUE_ATTR, value2);
	}));
	const forceMount = () => props.forceMount ?? groupContext()?.forceMount;
	const selected = useCmdk((state) => value() && value() == state.value);
	const render = useCmdk((state) => !rendered() ? true : forceMount() ? true : context.filter() === false ? true : !state.search ? true : (state.filtered.items[id] || 0) > 0);
	createEffect(on(ref, (el) => {
		if (!el) return;
		el.addEventListener(SELECT_EVENT, onSelect);
		onCleanup(() => el.removeEventListener(SELECT_EVENT, onSelect));
	}));
	function onSelect() {
		select();
		props.onSelect?.(value());
	}
	function select() {
		store.setState("value", value(), true);
	}
	const [, etc] = splitProps(props, [
		"disabled",
		"onSelect",
		"value",
		"forceMount",
		"keywords"
	]);
	return createComponent(Show, {
		get when() {
			return render();
		},
		get children() {
			return ssrElement("div", mergeProps(etc, {
				id,
				"cmdk-item": "",
				role: "option",
				get ["aria-disabled"]() {
					return props.disabled ? "true" : "false";
				},
				get ["aria-selected"]() {
					return selected() ? "true" : "false";
				},
				get ["data-disabled"]() {
					return props.disabled ? "true" : "false";
				},
				get ["data-selected"]() {
					return selected() ? "true" : "false";
				}
			}), () => escape(props.children), true);
		}
	});
};
var Group = (props) => {
	const [, etc] = splitProps(props, [
		"heading",
		"value",
		"forceMount"
	]);
	const id = createUniqueId();
	const [ref, setRef] = createSignal();
	const [headerRef, setHeaderRef] = createSignal();
	const headingId = createUniqueId();
	const context = useCommand();
	const render = useCmdk((state) => {
		return props.forceMount ? true : context.filter() === false ? true : !state.search ? true : state.filtered.groups.includes(id);
	});
	onMount(() => {
		const unregisterValue = context.value(id, value);
		const unregisterGroup = context.group(id);
		onCleanup(() => {
			unregisterGroup();
			unregisterValue();
		});
	});
	const [headerValue, setHeaderValue] = createSignal("");
	createEffect(on(headerRef, (el) => {
		if (el) setHeaderValue(el.textContent || "");
	}));
	const value = () => props.value || headerValue();
	createEffect(on([value, ref], ([value2, el]) => {
		el?.setAttribute(VALUE_ATTR, value2);
	}));
	const contextValue = () => ({
		id,
		forceMount: props.forceMount
	});
	return ssrElement("div", mergeProps(etc, {
		"cmdk-group": "",
		id,
		role: "presentation",
		get hidden() {
			return render() ? void 0 : true;
		}
	}), () => [
		"<!--$-->",
		escape(createComponent(Show, {
			get when() {
				return props.heading;
			},
			get children() {
				return ssr(_tmpl$2$1, ssrHydrationKey(), ssrAttribute("id", escape(headingId, true), false), escape(props.heading));
			}
		})),
		"<!--/-->",
		ssr(_tmpl$3$1, ssrAttribute("aria-labelledby", props.heading ? escape(headingId, true) : void 0, false), escape(createComponent(GroupContext.Provider, {
			value: contextValue,
			get children() {
				return props.children;
			}
		})))
	], true);
};
var Separator = (props) => {
	const [, etc] = splitProps(props, ["alwaysRender"]);
	const render = useCmdk((state) => !state.search);
	return createComponent(Show, {
		get when() {
			return props.alwaysRender || render();
		},
		get children() {
			return ssrElement("div", mergeProps(etc, {
				"cmdk-separator": "",
				role: "separator"
			}), void 0, true);
		}
	});
};
var Input = (props) => {
	const [, etc] = splitProps(props, ["onValueChange", "ref"]);
	const isControlled = () => props.value != null;
	const store = useStore();
	const search = useCmdk((state) => state.search);
	const value = useCmdk((state) => state.value);
	const context = useCommand();
	const selectedItemId = createMemo(() => {
		return context.listInnerRef()?.querySelector(`${ITEM_SELECTOR}[${VALUE_ATTR}="${encodeURIComponent(value())}"]`)?.getAttribute("id") || void 0;
	});
	createEffect(on(() => props.value, (value2) => {
		if (value2 != null) store.setState("search", value2);
	}));
	return ssrElement("input", mergeProps(etc, {
		"cmdk-input": "",
		autocomplete: "off",
		autocorrect: "off",
		spellcheck: false,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": "true",
		get ["aria-controls"]() {
			return context.listId;
		},
		get ["aria-labelledby"]() {
			return context.labelId;
		},
		get ["aria-activedescendant"]() {
			return selectedItemId();
		},
		get id() {
			return context.inputId;
		},
		type: "text",
		get value() {
			return isControlled() ? props.value : search();
		}
	}), void 0, true);
};
var List = (props) => {
	const mergedProps = mergeProps({ label: "Suggestions" }, props);
	const [, etc] = splitProps(mergedProps, [
		"label",
		"children",
		"ref"
	]);
	const [wrapperRef, setWrapperRef] = createSignal();
	const [sizerRef, setSizerRef] = createSignal();
	const context = useCommand();
	createEffect(on([wrapperRef, sizerRef], ([wrapper, sizer]) => {
		if (!wrapper || !sizer) return;
		let animationFrame;
		const observer = new ResizeObserver(() => {
			animationFrame = requestAnimationFrame(() => {
				wrapper.style.setProperty(`--cmdk-list-height`, sizer.offsetHeight.toFixed(1) + "px");
			});
		});
		observer.observe(sizer);
		onCleanup(() => {
			cancelAnimationFrame(animationFrame);
			observer.unobserve(sizer);
		});
	}));
	return ssrElement("div", mergeProps(etc, {
		"cmdk-list": "",
		role: "listbox",
		get ["aria-label"]() {
			return mergedProps.label;
		},
		get id() {
			return context.listId;
		}
	}), () => escape(SlottableWithNestedChildren(props, (child) => ssr(_tmpl$4$1, ssrHydrationKey(), escape(child)))), true);
};
var Dialog = (props) => {
	const [, dialogRootProps, etc] = splitProps(props, [
		"overlayClassName",
		"contentClassName",
		"container"
	], DIALOG_ROOT_KEYS);
	return createComponent(dialog_exports.Root, mergeProps(dialogRootProps, { get children() {
		return createComponent(dialog_exports.Portal, {
			get mount() {
				return props.container;
			},
			get children() {
				return [createComponent(dialog_exports.Overlay, {
					"cmdk-overlay": "",
					get ["class"]() {
						return props.overlayClassName;
					}
				}), createComponent(dialog_exports.Content, {
					get ["aria-label"]() {
						return props.label;
					},
					"cmdk-dialog": "",
					get ["class"]() {
						return props.contentClassName;
					},
					get children() {
						return createComponent(Command$1, etc);
					}
				})];
			}
		});
	} }));
};
var Empty = (props) => {
	const [mounted, setMounted] = createSignal(false);
	const render = useCmdk((state) => state.filtered.count === 0 && mounted());
	onMount(() => {
		setMounted(true);
	});
	return createComponent(Show, {
		get when() {
			return render();
		},
		get children() {
			return ssrElement("div", mergeProps(props, {
				"cmdk-empty": "",
				role: "presentation"
			}), void 0, true);
		}
	});
};
var Loading = (props) => {
	const mergedProps = mergeProps({ label: "Loading..." }, props);
	const [, etc] = splitProps(mergedProps, [
		"progress",
		"children",
		"label"
	]);
	return ssrElement("div", mergeProps(etc, {
		"cmdk-loading": "",
		role: "progressbar",
		get ["aria-valuenow"]() {
			return mergedProps.progress;
		},
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		get ["aria-label"]() {
			return mergedProps.label;
		}
	}), () => escape(SlottableWithNestedChildren(props, (child) => ssr(_tmpl$5$1, ssrHydrationKey(), escape(child)))), true);
};
Object.assign(Command$1, {
	List,
	Item,
	Input,
	Group,
	Separator,
	Dialog,
	Empty,
	Loading
});
function useCmdk(selector) {
	const store = useStore();
	return () => selector(store.state);
}
var useSchedule = () => {
	let fns = /* @__PURE__ */ new Map();
	let queued = false;
	return (id, cb) => {
		fns.set(id, cb);
		if (queued) return;
		queued = true;
		queueMicrotask(() => {
			queued = false;
			const pending = fns;
			fns = /* @__PURE__ */ new Map();
			pending.forEach((f) => {
				f();
			});
		});
	};
};
function SlottableWithNestedChildren(props, render) {
	return render(props.children);
}
var srOnlyStyles = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	"white-space": "nowrap",
	"border-width": "0"
};
var _tmpl$$1 = [
	"<div",
	" class=\"flex items-center border-b px-3\" cmdk-input-wrapper><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"mr-2 size-4 shrink-0 opacity-50\"><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M21 21l-6 -6\"></path></svg><!--$-->",
	"<!--/--></div>"
];
var Command = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(Command$1, mergeProps({ get ["class"]() {
		return cn("flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground blur-none", local.class);
	} }, others));
};
var CommandInput = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(Input, mergeProps({ get ["class"]() {
		return cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", local.class);
	} }, others))));
};
var CommandList = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(List, mergeProps({ get ["class"]() {
		return cn("max-h-[300px] overflow-y-auto overflow-x-hidden", local.class);
	} }, others));
};
var CommandEmpty = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(Empty, mergeProps({ get ["class"]() {
		return cn("py-6 text-center text-sm", local.class);
	} }, others));
};
var CommandGroup = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(Group, mergeProps({ get ["class"]() {
		return cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", local.class);
	} }, others));
};
var CommandItem = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(Item, mergeProps({
		"cmdk-item": "",
		get ["class"]() {
			return cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50", local.class);
		}
	}, others));
};
var _tmpl$ = [
	"<section",
	" class=\"space-y-3\"><h2 class=\"font-serif text-xl\">",
	"</h2><!--$-->",
	"<!--/--></section>"
];
var _tmpl$2 = [
	"<form",
	" id=\"gallery-select-form\" class=\"max-w-xs space-y-2\">",
	"</form>"
];
var _tmpl$3 = [
	"<div",
	" class=\"flex flex-wrap items-center gap-3\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$4 = [
	"<div",
	" class=\"flex gap-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$5 = [
	"<div",
	" class=\"max-w-xs space-y-3\"><div class=\"space-y-1\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><div class=\"space-y-1\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div>"
];
var _tmpl$6 = ["<p", ">above</p>"];
var _tmpl$7 = ["<p", ">below</p>"];
var _tmpl$8 = [
	"<div",
	" class=\"flex items-center gap-6\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$9 = [
	"<div",
	" class=\"flex gap-3\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$0 = [
	"<div",
	" class=\"flex gap-3\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$1 = [
	"<div",
	" class=\"flex gap-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$10 = [
	"<div",
	" class=\"flex items-center gap-4\"><!--$-->",
	"<!--/--><div class=\"space-y-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div>"
];
var _tmpl$11 = [
	"<div",
	" class=\"mx-auto max-w-3xl space-y-10 bg-background p-8 text-foreground\"><header class=\"space-y-1\"><h1 class=\"font-serif text-3xl\">Basalt UI</h1><p class=\"text-sm text-muted-foreground\">Every component, ink-themed, radius zero.</p></header><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
function Section(props) {
	return ssr(_tmpl$, ssrHydrationKey(), escape(props.title), escape(props.children));
}
function SelectForm() {
	return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Select, {
		options: [
			"Landing",
			"Writing",
			"Careers"
		],
		placeholder: "Pick a page…",
		itemComponent: (p) => createComponent(SelectItem, {
			get item() {
				return p.item;
			},
			get children() {
				return p.item.rawValue;
			}
		}),
		get children() {
			return [
				createComponent(SelectHiddenSelect, {}),
				createComponent(SelectTrigger, { get children() {
					return createComponent(SelectValue, {});
				} }),
				createComponent(SelectContent, {})
			];
		}
	})));
}
function UiGallery() {
	const [dialogOpen, setDialogOpen] = createSignal(false);
	return ssr(_tmpl$11, ssrHydrationKey(), escape(createComponent(Section, {
		title: "Button",
		get children() {
			return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Button, { children: "Default" })), escape(createComponent(Button, {
				variant: "secondary",
				children: "Secondary"
			})), escape(createComponent(Button, {
				variant: "outline",
				children: "Outline"
			})), escape(createComponent(Button, {
				variant: "ghost",
				children: "Ghost"
			})), escape(createComponent(Button, {
				variant: "destructive",
				children: "Destructive"
			})), escape(createComponent(Button, {
				variant: "link",
				children: "Link"
			})), escape(createComponent(Button, {
				variant: "outline",
				size: "sm",
				children: "Small"
			})), escape(createComponent(Button, {
				disabled: true,
				children: "Disabled"
			})));
		}
	})), escape(createComponent(Section, {
		title: "Badge",
		get children() {
			return ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(Badge, { children: "Default" })), escape(createComponent(Badge, {
				variant: "secondary",
				children: "Secondary"
			})), escape(createComponent(Badge, {
				variant: "destructive",
				children: "Destructive"
			})), escape(createComponent(Badge, {
				variant: "outline",
				children: "Outline"
			})));
		}
	})), escape(createComponent(Section, {
		title: "Card",
		get children() {
			return createComponent(Card, { get children() {
				return [
					createComponent(CardHeader, { get children() {
						return [createComponent(CardTitle, { children: "Card title" }), createComponent(CardDescription, { children: "Card description line." })];
					} }),
					createComponent(CardContent, { children: "Card body content." }),
					createComponent(CardFooter, { get children() {
						return createComponent(Button, {
							size: "sm",
							children: "Act"
						});
					} })
				];
			} });
		}
	})), escape(createComponent(Section, {
		title: "Input / Label / Textarea",
		get children() {
			return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(Label, {
				"for": "g-name",
				children: "Name"
			})), escape(createComponent(Input$1, {
				id: "g-name",
				placeholder: "e.g. basalt"
			})), escape(createComponent(Label, {
				"for": "g-msg",
				children: "Message"
			})), escape(createComponent(Textarea, {
				id: "g-msg",
				placeholder: "Tell us…"
			})));
		}
	})), escape(createComponent(Section, {
		title: "Separator",
		get children() {
			return [
				ssr(_tmpl$6, ssrHydrationKey()),
				createComponent(Separator$1, {}),
				ssr(_tmpl$7, ssrHydrationKey())
			];
		}
	})), escape(createComponent(Section, {
		title: "Select",
		get children() {
			return createComponent(SelectForm, {});
		}
	})), escape(createComponent(Section, {
		title: "Checkbox / Switch",
		get children() {
			return ssr(_tmpl$8, ssrHydrationKey(), escape(createComponent(Checkbox, { children: "Accept" })), escape(createComponent(Switch$1, { get children() {
				return [createComponent(SwitchControl, { get children() {
					return createComponent(SwitchThumb, {});
				} }), createComponent(SwitchLabel, { children: "Autopilot" })];
			} })));
		}
	})), escape(createComponent(Section, {
		title: "Dialog / AlertDialog",
		get children() {
			return ssr(_tmpl$9, ssrHydrationKey(), escape(createComponent(Dialog$1, {
				get open() {
					return dialogOpen();
				},
				onOpenChange: setDialogOpen,
				get children() {
					return [createComponent(DialogTrigger, {
						as: Button,
						variant: "outline",
						children: "Open dialog"
					}), createComponent(DialogContent, { get children() {
						return [createComponent(DialogHeader, { get children() {
							return [createComponent(DialogTitle, { children: "Create thing" }), createComponent(DialogDescription, { children: "Dialogs read FormData from their form." })];
						} }), createComponent(DialogFooter, { get children() {
							return createComponent(Button, {
								onClick: () => setDialogOpen(false),
								children: "Create"
							});
						} })];
					} })];
				}
			})), escape(createComponent(AlertDialog, { get children() {
				return [createComponent(AlertDialogTrigger, {
					as: Button,
					variant: "destructive",
					children: "Delete"
				}), createComponent(AlertDialogContent, { get children() {
					return [createComponent(AlertDialogHeader, { get children() {
						return [createComponent(AlertDialogTitle, { children: "Delete forever?" }), createComponent(AlertDialogDescription, { children: "This cannot be undone." })];
					} }), createComponent(AlertDialogFooter, { get children() {
						return [createComponent(AlertDialogCancel, { children: "Cancel" }), createComponent(AlertDialogAction, { children: "Delete" })];
					} })];
				} })];
			} })));
		}
	})), escape(createComponent(Section, {
		title: "DropdownMenu / Popover / Tooltip",
		get children() {
			return ssr(_tmpl$0, ssrHydrationKey(), escape(createComponent(DropdownMenu, { get children() {
				return [createComponent(DropdownMenuTrigger, {
					as: Button,
					variant: "outline",
					children: "Menu"
				}), createComponent(DropdownMenuContent, { get children() {
					return [
						createComponent(DropdownMenuLabel, { children: "Actions" }),
						createComponent(DropdownMenuItem, { children: "Duplicate" }),
						createComponent(DropdownMenuSeparator, {}),
						createComponent(DropdownMenuItem, { children: "Archive" })
					];
				} })];
			} })), escape(createComponent(Popover, { get children() {
				return [createComponent(PopoverTrigger, {
					as: Button,
					variant: "outline",
					children: "Popover"
				}), createComponent(PopoverContent, {
					"class": "w-56 text-sm",
					children: "Popover body copy."
				})];
			} })), escape(createComponent(Tooltip, { get children() {
				return [createComponent(TooltipTrigger, {
					as: Button,
					variant: "ghost",
					children: "Hover"
				}), createComponent(TooltipContent, { children: "Tooltip text" })];
			} })));
		}
	})), escape(createComponent(Section, {
		title: "Toast",
		get children() {
			return ssr(_tmpl$1, ssrHydrationKey(), escape(createComponent(Button, {
				size: "sm",
				onClick: () => toast("Saved."),
				children: "toast info"
			})), escape(createComponent(Button, {
				size: "sm",
				variant: "destructive",
				onClick: () => toast("Failed to save.", "error"),
				children: "toast error"
			})));
		}
	})), escape(createComponent(Section, {
		title: "Table",
		get children() {
			return createComponent(Table, { get children() {
				return [createComponent(TableHeader, { get children() {
					return createComponent(TableRow, { get children() {
						return [createComponent(TableHead, { children: "Page" }), createComponent(TableHead, { children: "Status" })];
					} });
				} }), createComponent(TableBody, { get children() {
					return createComponent(For, {
						each: [["Landing", "live"], ["Writing", "draft"]],
						children: ([page, status]) => createComponent(TableRow, { get children() {
							return [createComponent(TableCell, { children: page }), createComponent(TableCell, { children: status })];
						} })
					});
				} })];
			} });
		}
	})), escape(createComponent(Section, {
		title: "Tabs",
		get children() {
			return createComponent(Tabs, {
				defaultValue: "one",
				get children() {
					return [
						createComponent(TabsList, { get children() {
							return [createComponent(TabsTrigger, {
								value: "one",
								children: "One"
							}), createComponent(TabsTrigger, {
								value: "two",
								children: "Two"
							})];
						} }),
						createComponent(TabsContent, {
							value: "one",
							children: "First tab body."
						}),
						createComponent(TabsContent, {
							value: "two",
							children: "Second tab body."
						})
					];
				}
			});
		}
	})), escape(createComponent(Section, {
		title: "Alert / Skeleton",
		get children() {
			return [createComponent(Alert, { get children() {
				return [createComponent(AlertTitle, { children: "Heads up" }), createComponent(AlertDescription, { children: "Alert description text." })];
			} }), ssr(_tmpl$10, ssrHydrationKey(), escape(createComponent(Skeleton, { "class": "size-10 rounded-full" })), escape(createComponent(Skeleton, { "class": "h-4 w-52" })), escape(createComponent(Skeleton, { "class": "h-4 w-36" })))];
		}
	})), escape(createComponent(Section, {
		title: "Command",
		get children() {
			return createComponent(Command, {
				"class": "max-w-md rounded-md border",
				get children() {
					return [createComponent(CommandInput, { placeholder: "Type a command…" }), createComponent(CommandList, { get children() {
						return [createComponent(CommandEmpty, { children: "No results." }), createComponent(CommandGroup, {
							heading: "Pages",
							get children() {
								return [
									createComponent(CommandItem, { children: "Landing" }),
									createComponent(CommandItem, { children: "Writing" }),
									createComponent(CommandItem, { children: "Careers" })
								];
							}
						})];
					} })];
				}
			});
		}
	})), escape(createComponent(Toaster, {})));
}
var id$$ = "src/routes/ui.tsx?pick=default&pick=$css";
function Ui() {
	return createComponent(UiGallery, {});
}
//#endregion
export { Ui as default, id$$ };
