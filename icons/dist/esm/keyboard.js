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
const Keyboard = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M4.746 10.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M6.052 7.861h.444c.246 0 .445.2.445.445v.444a.444.444 0 0 1-.445.445h-.444a.444.444 0 0 1-.445-.445v-.444c0-.246.2-.445.445-.445M4.052 7.861h-.445a.444.444 0 0 0-.444.445v.444c0 .246.199.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M8.496 7.861h.445c.245 0 .444.2.444.445v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.445.444-.445M11.385 7.861h-.444a.444.444 0 0 0-.445.445v.444c0 .246.2.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M4.83 6.084h.444c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444M7.718 6.084h-.444a.444.444 0 0 0-.445.444v.444c0 .246.2.445.445.445h.444a.444.444 0 0 0 .445-.445v-.444a.444.444 0 0 0-.445-.444M9.718 6.084h.445c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444" }), /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.817.964a.75.75 0 0 0-1.438-.428.805.805 0 0 1-.772.575H9.052c-1.245 0-2.26.988-2.304 2.223H2.829A2.53 2.53 0 0 0 .302 5.86v5.778a2.53 2.53 0 0 0 2.527 2.528h9.334a2.53 2.53 0 0 0 2.528-2.528V5.861a2.53 2.53 0 0 0-2.528-2.527H8.25a.806.806 0 0 1 .802-.723h1.555a2.305 2.305 0 0 0 2.21-1.647M7.49 4.834h4.672c.568 0 1.028.46 1.028 1.027v5.778c0 .568-.46 1.028-1.027 1.028H2.829c-.567 0-1.027-.46-1.027-1.028V5.861c0-.567.46-1.027 1.027-1.027z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Keyboard.displayName = "Keyboard";

export { Keyboard as default };
//# sourceMappingURL=keyboard.js.map
