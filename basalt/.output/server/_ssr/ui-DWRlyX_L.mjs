import { $ as createComputed, C as ssrElement, E as ssrStyleProperty, G as Match, J as Switch, K as Show, Q as createComponent, S as ssrAttribute, T as ssrStyle, W as For, Z as children, _ as memo, at as createSignal, dt as onCleanup, et as createContext, ft as onMount, gt as splitProps, h as escape, lt as mergeProps, n as access$1, nt as createMemo, ot as createUniqueId, p as Portal, r as accessWith, rt as createRenderEffect, t as createEventListener, tt as createEffect, ut as on, vt as untrack, w as ssrHydrationKey, x as ssr, yt as useContext } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Key } from "../_libs/solid-primitives__keyed.mjs";
import { t as mergeRefs } from "../_libs/solid-primitives__refs.mjs";
import { A as mergeDefaultProps, D as isPointInPolygon, E as isNumber, F as visuallyHiddenStyles, M as removeItemFromArray, N as scrollIntoView, O as isString, P as scrollIntoViewport, T as isMac, _ as getDocument, a as __export, b as getWindow, c as callHandler, d as contains$1, f as createGenerateId, i as Polymorphic, k as isWebKit, l as cn, m as focusWithoutScrolling, n as ButtonRoot, o as addItemToArray, p as createTagName, r as EventKey, s as buttonVariants, t as Button, u as composeEventHandlers, w as isFunction, x as isAppleDevice, y as getFocusableTreeWalker } from "./button-DTuGqGhm.mjs";
import { a as CardFooter, c as Input$1, d as SeparatorRoot, i as CardDescription, l as Label, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as Badge, u as Separator$1 } from "./separator-Bsik0zom.mjs";
import { n as createStore, r as produce } from "../_libs/solid-js.mjs";
import { t as combineStyle } from "../_libs/solid-primitives__props.mjs";
import { a as hide, c as shift, i as flip, l as size, n as autoUpdate, o as offset, r as computePosition, s as platform, t as arrow } from "../_libs/@floating-ui/dom+[...].mjs";
import { t as createResizeObserver } from "../_libs/@solid-primitives/resize-observer+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/ui-DWRlyX_L.js
var Textarea = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("textarea", mergeProps({ get ["class"]() {
		return cn("border-input placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", local.class);
	} }, others), void 0, true);
};
function buildNodes(params) {
	let index = params.startIndex ?? 0;
	const level = params.startLevel ?? 0;
	const nodes = [];
	const getKey = (data) => {
		if (data == null) return "";
		const _getKey = params.getKey ?? "key";
		const dataKey = isString(_getKey) ? data[_getKey] : _getKey(data);
		return dataKey != null ? String(dataKey) : "";
	};
	const getTextValue = (data) => {
		if (data == null) return "";
		const _getTextValue = params.getTextValue ?? "textValue";
		const dataTextValue = isString(_getTextValue) ? data[_getTextValue] : _getTextValue(data);
		return dataTextValue != null ? String(dataTextValue) : "";
	};
	const getDisabled = (data) => {
		if (data == null) return false;
		const _getDisabled = params.getDisabled ?? "disabled";
		return (isString(_getDisabled) ? data[_getDisabled] : _getDisabled(data)) ?? false;
	};
	const getSectionChildren = (data) => {
		if (data == null) return;
		if (isString(params.getSectionChildren)) return data[params.getSectionChildren];
		return params.getSectionChildren?.(data);
	};
	for (const data of params.dataSource) {
		if (isString(data) || isNumber(data)) {
			nodes.push({
				type: "item",
				rawValue: data,
				key: String(data),
				textValue: String(data),
				disabled: getDisabled(data),
				level,
				index
			});
			index++;
			continue;
		}
		if (getSectionChildren(data) != null) {
			nodes.push({
				type: "section",
				rawValue: data,
				key: "",
				textValue: "",
				disabled: false,
				level,
				index
			});
			index++;
			const sectionChildren = getSectionChildren(data) ?? [];
			if (sectionChildren.length > 0) {
				const childNodes = buildNodes({
					dataSource: sectionChildren,
					getKey: params.getKey,
					getTextValue: params.getTextValue,
					getDisabled: params.getDisabled,
					getSectionChildren: params.getSectionChildren,
					startIndex: index,
					startLevel: level + 1
				});
				nodes.push(...childNodes);
				index += childNodes.length;
			}
		} else {
			nodes.push({
				type: "item",
				rawValue: data,
				key: getKey(data),
				textValue: getTextValue(data),
				disabled: getDisabled(data),
				level,
				index
			});
			index++;
		}
	}
	return nodes;
}
function createCollection(props, deps = []) {
	return createMemo(() => {
		const nodes = buildNodes({
			dataSource: access$1(props.dataSource),
			getKey: access$1(props.getKey),
			getTextValue: access$1(props.getTextValue),
			getDisabled: access$1(props.getDisabled),
			getSectionChildren: access$1(props.getSectionChildren)
		});
		for (let i = 0; i < deps.length; i++) deps[i]();
		return props.factory(nodes);
	});
}
var RTL_SCRIPTS = /* @__PURE__ */ new Set([
	"Avst",
	"Arab",
	"Armi",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]);
