import "./event-listener+[...].mjs";
/**
* Create resize observer instance, listening for changes to size of the reactive {@link targets} array.
*
* @param targets Elements to be observed. Can be a reactive signal or store top-level array.
* @param onResize - Function handler to trigger on element resize
*
* @example
* ```tsx
* let ref
* createResizeObserver(() => ref, ({ width, height }, el) => {
*   if (el === ref) console.log(width, height)
* });
* <div ref={ref}/>
* ```
*/
function createResizeObserver(targets, onResize, options) {}
//#endregion
export { createResizeObserver as t };
