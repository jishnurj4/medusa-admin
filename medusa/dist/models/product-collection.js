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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCollection = void 0;
var typeorm_1 = require("typeorm");
var lodash_1 = __importDefault(require("lodash"));
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var product_1 = require("./product");
var ProductCollection = /** @class */ (function (_super) {
    __extends(ProductCollection, _super);
    function ProductCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductCollection.prototype.createHandleIfNotProvided = function () {
        if (this.id)
            return;
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "pcol");
        if (!this.handle) {
            this.handle = lodash_1.default.kebabCase(this.title);
        }
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductCollection.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ProductCollection.prototype, "handle", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_1.Product; }, function (product) { return product.collection; }),
        __metadata("design:type", Array)
    ], ProductCollection.prototype, "products", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductCollection.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductCollection.prototype, "createHandleIfNotProvided", null);
    ProductCollection = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductCollection);
    return ProductCollection;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ProductCollection = ProductCollection;
/**
 * @schema ProductCollection
 * title: "Product Collection"
 * description: "A Product Collection allows grouping together products for promotional purposes. For example, an admin can create a Summer collection, add products to it, and showcase it on the storefront."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - handle
 *   - id
 *   - metadata
 *   - title
 *   - updated_at
 * properties:
 *   id:
 *     description: The product collection's ID
 *     type: string
 *     example: pcol_01F0YESBFAZ0DV6V831JXWH0BG
 *   title:
 *     description: The title that the Product Collection is identified by.
 *     type: string
 *     example: Summer Collection
 *   handle:
 *     description: A unique string that identifies the Product Collection - can for example be used in slug structures.
 *     nullable: true
 *     type: string
 *     example: summer-collection
 *   products:
 *     description: The details of the products that belong to this product collection.
 *     type: array
 *     x-expandable: "products"
 *     x-ignore: true
 *     items:
 *       $ref: "#/components/schemas/Product"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
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
//# sourceMappingURL=product-collection.js.map