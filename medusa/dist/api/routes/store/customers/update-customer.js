"use strict";
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
exports.StorePostCustomersCustomerReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var common_1 = require("../../../../types/common");
var validator_1 = require("../../../../utils/validator");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [post] /store/customers/me
 * operationId: PostCustomersCustomer
 * summary: Update Customer
 * description: "Update the logged-in customer's details."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.update({
 *         first_name: "Laury"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdateMe } from "medusa-react"
 *
 *       type Props = {
 *         customerId: string
 *       }
 *
 *       const Customer = ({ customerId }: Props) => {
 *         const updateCustomer = useUpdateMe()
 *         // ...
 *
 *         const handleUpdate = (
 *           firstName: string
 *         ) => {
 *           // ...
 *           updateCustomer.mutate({
 *             id: customerId,
 *             first_name: firstName,
 *           }, {
 *             onSuccess: ({ customer }) => {
 *               console.log(customer.first_name)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Customer
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/customers/me' \
 *       -H 'Authorization: Bearer {access_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Laury"
 *       }'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersRes"
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
    var id, validated, customerService, manager, customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.user.customer_id;
                return [4 /*yield*/, (0, validator_1.validator)(StorePostCustomersCustomerReq, req.body)];
            case 1:
                validated = _a.sent();
                customerService = req.scope.resolve("customerService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, customerService
                                        .withTransaction(transactionManager)
                                        .update(id, validated)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, customerService.retrieve(id, {
                        relations: _1.defaultStoreCustomersRelations,
                        select: _1.defaultStoreCustomersFields,
                    })];
            case 3:
                customer = _a.sent();
                res.status(200).json({ customer: customer });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema StorePostCustomersCustomerReq
 * type: object
 * description: "The details to update of the customer."
 * properties:
 *   first_name:
 *     description: "The customer's first name."
 *     type: string
 *   last_name:
 *     description: "The customer's last name."
 *     type: string
 *   billing_address:
 *     description: "The address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: The full billing address object
 *       - type: string
 *         description: The ID of an existing billing address
 *   password:
 *     description: "The customer's password."
 *     type: string
 *   phone:
 *     description: "The customer's phone number."
 *     type: string
 *   email:
 *     description: "The customer's email."
 *     type: string
 *   metadata:
 *     description: "Additional custom data about the customer."
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var StorePostCustomersCustomerReq = /** @class */ (function () {
    function StorePostCustomersCustomerReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], StorePostCustomersCustomerReq.prototype, "billing_address", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCustomersCustomerReq.prototype, "first_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCustomersCustomerReq.prototype, "last_name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCustomersCustomerReq.prototype, "password", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCustomersCustomerReq.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], StorePostCustomersCustomerReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsObject)(),
        __metadata("design:type", Object)
    ], StorePostCustomersCustomerReq.prototype, "metadata", void 0);
    return StorePostCustomersCustomerReq;
}());
exports.StorePostCustomersCustomerReq = StorePostCustomersCustomerReq;
//# sourceMappingURL=update-customer.js.map