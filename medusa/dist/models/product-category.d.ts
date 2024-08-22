import { Relation } from "typeorm";
import { Product } from ".";
import { BaseEntity } from "../interfaces/models/base-entity";
export declare class ProductCategory extends BaseEntity {
    /**
     * @apiIgnore
     */
    static productCategoryProductJoinTable: string;
    /**
     * @apiIgnore
     */
    static treeRelations: string[];
    name: string;
    description: string;
    handle: string;
    is_active: Boolean;
    is_internal: Boolean;
    parent_category: Relation<ProductCategory> | null;
    parent_category_id: string | null;
    category_children: Relation<ProductCategory>[];
    rank: number;
    metadata: Record<string, unknown>;
    products: Relation<Product>[];
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema ProductCategory
 * title: "Product Category"
 * description: "A product category can be used to categorize products into a hierarchy of categories."
 * x-resourceId: ProductCategory
 * x-featureFlag: "product_categories"
 * type: object
 * required:
 *   - category_children
 *   - created_at
 *   - handle
 *   - id
 *   - is_active
 *   - is_internal
 *   - metadata
 *   - mpath
 *   - name
 *   - parent_category_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The product category's ID
 *     type: string
 *     example: pcat_01G2SG30J8C85S4A5CHM2S1NS2
 *   name:
 *     description: The product category's name
 *     type: string
 *     example: Regular Fit
 *   description:
 *     description: The product category's description.
 *     type: string
 *     default: ""
 *   handle:
 *     description: A unique string that identifies the Product Category - can for example be used in slug structures.
 *     type: string
 *     example: regular-fit
 *   mpath:
 *     description: A string for Materialized Paths - used for finding ancestors and descendents
 *     nullable: true
 *     type: string
 *     example: pcat_id1.pcat_id2.pcat_id3
 *   is_internal:
 *     type: boolean
 *     description: A flag to make product category an internal category for admins
 *     default: false
 *   is_active:
 *     type: boolean
 *     description: A flag to make product category visible/hidden in the store front
 *     default: false
 *   rank:
 *     type: integer
 *     description: An integer that depicts the rank of category in a tree node
 *     default: 0
 *   category_children:
 *     description: The details of the category's children.
 *     type: array
 *     x-expandable: "category_children"
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
 *   parent_category_id:
 *     description: The ID of the parent category.
 *     nullable: true
 *     type: string
 *     default: null
 *   parent_category:
 *     description: The details of the parent of this category.
 *     x-expandable: "parent_category"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCategory"
 *   products:
 *     description: The details of the products that belong to this category.
 *     type: array
 *     x-expandable: "products"
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
