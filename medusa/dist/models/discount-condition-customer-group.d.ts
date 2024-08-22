import { CustomerGroup } from "./customer-group";
import { DiscountCondition } from "./discount-condition";
export declare class DiscountConditionCustomerGroup {
    customer_group_id: string;
    condition_id: string;
    customer_group?: CustomerGroup;
    discount_condition?: DiscountCondition;
    created_at: Date;
    updated_at: Date;
    metadata: Record<string, unknown>;
}
/**
 * @schema DiscountConditionCustomerGroup
 * title: "Product Tag Discount Condition"
 * description: "Associates a discount condition with a customer group"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - customer_group_id
 *   - metadata
 *   - updated_at
 * properties:
 *   customer_group_id:
 *     description: The ID of the Product Tag
 *     type: string
 *     example: cgrp_01G8ZH853Y6TFXWPG5EYE81X63
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   customer_group:
 *     description: Available if the relation `customer_group` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/CustomerGroup"
 *   discount_condition:
 *     description: Available if the relation `discount_condition` is expanded.
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
