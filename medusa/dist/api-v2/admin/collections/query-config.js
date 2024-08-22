"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminCollectionFields = void 0;
exports.defaultAdminCollectionFields = [
    "id",
    "title",
    "handle",
    "created_at",
    "updated_at",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminCollectionFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { defaultLimit: 10, isList: true });
//# sourceMappingURL=query-config.js.map