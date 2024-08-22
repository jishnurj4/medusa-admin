/**
 * @medusajs/icons v1.2.1 - MIT
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
const AdjustmentsDone = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: color,
          d: "M8.5 2.528h-.778a.75.75 0 1 0 0 1.5h1.08a4 4 0 0 1-.302-1.5M10.695 6.07a4 4 0 0 1-1.21-.94.75.75 0 0 0-.29.592V6.75H1.5a.75.75 0 0 0 0 1.5h7.694v1.028a.75.75 0 0 0 1.5 0zM5.806 1.5a.75.75 0 1 0-1.5 0v1.028H1.5a.75.75 0 0 0 0 1.5h2.806v1.028a.75.75 0 0 0 1.5 0V1.5M12.611 6.75a.75.75 0 0 0 0 1.5h.889a.75.75 0 0 0 0-1.5zM6.972 11.722a.75.75 0 0 1 .75-.75H13.5a.75.75 0 1 1 0 1.5H7.722a.75.75 0 0 1-.75-.75M1.5 10.972a.75.75 0 0 0 0 1.5h2.806V13.5a.75.75 0 0 0 1.5 0V9.944a.75.75 0 1 0-1.5 0v1.028z"
        }
      ), /* @__PURE__ */ React.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#3B82F6" }), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AdjustmentsDone.displayName = "AdjustmentsDone";

export { AdjustmentsDone as default };
//# sourceMappingURL=adjustments-done.js.map
