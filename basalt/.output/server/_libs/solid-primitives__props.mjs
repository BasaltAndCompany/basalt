//#region node_modules/@solid-primitives/props/dist/combineProps.js
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
//#endregion
export { combineStyle as t };
