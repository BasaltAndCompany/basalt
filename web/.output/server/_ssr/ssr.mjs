import { $ as untrack, A as catchError, B as createSignal, C as ErrorBoundary, D as Suspense, E as Show, G as on, H as getOwner, I as createMemo, J as resetErrorBoundaries, K as onCleanup, L as createRenderEffect, M as createComponent, P as createContext, Q as startTransition, U as lazy, V as createUniqueId, W as mergeProps, X as sharedConfig, Y as runWithOwner, _ as ssrElement, a as Hydration, et as useContext, g as ssrAttribute, h as ssr, j as children, k as batch, l as escape, m as renderToString, o as HydrationScript, p as renderToStream, r as provideRequestEvent, s as NoHydration, u as getRequestEvent, v as ssrHydrationKey, x as useAssets, z as createRoot } from "../_libs/solid-js.mjs";
//#region \0rolldown/runtime.js
var __defProp$1 = Object.defineProperty;
var __exportAll$1 = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$1(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll$1({
	default: () => entry_server_default,
	i: () => Title,
	n: () => setFunctionName,
	r: () => Meta,
	t: () => useParams
});
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
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) return input;
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var normalize = function(path) {
	if (path.length === 0) return ".";
	path = normalizeWindowsPath(path);
	const isUNCPath = path.match(_UNC_REGEX);
	const isPathAbsolute = isAbsolute(path);
	const trailingSeparator = path[path.length - 1] === "/";
	path = normalizeString(path, !isPathAbsolute);
	if (path.length === 0) {
		if (isPathAbsolute) return "/";
		return trailingSeparator ? "./" : ".";
	}
	if (trailingSeparator) path += "/";
	if (_DRIVE_LETTER_RE.test(path)) path += "/";
	if (isUNCPath) {
		if (!isPathAbsolute) return `//./${path}`;
		return `//${path}`;
	}
	return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
var join = function(...segments) {
	let path = "";
	for (const seg of segments) {
		if (!seg) continue;
		if (path.length > 0) {
			const pathTrailing = path[path.length - 1] === "/";
			const segLeading = seg[0] === "/";
			if (pathTrailing && segLeading) path += seg.slice(1);
			else path += pathTrailing || segLeading ? seg : `/${seg}`;
		} else path += seg;
	}
	return normalize(path);
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) char = path[index];
		else if (char === "/") break;
		else char = "/";
		if (char === "/") {
			if (lastSlash === index - 1 || dots === 1);
			else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf("/");
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
						}
						lastSlash = index;
						dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = index;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? "/.." : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) res += `/${path.slice(lastSlash + 1, index)}`;
				else res = path.slice(lastSlash + 1, index);
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) ++dots;
		else dots = -1;
	}
	return res;
}
var isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};
var clientViteManifest = {
	"../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-ext-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-latin-ext-opsz-normal-CoJBavOu.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-ext-opsz-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-latin-opsz-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-math-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-math-opsz-normal-CbZAXtrh.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-math-opsz-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-symbols-opsz-normal.woff2": {
		"file": "_build/assets/bodoni-moda-symbols-opsz-normal-d21etpfE.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+bodoni-moda@5.3.0/node_modules/@fontsource-variable/bodoni-moda/files/bodoni-moda-symbols-opsz-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-cyrillic-ext-wght-normal.woff2": {
		"file": "_build/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-cyrillic-ext-wght-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2": {
		"file": "_build/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2": {
		"file": "_build/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2": {
		"file": "_build/assets/geist-latin-wght-normal-BgDaEnEv.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2"
	},
	"../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2": {
		"file": "_build/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2",
		"src": "../node_modules/.bun/@fontsource-variable+geist@5.3.0/node_modules/@fontsource-variable/geist/files/geist-vietnamese-wght-normal.woff2"
	},
	"_card-Dn8LRbVz.js": {
		"file": "_build/assets/card-Dn8LRbVz.js",
		"name": "card",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_createAsync-Cd30YF3_.js": {
		"file": "_build/assets/createAsync-Cd30YF3_.js",
		"name": "createAsync",
		"imports": ["_web-Bf2WcyEa.js", "_utils-C5uTcCG4.js"]
	},
	"_dist-Bfhshbr9.js": {
		"file": "_build/assets/dist-Bfhshbr9.js",
		"name": "dist",
		"imports": ["_web-Bf2WcyEa.js"]
	},
	"_input-CPeEP3Md.js": {
		"file": "_build/assets/input-CPeEP3Md.js",
		"name": "input",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_label-kTf9Enyu.js": {
		"file": "_build/assets/label-kTf9Enyu.js",
		"name": "label",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_logo-DeT9Z6q4.js": {
		"file": "_build/assets/logo-DeT9Z6q4.js",
		"name": "logo",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_routing-CecSaODk.js": {
		"file": "_build/assets/routing-CecSaODk.js",
		"name": "routing",
		"imports": ["_web-Bf2WcyEa.js", "_utils-C5uTcCG4.js"]
	},
	"_separator-CDqdeI3h.js": {
		"file": "_build/assets/separator-CDqdeI3h.js",
		"name": "separator",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_site-Bha_-JLz.js": {
		"file": "_build/assets/site-Bha_-JLz.js",
		"name": "site",
		"imports": [
			"_web-Bf2WcyEa.js",
			"_dist-Bfhshbr9.js",
			"_src-80yAutk3.js",
			"_logo-DeT9Z6q4.js"
		]
	},
	"_site-state-CIUA0Awq.js": {
		"file": "_build/assets/site-state-CIUA0Awq.js",
		"name": "site-state"
	},
	"_src-80yAutk3.js": {
		"file": "_build/assets/src-80yAutk3.js",
		"name": "src",
		"imports": ["_web-Bf2WcyEa.js"]
	},
	"_textarea-DLhaI_tV.js": {
		"file": "_build/assets/textarea-DLhaI_tV.js",
		"name": "textarea",
		"imports": ["_web-Bf2WcyEa.js", "_src-80yAutk3.js"]
	},
	"_utils-C5uTcCG4.js": {
		"file": "_build/assets/utils-C5uTcCG4.js",
		"name": "utils",
		"imports": ["_web-Bf2WcyEa.js"]
	},
	"_web-Bf2WcyEa.js": {
		"file": "_build/assets/web-Bf2WcyEa.js",
		"name": "web"
	},
	"src/entry-client.tsx": {
		"file": "_build/assets/entry-client-CN4PJZV1.js",
		"name": "entry-client",
		"src": "src/entry-client.tsx",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_dist-Bfhshbr9.js",
			"_routing-CecSaODk.js",
			"_utils-C5uTcCG4.js"
		],
		"dynamicImports": [
			"src/routes/index.tsx?pick=Site&pick=default&pick=$css",
			"src/routes/footage.tsx?pick=default&pick=$css",
			"src/routes/contact.tsx?pick=default&pick=$css",
			"src/routes/brain.tsx?pick=default&pick=$css",
			"src/routes/iu.tsx?pick=default&pick=$css",
			"src/routes/writing.tsx?pick=default&pick=$css",
			"src/routes/careers.tsx?pick=default&pick=$css",
			"src/routes/ui.tsx?pick=default&pick=$css",
			"src/routes/newsletter/index.tsx?pick=default&pick=$css",
			"src/routes/newsletter/[id].tsx?pick=default&pick=$css"
		],
		"css": ["_build/assets/entry-client-wfSJLOww.css"],
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
	"src/routes/brain.tsx?pick=default&pick=$css": {
		"file": "_build/assets/brain-Cju-ccLU.js",
		"name": "brain",
		"src": "src/routes/brain.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_input-CPeEP3Md.js",
			"_label-kTf9Enyu.js",
			"_textarea-DLhaI_tV.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/careers.tsx?pick=default&pick=$css": {
		"file": "_build/assets/careers-auEqQPjm.js",
		"name": "careers",
		"src": "src/routes/careers.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/contact.tsx?pick=default&pick=$css": {
		"file": "_build/assets/contact-CN-aLTcB.js",
		"name": "contact",
		"src": "src/routes/contact.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_input-CPeEP3Md.js",
			"_label-kTf9Enyu.js",
			"_textarea-DLhaI_tV.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/footage.tsx?pick=default&pick=$css": {
		"file": "_build/assets/footage-BGCOTvLQ.js",
		"name": "footage",
		"src": "src/routes/footage.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_card-Dn8LRbVz.js",
			"_input-CPeEP3Md.js",
			"_label-kTf9Enyu.js",
			"_separator-CDqdeI3h.js",
			"_site-state-CIUA0Awq.js"
		]
	},
	"src/routes/index.tsx?pick=Site&pick=default&pick=$css": {
		"file": "_build/assets/index-D0DCvAnI.js",
		"name": "index",
		"src": "src/routes/index.tsx?pick=Site&pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_logo-DeT9Z6q4.js",
			"_site-state-CIUA0Awq.js"
		]
	},
	"src/routes/iu.tsx?pick=default&pick=$css": {
		"file": "_build/assets/iu-CGeesrDo.js",
		"name": "iu",
		"src": "src/routes/iu.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_separator-CDqdeI3h.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/newsletter/[id].tsx?pick=default&pick=$css": {
		"file": "_build/assets/_id_-CtRe8eMZ.js",
		"name": "_id_",
		"src": "src/routes/newsletter/[id].tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_dist-Bfhshbr9.js",
			"_routing-CecSaODk.js",
			"_src-80yAutk3.js",
			"_createAsync-Cd30YF3_.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/newsletter/index.tsx?pick=default&pick=$css": {
		"file": "_build/assets/index-5AQvBJkb.js",
		"name": "index",
		"src": "src/routes/newsletter/index.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_createAsync-Cd30YF3_.js",
			"_input-CPeEP3Md.js",
			"_site-Bha_-JLz.js"
		]
	},
	"src/routes/ui.tsx?pick=default&pick=$css": {
		"file": "_build/assets/ui-ymVyGPoU.js",
		"name": "ui",
		"src": "src/routes/ui.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_src-80yAutk3.js",
			"_card-Dn8LRbVz.js",
			"_input-CPeEP3Md.js",
			"_label-kTf9Enyu.js",
			"_textarea-DLhaI_tV.js",
			"_separator-CDqdeI3h.js"
		]
	},
	"src/routes/writing.tsx?pick=default&pick=$css": {
		"file": "_build/assets/writing-CEgH-De3.js",
		"name": "writing",
		"src": "src/routes/writing.tsx?pick=default&pick=$css",
		"isEntry": true,
		"imports": [
			"_web-Bf2WcyEa.js",
			"_createAsync-Cd30YF3_.js",
			"_site-Bha_-JLz.js"
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
var Meta = (props) => MetaTag("meta", props);
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
function normalizePath$1(path, omitSlash = false) {
	const s = path.replace(trimPathRegex, "$1");
	return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
	if (hasSchemeRegex.test(path)) return;
	const basePath = normalizePath$1(base);
	const fromPath = from && normalizePath$1(from);
	let result = "";
	if (!fromPath || path.startsWith("/")) result = basePath;
	else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) result = basePath + fromPath;
	else result = fromPath;
	return (result || "/") + normalizePath$1(path, !result);
}
function invariant(value, message) {
	if (value == null) throw new Error(message);
	return value;
}
function joinPaths(from, to) {
	return normalizePath$1(from).replace(/\/*(\*.*)?$/g, "") + normalizePath$1(to);
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
function setFunctionName(obj, value) {
	Object.defineProperty(obj, "name", {
		value,
		writable: false,
		configurable: false
	});
	return obj;
}
var MAX_REDIRECTS = 100;
/** Consider this API opaque and internal. It is likely to change in the future. */
var RouterContextObj = createContext();
var RouteContextObj = createContext();
var useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
/**
* Retrieves a reactive, store-like object containing the current route path parameters as defined in the Route.
*
* @example
* ```js
* const params = useParams();
*
* // fetch user based on the id path parameter
* const [user] = createResource(() => params.id, fetchUser);
* ```
*/
var useParams = () => useRouter().params;
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
			"build": () => import("./routes-BtpYac5f.mjs"),
			"import": () => import("./routes-BtpYac5f.mjs")
		},
		"path": "/"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/footage.tsx?pick=default&pick=$css",
			"build": () => import("./footage-Ce7D052r.mjs"),
			"import": () => import("./footage-Ce7D052r.mjs")
		},
		"path": "/footage"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/contact.tsx?pick=default&pick=$css",
			"build": () => import("./contact-BPFEldQy.mjs"),
			"import": () => import("./contact-BPFEldQy.mjs")
		},
		"path": "/contact"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/brain.tsx?pick=default&pick=$css",
			"build": () => import("./brain-C7rylGvJ.mjs"),
			"import": () => import("./brain-C7rylGvJ.mjs")
		},
		"path": "/brain"
	},
	{
		"page": false,
		"$GET": {
			"src": "src/routes/scorecard.ts?pick=GET",
			"build": () => import("./scorecard-DzP8s6E3.mjs"),
			"import": () => import("./scorecard-DzP8s6E3.mjs")
		},
		"$HEAD": {
			"src": "src/routes/scorecard.ts?pick=GET",
			"build": () => import("./scorecard-DzP8s6E3.mjs"),
			"import": () => import("./scorecard-DzP8s6E3.mjs")
		},
		"path": "/scorecard"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/iu.tsx?pick=default&pick=$css",
			"build": () => import("./iu-OsbnqU9I.mjs"),
			"import": () => import("./iu-OsbnqU9I.mjs")
		},
		"path": "/iu"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/writing.tsx?pick=default&pick=$css",
			"build": () => import("./writing-B8OAlVwX.mjs"),
			"import": () => import("./writing-B8OAlVwX.mjs")
		},
		"path": "/writing"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/careers.tsx?pick=default&pick=$css",
			"build": () => import("./careers-lgHHtbhj.mjs"),
			"import": () => import("./careers-lgHHtbhj.mjs")
		},
		"path": "/careers"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/ui.tsx?pick=default&pick=$css",
			"build": () => import("./ui-CK3TGcz9.mjs"),
			"import": () => import("./ui-CK3TGcz9.mjs")
		},
		"path": "/ui"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/newsletter/index.tsx?pick=default&pick=$css",
			"build": () => import("./newsletter-VyoSaBcS.mjs"),
			"import": () => import("./newsletter-VyoSaBcS.mjs")
		},
		"path": "/newsletter/"
	},
	{
		"page": true,
		"$component": {
			"src": "src/routes/newsletter/[id].tsx?pick=default&pick=$css",
			"build": () => import("../_id_-ConznEos.mjs"),
			"import": () => import("../_id_-ConznEos.mjs")
		},
		"path": "/newsletter/:id"
	}
];
var NODE_TYPES = {
	NORMAL: 0,
	WILDCARD: 1,
	PLACEHOLDER: 2
};
function createRouter$1(options = {}) {
	const ctx = {
		options,
		rootNode: createRadixNode(),
		staticRoutesMap: {}
	};
	const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
	if (options.routes) for (const path in options.routes) insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
	return {
		ctx,
		lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
		insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
		remove: (path) => remove(ctx, normalizeTrailingSlash(path))
	};
}
function lookup(ctx, path) {
	const staticPathNode = ctx.staticRoutesMap[path];
	if (staticPathNode) return staticPathNode.data;
	const sections = path.split("/");
	const params = {};
	let paramsFound = false;
	let wildcardNode = null;
	let node = ctx.rootNode;
	let wildCardParam = null;
	for (let i = 0; i < sections.length; i++) {
		const section = sections[i];
		if (node.wildcardChildNode !== null) {
			wildcardNode = node.wildcardChildNode;
			wildCardParam = sections.slice(i).join("/");
		}
		const nextNode = node.children.get(section);
		if (nextNode === void 0) {
			if (node && node.placeholderChildren.length > 1) {
				const remaining = sections.length - i;
				node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
			} else node = node.placeholderChildren[0] || null;
			if (!node) break;
			if (node.paramName) params[node.paramName] = section;
			paramsFound = true;
		} else node = nextNode;
	}
	if ((node === null || node.data === null) && wildcardNode !== null) {
		node = wildcardNode;
		params[node.paramName || "_"] = wildCardParam;
		paramsFound = true;
	}
	if (!node) return null;
	if (paramsFound) return {
		...node.data,
		params: paramsFound ? params : void 0
	};
	return node.data;
}
function insert(ctx, path, data) {
	let isStaticRoute = true;
	const sections = path.split("/");
	let node = ctx.rootNode;
	let _unnamedPlaceholderCtr = 0;
	const matchedNodes = [node];
	for (const section of sections) {
		let childNode;
		if (childNode = node.children.get(section)) node = childNode;
		else {
			const type = getNodeType(section);
			childNode = createRadixNode({
				type,
				parent: node
			});
			node.children.set(section, childNode);
			if (type === NODE_TYPES.PLACEHOLDER) {
				childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
				node.placeholderChildren.push(childNode);
				isStaticRoute = false;
			} else if (type === NODE_TYPES.WILDCARD) {
				node.wildcardChildNode = childNode;
				childNode.paramName = section.slice(3) || "_";
				isStaticRoute = false;
			}
			matchedNodes.push(childNode);
			node = childNode;
		}
	}
	for (const [depth, node2] of matchedNodes.entries()) node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
	node.data = data;
	if (isStaticRoute === true) ctx.staticRoutesMap[path] = node;
	return node;
}
function remove(ctx, path) {
	let success = false;
	const sections = path.split("/");
	let node = ctx.rootNode;
	for (const section of sections) {
		node = node.children.get(section);
		if (!node) return success;
	}
	if (node.data) {
		const lastSection = sections.at(-1) || "";
		node.data = null;
		if (Object.keys(node.children).length === 0 && node.parent) {
			node.parent.children.delete(lastSection);
			node.parent.wildcardChildNode = null;
			node.parent.placeholderChildren = [];
		}
		success = true;
	}
	return success;
}
function createRadixNode(options = {}) {
	return {
		type: options.type || NODE_TYPES.NORMAL,
		maxDepth: 0,
		parent: options.parent || null,
		children: /* @__PURE__ */ new Map(),
		data: options.data || null,
		paramName: options.paramName || null,
		wildcardChildNode: null,
		placeholderChildren: []
	};
}
function getNodeType(str) {
	if (str.startsWith("**")) return NODE_TYPES.WILDCARD;
	if (str[0] === ":" || str === "*") return NODE_TYPES.PLACEHOLDER;
	return NODE_TYPES.NORMAL;
}
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
var router = createRouter$1({ routes: solid_start_routes_default.reduce((memo, route) => {
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
var NullProtoObj = /* @__PURE__ */ (() => {
	const e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
function createRouter() {
	return {
		root: { key: "" },
		static: new NullProtoObj()
	};
}
var UNNAMED_GROUP_PREFIX = "__rou3_unnamed_";
var ESCAPED_GROUP_PREFIX = "__rou3_esc_";
function toUnnamedGroupKey(key) {
	return typeof key === "string" ? toGroupName(key) : `${UNNAMED_GROUP_PREFIX}${key}`;
}
function toGroupName(name) {
	return /^(?!__rou3_|_\d)[A-Za-z_]\w*$/.test(name) ? name : ESCAPED_GROUP_PREFIX + name.replace(/[_-]/g, (c) => c === "_" ? "__" : "_h");
}
function fromGroupName(key) {
	if (key.charCodeAt(0) !== 95) return key;
	if (key.startsWith("__rou3_esc_")) return key.slice(11).replace(/__|_h/g, (c) => c === "__" ? "_" : "-");
	return key.startsWith("__rou3_unnamed_") ? key.slice(15) : key;
}
function emptyParam(m, segments) {
	const pMap = m.paramsMap;
	const params = pMap && getMatchParams(segments, pMap, m.suffix);
	return !!pMap?.some(([, name, , empty]) => !empty && name > ":" && /(^|\/)(\/|$)/.test(params[name]));
}
function matchesZero(m) {
	const last = m.paramsMap[m.paramsMap.length - 1];
	return last[2] || !!last[3] && !last[5];
}
function normalizePath(path) {
	if (!path.includes("/.")) return path;
	const r = [];
	let s = "";
	for (s of path.split("/")) if (s === ".") continue;
	else if (s === "..") {
		if (r.length > 1) r.pop();
	} else r.push(s);
	if (s === "." || s === "..") r.push("");
	return r.join("/") || "/";
}
function splitPath(path) {
	const s = path.split("/");
	s.shift();
	return s;
}
function methodEntries(methods, method, reverse) {
	let own = methods[method];
	let any = method ? methods[""] : void 0;
	if (reverse) {
		own &&= own.slice().reverse();
		any &&= any.slice().reverse();
	}
	return own && any ? any.concat(own) : own || any;
}
function reverseVariants(entries) {
	let out;
	for (let i = 0, j; i < entries.length; i = j) {
		const token = entries[i].variants;
		for (j = i + 1; token && entries[j]?.variants === token; j++);
		if (j - i > 1) (out ??= entries.slice()).splice(i, j - i, ...entries.slice(i, j).reverse());
	}
	return out || entries;
}
function setParam(params, key, value, join) {
	params[key] = join && params[key] !== void 0 ? params[key] + "/" + value : value;
}
function getMatchParams(segments, paramsMap, suffix, slash) {
	const params = new NullProtoObj();
	const end = suffix ? segments.length - suffix[1] : segments.length;
	for (const [index, name, optional, , , join] of paramsMap) {
		if (~index >= end && (optional || !slash)) continue;
		const segment = index < 0 ? segments.slice(~index, end).join("/") : segments[suffix && index > suffix[0] ? index - suffix[0] - 1 + end : index];
		if (typeof name === "string") {
			setParam(params, name, segment, join);
			if (index < 0 && optional && !join) params._ = segment;
		} else {
			const match = segment.match(name);
			if (match) {
				for (const key in match.groups) if (match.groups[key] !== void 0) setParam(params, fromGroupName(key), match.groups[key], join);
			}
		}
	}
	return params;
}
function encodeEscapes(path) {
	if (!path.includes("\\")) return path;
	return path.replace(/\\([:(){}\\])/g, (_, c) => "�" + ESCAPABLE.indexOf(c));
}
function decodeEscapes(segment, prefix) {
	return segment.replace(/\uFFFD([0-5])/g, (_, i) => prefix + ESCAPABLE[i]);
}
var ESCAPABLE = ":(){}\\";
function segmentKey(segment) {
	if (segment === "*" || segment.startsWith("**")) return 2;
	if (segment.includes(":") || segment.includes("(") || segmentWildcards(segment).length > 0) return 1;
	if (segment.includes("\\")) segment = segment.replace(/\\([\s\S])/g, "$1");
	if (segment.includes("�")) segment = decodeEscapes(segment, "");
	return encodeLiteral(segment);
}
function encodeLiteral(text) {
	return /[\0- "#<>?^`{}\x7F-\uFFFC]/.test(text) ? text.replace(/[\0- "#<>?^`{}\x7F-\uFFFC]+/g, (run) => encodeURIComponent(run.replace(/[\uD800-\uDFFF]/gu, "�"))) : text;
}
function checkConstraints(route) {
	if (!/[\t\n\r\\({}\uFFFD-\uFFFF]/.test(route)) return;
	if (/[\t\n\r\uFFFD-\uFFFF]/.test(route)) invalidSyntax("a tab, LF, CR (use %09, %0A, %0D) or U+FFFD-U+FFFF char", route);
	let s = route.replace(/\\([^/])/g, (_, c) => c > "0" && c <= "9" ? "\0" : "_");
	while (s !== (s = s.replace(/\([^()/]*\)/g, (group) => {
		if (/[$^]|^\(\?<?[=!]/.test(group.replace(/\[[^\]]*\]/g, "")) || group.includes("\0")) invalidSyntax("an anchor, look-around, backreference or capturing group in a constraint", route);
		if (classSetOp(group)) invalidSyntax("a `--` / `&&` in a class of a constraint", route);
		return group[1] === "?" && group[2] !== "<" ? "" : "\0";
	})));
	if (s.includes("(")) throw new Error(`rou3: a \`(\` must close in its own segment, escape a literal one as \`\\(\` (${route})`);
	if (s.includes("\\")) invalidSyntax("a `\\` must escape a char of its segment", route);
	if (/[{}]/.test(s.replace(/\{[^{}]*\}/g, ""))) invalidSyntax("unbalanced or nested `{}`", route);
}
function classSetOp(s) {
	let found = false;
	while (!found && /--|&&/.test(s) && s !== (s = s.replace(/\[[^[\]]*\]/g, (k) => {
		found ||= /--|&&/.test(k);
		return "_";
	})));
	return found;
}
function starGroups(path) {
	if (!path.includes("(.*)")) return [path];
	let count = 0;
	let unnamed;
	return [path.replace(/\\[\s\S]|(:[A-Za-z_]\w*)?\((?!\?)(\.\*\)(?!\*))?/g, (m, name, star, at) => {
		if (m[0] === "\\" || !star) {
			if (m[0] === "(") count++;
			return m;
		}
		if (name) {
			const k = count;
			unnamed = (index) => index === k ? name.slice(1) : index > k ? index - 1 : index;
		} else count++;
		return /(^|[^\\])(\\\\)*([)*}?]|:[A-Za-z_]\w*)\{?$/.test(path.slice(0, at)) ? "￿*" : "*";
	}), unnamed];
}
function absolutePattern(path) {
	return /^[/{]/.test(path) ? path : `/${path}`;
}
function dotSegments(path) {
	if (!DOT_SEGMENT.test(path)) return path;
	const s = path.split("/");
	const out = [s[0]];
	let dot = false;
	for (let i = 1; i < s.length; i++) {
		const m = /^(?:\.|%2e)(\.|%2e)?$/i.exec(s[i]);
		if (m) {
			if (m[1] && (out.length > 1 || out[0]) && !isText(out.pop())) invalidSyntax(DOT_SEGMENT_NEXT_TO, path);
			dot = true;
			continue;
		}
		if (dot && /^[:*(]/.test(s[i])) invalidSyntax(DOT_SEGMENT_NEXT_TO, path);
		out.push(s[i]);
		dot = false;
	}
	if (dot) out.push("");
	return out.join("/");
}
var isText = (segment) => typeof segmentKey(segment = encodeEscapes(segment)) === "string" && !/[{}]|(^|[^\\])\?/.test(segment);
var DOT_SEGMENT = /(?:^|\/)(?:\.|%2e){1,2}(?=\/|$)/i;
var DOT_SEGMENT_NEXT_TO = "`.` / `..` segment next to a param, catch-all or group";
function invalidSyntax(what, route) {
	throw new Error(`rou3: ${what} (${route})`);
}
var MISPLACED_MODIFIER = "misplaced `?` / `+` / `*`: `?` follows `:name` or `:name(…)`, `+` / `*` a whole-segment `:name`, none a catch-all (`(.*)` too); escape a literal one with `\\`";
var PARAM_MODIFIER = /^(.*)(:[A-Za-z_]\w*(?:\([^)]*\))?)([?+*])$/;
function expandModifiers(segments, input) {
	for (let i = 0; i < segments.length; i++) {
		const last = segments[i].charCodeAt(segments[i].length - 1);
		if (last !== 63 && last !== 43 && last !== 42) continue;
		const m = segments[i].match(PARAM_MODIFIER);
		if (!m) continue;
		const pre = segments.slice(0, i);
		const suf = segments.slice(i + 1);
		const without = "/" + pre.concat(m[1] || [], suf).join("/");
		if (m[3] === "?" && m[1] !== "**") {
			if (typeof segmentKey(m[1]) !== "string") continue;
			return ["/" + pre.concat(m[1] + m[2], suf).join("/"), without];
		}
		if (m[1] || m[2].includes("(")) invalidSyntax(MISPLACED_MODIFIER, input);
		const wc = "/" + pre.concat("**" + m[2], suf).join("/");
		return m[3] === "+" ? [wc] : [wc, without];
	}
}
function splitStar(segments, input) {
	for (let i = 0; i < segments.length; i++) {
		const segment = segments[i];
		const at = segment.startsWith("**") || segment === "*" ? [] : segmentWildcards(segment);
		if (at.length === 0) continue;
		for (let j = i + 1; j < segments.length && at.length === 1; j++) if (!segments[j].startsWith("**") && segments[j] !== "*") at.push(...segmentWildcards(segments[j]));
		if (at.length > 1) {
			if (at.some((x, k) => at[k + 1] === x + 1)) invalidSyntax(MISPLACED_MODIFIER, input);
			oneCatchAll(input);
		}
		const pre = segments.slice(0, i);
		const post = segments.slice(i + 1);
		const head = segment.slice(0, at[0]);
		const tail = segment.slice(at[0] + 1);
		if (!head) return [
			[pre.concat("**", segment, post)],
			i,
			false
		];
		if (!tail) return [
			[pre.concat(segment, "**", post), segments],
			i + 1,
			true
		];
		return [
			[pre.concat(head + "*", "**", "*" + tail, post), segments],
			i + 1,
			true
		];
	}
}
function oneCatchAll(input) {
	throw new Error(`rou3: a route can have only one \`*\`, \`**\`, \`:name+\` or \`:name*\` (${input})`);
}
function splitRoute(path) {
	const s = splitPath(path);
	while (s[s.length - 1] === "") s.pop();
	if (path.includes("**")) {
		for (let i = 0; i < s.length; i++) if (/^\*\*[^:{}]/.test(s[i])) s.splice(i, 1, ...s[i][2] === "*" ? ["**", s[i].slice(2)] : [s[i].slice(1)]);
	}
	return s;
}
function expandedRouteId(path) {
	if (path.charCodeAt(0) !== 47) return `{${expandedRouteId(`/${path}`)}`;
	return "/" + splitRoute(encodeEscapes(path)).map((segment) => {
		const key = segmentKey(segment);
		return typeof key === "string" ? key : segment;
	}).join("/");
}
function addName(names, name, input) {
	if (names.includes(name) || !/^[A-Za-z_]\w*$/.test(name)) invalidSyntax(`${names.includes(name) ? "duplicate" : "invalid"} param name "${decodeEscapes(name.replace(/\\(?=[\w$\x80-\ufffc])(?![^(]*\))/g, ""), "\\")}"`, input);
	names.push(name);
	return name;
}
function segmentWildcards(segment) {
	const at = [];
	let depth = 0;
	for (let i = 0; i < segment.length; i++) {
		const ch = segment.charCodeAt(i);
		if (ch === 92) i++;
		else if (ch === 40) depth++;
		else if (ch === 41 && depth > 0) depth--;
		else if (ch === 42 && depth === 0) at.push(i);
	}
	return at;
}
function scanFirstGroup(path) {
	let i = 0;
	let depth = 0;
	for (; i < path.length; i++) {
		const c = path.charCodeAt(i);
		if (c === 92) i++;
		else if (c === 40) depth++;
		else if (c === 41 && depth > 0) depth--;
		else if (c === 123 && depth === 0) break;
	}
	if (i >= path.length) return;
	let j = i + 1;
	depth = 0;
	for (; j < path.length; j++) {
		const c = path.charCodeAt(j);
		if (c === 92) j++;
		else if (c === 40) depth++;
		else if (c === 41 && depth > 0) depth--;
		else if (c === 125 && depth === 0) break;
	}
	if (j >= path.length) return;
	const mod = path[j + 1];
	const hasMod = mod === "?" || mod === "+" || mod === "*";
	return [
		path.slice(0, i),
		path.slice(i + 1, j).replace(NAME_CHAR, "\\$&"),
		path.slice(j + (hasMod ? 2 : 1)).replace(NAME_CHAR, "\\$&"),
		hasMod ? mod : void 0
	];
}
var NAME_CHAR = /^[\w$\x80-￼]/;
function expandGroupDelimiters(path, input = path) {
	if (!path.includes("{")) return;
	const group = scanFirstGroup(path);
	if (!group) return;
	const [pre, body, suf, mod] = group;
	if (mod === "+" || mod === "*") invalidSyntax(`unsupported \`{}${mod}\``, input);
	if (mod === "?" && /^(?!\*\*)./.test(pre.slice(pre.lastIndexOf("/") + 1)) && /^:[A-Za-z_]\w*(\([^)]*\))?$/.test(body) && (!suf || suf[0] === "/")) return [pre + body + "?" + suf];
	const full = joinGroup(joinGroup(pre, body, input), suf, input);
	const expanded = mod ? [full, joinGroup(pre, suf, input)] : [full];
	if (expanded.some((e) => DOT_SEGMENT.test(e))) invalidSyntax(DOT_SEGMENT_NEXT_TO, input);
	if (pre) return expanded;
	if (mod && body.charCodeAt(0) === 47 && suf && !/^\{?\//.test(suf)) invalidSyntax("text after a leading `{/...}?`", input);
	return expanded.map(absolutePattern);
}
function joinGroup(a, b, input) {
	const m = /(?<!\\)(\\\\)*((?<!\*\*):\w+|\([^/]*[^\\]\)|\*)([(?+*\uFFFF])$/.exec(a + b[0]);
	if (m) {
		if (m[3] === "￿") return a + b;
		if (m[3] > "(") invalidSyntax(MISPLACED_MODIFIER, input);
		if (m[2] > "*") a += "([^\\x2f]+?)";
	}
	return a + (b.charCodeAt(0) === 65535 ? b.slice(1) : b);
}
function getParamRegexp(segment, unnamedStart, names, input, groupKey = toUnnamedGroupKey) {
	let _i = unnamedStart;
	let _o;
	let _s = "", _d = 0, _e = -1, _g = 0, _r = 0;
	const _c = [];
	for (let j = 0; j < segment.length; j++) {
		const c = segment.charCodeAt(j);
		if (_d === 0) {
			if (c === 65535) {
				_s += "￿";
				continue;
			}
			if (c === 58) _e = j + 1 + addName(names, /^[\w$\x80-\ufffc]*/.exec(segment.slice(j + 1))[0], input).length;
			else if (c === 40 && /[?)]/.test(segment[j + 1])) invalidSyntax("empty or `(?` group", input);
			else if (c === 63 || c === 43 || c === 42 && j === _e) {
				if (c === 63 && j === segment.length - 1 && PARAM_MODIFIER.test(segment)) {
					_s += "?";
					_r--;
					continue;
				}
				invalidSyntax(MISPLACED_MODIFIER, input);
			} else if (c === 42) {
				_e = j + 1;
				_s += "([^/]*)";
				_r--;
				continue;
			}
		} else if (c === 58) {
			_s += "￾:";
			continue;
		}
		if (c === 40) {
			if (_d++ === 0) _g = j;
		} else if (c === 41 && _d > 0) {
			if (--_d === 0) {
				_e = j + 1;
				const p = segment.slice(_g + 1, j);
				if (p !== "[^\\x2f]+?") _c.push(p);
			}
		} else if (_d === 0 && c === 65533 && /[34]/.test(segment[j + 1])) {
			_s += encodeLiteral("{}"[+segment[++j] - 3]);
			_r += 768;
			continue;
		} else if (_d === 0 && /[\0- "#$).<>?[-^`{-}\x7F-\uFFFC]/.test(segment[j])) {
			const esc = c === 92 && j + 1 < segment.length ? 1 : 0;
			const ch = segment.slice(j + esc, j + esc + (segment.codePointAt(j + esc) > 65535 ? 2 : 1));
			const encoded = encodeLiteral(ch);
			j += esc + ch.length - 1;
			_s += encoded !== ch ? encoded : esc && ch !== "*" ? "￾" + ch : "\\" + ch;
			_r += encoded.length * 256;
			continue;
		}
		if (_d === 0 && j >= _e && segment.charCodeAt(j - 1) !== 65533) _r += 256;
		_s += segment[j];
	}
	const regex = decodeEscapes(_s.replace(/(?<!\uFFFE):([A-Za-z_]\w*)(?:\(([^)]*)\))?(\?$)?/g, (m, id, p, o, i, s) => {
		const group = `(?<${toGroupName(id)}>${p && (p != "[^\\x2f]+?" || !/[(\uFFFF]/.test(s[i + m.length])) ? p : "[^/]+?"})`;
		return o ? (_o = id, `(?:${group})?`) : group;
	}).replace(/\((?![?<])/g, () => `(?<${groupKey(_i++)}>`), "￾").replace(/\uFFFE([\s\S])|\uFFFF/g, (_, c = "") => /[.*+?^${}()|[\]\\]/.test(c) ? `\\${c}` : c);
	const regexp = new RegExp(`^${regex}$`);
	for (const p of _c) _r += new RegExp(`^(?:${decodeEscapes(p, "\\")})$`).test("") ? -1 : 1;
	return [
		regexp,
		_i,
		_o,
		_r
	];
}
function linearRegExp(regexp) {
	let source = regexp.source;
	if (!source.includes("[^/]+?)")) return regexp;
	let head = "";
	source = source.replace(/(\(\?<\w+>\[\^\/\]\*\))((?:\\[\s\S]|[^\\()]|(?:\(\?:)?\(\?<\w+>\[\^\/\]\+\?\)(?:\)\?)?)*)\$$/, (all, star, rest) => {
		if (!rest.includes("+?")) return all;
		head = `(?=[^/]*$(?<=(${rest.replace(/((?:\\[\s\S]|[^\\()])+)(?=\()|(\(\?:)?\(\?<\w+>\[\^\/\]\+\?\)(?:\)\?)?/g, (_, L, opt) => L ? L + upTo(L, true) : opt ? "" : "[^/]")})))`;
		return `${star}(?=\\1$)${rest}$`;
	});
	source = source.replace(/\[\^\/\]\+\?\)((?:\\[\s\S]|[^\\()])*)(?=(?:\(\?:)?\(\?<\w+>\[\^\/\](?:\+\?|\*)\))/g, (_, L) => `[^/]${L && upTo(L)})${L}`);
	return source === regexp.source ? regexp : new RegExp(`^${head}${source.slice(1)}`);
}
var upTo = (L, back) => L.replace(/^\\/, "").length < 2 ? `[^/${L}]*` : back ? `(?:[^/](?<!${L}))*` : `(?:(?!${L})[^/])*`;
function addRoute(ctx, method = "", path, data) {
	method = method.toUpperCase();
	path = absolutePattern(path);
	checkConstraints(path);
	const resolved = dotSegments(path);
	const [route, unnamed] = starGroups(resolved);
	variants = void 0;
	_add(ctx, method, route, data, unnamed && expandedRouteId(resolved), path, unnamed);
}
var variants;
function _add(ctx, method, path, data, route, input = path, unnamed = same) {
	const groupExpanded = expandGroupDelimiters(path, input);
	if (groupExpanded) {
		if (groupExpanded[1] !== void 0) {
			route ??= expandedRouteId(path);
			variants ??= {};
		}
		_add(ctx, method, groupExpanded[0], data, route, input, unnamed);
		if (groupExpanded[1] !== void 0) _add(ctx, method, groupExpanded[1], data, route, input, /[*(]/.test(path) ? skipGroup(path, input, unnamed) : unnamed);
		return 0;
	}
	path = encodeEscapes(path);
	const segments = splitRoute(path);
	const expanded = expandModifiers(segments, input);
	if (expanded) {
		route ??= expandedRouteId(path);
		variants ??= {};
		let count = 0;
		for (const p of expanded) count = _add(ctx, method, p, data, route, input, unnamed);
		return count;
	}
	const star = path.includes("*");
	const split = star ? splitStar(segments, input) : void 0;
	if (split) {
		const [routes, join, head] = split;
		if (routes.length > 1) {
			route ??= expandedRouteId(path);
			variants ??= {};
		}
		let count = 0;
		for (const r of routes) count = _insert(ctx, method, r, data, route, input, unnamed, star, r === segments ? -1 : join, head);
		return count;
	}
	return _insert(ctx, method, segments, data, route, input, unnamed, star);
}
function _insert(ctx, method, segments, data, route, input, unnamed, star, join = -1, head) {
	let node = ctx.root;
	let _unnamedParamIndex = 0;
	const paramsMap = [];
	const paramsRegexp = [];
	let rank = 0;
	const names = [];
	let named = false;
	const captureKey = (n) => {
		const k = unnamed(n);
		if (typeof k === "string" && !named) {
			named = true;
			addName(names, k, input);
		}
		return k;
	};
	let suffix;
	let wildcardIndex = -1;
	const trail = star ? [] : void 0;
	for (let i = 0; i < segments.length; i++) {
		let segment = segments[i];
		const key = segmentKey(segment);
		if (key === 2) {
			if (suffix) oneCatchAll(input);
			trail?.push(node);
			if (!node.wildcard) node.wildcard = { key: "**" };
			node = node.wildcard;
			const empty = segment.length === 1 || i === join;
			paramsMap.push([
				-(i + 1),
				i === join ? String(captureKey(head ? _unnamedParamIndex - 1 : _unnamedParamIndex++)) : segment.length === 2 ? (addName(names, "_", input), String(unnamed(_unnamedParamIndex++))) : empty ? String(captureKey(_unnamedParamIndex++)) : addName(names, segment.slice(3), input),
				segment.length === 2 && !(i === join && segments[i + 1]?.charCodeAt(0) !== 42),
				empty,
				void 0,
				i === join
			]);
			if (i === segments.length - 1) break;
			suffix = [];
			wildcardIndex = i;
			continue;
		}
		if (key === 1) {
			if (suffix) suffix.push(1);
			else {
				trail?.push(node);
				if (!node.param) node.param = { key: "*" };
				node = node.param;
			}
			if (!/^:[A-Za-z_]\w*$/.test(segment)) {
				const tail = i === join + 1 && segment.charCodeAt(0) === 42;
				const [source, nextIndex, inPlace, segmentRank] = getParamRegexp(segment, _unnamedParamIndex - (tail ? 1 : 0), names, input, (n) => toUnnamedGroupKey(captureKey(n)));
				_unnamedParamIndex = nextIndex;
				const regexp = paramsRegexp[i] = linearRegExp(source);
				rank += segmentRank;
				if (!suffix) node.hasRegexParam = true;
				paramsMap.push([
					i,
					regexp,
					false,
					/^(?!(?:[\s\S]*:\w+(?![\w?])){2})(?:\*|:[A-Za-z_]\w*)+\??$/.test(segment),
					inPlace,
					tail
				]);
			} else paramsMap.push([
				i,
				addName(names, segment.slice(1), input),
				false
			]);
			continue;
		}
		if (segment.includes("?") && /(^|[^\\])\?/.test(segment)) invalidSyntax(MISPLACED_MODIFIER, input);
		segment = segments[i] = key;
		if (suffix) {
			suffix.push(segment);
			continue;
		}
		trail?.push(node);
		const child = node.static?.[segment];
		if (child) node = child;
		else {
			const staticNode = { key: segment };
			if (!node.static) node.static = new NullProtoObj();
			node.static[segment] = staticNode;
			node = staticNode;
		}
	}
	if (suffix) {
		for (const n of trail) n.hasSuffix = true;
		node = node.suffix ??= { key: "" };
		for (let j = suffix.length - 1; j >= 0; j--) {
			const edge = suffix[j];
			if (edge === 1) node = node.param ??= { key: "*" };
			else node = (node.static ??= new NullProtoObj())[edge] ??= { key: edge };
		}
	}
	const hasParams = paramsMap.length > 0;
	const key = "/" + segments.join("/");
	const methods = node.methods ??= new NullProtoObj();
	(methods[method] ??= []).push({
		data: data ?? null,
		paramsRegexp,
		paramsMap: hasParams ? paramsMap : void 0,
		route: route ?? key,
		suffix: suffix && [wildcardIndex, suffix.length],
		variants,
		rank: rank / 2 ** 32
	});
	if (!hasParams) ctx.static[segments.length > 0 ? key : ""] = node;
	return _unnamedParamIndex;
}
var same = (index) => index;
function skipGroup(path, input, unnamed = same) {
	const [pre, body] = scanFirstGroup(path);
	if (!/[*(]/.test(body) && !pre.endsWith("*")) return unnamed;
	const count = (p) => _add(createRouter(), "", p, void 0, void 0, input);
	const before = count(pre);
	const skip = count(absolutePattern(joinGroup(pre, body, input))) - before;
	return skip ? (index) => unnamed(index < before ? index : index + skip) : unnamed;
}
function collectSuffix(node, method, segments, start, pos, matches, reverse) {
	const match = node.methods && methodEntries(node.methods, method, reverse);
	if (match) {
		const end = pos + 1;
		const weighted = [];
		for (const m of reverse ? match : reverseVariants(match)) {
			const w = m.suffix[0];
			let weight = 0;
			for (const [index, , optional, empty] of m.paramsMap) if (index < 0 && !optional) weight = end > start ? empty ? 2 : 4 : -1;
			const regexps = m.paramsRegexp;
			for (let i = 0; i < regexps.length && weight >= 0; i++) if (regexps[i]) weight = regexps[i].test(segments[i > w ? i - w - 1 + end : i]) ? weight + (m.paramsMap.find((e) => e[0] === i)[3] ? 1 : 4) : -1;
			if (weight >= 0) weighted.push([m, weight + m.rank]);
		}
		for (const [m] of weighted.sort((a, b) => a[1] - b[1])) matches.push(m);
	}
	if (pos >= start) {
		if (node.param) collectSuffix(node.param, method, segments, start, pos - 1, matches, reverse);
		const staticChild = node.static?.[segments[pos]];
		if (staticChild) collectSuffix(staticChild, method, segments, start, pos - 1, matches, reverse);
	}
}
function hasSuffixMatch(node, method, segments, index) {
	const trie = node.wildcard?.suffix;
	if (trie && (trie.param || trie.static?.[segments[segments.length - 1]])) {
		const matches = [];
		collectSuffix(trie, method, segments, index, segments.length - 1, matches);
		if (matches.length > 0) return true;
	}
	if (index < segments.length) {
		const staticChild = node.static?.[segments[index]];
		if (staticChild?.hasSuffix && hasSuffixMatch(staticChild, method, segments, index + 1)) return true;
		if (node.param?.hasSuffix && hasSuffixMatch(node.param, method, segments, index + 1)) return true;
	}
	return false;
}
function rankFromEnd(matches, segments) {
	const n = segments.length;
	return matches.sort((a, b) => {
		for (let p = n - 1; p >= 0; p--) {
			const x = kindAt(a, n, p);
			const y = kindAt(b, n, p);
			if (x < 0 && y < 0) p = ~Math.min(x, y);
			else if (Math.max(x, 0) !== Math.max(y, 0)) return Math.max(x, 0) - Math.max(y, 0);
		}
		return 0;
	});
}
function kindAt(m, n, p) {
	const suffix = m.suffix;
	const end = suffix ? n - suffix[1] : n;
	for (const [index, name, , plain] of m.paramsMap || []) if (index < 0) {
		if (p >= ~index && p < end) return index;
	} else if ((suffix && index > suffix[0] ? index - suffix[0] - 1 + end : index) === p) return typeof name === "string" || plain ? 0 : 2;
	return 3;
}
function _findRanked(ctx, method, segments, reverse) {
	let matches = _findAll(ctx.root, method, segments, 0, [], reverse);
	if (segments.includes("")) matches = matches.filter((m) => !emptyParam(m, segments));
	if (ctx.root.hasSuffix && matches.some((m) => m.suffix)) rankFromEnd(matches, segments);
	return matches;
}
function _findAll(node, method, segments, index, matches = [], reverse) {
	const segment = segments[index];
	if (node.wildcard) {
		const match = node.wildcard.methods && methodEntries(node.wildcard.methods, method, reverse);
		if (match) pushSorted(matches, index < segments.length ? match : match.filter((m) => matchesZero(m)), reverse);
		if (node.wildcard.suffix) collectSuffix(node.wildcard.suffix, method, segments, index, segments.length - 1, matches, reverse);
	}
	if (node.param && index < segments.length) {
		const start = matches.length;
		_findAll(node.param, method, segments, index + 1, matches, reverse);
		if (node.param.hasRegexParam) {
			for (let r = matches.length - 1; r >= start; r--) if (matches[r].paramsRegexp[index]?.test(segment) === false) matches.splice(r, 1);
		}
	}
	if (index < segments.length) {
		const staticChild = node.static?.[segment];
		if (staticChild) _findAll(staticChild, method, segments, index + 1, matches, reverse);
	}
	if (index === segments.length && node.methods) {
		const match = methodEntries(node.methods, method, reverse);
		if (match) pushSorted(matches, match, reverse);
	}
	return matches;
}
function pushSorted(matches, match, reverse) {
	if (match.length > 1) match = (reverse ? match : reverseVariants(match)).map((m) => {
		let w = m.rank;
		const { paramsRegexp: rx, paramsMap: pm } = m;
		for (let i = 0; i < rx.length; i++) if (rx[i]) w += 2;
		const last = pm?.[pm.length - 1];
		if (last && !last[2]) w += last[0] < 0 && last[3] ? 1 : 2;
		return [m, w];
	}).sort((a, b) => a[1] - b[1]).map((e) => e[0]);
	for (const m of match) matches.push(m);
}
function findRoute(ctx, method = "", path, opts) {
	if (opts?.normalize) path = normalizePath(path);
	const slash = path.charCodeAt(path.length - 1) === 47;
	if (slash) path = path.slice(0, -1);
	const staticNode = ctx.static[path];
	if (staticNode && staticNode.methods) {
		const staticMatch = staticNode.methods[method] || staticNode.methods[""];
		if (staticMatch !== void 0) return { data: staticMatch[0].data };
	}
	const segments = splitPath(path);
	let match;
	if (segments.includes("") || ctx.root.hasSuffix && hasSuffixMatch(ctx.root, method, segments, 0)) {
		const matches = _findRanked(ctx, method, segments, true);
		match = matches[matches.length - 1];
	} else match = _lookupTree(ctx.root, method, segments, 0);
	if (match === void 0) return;
	if (opts?.params === false) return { data: match.data };
	return {
		data: match.data,
		params: match.paramsMap ? getMatchParams(segments, match.paramsMap, match.suffix, slash) : void 0
	};
}
function _lookupTree(node, method, segments, index) {
	if (index === segments.length) {
		if (node.methods) {
			const match = _selectMatcher(node.methods, method, segments);
			if (match) return match;
		}
		return node.wildcard?.methods ? _selectMatcher(node.wildcard.methods, method, segments, true) : void 0;
	}
	const segment = segments[index];
	if (node.static) {
		const staticChild = node.static[segment];
		if (staticChild) {
			const match = _lookupTree(staticChild, method, segments, index + 1);
			if (match) return match;
		}
	}
	if (node.param) {
		const match = _lookupTree(node.param, method, segments, index + 1);
		if (match) return match;
	}
	if (node.wildcard && node.wildcard.methods) return _selectMatcher(node.wildcard.methods, method, segments);
}
function _selectMatcher(methods, method, segments, optionalOnly) {
	let any = methods[""];
	const match = methods[method] || any;
	if (!match) return;
	if (match === any) any = void 0;
	const first = match[0];
	if (!any && match.length === 1 && first.paramsRegexp.length === 0) return !optionalOnly || matchesZero(first) ? first : void 0;
	let best;
	let bestWeight = -1;
	let list = match;
	for (; list; list = list === any ? void 0 : any) for (const m of list) {
		const last = m.paramsMap?.[m.paramsMap.length - 1];
		if (optionalOnly && !matchesZero(m)) continue;
		let weight = m.rank + (last && !last[2] ? last[0] < 0 && last[3] ? 1 : 2 : 0);
		const regexps = m.paramsRegexp;
		for (let i = 0; i < regexps.length; i++) if (regexps[i]) {
			if (!regexps[i].test(segments[i])) {
				weight = -1;
				break;
			}
			weight += 2;
		}
		if (weight > bestWeight) {
			best = m;
			bestWeight = weight;
		}
	}
	return best;
}
function lazyInherit(target, source, sourceKey) {
	for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
		if (key === "constructor") continue;
		const targetDesc = Object.getOwnPropertyDescriptor(target, key);
		const desc = Object.getOwnPropertyDescriptor(source, key);
		let modified = false;
		if (desc.get) {
			modified = true;
			desc.get = targetDesc?.get || function() {
				return this[sourceKey][key];
			};
		}
		if (desc.set) {
			modified = true;
			desc.set = targetDesc?.set || function(value) {
				this[sourceKey][key] = value;
			};
		}
		if (!targetDesc?.value && typeof desc.value === "function") {
			modified = true;
			desc.value = function(...args) {
				return this[sourceKey][key](...args);
			};
		}
		if (modified) Object.defineProperty(target, key, desc);
	}
}
var _needsNormRE = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^#"<>{}`\x00-\x20\x7f-\uffff]/i;
var _searchNeedsNormRE = /[#"'<>\x00-\x20\x7f-\uffff]/;
var FastURL = /* @__PURE__ */ (() => {
	const NativeURL = globalThis.URL;
	const NativeSearchParams = globalThis.URLSearchParams;
	const FastURLSearchParams = class URLSearchParams {
		#owner;
		#params;
		constructor(owner) {
			this.#owner = owner;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeSearchParams;
		}
		_adopt(params) {
			this.#params = params;
		}
		get _params() {
			if (!this.#params) {
				const search = this.#owner.search;
				this.#params ??= new NativeSearchParams(search);
			}
			return this.#params;
		}
		#mutable() {
			this.#owner._url;
			return this.#params;
		}
		append(name, value) {
			this.#mutable().append(name, value);
		}
		set(name, value) {
			this.#mutable().set(name, value);
		}
		delete(name, value) {
			this.#mutable().delete(name, value);
		}
		sort() {
			this.#mutable().sort();
		}
	};
	lazyInherit(FastURLSearchParams.prototype, NativeSearchParams.prototype, "_params");
	Object.setPrototypeOf(FastURLSearchParams.prototype, NativeSearchParams.prototype);
	Object.setPrototypeOf(FastURLSearchParams, NativeSearchParams);
	const FastURL = class URL {
		#url;
		#href;
		#protocol;
		#host;
		#pathname;
		#search;
		#searchParams;
		#pos;
		constructor(url) {
			if (typeof url === "string") {
				const isOriginForm = url[0] === "/";
				if (isOriginForm && !_searchNeedsNormRE.test(url)) this.#href = `http://localhost${url}`;
				else this.#url = new NativeURL(isOriginForm ? `http://localhost${url}` : url);
			} else if (_needsNormRE.test(url.pathname) || url.search && _searchNeedsNormRE.test(url.search)) this.#url = new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`);
			else {
				this.#protocol = url.protocol;
				this.#host = url.host;
				this.#pathname = url.pathname;
				this.#search = url.search;
			}
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeURL;
		}
		get _url() {
			if (this.#url) return this.#url;
			this.#url = new NativeURL(this.href);
			this.#href = void 0;
			this.#protocol = void 0;
			this.#host = void 0;
			this.#pathname = void 0;
			this.#search = void 0;
			this.#pos = void 0;
			this.#searchParams?._adopt(this.#url.searchParams);
			return this.#url;
		}
		get href() {
			if (this.#url) return this.#url.href;
			if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
			return this.#href;
		}
		#getPos() {
			if (!this.#pos) {
				const url = this.href;
				const protoIndex = url.indexOf("://");
				const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
				const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
				this.#pos = [
					protoIndex,
					pathnameIndex,
					qIndex
				];
			}
			return this.#pos;
		}
		get pathname() {
			if (this.#url) return this.#url.pathname;
			if (this.#pathname === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.pathname;
				this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
			}
			return this.#pathname;
		}
		get search() {
			if (this.#url) return this.#url.search;
			if (this.#search === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.search;
				const url = this.href;
				this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
			}
			return this.#search;
		}
		get searchParams() {
			if (this.#searchParams) return this.#searchParams;
			if (this.#url) return this.#url.searchParams;
			return this.#searchParams = new FastURLSearchParams(this);
		}
		get protocol() {
			if (this.#url) return this.#url.protocol;
			if (this.#protocol === void 0) {
				const [protocolIndex] = this.#getPos();
				if (protocolIndex === -1) return this._url.protocol;
				const url = this.href;
				this.#protocol = url.slice(0, protocolIndex + 1);
			}
			return this.#protocol;
		}
		get hash() {
			if (this.#url) return this.#url.hash;
			return "";
		}
		toString() {
			return this.href;
		}
		toJSON() {
			return this.href;
		}
	};
	lazyInherit(FastURL.prototype, NativeURL.prototype, "_url");
	Object.setPrototypeOf(FastURL.prototype, NativeURL.prototype);
	Object.setPrototypeOf(FastURL, NativeURL);
	return FastURL;
})();
var FastResponse = Response;
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
	const router = createRouter();
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
			this["~rou3"] = createRouter();
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
		statusText: statusText ?? STATUS_TEXT[status],
		headers: {
			"content-type": "text/html; charset=utf-8",
			location
		}
	});
}
var STATUS_TEXT = {
	204: "No Content",
	301: "Moved Permanently",
	302: "Found",
	303: "See Other",
	307: "Temporary Redirect",
	308: "Permanent Redirect"
};
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
/**
* References
* - https://compat-table.github.io/compat-table/es6/
* - MDN
*/
var Feature = /* @__PURE__ */ function(Feature) {
	Feature[Feature["AggregateError"] = 1] = "AggregateError";
	Feature[Feature["ArrowFunction"] = 2] = "ArrowFunction";
	Feature[Feature["ErrorPrototypeStack"] = 4] = "ErrorPrototypeStack";
	Feature[Feature["ObjectAssign"] = 8] = "ObjectAssign";
	Feature[Feature["BigIntTypedArray"] = 16] = "BigIntTypedArray";
	Feature[Feature["RegExp"] = 32] = "RegExp";
	Feature[Feature["Temporal"] = 64] = "Temporal";
	return Feature;
}({});
var SYM_ASYNC_ITERATOR = Symbol.asyncIterator;
var SYM_HAS_INSTANCE = Symbol.hasInstance;
var SYM_IS_CONCAT_SPREADABLE = Symbol.isConcatSpreadable;
var SYM_ITERATOR = Symbol.iterator;
var SYM_MATCH = Symbol.match;
var SYM_MATCH_ALL = Symbol.matchAll;
var SYM_REPLACE = Symbol.replace;
var SYM_SEARCH = Symbol.search;
var SYM_SPECIES = Symbol.species;
var SYM_SPLIT = Symbol.split;
var SYM_TO_PRIMITIVE = Symbol.toPrimitive;
var SYM_TO_STRING_TAG = Symbol.toStringTag;
var SYM_UNSCOPABLES = Symbol.unscopables;
var INV_SYMBOL_REF = {
	[SYM_ASYNC_ITERATOR]: 0,
	[SYM_HAS_INSTANCE]: 1,
	[SYM_IS_CONCAT_SPREADABLE]: 2,
	[SYM_ITERATOR]: 3,
	[SYM_MATCH]: 4,
	[SYM_MATCH_ALL]: 5,
	[SYM_REPLACE]: 6,
	[SYM_SEARCH]: 7,
	[SYM_SPECIES]: 8,
	[SYM_SPLIT]: 9,
	[SYM_TO_PRIMITIVE]: 10,
	[SYM_TO_STRING_TAG]: 11,
	[SYM_UNSCOPABLES]: 12
};
var SYMBOL_REF = {
	[0]: SYM_ASYNC_ITERATOR,
	[1]: SYM_HAS_INSTANCE,
	[2]: SYM_IS_CONCAT_SPREADABLE,
	[3]: SYM_ITERATOR,
	[4]: SYM_MATCH,
	[5]: SYM_MATCH_ALL,
	[6]: SYM_REPLACE,
	[7]: SYM_SEARCH,
	[8]: SYM_SPECIES,
	[9]: SYM_SPLIT,
	[10]: SYM_TO_PRIMITIVE,
	[11]: SYM_TO_STRING_TAG,
	[12]: SYM_UNSCOPABLES
};
var CONSTANT_VAL = {
	[2]: true,
	[3]: false,
	[1]: void 0,
	[0]: null,
	[4]: -0,
	[5]: Number.POSITIVE_INFINITY,
	[6]: Number.NEGATIVE_INFINITY,
	[7]: NaN
};
var ERROR_CONSTRUCTOR_STRING = {
	[0]: "Error",
	[1]: "EvalError",
	[2]: "RangeError",
	[3]: "ReferenceError",
	[4]: "SyntaxError",
	[5]: "TypeError",
	[6]: "URIError"
};
var ERROR_CONSTRUCTOR = {
	[0]: Error,
	[1]: EvalError,
	[2]: RangeError,
	[3]: ReferenceError,
	[4]: SyntaxError,
	[5]: TypeError,
	[6]: URIError
};
function createSerovalNode(t, i, s, c, m, p, e, a, f, b, o, l) {
	return {
		t,
		i,
		s,
		c,
		m,
		p,
		e,
		a,
		f,
		b,
		o,
		l
	};
}
function createConstantNode(value) {
	return createSerovalNode(2, void 0, value, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
var TRUE_NODE = /* @__PURE__ */ createConstantNode(2);
var FALSE_NODE = /* @__PURE__ */ createConstantNode(3);
var UNDEFINED_NODE = /* @__PURE__ */ createConstantNode(1);
var NULL_NODE = /* @__PURE__ */ createConstantNode(0);
var NEG_ZERO_NODE = /* @__PURE__ */ createConstantNode(4);
var INFINITY_NODE = /* @__PURE__ */ createConstantNode(5);
var NEG_INFINITY_NODE = /* @__PURE__ */ createConstantNode(6);
var NAN_NODE = /* @__PURE__ */ createConstantNode(7);
var MIN_JSON_STRINGIFY_LENGTH = 64;
var JSON_ESCAPE_DIFFERENCES = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function serializeChar(str) {
	switch (str) {
		case "\"": return "\\\"";
		case "\\": return "\\\\";
		case "\n": return "\\n";
		case "\r": return "\\r";
		case "\b": return "\\b";
		case "	": return "\\t";
		case "\f": return "\\f";
		case "<": return "\\x3C";
		case "\u2028": return "\\u2028";
		case "\u2029": return "\\u2029";
		default: return;
	}
}
function serializeString(str) {
	if (str.length >= MIN_JSON_STRINGIFY_LENGTH && !JSON_ESCAPE_DIFFERENCES.test(str)) return JSON.stringify(str).slice(1, -1);
	let result = "";
	let lastPos = 0;
	let replacement;
	for (let i = 0, len = str.length; i < len; i++) {
		replacement = serializeChar(str[i]);
		if (replacement) {
			result += str.slice(lastPos, i) + replacement;
			lastPos = i + 1;
		}
	}
	if (lastPos === 0) result = str;
	else result += str.slice(lastPos);
	return result;
}
function deserializeReplacer(str) {
	switch (str) {
		case "\\\\": return "\\";
		case "\\\"": return "\"";
		case "\\n": return "\n";
		case "\\r": return "\r";
		case "\\b": return "\b";
		case "\\t": return "	";
		case "\\f": return "\f";
		case "\\x3C": return "<";
		case "\\u2028": return "\u2028";
		case "\\u2029": return "\u2029";
		default: return str;
	}
}
function deserializeString(str) {
	if (typeof str === "string" && !str.includes("\\")) return str;
	return str.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, deserializeReplacer);
}
var { toString: objectToString } = Object.prototype;
var STEP_ERROR_CODES = {
	parsing: 1,
	serialization: 2,
	deserialization: 3
};
function getErrorMessageProd(type) {
	return `Seroval Error (step: ${STEP_ERROR_CODES[type]})`;
}
var getErrorMessage = (type, cause) => getErrorMessageProd(type);
var SerovalError = class extends Error {
	constructor(type, cause) {
		super(getErrorMessage(type, cause));
		this.cause = cause;
	}
};
var SerovalParserError = class extends SerovalError {
	constructor(cause) {
		super("parsing", cause);
	}
};
var SerovalDeserializationError = class extends SerovalError {
	constructor(cause) {
		super("deserialization", cause);
	}
};
function getSpecificErrorMessage(code) {
	return `Seroval Error (specific: ${code})`;
}
var SerovalUnsupportedTypeError = class extends Error {
	constructor(value) {
		super(getSpecificErrorMessage(1));
		this.value = value;
	}
};
var SerovalUnsupportedNodeError = class extends Error {
	constructor(node) {
		super(getSpecificErrorMessage(2));
	}
};
var SerovalMissingPluginError = class extends Error {
	constructor(tag) {
		super(getSpecificErrorMessage(3));
	}
};
var SerovalMissingInstanceError = class extends Error {
	constructor(tag) {
		super(getSpecificErrorMessage(4));
	}
};
var SerovalMissingReferenceError = class extends Error {
	constructor(value) {
		super(getSpecificErrorMessage(5));
		this.value = value;
	}
};
var SerovalMissingReferenceForIdError = class extends Error {
	constructor(id) {
		super(getSpecificErrorMessage(6));
	}
};
var SerovalUnknownTypedArrayError = class extends Error {
	constructor(name) {
		super(getSpecificErrorMessage(7));
	}
};
var SerovalMalformedNodeError = class extends Error {
	constructor(node) {
		super(getSpecificErrorMessage(8));
	}
};
var SerovalDepthLimitError = class extends Error {
	constructor(limit) {
		super(getSpecificErrorMessage(9));
	}
};
var REFERENCES_KEY = "__SEROVAL_REFS__";
var REFERENCE = /* @__PURE__ */ new Map();
var INV_REFERENCE = /* @__PURE__ */ new Map();
function hasReferenceID(value) {
	return REFERENCE.has(value);
}
function hasReference(id) {
	return INV_REFERENCE.has(id);
}
function getReferenceID(value) {
	if (hasReferenceID(value)) return REFERENCE.get(value);
	throw new SerovalMissingReferenceError(value);
}
function getReference(id) {
	if (hasReference(id)) return INV_REFERENCE.get(id);
	throw new SerovalMissingReferenceForIdError(id);
}
if (typeof globalThis !== "undefined") Object.defineProperty(globalThis, REFERENCES_KEY, {
	value: INV_REFERENCE,
	configurable: true,
	writable: false,
	enumerable: false
});
else if (typeof window !== "undefined") Object.defineProperty(window, REFERENCES_KEY, {
	value: INV_REFERENCE,
	configurable: true,
	writable: false,
	enumerable: false
});
else if (typeof self !== "undefined") Object.defineProperty(self, REFERENCES_KEY, {
	value: INV_REFERENCE,
	configurable: true,
	writable: false,
	enumerable: false
});
else if (typeof global !== "undefined") Object.defineProperty(global, REFERENCES_KEY, {
	value: INV_REFERENCE,
	configurable: true,
	writable: false,
	enumerable: false
});
function getErrorConstructor(error) {
	if (error instanceof EvalError) return 1;
	if (error instanceof RangeError) return 2;
	if (error instanceof ReferenceError) return 3;
	if (error instanceof SyntaxError) return 4;
	if (error instanceof TypeError) return 5;
	if (error instanceof URIError) return 6;
	return 0;
}
function getInitialErrorOptions(error) {
	const construct = ERROR_CONSTRUCTOR_STRING[getErrorConstructor(error)];
	if (error.name !== construct) return { name: error.name };
	if (error.constructor.name !== construct) return { name: error.constructor.name };
	return {};
}
function getErrorOptions(error, features) {
	let options = getInitialErrorOptions(error);
	const names = Object.getOwnPropertyNames(error);
	for (let i = 0, len = names.length, name; i < len; i++) {
		name = names[i];
		if (name !== "name" && name !== "message") if (name === "stack") {
			if (features & 4) {
				options = options || {};
				options[name] = error[name];
			}
		} else {
			options = options || {};
			options[name] = error[name];
		}
	}
	return options;
}
function getObjectFlag(obj) {
	if (Object.isFrozen(obj)) return 3;
	if (Object.isSealed(obj)) return 2;
	if (Object.isExtensible(obj)) return 0;
	return 1;
}
function createNumberNode(value) {
	switch (value) {
		case Number.POSITIVE_INFINITY: return INFINITY_NODE;
		case Number.NEGATIVE_INFINITY: return NEG_INFINITY_NODE;
	}
	if (value !== value) return NAN_NODE;
	if (Object.is(value, -0)) return NEG_ZERO_NODE;
	return createSerovalNode(0, void 0, value, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createStringNode(value) {
	return createSerovalNode(1, void 0, serializeString(value), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createBigIntNode(current) {
	return createSerovalNode(3, void 0, "" + current, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createIndexedValueNode(id) {
	return createSerovalNode(4, id, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createDateNode(id, current) {
	const timestamp = current.valueOf();
	return createSerovalNode(5, id, timestamp !== timestamp ? "" : current.toISOString(), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createTemporalNode(id, type, current) {
	return createSerovalNode(36, id, current.toString(), type, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createRegExpNode(id, current) {
	return createSerovalNode(6, id, void 0, serializeString(current.source), current.flags, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createWKSymbolNode(id, current) {
	return createSerovalNode(17, id, INV_SYMBOL_REF[current], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createReferenceNode(id, ref) {
	return createSerovalNode(18, id, serializeString(getReferenceID(ref)), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createPluginNode(id, tag, value) {
	return createSerovalNode(25, id, value, serializeString(tag), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createArrayNode(id, current, parsedItems) {
	return createSerovalNode(9, id, void 0, void 0, void 0, void 0, void 0, parsedItems, void 0, void 0, getObjectFlag(current), void 0);
}
function createBoxedNode(id, boxed) {
	return createSerovalNode(21, id, void 0, void 0, void 0, void 0, void 0, void 0, boxed, void 0, void 0, void 0);
}
var MAX_TYPED_ARRAY_LENGTH = 1e6;
function createTypedArrayNode(id, current, buffer) {
	if (current.length > MAX_TYPED_ARRAY_LENGTH) throw new SerovalUnsupportedTypeError(current);
	return createSerovalNode(15, id, void 0, current.constructor.name, void 0, void 0, void 0, void 0, buffer, current.byteOffset, void 0, current.length);
}
function createBigIntTypedArrayNode(id, current, buffer) {
	if (current.length > MAX_TYPED_ARRAY_LENGTH) throw new SerovalUnsupportedTypeError(current);
	return createSerovalNode(16, id, void 0, current.constructor.name, void 0, void 0, void 0, void 0, buffer, current.byteOffset, void 0, current.length);
}
function createDataViewNode(id, current, buffer) {
	if (current.byteLength > MAX_TYPED_ARRAY_LENGTH) throw new SerovalUnsupportedTypeError(current);
	return createSerovalNode(20, id, void 0, void 0, void 0, void 0, void 0, void 0, buffer, current.byteOffset, void 0, current.byteLength);
}
function createErrorNode(id, current, options) {
	return createSerovalNode(13, id, getErrorConstructor(current), void 0, serializeString(current.message), options, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createAggregateErrorNode(id, current, options) {
	return createSerovalNode(14, id, getErrorConstructor(current), void 0, serializeString(current.message), options, void 0, void 0, void 0, void 0, void 0, void 0);
}
function createSetNode(id, items) {
	return createSerovalNode(7, id, void 0, void 0, void 0, void 0, void 0, items, void 0, void 0, void 0, void 0);
}
function createIteratorFactoryInstanceNode(factory, items) {
	return createSerovalNode(28, void 0, void 0, void 0, void 0, void 0, void 0, [factory, items], void 0, void 0, void 0, void 0);
}
function createAsyncIteratorFactoryInstanceNode(factory, items) {
	return createSerovalNode(30, void 0, void 0, void 0, void 0, void 0, void 0, [factory, items], void 0, void 0, void 0, void 0);
}
function createStreamConstructorNode(id, factory, sequence) {
	return createSerovalNode(31, id, void 0, void 0, void 0, void 0, void 0, sequence, factory, void 0, void 0, void 0);
}
function createStreamNextNode(id, parsed) {
	return createSerovalNode(32, id, void 0, void 0, void 0, void 0, void 0, void 0, parsed, void 0, void 0, void 0);
}
function createStreamThrowNode(id, parsed) {
	return createSerovalNode(33, id, void 0, void 0, void 0, void 0, void 0, void 0, parsed, void 0, void 0, void 0);
}
function createStreamReturnNode(id, parsed) {
	return createSerovalNode(34, id, void 0, void 0, void 0, void 0, void 0, void 0, parsed, void 0, void 0, void 0);
}
function createSequenceNode(id, sequence, throwAt, doneAt) {
	return createSerovalNode(35, id, throwAt, void 0, void 0, void 0, void 0, sequence, void 0, void 0, void 0, doneAt);
}
/**
* An opaque reference allows hiding values from the serializer.
*/
var OpaqueReference = class {
	constructor(value, replacement) {
		this.value = value;
		this.replacement = replacement;
	}
};
var PROMISE_CONSTRUCTOR = () => {
	const resolver = {
		p: 0,
		s: 0,
		f: 0
	};
	resolver.p = new Promise((resolve, reject) => {
		resolver.s = resolve;
		resolver.f = reject;
	});
	return resolver;
};
var ITERATOR_CONSTRUCTOR = (symbol) => (sequence) => () => {
	let index = 0;
	const instance = {
		[symbol]() {
			return instance;
		},
		next() {
			if (index > sequence.d) return {
				done: true,
				value: void 0
			};
			const currentIndex = index++;
			const data = sequence.v[currentIndex];
			if (currentIndex === sequence.t) throw data;
			return {
				done: currentIndex === sequence.d,
				value: data
			};
		}
	};
	return instance;
};
var ASYNC_ITERATOR_CONSTRUCTOR = (symbol, createPromise) => (stream) => () => {
	let count = 0;
	let doneAt = -1;
	let isThrow = false;
	const buffer = [];
	const pending = [];
	const internal = { finalize(i = 0, len = pending.length) {
		for (; i < len; i++) pending[i].s({
			done: true,
			value: void 0
		});
	} };
	stream.on({
		next(value) {
			const temp = pending.shift();
			if (temp) temp.s({
				done: false,
				value
			});
			buffer.push(value);
		},
		throw(value) {
			const temp = pending.shift();
			if (temp) temp.f(value);
			internal.finalize();
			doneAt = buffer.length;
			isThrow = true;
			buffer.push(value);
		},
		return(value) {
			const temp = pending.shift();
			if (temp) temp.s({
				done: true,
				value
			});
			internal.finalize();
			doneAt = buffer.length;
			buffer.push(value);
		}
	});
	const instance = {
		[symbol]() {
			return instance;
		},
		next() {
			if (doneAt === -1) {
				const index = count++;
				if (index >= buffer.length) {
					const temp = createPromise();
					pending.push(temp);
					return temp.p;
				}
				return {
					done: false,
					value: buffer[index]
				};
			}
			if (count > doneAt) return {
				done: true,
				value: void 0
			};
			const index = count++;
			const value = buffer[index];
			if (index !== doneAt) return {
				done: false,
				value
			};
			if (isThrow) throw value;
			return {
				done: true,
				value
			};
		}
	};
	return instance;
};
var ARRAY_BUFFER_CONSTRUCTOR = (b64) => {
	const decoded = atob(b64);
	const length = decoded.length;
	const arr = new Uint8Array(length);
	for (let i = 0; i < length; i++) arr[i] = decoded.charCodeAt(i);
	return arr.buffer;
};
/**
* An internal class rather than a tagged POJO: identity is checked with
* `instanceof`, which untrusted input cannot forge (the class is not exported).
* The eval-based `deserialize` path still rebuilds a `{__SEROVAL_SEQUENCE__…}`
* POJO from embedded source - it has no access to this class - so a value read
* back through `deserialize` is not an instance and, by design, is not treated
* as a genuine Sequence on re-serialization.
*/
var Sequence = class {
	constructor(values, throwAt, doneAt) {
		this.v = values;
		this.t = throwAt;
		this.d = doneAt;
	}
};
function isSequence(value) {
	return value instanceof Sequence;
}
function createSequence(values, throwAt, doneAt) {
	return new Sequence(values, throwAt, doneAt);
}
function createSequenceFromIterable(source) {
	const values = [];
	let throwsAt = -1;
	let doneAt = -1;
	const iterator = source[SYM_ITERATOR]();
	while (true) try {
		const value = iterator.next();
		values.push(value.value);
		if (value.done) {
			doneAt = values.length - 1;
			break;
		}
	} catch (error) {
		throwsAt = values.length;
		doneAt = throwsAt;
		values.push(error);
		break;
	}
	return createSequence(values, throwsAt, doneAt);
}
var createIterator = ITERATOR_CONSTRUCTOR(SYM_ITERATOR);
function sequenceToIterator(sequence) {
	return createIterator(sequence);
}
var ITERATOR = {};
var ASYNC_ITERATOR = {};
/**
* Placeholder references
*/
var SPECIAL_REFS = {
	[0]: {},
	[1]: {},
	[2]: {},
	[3]: {},
	[4]: {},
	[5]: {}
};
/**
* An internal class rather than a tagged POJO: identity is checked with
* `instanceof`, which untrusted input cannot forge (the class is not exported).
*
* The behavior is intentionally duplicated from `STREAM_CONSTRUCTOR`. That
* constructor's source is embedded verbatim into the eval-based `deserialize`
* output, which has no access to this class, so the two cannot be shared. A
* stream read back through `deserialize` is therefore a plain POJO and, by
* design, is not treated as a genuine Stream on re-serialization. Keep the two
* implementations in sync.
*/
var Stream = class {
	constructor() {
		this.buffer = [];
		this.listeners = [];
		this.alive = true;
		this.success = false;
		this.count = 0;
	}
	flush(value, mode) {
		for (let x = 0; x < this.count; x++) {
			var _this$listeners$x;
			(_this$listeners$x = this.listeners[x]) === null || _this$listeners$x === void 0 || _this$listeners$x[mode](value);
		}
	}
	replay(listener) {
		for (let x = 0, z = this.buffer.length; x < z; x++) {
			const current = this.buffer[x];
			if (!this.alive && x === z - 1) listener[this.success ? "return" : "throw"](current);
			else listener.next(current);
		}
	}
	on(listener) {
		let subscribed = this.alive;
		let temp = 0;
		if (subscribed) {
			for (; temp < this.count; temp++) if (!this.listeners[temp]) break;
			if (temp === this.count) this.count++;
			this.listeners[temp] = listener;
		}
		this.replay(listener);
		return () => {
			if (this.alive && subscribed) {
				subscribed = false;
				this.listeners[temp] = void 0;
				while (this.count > 0 && !this.listeners[this.count - 1]) this.count--;
				this.listeners.length = this.count;
			}
		};
	}
	next(value) {
		if (this.alive) {
			this.buffer.push(value);
			this.flush(value, "next");
		}
	}
	throw(value) {
		if (this.alive) {
			this.buffer.push(value);
			this.flush(value, "throw");
			this.alive = false;
			this.success = false;
			this.listeners.length = 0;
		}
	}
	return(value) {
		if (this.alive) {
			this.buffer.push(value);
			this.flush(value, "return");
			this.alive = false;
			this.success = true;
			this.listeners.length = 0;
		}
	}
};
function isStream(value) {
	return value instanceof Stream;
}
function createStream() {
	return new Stream();
}
function createStreamFromAsyncIterable(iterable, cleanups) {
	const stream = createStream();
	const iterator = iterable[SYM_ASYNC_ITERATOR]();
	let cancelled = false;
	let done = false;
	cleanups === null || cleanups === void 0 || cleanups.push(() => {
		if (!(done || cancelled)) {
			cancelled = true;
			Promise.resolve().then(() => {
				var _iterator$return;
				return (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
			}).catch(() => {});
		}
	});
	async function push() {
		try {
			while (!cancelled) {
				const value = await iterator.next();
				if (cancelled) return;
				if (value.done) {
					done = true;
					stream.return(value.value);
					break;
				}
				stream.next(value.value);
			}
		} catch (error) {
			done = true;
			if (!cancelled) stream.throw(error);
		}
	}
	push().catch(() => {});
	return stream;
}
var createAsyncIterable = ASYNC_ITERATOR_CONSTRUCTOR(SYM_ASYNC_ITERATOR, PROMISE_CONSTRUCTOR);
function streamToAsyncIterable(stream) {
	return createAsyncIterable(stream);
}
function createBaseParserContext(mode, options) {
	var _options$compactArray;
	return {
		plugins: options.plugins,
		mode,
		marked: /* @__PURE__ */ new Set(),
		features: 127 ^ (options.disabledFeatures || 0),
		refs: options.refs || /* @__PURE__ */ new Map(),
		depthLimit: options.depthLimit || 1e3,
		compactArrayBufferViews: (_options$compactArray = options.compactArrayBufferViews) !== null && _options$compactArray !== void 0 ? _options$compactArray : false
	};
}
/**
* Ensures that the value (based on an identifier) has been visited by the parser.
* @param ctx
* @param id
*/
function markParserRef(ctx, id) {
	ctx.marked.add(id);
}
/**
* Creates an identifier for a value
* @param ctx
* @param current
*/
function createIndexForValue(ctx, current) {
	const id = ctx.refs.size;
	ctx.refs.set(current, id);
	return id;
}
function getNodeForIndexedValue(ctx, current) {
	const registeredId = ctx.refs.get(current);
	if (registeredId != null) {
		markParserRef(ctx, registeredId);
		return {
			type: 1,
			value: createIndexedValueNode(registeredId)
		};
	}
	return {
		type: 0,
		value: createIndexForValue(ctx, current)
	};
}
function getReferenceNode(ctx, current) {
	const indexed = getNodeForIndexedValue(ctx, current);
	if (indexed.type === 1) return indexed;
	if (hasReferenceID(current)) return {
		type: 2,
		value: createReferenceNode(indexed.value, current)
	};
	return indexed;
}
/**
* Parsing methods
*/
function parseWellKnownSymbol(ctx, current) {
	const ref = getReferenceNode(ctx, current);
	if (ref.type !== 0) return ref.value;
	if (current in INV_SYMBOL_REF) return createWKSymbolNode(ref.value, current);
	throw new SerovalUnsupportedTypeError(current);
}
function parseSpecialReference(ctx, ref) {
	const result = getNodeForIndexedValue(ctx, SPECIAL_REFS[ref]);
	if (result.type === 1) return result.value;
	return createSerovalNode(26, result.value, ref, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function parseIteratorFactory(ctx) {
	const result = getNodeForIndexedValue(ctx, ITERATOR);
	if (result.type === 1) return result.value;
	return createSerovalNode(27, result.value, void 0, void 0, void 0, void 0, void 0, void 0, parseWellKnownSymbol(ctx, SYM_ITERATOR), void 0, void 0, void 0);
}
function parseAsyncIteratorFactory(ctx) {
	const result = getNodeForIndexedValue(ctx, ASYNC_ITERATOR);
	if (result.type === 1) return result.value;
	return createSerovalNode(29, result.value, void 0, void 0, void 0, void 0, void 0, [parseSpecialReference(ctx, 1), parseWellKnownSymbol(ctx, SYM_ASYNC_ITERATOR)], void 0, void 0, void 0, void 0);
}
function createObjectNode(id, current, empty, record) {
	return createSerovalNode(empty ? 11 : 10, id, void 0, void 0, void 0, record, void 0, void 0, void 0, void 0, getObjectFlag(current), void 0);
}
function createMapNode(ctx, id, k, v) {
	return createSerovalNode(8, id, void 0, void 0, void 0, void 0, {
		k,
		v
	}, void 0, parseSpecialReference(ctx, 0), void 0, void 0, void 0);
}
function createPromiseConstructorNode(ctx, id, resolver) {
	return createSerovalNode(22, id, resolver, void 0, void 0, void 0, void 0, void 0, parseSpecialReference(ctx, 1), void 0, void 0, void 0);
}
function getArrayBufferView(ctx, current) {
	if (!ctx.compactArrayBufferViews) return current;
	const buffer = new Uint8Array(current.buffer, current.byteOffset, current.byteLength).slice().buffer;
	const Constructor = current.constructor;
	return new Constructor(buffer);
}
function encodeArrayBuffer(current) {
	if (typeof Buffer !== "undefined") return Buffer.from(current).toString("base64");
	const bytes = new Uint8Array(current);
	if (typeof bytes.toBase64 === "function") return bytes.toBase64();
	let result = "";
	for (let i = 0, len = bytes.length; i < len; i++) result += String.fromCharCode(bytes[i]);
	return btoa(result);
}
function createArrayBufferNode(ctx, id, current) {
	return createSerovalNode(19, id, encodeArrayBuffer(current), void 0, void 0, void 0, void 0, void 0, parseSpecialReference(ctx, 5), void 0, void 0, void 0);
}
function createPlugin(plugin) {
	return plugin;
}
function dedupePlugins(deduped, plugins) {
	for (let i = 0, len = plugins.length; i < len; i++) {
		const current = plugins[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupePlugins(deduped, current.extends);
		}
	}
}
function resolvePlugins(plugins) {
	if (plugins) {
		const deduped = /* @__PURE__ */ new Set();
		dedupePlugins(deduped, plugins);
		return [...deduped];
	}
}
function getTypedArrayConstructor(name) {
	switch (name) {
		case "Int8Array": return Int8Array;
		case "Int16Array": return Int16Array;
		case "Int32Array": return Int32Array;
		case "Uint8Array": return Uint8Array;
		case "Uint16Array": return Uint16Array;
		case "Uint32Array": return Uint32Array;
		case "Uint8ClampedArray": return Uint8ClampedArray;
		case "Float32Array": return Float32Array;
		case "Float64Array": return Float64Array;
		case "BigInt64Array": return BigInt64Array;
		case "BigUint64Array": return BigUint64Array;
		default: throw new SerovalUnknownTypedArrayError(name);
	}
}
function isValidKey(key) {
	switch (key) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__": return false;
		default: return true;
	}
}
function isValidSymbol(symbol) {
	switch (symbol) {
		case SYM_ASYNC_ITERATOR:
		case SYM_IS_CONCAT_SPREADABLE:
		case SYM_TO_STRING_TAG:
		case SYM_ITERATOR: return true;
		default: return false;
	}
}
var DEFAULT_MAX_BASE64_LENGTH = 1e6;
var MIN_NATIVE_BASE64_LENGTH = 512;
var MAX_BIGINT_LENGTH = 1e4;
var MAX_REGEXP_SOURCE_LENGTH = 2e4;
function applyObjectFlag(obj, flag) {
	switch (flag) {
		case 3: return Object.freeze(obj);
		case 1: return Object.preventExtensions(obj);
		case 2: return Object.seal(obj);
		default: return obj;
	}
}
var DEFAULT_DEPTH_LIMIT = 1e3;
function createBaseDeserializerContext(mode, options) {
	var _options$maxBase64Len, _options$features;
	const maxBase64Length = (_options$maxBase64Len = options.maxBase64Length) !== null && _options$maxBase64Len !== void 0 ? _options$maxBase64Len : DEFAULT_MAX_BASE64_LENGTH;
	if (!Number.isSafeInteger(maxBase64Length) || maxBase64Length < 0) throw new RangeError("maxBase64Length must be a non-negative safe integer");
	const refs = options.refs || /* @__PURE__ */ new Map();
	if (!("types" in refs)) Object.assign(refs, { types: /* @__PURE__ */ new Map() });
	return {
		mode,
		plugins: options.plugins,
		refs,
		features: (_options$features = options.features) !== null && _options$features !== void 0 ? _options$features : 127 ^ (options.disabledFeatures || 0),
		depthLimit: options.depthLimit || DEFAULT_DEPTH_LIMIT,
		maxBase64Length
	};
}
function createCrossDeserializerContext(options) {
	return {
		mode: 2,
		base: createBaseDeserializerContext(2, options),
		child: void 0
	};
}
var DeserializePluginContext = class {
	constructor(_p, depth) {
		this._p = _p;
		this.depth = depth;
	}
	deserialize(node) {
		return deserialize$1(this._p, this.depth, node);
	}
};
function guardIndexedValue(ctx, id) {
	if (id < 0 || !Number.isFinite(id) || !Number.isInteger(id)) throw new SerovalMalformedNodeError({
		t: 4,
		i: id
	});
	if (ctx.refs.has(id)) throw new Error("Conflicted ref id: " + id);
}
function isThennable(value) {
	return !!value && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function";
}
function assignIndexedValueVanilla(ctx, id, value) {
	guardIndexedValue(ctx.base, id);
	if (ctx.state.marked.has(id)) ctx.base.refs.set(id, value);
	return value;
}
function assignIndexedValueCross(ctx, id, value) {
	guardIndexedValue(ctx.base, id);
	ctx.base.refs.set(id, value);
	return value;
}
function assignIndexedValue$1(ctx, id, value) {
	return ctx.mode === 1 ? assignIndexedValueVanilla(ctx, id, value) : assignIndexedValueCross(ctx, id, value);
}
function deserializeKnownValue(node, record, key) {
	if (Object.hasOwn(record, key)) return record[key];
	throw new SerovalMalformedNodeError(node);
}
function deserializeReference(ctx, node) {
	return assignIndexedValue$1(ctx, node.i, getReference(deserializeString(node.s)));
}
function validateNodeList(node, list) {
	if (!Array.isArray(list)) throw new SerovalMalformedNodeError(node);
}
function deserializeArray(ctx, depth, node) {
	const items = node.a;
	validateNodeList(node, items);
	const len = items.length;
	const result = assignIndexedValue$1(ctx, node.i, new Array(len));
	for (let i = 0, item; i < len; i++) {
		item = items[i];
		if (item) result[i] = deserialize$1(ctx, depth, item);
	}
	applyObjectFlag(result, node.o);
	return result;
}
function assignStringProperty(object, key, value) {
	if (isValidKey(key)) object[key] = value;
	else Object.defineProperty(object, key, {
		value,
		configurable: true,
		enumerable: true,
		writable: true
	});
}
function assignProperty(ctx, depth, object, key, value) {
	if (typeof key === "string") assignStringProperty(object, deserializeString(key), deserialize$1(ctx, depth, value));
	else {
		const actual = deserialize$1(ctx, depth, key);
		switch (typeof actual) {
			case "string":
				assignStringProperty(object, actual, deserialize$1(ctx, depth, value));
				break;
			case "symbol":
				if (isValidSymbol(actual)) object[actual] = deserialize$1(ctx, depth, value);
				break;
			default: throw new SerovalMalformedNodeError(key);
		}
	}
}
function assignNodeType(ctx, id, type) {
	ctx.base.refs.types.set(id, type);
}
function validateNodeType(ctx, node, id, type) {
	if (ctx.base.refs.types.get(id) !== type) throw new SerovalMalformedNodeError(node);
}
function deserializeProperties(ctx, depth, node, result) {
	const keys = node.k;
	validateNodeList(node, keys);
	validateNodeList(node, node.v);
	if (keys.length > 0) for (let i = 0, vals = node.v, len = keys.length; i < len; i++) assignProperty(ctx, depth, result, keys[i], vals[i]);
	return result;
}
function deserializeObject(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, node.t === 10 ? {} : Object.create(null));
	deserializeProperties(ctx, depth, node.p, result);
	applyObjectFlag(result, node.o);
	return result;
}
function deserializeDate(ctx, node) {
	return assignIndexedValue$1(ctx, node.i, new Date(node.s));
}
function deserializeTemporal(ctx, node) {
	if (!(ctx.base.features & 64)) throw new SerovalUnsupportedNodeError(node);
	let value;
	switch (node.c) {
		case 0:
			value = Temporal.Instant.from(node.s);
			break;
		case 1:
			value = Temporal.Duration.from(node.s);
			break;
		case 2:
			value = Temporal.PlainDate.from(node.s);
			break;
		case 3:
			value = Temporal.PlainDateTime.from(node.s);
			break;
		case 4:
			value = Temporal.PlainMonthDay.from(node.s);
			break;
		case 5:
			value = Temporal.PlainTime.from(node.s);
			break;
		case 6:
			value = Temporal.PlainYearMonth.from(node.s);
			break;
		case 7:
			value = Temporal.ZonedDateTime.from(node.s);
			break;
		default: throw new SerovalMalformedNodeError(node);
	}
	return assignIndexedValue$1(ctx, node.i, value);
}
function deserializeRegExp(ctx, node) {
	if (ctx.base.features & 32) {
		const source = deserializeString(node.c);
		if (source.length > MAX_REGEXP_SOURCE_LENGTH) throw new SerovalMalformedNodeError(node);
		return assignIndexedValue$1(ctx, node.i, new RegExp(source, node.m));
	}
	throw new SerovalUnsupportedNodeError(node);
}
function deserializeSet(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, /* @__PURE__ */ new Set());
	validateNodeList(node, node.a);
	for (let i = 0, items = node.a, len = items.length; i < len; i++) result.add(deserialize$1(ctx, depth, items[i]));
	return result;
}
function deserializeMap(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, /* @__PURE__ */ new Map());
	validateNodeList(node, node.e.k);
	validateNodeList(node, node.e.v);
	for (let i = 0, keys = node.e.k, vals = node.e.v, len = keys.length; i < len; i++) result.set(deserialize$1(ctx, depth, keys[i]), deserialize$1(ctx, depth, vals[i]));
	return result;
}
function deserializeArrayBuffer(ctx, node) {
	if (typeof node.s !== "string") throw new SerovalMalformedNodeError(node);
	if (node.s.length > ctx.base.maxBase64Length) throw new RangeError("ArrayBuffer exceeds maxBase64Length (" + ctx.base.maxBase64Length + ")");
	const source = deserializeString(node.s);
	let buffer;
	if (source.length < MIN_NATIVE_BASE64_LENGTH || typeof Buffer === "undefined") buffer = ARRAY_BUFFER_CONSTRUCTOR(source);
	else {
		const decoded = atob(source);
		buffer = new ArrayBuffer(decoded.length);
		Buffer.from(buffer).write(decoded, "latin1");
	}
	return assignIndexedValue$1(ctx, node.i, buffer);
}
function deserializeTypedArray(ctx, depth, node) {
	var _node$b;
	const construct = getTypedArrayConstructor(node.c);
	const source = deserialize$1(ctx, depth, node.f);
	if (!(source instanceof ArrayBuffer)) throw new SerovalMalformedNodeError(node);
	const offset = (_node$b = node.b) !== null && _node$b !== void 0 ? _node$b : 0;
	if (offset < 0 || offset > source.byteLength) throw new SerovalMalformedNodeError(node);
	return assignIndexedValue$1(ctx, node.i, new construct(source, offset, node.l));
}
function deserializeDataView(ctx, depth, node) {
	var _node$b2;
	const source = deserialize$1(ctx, depth, node.f);
	if (!(source instanceof ArrayBuffer)) throw new SerovalMalformedNodeError(node);
	const offset = (_node$b2 = node.b) !== null && _node$b2 !== void 0 ? _node$b2 : 0;
	if (offset < 0 || offset > source.byteLength) throw new SerovalMalformedNodeError(node);
	return assignIndexedValue$1(ctx, node.i, new DataView(source, offset, node.l));
}
function deserializeDictionary(ctx, depth, node, result) {
	if (node.p) {
		const fields = deserializeProperties(ctx, depth, node.p, {});
		Object.defineProperties(result, Object.getOwnPropertyDescriptors(fields));
	}
	return result;
}
function deserializeAggregateError(ctx, depth, node) {
	return deserializeDictionary(ctx, depth, node, assignIndexedValue$1(ctx, node.i, new AggregateError([], deserializeString(node.m))));
}
function deserializeError(ctx, depth, node) {
	const construct = deserializeKnownValue(node, ERROR_CONSTRUCTOR, node.s);
	return deserializeDictionary(ctx, depth, node, assignIndexedValue$1(ctx, node.i, new construct(deserializeString(node.m))));
}
function deserializePromise(ctx, depth, node) {
	const deferred = PROMISE_CONSTRUCTOR();
	const result = assignIndexedValue$1(ctx, node.i, deferred.p);
	const deserialized = deserialize$1(ctx, depth, node.f);
	if (isThennable(deserialized)) throw new SerovalMalformedNodeError(node.f);
	if (node.s) deferred.s(deserialized);
	else deferred.f(deserialized);
	return result;
}
function deserializeBoxed(ctx, depth, node) {
	return assignIndexedValue$1(ctx, node.i, Object(deserialize$1(ctx, depth, node.f)));
}
function deserializePlugin(ctx, depth, node) {
	const currentPlugins = ctx.base.plugins;
	if (currentPlugins) {
		const tag = deserializeString(node.c);
		for (let i = 0, len = currentPlugins.length; i < len; i++) {
			const plugin = currentPlugins[i];
			if (plugin.tag === tag) return assignIndexedValue$1(ctx, node.i, plugin.deserialize(node.s, new DeserializePluginContext(ctx, depth), { id: node.i }));
		}
	}
	throw new SerovalMissingPluginError(node.c);
}
function deserializePromiseConstructor(ctx, node) {
	const value = assignIndexedValue$1(ctx, node.i, assignIndexedValue$1(ctx, node.s, PROMISE_CONSTRUCTOR()).p);
	assignNodeType(ctx, node.s, 22);
	return value;
}
function deserializePromiseFulfill(ctx, depth, node) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 22);
		const deserialized = deserialize$1(ctx, depth, node.a[1]);
		if (isThennable(deserialized)) throw new SerovalMalformedNodeError(node.a[1]);
		if (node.t === 23) deferred.s(deserialized);
		else deferred.f(deserialized);
		return;
	}
	throw new SerovalMissingInstanceError("Promise");
}
function deserializeIteratorFactoryInstance(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[0]);
	const source = deserialize$1(ctx, depth, node.a[1]);
	if (!isSequence(source)) throw new SerovalMalformedNodeError(node.a[1]);
	return sequenceToIterator(source);
}
function deserializeAsyncIteratorFactoryInstance(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[0]);
	const source = deserialize$1(ctx, depth, node.a[1]);
	if (!isStream(source)) throw new SerovalMalformedNodeError(node.a[1]);
	return streamToAsyncIterable(source);
}
function deserializeStreamConstructor(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, createStream());
	assignNodeType(ctx, node.i, 31);
	const items = node.a;
	validateNodeList(node, items);
	const len = items.length;
	if (len) for (let i = 0; i < len; i++) deserialize$1(ctx, depth, items[i]);
	return result;
}
function deserializeStreamNext(ctx, depth, node) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 31);
		deferred.next(deserialize$1(ctx, depth, node.f));
		return;
	}
	throw new SerovalMissingInstanceError("Stream");
}
function deserializeStreamThrow(ctx, depth, node) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 31);
		deferred.throw(deserialize$1(ctx, depth, node.f));
		return;
	}
	throw new SerovalMissingInstanceError("Stream");
}
function deserializeStreamReturn(ctx, depth, node) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 31);
		deferred.return(deserialize$1(ctx, depth, node.f));
		return;
	}
	throw new SerovalMissingInstanceError("Stream");
}
function deserializeIteratorFactory(ctx, depth, node) {
	deserialize$1(ctx, depth, node.f);
}
function deserializeAsyncIteratorFactory(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[1]);
}
function isSequenceIndex(value, size) {
	return Number.isInteger(value) && value >= -1 && value < size;
}
function deserializeSequence(ctx, depth, node) {
	validateNodeList(node, node.a);
	const size = node.a.length;
	if (!(isSequenceIndex(node.s, size) && isSequenceIndex(node.l, size))) throw new SerovalMalformedNodeError(node);
	const result = assignIndexedValue$1(ctx, node.i, createSequence([], node.s, node.l));
	for (let i = 0; i < size; i++) result.v[i] = deserialize$1(ctx, depth, node.a[i]);
	return result;
}
function deserialize$1(ctx, depth, node) {
	if (depth > ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
	depth += 1;
	switch (node.t) {
		case 2: return deserializeKnownValue(node, CONSTANT_VAL, node.s);
		case 0: return Number(node.s);
		case 1: return deserializeString(String(node.s));
		case 3:
			if (String(node.s).length > MAX_BIGINT_LENGTH) throw new SerovalMalformedNodeError(node);
			return BigInt(node.s);
		case 4: return ctx.base.refs.get(node.i);
		case 18: return deserializeReference(ctx, node);
		case 9: return deserializeArray(ctx, depth, node);
		case 10:
		case 11: return deserializeObject(ctx, depth, node);
		case 5: return deserializeDate(ctx, node);
		case 6: return deserializeRegExp(ctx, node);
		case 7: return deserializeSet(ctx, depth, node);
		case 8: return deserializeMap(ctx, depth, node);
		case 19: return deserializeArrayBuffer(ctx, node);
		case 16:
		case 15: return deserializeTypedArray(ctx, depth, node);
		case 20: return deserializeDataView(ctx, depth, node);
		case 14: return deserializeAggregateError(ctx, depth, node);
		case 13: return deserializeError(ctx, depth, node);
		case 12: return deserializePromise(ctx, depth, node);
		case 17: return deserializeKnownValue(node, SYMBOL_REF, node.s);
		case 21: return deserializeBoxed(ctx, depth, node);
		case 25: return deserializePlugin(ctx, depth, node);
		case 22: return deserializePromiseConstructor(ctx, node);
		case 23:
		case 24: return deserializePromiseFulfill(ctx, depth, node);
		case 28: return deserializeIteratorFactoryInstance(ctx, depth, node);
		case 30: return deserializeAsyncIteratorFactoryInstance(ctx, depth, node);
		case 31: return deserializeStreamConstructor(ctx, depth, node);
		case 32: return deserializeStreamNext(ctx, depth, node);
		case 33: return deserializeStreamThrow(ctx, depth, node);
		case 34: return deserializeStreamReturn(ctx, depth, node);
		case 27: return deserializeIteratorFactory(ctx, depth, node);
		case 29: return deserializeAsyncIteratorFactory(ctx, depth, node);
		case 35: return deserializeSequence(ctx, depth, node);
		case 36: return deserializeTemporal(ctx, node);
		default: throw new SerovalUnsupportedNodeError(node);
	}
}
function deserializeTop(ctx, node) {
	try {
		return deserialize$1(ctx, 0, node);
	} catch (error) {
		throw new SerovalDeserializationError(error);
	}
}
var SyncParsePluginContext = class {
	constructor(_p, depth) {
		this._p = _p;
		this.depth = depth;
	}
	parse(current) {
		return parseSOS(this._p, this.depth, current);
	}
};
var StreamParsePluginContext = class {
	constructor(_p, depth) {
		this._p = _p;
		this.depth = depth;
	}
	parse(current) {
		return parseSOS(this._p, this.depth, current);
	}
	parseWithError(current) {
		return parseWithError(this._p, this.depth, current);
	}
	isAlive() {
		return this._p.state.alive;
	}
	pushPendingState() {
		pushPendingState(this._p);
	}
	popPendingState() {
		popPendingState(this._p);
	}
	onParse(node) {
		onParse(this._p, node);
	}
	onError(error) {
		onError(this._p, error);
	}
	addCleanup(callback) {
		this._p.state.cleanups.push(callback);
	}
};
function createStreamParserState(options) {
	return {
		alive: true,
		pending: 0,
		initial: true,
		buffer: [],
		onParse: options.onParse,
		onError: options.onError,
		onDone: options.onDone,
		cleanups: []
	};
}
function createStreamParserContext(options) {
	return {
		type: 2,
		base: createBaseParserContext(2, options),
		state: createStreamParserState(options)
	};
}
function parseItems(ctx, depth, current) {
	const nodes = [];
	for (let i = 0, len = current.length; i < len; i++) if (i in current) nodes[i] = parseSOS(ctx, depth, current[i]);
	else nodes[i] = 0;
	return nodes;
}
function parseArray(ctx, depth, id, current) {
	return createArrayNode(id, current, parseItems(ctx, depth, current));
}
function parseProperties(ctx, depth, properties) {
	const entries = Object.entries(properties);
	const keyNodes = [];
	const valueNodes = [];
	for (let i = 0, len = entries.length; i < len; i++) {
		keyNodes.push(serializeString(entries[i][0]));
		valueNodes.push(parseSOS(ctx, depth, entries[i][1]));
	}
	if (SYM_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ITERATOR));
		valueNodes.push(createIteratorFactoryInstanceNode(parseIteratorFactory(ctx.base), parseSOS(ctx, depth, createSequenceFromIterable(properties))));
	}
	if (SYM_ASYNC_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ASYNC_ITERATOR));
		valueNodes.push(createAsyncIteratorFactoryInstanceNode(parseAsyncIteratorFactory(ctx.base), parseSOS(ctx, depth, ctx.type === 1 ? createStream() : createStreamFromAsyncIterable(properties, ctx.state.cleanups))));
	}
	if (SYM_TO_STRING_TAG in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_TO_STRING_TAG));
		valueNodes.push(createStringNode(properties[SYM_TO_STRING_TAG]));
	}
	if (SYM_IS_CONCAT_SPREADABLE in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_IS_CONCAT_SPREADABLE));
		valueNodes.push(properties[SYM_IS_CONCAT_SPREADABLE] ? TRUE_NODE : FALSE_NODE);
	}
	return {
		k: keyNodes,
		v: valueNodes
	};
}
function parsePlainObject(ctx, depth, id, current, empty) {
	return createObjectNode(id, current, empty, parseProperties(ctx, depth, current));
}
function parseBoxed(ctx, depth, id, current) {
	return createBoxedNode(id, parseSOS(ctx, depth, current.valueOf()));
}
function parseTypedArray(ctx, depth, id, current) {
	current = getArrayBufferView(ctx.base, current);
	return createTypedArrayNode(id, current, parseSOS(ctx, depth, current.buffer));
}
function parseBigIntTypedArray(ctx, depth, id, current) {
	current = getArrayBufferView(ctx.base, current);
	return createBigIntTypedArrayNode(id, current, parseSOS(ctx, depth, current.buffer));
}
function parseDataView(ctx, depth, id, current) {
	current = getArrayBufferView(ctx.base, current);
	return createDataViewNode(id, current, parseSOS(ctx, depth, current.buffer));
}
function parseError(ctx, depth, id, current) {
	const options = getErrorOptions(current, ctx.base.features);
	return createErrorNode(id, current, options ? parseProperties(ctx, depth, options) : void 0);
}
function parseAggregateError(ctx, depth, id, current) {
	const options = getErrorOptions(current, ctx.base.features);
	return createAggregateErrorNode(id, current, options ? parseProperties(ctx, depth, options) : void 0);
}
function parseMap(ctx, depth, id, current) {
	const keyNodes = [];
	const valueNodes = [];
	for (const [key, value] of current.entries()) {
		keyNodes.push(parseSOS(ctx, depth, key));
		valueNodes.push(parseSOS(ctx, depth, value));
	}
	return createMapNode(ctx.base, id, keyNodes, valueNodes);
}
function parseSet(ctx, depth, id, current) {
	const items = [];
	for (const item of current.keys()) items.push(parseSOS(ctx, depth, item));
	return createSetNode(id, items);
}
function parseStream(ctx, depth, id, current) {
	const result = createStreamConstructorNode(id, parseSpecialReference(ctx.base, 4), []);
	if (ctx.type === 1) return result;
	pushPendingState(ctx);
	current.on({
		next: (value) => {
			if (ctx.state.alive) {
				const parsed = parseWithError(ctx, depth, value);
				if (parsed) onParse(ctx, createStreamNextNode(id, parsed));
			}
		},
		throw: (value) => {
			if (ctx.state.alive) {
				const parsed = parseWithError(ctx, depth, value);
				if (parsed) onParse(ctx, createStreamThrowNode(id, parsed));
			}
			popPendingState(ctx);
		},
		return: (value) => {
			if (ctx.state.alive) {
				const parsed = parseWithError(ctx, depth, value);
				if (parsed) onParse(ctx, createStreamReturnNode(id, parsed));
			}
			popPendingState(ctx);
		}
	});
	return result;
}
function handlePromiseSuccess(id, depth, data) {
	if (this.state.alive) {
		const parsed = parseWithError(this, depth, data);
		if (parsed) onParse(this, createSerovalNode(23, id, void 0, void 0, void 0, void 0, void 0, [parseSpecialReference(this.base, 2), parsed], void 0, void 0, void 0, void 0));
		popPendingState(this);
	}
}
function handlePromiseFailure(id, depth, data) {
	if (this.state.alive) {
		const parsed = parseWithError(this, depth, data);
		if (parsed) onParse(this, createSerovalNode(24, id, void 0, void 0, void 0, void 0, void 0, [parseSpecialReference(this.base, 3), parsed], void 0, void 0, void 0, void 0));
	}
	popPendingState(this);
}
function parsePromise(ctx, depth, id, current) {
	const resolver = createIndexForValue(ctx.base, {});
	if (ctx.type === 2) {
		pushPendingState(ctx);
		current.then(handlePromiseSuccess.bind(ctx, resolver, depth), handlePromiseFailure.bind(ctx, resolver, depth));
	}
	return createPromiseConstructorNode(ctx.base, id, resolver);
}
function parsePluginSync(ctx, depth, id, current, currentPlugins) {
	for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.parse.sync && plugin.test(current)) return createPluginNode(id, plugin.tag, plugin.parse.sync(current, new SyncParsePluginContext(ctx, depth), { id }));
	}
}
function parsePluginStream(ctx, depth, id, current, currentPlugins) {
	for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.parse.stream && plugin.test(current)) return createPluginNode(id, plugin.tag, plugin.parse.stream(current, new StreamParsePluginContext(ctx, depth), { id }));
	}
}
function parsePlugin(ctx, depth, id, current) {
	const currentPlugins = ctx.base.plugins;
	if (currentPlugins) return ctx.type === 1 ? parsePluginSync(ctx, depth, id, current, currentPlugins) : parsePluginStream(ctx, depth, id, current, currentPlugins);
}
function parseSequence(ctx, depth, id, current) {
	const nodes = [];
	for (let i = 0, len = current.v.length; i < len; i++) nodes[i] = parseSOS(ctx, depth, current.v[i]);
	return createSequenceNode(id, nodes, current.t, current.d);
}
function parseObjectPhase2(ctx, depth, id, current, currentClass) {
	switch (currentClass) {
		case Object: return parsePlainObject(ctx, depth, id, current, false);
		case void 0: return parsePlainObject(ctx, depth, id, current, true);
		case Date: return createDateNode(id, current);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return parseError(ctx, depth, id, current);
		case Number:
		case Boolean:
		case String:
		case BigInt: return parseBoxed(ctx, depth, id, current);
		case ArrayBuffer: return createArrayBufferNode(ctx.base, id, current);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return parseTypedArray(ctx, depth, id, current);
		case DataView: return parseDataView(ctx, depth, id, current);
		case Map: return parseMap(ctx, depth, id, current);
		case Set: return parseSet(ctx, depth, id, current);
	}
	if (currentClass === Promise || current instanceof Promise) return parsePromise(ctx, depth, id, current);
	const currentFeatures = ctx.base.features;
	if (currentFeatures & 32 && currentClass === RegExp) return createRegExpNode(id, current);
	if (currentFeatures & 16) switch (currentClass) {
		case BigInt64Array:
		case BigUint64Array: return parseBigIntTypedArray(ctx, depth, id, current);
	}
	if (currentFeatures & 1 && typeof AggregateError !== "undefined" && (currentClass === AggregateError || current instanceof AggregateError)) return parseAggregateError(ctx, depth, id, current);
	if (currentFeatures & 64 && typeof Temporal !== "undefined") switch (currentClass) {
		case Temporal.Instant: return createTemporalNode(id, 0, current);
		case Temporal.Duration: return createTemporalNode(id, 1, current);
		case Temporal.PlainDate: return createTemporalNode(id, 2, current);
		case Temporal.PlainDateTime: return createTemporalNode(id, 3, current);
		case Temporal.PlainMonthDay: return createTemporalNode(id, 4, current);
		case Temporal.PlainTime: return createTemporalNode(id, 5, current);
		case Temporal.PlainYearMonth: return createTemporalNode(id, 6, current);
		case Temporal.ZonedDateTime: return createTemporalNode(id, 7, current);
	}
	if (current instanceof Error) return parseError(ctx, depth, id, current);
	if (SYM_ITERATOR in current || SYM_ASYNC_ITERATOR in current) return parsePlainObject(ctx, depth, id, current, !!currentClass);
	throw new SerovalUnsupportedTypeError(current);
}
function parseObject(ctx, depth, id, current) {
	if (Array.isArray(current)) return parseArray(ctx, depth, id, current);
	if (isStream(current)) return parseStream(ctx, depth, id, current);
	if (isSequence(current)) return parseSequence(ctx, depth, id, current);
	let currentClass = current.constructor;
	if (currentClass !== void 0 && typeof currentClass !== "function") {
		const proto = Object.getPrototypeOf(current);
		currentClass = proto === null ? void 0 : proto.constructor;
	}
	if (currentClass === OpaqueReference) return parseSOS(ctx, depth, current.replacement);
	const parsed = parsePlugin(ctx, depth, id, current);
	if (parsed) return parsed;
	return parseObjectPhase2(ctx, depth, id, current, currentClass);
}
function parseFunction(ctx, depth, current) {
	const ref = getReferenceNode(ctx.base, current);
	if (ref.type !== 0) return ref.value;
	const plugin = parsePlugin(ctx, depth, ref.value, current);
	if (plugin) return plugin;
	throw new SerovalUnsupportedTypeError(current);
}
function parseSOS(ctx, depth, current) {
	if (depth >= ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
	switch (typeof current) {
		case "boolean": return current ? TRUE_NODE : FALSE_NODE;
		case "undefined": return UNDEFINED_NODE;
		case "string": return createStringNode(current);
		case "number": return createNumberNode(current);
		case "bigint": return createBigIntNode(current);
		case "object":
			if (current) {
				const ref = getReferenceNode(ctx.base, current);
				return ref.type === 0 ? parseObject(ctx, depth + 1, ref.value, current) : ref.value;
			}
			return NULL_NODE;
		case "symbol": return parseWellKnownSymbol(ctx.base, current);
		case "function": return parseFunction(ctx, depth, current);
		default: throw new SerovalUnsupportedTypeError(current);
	}
}
function onParse(ctx, node) {
	if (ctx.state.initial) ctx.state.buffer.push(node);
	else onParseInternal(ctx, node, false);
}
function onError(ctx, error) {
	if (ctx.state.onError) ctx.state.onError(error);
	else throw error instanceof SerovalParserError ? error : new SerovalParserError(error);
}
function onDone(ctx) {
	if (ctx.state.onDone) ctx.state.onDone();
	for (let i = 0, len = ctx.state.cleanups.length; i < len; i++) ctx.state.cleanups[i]();
}
function onParseInternal(ctx, node, initial) {
	try {
		ctx.state.onParse(node, initial);
	} catch (error) {
		onError(ctx, error);
	}
}
function pushPendingState(ctx) {
	ctx.state.pending++;
}
function popPendingState(ctx) {
	if (--ctx.state.pending <= 0) onDone(ctx);
}
function parseWithError(ctx, depth, current) {
	try {
		return parseSOS(ctx, depth, current);
	} catch (err) {
		onError(ctx, err);
		return;
	}
}
function startStreamParse(ctx, current) {
	const parsed = parseWithError(ctx, 0, current);
	if (parsed) {
		onParseInternal(ctx, parsed, true);
		ctx.state.initial = false;
		flushStreamParse(ctx, ctx.state);
		if (ctx.state.pending <= 0) destroyStreamParse(ctx);
	}
}
function flushStreamParse(ctx, state) {
	for (let i = 0, len = state.buffer.length; i < len; i++) onParseInternal(ctx, state.buffer[i], false);
}
function destroyStreamParse(ctx) {
	if (ctx.state.alive) {
		onDone(ctx);
		ctx.state.alive = false;
	}
}
function toCrossJSONStream(source, options) {
	const plugins = resolvePlugins(options.plugins);
	const ctx = createStreamParserContext({
		compactArrayBufferViews: options.compactArrayBufferViews,
		plugins,
		refs: options.refs,
		disabledFeatures: options.disabledFeatures,
		depthLimit: options.depthLimit,
		onParse: options.onParse,
		onError: options.onError,
		onDone: options.onDone
	});
	startStreamParse(ctx, source);
	return destroyStreamParse.bind(null, ctx);
}
function fromCrossJSON(source, options) {
	const plugins = resolvePlugins(options.plugins);
	return deserializeTop(createCrossDeserializerContext({
		maxBase64Length: options.maxBase64Length,
		plugins,
		refs: options.refs,
		features: options.features,
		disabledFeatures: options.disabledFeatures,
		depthLimit: options.depthLimit
	}), source);
}
var PROMISE_TO_ABORT_SIGNAL = (promise) => {
	const controller = new AbortController();
	const abort = controller.abort.bind(controller);
	promise.then(abort, abort);
	return controller;
};
function resolveAbortSignalResult(resolve) {
	resolve(this.reason);
}
function resolveAbortSignal(resolve) {
	this.addEventListener("abort", resolveAbortSignalResult.bind(this, resolve), { once: true });
}
function abortSignalToPromise(signal) {
	return new Promise(resolveAbortSignal.bind(signal));
}
var ABORT_CONTROLLER = {};
var AbortSignalPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/AbortSignal",
	extends: [/* @__PURE__ */ createPlugin({
		tag: "seroval-plugins/web/AbortControllerFactoryPlugin",
		test(value) {
			return value === ABORT_CONTROLLER;
		},
		parse: {
			sync() {
				return ABORT_CONTROLLER;
			},
			async async() {
				return await Promise.resolve(ABORT_CONTROLLER);
			},
			stream() {
				return ABORT_CONTROLLER;
			}
		},
		serialize() {
			return PROMISE_TO_ABORT_SIGNAL.toString();
		},
		deserialize() {
			throw new Error("seroval-plugins/web/AbortControllerFactoryPlugin cannot be deserialized directly.");
		}
	})],
	test(value) {
		if (typeof AbortSignal === "undefined") return false;
		return value instanceof AbortSignal;
	},
	parse: {
		sync(value, ctx) {
			if (value.aborted) return { reason: ctx.parse(value.reason) };
			return {};
		},
		async async(value, ctx) {
			if (value.aborted) return { reason: await ctx.parse(value.reason) };
			const result = await abortSignalToPromise(value);
			return { reason: await ctx.parse(result) };
		},
		stream(value, ctx) {
			if (value.aborted) return { reason: ctx.parse(value.reason) };
			const promise = abortSignalToPromise(value);
			return {
				factory: ctx.parse(ABORT_CONTROLLER),
				controller: ctx.parse(promise)
			};
		}
	},
	serialize(node, ctx) {
		if (node.reason) return "AbortSignal.abort(" + ctx.serialize(node.reason) + ")";
		if (node.controller && node.factory) return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.controller) + ").signal";
		return "(new AbortController).signal";
	},
	deserialize(node, ctx) {
		if (node.reason) return AbortSignal.abort(ctx.deserialize(node.reason));
		if (node.controller) {
			const controller = ctx.deserialize(node.controller);
			if (!(controller instanceof Promise)) throw new Error("Expected a Promise source.");
			return PROMISE_TO_ABORT_SIGNAL(controller).signal;
		}
		return new AbortController().signal;
	}
});
function expectString(value) {
	if (typeof value !== "string") throw new Error("Expected a string.");
	return value;
}
function expectArrayBuffer(value) {
	if (!(value instanceof ArrayBuffer)) throw new Error("Expected an ArrayBuffer.");
	return value;
}
function createCustomEventOptions(current) {
	return {
		detail: current.detail,
		bubbles: current.bubbles,
		cancelable: current.cancelable,
		composed: current.composed
	};
}
var CustomEventPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/CustomEvent",
	test(value) {
		if (typeof CustomEvent === "undefined") return false;
		return value instanceof CustomEvent;
	},
	parse: {
		sync(value, ctx) {
			return {
				type: ctx.parse(value.type),
				options: ctx.parse(createCustomEventOptions(value))
			};
		},
		async async(value, ctx) {
			return {
				type: await ctx.parse(value.type),
				options: await ctx.parse(createCustomEventOptions(value))
			};
		},
		stream(value, ctx) {
			return {
				type: ctx.parse(value.type),
				options: ctx.parse(createCustomEventOptions(value))
			};
		}
	},
	serialize(node, ctx) {
		return "new CustomEvent(" + ctx.serialize(node.type) + "," + ctx.serialize(node.options) + ")";
	},
	deserialize(node, ctx) {
		return new CustomEvent(expectString(ctx.deserialize(node.type)), ctx.deserialize(node.options));
	}
});
var DOMExceptionPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/DOMException",
	test(value) {
		if (typeof DOMException === "undefined") return false;
		return value instanceof DOMException;
	},
	parse: {
		sync(value, ctx) {
			return {
				name: ctx.parse(value.name),
				message: ctx.parse(value.message)
			};
		},
		async async(value, ctx) {
			return {
				name: await ctx.parse(value.name),
				message: await ctx.parse(value.message)
			};
		},
		stream(value, ctx) {
			return {
				name: ctx.parse(value.name),
				message: ctx.parse(value.message)
			};
		}
	},
	serialize(node, ctx) {
		return "new DOMException(" + ctx.serialize(node.message) + "," + ctx.serialize(node.name) + ")";
	},
	deserialize(node, ctx) {
		return new DOMException(expectString(ctx.deserialize(node.message)), expectString(ctx.deserialize(node.name)));
	}
});
function createEventOptions(current) {
	return {
		bubbles: current.bubbles,
		cancelable: current.cancelable,
		composed: current.composed
	};
}
var EventPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/Event",
	test(value) {
		if (typeof Event === "undefined") return false;
		return value instanceof Event;
	},
	parse: {
		sync(value, ctx) {
			return {
				type: ctx.parse(value.type),
				options: ctx.parse(createEventOptions(value))
			};
		},
		async async(value, ctx) {
			return {
				type: await ctx.parse(value.type),
				options: await ctx.parse(createEventOptions(value))
			};
		},
		stream(value, ctx) {
			return {
				type: ctx.parse(value.type),
				options: ctx.parse(createEventOptions(value))
			};
		}
	},
	serialize(node, ctx) {
		return "new Event(" + ctx.serialize(node.type) + "," + ctx.serialize(node.options) + ")";
	},
	deserialize(node, ctx) {
		return new Event(expectString(ctx.deserialize(node.type)), ctx.deserialize(node.options));
	}
});
var FilePlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/File",
	test(value) {
		if (typeof File === "undefined") return false;
		return value instanceof File;
	},
	parse: { async async(value, ctx) {
		return {
			name: await ctx.parse(value.name),
			options: await ctx.parse({
				type: value.type,
				lastModified: value.lastModified
			}),
			buffer: await ctx.parse(await value.arrayBuffer())
		};
	} },
	serialize(node, ctx) {
		return "new File([" + ctx.serialize(node.buffer) + "]," + ctx.serialize(node.name) + "," + ctx.serialize(node.options) + ")";
	},
	deserialize(node, ctx) {
		return new File([expectArrayBuffer(ctx.deserialize(node.buffer))], expectString(ctx.deserialize(node.name)), ctx.deserialize(node.options));
	}
});
function convertFormData(instance) {
	const items = [];
	instance.forEach((value, key) => {
		items.push([key, value]);
	});
	return items;
}
var FORM_DATA_FACTORY = {};
var FORM_DATA_FACTORY_CONSTRUCTOR = (e, f = new FormData(), i = 0, s = e.length, t) => {
	for (; i < s; i++) {
		t = e[i];
		f.append(t[0], t[1]);
	}
	return f;
};
var FormDataPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/FormData",
	extends: [FilePlugin, /* @__PURE__ */ createPlugin({
		tag: "seroval-plugins/web/FormDataFactory",
		test(value) {
			return value === FORM_DATA_FACTORY;
		},
		parse: {
			sync() {
				return FORM_DATA_FACTORY;
			},
			async async() {
				return await Promise.resolve(FORM_DATA_FACTORY);
			},
			stream() {
				return FORM_DATA_FACTORY;
			}
		},
		serialize() {
			return FORM_DATA_FACTORY_CONSTRUCTOR.toString();
		},
		deserialize() {
			return FORM_DATA_FACTORY;
		}
	})],
	test(value) {
		if (typeof FormData === "undefined") return false;
		return value instanceof FormData;
	},
	parse: {
		sync(value, ctx) {
			return {
				factory: ctx.parse(FORM_DATA_FACTORY),
				entries: ctx.parse(convertFormData(value))
			};
		},
		async async(value, ctx) {
			return {
				factory: await ctx.parse(FORM_DATA_FACTORY),
				entries: await ctx.parse(convertFormData(value))
			};
		},
		stream(value, ctx) {
			return {
				factory: ctx.parse(FORM_DATA_FACTORY),
				entries: ctx.parse(convertFormData(value))
			};
		}
	},
	serialize(node, ctx) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.entries) + ")";
	},
	deserialize(node, ctx) {
		return FORM_DATA_FACTORY_CONSTRUCTOR(ctx.deserialize(node.entries));
	}
});
function convertHeaders(instance) {
	const items = [];
	instance.forEach((value, key) => {
		items.push([key, value]);
	});
	return items;
}
var HeadersPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/Headers",
	test(value) {
		if (typeof Headers === "undefined") return false;
		return value instanceof Headers;
	},
	parse: {
		sync(value, ctx) {
			return { value: ctx.parse(convertHeaders(value)) };
		},
		async async(value, ctx) {
			return { value: await ctx.parse(convertHeaders(value)) };
		},
		stream(value, ctx) {
			return { value: ctx.parse(convertHeaders(value)) };
		}
	},
	serialize(node, ctx) {
		return "new Headers(" + ctx.serialize(node.value) + ")";
	},
	deserialize(node, ctx) {
		return new Headers(ctx.deserialize(node.value));
	}
});
var READABLE_STREAM_FACTORY = {};
var READABLE_STREAM_FACTORY_CONSTRUCTOR = (stream) => new ReadableStream({ start(controller) {
	stream.on({
		next(value) {
			try {
				controller.enqueue(value);
			} catch (_error) {}
		},
		throw(value) {
			controller.error(value);
		},
		return() {
			try {
				controller.close();
			} catch (_error) {}
		}
	});
} });
var ReadableStreamFactoryPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(value) {
		return value === READABLE_STREAM_FACTORY;
	},
	parse: {
		sync() {
			return READABLE_STREAM_FACTORY;
		},
		async async() {
			return await Promise.resolve(READABLE_STREAM_FACTORY);
		},
		stream() {
			return READABLE_STREAM_FACTORY;
		}
	},
	serialize() {
		return READABLE_STREAM_FACTORY_CONSTRUCTOR.toString();
	},
	deserialize() {
		return READABLE_STREAM_FACTORY;
	}
});
async function drainStream(stream, reader) {
	try {
		while (true) {
			const result = await reader.read();
			if (result.done) {
				stream.return(result.value);
				reader.releaseLock();
				break;
			}
			stream.next(result.value);
		}
	} catch (error) {
		reader.releaseLock();
		stream.throw(error);
	}
}
function cleanupStream(reader) {
	reader.cancel().catch(() => {});
	reader.releaseLock();
}
function toStream(value) {
	const stream = createStream();
	const reader = value.getReader();
	const cleanup = cleanupStream.bind(null, reader);
	drainStream(stream, reader).catch(cleanup);
	return [stream, cleanup];
}
var ReadableStreamPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval/plugins/web/ReadableStream",
	extends: [ReadableStreamFactoryPlugin],
	test(value) {
		if (typeof ReadableStream === "undefined") return false;
		return value instanceof ReadableStream;
	},
	parse: {
		sync(_value, ctx) {
			return {
				factory: ctx.parse(READABLE_STREAM_FACTORY),
				stream: ctx.parse(createStream())
			};
		},
		async async(value, ctx) {
			return {
				factory: await ctx.parse(READABLE_STREAM_FACTORY),
				stream: await ctx.parse(toStream(value)[0])
			};
		},
		stream(value, ctx) {
			const [stream, cleanup] = toStream(value);
			ctx.addCleanup(cleanup);
			return {
				factory: ctx.parse(READABLE_STREAM_FACTORY),
				stream: ctx.parse(stream)
			};
		}
	},
	serialize(node, ctx) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
	},
	deserialize(node, ctx) {
		const stream = ctx.deserialize(node.stream);
		if (!stream || typeof stream !== "object" || !isStream(stream)) throw new Error("Expected a stream source.");
		return READABLE_STREAM_FACTORY_CONSTRUCTOR(stream);
	}
});
function createRequestOptions(current, body) {
	return {
		body,
		cache: current.cache,
		credentials: current.credentials,
		headers: current.headers,
		integrity: current.integrity,
		keepalive: current.keepalive,
		method: current.method,
		mode: current.mode,
		redirect: current.redirect,
		referrer: current.referrer,
		referrerPolicy: current.referrerPolicy
	};
}
var RequestPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/Request",
	extends: [ReadableStreamPlugin, HeadersPlugin],
	test(value) {
		if (typeof Request === "undefined") return false;
		return value instanceof Request;
	},
	parse: {
		async async(value, ctx) {
			return {
				url: await ctx.parse(value.url),
				options: await ctx.parse(createRequestOptions(value, value.body && !value.bodyUsed ? await value.clone().arrayBuffer() : null))
			};
		},
		stream(value, ctx) {
			return {
				url: ctx.parse(value.url),
				options: ctx.parse(createRequestOptions(value, value.body && !value.bodyUsed ? value.clone().body : null))
			};
		}
	},
	serialize(node, ctx) {
		return "new Request(" + ctx.serialize(node.url) + "," + ctx.serialize(node.options) + ")";
	},
	deserialize(node, ctx) {
		return new Request(expectString(ctx.deserialize(node.url)), ctx.deserialize(node.options));
	}
});
function createResponseOptions(current) {
	return {
		headers: current.headers,
		status: current.status,
		statusText: current.statusText
	};
}
var DEFAULT_PLUGINS = [
	AbortSignalPlugin,
	CustomEventPlugin,
	DOMExceptionPlugin,
	EventPlugin,
	FormDataPlugin,
	HeadersPlugin,
	ReadableStreamPlugin,
	RequestPlugin,
	/* @__PURE__ */ createPlugin({
		tag: "seroval-plugins/web/Response",
		extends: [ReadableStreamPlugin, HeadersPlugin],
		test(value) {
			if (typeof Response === "undefined") return false;
			return value instanceof Response;
		},
		parse: {
			async async(value, ctx) {
				return {
					body: await ctx.parse(value.body && !value.bodyUsed ? await value.clone().arrayBuffer() : null),
					options: await ctx.parse(createResponseOptions(value))
				};
			},
			stream(value, ctx) {
				return {
					body: ctx.parse(value.body && !value.bodyUsed ? value.clone().body : null),
					options: ctx.parse(createResponseOptions(value))
				};
			}
		},
		serialize(node, ctx) {
			return "new Response(" + ctx.serialize(node.body) + "," + ctx.serialize(node.options) + ")";
		},
		deserialize(node, ctx) {
			return new Response(ctx.deserialize(node.body), ctx.deserialize(node.options));
		}
	}),
	/* @__PURE__ */ createPlugin({
		tag: "seroval-plugins/web/URLSearchParams",
		test(value) {
			if (typeof URLSearchParams === "undefined") return false;
			return value instanceof URLSearchParams;
		},
		parse: {
			sync(value, ctx) {
				return { value: ctx.parse(value.toString()) };
			},
			async async(value, ctx) {
				return { value: await ctx.parse(value.toString()) };
			},
			stream(value, ctx) {
				return { value: ctx.parse(value.toString()) };
			}
		},
		serialize(node, ctx) {
			return "new URLSearchParams(" + ctx.serialize(node.value) + ")";
		},
		deserialize(node, ctx) {
			return new URLSearchParams(expectString(ctx.deserialize(node.value)));
		}
	}),
	/* @__PURE__ */ createPlugin({
		tag: "seroval-plugins/web/URL",
		test(value) {
			if (typeof URL === "undefined") return false;
			return value instanceof URL;
		},
		parse: {
			sync(value, ctx) {
				return { value: ctx.parse(value.href) };
			},
			async async(value, ctx) {
				return { value: await ctx.parse(value.href) };
			},
			stream(value, ctx) {
				return { value: ctx.parse(value.href) };
			}
		},
		serialize(node, ctx) {
			return "new URL(" + ctx.serialize(node.value) + ")";
		},
		deserialize(node, ctx) {
			return new URL(expectString(ctx.deserialize(node.value)));
		}
	})
];
var MAX_SERIALIZATION_DEPTH_LIMIT = 64;
var DISABLED_FEATURES = Feature.RegExp;
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
		toCrossJSONStream(value, {
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
			return fromCrossJSON(JSON.parse(chunk), {
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
		...await manifest.getAssets("/Users/collinpfeifer/orca/workspaces/madcactus.org/crpfeife-update-marketing-page/web/src/app.tsx")
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
export { useParams as a, ssr_exports as i, Title as n, setFunctionName as r, Meta as t };
