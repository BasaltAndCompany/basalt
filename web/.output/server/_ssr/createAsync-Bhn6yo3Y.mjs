import { r as setFunctionName } from "./ssr.mjs";
import { $ as untrack, A as catchError, R as createResource } from "../_libs/solid-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/createAsync-Bhn6yo3Y.js
/**
* This is mock of the eventual Solid 2.0 primitive. It is not fully featured.
*/
function createAsync(fn, options) {
	let resource;
	let prev = () => !resource || resource.state === "unresolved" ? void 0 : resource.latest;
	[resource] = createResource(() => subFetch(fn, catchError(() => untrack(prev), () => void 0)), (v) => v, options);
	const resultAccessor = () => resource();
	if (options?.name) setFunctionName(resultAccessor, options.name);
	Object.defineProperty(resultAccessor, "latest", { get() {
		return resource.latest;
	} });
	return resultAccessor;
}
function subFetch(fn, prev) {
	return fn(prev);
}
//#endregion
export { createAsync as t };
