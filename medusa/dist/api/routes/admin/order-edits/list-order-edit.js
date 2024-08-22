"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderEditsParams = void 0;
var common_1 = require("../../../../types/common");
var class_validator_1 = require("class-validator");
/**
 * @oas [get] /admin/order-edits
 * operationId: "GetOrderEdits"
 * summary: "List Order Edits"
 * description: "Retrieve a list of order edits. The order edits can be filtered by fields such as `q` or `order_id`. The order edits can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search order edits' internal note.
 *   - (query) order_id {string} Filter by order ID
 *   - (query) limit=20 {number} Limit the number of order edits returned.
 *   - (query) offset=0 {number} The number of order edits to skip when retrieving the order edits.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned order edit.
 *   - (query) fields {string} Comma-separated fields that should be included in each returned order edit.
 * x-codegen:
 *   method: list
 *   queryParams: GetOrderEditsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.list()
 *       .then(({ order_edits, count, limit, offset }) => {
 *         console.log(order_edits.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminOrderEdits } from "medusa-react"
 *
 *       const OrderEdits = () => {
 *         const { order_edits, isLoading } = useAdminOrderEdits()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {order_edits && !order_edits.length && (
 *               <span>No Order Edits</span>
 *             )}
 *             {order_edits && order_edits.length > 0 && (
 *               <ul>
 *                 {order_edits.map((orderEdit) => (
 *                   <li key={orderEdit.id}>
 *                     {orderEdit.status}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default OrderEdits
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/order-edits' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrderEditsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderEditService, filterableFields, listConfig, skip, take, _a, orderEdits, orderEditCount, orderEdits_1, orderEdits_1_1, orderEdit, e_1_1;
    var e_1, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                orderEditService = req.scope.resolve("orderEditService");
                filterableFields = req.filterableFields, listConfig = req.listConfig;
                skip = listConfig.skip, take = listConfig.take;
                return [4 /*yield*/, orderEditService.listAndCount(filterableFields, listConfig)];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 2]), orderEdits = _a[0], orderEditCount = _a[1];
                _c.label = 2;
            case 2:
                _c.trys.push([2, 7, 8, 9]);
                orderEdits_1 = __values(orderEdits), orderEdits_1_1 = orderEdits_1.next();
                _c.label = 3;
            case 3:
                if (!!orderEdits_1_1.done) return [3 /*break*/, 6];
                orderEdit = orderEdits_1_1.value;
                return [4 /*yield*/, orderEditService.decorateTotals(orderEdit)];
            case 4:
                orderEdit = _c.sent();
                _c.label = 5;
            case 5:
                orderEdits_1_1 = orderEdits_1.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (orderEdits_1_1 && !orderEdits_1_1.done && (_b = orderEdits_1.return)) _b.call(orderEdits_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/, res.json({
                    order_edits: orderEdits,
                    count: orderEditCount,
                    limit: take,
                    offset: skip,
                })];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved order edits.
 */
var GetOrderEditsParams = /** @class */ (function (_super) {
    __extends(GetOrderEditsParams, _super);
    function GetOrderEditsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], GetOrderEditsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], GetOrderEditsParams.prototype, "order_id", void 0);
    return GetOrderEditsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 20,
    offset: 0,
})));
exports.GetOrderEditsParams = GetOrderEditsParams;
//# sourceMappingURL=list-order-edit.js.map