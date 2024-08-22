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
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
var helpers_1 = require("../helpers");
var utils_1 = require("@medusajs/utils");
var core_flows_1 = require("@medusajs/core-flows");
var GET = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.auth.actor_id;
                return [4 /*yield*/, (0, helpers_1.refetchCustomer)(id, req.scope, req.remoteQueryConfig.fields)];
            case 1:
                customer = _a.sent();
                if (!customer) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Customer with id: ".concat(id, " was not found"));
                }
                res.json({ customer: customer });
                return [2 /*return*/];
        }
    });
}); };
exports.GET = GET;
var POST = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customerId, errors, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                customerId = req.auth.actor_id;
                return [4 /*yield*/, (0, core_flows_1.updateCustomersWorkflow)(req.scope).run({
                        input: {
                            selector: { id: customerId },
                            update: req.validatedBody,
                        },
                        throwOnError: false,
                    })];
            case 1:
                errors = (_a.sent()).errors;
                if (Array.isArray(errors) && errors[0]) {
                    throw errors[0].error;
                }
                return [4 /*yield*/, (0, helpers_1.refetchCustomer)(req.params.id, req.scope, req.remoteQueryConfig.fields)];
            case 2:
                customer = _a.sent();
                res.status(200).json({ customer: customer });
                return [2 /*return*/];
        }
    });
}); };
exports.POST = POST;
//# sourceMappingURL=route.js.map