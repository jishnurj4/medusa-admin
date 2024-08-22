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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountConditionProductCollection = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var discount_condition_1 = require("./discount-condition");
var product_collection_1 = require("./product-collection");
var DiscountConditionProductCollection = /** @class */ (function () {
    function DiscountConditionProductCollection() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductCollection.prototype, "product_collection_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductCollection.prototype, "condition_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_collection_1.ProductCollection; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "product_collection_id" }),
        __metadata("design:type", product_collection_1.ProductCollection)
    ], DiscountConditionProductCollection.prototype, "product_collection", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_condition_1.DiscountCondition; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "condition_id" }),
        __metadata("design:type", discount_condition_1.DiscountCondition)
    ], DiscountConditionProductCollection.prototype, "discount_condition", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductCollection.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductCollection.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DiscountConditionProductCollection.prototype, "metadata", void 0);
    DiscountConditionProductCollection = __decorate([
        (0, typeorm_1.Entity)()
    ], DiscountConditionProductCollection);
    return DiscountConditionProductCollection;
}());
exports.DiscountConditionProductCollection = DiscountConditionProductCollection;
/**
 * @schema DiscountConditionProductCollection
 * title: "Product Collection Discount Condition"
 * description: "This represents the association between a discount condition and a product collection"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - metadata
 *   - product_collection_id
 *   - updated_at
 * properties:
 *   product_collection_id:
 *     description: The ID of the Product Collection
 *     type: string
 *     example: pcol_01F0YESBFAZ0DV6V831JXWH0BG
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_collection:
 *     description: The details of the product collection.
 *     x-expandable: "product_collection"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCollection"
 *   discount_condition:
 *     description: The details of the discount condition.
 *     x-expandable: "discount_condition"
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountCondition"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=discount-condition-product-collection.js.map