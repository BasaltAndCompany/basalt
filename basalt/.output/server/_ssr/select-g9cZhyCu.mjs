import { $ as createComputed, C as ssrElement, E as ssrStyleProperty, G as Match, J as Switch, K as Show, Q as createComponent, S as ssrAttribute, T as ssrStyle, W as For, Z as children, _ as memo, _t as splitProps, bt as useContext, dt as on, et as createContext, ft as onCleanup, h as escape, n as access$1, nt as createMemo, ot as createSignal, p as Portal, pt as onMount, r as accessWith, rt as createRenderEffect, st as createUniqueId, t as createEventListener, tt as createEffect, ut as mergeProps, w as ssrHydrationKey, x as ssr, yt as untrack } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Key } from "../_libs/solid-primitives__keyed.mjs";
import { A as mergeDefaultProps, E as isNumber, F as visuallyHiddenStyles, N as scrollIntoView, O as isString, T as isMac, _ as getDocument, a as __export, b as getWindow, c as callHandler, f as createGenerateId, i as Polymorphic, k as isWebKit, l as cn, m as focusWithoutScrolling, n as ButtonRoot, p as createTagName, u as composeEventHandlers, w as isFunction, x as isAppleDevice, y as getFocusableTreeWalker } from "./button-DhSTr1ZL.mjs";
import { t as combineStyle } from "../_libs/solid-primitives__props.mjs";
import { a as hide, c as shift, i as flip, l as size, n as autoUpdate, o as offset, r as computePosition, s as platform, t as arrow } from "../_libs/@floating-ui/dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/select-g9cZhyCu.js
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
var _tmpl$$2 = [
	"<option",
	"",
	">",
	"</option>"
];
var _tmpl$2$1 = "<option></option>";
var _tmpl$3$1 = [
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
				return ssr(_tmpl$$2, ssrHydrationKey() + ssrAttribute("value", escape(key, true), false), ssrAttribute("selected", local.selectionManager.isSelected(key), true), escape(item?.textValue));
			}
		});
	};
	createEffect(on(() => local.selectionManager.selectedKeys(), (keys, prevKeys) => {
		if (prevKeys && isSameSelection(keys, prevKeys)) return;
		setIsInternalChangeEvent(true);
	}, { defer: true }));
	return ssr(_tmpl$3$1, ssrHydrationKey(), ssrStyle(visuallyHiddenStyles), ssrAttribute("tabindex", local.selectionManager.isFocused() || local.isOpen ? -1 : 0, false), ssrStyleProperty("font-size:", "16px"), ssrAttribute("required", formControlContext.isRequired(), true), ssrAttribute("disabled", formControlContext.isDisabled(), true) + ssrAttribute("readonly", escape(formControlContext.isReadOnly(), true), false), ssrElement("select", mergeProps({
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
		ssr(_tmpl$2$1),
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
var _tmpl$$1 = [
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
		return ssr(_tmpl$$1, ssrHydrationKey(), ssrAttribute("transform", escape(rotate(), true), false));
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
var _tmpl$ = ["<path", " d=\"M8 9l4 -4l4 4\"></path>"];
var _tmpl$2 = ["<path", " d=\"M16 15l-4 4l-4 -4\"></path>"];
var _tmpl$3 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M5 12l5 5l10 -10\"></path></svg>"];
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
				return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey())];
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
				return ssr(_tmpl$3, ssrHydrationKey());
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
//#endregion
export { createSelectableList as A, createFormControlField as C, createRegisterId as D, createListState as E, index_default$1 as M, useFormControlContext as N, createSelectableCollection as O, useLocale as P, createFormControl as S, createHideOutside as T, createControllableArraySignal as _, FormControlContext as a, createDisclosureState as b, FormControlLabel as c, Select as d, SelectContent as f, SelectValue as g, SelectTrigger as h, FORM_CONTROL_PROP_NAMES as i, index_default as j, createSelectableItem as k, Popper as l, SelectItem as m, DismissableLayer as n, FormControlDescription as o, SelectHiddenSelect as p, FORM_CONTROL_FIELD_PROP_NAMES as r, FormControlErrorMessage as s, DATA_TOP_LAYER_ATTR as t, PopperArrow as u, createControllableBooleanSignal as v, createFormResetListener as w, createFocusScope as x, createControllableSignal as y };
