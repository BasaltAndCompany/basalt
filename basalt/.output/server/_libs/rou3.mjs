//#region node_modules/rou3/dist/index.mjs
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
//#endregion
export { findRoute as i, addRoute as n, createRouter as r, NullProtoObj as t };
