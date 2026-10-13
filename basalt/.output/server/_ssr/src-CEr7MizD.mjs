import { $ as untrack, B as createSignal, E as Show, F as createEffect, G as on, I as createMemo, K as onCleanup, L as createRenderEffect, M as createComponent, N as createComputed, O as Switch, P as createContext, S as $TRACK, T as Match, V as createUniqueId, W as mergeProps, Z as splitProps, _ as ssrElement, b as ssrStyleProperty, c as Portal, d as memo, et as useContext, g as ssrAttribute, h as ssr, i as Dynamic, j as children, l as escape, q as onMount, t as createStore, v as ssrHydrationKey, w as For, y as ssrStyle, z as createRoot } from "../_libs/solid-js.mjs";
/** no operation */
var noop$1 = () => void 0;
var isNonNullable = (i) => i != null;
var filterNonNullable = (arr) => arr.filter(isNonNullable);
/**
* Returns a function that will call all functions in the order they were chained with the same arguments.
*/
function chain(callbacks) {
	return (...args) => {
		for (const callback of callbacks) callback && callback(...args);
	};
}
/**
* Accesses the value of a MaybeAccessor
* @example
* ```ts
* access("foo") // => "foo"
* access(() => "foo") // => "foo"
* ```
*/
var access$1 = (v) => typeof v === "function" && !v.length ? v() : v;
var asArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
/** If value is a function – call it with a given arguments – otherwise get the value as is */
function accessWith(valueOrFn, ...args) {
	return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
}
/**
* Handle items removed and added to the array by diffing it by refference.
*
* @param current new array instance
* @param prev previous array copy
* @param handleAdded called once for every added item to array
* @param handleRemoved called once for every removed from array
*/
function handleDiffArray(current, prev, handleAdded, handleRemoved) {
	const currLength = current.length;
	const prevLength = prev.length;
	let i = 0;
	if (!prevLength) {
		for (; i < currLength; i++) handleAdded(current[i]);
		return;
	}
	if (!currLength) {
		for (; i < prevLength; i++) handleRemoved(prev[i]);
		return;
	}
	for (; i < prevLength; i++) if (prev[i] !== current[i]) break;
	let prevEl;
	let currEl;
	prev = prev.slice(i);
	current = current.slice(i);
	for (prevEl of prev) if (!current.includes(prevEl)) handleRemoved(prevEl);
	for (currEl of current) if (!prev.includes(currEl)) handleAdded(currEl);
}
var FALLBACK = Symbol("fallback");
function dispose(list) {
	for (const o of list) o.dispose();
}
/**
* Reactively maps an array by specified key with a callback function - underlying helper for the `<Key>` control flow.
* @param list input list of values to map
* @param keyFn key getter, items will be identified by it's value. changing the value is changing the item.
* @param mapFn reactive function used to create mapped output item. Similar to `Array.prototype.map` but both item and index are signals, that could change over time.
* @param options a fallback for when the input list is empty or missing
* @returns mapped input array signal
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/keyed#keyArray
*/
function keyArray(items, keyFn, mapFn, options = {}) {
	{
		const itemsRef = items();
		let s = [];
		if (itemsRef && itemsRef.length) for (let i = 0, len = itemsRef.length; i < len; i++) s.push(mapFn(() => itemsRef[i], () => i));
		else if (options.fallback) s = [options.fallback()];
		return () => s;
	}
	const prev = /* @__PURE__ */ new Map();
	onCleanup(() => dispose(prev.values()));
	return () => {
		const list = items() || [];
		list[$TRACK];
		return untrack(() => {
			if (!list.length) {
				dispose(prev.values());
				prev.clear();
				if (!options.fallback) return [];
				return [createRoot((dispose) => {
					prev.set(FALLBACK, { dispose });
					return options.fallback();
				})];
			}
			const result = new Array(list.length);
			const fb = prev.get(FALLBACK);
			if (!prev.size || fb) {
				fb?.dispose();
				prev.delete(FALLBACK);
				for (let i = 0; i < list.length; i++) {
					const item = list[i];
					const key = keyFn(item, i);
					addNewItem(result, item, i, key);
				}
				return result;
			}
			const prevKeys = new Set(prev.keys());
			for (let i = 0; i < list.length; i++) {
				const item = list[i];
				const key = keyFn(item, i);
				prevKeys.delete(key);
				const lookup = prev.get(key);
				if (lookup) {
					result[i] = lookup.mapped;
					lookup.setIndex?.(i);
					lookup.setItem(() => item);
				} else addNewItem(result, item, i, key);
			}
			for (const key of prevKeys) {
				prev.get(key)?.dispose();
				prev.delete(key);
			}
			return result;
		});
	};
	function addNewItem(list, item, i, key) {
		createRoot((dispose) => {
			const [getItem, setItem] = createSignal(item);
			const save = {
				setItem,
				dispose
			};
			if (mapFn.length > 1) {
				const [index, setIndex] = createSignal(i);
				save.setIndex = setIndex;
				save.mapped = mapFn(getItem, index);
			} else save.mapped = mapFn(getItem);
			prev.set(key, save);
			list[i] = save.mapped;
		});
	}
}
/**
* creates a list of elements from the input `each` list
*
* it receives a map function as its child that receives a **list item signal** and **index signal** and returns a JSX-Element; if the list is empty, an optional fallback is returned:
* ```tsx
* <Key each={items()} by={item => item.id} fallback={<div>No items</div>}>
*   {(item, index) => <div data-index={index()}>{item()}</div>}
* </Key>
* ```
*
* prop `by` can also be an object key:
* ```tsx
* <Key each={items()} by="id">
* ```
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/keyed#Key
*/
function Key(props) {
	const { by } = props;
	return createMemo(keyArray(() => props.each, typeof by === "function" ? by : (v) => v[by], props.children, "fallback" in props ? { fallback: () => props.fallback } : void 0));
}
var extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
/**
* converts inline string styles to object form
* @example
* const styles = stringStyleToObject("margin: 24px; border: 1px solid #121212");
* styles; // { margin: "24px", border: "1px solid #121212" }
* */
function stringStyleToObject(style) {
	const object = {};
	let match;
	while (match = extractCSSregex.exec(style)) object[match[1]] = match[2];
	return object;
}
function combineStyle(a, b) {
	if (typeof a === "string") {
		if (typeof b === "string") return `${a};${b}`;
		a = stringStyleToObject(a);
	} else if (typeof b === "string") b = stringStyleToObject(b);
	return {
		...a,
		...b
	};
}
function addItemToArray(array, item, index = -1) {
	if (!(index in array)) return [...array, item];
	return [
		...array.slice(0, index),
		item,
		...array.slice(index)
	];
}
function removeItemFromArray(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
function isNumber$1(value) {
	return typeof value === "number";
}
function isString(value) {
	return Object.prototype.toString.call(value) === "[object String]";
}
function isFunction(value) {
	return typeof value === "function";
}
function createGenerateId(baseId) {
	return (suffix) => `${baseId()}-${suffix}`;
}
function contains$1(parent, child) {
	if (!parent) return false;
	return parent === child || parent.contains(child);
}
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
function getWindow$1(node) {
	return getDocument(node).defaultView || window;
}
function getDocument(node) {
	return node ? node.ownerDocument || node : document;
}
function isFrame(element) {
	return element.tagName === "IFRAME";
}
var EventKey = /* @__PURE__ */ ((EventKey2) => {
	EventKey2["Escape"] = "Escape";
	EventKey2["Enter"] = "Enter";
	EventKey2["Tab"] = "Tab";
	EventKey2["Space"] = " ";
	EventKey2["ArrowDown"] = "ArrowDown";
	EventKey2["ArrowLeft"] = "ArrowLeft";
	EventKey2["ArrowRight"] = "ArrowRight";
	EventKey2["ArrowUp"] = "ArrowUp";
	EventKey2["End"] = "End";
	EventKey2["Home"] = "Home";
	EventKey2["PageDown"] = "PageDown";
	EventKey2["PageUp"] = "PageUp";
	return EventKey2;
})(EventKey || {});
function testUserAgent(re) {
	if (typeof window === "undefined" || window.navigator == null) return false;
	return window.navigator.userAgentData?.brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function testPlatform(re) {
	return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.userAgentData?.platform || window.navigator.platform) : false;
}
function isMac() {
	return testPlatform(/^Mac/i);
}
function isIPhone() {
	return testPlatform(/^iPhone/i);
}
function isIPad() {
	return testPlatform(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
	return isIPhone() || isIPad();
}
function isAppleDevice() {
	return isMac() || isIOS();
}
function isWebKit$1() {
	return testUserAgent(/AppleWebKit/i) && !isChrome();
}
function isChrome() {
	return testUserAgent(/Chrome/i);
}
function callHandler(event, handler) {
	if (handler) if (isFunction(handler)) handler(event);
	else handler[0](handler[1], event);
	return event?.defaultPrevented;
}
function composeEventHandlers(handlers) {
	return (event) => {
		for (const handler of handlers) callHandler(event, handler);
	};
}
function focusWithoutScrolling(element) {
	if (!element) return;
	if (supportsPreventScroll()) element.focus({ preventScroll: true });
	else {
		const scrollableElements = getScrollableElements(element);
		element.focus();
		restoreScrollPosition(scrollableElements);
	}
}
var supportsPreventScrollCached = null;
function supportsPreventScroll() {
	if (supportsPreventScrollCached == null) {
		supportsPreventScrollCached = false;
		try {
			document.createElement("div").focus({ get preventScroll() {
				supportsPreventScrollCached = true;
				return true;
			} });
		} catch (e) {}
	}
	return supportsPreventScrollCached;
}
function getScrollableElements(element) {
	let parent = element.parentNode;
	const scrollableElements = [];
	const rootScrollingElement = document.scrollingElement || document.documentElement;
	while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
		if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
			element: parent,
			scrollTop: parent.scrollTop,
			scrollLeft: parent.scrollLeft
		});
		parent = parent.parentNode;
	}
	if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
		element: rootScrollingElement,
		scrollTop: rootScrollingElement.scrollTop,
		scrollLeft: rootScrollingElement.scrollLeft
	});
	return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
	for (const { element, scrollTop, scrollLeft } of scrollableElements) {
		element.scrollTop = scrollTop;
		element.scrollLeft = scrollLeft;
	}
}
var focusableElements = [
	"input:not([type='hidden']):not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"[tabindex]",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable='false'])"
];
var tabbableElements = [...focusableElements, "[tabindex]:not([tabindex=\"-1\"]):not([disabled])"];
var FOCUSABLE_ELEMENT_SELECTOR = `${focusableElements.join(":not([hidden]),")},[tabindex]:not([disabled]):not([hidden])`;
var TABBABLE_ELEMENT_SELECTOR = tabbableElements.join(":not([hidden]):not([tabindex=\"-1\"]),");
function getAllTabbableIn(container, includeContainer) {
	const tabbableElements2 = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR)).filter(isTabbable);
	if (includeContainer && isTabbable(container)) tabbableElements2.unshift(container);
	tabbableElements2.forEach((element, i) => {
		if (isFrame(element) && element.contentDocument) {
			const frameBody = element.contentDocument.body;
			const allFrameTabbable = getAllTabbableIn(frameBody, false);
			tabbableElements2.splice(i, 1, ...allFrameTabbable);
		}
	});
	return tabbableElements2;
}
function isTabbable(element) {
	return isFocusable(element) && !hasNegativeTabIndex(element);
}
function isFocusable(element) {
	return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && isElementVisible(element);
}
function hasNegativeTabIndex(element) {
	return Number.parseInt(element.getAttribute("tabindex") || "0", 10) < 0;
}
function isElementVisible(element, childElement) {
	return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}
