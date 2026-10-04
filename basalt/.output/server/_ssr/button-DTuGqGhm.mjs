import { Q as createComponent, _ as memo, at as createSignal, gt as splitProps, l as Dynamic, lt as mergeProps, nt as createMemo, tt as createEffect } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/button-DTuGqGhm.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
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
function isNumber(value) {
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
function contains(parent, child) {
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
function getWindow(node) {
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
function isWebKit() {
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
function isCtrlKey(e) {
	if (isMac()) return e.metaKey && !e.ctrlKey;
	return e.ctrlKey && !e.metaKey;
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
function noop() {}
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
//#endregion
export { mergeDefaultProps as A, isFocusable as C, isPointInPolygon as D, isNumber as E, visuallyHiddenStyles as F, removeItemFromArray as M, scrollIntoView as N, isString as O, scrollIntoViewport as P, isCtrlKey as S, isMac as T, getDocument as _, __export as a, getWindow as b, callHandler as c, contains as d, createGenerateId as f, getAllTabbableIn as g, getActiveElement as h, Polymorphic as i, noop as j, isWebKit as k, cn as l, focusWithoutScrolling as m, ButtonRoot as n, addItemToArray as o, createTagName as p, EventKey as r, buttonVariants as s, Button as t, composeEventHandlers as u, getEventPoint as v, isFunction as w, isAppleDevice as x, getFocusableTreeWalker as y };
