import { r as setFunctionName } from "./ssr.mjs";
import { X as catchError, it as createResource, yt as untrack } from "../_libs/@solid-primitives/event-listener+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/createAsync-BHIljAf5.js
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
