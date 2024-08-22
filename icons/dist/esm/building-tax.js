/**
 * @medusajs/icons v1.2.2 - MIT
 */

import * as React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BuildingTax = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M2.5 7.5h-.75c0 .414.336.75.75.75V7.5Zm15 0v.75a.75.75 0 0 0 .75-.75h-.75Zm0-1.667h.75a.75.75 0 0 0-.445-.685l-.305.685ZM10 2.5l.305-.685a.75.75 0 0 0-.61 0L10 2.5ZM2.5 5.833l-.305-.685a.75.75 0 0 0-.445.685h.75Zm5.833 11.584a.75.75 0 0 0 0-1.5v1.5Zm-5.833-.75-.72-.21a.75.75 0 0 0 .72.96v-.75Zm.73-2.5v-.75a.75.75 0 0 0-.72.54l.72.21Zm5.103.75a.75.75 0 0 0 0-1.5v1.5Zm9.333-3.189a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM11.5 15.772a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM2.5 8.25h15v-1.5h-15v1.5Zm15.75-.75V5.833h-1.5V7.5h1.5Zm-.445-2.352-7.5-3.333-.61 1.37 7.5 3.334.61-1.371Zm-8.11-3.333-7.5 3.333.61 1.37 7.5-3.333-.61-1.37ZM1.75 5.833V7.5h1.5V5.833h-1.5Zm6.583 10.084H2.5v1.5h5.833v-1.5Zm-5.113.96.73-2.5-1.44-.42-.73 2.5 1.44.42Zm.01-1.96h5.103v-1.5H3.23v1.5ZM3.416 7.5v6.667h1.5V7.5h-1.5Zm4.833 6.667V7.5h-1.5v6.667h1.5Zm8.355-3.5-5.104 5.105 1.06 1.06 5.105-5.104-1.06-1.06Zm-4.438.791c0-.069.056-.125.125-.125v1.5c.76 0 1.375-.615 1.375-1.375h-1.5Zm.125-.125c.069 0 .125.056.125.125h-1.5c0 .76.615 1.375 1.375 1.375v-1.5Zm.125.125c0 .07-.056.125-.125.125v-1.5c-.76 0-1.375.616-1.375 1.375h1.5Zm-.125.125a.125.125 0 0 1-.125-.125h1.5c0-.76-.616-1.375-1.375-1.375v1.5Zm4.458 4.459c0-.07.056-.125.125-.125v1.5c.76 0 1.375-.616 1.375-1.375h-1.5Zm.125-.125c.069 0 .125.056.125.125h-1.5c0 .76.616 1.375 1.375 1.375v-1.5Zm.125.125a.125.125 0 0 1-.125.125v-1.5c-.76 0-1.375.615-1.375 1.375H17Zm-.125.125a.125.125 0 0 1-.125-.125h1.5c0-.76-.616-1.375-1.375-1.375v1.5Z"
        }
      )
    );
  }
);
BuildingTax.displayName = "BuildingTax";

export { BuildingTax as default };
//# sourceMappingURL=building-tax.js.map
