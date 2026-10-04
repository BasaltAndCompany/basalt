import { H as $TRACK, at as createSignal, dt as onCleanup, it as createRoot, nt as createMemo, vt as untrack } from "./@solid-primitives/event-listener+[...].mjs";
//#region node_modules/@solid-primitives/keyed/dist/index.js
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
//#endregion
export { Key as t };
