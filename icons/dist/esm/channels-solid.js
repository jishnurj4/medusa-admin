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
const ChannelsSolid = React.forwardRef(
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
          fillRule: "evenodd",
          d: "M12.399 3.438a2.439 2.439 0 1 1 0 1.5h-1.243a.75.75 0 0 0-.75.75V9.25h1.993a2.439 2.439 0 1 1 0 1.5h-1.993v3.563c0 .414.335.75.75.75h1.243a2.439 2.439 0 1 1 0 1.5h-1.243a2.25 2.25 0 0 1-2.25-2.25V10.75H6.913a2.439 2.439 0 1 1 0-1.5h1.993V5.688a2.25 2.25 0 0 1 2.25-2.25h1.243Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
ChannelsSolid.displayName = "ChannelsSolid";

export { ChannelsSolid as default };
//# sourceMappingURL=channels-solid.js.map
