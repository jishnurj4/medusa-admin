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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostDraftOrdersDraftOrderLineItemsItemReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /admin/draft-orders/{id}/line-items/{line_id}
 * operationId: "PostDraftOrdersDraftOrderLineItemsItem"
 * summary: "Update a Line Item"
 * description: "Update a Line Item in a Draft Order."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 *   - (path) line_id=* {string} The ID of the Line Item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderLineItemsItemReq"
 * x-codegen:
 *   method: updateLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.updateLineItem(draftOrderId, lineId, {
 *         quantity: 1
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDraftOrderUpdateLineItem } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const updateLineItem = useAdminDraftOrderUpdateLineItem(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           itemId: string,
 *           quantity: number
 *         ) => {
 *           updateLineItem.mutate({
 *             item_id: itemId,
 *             quantity,
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}/line-items/{line_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
    var _a, id, line_id, validated, draftOrderService, cartService, entityManager;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, line_id = _a.line_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostDraftOrdersDraftOrderLineItemsItemReq, req.body)];
            case 1:
                validated = _b.sent();
                draftOrderService = req.scope.resolve("draftOrderService");
                cartService = req.scope.resolve("cartService");
                entityManager = req.scope.resolve("manager");
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var draftOrder, existing, lineItemUpdate, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, draftOrderService
                                        .withTransaction(manager)
                                        .retrieve(id, {
                                        select: _1.defaultAdminDraftOrdersFields,
                                        relations: ["cart", "cart.items"],
                                    })];
                                case 1:
                                    draftOrder = _b.sent();
                                    if (draftOrder.status === "completed") {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You are only allowed to update open draft orders");
                                    }
                                    if (!(validated.quantity === 0)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, cartService
                                            .withTransaction(manager)
                                            .removeLineItem(draftOrder.cart.id, line_id)];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 5];
                                case 3:
                                    existing = draftOrder.cart.items.find(function (i) { return i.id === line_id; });
                                    if (!existing) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Could not find the line item");
                                    }
                                    lineItemUpdate = __assign(__assign({}, validated), { region_id: draftOrder.cart.region_id });
                                    if (existing.variant_id) {
                                        lineItemUpdate.variant_id = existing.variant_id;
                                    }
                                    return [4 /*yield*/, cartService
                                            .withTransaction(manager)
                                            .updateLineItem(draftOrder.cart_id, line_id, lineItemUpdate)];
                                case 4:
                                    _b.sent();
                                    _b.label = 5;
                                case 5:
                                    _a = draftOrder;
                                    return [4 /*yield*/, cartService
                                            .withTransaction(manager)
                                            .retrieveWithTotals(draftOrder.cart_id, {
                                            relations: _1.defaultAdminDraftOrdersCartRelations,
                                            select: _1.defaultAdminDraftOrdersCartFields,
                                        })];
                                case 6:
                                    _a.cart = _b.sent();
                                    res.status(200).json({
                                        draft_order: (0, clean_response_data_1.cleanResponseData)(draftOrder, []),
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostDraftOrdersDraftOrderLineItemsItemReq
 * type: object
 * description: "The details to update of the line item."
 * properties:
 *   unit_price:
 *     description: The custom price of the line item. If a `variant_id` is supplied, the price provided here will override the variant's price.
 *     type: integer
 *   title:
 *     description: The title of the line item if `variant_id` is not provided.
 *     type: string
 *   quantity:
 *     description: The quantity of the line item.
 *     type: integer
 *   metadata:
 *     description: The optional key-value map with additional details about the Line Item.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostDraftOrdersDraftOrderLineItemsItemReq = /** @class */ (function () {
    function AdminPostDraftOrdersDraftOrderLineItemsItemReq() {
        this.metadata = {};
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersDraftOrderLineItemsItemReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostDraftOrdersDraftOrderLineItemsItemReq.prototype, "unit_price", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostDraftOrdersDraftOrderLineItemsItemReq.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersDraftOrderLineItemsItemReq.prototype, "metadata", void 0);
    return AdminPostDraftOrdersDraftOrderLineItemsItemReq;
}());
exports.AdminPostDraftOrdersDraftOrderLineItemsItemReq = AdminPostDraftOrdersDraftOrderLineItemsItemReq;
//# sourceMappingURL=update-line-item.js.map