function isStyleVisible(element) {
	if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
	const { display, visibility } = element.style;
	let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
	if (isVisible) {
		if (!element.ownerDocument.defaultView) return isVisible;
		const { getComputedStyle } = element.ownerDocument.defaultView;
		const { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
		isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
	}
	return isVisible;
}
function isAttributeVisible(element, childElement) {
	return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function isElementInScope(element, scope) {
	return scope.some((node) => node.contains(element));
}
function getFocusableTreeWalker(root, opts, scope) {
	const selector = opts?.tabbable ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, { acceptNode(node) {
		if (opts?.from?.contains(node)) return NodeFilter.FILTER_REJECT;
		if (node.matches(selector) && isElementVisible(node) && (!scope || isElementInScope(node, scope)) && (!opts?.accept || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
		return NodeFilter.FILTER_SKIP;
	} });
	if (opts?.from) walker.currentNode = opts.from;
	return walker;
}
function getScrollParent(node) {
	let parentNode = node;
	while (parentNode && !isScrollable(parentNode)) parentNode = parentNode.parentElement;
	return parentNode || document.scrollingElement || document.documentElement;
}
function isScrollable(node) {
	const style = window.getComputedStyle(node);
	return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getEventPoint(event) {
	return [event.clientX, event.clientY];
}
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let inside = false;
	const length = polygon.length;
	for (let l = length, i = 0, j = l - 1; i < l; j = i++) {
		const [xi, yi] = polygon[i];
		const [xj, yj] = polygon[j];
		const [, vy] = polygon[j === 0 ? l - 1 : j - 1] || [0, 0];
		const where = (yi - yj) * (x - xi) - (xi - xj) * (y - yi);
		if (yj < yi) {
			if (y >= yj && y < yi) {
				if (where === 0) return true;
				if (where > 0) if (y === yj) {
					if (y > vy) inside = !inside;
				} else inside = !inside;
			}
		} else if (yi < yj) {
			if (y > yi && y <= yj) {
				if (where === 0) return true;
				if (where < 0) if (y === yj) {
					if (y < vy) inside = !inside;
				} else inside = !inside;
			}
		} else if (y === yi && (x >= xj && x <= xi || x >= xi && x <= xj)) return true;
	}
	return inside;
}
function mergeDefaultProps(defaultProps, props) {
	return mergeProps(defaultProps, props);
}
var transitionsByElement = /* @__PURE__ */ new Map();
var transitionCallbacks = /* @__PURE__ */ new Set();
function setupGlobalEvents() {
	if (typeof window === "undefined" || document.body === null) return;
	const onTransitionStart = (e) => {
		if (!e.target) return;
		let transitions = transitionsByElement.get(e.target);
		if (!transitions) {
			transitions = /* @__PURE__ */ new Set();
			transitionsByElement.set(e.target, transitions);
			e.target.addEventListener("transitioncancel", onTransitionEnd);
		}
		transitions.add(e.propertyName);
	};
	const onTransitionEnd = (e) => {
		if (!e.target) return;
		const properties = transitionsByElement.get(e.target);
		if (!properties) return;
		properties.delete(e.propertyName);
		if (properties.size === 0) {
			e.target.removeEventListener("transitioncancel", onTransitionEnd);
			transitionsByElement.delete(e.target);
		}
		if (transitionsByElement.size === 0) {
			for (const cb of transitionCallbacks) cb();
			transitionCallbacks.clear();
		}
	};
	document.body.addEventListener("transitionrun", onTransitionStart);
	document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") if (document.readyState !== "loading") setupGlobalEvents();
else document.addEventListener("DOMContentLoaded", setupGlobalEvents);
function scrollIntoView(scrollView, element) {
	const offsetX = relativeOffset(scrollView, element, "left");
	const offsetY = relativeOffset(scrollView, element, "top");
	const width = element.offsetWidth;
	const height = element.offsetHeight;
	let x = scrollView.scrollLeft;
	let y = scrollView.scrollTop;
	const maxX = x + scrollView.offsetWidth;
	const maxY = y + scrollView.offsetHeight;
	if (offsetX <= x) x = offsetX;
	else if (offsetX + width > maxX) x += offsetX + width - maxX;
	if (offsetY <= y) y = offsetY;
	else if (offsetY + height > maxY) y += offsetY + height - maxY;
	scrollView.scrollLeft = x;
	scrollView.scrollTop = y;
}
function relativeOffset(ancestor, child, axis) {
	const prop = axis === "left" ? "offsetLeft" : "offsetTop";
	let sum = 0;
	while (child.offsetParent) {
		sum += child[prop];
		if (child.offsetParent === ancestor) break;
		if (child.offsetParent.contains(ancestor)) {
			sum -= ancestor[prop];
			break;
		}
		child = child.offsetParent;
	}
	return sum;
}
function scrollIntoViewport(targetElement, opts) {
	if (document.contains(targetElement)) {
		const root = document.scrollingElement || document.documentElement;
		if (!(window.getComputedStyle(root).overflow === "hidden")) {
			const { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
			targetElement?.scrollIntoView?.({ block: "nearest" });
			const { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
			if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
				opts?.containingElement?.scrollIntoView?.({
					block: "center",
					inline: "center"
				});
				targetElement.scrollIntoView?.({ block: "nearest" });
			}
		} else {
			let scrollParent = getScrollParent(targetElement);
			while (targetElement && scrollParent && targetElement !== root && scrollParent !== root) {
				scrollIntoView(scrollParent, targetElement);
				targetElement = scrollParent;
				scrollParent = getScrollParent(targetElement);
			}
		}
	}
}
var visuallyHiddenStyles = {
	border: "0",
	clip: "rect(0 0 0 0)",
	"clip-path": "inset(50%)",
	height: "1px",
	margin: "0 -1px -1px 0",
	overflow: "hidden",
	padding: "0",
	position: "absolute",
	width: "1px",
	"white-space": "nowrap"
};
function createTagName(ref, fallback) {
	const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
	createEffect(() => {
		setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
	});
	return tagName;
}
function stringOrUndefined(value) {
	return isString(value) ? value : void 0;
}
function Polymorphic(props) {
	const [local, others] = splitProps(props, ["as"]);
	if (!local.as) throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
	return createComponent(Dynamic, mergeProps(others, { get component() {
		return local.as;
	} }));
}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};
__export({}, {
	Button: () => Button$1,
	Root: () => ButtonRoot
});
var BUTTON_INPUT_TYPES = [
	"button",
	"color",
	"file",
	"image",
	"reset",
	"submit"
];
function isButton(element) {
	const tagName = element.tagName.toLowerCase();
	if (tagName === "button") return true;
	if (tagName === "input" && element.type) return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
	return false;
}
function ButtonRoot(props) {
	let ref;
	const [local, others] = splitProps(mergeDefaultProps({ type: "button" }, props), [
		"ref",
		"type",
		"disabled"
	]);
	const tagName = createTagName(() => ref, () => "button");
	const isNativeButton = createMemo(() => {
		const elementTagName = tagName();
		if (elementTagName == null) return false;
		return isButton({
			tagName: elementTagName,
			type: local.type
		});
	});
	const isNativeInput = createMemo(() => {
		return tagName() === "input";
	});
	const isNativeLink = createMemo(() => {
		return tagName() === "a" && false;
	});
	return createComponent(Polymorphic, mergeProps({
		as: "button",
		get type() {
			return memo(() => !!(isNativeButton() || isNativeInput()))() ? local.type : void 0;
		},
		get role() {
			return !isNativeButton() && !isNativeLink() ? "button" : void 0;
		},
		get tabIndex() {
			return !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0;
		},
		get disabled() {
			return memo(() => !!(isNativeButton() || isNativeInput()))() ? local.disabled : void 0;
		},
		get ["aria-disabled"]() {
			return !isNativeButton() && !isNativeInput() && local.disabled ? true : void 0;
		},
		get ["data-disabled"]() {
			return local.disabled ? "" : void 0;
		}
	}, others));
}
var Button$1 = ButtonRoot;
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
/**
* Copyright 2022 Joe Bell. All rights reserved.
*
* This file is licensed to you under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with the
* License. You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
	var _config_compoundVariants;
	if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
	const { variants, defaultVariants } = config;
	const getVariantClassNames = Object.keys(variants).map((variant) => {
		const variantProp = props === null || props === void 0 ? void 0 : props[variant];
		const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
		if (variantProp === null) return null;
		const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
		return variants[variant][variantKey];
	});
	const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
		let [key, value] = param;
		if (value === void 0) return acc;
		acc[key] = value;
		return acc;
	}, {});
	return cx(base, getVariantClassNames, config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
		let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
		return Object.entries(compoundVariantOptions).every((param) => {
			let [key, value] = param;
			return Array.isArray(value) ? value.includes({
				...defaultVariants,
				...propsWithoutUndefined
			}[key]) : {
				...defaultVariants,
				...propsWithoutUndefined
			}[key] === value;
		}) ? [
			...acc,
			cvClass,
			cvClassName
		] : acc;
	}, []), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
	...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let i = 0; i < classGroupIds.length; i++) lookup[classGroupIds[i]] = true;
	return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers, postfixLookupClassGroupIds } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId;
		if (hasPostfixModifier) {
			classGroupId = getClassGroupId(baseClassName.substring(0, maybePostfixModifierPosition));
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	themeGetter.themeKey = key;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		themeContainer,
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				"auto",
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/inline-size
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-inline-size
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-inline-size
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/block-size
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-block-size
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-block-size
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [
				"none",
				themeLeading,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						"",
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-foreground/60 hover:text-foreground"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 px-3 text-xs",
			lg: "h-11 px-8",
			icon: "size-10",
			link: "h-auto p-0 font-normal"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (props) => {
	const [local, others] = splitProps(props, [
		"variant",
		"size",
		"class"
	]);
	return createComponent(ButtonRoot, mergeProps({ get ["class"]() {
		return cn(buttonVariants({
			variant: local.variant,
			size: local.size
		}), local.class);
	} }, others));
};
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
		if (isString(data) || isNumber$1(data)) {
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
function isRTL$1(locale) {
	if (Intl.Locale) {
		const script = new Intl.Locale(locale).maximize().script ?? "";
		return RTL_SCRIPTS.has(script);
	}
	const lang = locale.split("-")[0];
	return RTL_LANGS.has(lang);
}
function getReadingDirection(locale) {
	return isRTL$1(locale) ? "rtl" : "ltr";
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
var _tmpl$$4 = [
	"<option",
	"",
	">",
	"</option>"
];
var _tmpl$2$3 = "<option></option>";
var _tmpl$3$3 = [
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
				return ssr(_tmpl$$4, ssrHydrationKey() + ssrAttribute("value", escape(key, true), false), ssrAttribute("selected", local.selectionManager.isSelected(key), true), escape(item?.textValue));
			}
		});
	};
	createEffect(on(() => local.selectionManager.selectedKeys(), (keys, prevKeys) => {
		if (prevKeys && isSameSelection(keys, prevKeys)) return;
		setIsInternalChangeEvent(true);
	}, { defer: true }));
	return ssr(_tmpl$3$3, ssrHydrationKey(), ssrStyle(visuallyHiddenStyles), ssrAttribute("tabindex", local.selectionManager.isFocused() || local.isOpen ? -1 : 0, false), ssrStyleProperty("font-size:", "16px"), ssrAttribute("required", formControlContext.isRequired(), true), ssrAttribute("disabled", formControlContext.isDisabled(), true) + ssrAttribute("readonly", escape(formControlContext.isReadOnly(), true), false), ssrElement("select", mergeProps({
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
		ssr(_tmpl$2$3),
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
	const isNotSafariMacOS = createMemo(() => !(isMac() && isWebKit$1()));
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
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(minPadding, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement":
						resetPlacement = initialPlacement;
						break;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
			else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = offset$1;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = shift$1;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = flip$1;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = size$1;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide = hide$1;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = arrow$1;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
var _tmpl$$3 = [
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
		return ssr(_tmpl$$3, ssrHydrationKey(), ssrAttribute("transform", escape(rotate(), true), false));
	} }));
}
function createComputedStyle(element) {
	const [style, setStyle] = createSignal();
	createEffect(() => {
		const el = element();
		el && setStyle(getWindow$1(el).getComputedStyle(el));
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
var _tmpl$$2 = ["<path", " d=\"M8 9l4 -4l4 4\"></path>"];
var _tmpl$2$2 = ["<path", " d=\"M16 15l-4 4l-4 -4\"></path>"];
var _tmpl$3$2 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M5 12l5 5l10 -10\"></path></svg>"];
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
				return [ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$2$2, ssrHydrationKey())];
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
				return ssr(_tmpl$3$2, ssrHydrationKey());
			}
		}), createComponent(ListboxItemLabel, { get children() {
			return local.children;
		} })];
	} }));
};
var dialog_exports = {};
__export(dialog_exports, {
	CloseButton: () => DialogCloseButton,
	Content: () => DialogContent,
	Description: () => DialogDescription,
	Dialog: () => Dialog,
	Overlay: () => DialogOverlay,
	Portal: () => DialogPortal,
	Root: () => DialogRoot,
	Title: () => DialogTitle,
	Trigger: () => DialogTrigger,
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
function DialogContent(props) {
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
function DialogDescription(props) {
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
function DialogOverlay(props) {
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
function DialogPortal(props) {
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
function DialogTitle(props) {
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
function DialogTrigger(props) {
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
var Dialog = Object.assign(DialogRoot, {
	CloseButton: DialogCloseButton,
	Content: DialogContent,
	Description: DialogDescription,
	Overlay: DialogOverlay,
	Portal: DialogPortal,
	Title: DialogTitle,
	Trigger: DialogTrigger
});
__export({}, {
	AlertDialog: () => AlertDialog$1,
	CloseButton: () => DialogCloseButton,
	Content: () => AlertDialogContent$1,
	Description: () => DialogDescription,
	Overlay: () => DialogOverlay,
	Portal: () => DialogPortal,
	Root: () => DialogRoot,
	Title: () => DialogTitle,
	Trigger: () => DialogTrigger
});
function AlertDialogContent$1(props) {
	return createComponent(DialogContent, mergeProps({ role: "alertdialog" }, props));
}
var AlertDialog$1 = Object.assign(DialogRoot, {
	CloseButton: DialogCloseButton,
	Content: AlertDialogContent$1,
	Description: DialogDescription,
	Overlay: DialogOverlay,
	Portal: DialogPortal,
	Title: DialogTitle,
	Trigger: DialogTrigger
});
var _tmpl$$1 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
var _tmpl$2$1 = ["<span", " class=\"sr-only\">Close</span>"];
var _tmpl$3$1 = [
	"<div",
	">",
	"</div>"
];
var AlertDialog = DialogRoot;
var AlertDialogTrigger = DialogTrigger;
var AlertDialogPortal = DialogPortal;
var AlertDialogOverlay = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogOverlay, mergeProps({ get ["class"]() {
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
					return [ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey())];
				}
			})];
		} }))];
	} });
};
var AlertDialogTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogTitle, mergeProps({ get ["class"]() {
		return cn("text-lg font-semibold", local.class);
	} }, others));
};
var AlertDialogDescription = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(DialogDescription, mergeProps({ get ["class"]() {
		return cn("text-sm text-muted-foreground", local.class);
	} }, others));
};
var AlertDialogHeader = (props) => ssr(_tmpl$3$1, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col space-y-2 text-center sm:text-left", props.class), true), false), escape(props.children));
var AlertDialogFooter = (props) => ssr(_tmpl$3$1, ssrHydrationKey() + ssrAttribute("class", escape(cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class), true), false), escape(props.children));
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
		const win = getWindow$1(ref);
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
var _tmpl$ = [
	"<ol",
	" class=\"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]\">",
	"</ol>"
];
var _tmpl$2 = [
	"<div",
	" class=\"grid gap-1\">",
	"</div>"
];
var _tmpl$3 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"size-4\"><path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path></svg>"];
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
			return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
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
						return [ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(ToastTitle, { get children() {
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
		return ssr(_tmpl$3, ssrHydrationKey());
	} }));
};
var ToastTitle = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return createComponent(ToastTitle$1, mergeProps({ get ["class"]() {
		return cn("text-sm font-semibold", local.class);
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
//#endregion
export { createControllableBooleanSignal as $, FormControlErrorMessage as A, scrollIntoViewport as At, SelectValue as B, DialogTrigger as C, index_default$1 as Ct, FORM_CONTROL_PROP_NAMES as D, mergeDefaultProps as Dt, FORM_CONTROL_FIELD_PROP_NAMES as E, isWebKit$1 as Et, Select as F, asArray as G, __export as H, SelectContent as I, cn as J, callHandler as K, SelectHiddenSelect as L, Polymorphic as M, useFormControlContext as Mt, Popper as N, useLocale as Nt, FormControlContext as O, noop$1 as Ot, PopperArrow as P, visuallyHiddenStyles as Pt, createControllableArraySignal as Q, SelectItem as R, DialogTitle as S, index_default as St, EventKey as T, isPointInPolygon as Tt, access$1 as U, Toaster as V, addItemToArray as W, composeEventHandlers as X, combineStyle as Y, contains$1 as Z, DialogContent as _, getDocument as _t, AlertDialogCancel as a, createFormResetListener as at, DialogPortal as b, getWindow$1 as bt, AlertDialogFooter as c, createListState as ct, AlertDialogTrigger as d, createSelectableItem as dt, createControllableSignal as et, AlertTitle as f, createSelectableList as ft, DialogCloseButton as g, focusWithoutScrolling as gt, ButtonRoot as h, filterNonNullable as ht, AlertDialogAction as i, createFormControlField as it, FormControlLabel as j, toast as jt, FormControlDescription as k, removeItemFromArray as kt, AlertDialogHeader as l, createRegisterId as lt, Button as m, dialog_exports as mt, AlertDescription as n, createFocusScope as nt, AlertDialogContent as o, createGenerateId as ot, Badge as p, createTagName as pt, chain as q, AlertDialog as r, createFormControl as rt, AlertDialogDescription as s, createHideOutside as st, Alert as t, createDisclosureState as tt, AlertDialogTitle as u, createSelectableCollection as ut, DialogDescription as v, getEventPoint as vt, DismissableLayer as w, isFunction as wt, DialogRoot as x, handleDiffArray as xt, DialogOverlay as y, getFocusableTreeWalker as yt, SelectTrigger as z };
