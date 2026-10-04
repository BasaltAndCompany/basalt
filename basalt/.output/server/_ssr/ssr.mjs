import { l as FastURL, s as FastResponse } from "../_libs/h3+rou3+srvx.mjs";
import { A as O, B as cu, C as ssrElement, D as useAssets, F as l, I as le, K as Show, L as oe, M as de, N as i, O as H, P as j, Q as createComponent, R as ye, S as ssrAttribute, U as ErrorBoundary, V as fu, X as catchError, Y as batch, Z as children, _t as startTransition, at as createSignal, b as renderToString, ct as lazy, d as HydrationScript, dt as onCleanup, et as createContext, f as NoHydration, g as getRequestEvent, h as escape, ht as sharedConfig, it as createRoot, j as Q, k as M, lt as mergeProps, mt as runWithOwner, nt as createMemo, ot as createUniqueId, pt as resetErrorBoundaries, q as Suspense, rt as createRenderEffect, st as getOwner, u as Hydration, ut as on, vt as untrack, w as ssrHydrationKey, x as ssr, y as renderToStream, yt as useContext, z as L } from "../_libs/@solid-primitives/event-listener+[...].mjs";
import { t as provideRequestEvent } from "../_libs/solid-js.mjs";
import { t as join } from "../_libs/pathe.mjs";
import { t as createRouter } from "../_libs/radix3.mjs";
import { i as findRoute, n as addRoute, r as createRouter$1, t as NullProtoObj } from "../_libs/rou3.mjs";
//#region node_modules/.nitro/vite/services/ssr/index.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var clientViteManifest = {
	"_button-iDscz4pr.js": {
		"file": "_build/assets/button-iDscz4pr.js",
		"name": "button",
		"imports": ["_web-DbjINu9I.js"]
	},
	"_separator-CzDLK9Zz.js": {
		"file": "_build/assets/separator-CzDLK9Zz.js",
		"name": "separator",
		"imports": ["_web-DbjINu9I.js", "_button-iDscz4pr.js"]
	},
	"_site-state-CIUA0Awq.js": {
		"file": "_build/assets/site-state-CIUA0Awq.js",
		"name": "site-state"
	},
	"_web-DbjINu9I.js": {
		"file": "_build/assets/web-DbjINu9I.js",
		"name": "web"
	},
	"node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-ext-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-latin-ext-opsz-normal-CoJBavOu.woff2",
		"src": "node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-ext-opsz-normal.woff2"
	},
	"node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2",
		"src": "node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2"
	},
	"node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-math-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-math-opsz-normal-CbZAXtrh.woff2",
		"src": "node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-math-opsz-normal.woff2"
	},
	"node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-symbols-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-symbols-opsz-normal-d21etpfE.woff2",
		"src": "node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-symbols-opsz-normal.woff2"
	},
	"node_modules/@fontsource-variable/geist/files/geist-cyrillic-ext-wght-normal.woff2": {
		"file": "_build/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2",
		"src": "node_modules/@fontsource-variable/geist/files/geist-cyrillic-ext-wght-normal.woff2"
	},
	"node_modules/@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2": {
		"file": "_build/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2",
		"src": "node_modules/@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2"
	},
	"node_modules/@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2": {
		"file": "_build/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2",
		"src": "node_modules/@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2"
	},
	"node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2": {
		"file": "_build/assets/geist-latin-wght-normal-BgDaEnEv.woff2",
		"src": "node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2"
	},
	"node_modules/@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2": {
		"file": "_build/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2",
		"src": "node_modules/@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2"
	},
	"src/entry-client.tsx": {
		"file": "_build/assets/entry-client-CtQ2Goy4.js",
		"name": "entry-client",
		"src": "src/entry-client.tsx",
		"isEntry": true,
		"imports": ["_web-DbjINu9I.js"],
		"dynamicImports": [
			"src/routes/index.tsx?pick=Site&pick=default&pick=$css",
			"src/routes/footage.tsx?pick=default&pick=$css",
			"src/routes/ui.tsx?pick=default&pick=$css"
		],
		"css": ["_build/assets/entry-client-v1jTo3s-.css"],
		"assets": [
			"_build/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2",
			"_build/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2",
			"_build/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2",
			"_build/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2",
			"_build/assets/geist-latin-wght-normal-BgDaEnEv.woff2",
			"_build/assets/bodoni-moda-math-opsz-normal-CbZAXtrh.woff2",
			"_build/assets/bodoni-moda-symbols-opsz-normal-d21etpfE.woff2",
			"_build/assets/bodoni-moda-latin-ext-opsz-normal-CoJBavOu.woff2",
			"_build/assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2"
		]
	},
	"src/routes/footage.tsx?pick=default&pick=$css": {
		"file": "_build/assets/footage-DpgEofqR.js",
		"name": "footage",
		"src": "src/routes/footage.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-DbjINu9I.js",
			"_button-iDscz4pr.js",
			"_site-state-CIUA0Awq.js",
			"_separator-CzDLK9Zz.js"
		]
	},
	"src/routes/index.tsx?pick=Site&pick=default&pick=$css": {
		"file": "_build/assets/index-DeN27pWK.js",
		"name": "index",
		"src": "src/routes/index.tsx?pick=Site&pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-DbjINu9I.js",
			"_button-iDscz4pr.js",
			"_site-state-CIUA0Awq.js"
		]
	},
	"src/routes/ui.tsx?pick=default&pick=$css": {
		"file": "_build/assets/ui-BhZCkuPf.js",
		"name": "ui",
		"src": "src/routes/ui.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-DbjINu9I.js",
			"_button-iDscz4pr.js",
			"_separator-CzDLK9Zz.js"
		]
	}
};
function getSsrProdManifest() {
	const viteManifest = clientViteManifest;
	return {
		path(id) {
			if (id.startsWith("./")) id = id.slice(2);
			const viteManifestEntry = clientViteManifest[id];
			if (!viteManifestEntry) throw new Error(`No entry found in vite manifest for '${id}'`);
			return join("/", viteManifestEntry.file);
		},
		async getAssets(id) {
			if (id.startsWith("./")) id = id.slice(2);
			return createHtmlTagsForAssets(findAssetsInViteManifest(clientViteManifest, id));
		},
		async json() {
			const json = {};
			const entryKeys = Object.keys(viteManifest).filter((id) => viteManifest[id]?.isEntry || viteManifest[id]?.isDynamicEntry).map((id) => id);
			for (const entryKey of entryKeys) json[entryKey] = {
				output: join("/", viteManifest[entryKey].file),
				assets: await this.getAssets(entryKey)
			};
			return json;
		}
	};
}
function createHtmlTagsForAssets(assets) {
	return assets.filter((asset) => asset.endsWith(".css") || asset.endsWith(".js") || asset.endsWith(".ts") || asset.endsWith(".mjs")).map((asset) => ({
		tag: "link",
		attrs: {
			href: "/" + asset,
			key: asset,
			...asset.endsWith(".css") ? { rel: "stylesheet" } : { rel: "modulepreload" }
		}
	}));
}
var entryId = "./src/entry-client.tsx".slice(2);
var entryImports = void 0;
function findAssetsInViteManifest(manifest, id, assetMap = /* @__PURE__ */ new Map(), stack = []) {
	if (stack.includes(id)) return [];
	const cached = assetMap.get(id);
	if (cached) return cached;
	const chunk = manifest[id];
	if (!chunk) return [];
	if (!entryImports) entryImports = [entryId, ...manifest[entryId]?.imports ?? []];
	const excludeEntryImports = id !== entryId;
	const assets = chunk.css?.filter(Boolean) || [];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			const importId = chunk.imports[i];
			if (!importId || excludeEntryImports && entryImports.includes(importId)) continue;
			assets.push(...findAssetsInViteManifest(manifest, importId, assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);
	return all;
}
function getSsrManifest(target) {
	return getSsrProdManifest();
}
var _tmpl$$4 = " ";
var assetMap = {
	style: (props) => ssrElement("style", props.attrs, () => props.children, true),
	link: (props) => ssrElement("link", props.attrs, void 0, true),
	script: (props) => {
		return props.attrs.src ? ssrElement("script", mergeProps(() => props.attrs, { get id() {
			return props.key;
		} }), () => ssr(_tmpl$$4), true) : null;
	},
	noscript: (props) => ssrElement("noscript", props.attrs, () => escape(props.children), true)
};
function renderAsset(asset, nonce) {
	let { tag, attrs: { key, ...attrs } = { key: void 0 }, children } = asset;
	return assetMap[tag]({
		attrs: {
			...attrs,
			nonce
		},
		key,
		children
	});
}
var REGISTRY = Symbol("assetRegistry");
var NOOP = () => "";
var keyAttrs = [
	"href",
	"rel",
	"data-vite-dev-id"
];
var getEntity = (registry, asset) => {
	let key = asset.tag;
	for (const k of keyAttrs) {
		if (!(k in asset.attrs)) continue;
		key += `[${k}='${asset.attrs[k]}']`;
	}
	return registry[key] ??= {
		key,
		consumers: 0
	};
};
var useAssets$1 = (assets, nonce) => {
	if (!assets.length) return;
	const registry = getRequestEvent().locals[REGISTRY] ??= {};
	const ssrRequestAssets = sharedConfig.context?.assets;
	const cssKeys = [];
	for (const asset of assets) {
		const entity = getEntity(registry, asset);
		if (asset.tag === "link" && asset.attrs.rel === "stylesheet" || asset.tag === "style") cssKeys.push(entity.key);
		entity.consumers++;
		if (entity.consumers > 1) continue;
		useAssets(() => renderAsset(asset, nonce));
		entity.ssrIdx = ssrRequestAssets.length - 1;
	}
	onCleanup(() => {
		for (const key of cssKeys) {
			const entity = registry[key];
			entity.consumers--;
			if (entity.consumers != 0) continue;
			ssrRequestAssets.splice(entity.ssrIdx, 1, NOOP);
			delete registry[key];
		}
	});
};
var assetsById = {};
var getAssets = async (id) => {
	if (assetsById[id]) return assetsById[id];
	const assets = await getSsrManifest("client").getAssets(id);
	assetsById[id] = assets;
	return assets;
};
var withAssets = function(fn) {
	const wrapper = async () => {
		const mod = await fn();
		const id = mod.id$$;
		if (!id) return mod;
		if (!mod.default) {
			console.error(`Module ${id} does not export default`);
			return { default: () => [] };
		}
		const assets = await getAssets(id);
		if (!assets.length) return mod;
		return { default: (props) => {
			const { nonce } = getRequestEvent();
			useAssets$1(assets, nonce);
			return mod.default(props);
		} };
	};
	return wrapper;
};
var lazy$1 = (fn) => lazy(withAssets(fn));
var MetaContext = createContext();
var cascadingTags = ["title", "meta"];
var titleTagProperties = [];
var metaTagProperties = [
	"name",
	"http-equiv",
	"content",
	"charset",
	"media"
].concat(["property"]);
var getTagKey = (tag, properties) => {
	const tagProps = Object.fromEntries(Object.entries(tag.props).filter(([k]) => properties.includes(k)).sort());
	if (Object.hasOwn(tagProps, "name") || Object.hasOwn(tagProps, "property")) {
		tagProps.name = tagProps.name || tagProps.property;
		delete tagProps.property;
	}
	return tag.tag + JSON.stringify(tagProps);
};
function initServerProvider() {
	const tags = [];
	useAssets(() => ssr(renderTags(tags)));
	return {
		addTag(tagDesc) {
			if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
				const properties = tagDesc.tag === "title" ? titleTagProperties : metaTagProperties;
				const tagDescKey = getTagKey(tagDesc, properties);
				const index = tags.findIndex((prev) => prev.tag === tagDesc.tag && getTagKey(prev, properties) === tagDescKey);
				if (index !== -1) tags.splice(index, 1);
			}
			tags.push(tagDesc);
			return tags.length;
		},
		removeTag(tag, index) {}
	};
}
var MetaProvider = (props) => {
	const actions = initServerProvider();
	return createComponent(MetaContext.Provider, {
		value: actions,
		get children() {
			return props.children;
		}
	});
};
var MetaTag = (tag, props, setting) => {
	useHead({
		tag,
		props,
		setting,
		id: createUniqueId(),
		get name() {
			return props.name || props.property;
		}
	});
	return null;
};
function useHead(tagDesc) {
	const c = useContext(MetaContext);
	if (!c) throw new Error("<MetaProvider /> should be in the tree");
	createRenderEffect(() => {
		const index = c.addTag(tagDesc);
		onCleanup(() => c.removeTag(tagDesc, index));
	});
}
function renderTags(tags) {
	return tags.map((tag) => {
		const props = Object.keys(tag.props).map((k) => k === "children" ? "" : ` ${k}="${escape(tag.props[k], true)}"`).join("");
		let children = tag.props.children;
		if (Array.isArray(children)) children = children.join("");
		if (tag.setting?.close) return `<${tag.tag} data-sm="${tag.id}"${props}>${tag.setting?.escape ? escape(children) : children || ""}</${tag.tag}>`;
		return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
	}).join("");
}
var Title = (props) => MetaTag("title", props, {
	escape: true,
	close: true
});
function createBeforeLeave() {
	let listeners = /* @__PURE__ */ new Set();
	function subscribe(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}
	let ignore = false;
	function confirm(to, options) {
		if (ignore) return !(ignore = false);
		const e = {
			to,
			options,
			defaultPrevented: false,
			preventDefault: () => e.defaultPrevented = true
		};
		for (const l of listeners) l.listener({
			to,
			options,
			get defaultPrevented() {
				return e.defaultPrevented;
			},
			preventDefault: e.preventDefault,
			from: l.location,
			retry: (force) => {
				force && (ignore = true);
				l.navigate(to, {
					...options,
					resolve: false
				});
			}
		});
		return !e.defaultPrevented;
	}
	return {
		subscribe,
		confirm
	};
}
var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
var trimPathRegex = /^\/+|(\/)\/+$/g;
var mockBase = "http://sr";
function normalizePath(path, omitSlash = false) {
	const s = path.replace(trimPathRegex, "$1");
	return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
	if (hasSchemeRegex.test(path)) return;
	const basePath = normalizePath(base);
	const fromPath = from && normalizePath(from);
	let result = "";
	if (!fromPath || path.startsWith("/")) result = basePath;
	else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) result = basePath + fromPath;
	else result = fromPath;
	return (result || "/") + normalizePath(path, !result);
}
function joinPaths(from, to) {
	return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
	const params = {};
	url.searchParams.forEach((value, key) => {
		if (key in params) if (Array.isArray(params[key])) params[key].push(value);
		else params[key] = [params[key], value];
		else params[key] = value;
	});
	return params;
}
function createMatcher$1(path, partial, matchFilters) {
	const [pattern, splat] = path.split("/*", 2);
	const segments = pattern.split("/").filter(Boolean);
	const len = segments.length;
	return (location) => {
		const locSegments = location.split("/");
		if (locSegments[0] === "") locSegments.shift();
		if (locSegments.length && locSegments[locSegments.length - 1] === "") locSegments.pop();
		if (locSegments.includes("")) return null;
		const lenDiff = locSegments.length - len;
		if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) return null;
		const match = {
			path: len ? "" : "/",
			params: {}
		};
		const matchFilter = (s) => matchFilters === void 0 ? void 0 : matchFilters[s];
		for (let i = 0; i < len; i++) {
			const segment = segments[i];
			const dynamic = segment[0] === ":";
			const locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase();
			const key = dynamic ? segment.slice(1) : segment.toLowerCase();
			if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment;
			else if (dynamic || !matchSegment(locSegment, key)) return null;
			match.path += `/${locSegment}`;
		}
		if (splat) {
			const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
			if (matchSegment(remainder, matchFilter(splat))) match.params[splat] = remainder;
			else return null;
		}
		return match;
	};
}
function matchSegment(input, filter) {
	const isEqual = (s) => s === input;
	if (filter === void 0) return true;
	else if (typeof filter === "string") return isEqual(filter);
	else if (typeof filter === "function") return filter(input);
	else if (Array.isArray(filter)) return filter.some(isEqual);
	else if (filter instanceof RegExp) return filter.test(input);
	return false;
}
function scoreRoute(route) {
	const [pattern, splat] = route.pattern.split("/*", 2);
	const segments = pattern.split("/").filter(Boolean);
	return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === void 0 ? 0 : 1));
}
function createMemoObject(fn) {
	const map = /* @__PURE__ */ new Map();
	const owner = getOwner();
	return new Proxy({}, {
		get(_, property) {
			if (!map.has(property)) runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
			return map.get(property)();
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true
			};
		},
		ownKeys() {
			return Reflect.ownKeys(fn());
		},
		has(_, property) {
			return property in fn();
		}
	});
}
function expandOptionals(pattern) {
	let match = /(\/?\:[^\/]+)\?/.exec(pattern);
	if (!match) return [pattern];
	let prefix = pattern.slice(0, match.index);
	let suffix = pattern.slice(match.index + match[0].length);
	const prefixes = [prefix, prefix += match[1]];
	while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
		prefixes.push(prefix += match[1]);
		suffix = suffix.slice(match[0].length);
	}
	return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map((p) => p + expansion)], []);
}
var MAX_REDIRECTS = 100;
/** Consider this API opaque and internal. It is likely to change in the future. */
var RouterContextObj = createContext();
var RouteContextObj = createContext();
var encodeSegment = (s) => encodeURIComponent(s).replace(/%(2B|40|3A|24|26|2C|3B|3D)/g, (m) => decodeURIComponent(m));
function createRoutes$1(routeDef, base = "") {
	const { component, preload, load, children, info } = routeDef;
	const isLeaf = !children || Array.isArray(children) && !children.length;
	const shared = {
		key: routeDef,
		component,
		preload: preload || load,
		info
	};
	return asArray(routeDef.path).reduce((acc, originalPath) => {
		for (const expandedPath of expandOptionals(originalPath)) {
			const path = joinPaths(base, expandedPath);
			let pattern = isLeaf ? path : path.split("/*", 1)[0];
			pattern = pattern.split("/").map((s) => {
				return s.startsWith(":") || s.startsWith("*") ? s : encodeSegment(s);
			}).join("/");
			acc.push({
				...shared,
				originalPath,
				pattern,
				matcher: createMatcher$1(pattern, !isLeaf, routeDef.matchFilters)
			});
		}
		return acc;
	}, []);
}
function createBranch(routes, index = 0) {
	return {
		routes,
		score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
		matcher(location) {
			const matches = [];
			for (let i = routes.length - 1; i >= 0; i--) {
				const route = routes[i];
				const match = route.matcher(location);
				if (!match) return null;
				matches.unshift({
					...match,
					route
				});
			}
			return matches;
		}
	};
}
function asArray(value) {
	return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", stack = [], branches = []) {
	const routeDefs = asArray(routeDef);
	for (let i = 0, len = routeDefs.length; i < len; i++) {
		const def = routeDefs[i];
		if (def && typeof def === "object") {
			if (!def.hasOwnProperty("path")) def.path = "";
			const routes = createRoutes$1(def, base);
			for (const route of routes) {
				stack.push(route);
				const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
				if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches);
				else {
					const branch = createBranch([...stack], branches.length);
					branches.push(branch);
				}
				stack.pop();
			}
		}
	}
	return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches(branches, location) {
	for (let i = 0, len = branches.length; i < len; i++) {
		const match = branches[i].matcher(location);
		if (match) return match;
	}
	return [];
}
function createLocation(path, state, queryWrapper) {
	const origin = new URL(mockBase);
	const url = createMemo((prev) => {
		const path_ = path();
		try {
			return new URL(path_[0] === "/" ? mockBase + path_ : path_, origin);
		} catch (err) {
			console.error(`Invalid path ${path_}`);
			return prev;
		}
	}, origin, { equals: (a, b) => a.href === b.href });
	const pathname = createMemo(() => url().pathname);
	const search = createMemo(() => url().search, true);
	const hash = createMemo(() => url().hash);
	const key = () => "";
	const queryFn = on(search, () => extractSearchParams(url()));
	return {
		get pathname() {
			return pathname();
		},
		get search() {
			return search();
		},
		get hash() {
			return hash();
		},
		get state() {
			return state();
		},
		get key() {
			return key();
		},
		query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
	};
}
var intent;
function getIntent() {
	return intent;
}
function createRouterContext(integration, branches, getContext, options = {}) {
	const { signal: [source, setSource], utils = {} } = integration;
	const parsePath = utils.parsePath || ((p) => p);
	const renderPath = utils.renderPath || ((p) => p);
	const beforeLeave = utils.beforeLeave || createBeforeLeave();
	const basePath = resolvePath("", options.base || "");
	if (basePath === void 0) throw new Error(`${basePath} is not a valid base path`);
	else if (basePath && !source().value) setSource({
		value: basePath,
		replace: true,
		scroll: false
	});
	const [isRouting, setIsRouting] = createSignal(false);
	let lastTransitionTarget;
	const transition = (newIntent, newTarget) => {
		if (newTarget.value === reference() && newTarget.state === state()) return;
		if (lastTransitionTarget === void 0) setIsRouting(true);
		intent = newIntent;
		lastTransitionTarget = newTarget;
		startTransition(() => {
			if (lastTransitionTarget !== newTarget) return;
			setReference(lastTransitionTarget.value);
			setState(lastTransitionTarget.state);
			resetErrorBoundaries();
		}).finally(() => {
			if (lastTransitionTarget !== newTarget) return;
			batch(() => {
				intent = void 0;
				if (newIntent === "navigate") navigateEnd(lastTransitionTarget);
				setIsRouting(false);
				lastTransitionTarget = void 0;
			});
		});
	};
	const [reference, setReference] = createSignal(source().value);
	const [state, setState] = createSignal(source().state);
	const location = createLocation(reference, state, utils.queryWrapper);
	const referrers = [];
	const submissions = createSignal(initFromFlash());
	const matches = createMemo(() => {
		if (typeof options.transformUrl === "function") return getRouteMatches(branches(), options.transformUrl(location.pathname));
		return getRouteMatches(branches(), location.pathname);
	});
	const buildParams = () => {
		const m = matches();
		const params = {};
		for (let i = 0; i < m.length; i++) Object.assign(params, m[i].params);
		return params;
	};
	const params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams);
	const baseRoute = {
		pattern: basePath,
		path: () => basePath,
		outlet: () => null,
		resolvePath(to) {
			return resolvePath(basePath, to);
		}
	};
	createRenderEffect(on(source, (source) => transition("native", source), { defer: true }));
	return {
		base: baseRoute,
		location,
		params,
		isRouting,
		get pendingTarget() {
			return lastTransitionTarget;
		},
		renderPath,
		parsePath,
		navigatorFactory,
		matches,
		beforeLeave,
		preloadRoute,
		singleFlight: options.singleFlight === void 0 ? true : options.singleFlight,
		submissions
	};
	function navigateFromRoute(route, to, options) {
		untrack(() => {
			if (typeof to === "number") {
				if (!to) {} else if (utils.go) utils.go(to);
				else console.warn("Router integration does not support relative routing");
				return;
			}
			const queryOnly = !to || to[0] === "?";
			const { replace, resolve, scroll, state: nextState } = {
				replace: false,
				resolve: !queryOnly,
				scroll: true,
				...options
			};
			const resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
			if (resolvedTo === void 0) throw new Error(`Path '${to}' is not a routable path`);
			else if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
			if (resolvedTo !== reference() || nextState !== state()) {
				const e = getRequestEvent();
				e && (e.response = {
					status: 302,
					headers: new Headers({ Location: resolvedTo })
				});
				setSource({
					value: resolvedTo,
					replace,
					scroll,
					state: nextState
				});
			}
		});
	}
	function navigatorFactory(route) {
		route = route || useContext(RouteContextObj) || baseRoute;
		return (to, options) => navigateFromRoute(route, to, options);
	}
	function navigateEnd(next) {
		const first = referrers[0];
		if (first) {
			setSource({
				...next,
				replace: first.replace,
				scroll: first.scroll
			});
			referrers.length = 0;
		}
	}
	function preloadRoute(url, preloadData) {
		const matches = getRouteMatches(branches(), url.pathname);
		const prevIntent = intent;
		intent = "preload";
		for (let match in matches) {
			const { route, params } = matches[match];
			route.component && route.component.preload && route.component.preload();
			const { preload } = route;
			preloadData && preload && runWithOwner(getContext(), () => preload({
				params,
				location: {
					pathname: url.pathname,
					search: url.search,
					hash: url.hash,
					query: extractSearchParams(url),
					state: null,
					key: ""
				},
				intent: "preload"
			}));
		}
		intent = prevIntent;
	}
	function initFromFlash() {
		const e = getRequestEvent();
		return e && e.router && e.router.submission ? [e.router.submission] : [];
	}
}
function createRouteContext(router, parent, outlet, match) {
	const { base, location, params } = router;
	const { pattern, component, preload } = match().route;
	const path = createMemo(() => match().path);
	component && component.preload && component.preload();
	const data = preload ? preload({
		params,
		location,
		intent: intent || "initial"
	}) : void 0;
	return {
		parent,
		pattern,
		path,
		outlet: () => component ? createComponent(component, {
			params,
			location,
			data,
			get children() {
				return outlet();
			}
		}) : outlet(),
		resolvePath(to) {
			return resolvePath(base.path(), to, path());
		}
	};
}
var createRouterComponent = (router) => (props) => {
	const { base } = props;
	const routeDefs = children(() => props.children);
	const branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
	let context;
	const routerState = createRouterContext(router, branches, () => context, {
		base,
		singleFlight: props.singleFlight,
		transformUrl: props.transformUrl
	});
	router.create && router.create(routerState);
	return createComponent(RouterContextObj.Provider, {
		value: routerState,
		get children() {
			return createComponent(Root, {
				routerState,
				get root() {
					return props.root;
				},
				get preload() {
					return props.rootPreload || props.rootLoad;
				},
				get children() {
					return [(context = getOwner()) && null, createComponent(Routes, {
						routerState,
						get branches() {
							return branches();
						}
					})];
				}
			});
		}
	});
};
function Root(props) {
	const location = props.routerState.location;
	const params = props.routerState.params;
	const data = createMemo(() => props.preload && untrack(() => {
		props.preload({
			params,
			location,
			intent: getIntent() || "initial"
		});
	}));
	return createComponent(Show, {
		get when() {
			return props.root;
		},
		keyed: true,
		get fallback() {
			return props.children;
		},
		children: (Root) => createComponent(Root, {
			params,
			location,
			get data() {
				return data();
			},
			get children() {
				return props.children;
			}
		})
	});
}
function Routes(props) {
	{
		const e = getRequestEvent();
		if (e && e.router && e.router.dataOnly) {
			dataOnly(e, props.routerState, props.branches);
			return;
		}
		e && ((e.router || (e.router = {})).matches || (e.router.matches = props.routerState.matches().map(({ route, path, params }) => ({
			path: route.originalPath,
			pattern: route.pattern,
			match: path,
			params,
			info: route.info
		}))));
	}
	const disposers = [];
	let root;
	onCleanup(() => disposers.forEach((dispose) => dispose()));
	const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
		let equal = prevMatches && nextMatches.length === prevMatches.length;
		const next = [];
		for (let i = 0, len = nextMatches.length; i < len; i++) {
			const prevMatch = prevMatches && prevMatches[i];
			const nextMatch = nextMatches[i];
			if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) next[i] = prev[i];
			else {
				equal = false;
				if (disposers[i]) disposers[i]();
				createRoot((dispose) => {
					disposers[i] = dispose;
					next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => {
						const routeMatches = props.routerState.matches();
						return routeMatches[i] ?? routeMatches[0];
					});
				});
			}
		}
		disposers.splice(nextMatches.length).forEach((dispose) => dispose());
		if (prev && equal) return prev;
		root = next[0];
		return next;
	}));
	return createOutlet(() => routeStates() && root)();
}
var createOutlet = (child) => {
	return () => createComponent(Show, {
		get when() {
			return child();
		},
		keyed: true,
		children: (child) => createComponent(RouteContextObj.Provider, {
			value: child,
			get children() {
				return child.outlet();
			}
		})
	});
};
function dataOnly(event, routerState, branches) {
	const url = new URL(event.request.url);
	const prevMatches = getRouteMatches(branches, new URL(event.router.previousUrl || event.request.url).pathname);
	const matches = getRouteMatches(branches, url.pathname);
	for (let match = 0; match < matches.length; match++) {
		if (!prevMatches[match] || matches[match].route !== prevMatches[match].route) event.router.dataOnly = true;
		const { route, params } = matches[match];
		route.preload && route.preload({
			params,
			location: routerState.location,
			intent: "preload"
		});
	}
}
function getPath(url) {
	const u = new URL(url);
	return u.pathname + u.search;
}
function StaticRouter(props) {
	let e;
	const obj = { value: props.url || (e = getRequestEvent()) && getPath(e.request.url) || "" };
	return createRouterComponent({ signal: [() => obj, (next) => Object.assign(obj, next)] })(props);
}
function Router(props) {
	return StaticRouter(props);
}
var solid_start_routes_default = [
	{
		"page": true,
		"$component": {
			"src": "src/routes/index.tsx?pick=Site&pick=default&pick=$css",
			"build": () => import("./routes-V2YpIvxh.mjs"),
			"import": () => import("./routes-V2YpIvxh.mjs")
		},
		"path": "/"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/footage.tsx?pick=default&pick=$css",
			"build": () => import("./footage-7bjOmnV_.mjs"),
			"import": () => import("./footage-7bjOmnV_.mjs")
		},
		"path": "/footage"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/ui.tsx?pick=default&pick=$css",
			"build": () => import("./ui-DWRlyX_L.mjs"),
			"import": () => import("./ui-DWRlyX_L.mjs")
		},
		"path": "/ui"
	}
];
var pageRoutes = defineRoutes(solid_start_routes_default.filter((o) => o.page));
function defineRoutes(fileRoutes) {
	function processRoute(routes, route, id, full) {
		const parentRoute = Object.values(routes).find((o) => {
			return id.startsWith(o.id + "/");
		});
		if (!parentRoute) {
			routes.push({
				...route,
				id,
				path: id.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/")
			});
			return routes;
		}
		processRoute(parentRoute.children || (parentRoute.children = []), route, id.slice(parentRoute.id.length), full);
		return routes;
	}
	return fileRoutes.sort((a, b) => a.path.length - b.path.length).reduce((prevRoutes, route) => {
		return processRoute(prevRoutes, route, route.path, route.path);
	}, []);
}
var router = createRouter({ routes: solid_start_routes_default.reduce((memo, route) => {
	if (!containsHTTP(route)) return memo;
	const path = route.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (_, m) => `**:${m}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
	if (/:[^/]*\?/g.test(path)) throw new Error(`Optional parameters are not supported in API routes: ${path}`);
	if (memo[path]) throw new Error(`Duplicate API routes for "${path}" found at "${memo[path].route.path}" and "${route.path}"`);
	memo[path] = { route };
	return memo;
}, {}) });
function containsHTTP(route) {
	return route["$HEAD"] || route["$GET"] || route["$POST"] || route["$PUT"] || route["$PATCH"] || route["$DELETE"];
}
function matchAPIRoute(path, method) {
	const match = router.lookup(path);
	if (match && match.route) {
		const route = match.route;
		const handler = method === "HEAD" ? route.$HEAD || route.$GET : route[`$${method}`];
		if (handler === void 0) return;
		const isPage = route.page === true && route.$component !== void 0;
		return {
			handler,
			params: match.params,
			isPage
		};
	}
}
var components = {};
function createRoutes() {
	function createRoute(route) {
		const component = route.$component && (components[route.$component.src] ??= lazy$1(route.$component.import));
		return {
			...route,
			...route.$$route ? route.$$route.require().route : void 0,
			info: {
				...route.$$route ? route.$$route.require().route.info : {},
				filesystem: true
			},
			component,
			children: route.children ? route.children.map(createRoute) : void 0
		};
	}
	return pageRoutes.map(createRoute);
}
/**
*
* Read more: https://docs.solidjs.com/solid-start/reference/routing/file-routes
*/
var FileRoutes = () => getRequestEvent().routes;
var app_exports = /* @__PURE__ */ __exportAll({
	default: () => App$1,
	id$$: () => id$$
});
var _tmpl$$3 = ["<p", ">Something broke.</p>"];
function App$1() {
	return createComponent(Router, {
		root: (props) => createComponent(MetaProvider, { get children() {
			return [createComponent(Title, { children: "Basalt & Company" }), createComponent(ErrorBoundary, {
				get fallback() {
					return ssr(_tmpl$$3, ssrHydrationKey());
				},
				get children() {
					return createComponent(Suspense, { get children() {
						return props.children;
					} });
				}
			})];
		} }),
		get children() {
			return createComponent(FileRoutes, {});
		}
	});
}
/**
*
* Read more: https://docs.solidjs.com/solid-start/reference/server/http-status-code
*/
var HttpStatusCode = (props) => {
	const event = getRequestEvent();
	event.response.status = props.code;
	event.response.statusText = props.text;
	onCleanup(() => !event.complete && (event.response.status = 200));
	return null;
};
var _tmpl$$2 = [
	"<span",
	" style=\"font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;\">",
	"</span>"
];
var _tmpl$2$1 = ["<span", " style=\"font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;\">500 | Internal Server Error</span>"];
var ErrorBoundary$1 = (props) => {
	const message = "500 | Internal Server Error";
	return createComponent(ErrorBoundary, {
		fallback: (error) => {
			console.error(error);
			return [ssr(_tmpl$$2, ssrHydrationKey(), escape(message)), createComponent(HttpStatusCode, { code: 500 })];
		},
		get children() {
			return props.children;
		}
	});
};
var TopErrorBoundary = (props) => {
	let isError = false;
	const res = catchError(() => props.children, (err) => {
		console.error(err);
		isError = !!err;
	});
	return isError ? [ssr(_tmpl$2$1, ssrHydrationKey()), createComponent(HttpStatusCode, { code: 500 })] : res;
};
/**
* Patches the data-vite-dev-id attribute for style tags of virtual modules
*
* Per Vite's convention, virtual module ids are prefixed with \0 (null byte):
* https://vite.dev/guide/api-plugin#virtual-modules-convention
*
* However this null byte cannot be server rendered properly.
* Vite client runtime then fails to find style's with wrong null bytes,
* and instead inserts duplicate style's.
*
* This patch replaces the serializable /@id/__x00__ with the proper null byte,
* and has to run before Vite's client runtime:
* https://github.com/vitejs/vite/blob/130e7181a55c524383c63bbfb1749d0ff7185cad/packages/vite/src/client/client.ts#L529
*
* TODO: This should be solved in Vite directly!
*/
var patch = function() {
	document.querySelectorAll("style[data-vite-dev-id]").forEach(function(el) {
		el.setAttribute("data-vite-dev-id", el.dataset.viteDevId.replace("/@id/__x00__", "\0"));
	});
};
`${patch.toString()}`;
var PatchVirtualDevStyles = (props) => {};
var _tmpl$$1 = [
	"<script",
	" type=\"module\"",
	" async",
	"><\/script>"
];
var docType = ssr("<!DOCTYPE html>");
/**
*
* Read more: https://docs.solidjs.com/solid-start/reference/server/start-server
*/
function StartServer(props) {
	const context = getRequestEvent();
	const nonce = context.nonce;
	useAssets$1(context.assets, nonce);
	return createComponent(NoHydration, { get children() {
		return [docType, createComponent(TopErrorBoundary, { get children() {
			return createComponent(props.document, {
				get assets() {
					return createComponent(HydrationScript, {});
				},
				get scripts() {
					return [createComponent(PatchVirtualDevStyles, { nonce }), ssr(_tmpl$$1, ssrHydrationKey(), ssrAttribute("nonce", escape(nonce, true), false), ssrAttribute("src", escape(getSsrManifest("client").path("./src/entry-client.tsx"), true), false))];
				},
				get children() {
					return createComponent(Hydration, { get children() {
						return createComponent(ErrorBoundary$1, { get children() {
							return createComponent(App$1, {});
						} });
					} });
				}
			});
		} })];
	} });
}
var _solid_start_middleware_default = {};
function stripBase(pathname, base) {
	if (pathname === base || pathname.startsWith(base + "/") || pathname.startsWith(base + "?")) return "/" + pathname.slice(base.length).replace(/^\/+/, "");
	return pathname;
}
function hasEmptySegmentAfterBase(pathname, base) {
	return pathname.startsWith(base + "//");
}
var NEEDLESS_ESCAPE_SRC = String.raw`%(?:2[146-9A-E]|3[0-9ABD]|4[0-9A-F]|5[0-9ABDF]|6[1-9A-F]|7[0-9ACE])`;
var NEEDLESS_ESCAPE_RE = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "i");
var NEEDLESS_ESCAPE_RE_G = /* @__PURE__ */ new RegExp(NEEDLESS_ESCAPE_SRC, "gi");
function isNonCanonicalPathname(pathname) {
	return NEEDLESS_ESCAPE_RE.test(pathname);
}
function canonicalPathname(pathname) {
	return pathname.replace(NEEDLESS_ESCAPE_RE_G, (m) => String.fromCharCode(Number.parseInt(m.slice(1), 16)));
}
var ABSOLUTE_URL_RE = /^[a-z][a-z\d+\-.]*:\/\//i;
var ROUTE_ENCODE_RE = /[\u0000-\u0020"#<>\u0060]|[^\u0000-\u007E]/gu;
function normalizeRoute(route) {
	if (ABSOLUTE_URL_RE.test(route)) throw new Error(`Route patterns are pathnames, received URL: ${route}`);
	if (route.charCodeAt(0) !== 47) route = `/${route}`;
	route = canonicalPathname(route.replace(ROUTE_ENCODE_RE, encodeURIComponent));
	return route.includes("/.") ? resolveDotSegments(route) : route;
}
function resolveDotSegments(pathname) {
	const out = [];
	let dot = false;
	for (const segment of pathname.split("/")) {
		dot = segment === "." || segment === "..";
		if (!dot) out.push(segment);
		else if (segment.length === 2 && out.length > 1) out.pop();
	}
	if (dot) out.push("");
	return out.join("/");
}
function decodePathname(pathname) {
	try {
		return decodeURI(pathname);
	} catch {
		return;
	}
}
var kEventNS = "h3.internal.event.";
var kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
var kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var kEventResErrHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.err.headers`);
var kMalformedURL = /* @__PURE__ */ Symbol.for(`${kEventNS}malformed`);
var H3Event = class {
	app;
	req;
	url;
	context;
	static __is_event__ = true;
	constructor(req, context, app) {
		this.context = req.context = context || req.context || new NullProtoObj();
		this.req = req;
		this.app = app;
		const _url = req._url;
		let url = _url && _url instanceof URL ? _url : new FastURL(req.url);
		const pathname = url.pathname;
		if (pathname.includes("%")) {
			if (decodePathname(pathname) === void 0) this[kMalformedURL] = true;
			else if (isNonCanonicalPathname(pathname)) url = new FastURL(`${url.protocol}//${url.host}${canonicalPathname(pathname)}${url.search}`);
		}
		this.url = url;
	}
	get res() {
		return this[kEventRes] ||= new H3EventResponse();
	}
	get runtime() {
		return this.req.runtime;
	}
	waitUntil(promise) {
		this.req.waitUntil?.(promise);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	get node() {
		return this.req.runtime?.node;
	}
	get headers() {
		return this.req.headers;
	}
	get path() {
		return this.url.pathname + this.url.search;
	}
	get method() {
		return this.req.method;
	}
};
var H3EventResponse = class {
	status;
	statusText;
	get headers() {
		return this[kEventResHeaders] ||= new Headers();
	}
	get errHeaders() {
		return this[kEventResErrHeaders] ||= new Headers();
	}
};
var DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
	return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
	if (!statusCode) return defaultStatusCode;
	if (typeof statusCode === "string") statusCode = +statusCode;
	if (!Number.isInteger(statusCode) || statusCode < 100 || statusCode > 599) return defaultStatusCode;
	return statusCode;
}
var HTTPError = class HTTPError extends Error {
	get name() {
		return "HTTPError";
	}
	status;
	statusText;
	headers;
	cause;
	data;
	body;
	unhandled;
	static isError(input) {
		return input instanceof Error && input?.name === "HTTPError" && input.status > 99;
	}
	static status(status, statusText, details) {
		return new HTTPError({
			...details,
			statusText,
			status
		});
	}
	constructor(arg1, arg2) {
		let messageInput;
		let details;
		if (typeof arg1 === "string") {
			messageInput = arg1;
			details = arg2;
		} else details = arg1;
		const status = sanitizeStatusCode(details?.status || details?.statusCode || details?.cause?.status || details?.cause?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || details?.cause?.statusText || details?.cause?.statusMessage);
		const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || details?.cause?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
		this.data = details?.data;
		this.body = details?.body;
	}
	get statusCode() {
		return this.status;
	}
	get statusMessage() {
		return this.statusText;
	}
	toJSON() {
		const unhandled = this.unhandled;
		return {
			status: this.status,
			statusText: this.statusText,
			unhandled,
			message: unhandled ? "HTTPError" : this.message,
			data: unhandled ? void 0 : this.data,
			...unhandled ? void 0 : this.body
		};
	}
};
function isJSONSerializable(value, _type) {
	if (value === null || value === void 0) return true;
	if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
	if (typeof value.toJSON === "function") return true;
	if (Array.isArray(value)) return true;
	if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
	if (value instanceof NullProtoObj) return true;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
var kEventDispose = /* @__PURE__ */ Symbol.for("h3.internal.event.dispose");
var kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
var kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
	if (typeof val?.then === "function") return val.then((resolvedVal) => toResponse(resolvedVal, event, config), (r) => toResponse(toError(r), event, config));
	let response;
	try {
		response = prepareResponse(val, event, config);
	} catch (error) {
		return toResponse(toError(error), event, config);
	}
	if (typeof response?.then === "function") return toResponse(response, event, config);
	const { onResponse } = config;
	if (onResponse) return Promise.resolve().then(() => onResponse(response, event)).catch((error) => {
		if (!config.silent) console.error(error);
	}).then(() => event[kEventDispose]?.observe(response, val) ?? response);
	return event[kEventDispose]?.observe(response, val) ?? response;
}
function toError(value) {
	if (value === kNotFound || value === kHandled || value instanceof Error) return value;
	if (typeof value === "number") return new HTTPError({ status: value });
	const error = new HTTPError({
		status: 500,
		unhandled: true
	});
	error.cause = value;
	return error;
}
var kHTTPResponse = /* @__PURE__ */ Symbol.for("h3.HTTPResponse");
var HTTPResponse = class {
	#headers;
	#init;
	body;
	constructor(body, init) {
		this.body = body;
		this.#init = init;
	}
	get status() {
		return this.#init?.status;
	}
	get statusText() {
		return this.#init?.statusText;
	}
	get headers() {
		return this.#headers ||= new Headers(this.#init?.headers);
	}
};
HTTPResponse.prototype[kHTTPResponse] = true;
function prepareResponse(val, event, config, nested) {
	if (val === kHandled) return new FastResponse(null);
	if (val === kNotFound) val = new HTTPError({
		status: 404,
		message: `Cannot find any route matching [${event.req.method}] ${event.url}`
	});
	if (val && val instanceof Error) {
		const isHTTPError = HTTPError.isError(val);
		const error = isHTTPError ? val : new HTTPError(val);
		if (!isHTTPError) {
			error.unhandled = true;
			if (val?.stack) error.stack = val.stack;
		}
		if (error.unhandled && !config.silent) console.error(error);
		const { onError } = config;
		const errHeaders = event[kEventRes]?.[kEventResErrHeaders];
		if (onError && !nested) return Promise.resolve().then(() => onError(error, event)).catch(toError).then((newVal) => prepareResponse(newVal ?? val, event, config, true));
		event[kEventRes] = void 0;
		return errorResponse(error, config.debug, errHeaders);
	}
	const preparedRes = event[kEventRes];
	let preparedHeaders = preparedRes?.[kEventResHeaders];
	event[kEventRes] = void 0;
	if (!(val instanceof Response)) {
		const res = prepareResponseBody(val, event, config);
		const rawStatus = res.status || preparedRes?.status;
		const status = rawStatus ? sanitizeStatusCode(rawStatus) : void 0;
		const rawStatusText = res.statusText || preparedRes?.statusText;
		return new FastResponse(nullBody(event.req.method, status) ? null : res.body, {
			status,
			statusText: rawStatusText === void 0 ? void 0 : sanitizeStatusMessage(rawStatusText),
			headers: res.headers && preparedHeaders ? mergeHeaders(res.headers, preparedHeaders) : res.headers || preparedHeaders
		});
	}
	if (val.status >= 400) preparedHeaders = preparedRes?.[kEventResErrHeaders];
	if (preparedHeaders && !nested && !preparedHeaders.keys().next().done) return new FastResponse(nullBody(event.req.method, val.status) ? null : val.body, {
		status: val.status,
		statusText: val.statusText,
		headers: mergeHeaders(val.headers, preparedHeaders)
	});
	return event.req.method === "HEAD" && val.body !== null ? new FastResponse(null, {
		status: val.status,
		statusText: val.statusText,
		headers: val.headers
	}) : val;
}
function mergeHeaders(base, overrides, target = new Headers(base)) {
	for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
	else target.set(name, value);
	return target;
}
var frozen = (name) => (...args) => {
	throw new Error(`Headers are frozen (${name} ${args.join(", ")})`);
};
var FrozenHeaders = class extends Headers {
	set = frozen("set");
	append = frozen("append");
	delete = frozen("delete");
};
var emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
var jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
	if (val === null || val === void 0) return {
		body: "",
		headers: emptyHeaders
	};
	const valType = typeof val;
	if (valType === "string") return { body: val };
	if (val instanceof Uint8Array) return {
		body: val,
		headers: new Headers({ "content-length": val.byteLength.toString() })
	};
	if (val instanceof HTTPResponse || val?.[kHTTPResponse] === true) return val;
	if (isJSONSerializable(val, valType)) return {
		body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
		headers: jsonHeaders
	};
	if (valType === "bigint") return {
		body: val.toString(),
		headers: jsonHeaders
	};
	if (val instanceof Blob) {
		const headers = new Headers({
			"content-type": val.type,
			"content-length": val.size.toString()
		});
		let filename = val.name;
		if (filename) {
			filename = encodeURIComponent(filename);
			headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
		}
		return {
			body: val.stream(),
			headers
		};
	}
	if (valType === "symbol") return { body: val.toString() };
	if (valType === "function") return { body: `${val.name}()` };
	return { body: val };
}
function nullBody(method, status) {
	return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug, errHeaders) {
	let headers = error.headers ? mergeHeaders(jsonHeaders, error.headers) : new Headers(jsonHeaders);
	if (errHeaders) headers = mergeHeaders(headers, errHeaders);
	return new FastResponse(JSON.stringify({
		...error.toJSON(),
		stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
	}, void 0, debug ? 2 : void 0), {
		status: error.status,
		statusText: error.statusText,
		headers
	});
}
var LITERAL_ROUTE_RE = /^(?:\/[^/:*(){}\\?^\0- "#<>`\x7F-\uFFFF]+)*\/?$/;
var LITERAL_PREFIX_ROUTE_RE = /^((?:\/[^/:*(){}\\?^\0- "#<>`\x7F-\uFFFF]+)*)\/\*\*\/?$/;
function createRouteMatcher(route) {
	if (route.charCodeAt(0) !== 47) route = `/${route}`;
	const prefixMatch = LITERAL_PREFIX_ROUTE_RE.exec(route);
	if (prefixMatch) {
		const base = prefixMatch[1];
		const prefix = `${base}/`;
		return (pathname) => {
			if (pathname === base || pathname === prefix) return;
			if (!pathname.startsWith(prefix)) return false;
			const rest = trimTrailingSlash(pathname.slice(prefix.length));
			return {
				0: rest,
				_: rest
			};
		};
	}
	if (LITERAL_ROUTE_RE.test(route)) {
		const base = route.endsWith("/") ? route.slice(0, -1) : route;
		return (pathname) => pathname === base || pathname === `${base}/` ? void 0 : false;
	}
	const router = createRouter$1();
	addRoute(router, "", route, true);
	return (pathname) => {
		const match = findRoute(router, "", pathname);
		return match ? match.params : false;
	};
}
function trimTrailingSlash(rest) {
	return rest.endsWith("/") ? rest.slice(0, -1) : rest;
}
function normalizeMiddleware(input, opts = {}) {
	const matcher = createMatcher(opts);
	if (!matcher && (input.length > 1 || input.constructor?.name === "AsyncFunction")) return input;
	return (event, next) => {
		if (matcher && !matcher(event)) return next();
		const res = input(event, next);
		return res === void 0 || res === kNotFound ? next() : res;
	};
}
function createMatcher(opts) {
	if (!opts.route && !opts.method && !opts.match) return;
	const routeMatcher = opts.route ? createRouteMatcher(normalizeRoute(opts.route)) : void 0;
	const method = opts.method?.toUpperCase();
	return function _middlewareMatcher(event) {
		if (method) {
			const reqMethod = event.req.method.toUpperCase();
			if (reqMethod !== method && !(method === "GET" && reqMethod === "HEAD")) return false;
		}
		if (opts.match && !opts.match(event)) return false;
		if (!routeMatcher) return true;
		const params = routeMatcher(event.url.pathname);
		if (params === false) return false;
		if (params) event.context.middlewareParams = {
			...event.context.middlewareParams,
			...params
		};
		return true;
	};
}
function composeMiddleware(middleware) {
	let chain = (event, handler) => handler(event);
	for (let i = middleware.length - 1; i >= 0; i--) {
		const fn = middleware[i];
		const inner = chain;
		chain = (event, handler) => callLayer(fn, event, handler, inner);
	}
	return chain;
}
function composeHandler(middleware, handler) {
	const chain = composeMiddleware(middleware);
	return function _composedHandler(event) {
		return chain(event, handler);
	};
}
function callMiddleware(event, middleware, handler, index = 0) {
	return index === middleware.length ? handler(event) : callLayer(middleware[index], event, handler, (_event, _handler) => callMiddleware(_event, middleware, _handler, index + 1));
}
function callLayer(fn, event, handler, inner) {
	let nextCalled;
	let nextResult;
	const next = () => {
		if (nextCalled) return nextResult;
		nextCalled = true;
		nextResult = inner(event, handler);
		return nextResult;
	};
	const ret = fn(event, next);
	return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
function isUnhandledResponse(val) {
	return val === void 0 || val === kNotFound;
}
function requestWithURL(req, url) {
	const cache = new NullProtoObj();
	cache.url = url;
	cache._url = void 0;
	return new Proxy(req, {
		get(target, prop) {
			if (prop in cache) return cache[prop];
			const value = Reflect.get(target, prop);
			if (prop === "bodyUsed") return value;
			cache[prop] = typeof value === "function" && prop !== "constructor" ? value.bind(target) : value;
			return cache[prop];
		},
		set(target, prop, value) {
			if (prop !== "url" && prop !== "_url") delete cache[prop];
			return Reflect.set(target, prop, value);
		}
	});
}
function requestWithBaseURL(req, base, options = {}) {
	const url = new URL(options.url || req.url);
	url.pathname = stripBase(url.pathname, base);
	return requestWithURL(req, url.href);
}
function toRequest(input, options) {
	if (typeof input === "string") {
		let url = input;
		if (url[0] === "/") url = `http://${safeHost((options?.headers ? new Headers(options.headers) : void 0)?.get("host"))}${url}`;
		return new Request(url, options);
	} else if (options || input instanceof URL) return new Request(input, options);
	return input;
}
function getRequestIP(event, opts = {}) {
	if (opts.xForwardedFor) {
		const _header = event.req.headers.get("x-forwarded-for");
		if (_header) {
			const xForwardedFor = _header.split(",")[0].trim();
			if (xForwardedFor) return xForwardedFor;
		}
	}
	return event.req.context?.clientAddress || event.req.ip || void 0;
}
function safeHost(host) {
	return host && !/[/\\?#@\s]/.test(host) ? host : "localhost";
}
function defineHandler(input) {
	if (typeof input === "function") return handlerWithFetch(input);
	const handler = input.handler || (input.fetch ? function _fetchHandler(event) {
		return input.fetch(event.req);
	} : NoHandler);
	const composed = input.middleware?.length && composeHandler(input.middleware, handler);
	const eventHandler = handlerWithFetch(composed || handler);
	return Object.assign(eventHandler, input, composed && { fetch: eventHandler.fetch });
}
function handlerWithFetch(handler) {
	if ("fetch" in handler) return handler;
	return Object.assign(handler, { fetch: (req) => {
		if (typeof req === "string") req = new URL(req, "http://_");
		if (req instanceof URL) req = new Request(req);
		const event = new H3Event(req);
		try {
			return Promise.resolve(toResponse(handler(event), event));
		} catch (error) {
			return Promise.resolve(toResponse(toError(error), event));
		}
	} });
}
function toEventHandler(handler) {
	if (typeof handler === "function") return handler;
	if (typeof handler?.handler === "function" && handler.constructor?.["~h3"]) return handler.handler;
	if (typeof handler?.fetch === "function") return function _fetchHandler(event) {
		return handler.fetch(event.req);
	};
}
var NoHandler = () => kNotFound;
var H3Core = class {
	static "~h3" = true;
	config;
	"~middleware";
	"~routes" = [];
	"~dispatch";
	"~composed";
	constructor(config = {}) {
		this["~middleware"] = [];
		this.config = config;
		this.fetch = this.fetch.bind(this);
		this.handler = this.handler.bind(this);
	}
	fetch(request) {
		return this["~request"](request);
	}
	handler(event) {
		const route = this["~findRoute"](event);
		if (route) {
			event.context.params = route.params;
			event.context.matchedRoute = route.data;
		}
		return (this["~dispatch"] ??= createDispatcher(this))(event, route);
	}
	"~request"(request, context) {
		const event = new H3Event(request, context, this);
		let handlerRes;
		try {
			if (event[kMalformedURL] && !this.config.allowMalformedURL) throw new HTTPError({
				status: 400,
				message: "Bad Request"
			});
			if (this.config.onRequest) {
				const hookRes = this.config.onRequest(event);
				handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
			} else handlerRes = this.handler(event);
		} catch (error) {
			handlerRes = Promise.reject(error);
		}
		return toResponse(handlerRes, event, this.config);
	}
	"~findRoute"(_event) {}
	"~addRoute"(_route) {
		this["~routes"].push(_route);
	}
	"~getMiddleware"(_event, _route) {
		return this["~middleware"];
	}
};
function createDispatcher(app) {
	if (app["~getMiddleware"] !== H3Core.prototype["~getMiddleware"]) return (event, route) => callMiddleware(event, app["~getMiddleware"](event, route || void 0), routeHandler(route));
	const middleware = app["~middleware"];
	if (middleware.length === 0) return (event, route) => routeHandler(route)(event);
	const composed = app["~composed"] ??= composeMiddleware(middleware);
	return (event, route) => composed(event, routeHandler(route));
}
function routeHandler(route) {
	const data = route?.data;
	if (!data) return NoHandler;
	return data.middleware?.length ? data["~composed"] ??= composeHandler(data.middleware, data.handler) : data.handler;
}
var H3 = /* @__PURE__ */ (() => {
	class H3 extends H3Core {
		"~rou3";
		constructor(config = {}) {
			super(config);
			this["~rou3"] = createRouter$1();
			this.request = this.request.bind(this);
			config.plugins?.forEach((plugin) => plugin(this));
		}
		register(plugin) {
			plugin(this);
			return this;
		}
		request(_req, _init, context) {
			return this["~request"](toRequest(_req, _init), context);
		}
		mount(base, input) {
			base = !base || base === "/" ? "" : normalizeRoute(base).replace(/\/$/, "");
			if ("handler" in input) {
				if (input["~middleware"].length > 0) {
					this["~middleware"].push((event, next) => {
						const originalPathname = event.url.pathname;
						if (!originalPathname.startsWith(base) || originalPathname.length > base.length && originalPathname[base.length] !== "/") return next();
						if (hasEmptySegmentAfterBase(originalPathname, base)) throw new HTTPError({ status: 404 });
						event.url.pathname = stripBase(originalPathname, base);
						const restore = () => {
							event.url.pathname = originalPathname;
						};
						try {
							const result = (input["~composed"] ??= composeMiddleware(input["~middleware"]))(event, () => {
								restore();
								return next();
							});
							if (typeof result?.then === "function") return Promise.resolve(result).finally(restore);
							restore();
							return result;
						} catch (err) {
							restore();
							throw err;
						}
					});
					this["~dispatch"] = this["~composed"] = void 0;
				}
				for (const r of input["~routes"]) this["~addRoute"]({
					...r,
					route: base + r.route
				});
			} else {
				const fetchHandler = "fetch" in input ? input.fetch : input;
				this.all(`${base}/**`, function _mountedMiddleware(event) {
					if (hasEmptySegmentAfterBase(event.url.pathname, base)) throw new HTTPError({ status: 404 });
					return fetchHandler(requestWithBaseURL(event.req, base, { url: event.url }));
				});
			}
			return this;
		}
		on(method, route, handler, opts) {
			const _method = (method || "").toUpperCase();
			route = normalizeRoute(route);
			this["~addRoute"]({
				method: _method,
				route,
				handler: toEventHandler(handler),
				middleware: opts?.middleware,
				meta: {
					...handler.meta,
					...opts?.meta
				}
			});
			return this;
		}
		all(route, handler, opts) {
			return this.on("", route, handler, opts);
		}
		"~findRoute"(_event) {
			const match = findRoute(this["~rou3"], _event.req.method, _event.url.pathname);
			if (match === void 0 && _event.req.method === "HEAD") return findRoute(this["~rou3"], "GET", _event.url.pathname);
			return match;
		}
		"~addRoute"(_route) {
			addRoute(this["~rou3"], _route.method, _route.route, _route);
			super["~addRoute"](_route);
		}
		use(arg1, arg2, arg3) {
			let route;
			let fn;
			let opts;
			if (typeof arg1 === "string") {
				route = arg1;
				fn = arg2;
				opts = arg3;
			} else {
				fn = arg1;
				opts = arg2;
			}
			if (typeof fn !== "function" && "handler" in fn) return this.mount(route || "", fn);
			this["~middleware"].push(normalizeMiddleware(fn, {
				...opts,
				route
			}));
			this["~dispatch"] = this["~composed"] = void 0;
			return this;
		}
	}
	for (const method of [
		"GET",
		"POST",
		"PUT",
		"DELETE",
		"PATCH",
		"HEAD",
		"OPTIONS",
		"CONNECT",
		"TRACE",
		"QUERY"
	]) H3Core.prototype[method.toLowerCase()] = function(route, handler, opts) {
		return this.on(method, route, handler, opts);
	};
	return H3;
})();
function redirect(location, status = 302, statusText) {
	return new HTTPResponse(`<html><head><meta http-equiv="refresh" content="0; url=${escapeHtml(location)}" /></head></html>`, {
		status,
		statusText: statusText || (status === 301 ? "Moved Permanently" : "Found"),
		headers: {
			"content-type": "text/html; charset=utf-8",
			location
		}
	});
}
var HTML_ESCAPES = {
	"&": "&amp;",
	"\"": "&quot;",
	"'": "&#39;",
	"<": "&lt;",
	">": "&gt;"
};
function escapeHtml(str) {
	return str.replace(/[&"'<>]/g, (c) => HTML_ESCAPES[c]);
}
var COOKIE_MAX_AGE_LIMIT = 3456e4;
function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
function eqIndex(str, min, max) {
	const index = str.indexOf("=", min);
	return index < max ? index : -1;
}
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
var NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
function parse(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode || decode;
	const allowMultiple = options?.allowMultiple || false;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === -1) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (options?.filter && !options.filter(key)) {
			index = endIdx + 1;
			continue;
		}
		const val = dec(valueSlice(str, eqIdx + 1, endIdx));
		if (allowMultiple) {
			const existing = obj[key];
			if (existing === void 0) obj[key] = val;
			else if (Array.isArray(existing)) existing.push(val);
			else obj[key] = [existing, val];
		} else if (obj[key] === void 0) obj[key] = val;
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
function decode(str) {
	if (!str.includes("%")) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
var pathValueRegExp = /^[\u0020-\u003A\u003C-\u007E]*$/;
var __toString = Object.prototype.toString;
function serialize(_a0, _a1, _a2) {
	const isObj = typeof _a0 === "object" && _a0 !== null;
	const options = isObj ? _a1 : _a2;
	const stringify = options?.stringify || JSON.stringify;
	const cookie = isObj ? _a0 : {
		..._a2,
		name: _a0,
		value: _a1 == void 0 ? "" : typeof _a1 === "string" ? _a1 : stringify(_a1)
	};
	const enc = options?.encode || encodeURIComponent;
	if (!cookieNameRegExp.test(cookie.name)) throw new TypeError(`argument name is invalid: ${cookie.name}`);
	const value = cookie.value ? enc(cookie.value) : "";
	if (!cookieValueRegExp.test(value)) throw new TypeError(`argument val is invalid: ${cookie.value}`);
	if (!cookie.secure) {
		if (cookie.partitioned) throw new TypeError(`Partitioned cookies must have the Secure attribute`);
		if (cookie.sameSite && String(cookie.sameSite).toLowerCase() === "none") throw new TypeError(`SameSite=None cookies must have the Secure attribute`);
		if (cookie.name.length > 9 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95) {
			const nameLower = cookie.name.toLowerCase();
			if (nameLower.startsWith("__secure-") || nameLower.startsWith("__host-")) throw new TypeError(`${cookie.name} cookies must have the Secure attribute`);
		}
	}
	if (cookie.name.length > 7 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95 && cookie.name.toLowerCase().startsWith("__host-")) {
		if (cookie.path !== "/") throw new TypeError(`__Host- cookies must have Path=/`);
		if (cookie.domain) throw new TypeError(`__Host- cookies must not have a Domain attribute`);
	}
	let str = cookie.name + "=" + value;
	if (cookie.maxAge !== void 0) {
		if (!Number.isInteger(cookie.maxAge)) throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
		str += "; Max-Age=" + Math.max(0, Math.min(cookie.maxAge, COOKIE_MAX_AGE_LIMIT));
	}
	if (cookie.domain) {
		if (!domainValueRegExp.test(cookie.domain)) throw new TypeError(`option domain is invalid: ${cookie.domain}`);
		str += "; Domain=" + cookie.domain;
	}
	if (cookie.path) {
		if (!pathValueRegExp.test(cookie.path)) throw new TypeError(`option path is invalid: ${cookie.path}`);
		str += "; Path=" + cookie.path;
	}
	if (cookie.expires) {
		if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) throw new TypeError(`option expires is invalid: ${cookie.expires}`);
		str += "; Expires=" + cookie.expires.toUTCString();
	}
	if (cookie.httpOnly) str += "; HttpOnly";
	if (cookie.secure) str += "; Secure";
	if (cookie.partitioned) str += "; Partitioned";
	if (cookie.priority) switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
		case "low":
			str += "; Priority=Low";
			break;
		case "medium":
			str += "; Priority=Medium";
			break;
		case "high":
			str += "; Priority=High";
			break;
		default: throw new TypeError(`option priority is invalid: ${cookie.priority}`);
	}
	if (cookie.sameSite) switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
		case true:
		case "strict":
			str += "; SameSite=Strict";
			break;
		case "lax":
			str += "; SameSite=Lax";
			break;
		case "none":
			str += "; SameSite=None";
			break;
		default: throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
	}
	return str;
}
function isDate(val) {
	return __toString.call(val) === "[object Date]";
}
var maxAgeRegExp = /^-?\d+$/;
var _nullProto = /* @__PURE__ */ Object.getPrototypeOf({});
function parseSetCookie$1(str, options) {
	const len = str.length;
	let _endIdx = len;
	let eqIdx = -1;
	for (let i = 0; i < len; i++) {
		const c = str.charCodeAt(i);
		if (c === 59) {
			_endIdx = i;
			break;
		}
		if (c === 61 && eqIdx === -1) eqIdx = i;
	}
	if (eqIdx >= _endIdx) eqIdx = -1;
	const name = eqIdx === -1 ? "" : _trim(str, 0, eqIdx);
	if (name && name in _nullProto) return void 0;
	let value = eqIdx === -1 ? _trim(str, 0, _endIdx) : _trim(str, eqIdx + 1, _endIdx);
	if (!name && !value) return void 0;
	if (name.length + value.length > 4096) return void 0;
	if (options?.decode !== false) value = _decode(value, options?.decode);
	const setCookie = {
		name,
		value
	};
	let index = _endIdx + 1;
	while (index < len) {
		let endIdx = len;
		let attrEqIdx = -1;
		for (let i = index; i < len; i++) {
			const c = str.charCodeAt(i);
			if (c === 59) {
				endIdx = i;
				break;
			}
			if (c === 61 && attrEqIdx === -1) attrEqIdx = i;
		}
		if (attrEqIdx >= endIdx) attrEqIdx = -1;
		const attr = attrEqIdx === -1 ? _trim(str, index, endIdx) : _trim(str, index, attrEqIdx);
		const val = attrEqIdx === -1 ? void 0 : _trim(str, attrEqIdx + 1, endIdx);
		if (val === void 0 || val.length <= 1024) switch (attr.toLowerCase()) {
			case "httponly":
				setCookie.httpOnly = true;
				break;
			case "secure":
				setCookie.secure = true;
				break;
			case "partitioned":
				setCookie.partitioned = true;
				break;
			case "domain":
				if (val) setCookie.domain = (val.charCodeAt(0) === 46 ? val.slice(1) : val).toLowerCase();
				break;
			case "path":
				setCookie.path = val;
				break;
			case "max-age":
				if (val && maxAgeRegExp.test(val)) setCookie.maxAge = Math.min(Number(val), COOKIE_MAX_AGE_LIMIT);
				break;
			case "expires": {
				if (!val) break;
				const date = new Date(val);
				if (Number.isFinite(date.valueOf())) {
					const maxDate = new Date(Date.now() + COOKIE_MAX_AGE_LIMIT * 1e3);
					setCookie.expires = date > maxDate ? maxDate : date;
				}
				break;
			}
			case "priority": {
				if (!val) break;
				const priority = val.toLowerCase();
				if (priority === "low" || priority === "medium" || priority === "high") setCookie.priority = priority;
				break;
			}
			case "samesite": {
				if (!val) break;
				const sameSite = val.toLowerCase();
				if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") setCookie.sameSite = sameSite;
				else setCookie.sameSite = "lax";
				break;
			}
			default: {
				const attrLower = attr.toLowerCase();
				if (attrLower && !(attrLower in _nullProto)) setCookie[attrLower] = val;
			}
		}
		index = endIdx + 1;
	}
	return setCookie;
}
function _trim(str, start, end) {
	if (start === end) return "";
	let s = start;
	let e = end;
	while (s < e && (str.charCodeAt(s) === 32 || str.charCodeAt(s) === 9)) s++;
	while (e > s && (str.charCodeAt(e - 1) === 32 || str.charCodeAt(e - 1) === 9)) e--;
	return str.slice(s, e);
}
function _decode(value, decode) {
	if (!decode && !value.includes("%")) return value;
	try {
		return (decode || decodeURIComponent)(value);
	} catch {
		return value;
	}
}
function parseCookies(event) {
	return parse(event.req.headers.get("cookie") || "");
}
function getCookie(event, name) {
	return parseCookies(event)[name];
}
function setCookie(event, name, value, options) {
	const { encode, stringify, ...attrs } = options ?? {};
	const newCookie = serialize({
		name,
		value,
		path: "/",
		...attrs
	}, {
		encode,
		stringify
	});
	const currentCookies = event.res.headers.getSetCookie();
	if (currentCookies.length === 0) {
		event.res.headers.set("set-cookie", newCookie);
		return;
	}
	const namePrefix = `${name}=`;
	if (!currentCookies.some((cookie) => cookie.startsWith(namePrefix))) {
		event.res.headers.append("set-cookie", newCookie);
		return;
	}
	const newCookieKey = _getDistinctCookieKey(name, options || {});
	event.res.headers.delete("set-cookie");
	for (const cookie of currentCookies) {
		const parsed = parseSetCookie$1(cookie);
		if (parsed ? _getDistinctCookieKey(cookie.split("=")?.[0], parsed) === newCookieKey : cookie.startsWith(namePrefix)) continue;
		event.res.headers.append("set-cookie", cookie);
	}
	event.res.headers.append("set-cookie", newCookie);
}
function _getDistinctCookieKey(name, options) {
	return [
		name,
		(options.domain || "").replace(/^\./, "").toLowerCase(),
		options.path || "/",
		options.partitioned ? "1" : "0"
	].join(";");
}
var FETCH_EVENT_CONTEXT = "solidFetchEvent";
function createFetchEvent(event) {
	return {
		request: event.req,
		response: event.res,
		clientAddress: getRequestIP(event),
		locals: {},
		nativeEvent: event
	};
}
function getFetchEvent(h3Event) {
	if (!h3Event.context[FETCH_EVENT_CONTEXT]) {
		const fetchEvent = createFetchEvent(h3Event);
		h3Event.context[FETCH_EVENT_CONTEXT] = fetchEvent;
	}
	return h3Event.context[FETCH_EVENT_CONTEXT];
}
function mergeResponseHeaders(h3Event, headers) {
	for (const [key, value] of headers.entries()) h3Event.res.headers.append(key, value);
}
var decorateHandler = (fn) => (event) => provideRequestEvent(getFetchEvent(event), () => fn(event));
var decorateMiddleware = (fn) => (event, next) => provideRequestEvent(getFetchEvent(event), () => fn(event, next));
function parseSetCookie(setCookieValue, options) {
	const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
	const parsed = _parseNameValuePair(parts.shift() || "");
	const name = parsed.name;
	let value = parsed.value;
	try {
		value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
	} catch {}
	const cookie = {
		name,
		value
	};
	for (const part of parts) {
		const sides = part.split("=");
		const partKey = (sides.shift() || "").trimStart().toLowerCase();
		const partValue = sides.join("=");
		switch (partKey) {
			case "expires":
				cookie.expires = new Date(partValue);
				break;
			case "max-age":
				cookie.maxAge = Number.parseInt(partValue, 10);
				break;
			case "secure":
				cookie.secure = true;
				break;
			case "httponly":
				cookie.httpOnly = true;
				break;
			case "samesite":
				cookie.sameSite = partValue;
				break;
			default: cookie[partKey] = partValue;
		}
	}
	return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
	let name = "";
	let value = "";
	const nameValueArr = nameValuePairStr.split("=");
	if (nameValueArr.length > 1) {
		name = nameValueArr.shift();
		value = nameValueArr.join("=");
	} else value = nameValuePairStr;
	return {
		name,
		value
	};
}
var DEFAULT_PLUGINS = [
	O,
	M,
	H,
	j,
	Q,
	i,
	l,
	oe,
	le,
	ye,
	de
];
var MAX_SERIALIZATION_DEPTH_LIMIT = 64;
var DISABLED_FEATURES = L.RegExp;
/**
* Alexis:
*
* A "chunk" is a piece of data emitted by the streaming serializer.
* Each chunk is represented by a 32-bit value (encoded in hexadecimal),
* followed by the encoded string (8-bit representation). This format
* is important so we know how much of the chunk being streamed we
* are expecting before parsing the entire string data.
*
* This is sort of a bootleg "multipart/form-data" except it's bad at
* handling File/Blob LOL
*
* The format is as follows:
* ;0xFFFFFFFF;<string data>
*/
function createChunk(data) {
	const encodeData = new TextEncoder().encode(data);
	const bytes = encodeData.length;
	const baseHex = bytes.toString(16);
	const totalHex = "00000000".substring(0, 8 - baseHex.length) + baseHex;
	const head = new TextEncoder().encode(`;0x${totalHex};`);
	const chunk = new Uint8Array(12 + bytes);
	chunk.set(head);
	chunk.set(encodeData, 12);
	return chunk;
}
function serializeToJSONStream(value) {
	return new ReadableStream({ start(controller) {
		cu(value, {
			disabledFeatures: DISABLED_FEATURES,
			depthLimit: MAX_SERIALIZATION_DEPTH_LIMIT,
			plugins: DEFAULT_PLUGINS,
			onParse(node) {
				controller.enqueue(createChunk(JSON.stringify(node)));
			},
			onDone() {
				controller.close();
			},
			onError(error) {
				controller.error(error);
			}
		});
	} });
}
var SerovalChunkReader = class {
	reader;
	buffer;
	done;
	constructor(stream) {
		this.reader = stream.getReader();
		this.buffer = /* @__PURE__ */ new Uint8Array(0);
		this.done = false;
	}
	async readChunk() {
		const chunk = await this.reader.read();
		if (!chunk.done) {
			const newBuffer = new Uint8Array(this.buffer.length + chunk.value.length);
			newBuffer.set(this.buffer);
			newBuffer.set(chunk.value, this.buffer.length);
			this.buffer = newBuffer;
		} else this.done = true;
	}
	async next() {
		if (this.buffer.length === 0) {
			if (this.done) return {
				done: true,
				value: void 0
			};
			await this.readChunk();
			return await this.next();
		}
		const head = new TextDecoder().decode(this.buffer.subarray(1, 11));
		const bytes = Number.parseInt(head, 16);
		if (Number.isNaN(bytes)) throw new Error("Malformed server function stream.");
		while (bytes > this.buffer.length - 12) {
			if (this.done) throw new Error("Malformed server function stream.");
			await this.readChunk();
		}
		const partial = new TextDecoder().decode(this.buffer.subarray(12, 12 + bytes));
		this.buffer = this.buffer.subarray(12 + bytes);
		return {
			done: false,
			value: partial
		};
	}
	async drain(interpret) {
		while (true) {
			const result = await this.next();
			if (result.done) break;
			else interpret(result.value);
		}
	}
};
async function deserializeFromJSONString(json) {
	return await deserializeJSONStream(new Response(json));
}
async function deserializeJSONStream(response) {
	if (!response.body) throw new Error("missing body");
	const reader = new SerovalChunkReader(response.body);
	const result = await reader.next();
	if (!result.done) {
		const refs = /* @__PURE__ */ new Map();
		function interpretChunk(chunk) {
			return fu(JSON.parse(chunk), {
				refs,
				disabledFeatures: DISABLED_FEATURES,
				depthLimit: MAX_SERIALIZATION_DEPTH_LIMIT,
				plugins: DEFAULT_PLUGINS
			});
		}
		reader.drain(interpretChunk);
		return interpretChunk(result.value);
	}
}
var BODY_FORMAT_KEY = "X-Start-Type";
var BODY_FORMAL_FILE = "__START__";
var BodyFormat;
(function(BodyFormat) {
	BodyFormat["Seroval"] = "0";
	BodyFormat["String"] = "1";
	BodyFormat["FormData"] = "2";
	BodyFormat["URLSearchParams"] = "3";
	BodyFormat["Blob"] = "4";
	BodyFormat["File"] = "5";
	BodyFormat["ArrayBuffer"] = "6";
	BodyFormat["Uint8Array"] = "7";
})(BodyFormat || (BodyFormat = {}));
function getHeadersAndBody(body) {
	switch (true) {
		case typeof body === "string": return {
			headers: {
				"Content-Type": "text/plain",
				[BODY_FORMAT_KEY]: BodyFormat.String
			},
			body
		};
		case body instanceof FormData: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.FormData },
			body
		};
		case body instanceof URLSearchParams: return {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				[BODY_FORMAT_KEY]: BodyFormat.URLSearchParams
			},
			body
		};
		case body instanceof File: {
			const formData = new FormData();
			formData.append(BODY_FORMAL_FILE, body, body.name);
			return {
				headers: { [BODY_FORMAT_KEY]: BodyFormat.File },
				body: formData
			};
		}
		case body instanceof Blob: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.Blob },
			body
		};
		case body instanceof ArrayBuffer: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.ArrayBuffer },
			body
		};
		case body instanceof Uint8Array: return {
			headers: { [BODY_FORMAT_KEY]: BodyFormat.Uint8Array },
			body: new Uint8Array(body)
		};
		default: return;
	}
}
async function extractBody(instance, client, source) {
	const contentType = source.headers.get("content-type");
	const startType = source.headers.get(BODY_FORMAT_KEY);
	const clone = source.clone();
	switch (true) {
		case startType === BodyFormat.Seroval: return await deserializeJSONStream(clone);
		case startType === BodyFormat.String: return await clone.text();
		case startType === BodyFormat.File: return (await clone.formData()).get(BODY_FORMAL_FILE);
		case startType === BodyFormat.FormData:
		case contentType?.startsWith("multipart/form-data"): return await clone.formData();
		case startType === BodyFormat.URLSearchParams:
		case contentType?.startsWith("application/x-www-form-urlencoded"): return new URLSearchParams(await clone.text());
		case startType === BodyFormat.Blob: return await clone.blob();
		case startType === BodyFormat.ArrayBuffer: return await clone.arrayBuffer();
		case startType === BodyFormat.Uint8Array: return new Uint8Array(await clone.arrayBuffer());
	}
}
var REGISTRATIONS = /* @__PURE__ */ new Map();
function getServerFunction(id) {
	const fn = REGISTRATIONS.get(id);
	if (fn) return fn;
	throw new Error("invalid server function: " + id);
}
var validRedirectStatuses = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]);
function getExpectedRedirectStatus(response) {
	if (response.status && validRedirectStatuses.has(response.status)) return response.status;
	return 302;
}
async function handleServerFunction(h3Event) {
	const event = getFetchEvent(h3Event);
	const request = event.request;
	const serverReference = request.headers.get("X-Server-Id");
	const instance = request.headers.get("X-Server-Instance");
	const singleFlight = request.headers.has("X-Single-Flight");
	const url = new URL(request.url);
	let functionId;
	if (serverReference) [functionId] = serverReference.split("#");
	else {
		functionId = url.searchParams.get("id");
		if (!functionId) return new Response(null, { status: 404 });
	}
	const serverFunction = getServerFunction(functionId);
	let parsed = [];
	if (!instance || request.method === "GET") {
		const args = url.searchParams.get("args");
		if (args) {
			const result = await deserializeFromJSONString(args);
			for (const arg of result) parsed.push(arg);
		}
	}
	if (request.method === "POST" && request.body !== null) {
		const bodyFormat = request.headers.get(BODY_FORMAT_KEY);
		const decoded = await extractBody("", false, request.clone());
		if (bodyFormat === BodyFormat.Seroval) parsed = decoded;
		else parsed.push(decoded);
	}
	try {
		let result = await provideRequestEvent(event, async () => {
			sharedConfig.context = { event };
			event.locals.serverFunctionMeta = { id: functionId };
			return serverFunction(...parsed);
		});
		if (singleFlight && instance) result = await handleSingleFlight(event, result);
		if (result instanceof Response) {
			if (result.headers && result.headers.has("X-Content-Raw")) return result;
			if (instance) {
				if (result.headers) mergeResponseHeaders(h3Event, result.headers);
				if (result.status && (result.status < 300 || result.status >= 400)) h3Event.res.status = result.status;
				if (result.customBody) result = await result.customBody();
				else if (result.body == null) result = null;
			}
		}
		if (!instance) return handleNoJS(result, request, parsed);
		const body = getHeadersAndBody(result);
		if (body) return new Response(body.body, { headers: body.headers });
		h3Event.res.headers.set(BODY_FORMAT_KEY, BodyFormat.Seroval);
		h3Event.res.headers.set("content-type", "text/plain");
		return serializeToJSONStream(result);
	} catch (x) {
		if (x instanceof Response) {
			if (singleFlight && instance) x = await handleSingleFlight(event, x);
			if (x.headers) mergeResponseHeaders(h3Event, x.headers);
			if (x.status && (!instance || x.status < 300 || x.status >= 400)) h3Event.res.status = x.status;
			if (x.customBody) x = await x.customBody();
			else if (x.body == null) x = null;
			h3Event.res.headers.set("X-Error", "true");
		} else if (instance) {
			const error = x instanceof Error ? x.message : typeof x === "string" ? x : "true";
			h3Event.res.headers.set("X-Error", error.replace(/[\r\n]+/g, ""));
		} else x = handleNoJS(x, request, parsed, true);
		if (instance) {
			const body = getHeadersAndBody(x);
			if (body) {
				const headers = new Headers(body.headers);
				const errorHeader = h3Event.res.headers.get("X-Error");
				if (errorHeader !== null) headers.set("X-Error", errorHeader);
				return new Response(body.body, { headers: body.headers });
			}
			h3Event.res.headers.set(BODY_FORMAT_KEY, BodyFormat.Seroval);
			h3Event.res.headers.set("content-type", "text/plain");
			return serializeToJSONStream(x);
		}
		return x;
	}
}
function handleNoJS(result, request, parsed, thrown) {
	const url = new URL(request.url);
	const isError = result instanceof Error;
	let statusCode = 302;
	let headers;
	if (result instanceof Response) {
		headers = new Headers(result.headers);
		if (result.headers.has("Location")) {
			headers.set(`Location`, new URL(result.headers.get("Location"), url.origin + "/").toString());
			statusCode = getExpectedRedirectStatus(result);
		}
	} else headers = new Headers({ Location: new URL(request.headers.get("referer")).toString() });
	if (result) headers.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({
		url: url.pathname + url.search,
		result: isError ? result.message : result,
		thrown,
		error: isError,
		input: [...parsed.slice(0, -1), [...parsed[parsed.length - 1].entries()]]
	}))}; Secure; HttpOnly;`);
	return new Response(null, {
		status: statusCode,
		headers
	});
}
var App;
function createSingleFlightHeaders(sourceEvent) {
	const headers = new Headers(sourceEvent.request.headers);
	const cookies = parseCookies(sourceEvent.nativeEvent);
	const SetCookies = sourceEvent.response.headers.getSetCookie();
	headers.delete("cookie");
	SetCookies.forEach((cookie) => {
		if (!cookie) return;
		const { maxAge, expires, name, value } = parseSetCookie(cookie);
		if (maxAge != null && maxAge <= 0) {
			delete cookies[name];
			return;
		}
		if (expires != null && expires.getTime() <= Date.now()) {
			delete cookies[name];
			return;
		}
		cookies[name] = value;
	});
	Object.entries(cookies).forEach(([key, value]) => {
		headers.append("cookie", `${key}=${value}`);
	});
	return headers;
}
async function handleSingleFlight(sourceEvent, result) {
	let revalidate;
	let url = new URL(sourceEvent.request.headers.get("referer")).toString();
	if (result instanceof Response) {
		if (result.headers.has("X-Revalidate")) revalidate = result.headers.get("X-Revalidate").split(",");
		if (result.headers.has("Location")) url = new URL(result.headers.get("Location"), new URL(sourceEvent.request.url).origin + "/").toString();
	}
	const event = { ...sourceEvent };
	event.request = new Request(url, { headers: createSingleFlightHeaders(sourceEvent) });
	return await provideRequestEvent(event, async () => {
		await createPageEvent(event);
		App || (App = (await Promise.resolve().then(() => app_exports)).default);
		event.router.dataOnly = revalidate || true;
		event.router.previousUrl = sourceEvent.request.headers.get("referer");
		try {
			renderToString(() => {
				sharedConfig.context.event = event;
				App();
			});
		} catch (e) {
			console.log(e);
		}
		const body = event.router.data;
		if (!body) return result;
		let containsKey = false;
		for (const key in body) if (body[key] === void 0) delete body[key];
		else containsKey = true;
		if (!containsKey) return result;
		if (!(result instanceof Response)) {
			body["_$value"] = result;
			result = new Response(null, { status: 200 });
		} else if (result.customBody) body["_$value"] = result.customBody();
		result.customBody = () => body;
		result.headers.set("X-Single-Flight", "true");
		return result;
	});
}
var SERVER_FN_BASE = "/_server";
function createBaseHandler(createPageEvent, fn, options = {}) {
	const handler = defineHandler({
		middleware: _solid_start_middleware_default.length ? _solid_start_middleware_default.map(decorateMiddleware) : void 0,
		handler: decorateHandler(async (e) => {
			const event = getRequestEvent();
			const pathname = stripBaseUrl(new URL(event.request.url).pathname);
			if (pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnResponse = await handleServerFunction(e);
				if (serverFnResponse instanceof Response) return produceResponseWithEventHeaders(serverFnResponse);
				return new Response(serverFnResponse, { headers: e.res.headers });
			}
			const match = matchAPIRoute(pathname, event.request.method);
			if (match) {
				const mod = await match.handler.import();
				const fn = event.request.method === "HEAD" ? mod["HEAD"] || mod["GET"] : mod[event.request.method];
				if (typeof fn === "function") {
					event.params = match.params || {};
					sharedConfig.context = { event };
					const res = await fn(event);
					if (res !== void 0) {
						if (res instanceof Response) return produceResponseWithEventHeaders(res);
						return res;
					}
					if (event.request.method !== "GET") throw new Error(`API handler for ${event.request.method} "${event.request.url}" did not return a response.`);
					if (!match.isPage) return;
				}
			}
			const context = await createPageEvent(event);
			const resolvedOptions = typeof options === "function" ? await options(context) : { ...options };
			const mode = resolvedOptions.mode || "stream";
			if (resolvedOptions.nonce) context.nonce = resolvedOptions.nonce;
			if (mode === "sync" || false) {
				const html = renderToString(() => {
					sharedConfig.context.event = context;
					return fn(context);
				}, resolvedOptions);
				context.complete = true;
				if (context.response && context.response.headers.get("Location")) {
					const status = getExpectedRedirectStatus(context.response);
					return redirect(context.response.headers.get("Location"), status);
				}
				event.response.headers.set("content-type", "text/html");
				return html;
			}
			if (resolvedOptions.onCompleteAll) {
				const og = resolvedOptions.onCompleteAll;
				resolvedOptions.onCompleteAll = (options) => {
					handleStreamCompleteRedirect(context)(options);
					og(options);
				};
			} else resolvedOptions.onCompleteAll = handleStreamCompleteRedirect(context);
			if (resolvedOptions.onCompleteShell) {
				const og = resolvedOptions.onCompleteShell;
				resolvedOptions.onCompleteShell = (options) => {
					handleShellCompleteRedirect(context, e)();
					og(options);
				};
			} else resolvedOptions.onCompleteShell = handleShellCompleteRedirect(context, e);
			const stream = renderToStream(() => {
				sharedConfig.context.event = context;
				return fn(context);
			}, resolvedOptions);
			if (context.response && context.response.headers.get("Location")) {
				const status = getExpectedRedirectStatus(context.response);
				return redirect(context.response.headers.get("Location"), status);
			}
			if (mode === "async") return await stream;
			delete stream.then;
			if (globalThis.USING_SOLID_START_DEV_SERVER) return stream;
			const { writable, readable } = new TransformStream();
			stream.pipeTo(writable);
			return readable;
		})
	});
	const app = new H3();
	app.use(handler);
	return app;
}
function createHandler(fn, options = {}) {
	return createBaseHandler(createPageEvent, fn, options);
}
async function createPageEvent(ctx) {
	ctx.response.headers.set("Content-Type", "text/html");
	const manifest = getSsrManifest("client");
	const assets = [
		...await manifest.getAssets("style.css"),
		...await manifest.getAssets("./src/entry-client.tsx"),
		...await manifest.getAssets("/Users/collinpfeifer/orca/workspaces/madcactus.org/crpfeife-redesign/basalt/src/app.tsx")
	];
	return Object.assign(ctx, {
		assets,
		router: { submission: initFromFlash(ctx) },
		routes: createRoutes(),
		complete: false,
		$islands: /* @__PURE__ */ new Set()
	});
}
function initFromFlash(ctx) {
	const flash = getCookie(ctx.nativeEvent, "flash");
	if (!flash) return;
	try {
		const param = JSON.parse(flash);
		if (!param || !param.result) return;
		const input = [...param.input.slice(0, -1), new Map(param.input[param.input.length - 1])];
		const result = param.error ? new Error(param.result) : param.result;
		return {
			input,
			url: param.url,
			pending: false,
			result: param.thrown ? void 0 : result,
			error: param.thrown ? result : void 0
		};
	} catch (e) {
		console.error(e);
	} finally {
		setCookie(ctx.nativeEvent, "flash", "", { maxAge: 0 });
	}
}
function handleShellCompleteRedirect(context, e) {
	return () => {
		if (context.response && context.response.headers.get("Location")) {
			const status = getExpectedRedirectStatus(context.response);
			e.res.status = status;
			e.res.headers.set("Location", context.response.headers.get("Location"));
		}
	};
}
function handleStreamCompleteRedirect(context) {
	return ({ write }) => {
		context.complete = true;
		const to = context.response && context.response.headers.get("Location");
		to && write(`<script>window.location=${JSON.stringify(to).replace(/</g, "\\u003c")}<\/script>`);
	};
}
function produceResponseWithEventHeaders(res) {
	const event = getRequestEvent();
	let ret = res;
	if (300 <= res.status && res.status < 400) {
		const cookies = res.headers.getSetCookie?.() ?? [];
		const headers = new Headers();
		res.headers.forEach((value, key) => {
			if (key.toLowerCase() !== "set-cookie") headers.set(key, value);
		});
		for (const cookie of cookies) headers.append("Set-Cookie", cookie);
		ret = new Response(res.body, {
			status: res.status,
			statusText: res.statusText,
			headers
		});
	}
	const eventCookies = event.response.headers.getSetCookie?.() ?? [];
	for (const cookie of eventCookies) ret.headers.append("Set-Cookie", cookie);
	for (const [name, value] of event.response.headers) if (name.toLowerCase() !== "set-cookie") ret.headers.set(name, value);
	return ret;
}
function stripBaseUrl(path) {
	return path;
}
/**
* Checks if user has set a redirect status in the response.
* If not, falls back to the 302 (temporary redirect)
*/
var _tmpl$ = ["<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\">", "</head>"];
var _tmpl$2 = [
	"<html",
	" lang=\"en\">",
	"<body><div id=\"app\">",
	"</div><!--$-->",
	"<!--/--></body></html>"
];
var entry_server_default = createHandler(() => createComponent(StartServer, { document: ({ assets, children, scripts }) => ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, { get children() {
	return ssr(_tmpl$, escape(assets));
} }), escape(children), escape(scripts)) }));
//#endregion
export { entry_server_default as default };
