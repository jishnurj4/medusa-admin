import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { DiscountRule } from "./discount-rule";
import { Region } from "./region";
export declare class Discount extends SoftDeletableEntity {
    code: string;
    is_dynamic: boolean;
    rule_id: string;
    rule: DiscountRule;
    is_disabled: boolean;
    parent_discount_id: string;
    parent_discount: Discount;
    starts_at: Date;
    ends_at: Date | null;
    valid_duration: string | null;
    regions: Region[];
    usage_limit: number | null;
    usage_count: number;
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private upperCaseCodeAndTrim;
}
/**
 * @schema Discount
 * title: "Discount"
 * description: "A discount can be applied to a cart for promotional purposes."
 * type: object
 * required:
 *   - code
 *   - created_at
 *   - deleted_at
 *   - ends_at
 *   - id
 *   - is_disabled
 *   - is_dynamic
 *   - metadata
 *   - parent_discount_id
 *   - rule_id
 *   - starts_at
 *   - updated_at
 *   - usage_count
 *   - usage_limit
 *   - valid_duration
 * properties:
 *   id:
 *     description: The discount's ID
 *     type: string
 *     example: disc_01F0YESMW10MGHWJKZSDDMN0VN
 *   code:
 *     description: A unique code for the discount - this will be used by the customer to apply the discount
 *     type: string
 *     example: 10DISC
 *   is_dynamic:
 *     description: A flag to indicate if multiple instances of the discount can be generated. I.e. for newsletter discounts
 *     type: boolean
 *     example: false
 *   rule_id:
 *     description: The ID of the discount rule that defines how the discount will be applied to a cart.
 *     nullable: true
 *     type: string
 *     example: dru_01F0YESMVK96HVX7N419E3CJ7C
 *   rule:
 *     description: The details of the discount rule that defines how the discount will be applied to a cart..
 *     x-expandable: "rule"
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountRule"
 *   is_disabled:
 *     description: Whether the Discount has been disabled. Disabled discounts cannot be applied to carts
 *     type: boolean
 *     example: false
 *   parent_discount_id:
 *     description: The Discount that the discount was created from. This will always be a dynamic discount
 *     nullable: true
 *     type: string
 *     example: disc_01G8ZH853YPY9B94857DY91YGW
 *   parent_discount:
 *     description: The details of the parent discount that this discount was created from.
 *     x-expandable: "parent_discount"
 *     nullable: true
 *     $ref: "#/components/schemas/Discount"
 *   starts_at:
 *     description: The time at which the discount can be used.
 *     type: string
 *     format: date-time
 *   ends_at:
 *     description: The time at which the discount can no longer be used.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   valid_duration:
 *     description: Duration the discount runs between
 *     nullable: true
 *     type: string
 *     example: P3Y6M4DT12H30M5S
 *   regions:
 *     description: The details of the regions in which the Discount can be used.
 *     type: array
 *     x-expandable: "regions"
 *     items:
 *       $ref: "#/components/schemas/Region"
 *   usage_limit:
 *     description: The maximum number of times that a discount can be used.
 *     nullable: true
 *     type: integer
 *     example: 100
 *   usage_count:
 *     description: The number of times a discount has been used.
 *     type: integer
 *     example: 50
 *     default: 0
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
