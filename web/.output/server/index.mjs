globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as FastResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/_build/assets/bodoni-moda-symbols-opsz-normal-d21etpfE.woff2": {
		"type": "font/woff2",
		"etag": "\"65bc-7RSIMqeJzCbBSd/Gq0PlHbK9t54\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 26044,
		"path": "../public/_build/assets/bodoni-moda-symbols-opsz-normal-d21etpfE.woff2"
	},
	"/.vite/manifest.json": {
		"type": "application/json",
		"etag": "\"2b28-USD95WFlWKj/gLLcZwATn+t3cD4\"",
		"mtime": "2026-10-13T15:12:01.367Z",
		"size": 11048,
		"path": "../public/.vite/manifest.json"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"112-axgKJvXTZ/hG9C10quQPTYMbpQQ\"",
		"mtime": "2026-10-13T15:12:02.501Z",
		"size": 274,
		"path": "../public/favicon.svg"
	},
	"/_build/assets/routing-CecSaODk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152b-YyTZICJGa2MU/9R4Q6XaBaDd3YU\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 5419,
		"path": "../public/_build/assets/routing-CecSaODk.js"
	},
	"/_build/assets/geist-latin-wght-normal-BgDaEnEv.woff2": {
		"type": "font/woff2",
		"etag": "\"72d8-9J+D7/6th5UzRxIgoFX9awJv47A\"",
		"mtime": "2026-10-13T15:12:01.367Z",
		"size": 29400,
		"path": "../public/_build/assets/geist-latin-wght-normal-BgDaEnEv.woff2"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-10-13T15:12:02.501Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/_build/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2": {
		"type": "font/woff2",
		"etag": "\"1cfc-yYSDXNlt/tTRaj6rJo8ZMqvY7pQ\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 7420,
		"path": "../public/_build/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2"
	},
	"/_build/assets/bodoni-moda-math-opsz-normal-CbZAXtrh.woff2": {
		"type": "font/woff2",
		"etag": "\"98f4-9Ri9GZ4l/covT5RJpMEHhb78ePU\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 39156,
		"path": "../public/_build/assets/bodoni-moda-math-opsz-normal-CbZAXtrh.woff2"
	},
	"/_build/assets/index-5AQvBJkb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa3-hvJzeTHRQL50UCGc9MVeAMOnYDA\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 4003,
		"path": "../public/_build/assets/index-5AQvBJkb.js"
	},
	"/_build/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2": {
		"type": "font/woff2",
		"etag": "\"3aec-5kpQSZEtAzzU5kdiuro3Zr2YR54\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 15084,
		"path": "../public/_build/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2"
	},
	"/_build/assets/label-kTf9Enyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"167-WvBYBgjpzKqHmSWYolRMsI2QP18\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 359,
		"path": "../public/_build/assets/label-kTf9Enyu.js"
	},
	"/_build/assets/bodoni-moda-latin-ext-opsz-normal-CoJBavOu.woff2": {
		"type": "font/woff2",
		"etag": "\"61bc-M9bzPS2Bk21j3/SQzTL3Yy2EY54\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 25020,
		"path": "../public/_build/assets/bodoni-moda-latin-ext-opsz-normal-CoJBavOu.woff2"
	},
	"/_build/assets/textarea-DLhaI_tV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c6-VErfUlQSS3JxmDnoitkCAUj5weY\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 710,
		"path": "../public/_build/assets/textarea-DLhaI_tV.js"
	},
	"/_build/assets/entry-client-CN4PJZV1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"371c-FIUIQLX6fHQu5ZrHjzwg5/4LFYo\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 14108,
		"path": "../public/_build/assets/entry-client-CN4PJZV1.js"
	},
	"/_build/assets/footage-BGCOTvLQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a21-BoSQu5oCgIf1QlHuBMTcOE029A4\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 6689,
		"path": "../public/_build/assets/footage-BGCOTvLQ.js"
	},
	"/_build/assets/site-state-CIUA0Awq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5-LTgxQvSBtSF/zq3b9JAZtQHp5uk\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 229,
		"path": "../public/_build/assets/site-state-CIUA0Awq.js"
	},
	"/_build/assets/input-CPeEP3Md.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-Uop+UaULjzMmpiIOZ+Gu6IDf+Z8\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 730,
		"path": "../public/_build/assets/input-CPeEP3Md.js"
	},
	"/_build/assets/src-80yAutk3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2260f-EZaAHkTHb+pjDy77LnEJA93AppA\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 140815,
		"path": "../public/_build/assets/src-80yAutk3.js"
	},
	"/hero-loop.mp4": {
		"type": "video/mp4",
		"etag": "\"125659-DGyxlcWQdlPxRx87XTRsvcbdyDg\"",
		"mtime": "2026-10-13T14:56:50.721Z",
		"size": 1201753,
		"path": "../public/hero-loop.mp4"
	},
	"/_build/assets/_id_-CtRe8eMZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"945-LN6fywNHbWsnc6GgnxC+mkHqjvE\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 2373,
		"path": "../public/_build/assets/_id_-CtRe8eMZ.js"
	},
	"/_build/assets/writing-CEgH-De3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c4-8ngaVebds4O3qefYsfcJBSBxOgE\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 1732,
		"path": "../public/_build/assets/writing-CEgH-De3.js"
	},
	"/_build/assets/site-Bha_-JLz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"954-La1Jb+3wibs038N9aumrhUT4oL4\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 2388,
		"path": "../public/_build/assets/site-Bha_-JLz.js"
	},
	"/_build/assets/createAsync-Cd30YF3_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2dd-UKibRmkT13z0HUKlxct/yUu7W8Q\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 733,
		"path": "../public/_build/assets/createAsync-Cd30YF3_.js"
	},
	"/_build/assets/utils-C5uTcCG4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"896-FYXUCunchpmW0f3i4dKt8I8gLwo\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 2198,
		"path": "../public/_build/assets/utils-C5uTcCG4.js"
	},
	"/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"1e20-8EY7nuft3DWjmexykVTIwJ1BC7Q\"",
		"mtime": "2026-10-13T15:12:03.160Z",
		"size": 7712,
		"path": "../public/index.html"
	},
	"/_build/assets/brain-Cju-ccLU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1731-8WWE1LOmuKUK8MtfAlJW34tpiDE\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 5937,
		"path": "../public/_build/assets/brain-Cju-ccLU.js"
	},
	"/_build/assets/entry-client-wfSJLOww.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"82c1-9JJQqr37vQsXyrWQ7LwROh55Mzo\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 33473,
		"path": "../public/_build/assets/entry-client-wfSJLOww.css"
	},
	"/_build/assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2": {
		"type": "font/woff2",
		"etag": "\"b4b4-AEESEi1iAttorfJfCdsN2qxX5F8\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 46260,
		"path": "../public/_build/assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2"
	},
	"/_build/assets/ui-ymVyGPoU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12fb3-sCsz8Q5qe3945l9ijb5vTZaXioo\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 77747,
		"path": "../public/_build/assets/ui-ymVyGPoU.js"
	},
	"/_build/assets/separator-CDqdeI3h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30c-TfV0Ijz/vbIWCi4XzP8bQQnZ4vM\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 780,
		"path": "../public/_build/assets/separator-CDqdeI3h.js"
	},
	"/_build/assets/card-Dn8LRbVz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"471-nISvkFsOiWGuLEWY5vsH0pQov3c\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 1137,
		"path": "../public/_build/assets/card-Dn8LRbVz.js"
	},
	"/_build/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2": {
		"type": "font/woff2",
		"etag": "\"4080-mZu3Z7sOWqglha+kefNbUA9Pp+Q\"",
		"mtime": "2026-10-13T15:12:01.367Z",
		"size": 16512,
		"path": "../public/_build/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2"
	},
	"/_build/assets/iu-CGeesrDo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbe-rIkKo6tMT1CYdt9xfnyVpSnC/yk\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 7358,
		"path": "../public/_build/assets/iu-CGeesrDo.js"
	},
	"/_build/assets/index-D0DCvAnI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1476-bW5bvQJpcPQK2T8yEz8SYvUiE2k\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 5238,
		"path": "../public/_build/assets/index-D0DCvAnI.js"
	},
	"/_build/assets/logo-DeT9Z6q4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ef-qhASwnnL17t5ZxgE0QTbpUvLASA\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 2031,
		"path": "../public/_build/assets/logo-DeT9Z6q4.js"
	},
	"/_build/assets/contact-CN-aLTcB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b48-5qmJZSVoe+luC+OYUJvzeJ/+QRM\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 2888,
		"path": "../public/_build/assets/contact-CN-aLTcB.js"
	},
	"/_build/assets/careers-auEqQPjm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40d-tHblN1LXRazkcU5myFjlXFsr5yE\"",
		"mtime": "2026-10-13T15:12:01.364Z",
		"size": 1037,
		"path": "../public/_build/assets/careers-auEqQPjm.js"
	},
	"/_build/assets/web-Bf2WcyEa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72b0-mXWq+DeCw3jzv5qMaiMPNeE8BSI\"",
		"mtime": "2026-10-13T15:12:01.366Z",
		"size": 29360,
		"path": "../public/_build/assets/web-Bf2WcyEa.js"
	},
	"/_build/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2": {
		"type": "font/woff2",
		"etag": "\"1f44-6MZ7/PEEOeDVF0eHI650KpwKQV8\"",
		"mtime": "2026-10-13T15:12:01.367Z",
		"size": 8004,
		"path": "../public/_build/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2"
	},
	"/_build/assets/dist-Bfhshbr9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ce-4JzCnt0FqE1zd0eUo8C1XGRAq4I\"",
		"mtime": "2026-10-13T15:12:01.365Z",
		"size": 1998,
		"path": "../public/_build/assets/dist-Bfhshbr9.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/_build/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/"), l = s.length;
		if (l > 1) {
			if (s[1] === "_build") {
				if (l > 2) {
					if (s[2] === "assets") r.unshift({
						data: $0,
						params: { "_": s.slice(3).join("/") }
					});
				}
			}
		}
		return r;
	};
})();
var _lazy_0Qk3H_ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0Qk3H_
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region ../node_modules/.bun/nitro@3.0.260610-beta+6d64835db4be2f2a/node_modules/nitro/dist/presets/bun/runtime/bun.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var _fetch = useNitroApp().fetch;
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: _fetch,
	bun: { websocket: void 0 },
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var bun_default = {};
//#endregion
export { bun_default as default };
