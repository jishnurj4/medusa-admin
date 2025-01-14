"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
var utils_1 = require("@medusajs/utils");
var queries_1 = require("../../../queries");
var query_config_1 = require("../../../query-config");
var core_flows_1 = require("@medusajs/core-flows");
var POST = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, _b, create, _c, update, _d, deletePriceIds, workflow, _e, result, errors, _f, created, updated;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                id = req.params.id;
                _a = req.validatedBody, _b = _a.create, create = _b === void 0 ? [] : _b, _c = _a.update, update = _c === void 0 ? [] : _c, _d = _a.delete, deletePriceIds = _d === void 0 ? [] : _d;
                workflow = (0, core_flows_1.batchPriceListPricesWorkflow)(req.scope);
                return [4 /*yield*/, workflow.run({
                        input: {
                            data: {
                                id: id,
                                create: create,
                                update: update,
                                delete: deletePriceIds,
                            },
                        },
                        throwOnError: false,
                    })];
            case 1:
                _e = _g.sent(), result = _e.result, errors = _e.errors;
                if (Array.isArray(errors) && errors[0]) {
                    throw errors[0].error;
                }
                return [4 /*yield*/, (0, utils_1.promiseAll)([
                        (0, queries_1.listPrices)(result.created.map(function (c) { return c.id; }), req.scope, query_config_1.adminPriceListPriceRemoteQueryFields),
                        (0, queries_1.listPrices)(result.updated.map(function (c) { return c.id; }), req.scope, query_config_1.adminPriceListPriceRemoteQueryFields),
                    ])];
            case 2:
                _f = __read.apply(void 0, [_g.sent(), 2]), created = _f[0], updated = _f[1];
                res.status(200).json({
                    created: created,
                    updated: updated,
                    deleted: {
                        ids: deletePriceIds,
                        object: "price",
                        deleted: true,
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
exports.POST = POST;
//# sourceMappingURL=route.js.map