var RTL_LANGS = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function isRTL(locale) {
	if (Intl.Locale) {
		const script = new Intl.Locale(locale).maximize().script ?? "";
		return RTL_SCRIPTS.has(script);
	}
	const lang = locale.split("-")[0];
	return RTL_LANGS.has(lang);
}
function getReadingDirection(locale) {
	return isRTL(locale) ? "rtl" : "ltr";
}
function getDefaultLocale() {
	let locale = typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([locale]);
	} catch (_err) {
		locale = "en-US";
	}
	return {
		locale,
		direction: getReadingDirection(locale)
	};
}
var currentLocale = getDefaultLocale();
var listeners = /* @__PURE__ */ new Set();
function updateLocale() {
	currentLocale = getDefaultLocale();
	for (const listener of listeners) listener(currentLocale);
}
function createDefaultLocale() {
	const defaultSSRLocale = {
		locale: "en-US",
		direction: "ltr"
	};
	const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
	const defaultLocale = createMemo(() => defaultSSRLocale);
	onMount(() => {
		if (listeners.size === 0) window.addEventListener("languagechange", updateLocale);
		listeners.add(setDefaultClientLocale);
		onCleanup(() => {
			listeners.delete(setDefaultClientLocale);
			if (listeners.size === 0) window.removeEventListener("languagechange", updateLocale);
		});
	});
	return {
		locale: () => defaultLocale().locale,
		direction: () => defaultLocale().direction
	};
}
var I18nContext = createContext();
function useLocale() {
	const defaultLocale = createDefaultLocale();
	return useContext(I18nContext) || defaultLocale;
}
var cache$1 = /* @__PURE__ */ new Map();
function createCollator(options) {
	const { locale } = useLocale();
	const cacheKey = createMemo(() => {
		return locale() + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	});
	return createMemo(() => {
		const key = cacheKey();
		let collator;
		if (cache$1.has(key)) collator = cache$1.get(key);
		if (!collator) {
			collator = new Intl.Collator(locale(), options);
			cache$1.set(key, collator);
		}
		return collator;
	});
}
function createControllableSignal(props) {
	const [_value, _setValue] = createSignal(props.defaultValue?.());
	const isControlled = createMemo(() => props.value?.() !== void 0);
	const value = createMemo(() => isControlled() ? props.value?.() : _value());
	const setValue = (next) => {
		untrack(() => {
			const nextValue = accessWith(next, value());
			if (!Object.is(nextValue, value())) {
				if (!isControlled()) _setValue(nextValue);
				props.onChange?.(nextValue);
			}
			return nextValue;
		});
	};
	return [value, setValue];
}
function createControllableBooleanSignal(props) {
	const [_value, setValue] = createControllableSignal(props);
	const value = () => _value() ?? false;
	return [value, setValue];
}
function createControllableArraySignal(props) {
	const [_value, setValue] = createControllableSignal(props);
	const value = () => _value() ?? [];
	return [value, setValue];
}
var Selection = class _Selection extends Set {
	anchorKey;
	currentKey;
	constructor(keys, anchorKey, currentKey) {
		super(keys);
		if (keys instanceof _Selection) {
			this.anchorKey = anchorKey || keys.anchorKey;
			this.currentKey = currentKey || keys.currentKey;
		} else {
			this.anchorKey = anchorKey;
			this.currentKey = currentKey;
		}
	}
};
function createControllableSelectionSignal(props) {
	const [_value, setValue] = createControllableSignal(props);
	const value = () => _value() ?? new Selection();
	return [value, setValue];
}
function isNonContiguousSelectionModifier(e) {
	return isAppleDevice() ? e.altKey : e.ctrlKey;
}
function isCtrlKeyPressed(e) {
	if (isMac()) return e.metaKey;
	return e.ctrlKey;
}
function convertSelection(selection) {
	return new Selection(selection);
}
function isSameSelection(setA, setB) {
	if (setA.size !== setB.size) return false;
	for (const item of setA) if (!setB.has(item)) return false;
	return true;
}
function createMultipleSelectionState(props) {
	const mergedProps = mergeDefaultProps({
		selectionMode: "none",
		selectionBehavior: "toggle"
	}, props);
	const [isFocused, setFocused] = createSignal(false);
	const [focusedKey, setFocusedKey] = createSignal();
	const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
		value: createMemo(() => {
			const selection = access$1(mergedProps.selectedKeys);
			if (selection != null) return convertSelection(selection);
			return selection;
		}),
		defaultValue: createMemo(() => {
			const defaultSelection = access$1(mergedProps.defaultSelectedKeys);
			if (defaultSelection != null) return convertSelection(defaultSelection);
			return new Selection();
		}),
		onChange: (value) => mergedProps.onSelectionChange?.(value)
	});
	const [selectionBehavior, setSelectionBehavior] = createSignal(access$1(mergedProps.selectionBehavior));
	const selectionMode = () => access$1(mergedProps.selectionMode);
	const disallowEmptySelection = () => access$1(mergedProps.disallowEmptySelection) ?? false;
	const setSelectedKeys = (keys) => {
		if (access$1(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) _setSelectedKeys(keys);
	};
	createEffect(() => {
		const selection = selectedKeys();
		if (access$1(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) setSelectionBehavior("replace");
	});
	createEffect(() => {
		setSelectionBehavior(access$1(mergedProps.selectionBehavior) ?? "toggle");
	});
	return {
		selectionMode,
		disallowEmptySelection,
		selectionBehavior,
		setSelectionBehavior,
		isFocused,
		setFocused,
		focusedKey,
		setFocusedKey,
		selectedKeys,
		setSelectedKeys
	};
}
function createTypeSelect(props) {
	const [search, setSearch] = createSignal("");
	const [timeoutId, setTimeoutId] = createSignal(-1);
	const onKeyDown = (e) => {
		if (access$1(props.isDisabled)) return;
		const delegate = access$1(props.keyboardDelegate);
		const manager = access$1(props.selectionManager);
		if (!delegate.getKeyForSearch) return;
		const character = getStringForKey(e.key);
		if (!character || e.ctrlKey || e.metaKey) return;
		if (character === " " && search().trim().length > 0) {
			e.preventDefault();
			e.stopPropagation();
		}
		let newSearch = setSearch((prev) => prev + character);
		let key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
		if (key == null && isAllSameLetter(newSearch)) {
			newSearch = newSearch[0];
			key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
		}
		if (key != null) {
			manager.setFocusedKey(key);
			props.onTypeSelect?.(key);
		}
		clearTimeout(timeoutId());
		setTimeoutId(window.setTimeout(() => setSearch(""), 500));
	};
	return { typeSelectHandlers: { onKeyDown } };
}
function getStringForKey(key) {
	if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
	return "";
}
function isAllSameLetter(search) {
	return search.split("").every((letter) => letter === search[0]);
}
function createSelectableCollection(props, ref, scrollRef) {
	const mergedProps = mergeProps({ selectOnFocus: () => access$1(props.selectionManager).selectionBehavior() === "replace" }, props);
	const finalScrollRef = () => scrollRef?.() ?? ref();
	const { direction } = useLocale();
	let scrollPos = {
		top: 0,
		left: 0
	};
	createEventListener(() => !access$1(mergedProps.isVirtualized) ? finalScrollRef() : void 0, "scroll", () => {
		const scrollEl = finalScrollRef();
		if (!scrollEl) return;
		scrollPos = {
			top: scrollEl.scrollTop,
			left: scrollEl.scrollLeft
		};
	});
	const { typeSelectHandlers } = createTypeSelect({
		isDisabled: () => access$1(mergedProps.disallowTypeAhead),
		keyboardDelegate: () => access$1(mergedProps.keyboardDelegate),
		selectionManager: () => access$1(mergedProps.selectionManager)
	});
	const orientation = () => access$1(mergedProps.orientation) ?? "vertical";
	const onKeyDown = (e) => {
		callHandler(e, typeSelectHandlers.onKeyDown);
		if (e.altKey && e.key === "Tab") e.preventDefault();
		const refEl = ref();
		if (!refEl?.contains(e.target)) return;
		const manager = access$1(mergedProps.selectionManager);
		const selectOnFocus = access$1(mergedProps.selectOnFocus);
		const navigateToKey = (key) => {
			if (key != null) {
				manager.setFocusedKey(key);
				if (e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(key);
				else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) manager.replaceSelection(key);
			}
		};
		const delegate = access$1(mergedProps.keyboardDelegate);
		const shouldFocusWrap = access$1(mergedProps.shouldFocusWrap);
		const focusedKey = manager.focusedKey();
		switch (e.key) {
			case orientation() === "vertical" ? "ArrowDown" : "ArrowRight":
				if (delegate.getKeyBelow) {
					e.preventDefault();
					let nextKey;
					if (focusedKey != null) nextKey = delegate.getKeyBelow(focusedKey);
					else nextKey = delegate.getFirstKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(focusedKey);
					navigateToKey(nextKey);
				}
				break;
			case orientation() === "vertical" ? "ArrowUp" : "ArrowLeft":
				if (delegate.getKeyAbove) {
					e.preventDefault();
					let nextKey;
					if (focusedKey != null) nextKey = delegate.getKeyAbove(focusedKey);
					else nextKey = delegate.getLastKey?.();
					if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(focusedKey);
					navigateToKey(nextKey);
				}
				break;
			case orientation() === "vertical" ? "ArrowLeft" : "ArrowUp":
				if (delegate.getKeyLeftOf) {
					e.preventDefault();
					const isRTL = direction() === "rtl";
					let nextKey;
					if (focusedKey != null) nextKey = delegate.getKeyLeftOf(focusedKey);
					else nextKey = isRTL ? delegate.getFirstKey?.() : delegate.getLastKey?.();
					navigateToKey(nextKey);
				}
				break;
			case orientation() === "vertical" ? "ArrowRight" : "ArrowDown":
				if (delegate.getKeyRightOf) {
					e.preventDefault();
					const isRTL = direction() === "rtl";
					let nextKey;
					if (focusedKey != null) nextKey = delegate.getKeyRightOf(focusedKey);
					else nextKey = isRTL ? delegate.getLastKey?.() : delegate.getFirstKey?.();
					navigateToKey(nextKey);
				}
				break;
			case "Home":
				if (delegate.getFirstKey) {
					e.preventDefault();
					const firstKey = delegate.getFirstKey(focusedKey, isCtrlKeyPressed(e));
					if (firstKey != null) {
						manager.setFocusedKey(firstKey);
						if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(firstKey);
						else if (selectOnFocus) manager.replaceSelection(firstKey);
					}
				}
				break;
			case "End":
				if (delegate.getLastKey) {
					e.preventDefault();
					const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
					if (lastKey != null) {
						manager.setFocusedKey(lastKey);
						if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(lastKey);
						else if (selectOnFocus) manager.replaceSelection(lastKey);
					}
				}
				break;
			case "PageDown":
				if (delegate.getKeyPageBelow && focusedKey != null) {
					e.preventDefault();
					navigateToKey(delegate.getKeyPageBelow(focusedKey));
				}
				break;
			case "PageUp":
				if (delegate.getKeyPageAbove && focusedKey != null) {
					e.preventDefault();
					navigateToKey(delegate.getKeyPageAbove(focusedKey));
				}
				break;
			case "a":
				if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access$1(mergedProps.disallowSelectAll) !== true) {
					e.preventDefault();
					manager.selectAll();
				}
				break;
			case "Escape":
				if (!e.defaultPrevented && !access$1(mergedProps.disallowEmptySelection)) {
					e.preventDefault();
					manager.clearSelection();
				}
				break;
			case "Tab": if (!access$1(mergedProps.allowsTabNavigation)) {
				if (e.shiftKey) refEl.focus();
				else {
					const walker = getFocusableTreeWalker(refEl, { tabbable: true });
					let next;
					let last;
					do {
						last = walker.lastChild();
						if (last) next = last;
					} while (last);
					if (next && !next.contains(document.activeElement)) focusWithoutScrolling(next);
				}
				break;
			}
		}
	};
	const onFocusIn = (e) => {
		const manager = access$1(mergedProps.selectionManager);
		const delegate = access$1(mergedProps.keyboardDelegate);
		const selectOnFocus = access$1(mergedProps.selectOnFocus);
		if (manager.isFocused()) {
			if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
			return;
		}
		if (!e.currentTarget.contains(e.target)) return;
		manager.setFocused(true);
		if (manager.focusedKey() == null) {
			const navigateToFirstKey = (key) => {
				if (key == null) return;
				manager.setFocusedKey(key);
				if (selectOnFocus) manager.replaceSelection(key);
			};
			const relatedTarget = e.relatedTarget;
			if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey(manager.lastSelectedKey() ?? delegate.getLastKey?.());
			else navigateToFirstKey(manager.firstSelectedKey() ?? delegate.getFirstKey?.());
		} else if (!access$1(mergedProps.isVirtualized)) {
			const scrollEl = finalScrollRef();
			if (scrollEl) {
				scrollEl.scrollTop = scrollPos.top;
				scrollEl.scrollLeft = scrollPos.left;
				const element = scrollEl.querySelector(`[data-key="${manager.focusedKey()}"]`);
				if (element) {
					focusWithoutScrolling(element);
					scrollIntoView(scrollEl, element);
				}
			}
		}
	};
	const onFocusOut = (e) => {
		const manager = access$1(mergedProps.selectionManager);
		if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
	};
	const onMouseDown = (e) => {
		if (finalScrollRef() === e.target) e.preventDefault();
	};
	const tryAutoFocus = () => {
		const autoFocus = access$1(mergedProps.autoFocus);
		if (!autoFocus) return;
		const manager = access$1(mergedProps.selectionManager);
		const delegate = access$1(mergedProps.keyboardDelegate);
		let focusedKey;
		if (autoFocus === "first") focusedKey = delegate.getFirstKey?.();
		if (autoFocus === "last") focusedKey = delegate.getLastKey?.();
		const selectedKeys = manager.selectedKeys();
		if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
		manager.setFocused(true);
		manager.setFocusedKey(focusedKey);
		const refEl = ref();
		if (refEl && focusedKey == null && !access$1(mergedProps.shouldUseVirtualFocus)) focusWithoutScrolling(refEl);
	};
	onMount(() => {
		if (mergedProps.deferAutoFocus) setTimeout(tryAutoFocus, 0);
		else tryAutoFocus();
	});
	createEffect(on([
		finalScrollRef,
		() => access$1(mergedProps.isVirtualized),
		() => access$1(mergedProps.selectionManager).focusedKey()
	], (newValue) => {
		const [scrollEl, isVirtualized, focusedKey] = newValue;
		if (isVirtualized) focusedKey && mergedProps.scrollToKey?.(focusedKey);
		else if (focusedKey && scrollEl) {
			const element = scrollEl.querySelector(`[data-key="${focusedKey}"]`);
			if (element) scrollIntoView(scrollEl, element);
		}
	}));
	return {
		tabIndex: createMemo(() => {
			if (access$1(mergedProps.shouldUseVirtualFocus)) return;
			return access$1(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
		}),
		onKeyDown,
		onMouseDown,
		onFocusIn,
		onFocusOut
	};
}
function createSelectableItem(props, ref) {
	const manager = () => access$1(props.selectionManager);
	const key = () => access$1(props.key);
	const shouldUseVirtualFocus = () => access$1(props.shouldUseVirtualFocus);
	const onSelect = (e) => {
		if (manager().selectionMode() === "none") return;
		if (manager().selectionMode() === "single") if (manager().isSelected(key()) && !manager().disallowEmptySelection()) manager().toggleSelection(key());
		else manager().replaceSelection(key());
		else if (e?.shiftKey) manager().extendSelection(key());
		else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") manager().toggleSelection(key());
		else manager().replaceSelection(key());
	};
	const isSelected = () => manager().isSelected(key());
	const isDisabled = () => access$1(props.disabled) || manager().isDisabled(key());
	const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
	let pointerDownType = null;
	const onPointerDown = (e) => {
		if (!allowsSelection()) return;
		pointerDownType = e.pointerType;
		if (e.pointerType === "mouse" && e.button === 0 && !access$1(props.shouldSelectOnPressUp)) onSelect(e);
	};
	const onPointerUp = (e) => {
		if (!allowsSelection()) return;
		if (e.pointerType === "mouse" && e.button === 0 && access$1(props.shouldSelectOnPressUp) && access$1(props.allowsDifferentPressOrigin)) onSelect(e);
	};
	const onClick = (e) => {
		if (!allowsSelection()) return;
		if (access$1(props.shouldSelectOnPressUp) && !access$1(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") onSelect(e);
	};
	const onKeyDown = (e) => {
		if (!allowsSelection() || !["Enter", " "].includes(e.key)) return;
		if (isNonContiguousSelectionModifier(e)) manager().toggleSelection(key());
		else onSelect(e);
	};
	const onMouseDown = (e) => {
		if (isDisabled()) e.preventDefault();
	};
	const onFocus = (e) => {
		const refEl = ref();
		if (shouldUseVirtualFocus() || isDisabled() || !refEl) return;
		if (e.target === refEl) manager().setFocusedKey(key());
	};
	const tabIndex = createMemo(() => {
		if (shouldUseVirtualFocus() || isDisabled()) return;
		return key() === manager().focusedKey() ? 0 : -1;
	});
	const dataKey = createMemo(() => {
		return access$1(props.virtualized) ? void 0 : key();
	});
	createEffect(on([
		ref,
		key,
		shouldUseVirtualFocus,
		() => manager().focusedKey(),
		() => manager().isFocused()
	], ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
		if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) if (props.focus) props.focus();
		else focusWithoutScrolling(refEl);
	}));
	return {
		isSelected,
		isDisabled,
		allowsSelection,
		tabIndex,
		dataKey,
		onPointerDown,
		onPointerUp,
		onClick,
		onKeyDown,
		onMouseDown,
		onFocus
	};
}
var SelectionManager = class {
	collection;
	state;
	constructor(collection, state) {
		this.collection = collection;
		this.state = state;
	}
	/** The type of selection that is allowed in the collection. */
	selectionMode() {
		return this.state.selectionMode();
	}
	/** Whether the collection allows empty selection. */
	disallowEmptySelection() {
		return this.state.disallowEmptySelection();
	}
	/** The selection behavior for the collection. */
	selectionBehavior() {
		return this.state.selectionBehavior();
	}
	/** Sets the selection behavior for the collection. */
	setSelectionBehavior(selectionBehavior) {
		this.state.setSelectionBehavior(selectionBehavior);
	}
	/** Whether the collection is currently focused. */
	isFocused() {
		return this.state.isFocused();
	}
	/** Sets whether the collection is focused. */
	setFocused(isFocused) {
		this.state.setFocused(isFocused);
	}
	/** The current focused key in the collection. */
	focusedKey() {
		return this.state.focusedKey();
	}
	/** Sets the focused key. */
	setFocusedKey(key) {
		if (key == null || this.collection().getItem(key)) this.state.setFocusedKey(key);
	}
	/** The currently selected keys in the collection. */
	selectedKeys() {
		return this.state.selectedKeys();
	}
	/** Returns whether a key is selected. */
	isSelected(key) {
		if (this.state.selectionMode() === "none") return false;
		const retrievedKey = this.getKey(key);
		if (retrievedKey == null) return false;
		return this.state.selectedKeys().has(retrievedKey);
	}
	/** Whether the selection is empty. */
	isEmpty() {
		return this.state.selectedKeys().size === 0;
	}
	/** Whether all items in the collection are selected. */
	isSelectAll() {
		if (this.isEmpty()) return false;
		const selectedKeys = this.state.selectedKeys();
		return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
	}
	firstSelectedKey() {
		let first;
		for (const key of this.state.selectedKeys()) {
			const item = this.collection().getItem(key);
			const isItemBeforeFirst = item?.index != null && first?.index != null && item.index < first.index;
			if (!first || isItemBeforeFirst) first = item;
		}
		return first?.key;
	}
	lastSelectedKey() {
		let last;
		for (const key of this.state.selectedKeys()) {
			const item = this.collection().getItem(key);
			const isItemAfterLast = item?.index != null && last?.index != null && item.index > last.index;
			if (!last || isItemAfterLast) last = item;
		}
		return last?.key;
	}
	/** Extends the selection to the given key. */
	extendSelection(toKey) {
		if (this.selectionMode() === "none") return;
		if (this.selectionMode() === "single") {
			this.replaceSelection(toKey);
			return;
		}
		const retrievedToKey = this.getKey(toKey);
		if (retrievedToKey == null) return;
		const selectedKeys = this.state.selectedKeys();
		const anchorKey = selectedKeys.anchorKey || retrievedToKey;
		const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
		for (const key of this.getKeyRange(anchorKey, selectedKeys.currentKey || retrievedToKey)) selection.delete(key);
		for (const key of this.getKeyRange(retrievedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
		this.state.setSelectedKeys(selection);
	}
	getKeyRange(from, to) {
		const fromItem = this.collection().getItem(from);
		const toItem = this.collection().getItem(to);
		if (fromItem && toItem) {
			if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) return this.getKeyRangeInternal(from, to);
			return this.getKeyRangeInternal(to, from);
		}
		return [];
	}
	getKeyRangeInternal(from, to) {
		const keys = [];
		let key = from;
		while (key != null) {
			const item = this.collection().getItem(key);
			if (item && item.type === "item") keys.push(key);
			if (key === to) return keys;
			key = this.collection().getKeyAfter(key);
		}
		return [];
	}
	getKey(key) {
		const item = this.collection().getItem(key);
		if (!item) return key;
		if (!item || item.type !== "item") return null;
		return item.key;
	}
	/** Toggles whether the given key is selected. */
	toggleSelection(key) {
		if (this.selectionMode() === "none") return;
		if (this.selectionMode() === "single" && !this.isSelected(key)) {
			this.replaceSelection(key);
			return;
		}
		const retrievedKey = this.getKey(key);
		if (retrievedKey == null) return;
		const keys = new Selection(this.state.selectedKeys());
		if (keys.has(retrievedKey)) keys.delete(retrievedKey);
		else if (this.canSelectItem(retrievedKey)) {
			keys.add(retrievedKey);
			keys.anchorKey = retrievedKey;
			keys.currentKey = retrievedKey;
		}
		if (this.disallowEmptySelection() && keys.size === 0) return;
		this.state.setSelectedKeys(keys);
	}
	/** Replaces the selection with only the given key. */
	replaceSelection(key) {
		if (this.selectionMode() === "none") return;
		const retrievedKey = this.getKey(key);
		if (retrievedKey == null) return;
		const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
		this.state.setSelectedKeys(selection);
	}
	/** Replaces the selection with the given keys. */
	setSelectedKeys(keys) {
		if (this.selectionMode() === "none") return;
		const selection = new Selection();
		for (const key of keys) {
			const retrievedKey = this.getKey(key);
			if (retrievedKey != null) {
				selection.add(retrievedKey);
				if (this.selectionMode() === "single") break;
			}
		}
		this.state.setSelectedKeys(selection);
	}
	/** Selects all items in the collection. */
	selectAll() {
		if (this.selectionMode() === "multiple") this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
	}
	/**
	* Removes all keys from the selection.
	*/
	clearSelection() {
		const selectedKeys = this.state.selectedKeys();
		if (!this.disallowEmptySelection() && selectedKeys.size > 0) this.state.setSelectedKeys(new Selection());
	}
	/**
	* Toggles between select all and an empty selection.
	*/
	toggleSelectAll() {
		if (this.isSelectAll()) this.clearSelection();
		else this.selectAll();
	}
	select(key, e) {
		if (this.selectionMode() === "none") return;
		if (this.selectionMode() === "single") if (this.isSelected(key) && !this.disallowEmptySelection()) this.toggleSelection(key);
		else this.replaceSelection(key);
		else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") this.toggleSelection(key);
		else this.replaceSelection(key);
	}
	/** Returns whether the current selection is equal to the given selection. */
	isSelectionEqual(selection) {
		if (selection === this.state.selectedKeys()) return true;
		const selectedKeys = this.selectedKeys();
		if (selection.size !== selectedKeys.size) return false;
		for (const key of selection) if (!selectedKeys.has(key)) return false;
		for (const key of selectedKeys) if (!selection.has(key)) return false;
		return true;
	}
	canSelectItem(key) {
		if (this.state.selectionMode() === "none") return false;
		const item = this.collection().getItem(key);
		return item != null && !item.disabled;
	}
	isDisabled(key) {
		const item = this.collection().getItem(key);
		return !item || item.disabled;
	}
	getAllSelectableKeys() {
		const keys = [];
		const addKeys = (key) => {
			while (key != null) {
				if (this.canSelectItem(key)) {
					const item = this.collection().getItem(key);
					if (!item) continue;
					if (item.type === "item") keys.push(key);
				}
				key = this.collection().getKeyAfter(key);
			}
		};
		addKeys(this.collection().getFirstKey());
		return keys;
	}
};
var ListCollection = class {
	keyMap = /* @__PURE__ */ new Map();
	iterable;
	firstKey;
	lastKey;
	constructor(nodes) {
		this.iterable = nodes;
		for (const node of nodes) this.keyMap.set(node.key, node);
		if (this.keyMap.size === 0) return;
		let last;
		let index = 0;
		for (const [key, node] of this.keyMap) {
			if (last) {
				last.nextKey = key;
				node.prevKey = last.key;
			} else {
				this.firstKey = key;
				node.prevKey = void 0;
			}
			if (node.type === "item") node.index = index++;
			last = node;
			last.nextKey = void 0;
		}
		this.lastKey = last.key;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	getSize() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(key) {
		return this.keyMap.get(key)?.prevKey;
	}
	getKeyAfter(key) {
		return this.keyMap.get(key)?.nextKey;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(key) {
		return this.keyMap.get(key);
	}
	at(idx) {
		const keys = [...this.getKeys()];
		return this.getItem(keys[idx]);
	}
};
function createListState(props) {
	const selectionState = createMultipleSelectionState(props);
	const factory = (nodes) => {
		return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
	};
	const collection = createCollection({
		dataSource: () => access$1(props.dataSource),
		getKey: () => access$1(props.getKey),
		getTextValue: () => access$1(props.getTextValue),
		getDisabled: () => access$1(props.getDisabled),
		getSectionChildren: () => access$1(props.getSectionChildren),
		factory
	}, [() => props.filter]);
	const selectionManager = new SelectionManager(collection, selectionState);
	createComputed(() => {
		const focusedKey = selectionState.focusedKey();
		if (focusedKey != null && !collection().getItem(focusedKey)) selectionState.setFocusedKey(void 0);
	});
	return {
		collection,
		selectionManager: () => selectionManager
	};
}
function createRegisterId(setter) {
	return (id) => {
		setter(id);
		return () => setter(void 0);
	};
}
var FORM_CONTROL_PROP_NAMES = [
	"id",
	"name",
	"validationState",
	"required",
	"disabled",
	"readOnly"
];
function createFormControl(props) {
	const mergedProps = mergeDefaultProps({ id: `form-control-${createUniqueId()}` }, props);
	const [labelId, setLabelId] = createSignal();
	const [fieldId, setFieldId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const [errorMessageId, setErrorMessageId] = createSignal();
	const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
		const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
		return [
			fieldAriaLabelledBy,
			labelId(),
			hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
		].filter(Boolean).join(" ") || void 0;
	};
	const getAriaDescribedBy = (fieldAriaDescribedBy) => {
		return [
			descriptionId(),
			errorMessageId(),
			fieldAriaDescribedBy
		].filter(Boolean).join(" ") || void 0;
	};
	return { formControlContext: {
		name: () => access$1(mergedProps.name) ?? access$1(mergedProps.id),
		dataset: createMemo(() => ({
			"data-valid": access$1(mergedProps.validationState) === "valid" ? "" : void 0,
			"data-invalid": access$1(mergedProps.validationState) === "invalid" ? "" : void 0,
			"data-required": access$1(mergedProps.required) ? "" : void 0,
			"data-disabled": access$1(mergedProps.disabled) ? "" : void 0,
			"data-readonly": access$1(mergedProps.readOnly) ? "" : void 0
		})),
		validationState: () => access$1(mergedProps.validationState),
		isRequired: () => access$1(mergedProps.required),
		isDisabled: () => access$1(mergedProps.disabled),
		isReadOnly: () => access$1(mergedProps.readOnly),
		labelId,
		fieldId,
		descriptionId,
		errorMessageId,
		getAriaLabelledBy,
		getAriaDescribedBy,
		generateId: createGenerateId(() => access$1(mergedProps.id)),
		registerLabel: createRegisterId(setLabelId),
		registerField: createRegisterId(setFieldId),
		registerDescription: createRegisterId(setDescriptionId),
		registerErrorMessage: createRegisterId(setErrorMessageId)
	} };
}
var FormControlContext = createContext();
function useFormControlContext() {
	const context = useContext(FormControlContext);
	if (context === void 0) throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
	return context;
}
function FormControlDescription(props) {
	const context = useFormControlContext();
	const mergedProps = mergeDefaultProps({ id: context.generateId("description") }, props);
	createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
	return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
var _tmpl$$10 = [
	"<option",
	"",
	">",
	"</option>"
];
var _tmpl$2$7 = "<option></option>";
var _tmpl$3$6 = [
	"<div",
	" style=\"",
	"\" aria-hidden=\"true\"><input type=\"text\"",
	" style=\"",
	"\"",
	"",
	">",
	"</div>"
];
function HiddenSelectBase(props) {
	const [local, others] = splitProps(props, [
		"ref",
		"onChange",
		"collection",
		"selectionManager",
		"isOpen",
		"isMultiple",
		"isVirtualized",
		"focusTrigger"
	]);
	const formControlContext = useFormControlContext();
	const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
	const renderOption = (key) => {
		const item = local.collection.getItem(key);
		return createComponent(Show, {
			get when() {
				return item?.type === "item";
			},
			get children() {
				return ssr(_tmpl$$10, ssrHydrationKey() + ssrAttribute("value", escape(key, true), false), ssrAttribute("selected", local.selectionManager.isSelected(key), true), escape(item?.textValue));
			}
		});
	};
	createEffect(on(() => local.selectionManager.selectedKeys(), (keys, prevKeys) => {
		if (prevKeys && isSameSelection(keys, prevKeys)) return;
		setIsInternalChangeEvent(true);
	}, { defer: true }));
	return ssr(_tmpl$3$6, ssrHydrationKey(), ssrStyle(visuallyHiddenStyles), ssrAttribute("tabindex", local.selectionManager.isFocused() || local.isOpen ? -1 : 0, false), ssrStyleProperty("font-size:", "16px"), ssrAttribute("required", formControlContext.isRequired(), true), ssrAttribute("disabled", formControlContext.isDisabled(), true) + ssrAttribute("readonly", escape(formControlContext.isReadOnly(), true), false), ssrElement("select", mergeProps({
		tabIndex: -1,
		get multiple() {
			return local.isMultiple;
		},
		get name() {
			return formControlContext.name();
		},
		get required() {
			return formControlContext.isRequired();
		},
		get disabled() {
			return formControlContext.isDisabled();
		},
		get size() {
			return local.collection.getSize();
		},
		get value() {
			return local.selectionManager.firstSelectedKey() ?? "";
		}
	}, others), () => [
		ssr(_tmpl$2$7),
		"<!--$-->",
		escape(createComponent(Show, {
			get when() {
				return local.isVirtualized;
			},
			get fallback() {
				return createComponent(For, {
					get each() {
						return [...local.collection.getKeys()];
					},
					children: renderOption
				});
			},
			get children() {
				return createComponent(For, {
					get each() {
						return [...local.selectionManager.selectedKeys()];
					},
					children: renderOption
				});
			}
		})),
		"<!--/-->"
	], false));
}
var cache = /* @__PURE__ */ new WeakMap();
function getItemCount(collection) {
	let count = cache.get(collection);
	if (count != null) return count;
	count = 0;
	for (const item of collection) if (item.type === "item") count++;
	cache.set(collection, count);
	return count;
}
var ListKeyboardDelegate = class {
	collection;
	ref;
	collator;
	constructor(collection, ref, collator) {
		this.collection = collection;
		this.ref = ref;
		this.collator = collator;
	}
	getKeyBelow(key) {
		let keyAfter = this.collection().getKeyAfter(key);
		while (keyAfter != null) {
			const item = this.collection().getItem(keyAfter);
			if (item && item.type === "item" && !item.disabled) return keyAfter;
			keyAfter = this.collection().getKeyAfter(keyAfter);
		}
	}
	getKeyAbove(key) {
		let keyBefore = this.collection().getKeyBefore(key);
		while (keyBefore != null) {
			const item = this.collection().getItem(keyBefore);
			if (item && item.type === "item" && !item.disabled) return keyBefore;
			keyBefore = this.collection().getKeyBefore(keyBefore);
		}
	}
	getFirstKey() {
		let key = this.collection().getFirstKey();
		while (key != null) {
			const item = this.collection().getItem(key);
			if (item && item.type === "item" && !item.disabled) return key;
			key = this.collection().getKeyAfter(key);
		}
	}
	getLastKey() {
		let key = this.collection().getLastKey();
		while (key != null) {
			const item = this.collection().getItem(key);
			if (item && item.type === "item" && !item.disabled) return key;
			key = this.collection().getKeyBefore(key);
		}
	}
	getItem(key) {
		return this.ref?.()?.querySelector(`[data-key="${key}"]`) ?? null;
	}
	getKeyPageAbove(key) {
		const menu = this.ref?.();
		let item = this.getItem(key);
		if (!menu || !item) return;
		const pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
		let keyAbove = key;
		while (keyAbove && item && item.offsetTop > pageY) {
			keyAbove = this.getKeyAbove(keyAbove);
			item = keyAbove != null ? this.getItem(keyAbove) : null;
		}
		return keyAbove;
	}
	getKeyPageBelow(key) {
		const menu = this.ref?.();
		let item = this.getItem(key);
		if (!menu || !item) return;
		const pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
		let keyBelow = key;
		while (keyBelow && item && item.offsetTop < pageY) {
			keyBelow = this.getKeyBelow(keyBelow);
			item = keyBelow != null ? this.getItem(keyBelow) : null;
		}
		return keyBelow;
	}
	getKeyForSearch(search, fromKey) {
		const collator = this.collator?.();
		if (!collator) return;
		let key = fromKey != null ? this.getKeyBelow(fromKey) : this.getFirstKey();
		while (key != null) {
			const item = this.collection().getItem(key);
			if (item) {
				const substring = item.textValue.slice(0, search.length);
				if (item.textValue && collator.compare(substring, search) === 0) return key;
			}
			key = this.getKeyBelow(key);
		}
	}
};
function createSelectableList(props, ref, scrollRef) {
	const collator = createCollator({
		usage: "search",
		sensitivity: "base"
	});
	return createSelectableCollection({
		selectionManager: () => access$1(props.selectionManager),
		keyboardDelegate: createMemo(() => {
			const keyboardDelegate = access$1(props.keyboardDelegate);
			if (keyboardDelegate) return keyboardDelegate;
			return new ListKeyboardDelegate(props.collection, ref, collator);
		}),
		autoFocus: () => access$1(props.autoFocus),
		deferAutoFocus: () => access$1(props.deferAutoFocus),
		shouldFocusWrap: () => access$1(props.shouldFocusWrap),
		disallowEmptySelection: () => access$1(props.disallowEmptySelection),
		selectOnFocus: () => access$1(props.selectOnFocus),
		disallowTypeAhead: () => access$1(props.disallowTypeAhead),
		shouldUseVirtualFocus: () => access$1(props.shouldUseVirtualFocus),
		allowsTabNavigation: () => access$1(props.allowsTabNavigation),
		isVirtualized: () => access$1(props.isVirtualized),
		scrollToKey: (key) => access$1(props.scrollToKey)?.(key),
		orientation: () => access$1(props.orientation)
	}, ref, scrollRef);
}
__export({}, {
	Item: () => ListboxItem,
	ItemDescription: () => ListboxItemDescription,
	ItemIndicator: () => ListboxItemIndicator,
	ItemLabel: () => ListboxItemLabel,
	Listbox: () => Listbox,
	Root: () => ListboxRoot,
	Section: () => ListboxSection,
	useListboxContext: () => useListboxContext
});
var ListboxContext = createContext();
function useListboxContext() {
	const context = useContext(ListboxContext);
	if (context === void 0) throw new Error("[kobalte]: `useListboxContext` must be used within a `Listbox` component");
	return context;
}
var ListboxItemContext = createContext();
function useListboxItemContext() {
	const context = useContext(ListboxItemContext);
	if (context === void 0) throw new Error("[kobalte]: `useListboxItemContext` must be used within a `Listbox.Item` component");
	return context;
}
function ListboxItem(props) {
	let ref;
	const listBoxContext = useListboxContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: `${listBoxContext.generateId("item")}-${createUniqueId()}` }, props), [
		"ref",
		"item",
		"aria-label",
		"aria-labelledby",
		"aria-describedby",
		"onPointerMove",
		"onPointerDown",
		"onPointerUp",
		"onClick",
		"onKeyDown",
		"onMouseDown",
		"onFocus"
	]);
	const [labelId, setLabelId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const selectionManager = () => listBoxContext.listState().selectionManager();
	const isHighlighted = () => selectionManager().focusedKey() === local.item.key;
	const selectableItem = createSelectableItem({
		key: () => local.item.key,
		selectionManager,
		shouldSelectOnPressUp: listBoxContext.shouldSelectOnPressUp,
		allowsDifferentPressOrigin: () => {
			return listBoxContext.shouldSelectOnPressUp() && listBoxContext.shouldFocusOnHover();
		},
		shouldUseVirtualFocus: listBoxContext.shouldUseVirtualFocus,
		disabled: () => local.item.disabled
	}, () => ref);
	const ariaSelected = () => {
		if (selectionManager().selectionMode() === "none") return;
		return selectableItem.isSelected();
	};
	const isNotSafariMacOS = createMemo(() => !(isMac() && isWebKit()));
	const ariaLabel = () => isNotSafariMacOS() ? local["aria-label"] : void 0;
	const ariaLabelledBy = () => isNotSafariMacOS() ? labelId() : void 0;
	const ariaDescribedBy = () => isNotSafariMacOS() ? descriptionId() : void 0;
	const ariaPosInSet = () => {
		if (!listBoxContext.isVirtualized()) return;
		const index = listBoxContext.listState().collection().getItem(local.item.key)?.index;
		return index != null ? index + 1 : void 0;
	};
	const ariaSetSize = () => {
		if (!listBoxContext.isVirtualized()) return;
		return getItemCount(listBoxContext.listState().collection());
	};
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (e.pointerType !== "mouse") return;
		if (!selectableItem.isDisabled() && listBoxContext.shouldFocusOnHover()) {
			focusWithoutScrolling(e.currentTarget);
			selectionManager().setFocused(true);
			selectionManager().setFocusedKey(local.item.key);
		}
	};
	const dataset = createMemo(() => ({
		"data-disabled": selectableItem.isDisabled() ? "" : void 0,
		"data-selected": selectableItem.isSelected() ? "" : void 0,
		"data-highlighted": isHighlighted() ? "" : void 0
	}));
	const context = {
		isSelected: selectableItem.isSelected,
		dataset,
		generateId: createGenerateId(() => others.id),
		registerLabelId: createRegisterId(setLabelId),
		registerDescriptionId: createRegisterId(setDescriptionId)
	};
	return createComponent(ListboxItemContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "li",
				role: "option",
				get tabIndex() {
					return selectableItem.tabIndex();
				},
				get ["aria-disabled"]() {
					return selectableItem.isDisabled();
				},
				get ["aria-selected"]() {
					return ariaSelected();
				},
				get ["aria-label"]() {
					return ariaLabel();
				},
				get ["aria-labelledby"]() {
					return ariaLabelledBy();
				},
				get ["aria-describedby"]() {
					return ariaDescribedBy();
				},
				get ["aria-posinset"]() {
					return ariaPosInSet();
				},
				get ["aria-setsize"]() {
					return ariaSetSize();
				},
				get ["data-key"]() {
					return selectableItem.dataKey();
				},
				get onPointerDown() {
					return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
				},
				get onPointerUp() {
					return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
				},
				get onClick() {
					return composeEventHandlers([local.onClick, selectableItem.onClick]);
				},
				get onKeyDown() {
					return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
				},
				get onMouseDown() {
					return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
				},
				get onFocus() {
					return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
				},
				onPointerMove
			}, dataset, others));
		}
	});
}
function ListboxItemDescription(props) {
	const context = useListboxItemContext();
	const mergedProps = mergeDefaultProps({ id: context.generateId("description") }, props);
	createEffect(() => onCleanup(context.registerDescriptionId(mergedProps.id)));
	return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function ListboxItemIndicator(props) {
	const context = useListboxItemContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("indicator") }, props), ["forceMount"]);
	return createComponent(Show, {
		get when() {
			return local.forceMount || context.isSelected();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				"aria-hidden": "true"
			}, () => context.dataset(), others));
		}
	});
}
function ListboxItemLabel(props) {
	const context = useListboxItemContext();
	const mergedProps = mergeDefaultProps({ id: context.generateId("label") }, props);
	createEffect(() => onCleanup(context.registerLabelId(mergedProps.id)));
	return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function ListboxRoot(props) {
	let ref;
	const mergedProps = mergeDefaultProps({
		id: `listbox-${createUniqueId()}`,
		selectionMode: "single",
		virtualized: false
	}, props);
	const [local, others] = splitProps(mergedProps, [
		"ref",
		"children",
		"renderItem",
		"renderSection",
		"value",
		"defaultValue",
		"onChange",
		"options",
		"optionValue",
		"optionTextValue",
		"optionDisabled",
		"optionGroupChildren",
		"state",
		"keyboardDelegate",
		"autoFocus",
		"selectionMode",
		"shouldFocusWrap",
		"shouldUseVirtualFocus",
		"shouldSelectOnPressUp",
		"shouldFocusOnHover",
		"allowDuplicateSelectionEvents",
		"disallowEmptySelection",
		"selectionBehavior",
		"selectOnFocus",
		"disallowTypeAhead",
		"allowsTabNavigation",
		"virtualized",
		"scrollToItem",
		"scrollRef",
		"onKeyDown",
		"onMouseDown",
		"onFocusIn",
		"onFocusOut"
	]);
	const listState = createMemo(() => {
		if (local.state) return local.state;
		return createListState({
			selectedKeys: () => local.value,
			defaultSelectedKeys: () => local.defaultValue,
			onSelectionChange: local.onChange,
			allowDuplicateSelectionEvents: () => access$1(local.allowDuplicateSelectionEvents),
			disallowEmptySelection: () => access$1(local.disallowEmptySelection),
			selectionBehavior: () => access$1(local.selectionBehavior),
			selectionMode: () => access$1(local.selectionMode),
			dataSource: () => local.options ?? [],
			getKey: () => local.optionValue,
			getTextValue: () => local.optionTextValue,
			getDisabled: () => local.optionDisabled,
			getSectionChildren: () => local.optionGroupChildren
		});
	});
	const selectableList = createSelectableList({
		selectionManager: () => listState().selectionManager(),
		collection: () => listState().collection(),
		autoFocus: () => access$1(local.autoFocus),
		shouldFocusWrap: () => access$1(local.shouldFocusWrap),
		keyboardDelegate: () => local.keyboardDelegate,
		disallowEmptySelection: () => access$1(local.disallowEmptySelection),
		selectOnFocus: () => access$1(local.selectOnFocus),
		disallowTypeAhead: () => access$1(local.disallowTypeAhead),
		shouldUseVirtualFocus: () => access$1(local.shouldUseVirtualFocus),
		allowsTabNavigation: () => access$1(local.allowsTabNavigation),
		isVirtualized: () => local.virtualized,
		scrollToKey: () => local.scrollToItem
	}, () => ref, () => local.scrollRef?.());
	const context = {
		listState,
		generateId: createGenerateId(() => others.id),
		shouldUseVirtualFocus: () => mergedProps.shouldUseVirtualFocus,
		shouldSelectOnPressUp: () => mergedProps.shouldSelectOnPressUp,
		shouldFocusOnHover: () => mergedProps.shouldFocusOnHover,
		isVirtualized: () => local.virtualized
	};
	return createComponent(ListboxContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "ul",
				role: "listbox",
				get tabIndex() {
					return selectableList.tabIndex();
				},
				get ["aria-multiselectable"]() {
					return listState().selectionManager().selectionMode() === "multiple" ? true : void 0;
				},
				get onKeyDown() {
					return composeEventHandlers([local.onKeyDown, selectableList.onKeyDown]);
				},
				get onMouseDown() {
					return composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]);
				},
				get onFocusIn() {
					return composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]);
				},
				get onFocusOut() {
					return composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]);
				}
			}, others, { get children() {
				return createComponent(Show, {
					get when() {
						return !local.virtualized;
					},
					get fallback() {
						return local.children?.(listState().collection);
					},
					get children() {
						return createComponent(Key, {
							get each() {
								return [...listState().collection()];
							},
							by: "key",
							children: (item) => createComponent(Switch, { get children() {
								return [createComponent(Match, {
									get when() {
										return item().type === "section";
									},
									get children() {
										return local.renderSection?.(item());
									}
								}), createComponent(Match, {
									get when() {
										return item().type === "item";
									},
									get children() {
										return local.renderItem?.(item());
									}
								})];
							} })
						});
					}
				});
			} }));
		}
	});
}
function ListboxSection(props) {
	return createComponent(Polymorphic, mergeProps({
		as: "li",
		role: "presentation"
	}, props));
}
var Listbox = Object.assign(ListboxRoot, {
	Item: ListboxItem,
	ItemDescription: ListboxItemDescription,
	ItemIndicator: ListboxItemIndicator,
	ItemLabel: ListboxItemLabel,
	Section: ListboxSection
});
var _tmpl$$9 = [
	"<svg",
	" display=\"block\" viewBox=\"0 0 30 30\" style=\"transform:scale(1.02)\"><g",
	"><path fill=\"none\" d=\"M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z\"></path><path stroke=\"none\" d=\"M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z\"></path></g></svg>"
];
var PopperContext = createContext();
function usePopperContext() {
	const context = useContext(PopperContext);
	if (context === void 0) throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
	return context;
}
var DEFAULT_SIZE = 30;
var HALF_DEFAULT_SIZE = DEFAULT_SIZE / 2;
var ROTATION_DEG = {
	top: 180,
	right: -90,
	bottom: 0,
	left: 90
};
function PopperArrow(props) {
	const context = usePopperContext();
	const [local, others] = splitProps(mergeDefaultProps({ size: DEFAULT_SIZE }, props), [
		"ref",
		"style",
		"size"
	]);
	const dir = () => context.currentPlacement().split("-")[0];
	const contentStyle = createComputedStyle(context.contentRef);
	const fill = () => contentStyle()?.getPropertyValue("background-color") || "none";
	const stroke = () => contentStyle()?.getPropertyValue(`border-${dir()}-color`) || "none";
	const borderWidth = () => contentStyle()?.getPropertyValue(`border-${dir()}-width`) || "0px";
	const strokeWidth = () => {
		return Number.parseInt(borderWidth()) * 2 * (DEFAULT_SIZE / local.size);
	};
	const rotate = () => {
		return `rotate(${ROTATION_DEG[dir()]} ${HALF_DEFAULT_SIZE} ${HALF_DEFAULT_SIZE}) translate(0 2)`;
	};
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		"aria-hidden": "true",
		get style() {
			return combineStyle({
				position: "absolute",
				"font-size": `${local.size}px`,
				width: "1em",
				height: "1em",
				"pointer-events": "none",
				fill: fill(),
				stroke: stroke(),
				"stroke-width": strokeWidth()
			}, local.style);
		}
	}, others, { get children() {
		return ssr(_tmpl$$9, ssrHydrationKey(), ssrAttribute("transform", escape(rotate(), true), false));
	} }));
}
function createComputedStyle(element) {
	const [style, setStyle] = createSignal();
	createEffect(() => {
		const el = element();
		el && setStyle(getWindow(el).getComputedStyle(el));
	});
	return style;
}
function PopperPositioner(props) {
	usePopperContext();
	const [local, others] = splitProps(props, ["ref", "style"]);
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		"data-popper-positioner": "",
		get style() {
			return combineStyle({
				position: "absolute",
				top: 0,
				left: 0,
				"min-width": "max-content"
			}, local.style);
		}
	}, others));
}
function createDOMRect(anchorRect) {
	const { x = 0, y = 0, width = 0, height = 0 } = anchorRect ?? {};
	if (typeof DOMRect === "function") return new DOMRect(x, y, width, height);
	const rect = {
		x,
		y,
		width,
		height,
		top: y,
		right: x + width,
		bottom: y + height,
		left: x
	};
	return {
		...rect,
		toJSON: () => rect
	};
}
function getAnchorElement(anchor, getAnchorRect) {
	return {
		contextElement: anchor,
		getBoundingClientRect: () => {
			const anchorRect = getAnchorRect(anchor);
			if (anchorRect) return createDOMRect(anchorRect);
			if (anchor) return anchor.getBoundingClientRect();
			return createDOMRect();
		}
	};
}
function isValidPlacement(flip2) {
	return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip2);
}
var REVERSE_BASE_PLACEMENT = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
function getTransformOrigin(placement, readingDirection) {
	const [basePlacement, alignment] = placement.split("-");
	const reversePlacement = REVERSE_BASE_PLACEMENT[basePlacement];
	if (!alignment) return `${reversePlacement} center`;
	if (basePlacement === "left" || basePlacement === "right") return `${reversePlacement} ${alignment === "start" ? "top" : "bottom"}`;
	if (alignment === "start") return `${reversePlacement} ${readingDirection === "rtl" ? "right" : "left"}`;
	return `${reversePlacement} ${readingDirection === "rtl" ? "left" : "right"}`;
}
function PopperRoot(props) {
	const mergedProps = mergeDefaultProps({
		getAnchorRect: (anchor) => anchor?.getBoundingClientRect(),
		placement: "bottom",
		gutter: 0,
		shift: 0,
		flip: true,
		slide: true,
		overlap: false,
		sameWidth: false,
		fitViewport: false,
		hideWhenDetached: false,
		detachedPadding: 0,
		arrowPadding: 4,
		overflowPadding: 8
	}, props);
	const [positionerRef, setPositionerRef] = createSignal();
	const [arrowRef, setArrowRef] = createSignal();
	const [currentPlacement, setCurrentPlacement] = createSignal(mergedProps.placement);
	const anchorRef = () => getAnchorElement(mergedProps.anchorRef?.(), mergedProps.getAnchorRect);
	const { direction } = useLocale();
	async function updatePosition() {
		const referenceEl = anchorRef();
		const floatingEl = positionerRef();
		const arrowEl = arrowRef();
		if (!referenceEl || !floatingEl) return;
		const arrowOffset = (arrowEl?.clientHeight || 0) / 2;
		const finalGutter = typeof mergedProps.gutter === "number" ? mergedProps.gutter + arrowOffset : mergedProps.gutter ?? arrowOffset;
		floatingEl.style.setProperty("--kb-popper-content-overflow-padding", `${mergedProps.overflowPadding}px`);
		referenceEl.getBoundingClientRect();
		const middleware = [offset(({ placement }) => {
			const hasAlignment = !!placement.split("-")[1];
			return {
				mainAxis: finalGutter,
				crossAxis: !hasAlignment ? mergedProps.shift : void 0,
				alignmentAxis: mergedProps.shift
			};
		})];
		if (mergedProps.flip !== false) {
			const fallbackPlacements = typeof mergedProps.flip === "string" ? mergedProps.flip.split(" ") : void 0;
			if (fallbackPlacements !== void 0 && !fallbackPlacements.every(isValidPlacement)) throw new Error("`flip` expects a spaced-delimited list of placements");
			middleware.push(flip({
				padding: mergedProps.overflowPadding,
				fallbackPlacements
			}));
		}
		if (mergedProps.slide || mergedProps.overlap) middleware.push(shift({
			mainAxis: mergedProps.slide,
			crossAxis: mergedProps.overlap,
			padding: mergedProps.overflowPadding
		}));
		middleware.push(size({
			padding: mergedProps.overflowPadding,
			apply({ availableWidth, availableHeight, rects }) {
				const referenceWidth = Math.round(rects.reference.width);
				availableWidth = Math.floor(availableWidth);
				availableHeight = Math.floor(availableHeight);
				floatingEl.style.setProperty("--kb-popper-anchor-width", `${referenceWidth}px`);
				floatingEl.style.setProperty("--kb-popper-content-available-width", `${availableWidth}px`);
				floatingEl.style.setProperty("--kb-popper-content-available-height", `${availableHeight}px`);
				if (mergedProps.sameWidth) floatingEl.style.width = `${referenceWidth}px`;
				if (mergedProps.fitViewport) {
					floatingEl.style.maxWidth = `${availableWidth}px`;
					floatingEl.style.maxHeight = `${availableHeight}px`;
				}
			}
		}));
		if (mergedProps.hideWhenDetached) middleware.push(hide({ padding: mergedProps.detachedPadding }));
		if (arrowEl) middleware.push(arrow({
			element: arrowEl,
			padding: mergedProps.arrowPadding
		}));
		const pos = await computePosition(referenceEl, floatingEl, {
			placement: mergedProps.placement,
			strategy: "absolute",
			middleware,
			platform: {
				...platform,
				isRTL: () => direction() === "rtl"
			}
		});
		setCurrentPlacement(pos.placement);
		mergedProps.onCurrentPlacementChange?.(pos.placement);
		if (!floatingEl) return;
		floatingEl.style.setProperty("--kb-popper-content-transform-origin", getTransformOrigin(pos.placement, direction()));
		const x = Math.round(pos.x);
		const y = Math.round(pos.y);
		let visibility;
		if (mergedProps.hideWhenDetached) visibility = pos.middlewareData.hide?.referenceHidden ? "hidden" : "visible";
		Object.assign(floatingEl.style, {
			top: "0",
			left: "0",
			transform: `translate3d(${x}px, ${y}px, 0)`,
			visibility
		});
		if (arrowEl && pos.middlewareData.arrow) {
			const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
			const dir = pos.placement.split("-")[0];
			Object.assign(arrowEl.style, {
				left: arrowX != null ? `${arrowX}px` : "",
				top: arrowY != null ? `${arrowY}px` : "",
				[dir]: "100%"
			});
		}
	}
	createEffect(() => {
		const referenceEl = anchorRef();
		const floatingEl = positionerRef();
		if (!referenceEl || !floatingEl) return;
		onCleanup(autoUpdate(referenceEl, floatingEl, updatePosition, { elementResize: typeof ResizeObserver === "function" }));
	});
	createEffect(() => {
		const positioner = positionerRef();
		const content = mergedProps.contentRef?.();
		if (!positioner || !content) return;
		queueMicrotask(() => {
			positioner.style.zIndex = getComputedStyle(content).zIndex;
		});
	});
	const context = {
		currentPlacement,
		contentRef: () => mergedProps.contentRef?.(),
		setPositionerRef,
		setArrowRef
	};
	return createComponent(PopperContext.Provider, {
		value: context,
		get children() {
			return mergedProps.children;
		}
	});
}
var Popper = Object.assign(PopperRoot, {
	Arrow: PopperArrow,
	Context: PopperContext,
	usePopperContext,
	Positioner: PopperPositioner
});
var DATA_TOP_LAYER_ATTR = "data-kb-top-layer";
var originalBodyPointerEvents;
var hasDisabledBodyPointerEvents = false;
var layers = [];
function indexOf(node) {
	return layers.findIndex((layer) => layer.node === node);
}
function find(node) {
	return layers[indexOf(node)];
}
function isTopMostLayer(node) {
	return layers.length > 0 && layers[layers.length - 1].node === node;
}
function getPointerBlockingLayers() {
	return layers.filter((layer) => layer.isPointerBlocking);
}
function getTopMostPointerBlockingLayer() {
	return [...getPointerBlockingLayers()].slice(-1)[0];
}
function hasPointerBlockingLayer() {
	return getPointerBlockingLayers().length > 0;
}
function isBelowPointerBlockingLayer(node) {
	const highestBlockingIndex = indexOf(getTopMostPointerBlockingLayer()?.node);
	return indexOf(node) < highestBlockingIndex;
}
function addLayer(layer) {
	layers.push(layer);
}
function removeLayer(node) {
	const index = indexOf(node);
	if (index < 0) return;
	layers.splice(index, 1);
}
function assignPointerEventToLayers() {
	for (const { node } of layers) node.style.pointerEvents = isBelowPointerBlockingLayer(node) ? "none" : "auto";
}
function disableBodyPointerEvents(node) {
	if (hasPointerBlockingLayer() && !hasDisabledBodyPointerEvents) {
		const ownerDocument = getDocument(node);
		originalBodyPointerEvents = document.body.style.pointerEvents;
		ownerDocument.body.style.pointerEvents = "none";
		hasDisabledBodyPointerEvents = true;
	}
}
function restoreBodyPointerEvents(node) {
	if (hasPointerBlockingLayer()) return;
	const ownerDocument = getDocument(node);
	ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
	if (ownerDocument.body.style.length === 0) ownerDocument.body.removeAttribute("style");
	hasDisabledBodyPointerEvents = false;
}
var layerStack = {
	layers,
	isTopMostLayer,
	hasPointerBlockingLayer,
	isBelowPointerBlockingLayer,
	addLayer,
	removeLayer,
	indexOf,
	find,
	assignPointerEventToLayers,
	disableBodyPointerEvents,
	restoreBodyPointerEvents
};
function createFocusScope(props, ref) {
	const [isPaused, setIsPaused] = createSignal(false);
	createEffect(() => {});
	createEffect(() => {});
	createEffect(() => {});
}
var DATA_LIVE_ANNOUNCER_ATTR = "data-live-announcer";
function createHideOutside(props) {
	createEffect(() => {
		if (access$1(props.isDisabled)) return;
		onCleanup(ariaHideOutside(access$1(props.targets), access$1(props.root)));
	});
}
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
	const visibleNodes = new Set(targets);
	const hiddenNodes = /* @__PURE__ */ new Set();
	const walk = (root2) => {
		for (const element of root2.querySelectorAll(`[${DATA_LIVE_ANNOUNCER_ATTR}], [${DATA_TOP_LAYER_ATTR}]`)) visibleNodes.add(element);
		const acceptNode = (node) => {
			if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (const target of visibleNodes) if (node.contains(target)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		};
		const walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, { acceptNode });
		const acceptRoot = acceptNode(root2);
		if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root2);
		if (acceptRoot !== NodeFilter.FILTER_REJECT) {
			let node = walker.nextNode();
			while (node != null) {
				hide(node);
				node = walker.nextNode();
			}
		}
	};
	const hide = (node) => {
		const refCount = refCountMap.get(node) ?? 0;
		if (node.getAttribute("aria-hidden") === "true" && refCount === 0) return;
		if (refCount === 0) setTimeout(() => requestAnimationFrame(() => node.setAttribute("aria-hidden", "true")));
		hiddenNodes.add(node);
		refCountMap.set(node, refCount + 1);
	};
	if (observerStack.length) observerStack[observerStack.length - 1].disconnect();
	walk(root);
	const observer = new MutationObserver((changes) => {
		for (const change of changes) {
			if (change.type !== "childList" || change.addedNodes.length === 0) continue;
			if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
				for (const node of change.removedNodes) if (node instanceof Element) {
					visibleNodes.delete(node);
					hiddenNodes.delete(node);
				}
				for (const node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) visibleNodes.add(node);
				else if (node instanceof Element) walk(node);
			}
		}
	});
	observer.observe(root, {
		childList: true,
		subtree: true
	});
	const observerWrapper = {
		observe() {
			observer.observe(root, {
				childList: true,
				subtree: true
			});
		},
		disconnect() {
			observer.disconnect();
		}
	};
	observerStack.push(observerWrapper);
	return () => {
		observer.disconnect();
		for (const node of hiddenNodes) {
			const count = refCountMap.get(node);
			if (count == null) return;
			if (count === 1) setTimeout(() => requestAnimationFrame(() => {
				const currentCount = refCountMap.get(node);
				if (currentCount === 1) {
					node.removeAttribute("aria-hidden");
					refCountMap.delete(node);
				} else if (currentCount != null && currentCount > 1) refCountMap.set(node, currentCount - 1);
			}));
			else refCountMap.set(node, count - 1);
		}
		if (observerWrapper === observerStack[observerStack.length - 1]) {
			observerStack.pop();
			if (observerStack.length) observerStack[observerStack.length - 1].observe();
		} else observerStack.splice(observerStack.indexOf(observerWrapper), 1);
	};
}
function createEscapeKeyDown(props) {
	createEffect(() => {});
}
function createInteractOutside(props, ref) {
	createEffect(() => {});
}
var DismissableLayerContext = createContext();
function useOptionalDismissableLayerContext() {
	return useContext(DismissableLayerContext);
}
function DismissableLayer(props) {
	let ref;
	const parentContext = useOptionalDismissableLayerContext();
	const [local, others] = splitProps(props, [
		"ref",
		"disableOutsidePointerEvents",
		"excludedElements",
		"onEscapeKeyDown",
		"onPointerDownOutside",
		"onFocusOutside",
		"onInteractOutside",
		"onDismiss",
		"bypassTopMostLayerCheck"
	]);
	const nestedLayers = /* @__PURE__ */ new Set([]);
	const registerNestedLayer = (element) => {
		nestedLayers.add(element);
		const parentUnregister = parentContext?.registerNestedLayer(element);
		return () => {
			nestedLayers.delete(element);
			parentUnregister?.();
		};
	};
	const shouldExcludeElement = (element) => {
		return false;
	};
	const onPointerDownOutside = (e) => {};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		local.onInteractOutside?.(e);
		if (!e.defaultPrevented) local.onDismiss?.();
	};
	createInteractOutside({
		shouldExcludeElement,
		onPointerDownOutside,
		onFocusOutside
	}, () => ref);
	createEscapeKeyDown({
		ownerDocument: () => getDocument(ref),
		onEscapeKeyDown: (e) => {}
	});
	onMount(() => {});
	createEffect(on([() => ref, () => local.disableOutsidePointerEvents], ([ref2, disableOutsidePointerEvents]) => {
		if (!ref2) return;
		const layer = layerStack.find(ref2);
		if (layer && layer.isPointerBlocking !== disableOutsidePointerEvents) {
			layer.isPointerBlocking = disableOutsidePointerEvents;
			layerStack.assignPointerEventToLayers();
		}
		if (disableOutsidePointerEvents) layerStack.disableBodyPointerEvents(ref2);
		onCleanup(() => {
			layerStack.restoreBodyPointerEvents(ref2);
		});
	}, { defer: true }));
	const context = { registerNestedLayer };
	return createComponent(DismissableLayerContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({ as: "div" }, others));
		}
	});
}
function createDisclosureState(props = {}) {
	const [isOpen, setIsOpen] = createControllableBooleanSignal({
		value: () => access$1(props.open),
		defaultValue: () => !!access$1(props.defaultOpen),
		onChange: (value) => props.onOpenChange?.(value)
	});
	const open = () => {
		setIsOpen(true);
	};
	const close = () => {
		setIsOpen(false);
	};
	const toggle = () => {
		isOpen() ? close() : open();
	};
	return {
		isOpen,
		setIsOpen,
		open,
		close,
		toggle
	};
}
var FORM_CONTROL_FIELD_PROP_NAMES = [
	"id",
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
];
function createFormControlField(props) {
	const context = useFormControlContext();
	const mergedProps = mergeDefaultProps({ id: context.generateId("field") }, props);
	createRenderEffect(() => onCleanup(context.registerField(access$1(mergedProps.id))));
	return { fieldProps: {
		id: () => access$1(mergedProps.id),
		ariaLabel: () => access$1(mergedProps["aria-label"]),
		ariaLabelledBy: () => context.getAriaLabelledBy(access$1(mergedProps.id), access$1(mergedProps["aria-label"]), access$1(mergedProps["aria-labelledby"])),
		ariaDescribedBy: () => context.getAriaDescribedBy(access$1(mergedProps["aria-describedby"]))
	} };
}
function FormControlLabel(props) {
	let ref;
	const context = useFormControlContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["ref"]);
	const tagName = createTagName(() => ref, () => "label");
	createEffect(() => onCleanup(context.registerLabel(others.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "label",
		get ["for"]() {
			return memo(() => tagName() === "label")() ? context.fieldId() : void 0;
		}
	}, () => context.dataset(), others));
}
function createFormResetListener(element, handler) {
	createEffect(on(element, (element2) => {
		if (element2 == null) return;
		const form = getClosestForm(element2);
		if (form == null) return;
		form.addEventListener("reset", handler, { passive: true });
		onCleanup(() => {
			form.removeEventListener("reset", handler);
		});
	}));
}
function getClosestForm(element) {
	return isFormElement(element) ? element.form : element.closest("form");
}
function isFormElement(element) {
	return element.matches("textarea, input, select, button");
}
function FormControlErrorMessage(props) {
	const context = useFormControlContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("error-message") }, props), ["forceMount"]);
	const isInvalid = () => context.validationState() === "invalid";
	createEffect(() => {
		if (!isInvalid()) return;
		onCleanup(context.registerErrorMessage(others.id));
	});
	return createComponent(Show, {
		get when() {
			return local.forceMount || isInvalid();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), others));
		}
	});
}
var access = (v) => typeof v === "function" ? v() : v;
var contains = (wrapper, target) => {
	if (wrapper.contains(target)) return true;
	let currentElement = target;
	while (currentElement) {
		if (currentElement === wrapper) return true;
		currentElement = currentElement._$host ?? currentElement.parentElement;
	}
	return false;
};
var activeStyles = /* @__PURE__ */ new Map();
var createStyle = (props) => {
	createEffect(() => {
		const style = access(props.style) ?? {};
		const properties = access(props.properties) ?? [];
		const originalStyles = {};
		for (const key in style) originalStyles[key] = props.element.style[key];
		const activeStyle = activeStyles.get(props.key);
		if (activeStyle) activeStyle.activeCount++;
		else activeStyles.set(props.key, {
			activeCount: 1,
			originalStyles,
			properties: properties.map((property) => property.key)
		});
		Object.assign(props.element.style, props.style);
		for (const property of properties) props.element.style.setProperty(property.key, property.value);
		onCleanup(() => {
			const activeStyle2 = activeStyles.get(props.key);
			if (!activeStyle2) return;
			if (activeStyle2.activeCount !== 1) {
				activeStyle2.activeCount--;
				return;
			}
			activeStyles.delete(props.key);
			for (const [key, value] of Object.entries(activeStyle2.originalStyles)) props.element.style[key] = value;
			for (const property of activeStyle2.properties) props.element.style.removeProperty(property);
			if (props.element.style.length === 0) props.element.removeAttribute("style");
			props.cleanup?.();
		});
	});
};
var style_default = createStyle;
var getScrollDimensions = (element, axis) => {
	switch (axis) {
		case "x": return [
			element.clientWidth,
			element.scrollLeft,
			element.scrollWidth
		];
		case "y": return [
			element.clientHeight,
			element.scrollTop,
			element.scrollHeight
		];
	}
};
var isScrollContainer = (element, axis) => {
	const styles = getComputedStyle(element);
	const overflow = axis === "x" ? styles.overflowX : styles.overflowY;
	return overflow === "auto" || overflow === "scroll" || element.tagName === "HTML" && overflow === "visible";
};
var getScrollAtLocation = (location, axis, stopAt) => {
	const directionFactor = axis === "x" && window.getComputedStyle(location).direction === "rtl" ? -1 : 1;
	let currentElement = location;
	let availableScroll = 0;
	let availableScrollTop = 0;
	let wrapperReached = false;
	do {
		const [clientSize, scrollOffset, scrollSize] = getScrollDimensions(currentElement, axis);
		const scrolled = scrollSize - clientSize - directionFactor * scrollOffset;
		if ((scrollOffset !== 0 || scrolled !== 0) && isScrollContainer(currentElement, axis)) {
			availableScroll += scrolled;
			availableScrollTop += scrollOffset;
		}
		if (currentElement === (stopAt ?? document.documentElement)) wrapperReached = true;
		else currentElement = currentElement._$host ?? currentElement.parentElement;
	} while (currentElement && !wrapperReached);
	return [availableScroll, availableScrollTop];
};
var [preventScrollStack, setPreventScrollStack] = createSignal([]);
var isActive = (id) => preventScrollStack().indexOf(id) === preventScrollStack().length - 1;
var createPreventScroll = (props) => {
	const defaultedProps = mergeProps({
		element: null,
		enabled: true,
		hideScrollbar: true,
		preventScrollbarShift: true,
		preventScrollbarShiftMode: "padding",
		restoreScrollPosition: true,
		allowPinchZoom: false
	}, props);
	const preventScrollId = createUniqueId();
	let currentTouchStart = [0, 0];
	let currentTouchStartAxis = null;
	let currentTouchStartDelta = null;
	createEffect(() => {
		if (!access(defaultedProps.enabled)) return;
		setPreventScrollStack((stack) => [...stack, preventScrollId]);
		onCleanup(() => {
			setPreventScrollStack((stack) => stack.filter((id) => id !== preventScrollId));
		});
	});
	createEffect(() => {
		if (!access(defaultedProps.enabled) || !access(defaultedProps.hideScrollbar)) return;
		const { documentElement } = document;
		const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
		if (access(defaultedProps.preventScrollbarShift)) {
			const style = { overflow: "hidden" };
			const properties = [];
			if (scrollbarWidth > 0) {
				if (access(defaultedProps.preventScrollbarShiftMode) === "padding") style.paddingRight = `calc(${window.getComputedStyle(documentElement).paddingRight} + ${scrollbarWidth}px)`;
				else style.marginRight = `calc(${window.getComputedStyle(documentElement).marginRight} + ${scrollbarWidth}px)`;
				properties.push({
					key: "--scrollbar-width",
					value: `${scrollbarWidth}px`
				});
			}
			const offsetTop = window.scrollY;
			const offsetLeft = window.scrollX;
			style_default({
				key: "prevent-scroll",
				element: documentElement,
				style,
				properties,
				cleanup: () => {
					if (access(defaultedProps.restoreScrollPosition) && scrollbarWidth > 0) window.scrollTo(offsetLeft, offsetTop);
				}
			});
		} else style_default({
			key: "prevent-scroll",
			element: documentElement,
			style: { overflow: "hidden" }
		});
	});
	createEffect(() => {
		if (!isActive(preventScrollId) || !access(defaultedProps.enabled)) return;
		document.addEventListener("wheel", maybePreventWheel, { passive: false });
		document.addEventListener("touchstart", logTouchStart, { passive: false });
		document.addEventListener("touchmove", maybePreventTouch, { passive: false });
		onCleanup(() => {
			document.removeEventListener("wheel", maybePreventWheel);
			document.removeEventListener("touchstart", logTouchStart);
			document.removeEventListener("touchmove", maybePreventTouch);
		});
	});
	const logTouchStart = (event) => {
		currentTouchStart = getTouchXY(event);
		currentTouchStartAxis = null;
		currentTouchStartDelta = null;
	};
	const maybePreventWheel = (event) => {
		const target = event.target;
		const wrapper = access(defaultedProps.element);
		const delta = getDeltaXY(event);
		const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
		const resultsInScroll = wouldScroll(target, axis, axis === "x" ? delta[0] : delta[1], wrapper);
		let shouldCancel;
		if (wrapper && contains(wrapper, target)) shouldCancel = !resultsInScroll;
		else shouldCancel = true;
		if (shouldCancel && event.cancelable) event.preventDefault();
	};
	const maybePreventTouch = (event) => {
		const wrapper = access(defaultedProps.element);
		const target = event.target;
		let shouldCancel;
		if (event.touches.length === 2) shouldCancel = !access(defaultedProps.allowPinchZoom);
		else {
			if (currentTouchStartAxis == null || currentTouchStartDelta === null) {
				const delta = getTouchXY(event).map((touch, i) => currentTouchStart[i] - touch);
				const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
				currentTouchStartAxis = axis;
				currentTouchStartDelta = axis === "x" ? delta[0] : delta[1];
			}
			if (target.type === "range") shouldCancel = false;
			else {
				const wouldResultInScroll = wouldScroll(target, currentTouchStartAxis, currentTouchStartDelta, wrapper);
				if (wrapper && contains(wrapper, target)) shouldCancel = !wouldResultInScroll;
				else shouldCancel = true;
			}
		}
		if (shouldCancel && event.cancelable) event.preventDefault();
	};
};
var getDeltaXY = (event) => [event.deltaX, event.deltaY];
var getTouchXY = (event) => event.changedTouches[0] ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
var wouldScroll = (target, axis, delta, wrapper) => {
	const [availableScroll, availableScrollTop] = getScrollAtLocation(target, axis, wrapper !== null && contains(wrapper, target) ? wrapper : void 0);
	if (delta > 0 && Math.abs(availableScroll) <= 1) return false;
	if (delta < 0 && Math.abs(availableScrollTop) < 1) return false;
	return true;
};
var index_default$1 = createPreventScroll;
var createPresence = (props) => {
	const refStyles = createMemo(() => {
		const element = access(props.element);
		if (!element) return;
		return getComputedStyle(element);
	});
	const getAnimationName = () => {
		return refStyles()?.animationName ?? "none";
	};
	const [presentState, setPresentStateInternal] = createSignal(access(props.show) ? "present" : "hidden");
	const setPresentState = (state) => {
		setPresentStateInternal(state);
		props.onStateChange?.(state);
	};
	let animationName = "none";
	createEffect((prevShow) => {
		const show = access(props.show);
		untrack(() => {
			if (prevShow === show) return show;
			const prevAnimationName = animationName;
			const currentAnimationName = getAnimationName();
			if (show) setPresentState("present");
			else if (currentAnimationName === "none" || refStyles()?.display === "none") setPresentState("hidden");
			else if (prevShow === true && prevAnimationName !== currentAnimationName) setPresentState("hiding");
			else setPresentState("hidden");
		});
		return show;
	}, access(props.show));
	createEffect(() => {
		const element = access(props.element);
		if (!element) return;
		const handleAnimationStart = (event) => {
			if (event.target === element) animationName = getAnimationName();
		};
		const handleAnimationEnd = (event) => {
			const isCurrentAnimation = getAnimationName().includes(event.animationName);
			if (event.target === element && isCurrentAnimation && presentState() === "hiding") setPresentState("hidden");
		};
		element.addEventListener("animationstart", handleAnimationStart);
		element.addEventListener("animationcancel", handleAnimationEnd);
		element.addEventListener("animationend", handleAnimationEnd);
		onCleanup(() => {
			element.removeEventListener("animationstart", handleAnimationStart);
			element.removeEventListener("animationcancel", handleAnimationEnd);
			element.removeEventListener("animationend", handleAnimationEnd);
		});
	});
	return {
		present: () => presentState() === "present" || presentState() === "hiding",
		state: presentState
	};
};
var index_default = createPresence;
__export({}, {
	Arrow: () => PopperArrow,
	Content: () => SelectContent$1,
	Description: () => FormControlDescription,
	ErrorMessage: () => FormControlErrorMessage,
	HiddenSelect: () => SelectHiddenSelect$1,
	Icon: () => SelectIcon,
	Item: () => ListboxItem,
	ItemDescription: () => ListboxItemDescription,
	ItemIndicator: () => ListboxItemIndicator,
	ItemLabel: () => ListboxItemLabel,
	Label: () => SelectLabel,
	Listbox: () => SelectListbox,
	Portal: () => SelectPortal,
	Root: () => SelectRoot,
	Section: () => ListboxSection,
	Select: () => Select$1,
	Trigger: () => SelectTrigger$1,
	Value: () => SelectValue$1,
	useSelectContext: () => useSelectContext
});
var SelectContext = createContext();
function useSelectContext() {
	const context = useContext(SelectContext);
	if (context === void 0) throw new Error("[kobalte]: `useSelectContext` must be used within a `Select` component");
	return context;
}
function SelectContent$1(props) {
	let ref;
	const context = useSelectContext();
	const [local, others] = splitProps(props, [
		"ref",
		"style",
		"onCloseAutoFocus",
		"onFocusOutside"
	]);
	const onEscapeKeyDown = (e) => {
		context.close();
	};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		if (context.isOpen() && context.isModal()) e.preventDefault();
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
		onMountAutoFocus: (e) => {
			e.preventDefault();
		},
		onUnmountAutoFocus: (e) => {
			local.onCloseAutoFocus?.(e);
			if (!e.defaultPrevented) {
				focusWithoutScrolling(context.triggerRef());
				e.preventDefault();
			}
		}
	}, () => ref);
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Popper.Positioner, { get children() {
				return createComponent(DismissableLayer, mergeProps({
					get disableOutsidePointerEvents() {
						return memo(() => !!context.isModal())() && context.isOpen();
					},
					get excludedElements() {
						return [context.triggerRef];
					},
					get style() {
						return combineStyle({
							"--kb-select-content-transform-origin": "var(--kb-popper-content-transform-origin)",
							position: "relative"
						}, local.style);
					},
					onEscapeKeyDown,
					onFocusOutside,
					get onDismiss() {
						return context.close;
					}
				}, () => context.dataset(), others));
			} });
		}
	});
}
function SelectHiddenSelect$1(props) {
	const context = useSelectContext();
	return createComponent(HiddenSelectBase, mergeProps({
		get collection() {
			return context.listState().collection();
		},
		get selectionManager() {
			return context.listState().selectionManager();
		},
		get isOpen() {
			return context.isOpen();
		},
		get isMultiple() {
			return context.isMultiple();
		},
		get isVirtualized() {
			return context.isVirtualized();
		},
		focusTrigger: () => context.triggerRef()?.focus()
	}, props));
}
function SelectIcon(props) {
	const context = useSelectContext();
	return createComponent(Polymorphic, mergeProps({
		as: "span",
		"aria-hidden": "true"
	}, () => context.dataset(), mergeDefaultProps({ children: "▼" }, props)));
}
function SelectLabel(props) {
	const context = useSelectContext();
	const [local, others] = splitProps(props, ["onClick"]);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		if (!context.isDisabled()) context.triggerRef()?.focus();
	};
	return createComponent(FormControlLabel, mergeProps({
		as: "span",
		onClick
	}, others));
}
function SelectListbox(props) {
	const context = useSelectContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("listbox") }, props), [
		"ref",
		"id",
		"onKeyDown"
	]);
	createEffect(() => onCleanup(context.registerListboxId(local.id)));
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.key === "Escape") e.preventDefault();
	};
	return createComponent(ListboxRoot, mergeProps({
		get id() {
			return local.id;
		},
		get state() {
			return context.listState();
		},
		get virtualized() {
			return context.isVirtualized();
		},
		get autoFocus() {
			return context.autoFocus();
		},
		shouldSelectOnPressUp: true,
		shouldFocusOnHover: true,
		get shouldFocusWrap() {
			return context.shouldFocusWrap();
		},
		get disallowTypeAhead() {
			return context.disallowTypeAhead();
		},
		get ["aria-labelledby"]() {
			return context.listboxAriaLabelledBy();
		},
		get renderItem() {
			return context.renderItem;
		},
		get renderSection() {
			return context.renderSection;
		},
		onKeyDown
	}, others));
}
function SelectPortal(props) {
	const context = useSelectContext();
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(Portal, props);
		}
	});
}
function SelectBase(props) {
	const [local, popperProps, formControlProps, others] = splitProps(mergeDefaultProps({
		id: `select-${createUniqueId()}`,
		selectionMode: "single",
		disallowEmptySelection: false,
		closeOnSelection: props.selectionMode === "single",
		allowDuplicateSelectionEvents: true,
		gutter: 8,
		sameWidth: true,
		modal: false
	}, props), [
		"itemComponent",
		"sectionComponent",
		"open",
		"defaultOpen",
		"onOpenChange",
		"value",
		"defaultValue",
		"onChange",
		"placeholder",
		"options",
		"optionValue",
		"optionTextValue",
		"optionDisabled",
		"optionGroupChildren",
		"keyboardDelegate",
		"allowDuplicateSelectionEvents",
		"disallowEmptySelection",
		"closeOnSelection",
		"disallowTypeAhead",
		"shouldFocusWrap",
		"selectionBehavior",
		"selectionMode",
		"virtualized",
		"modal",
		"preventScroll",
		"forceMount"
	], [
		"getAnchorRect",
		"placement",
		"gutter",
		"shift",
		"flip",
		"slide",
		"overlap",
		"sameWidth",
		"fitViewport",
		"hideWhenDetached",
		"detachedPadding",
		"arrowPadding",
		"overflowPadding"
	], FORM_CONTROL_PROP_NAMES);
	const [triggerId, setTriggerId] = createSignal();
	const [valueId, setValueId] = createSignal();
	const [listboxId, setListboxId] = createSignal();
	const [triggerRef, setTriggerRef] = createSignal();
	const [contentRef, setContentRef] = createSignal();
	const [listboxRef, setListboxRef] = createSignal();
	const [listboxAriaLabelledBy, setListboxAriaLabelledBy] = createSignal();
	const [focusStrategy, setFocusStrategy] = createSignal(true);
	const getOptionValue = (option) => {
		const optionValue = local.optionValue;
		if (optionValue == null) return String(option);
		return String(isFunction(optionValue) ? optionValue(option) : option[optionValue]);
	};
	const flattenOptions = createMemo(() => {
		const optionGroupChildren = local.optionGroupChildren;
		if (optionGroupChildren == null) return local.options;
		return local.options.flatMap((item) => item[optionGroupChildren] ?? item);
	});
	const flattenOptionKeys = createMemo(() => {
		return flattenOptions().map((option) => getOptionValue(option));
	});
	const getOptionsFromValues = (values) => {
		return [...values].map((value) => flattenOptions().find((option) => getOptionValue(option) === value)).filter((option) => option != null);
	};
	const disclosureState = createDisclosureState({
		open: () => local.open,
		defaultOpen: () => local.defaultOpen,
		onOpenChange: (isOpen) => local.onOpenChange?.(isOpen)
	});
	const listState = createListState({
		selectedKeys: () => {
			if (local.value != null) return local.value.map(getOptionValue);
			return local.value;
		},
		defaultSelectedKeys: () => {
			if (local.defaultValue != null) return local.defaultValue.map(getOptionValue);
			return local.defaultValue;
		},
		onSelectionChange: (selectedKeys) => {
			local.onChange?.(getOptionsFromValues(selectedKeys));
			if (local.closeOnSelection) close();
		},
		allowDuplicateSelectionEvents: () => access$1(local.allowDuplicateSelectionEvents),
		disallowEmptySelection: () => access$1(local.disallowEmptySelection),
		selectionBehavior: () => access$1(local.selectionBehavior),
		selectionMode: () => local.selectionMode,
		dataSource: () => local.options ?? [],
		getKey: () => local.optionValue,
		getTextValue: () => local.optionTextValue,
		getDisabled: () => local.optionDisabled,
		getSectionChildren: () => local.optionGroupChildren
	});
	const selectedOptions = createMemo(() => {
		return getOptionsFromValues(listState.selectionManager().selectedKeys());
	});
	const removeOptionFromSelection = (option) => {
		listState.selectionManager().toggleSelection(getOptionValue(option));
	};
	const { present: contentPresent } = index_default({
		show: () => local.forceMount || disclosureState.isOpen(),
		element: () => contentRef() ?? null
	});
	const focusListbox = () => {
		const listboxEl = listboxRef();
		if (listboxEl) focusWithoutScrolling(listboxEl);
	};
	const open = (focusStrategy2) => {
		if (local.options.length <= 0) return;
		setFocusStrategy(focusStrategy2);
		disclosureState.open();
		let focusedKey = listState.selectionManager().firstSelectedKey();
		if (focusedKey == null) {
			if (focusStrategy2 === "first") focusedKey = listState.collection().getFirstKey();
			else if (focusStrategy2 === "last") focusedKey = listState.collection().getLastKey();
		}
		focusListbox();
		listState.selectionManager().setFocused(true);
		listState.selectionManager().setFocusedKey(focusedKey);
	};
	const close = () => {
		disclosureState.close();
		listState.selectionManager().setFocused(false);
		listState.selectionManager().setFocusedKey(void 0);
	};
	const toggle = (focusStrategy2) => {
		if (disclosureState.isOpen()) close();
		else open(focusStrategy2);
	};
	const { formControlContext } = createFormControl(formControlProps);
	createFormResetListener(triggerRef, () => {
		const defaultSelectedKeys = local.defaultValue ? [...local.defaultValue].map(getOptionValue) : new Selection();
		listState.selectionManager().setSelectedKeys(defaultSelectedKeys);
	});
	const collator = createCollator({
		usage: "search",
		sensitivity: "base"
	});
	const delegate = createMemo(() => {
		const keyboardDelegate = access$1(local.keyboardDelegate);
		if (keyboardDelegate) return keyboardDelegate;
		return new ListKeyboardDelegate(listState.collection, void 0, collator);
	});
	const renderItem = (item) => {
		return local.itemComponent?.({ item });
	};
	const renderSection = (section) => {
		return local.sectionComponent?.({ section });
	};
	createEffect(on([flattenOptionKeys], ([flattenOptionKeys2]) => {
		const keysToKeep = [...listState.selectionManager().selectedKeys()].filter((key) => flattenOptionKeys2.includes(key));
		listState.selectionManager().setSelectedKeys(keysToKeep);
	}, { defer: true }));
	const dataset = createMemo(() => ({
		"data-expanded": disclosureState.isOpen() ? "" : void 0,
		"data-closed": !disclosureState.isOpen() ? "" : void 0
	}));
	const context = {
		dataset,
		isOpen: disclosureState.isOpen,
		isDisabled: () => formControlContext.isDisabled() ?? false,
		isMultiple: () => access$1(local.selectionMode) === "multiple",
		isVirtualized: () => local.virtualized ?? false,
		isModal: () => local.modal ?? false,
		preventScroll: () => local.preventScroll ?? context.isModal(),
		disallowTypeAhead: () => local.disallowTypeAhead ?? false,
		shouldFocusWrap: () => local.shouldFocusWrap ?? false,
		selectedOptions,
		contentPresent,
		autoFocus: focusStrategy,
		triggerRef,
		listState: () => listState,
		keyboardDelegate: delegate,
		triggerId,
		valueId,
		listboxId,
		listboxAriaLabelledBy,
		setListboxAriaLabelledBy,
		setTriggerRef,
		setContentRef,
		setListboxRef,
		open,
		close,
		toggle,
		placeholder: () => local.placeholder,
		renderItem,
		renderSection,
		removeOptionFromSelection,
		generateId: createGenerateId(() => access$1(formControlProps.id)),
		registerTriggerId: createRegisterId(setTriggerId),
		registerValueId: createRegisterId(setValueId),
		registerListboxId: createRegisterId(setListboxId)
	};
	return createComponent(FormControlContext.Provider, {
		value: formControlContext,
		get children() {
			return createComponent(SelectContext.Provider, {
				value: context,
				get children() {
					return createComponent(Popper, mergeProps({
						anchorRef: triggerRef,
						contentRef
					}, popperProps, { get children() {
						return createComponent(Polymorphic, mergeProps({
							as: "div",
							role: "group",
							get id() {
								return access$1(formControlProps.id);
							}
						}, () => formControlContext.dataset(), dataset, others));
					} }));
				}
			});
		}
	});
}
function SelectRoot(props) {
	const [local, others] = splitProps(props, [
		"value",
		"defaultValue",
		"onChange",
		"multiple"
	]);
	const value = createMemo(() => {
		if (local.value != null) return local.multiple ? local.value : [local.value];
		return local.value;
	});
	const defaultValue = createMemo(() => {
		if (local.defaultValue != null) return local.multiple ? local.defaultValue : [local.defaultValue];
		return local.defaultValue;
	});
	const onChange = (val) => {
		if (val === value()) return;
		if (local.multiple) local.onChange?.(val ?? []);
		else local.onChange?.(val[0] ?? null);
	};
	return createComponent(SelectBase, mergeProps({
		get value() {
			return value();
		},
		get defaultValue() {
			return defaultValue();
		},
		onChange,
		get selectionMode() {
			return local.multiple ? "multiple" : "single";
		}
	}, others));
}
function SelectTrigger$1(props) {
	const formControlContext = useFormControlContext();
	const context = useSelectContext();
	const [local, formControlFieldProps, others] = splitProps(mergeDefaultProps({ id: context.generateId("trigger") }, props), [
		"ref",
		"disabled",
		"onPointerDown",
		"onClick",
		"onKeyDown",
		"onFocus",
		"onBlur"
	], FORM_CONTROL_FIELD_PROP_NAMES);
	const selectionManager = () => context.listState().selectionManager();
	const keyboardDelegate = () => context.keyboardDelegate();
	const isDisabled = () => local.disabled || context.isDisabled();
	const { fieldProps } = createFormControlField(formControlFieldProps);
	const { typeSelectHandlers } = createTypeSelect({
		keyboardDelegate,
		selectionManager,
		onTypeSelect: (key) => selectionManager().select(key)
	});
	const ariaLabelledBy = () => {
		return [context.listboxAriaLabelledBy(), context.valueId()].filter(Boolean).join(" ") || void 0;
	};
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		e.currentTarget.dataset.pointerType = e.pointerType;
		if (!isDisabled() && e.pointerType !== "touch" && e.button === 0) {
			e.preventDefault();
			context.toggle(true);
		}
	};
	const onClick = (e) => {
		callHandler(e, local.onClick);
		if (!isDisabled() && e.currentTarget.dataset.pointerType === "touch") context.toggle(true);
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (isDisabled()) return;
		callHandler(e, typeSelectHandlers.onKeyDown);
		switch (e.key) {
			case "Enter":
			case " ":
			case "ArrowDown":
				e.stopPropagation();
				e.preventDefault();
				context.toggle("first");
				break;
			case "ArrowUp":
				e.stopPropagation();
				e.preventDefault();
				context.toggle("last");
				break;
			case "ArrowLeft": {
				e.preventDefault();
				if (context.isMultiple()) return;
				const firstSelectedKey = selectionManager().firstSelectedKey();
				const key = firstSelectedKey != null ? keyboardDelegate().getKeyAbove?.(firstSelectedKey) : keyboardDelegate().getFirstKey?.();
				if (key != null) selectionManager().select(key);
				break;
			}
			case "ArrowRight": {
				e.preventDefault();
				if (context.isMultiple()) return;
				const firstSelectedKey = selectionManager().firstSelectedKey();
				const key = firstSelectedKey != null ? keyboardDelegate().getKeyBelow?.(firstSelectedKey) : keyboardDelegate().getFirstKey?.();
				if (key != null) selectionManager().select(key);
				break;
			}
		}
	};
	const onFocus = (e) => {
		callHandler(e, local.onFocus);
		if (selectionManager().isFocused()) return;
		selectionManager().setFocused(true);
	};
	const onBlur = (e) => {
		callHandler(e, local.onBlur);
		if (context.isOpen()) return;
		selectionManager().setFocused(false);
	};
	createEffect(() => onCleanup(context.registerTriggerId(fieldProps.id())));
	createEffect(() => {
		context.setListboxAriaLabelledBy([fieldProps.ariaLabelledBy(), fieldProps.ariaLabel() && !fieldProps.ariaLabelledBy() ? fieldProps.id() : null].filter(Boolean).join(" ") || void 0);
	});
	return createComponent(ButtonRoot, mergeProps({
		get id() {
			return fieldProps.id();
		},
		get disabled() {
			return isDisabled();
		},
		"aria-haspopup": "listbox",
		get ["aria-expanded"]() {
			return context.isOpen();
		},
		get ["aria-controls"]() {
			return memo(() => !!context.isOpen())() ? context.listboxId() : void 0;
		},
		get ["aria-label"]() {
			return fieldProps.ariaLabel();
		},
		get ["aria-labelledby"]() {
			return ariaLabelledBy();
		},
		get ["aria-describedby"]() {
			return fieldProps.ariaDescribedBy();
		},
		onPointerDown,
		onClick,
		onKeyDown,
		onFocus,
		onBlur
	}, () => context.dataset(), () => formControlContext.dataset(), others));
}
function SelectValue$1(props) {
	const formControlContext = useFormControlContext();
	const context = useSelectContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("value") }, props), ["id", "children"]);
	const selectionManager = () => context.listState().selectionManager();
	const isSelectionEmpty = () => {
		const selectedKeys = selectionManager().selectedKeys();
		if (selectedKeys.size === 1 && selectedKeys.has("")) return true;
		return selectionManager().isEmpty();
	};
	createEffect(() => onCleanup(context.registerValueId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "span",
		get id() {
			return local.id;
		},
		get ["data-placeholder-shown"]() {
			return isSelectionEmpty() ? "" : void 0;
		}
	}, () => formControlContext.dataset(), others, { get children() {
		return createComponent(Show, {
			get when() {
				return !isSelectionEmpty();
			},
			get fallback() {
				return context.placeholder();
			},
			get children() {
				return createComponent(SelectValueChild, {
					state: {
						selectedOption: () => context.selectedOptions()[0],
						selectedOptions: () => context.selectedOptions(),
						remove: (option) => context.removeOptionFromSelection(option),
						clear: () => selectionManager().clearSelection()
					},
					get children() {
						return local.children;
					}
				});
			}
		});
	} }));
}
function SelectValueChild(props) {
	return children(() => {
		const body = props.children;
		return isFunction(body) ? body(props.state) : body;
	})();
}
var Select$1 = Object.assign(SelectRoot, {
	Arrow: PopperArrow,
	Content: SelectContent$1,
	Description: FormControlDescription,
	ErrorMessage: FormControlErrorMessage,
	HiddenSelect: SelectHiddenSelect$1,
	Icon: SelectIcon,
	Item: ListboxItem,
	ItemDescription: ListboxItemDescription,
	ItemIndicator: ListboxItemIndicator,
	ItemLabel: ListboxItemLabel,
	Label: SelectLabel,
	Listbox: SelectListbox,
	Portal: SelectPortal,
	Section: ListboxSection,
	Trigger: SelectTrigger$1,
	Value: SelectValue$1
});
var _tmpl$$8 = ["<path", " d=\"M8 9l4 -4l4 4\"></path>"];
var _tmpl$2$6 = ["<path", " d=\"M16 15l-4 4l-4 -4\"></path>"];
var _tmpl$3$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M5 12l5 5l10 -10\"></path></svg>"];
var Select = SelectRoot;
var SelectValue = SelectValue$1;
var SelectHiddenSelect = SelectHiddenSelect$1;
var SelectTrigger = (props) => {
	const [local, others] = splitProps(props, ["class", "children"]);
	return createComponent(SelectTrigger$1, mergeProps({ get ["class"]() {
		return cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", local.class);
	} }, others, { get children() {
		return [local.children, createComponent(SelectIcon, {
			as: "svg",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"class": "size-4 opacity-50",
			get children() {
				return [ssr(_tmpl$$8, ssrHydrationKey()), ssr(_tmpl$2$6, ssrHydrationKey())];
			}
		})];
	} }));
};
var SelectContent = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(SelectPortal, { get children() {
		return createComponent(SelectContent$1, mergeProps({ get ["class"]() {
			return cn("relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80", local.class);
		} }, others, { get children() {
			return createComponent(SelectListbox, { "class": "m-0 p-1" });
		} }));
	} });
};
var SelectItem = (props) => {
	const [local, others] = splitProps(props, ["class", "children"]);
	return createComponent(ListboxItem, mergeProps({ get ["class"]() {
		return cn("relative mt-0 flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", local.class);
	} }, others, { get children() {
		return [createComponent(ListboxItemIndicator, {
			"class": "absolute right-2 flex size-3.5 items-center justify-center",
			get children() {
				return ssr(_tmpl$3$5, ssrHydrationKey());
			}
		}), createComponent(ListboxItemLabel, { get children() {
			return local.children;
		} })];
	} }));
};
cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
	variants: { variant: {
		label: "data-[invalid]:text-destructive",
		description: "font-normal text-muted-foreground",
		error: "text-xs text-destructive"
	} },
	defaultVariants: { variant: "label" }
});
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
var _tmpl$$7 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M5 12l5 5l10 -10\"></path></svg>"];
var _tmpl$2$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M5 12l14 0\"></path></svg>"];
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
								return ssr(_tmpl$$7, ssrHydrationKey());
							}
						}), createComponent(Match, {
							get when() {
								return others.indeterminate;
							},
							get children() {
								return ssr(_tmpl$2$5, ssrHydrationKey());
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
var dialog_exports = {};
__export(dialog_exports, {
	CloseButton: () => DialogCloseButton,
	Content: () => DialogContent$1,
	Description: () => DialogDescription$1,
	Dialog: () => Dialog$2,
	Overlay: () => DialogOverlay$1,
	Portal: () => DialogPortal$1,
	Root: () => DialogRoot,
	Title: () => DialogTitle$1,
	Trigger: () => DialogTrigger$1,
	useDialogContext: () => useDialogContext
});
var DialogContext = createContext();
function useDialogContext() {
	const context = useContext(DialogContext);
	if (context === void 0) throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");
	return context;
}
function DialogCloseButton(props) {
	const context = useDialogContext();
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
	}, others));
}
function DialogContent$1(props) {
	let ref;
	const context = useDialogContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("content") }, props), [
		"ref",
		"onOpenAutoFocus",
		"onCloseAutoFocus",
		"onPointerDownOutside",
		"onFocusOutside",
		"onInteractOutside"
	]);
	let hasInteractedOutside = false;
	let hasPointerDownOutside = false;
	const onPointerDownOutside = (e) => {
		local.onPointerDownOutside?.(e);
		if (context.modal() && e.detail.isContextMenu) e.preventDefault();
	};
	const onFocusOutside = (e) => {
		local.onFocusOutside?.(e);
		if (context.modal()) e.preventDefault();
	};
	const onInteractOutside = (e) => {
		local.onInteractOutside?.(e);
		if (context.modal()) return;
		if (!e.defaultPrevented) {
			hasInteractedOutside = true;
			if (e.detail.originalEvent.type === "pointerdown") hasPointerDownOutside = true;
		}
		if (contains$1(context.triggerRef(), e.target)) e.preventDefault();
		if (e.detail.originalEvent.type === "focusin" && hasPointerDownOutside) e.preventDefault();
	};
	const onCloseAutoFocus = (e) => {
		local.onCloseAutoFocus?.(e);
		if (context.modal()) {
			e.preventDefault();
			focusWithoutScrolling(context.triggerRef());
		} else {
			if (!e.defaultPrevented) {
				if (!hasInteractedOutside) focusWithoutScrolling(context.triggerRef());
				e.preventDefault();
			}
			hasInteractedOutside = false;
			hasPointerDownOutside = false;
		}
	};
	createHideOutside({
		isDisabled: () => !(context.isOpen() && context.modal()),
		targets: () => []
	});
	index_default$1({
		element: () => null,
		enabled: () => context.contentPresent() && context.preventScroll()
	});
	createFocusScope({
		trapFocus: () => context.isOpen() && context.modal(),
		onMountAutoFocus: local.onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus
	}, () => ref);
	createEffect(() => onCleanup(context.registerContentId(others.id)));
	return createComponent(Show, {
		get when() {
			return context.contentPresent();
		},
		get children() {
			return createComponent(DismissableLayer, mergeProps({
				role: "dialog",
				tabIndex: -1,
				get disableOutsidePointerEvents() {
					return memo(() => !!context.modal())() && context.isOpen();
				},
				get excludedElements() {
					return [context.triggerRef];
				},
				get ["aria-labelledby"]() {
					return context.titleId();
				},
				get ["aria-describedby"]() {
					return context.descriptionId();
				},
				get ["data-expanded"]() {
					return context.isOpen() ? "" : void 0;
				},
				get ["data-closed"]() {
					return !context.isOpen() ? "" : void 0;
				},
				onPointerDownOutside,
				onFocusOutside,
				onInteractOutside,
				get onDismiss() {
					return context.close;
				}
			}, others));
		}
	});
}
function DialogDescription$1(props) {
	const context = useDialogContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("description") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerDescriptionId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "p",
		get id() {
			return local.id;
		}
	}, others));
}
function DialogOverlay$1(props) {
	const context = useDialogContext();
	const [local, others] = splitProps(props, [
		"ref",
		"style",
		"onPointerDown"
	]);
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		if (e.target === e.currentTarget) e.preventDefault();
	};
	return createComponent(Show, {
		get when() {
			return context.overlayPresent();
		},
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				get style() {
					return combineStyle({ "pointer-events": "auto" }, local.style);
				},
				get ["data-expanded"]() {
					return context.isOpen() ? "" : void 0;
				},
				get ["data-closed"]() {
					return !context.isOpen() ? "" : void 0;
				},
				onPointerDown
			}, others));
		}
	});
}
function DialogPortal$1(props) {
	const context = useDialogContext();
	return createComponent(Show, {
		get when() {
			return context.contentPresent() || context.overlayPresent();
		},
		get children() {
			return createComponent(Portal, props);
		}
	});
}
var DIALOG_INTL_TRANSLATIONS = { dismiss: "Dismiss" };
function DialogRoot(props) {
	const mergedProps = mergeDefaultProps({
		id: `dialog-${createUniqueId()}`,
		modal: true,
		translations: DIALOG_INTL_TRANSLATIONS
	}, props);
	const [contentId, setContentId] = createSignal();
	const [titleId, setTitleId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const [overlayRef, setOverlayRef] = createSignal();
	const [contentRef, setContentRef] = createSignal();
	const [triggerRef, setTriggerRef] = createSignal();
	const disclosureState = createDisclosureState({
		open: () => mergedProps.open,
		defaultOpen: () => mergedProps.defaultOpen,
		onOpenChange: (isOpen) => mergedProps.onOpenChange?.(isOpen)
	});
	const shouldMount = () => mergedProps.forceMount || disclosureState.isOpen();
	const { present: overlayPresent } = index_default({
		show: shouldMount,
		element: () => overlayRef() ?? null
	});
	const { present: contentPresent } = index_default({
		show: shouldMount,
		element: () => contentRef() ?? null
	});
	const context = {
		translations: () => mergedProps.translations ?? DIALOG_INTL_TRANSLATIONS,
		isOpen: disclosureState.isOpen,
		modal: () => mergedProps.modal ?? true,
		preventScroll: () => mergedProps.preventScroll ?? context.modal(),
		contentId,
		titleId,
		descriptionId,
		triggerRef,
		overlayRef,
		setOverlayRef,
		contentRef,
		setContentRef,
		overlayPresent,
		contentPresent,
		close: disclosureState.close,
		toggle: disclosureState.toggle,
		setTriggerRef,
		generateId: createGenerateId(() => mergedProps.id),
		registerContentId: createRegisterId(setContentId),
		registerTitleId: createRegisterId(setTitleId),
		registerDescriptionId: createRegisterId(setDescriptionId)
	};
	return createComponent(DialogContext.Provider, {
		value: context,
		get children() {
			return mergedProps.children;
		}
	});
}
function DialogTitle$1(props) {
	const context = useDialogContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("title") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerTitleId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "h2",
		get id() {
			return local.id;
		}
	}, others));
}
function DialogTrigger$1(props) {
	const context = useDialogContext();
	const [local, others] = splitProps(props, ["ref", "onClick"]);
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
		get ["data-expanded"]() {
			return context.isOpen() ? "" : void 0;
		},
		get ["data-closed"]() {
			return !context.isOpen() ? "" : void 0;
		},
		onClick
	}, others));
}
var Dialog$2 = Object.assign(DialogRoot, {
	CloseButton: DialogCloseButton,
	Content: DialogContent$1,
	Description: DialogDescription$1,
	Overlay: DialogOverlay$1,
	Portal: DialogPortal$1,
	Title: DialogTitle$1,
	Trigger: DialogTrigger$1
});
var _tmpl$$6 = [
	"<div",
	" class=\"fixed inset-0 z-50 flex items-start justify-center sm:items-center\">",
	"</div>"
];
var _tmpl$2$4 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
var _tmpl$3$4 = ["<span", " class=\"sr-only\">Close</span>"];
var Dialog$1 = DialogRoot;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = (props) => {
	const [, rest] = splitProps(props, ["children"]);
	return createComponent(DialogPortal$1, mergeProps(rest, { get children() {
		return ssr(_tmpl$$6, ssrHydrationKey(), escape(props.children));
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
					return [ssr(_tmpl$2$4, ssrHydrationKey()), ssr(_tmpl$3$4, ssrHydrationKey())];
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
__export({}, {
	AlertDialog: () => AlertDialog$1,
	CloseButton: () => DialogCloseButton,
	Content: () => AlertDialogContent$1,
	Description: () => DialogDescription$1,
	Overlay: () => DialogOverlay$1,
	Portal: () => DialogPortal$1,
	Root: () => DialogRoot,
	Title: () => DialogTitle$1,
	Trigger: () => DialogTrigger$1
});
function AlertDialogContent$1(props) {
	return createComponent(DialogContent$1, mergeProps({ role: "alertdialog" }, props));
}
var AlertDialog$1 = Object.assign(DialogRoot, {
	CloseButton: DialogCloseButton,
	Content: AlertDialogContent$1,
	Description: DialogDescription$1,
	Overlay: DialogOverlay$1,
	Portal: DialogPortal$1,
	Title: DialogTitle$1,
	Trigger: DialogTrigger$1
});
var _tmpl$$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
var _tmpl$2$3 = ["<span", " class=\"sr-only\">Close</span>"];
var _tmpl$3$3 = [
	"<div",
	">",
	"</div>"
];
var AlertDialog = DialogRoot;
var AlertDialogTrigger = DialogTrigger$1;
var AlertDialogPortal = DialogPortal$1;
var AlertDialogOverlay = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogOverlay$1, mergeProps({ get ["class"]() {
		return cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0", local.class);
	} }, others));
};
var AlertDialogContent = (props) => {
	const [local, others] = splitProps(props, ["class", "children"]);
	return createComponent(AlertDialogPortal, { get children() {
		return [createComponent(AlertDialogOverlay, {}), createComponent(AlertDialogContent$1, mergeProps({ get ["class"]() {
			return cn("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", local.class);
		} }, others, { get children() {
			return [local.children, createComponent(DialogCloseButton, {
				"class": "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground",
				get children() {
					return [ssr(_tmpl$$5, ssrHydrationKey()), ssr(_tmpl$2$3, ssrHydrationKey())];
				}
			})];
		} }))];
	} });
};
var AlertDialogTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogTitle$1, mergeProps({ get ["class"]() {
		return cn("text-lg font-semibold", local.class);
	} }, others));
};
var AlertDialogDescription = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogDescription$1, mergeProps({ get ["class"]() {
		return cn("text-sm text-muted-foreground", local.class);
	} }, others));
};
var AlertDialogHeader = (props) => ssr(_tmpl$3$3, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col space-y-2 text-center sm:text-left", props.class), true), false), escape(props.children));
var AlertDialogFooter = (props) => ssr(_tmpl$3$3, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class), true), false), escape(props.children));
var AlertDialogAction = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogCloseButton, mergeProps({ get ["class"]() {
		return cn(buttonVariants(), local.class);
	} }, others));
};
var AlertDialogCancel = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogCloseButton, mergeProps({ get ["class"]() {
		return cn(buttonVariants({ variant: "outline" }), local.class);
	} }, others));
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
		const win = getWindow();
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
__export({}, {
	CloseButton: () => ToastCloseButton,
	Description: () => ToastDescription,
	List: () => ToastList,
	ProgressFill: () => ToastProgressFill,
	ProgressTrack: () => ToastProgressTrack,
	Region: () => ToastRegion,
	Root: () => ToastRoot,
	Title: () => ToastTitle$1,
	Toast: () => Toast$1,
	toaster: () => toaster,
	useToastContext: () => useToastContext
});
var ToastContext = createContext();
function useToastContext() {
	const context = useContext(ToastContext);
	if (context === void 0) throw new Error("[kobalte]: `useToastContext` must be used within a `Toast.Root` component");
	return context;
}
function ToastCloseButton(props) {
	const context = useToastContext();
	const [local, others] = splitProps(props, ["aria-label", "onClick"]);
	const onClick = (e) => {
		callHandler(e, local.onClick);
		context.close();
	};
	return createComponent(ButtonRoot, mergeProps({
		get ["aria-label"]() {
			return local["aria-label"] || context.translations().close;
		},
		onClick
	}, others));
}
function ToastDescription(props) {
	const context = useToastContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("description") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerDescriptionId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get id() {
			return local.id;
		}
	}, others));
}
var ToastRegionContext = createContext();
function useToastRegionContext() {
	const context = useContext(ToastRegionContext);
	if (context === void 0) throw new Error("[kobalte]: `useToastRegionContext` must be used within a `Toast.Region` component");
	return context;
}
function ToastList(props) {
	let ref;
	const context = useToastRegionContext();
	const [local, others] = splitProps(props, [
		"ref",
		"onFocusIn",
		"onFocusOut",
		"onPointerMove",
		"onPointerLeave"
	]);
	const onFocusIn = (e) => {
		callHandler(e, local.onFocusIn);
		if (context.pauseOnInteraction() && !context.isPaused()) context.pauseAllTimer();
	};
	const onFocusOut = (e) => {
		callHandler(e, local.onFocusOut);
		if (!contains$1(ref, e.relatedTarget)) context.resumeAllTimer();
	};
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (context.pauseOnInteraction() && !context.isPaused()) context.pauseAllTimer();
	};
	const onPointerLeave = (e) => {
		callHandler(e, local.onPointerLeave);
		if (!contains$1(ref, getDocument(ref).activeElement)) context.resumeAllTimer();
	};
	createEffect(on([() => ref, () => context.hotkey()], ([ref2, hotkey]) => {}));
	createEffect(() => {
		if (!context.pauseOnPageIdle()) return;
		const win = getWindow(ref);
		win.addEventListener("blur", context.pauseAllTimer);
		win.addEventListener("focus", context.resumeAllTimer);
		onCleanup(() => {
			win.removeEventListener("blur", context.pauseAllTimer);
			win.removeEventListener("focus", context.resumeAllTimer);
		});
	});
	return createComponent(Polymorphic, mergeProps({
		as: "ol",
		tabIndex: -1,
		onFocusIn,
		onFocusOut,
		onPointerMove,
		onPointerLeave
	}, others, { get children() {
		return createComponent(For, {
			get each() {
				return context.toasts();
			},
			children: (toast) => toast.toastComponent({ get toastId() {
				return toast.id;
			} })
		});
	} }));
}
function ToastProgressFill(props) {
	const rootContext = useToastRegionContext();
	const context = useToastContext();
	const [local, others] = splitProps(props, ["style"]);
	const [lifeTime, setLifeTime] = createSignal(100);
	let totalElapsedTime = 0;
	createEffect(() => {
		if (rootContext.isPaused() || context.isPersistent()) return;
		const intervalId = setInterval(() => {
			const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - context.closeTimerStartTime() + totalElapsedTime;
			const life = Math.trunc(100 - elapsedTime / context.duration() * 100);
			setLifeTime(life < 0 ? 0 : life);
		});
		onCleanup(() => {
			totalElapsedTime += (/* @__PURE__ */ new Date()).getTime() - context.closeTimerStartTime();
			clearInterval(intervalId);
		});
	});
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get style() {
			return combineStyle({ "--kb-toast-progress-fill-width": `${lifeTime()}%` }, local.style);
		}
	}, others));
}
function ToastProgressTrack(props) {
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		"aria-hidden": "true",
		role: "presentation"
	}, props));
}
var [state, setState] = createStore({ toasts: [] });
function add(toast) {
	setState("toasts", (prev) => [...prev, toast]);
}
function get(id) {
	return state.toasts.find((toast) => toast.id === id);
}
function update(id, toast) {
	const index = state.toasts.findIndex((toast2) => toast2.id === id);
	if (index !== -1) setState("toasts", (prev) => [
		...prev.slice(0, index),
		toast,
		...prev.slice(index + 1)
	]);
}
function dismiss$1(id) {
	setState("toasts", (toast) => toast.id === id, "dismiss", true);
}
function remove(id) {
	setState("toasts", (prev) => prev.filter((toast) => toast.id !== id));
}
function clear() {
	setState("toasts", []);
}
var toastStore = {
	toasts: () => state.toasts,
	add,
	get,
	update,
	dismiss: dismiss$1,
	remove,
	clear
};
var TOAST_HOTKEY_PLACEHOLDER = "{hotkey}";
var TOAST_INTL_TRANSLATIONS = { close: "Close" };
var TOAST_REGION_INTL_TRANSLATIONS = { notifications: (hotkeyPlaceholder) => `Notifications (${hotkeyPlaceholder})` };
function ToastRegion(props) {
	const [local, others] = splitProps(mergeDefaultProps({
		id: `toast-region-${createUniqueId()}`,
		hotkey: ["altKey", "KeyT"],
		duration: 5e3,
		limit: 3,
		swipeDirection: "right",
		swipeThreshold: 50,
		pauseOnInteraction: true,
		pauseOnPageIdle: true,
		topLayer: true,
		translations: TOAST_REGION_INTL_TRANSLATIONS
	}, props), [
		"translations",
		"style",
		"hotkey",
		"duration",
		"limit",
		"swipeDirection",
		"swipeThreshold",
		"pauseOnInteraction",
		"pauseOnPageIdle",
		"topLayer",
		"aria-label",
		"regionId"
	]);
	const toasts = createMemo(() => toastStore.toasts().filter((toast) => toast.region === local.regionId && toast.dismiss === false).slice(0, local.limit));
	const [isPaused, setIsPaused] = createSignal(false);
	const hasToasts = () => toasts().length > 0;
	const hotkeyLabel = () => {
		return local.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
	};
	const ariaLabel = () => {
		return (local["aria-label"] || local.translations.notifications(TOAST_HOTKEY_PLACEHOLDER)).replace(TOAST_HOTKEY_PLACEHOLDER, hotkeyLabel());
	};
	const topLayerAttr = () => ({ [DATA_TOP_LAYER_ATTR]: local.topLayer ? "" : void 0 });
	const context = {
		isPaused,
		toasts,
		hotkey: () => local.hotkey,
		duration: () => local.duration,
		swipeDirection: () => local.swipeDirection,
		swipeThreshold: () => local.swipeThreshold,
		pauseOnInteraction: () => local.pauseOnInteraction,
		pauseOnPageIdle: () => local.pauseOnPageIdle,
		pauseAllTimer: () => setIsPaused(true),
		resumeAllTimer: () => setIsPaused(false),
		generateId: createGenerateId(() => others.id)
	};
	return createComponent(ToastRegionContext.Provider, {
		value: context,
		get children() {
			return createComponent(Polymorphic, mergeProps({
				as: "div",
				role: "region",
				tabIndex: -1,
				get ["aria-label"]() {
					return ariaLabel();
				},
				get style() {
					return combineStyle({ "pointer-events": hasToasts() ? local.topLayer ? "auto" : void 0 : "none" }, local.style);
				}
			}, topLayerAttr, others));
		}
	});
}
var TOAST_SWIPE_START_EVENT = "toast.swipeStart";
var TOAST_SWIPE_MOVE_EVENT = "toast.swipeMove";
var TOAST_SWIPE_CANCEL_EVENT = "toast.swipeCancel";
var TOAST_SWIPE_END_EVENT = "toast.swipeEnd";
function ToastRoot(props) {
	const rootContext = useToastRegionContext();
	const [local, others] = splitProps(mergeDefaultProps({
		id: `toast-${createUniqueId()}`,
		priority: "high",
		translations: TOAST_INTL_TRANSLATIONS
	}, props), [
		"ref",
		"translations",
		"toastId",
		"style",
		"priority",
		"duration",
		"persistent",
		"onPause",
		"onResume",
		"onSwipeStart",
		"onSwipeMove",
		"onSwipeCancel",
		"onSwipeEnd",
		"onEscapeKeyDown",
		"onKeyDown",
		"onPointerDown",
		"onPointerMove",
		"onPointerUp"
	]);
	const [isOpen, setIsOpen] = createSignal(true);
	const [titleId, setTitleId] = createSignal();
	const [descriptionId, setDescriptionId] = createSignal();
	const [isAnimationEnabled, setIsAnimationEnabled] = createSignal(true);
	const [ref, setRef] = createSignal();
	const { present } = index_default({
		show: isOpen,
		element: () => ref() ?? null
	});
	const duration = createMemo(() => local.duration || rootContext.duration());
	let closeTimerId;
	let closeTimerStartTime = 0;
	let closeTimerRemainingTime = duration();
	let pointerStart = null;
	let swipeDelta = null;
	const close = () => {
		setIsOpen(false);
		setIsAnimationEnabled(true);
	};
	const deleteToast = () => {
		toastStore.remove(local.toastId);
	};
	const startTimer = (duration2) => {
		if (!duration2 || local.persistent) return;
		window.clearTimeout(closeTimerId);
		closeTimerStartTime = (/* @__PURE__ */ new Date()).getTime();
		closeTimerId = window.setTimeout(close, duration2);
	};
	const resumeTimer = () => {
		startTimer(closeTimerRemainingTime);
		local.onResume?.();
	};
	const pauseTimer = () => {
		const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTime;
		closeTimerRemainingTime = closeTimerRemainingTime - elapsedTime;
		window.clearTimeout(closeTimerId);
		local.onPause?.();
	};
	const onKeyDown = (e) => {
		callHandler(e, local.onKeyDown);
		if (e.key !== "Escape") return;
		local.onEscapeKeyDown?.(e);
		if (!e.defaultPrevented) close();
	};
	const onPointerDown = (e) => {
		callHandler(e, local.onPointerDown);
		if (e.button !== 0) return;
		pointerStart = {
			x: e.clientX,
			y: e.clientY
		};
	};
	const onPointerMove = (e) => {
		callHandler(e, local.onPointerMove);
		if (!pointerStart) return;
		const x = e.clientX - pointerStart.x;
		const y = e.clientY - pointerStart.y;
		const hasSwipeMoveStarted = Boolean(swipeDelta);
		const isHorizontalSwipe = ["left", "right"].includes(rootContext.swipeDirection());
		const clamp = ["left", "up"].includes(rootContext.swipeDirection()) ? Math.min : Math.max;
		const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
		const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
		const moveStartBuffer = e.pointerType === "touch" ? 10 : 2;
		const delta = {
			x: clampedX,
			y: clampedY
		};
		const eventDetail = {
			originalEvent: e,
			delta
		};
		if (hasSwipeMoveStarted) {
			swipeDelta = delta;
			handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE_EVENT, local.onSwipeMove, eventDetail);
			const { x: x2, y: y2 } = delta;
			e.currentTarget.setAttribute("data-swipe", "move");
			e.currentTarget.style.setProperty("--kb-toast-swipe-move-x", `${x2}px`);
			e.currentTarget.style.setProperty("--kb-toast-swipe-move-y", `${y2}px`);
		} else if (isDeltaInDirection(delta, rootContext.swipeDirection(), moveStartBuffer)) {
			swipeDelta = delta;
			handleAndDispatchCustomEvent(TOAST_SWIPE_START_EVENT, local.onSwipeStart, eventDetail);
			e.currentTarget.setAttribute("data-swipe", "start");
			e.target.setPointerCapture(e.pointerId);
		} else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStart = null;
	};
	const onPointerUp = (e) => {
		callHandler(e, local.onPointerUp);
		const delta = swipeDelta;
		const target = e.target;
		if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
		swipeDelta = null;
		pointerStart = null;
		if (delta) {
			const toast = e.currentTarget;
			const eventDetail = {
				originalEvent: e,
				delta
			};
			if (isDeltaInDirection(delta, rootContext.swipeDirection(), rootContext.swipeThreshold())) {
				handleAndDispatchCustomEvent(TOAST_SWIPE_END_EVENT, local.onSwipeEnd, eventDetail);
				const { x, y } = delta;
				e.currentTarget.setAttribute("data-swipe", "end");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-move-x");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-move-y");
				e.currentTarget.style.setProperty("--kb-toast-swipe-end-x", `${x}px`);
				e.currentTarget.style.setProperty("--kb-toast-swipe-end-y", `${y}px`);
				close();
			} else {
				handleAndDispatchCustomEvent(TOAST_SWIPE_CANCEL_EVENT, local.onSwipeCancel, eventDetail);
				e.currentTarget.setAttribute("data-swipe", "cancel");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-move-x");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-move-y");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-end-x");
				e.currentTarget.style.removeProperty("--kb-toast-swipe-end-y");
			}
			toast.addEventListener("click", (event) => event.preventDefault(), { once: true });
		}
	};
	onMount(() => {
		if (rootContext.toasts().find((toast) => toast.id === local.toastId && toast.update)) setIsAnimationEnabled(false);
	});
	createEffect(on(() => rootContext.isPaused(), (isPaused) => {
		if (isPaused) pauseTimer();
		else resumeTimer();
	}, { defer: true }));
	createEffect(on([isOpen, duration], ([isOpen2, duration2]) => {
		if (isOpen2 && !rootContext.isPaused()) startTimer(duration2);
	}));
	createEffect(on(() => toastStore.get(local.toastId)?.dismiss, (dismiss3) => dismiss3 && close()));
	createEffect(on(() => present(), (isPresent) => !isPresent && deleteToast()));
	const context = {
		translations: () => local.translations,
		close,
		duration,
		isPersistent: () => local.persistent ?? false,
		closeTimerStartTime: () => closeTimerStartTime,
		generateId: createGenerateId(() => others.id),
		registerTitleId: createRegisterId(setTitleId),
		registerDescriptionId: createRegisterId(setDescriptionId)
	};
	return createComponent(Show, {
		get when() {
			return present();
		},
		get children() {
			return createComponent(ToastContext.Provider, {
				value: context,
				get children() {
					return createComponent(Polymorphic, mergeProps({
						as: "li",
						role: "status",
						tabIndex: 0,
						get style() {
							return combineStyle({
								animation: isAnimationEnabled() ? void 0 : "none",
								"user-select": "none",
								"touch-action": "none"
							}, local.style);
						},
						get ["aria-live"]() {
							return local.priority === "high" ? "assertive" : "polite";
						},
						"aria-atomic": "true",
						get ["aria-labelledby"]() {
							return titleId();
						},
						get ["aria-describedby"]() {
							return descriptionId();
						},
						get ["data-opened"]() {
							return isOpen() ? "" : void 0;
						},
						get ["data-closed"]() {
							return !isOpen() ? "" : void 0;
						},
						get ["data-swipe-direction"]() {
							return rootContext.swipeDirection();
						},
						onKeyDown,
						onPointerDown,
						onPointerMove,
						onPointerUp
					}, others));
				}
			});
		}
	});
}
function isDeltaInDirection(delta, direction, threshold = 0) {
	const deltaX = Math.abs(delta.x);
	const deltaY = Math.abs(delta.y);
	const isDeltaX = deltaX > deltaY;
	if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
	return !isDeltaX && deltaY > threshold;
}
function handleAndDispatchCustomEvent(name, handler, detail) {
	const currentTarget = detail.originalEvent.currentTarget;
	const event = new CustomEvent(name, {
		bubbles: true,
		cancelable: true,
		detail
	});
	if (handler) currentTarget.addEventListener(name, handler, { once: true });
	currentTarget.dispatchEvent(event);
}
function ToastTitle$1(props) {
	const context = useToastContext();
	const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("title") }, props), ["id"]);
	createEffect(() => onCleanup(context.registerTitleId(local.id)));
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		get id() {
			return local.id;
		}
	}, others));
}
var toastsCounter = 0;
function show(toastComponent, options) {
	const id = toastsCounter++;
	toastStore.add({
		id,
		toastComponent,
		dismiss: false,
		update: false,
		region: options?.region
	});
	return id;
}
function update2(id, toastComponent) {
	toastStore.update(id, {
		id,
		toastComponent,
		dismiss: false,
		update: true
	});
}
function promise(promise2, toastComponent, options) {
	const id = show((props) => {
		return toastComponent({
			get toastId() {
				return props.toastId;
			},
			state: "pending"
		});
	}, options);
	(isFunction(promise2) ? promise2() : promise2).then((data) => update2(id, (props) => {
		return toastComponent({
			get toastId() {
				return props.toastId;
			},
			state: "fulfilled",
			data
		});
	})).catch((error) => update2(id, (props) => {
		return toastComponent({
			get toastId() {
				return props.toastId;
			},
			state: "rejected",
			error
		});
	}));
	return id;
}
function dismiss2(id) {
	toastStore.dismiss(id);
	return id;
}
function clear2() {
	toastStore.clear();
}
var toaster = {
	show,
	update: update2,
	promise,
	dismiss: dismiss2,
	clear: clear2
};
var Toast$1 = Object.assign(ToastRoot, {
	CloseButton: ToastCloseButton,
	Description: ToastDescription,
	List: ToastList,
	ProgressFill: ToastProgressFill,
	ProgressTrack: ToastProgressTrack,
	Region: ToastRegion,
	Title: ToastTitle$1,
	toaster
});
var [toasts, setToasts] = createSignal([]);
var nextId = 0;
function toast(msg, kind = "info") {
	const id = ++nextId;
	setToasts((prev) => [...prev, {
		id,
		msg,
		kind
	}]);
	setTimeout(() => dismiss(id), kind === "error" ? 1e4 : 4e3);
}
function dismiss(id) {
	setToasts((prev) => prev.filter((t) => t.id !== id));
}
var _tmpl$$4 = [
	"<ol",
	" class=\"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]\">",
	"</ol>"
];
var _tmpl$2$2 = [
	"<div",
	" class=\"grid gap-1\">",
	"</div>"
];
var _tmpl$3$2 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--kb-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--kb-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[opened]:animate-in data-[closed]:animate-out data-[swipe=end]:animate-out data-[closed]:fade-out-80 data-[closed]:slide-out-to-right-full data-[opened]:slide-in-from-top-full data-[opened]:sm:slide-in-from-bottom-full", {
	variants: { variant: {
		default: "border bg-background text-foreground",
		destructive: "group border-destructive bg-destructive text-white"
	} },
	defaultVariants: { variant: "default" }
});
function Toaster() {
	return createComponent(Portal, { get children() {
		return createComponent(ToastRegion, { get children() {
			return ssr(_tmpl$$4, ssrHydrationKey(), escape(createComponent(For, {
				get each() {
					return toasts();
				},
				children: (t) => createComponent(Toast, {
					get toastId() {
						return t.id;
					},
					get variant() {
						return t.kind === "error" ? "destructive" : "default";
					},
					persistent: true,
					get children() {
						return [ssr(_tmpl$2$2, ssrHydrationKey(), escape(createComponent(ToastTitle, { get children() {
							return t.msg;
						} }))), createComponent(ToastClose, { onClick: () => dismiss(t.id) })];
					}
				})
			})));
		} });
	} });
}
var Toast = (props) => {
	const [local, others] = splitProps(props, ["class", "variant"]);
	return createComponent(ToastRoot, mergeProps({ get ["class"]() {
		return cn(toastVariants({ variant: local.variant }), local.class);
	} }, others));
};
var ToastClose = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(ToastCloseButton, mergeProps({ get ["class"]() {
		return cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-destructive-foreground group-[.error]:text-error-foreground group-[.success]:text-success-foreground group-[.warning]:text-warning-foreground", local.class);
	} }, others, { get children() {
		return ssr(_tmpl$3$2, ssrHydrationKey());
	} }));
};
var ToastTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(ToastTitle$1, mergeProps({ get ["class"]() {
		return cn("text-sm font-semibold", local.class);
	} }, others));
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
	let timeout = null;
	let prevTarget = null;
	createResizeObserver(context.selectedTab, (_, t) => {
		if (prevTarget !== t) {
			prevTarget = t;
			computeStyle();
			return;
		}
		setResizing(true);
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			setResizing(false);
		}, 1);
		computeStyle();
	});
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
		if (isWebKit()) focusWithoutScrolling(e.currentTarget);
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
	Alert: () => Alert$1,
	Root: () => AlertRoot
});
function AlertRoot(props) {
	return createComponent(Polymorphic, mergeProps({
		as: "div",
		role: "alert"
	}, props));
}
var Alert$1 = AlertRoot;
var alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = (props) => {
	const [local, others] = splitProps(props, ["class", "variant"]);
	return createComponent(AlertRoot, mergeProps({ get ["class"]() {
		return cn(alertVariants({ variant: props.variant }), local.class);
	} }, others));
};
var AlertTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("h5", mergeProps({ get ["class"]() {
		return cn("mb-1 font-medium leading-none tracking-tight", local.class);
	} }, others), void 0, true);
};
var AlertDescription = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return ssrElement("div", mergeProps({ get ["class"]() {
		return cn("text-sm [&_p]:leading-relaxed", local.class);
	} }, others), void 0, true);
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
