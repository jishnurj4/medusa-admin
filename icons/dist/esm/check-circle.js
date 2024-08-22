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
const CheckCircle = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        width: "16",
        height: "15",
        viewBox: "0 0 16 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M8.41666 13.9446C11.9758 13.9446 14.8611 11.0593 14.8611 7.50011C14.8611 3.94094 11.9758 1.05566 8.41666 1.05566C4.85749 1.05566 1.97221 3.94094 1.97221 7.50011C1.97221 11.0593 4.85749 13.9446 8.41666 13.9446Z",
          stroke: color,
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M5.52777 7.72233L7.52777 9.94455L11.3055 5.05566",
          stroke: color,
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      )
    );
  }
);
CheckCircle.displayName = "CheckCircle";

export { CheckCircle as default };
//# sourceMappingURL=check-circle.js.map
