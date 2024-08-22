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
const Stripe = React.forwardRef(
  (props, ref) => {
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
          fill: "#6772E5",
          fillRule: "evenodd",
          d: "M8.794 6.555c0-.728.606-1.01 1.584-1.01 1.62.036 3.209.447 4.642 1.202V2.353a12.317 12.317 0 0 0-4.642-.852c-3.772 0-6.301 1.975-6.301 5.274 0 5.162 7.088 4.324 7.088 6.549 0 .87-.744 1.14-1.79 1.14-1.544 0-3.537-.639-5.1-1.489v4.45c1.609.701 3.344 1.067 5.1 1.075 3.876 0 6.548-1.915 6.548-5.271 0-5.571-7.129-4.576-7.129-6.673v-.001Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Stripe.displayName = "Stripe";

export { Stripe as default };
//# sourceMappingURL=stripe.js.map
