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
const ReceiptPercent = React.forwardRef(
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
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.5 11.875 5-5m3.75-2.91v14.16l-3.125-1.25L10 18.125l-3.125-1.25-3.125 1.25V3.965c0-.924.672-1.715 1.59-1.822 3.096-.36 6.224-.36 9.32 0 .918.107 1.59.898 1.59 1.821ZM8.125 7.5h.007v.007h-.007V7.5Zm.313 0a.312.312 0 1 1-.625 0 .312.312 0 0 1 .625 0v0Zm3.437 3.75h.007v.007h-.007v-.007Zm.313 0a.313.313 0 1 1-.626 0 .313.313 0 0 1 .626 0v0Z"
        }
      )
    );
  }
);
ReceiptPercent.displayName = "ReceiptPercent";

export { ReceiptPercent as default };
//# sourceMappingURL=receipt-percent.js.map