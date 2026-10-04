//#region node_modules/.nitro/vite/services/ssr/_build/assets/site-state-ihm8ahx4.js
var HERO_KEY = "basalt.heroVideo";
function initHeroVideo() {
	if (!localStorage.getItem("basalt.heroVideoMigrated")) {
		localStorage.setItem("basalt.heroVideoMigrated", "1");
		localStorage.removeItem(HERO_KEY);
	}
	return localStorage.getItem(HERO_KEY) ?? "/hero-loop.mp4";
}
//#endregion
export { initHeroVideo as t };
