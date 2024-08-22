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
exports.StoreGetProductCategoriesParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var common_1 = require("../../../../types/common");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
var _1 = require(".");
/**
 * @oas [get] /store/product-categories
 * operationId: "GetProductCategories"
 * summary: "List Product Categories"
 * description: "Retrieve a list of product categories. The product categories can be filtered by fields such as `handle` or `q`. The product categories can also be paginated.
 *  This API Route can also be used to retrieve a product category by its handle."
 * x-featureFlag: "product_categories"
 * externalDocs:
 *   description: "How to retrieve a product category by its handle"
 *   url: "https://docs.medusajs.com/modules/products/storefront/use-categories#get-a-category-by-its-handle"
 * parameters:
 *   - (query) q {string} term used to search product category's names and handles.
 *   - (query) handle {string} Filter by handle.
 *   - (query) parent_category_id {string} Filter by the ID of a parent category. Only children of the provided parent category are retrieved.
 *   - (query) include_descendants_tree {boolean} Whether all nested categories inside a category should be retrieved.
 *   - (query) offset=0 {integer} The number of product categories to skip when retrieving the product categories.
 *   - (query) limit=100 {integer} Limit the number of product categories returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product categories.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product categories.
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetProductCategoriesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.productCategories.list()
 *       .then(({ product_categories, limit, offset, count }) => {
 *         console.log(product_categories.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProductCategories } from "medusa-react"
 *
 *       function Categories() {
 *         const {
 *           product_categories,
 *           isLoading,
 *         } = useProductCategories()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product_categories && !product_categories.length && (
 *               <span>No Categories</span>
 *             )}
 *             {product_categories && product_categories.length > 0 && (
 *               <ul>
 *                 {product_categories.map(
 *                   (category) => (
 *                     <li key={category.id}>{category.name}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Categories
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Categories
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreGetProductCategoriesRes"
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
    var productCategoryService, selectors, _a, data, count, _b, limit, offset;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                productCategoryService = req.scope.resolve("productCategoryService");
                selectors = Object.assign(__assign({}, _1.defaultStoreCategoryScope), req.filterableFields);
                return [4 /*yield*/, productCategoryService.listAndCount(selectors, req.listConfig, _1.defaultStoreCategoryScope)];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 2]), data = _a[0], count = _a[1];
                _b = req.validatedQuery, limit = _b.limit, offset = _b.offset;
                res.json({
                    count: count,
                    offset: offset,
                    limit: limit,
                    product_categories: data,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved product categories.
 *
 * @property {number} limit - Limit the number of product categories returned in the list. Default is `100`.
 */
var StoreGetProductCategoriesParams = /** @class */ (function (_super) {
    __extends(StoreGetProductCategoriesParams, _super);
    function StoreGetProductCategoriesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductCategoriesParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductCategoriesParams.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value === "null" ? null : value;
        }),
        __metadata("design:type", Object)
    ], StoreGetProductCategoriesParams.prototype, "parent_category_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value);
        }),
        __metadata("design:type", Boolean)
    ], StoreGetProductCategoriesParams.prototype, "include_descendants_tree", void 0);
    return StoreGetProductCategoriesParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.StoreGetProductCategoriesParams = StoreGetProductCategoriesParams;
//# sourceMappingURL=list-product-categories.js.map