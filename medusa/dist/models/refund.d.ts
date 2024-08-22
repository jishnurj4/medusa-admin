import { Relation } from "typeorm";
import { BaseEntity } from "../interfaces/models/base-entity";
import { Order } from "./order";
import { Payment } from "./payment";
/**
 * @enum
 *
 * The reason of the refund.
 */
export declare enum RefundReason {
    /**
     * The refund is applied as a discount.
     */
    DISCOUNT = "discount",
    /**
     * The refund is applied because of a created return.
     */
    RETURN = "return",
    /**
     * The refund is applied because of a created swap.
     */
    SWAP = "swap",
    /**
     * The refund is applied because of a created claim.
     */
    CLAIM = "claim",
    /**
     * The refund is created for a custom reason.
     */
    OTHER = "other"
}
export declare class Refund extends BaseEntity {
    order_id: string;
    payment_id: string;
    order: Relation<Order>;
    payment: Relation<Payment>;
    amount: number;
    note: string;
    reason: string;
    metadata: Record<string, unknown>;
    idempotency_key: string;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema Refund
 * title: "Refund"
 * description: "A refund represents an amount of money transfered back to the customer for a given reason. Refunds may occur in relation to Returns, Swaps and Claims, but can also be initiated by an admin for an order."
 * type: object
 * required:
 *   - amount
 *   - created_at
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - note
 *   - order_id
 *   - payment_id
 *   - reason
 *   - updated_at
 * properties:
 *   id:
 *     description: The refund's ID
 *     type: string
 *     example: ref_01G1G5V27GYX4QXNARRQCW1N8T
 *   order_id:
 *     description: The ID of the order this refund was created for.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order this refund was created for.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   payment_id:
 *     description: The payment's ID, if available.
 *     nullable: true
 *     type: string
 *     example: pay_01G8ZCC5W42ZNY842124G7P5R9
 *   payment:
 *     description: The details of the payment associated with the refund.
 *     x-expandable: "payment"
 *     nullable: true
 *     $ref: "#/components/schemas/Payment"
 *   amount:
 *     description: The amount that has be refunded to the Customer.
 *     type: integer
 *     example: 1000
 *   note:
 *     description: An optional note explaining why the amount was refunded.
 *     nullable: true
 *     type: string
 *     example: I didn't like it
 *   reason:
 *     description: The reason given for the Refund, will automatically be set when processed as part of a Swap, Claim or Return.
 *     type: string
 *     enum:
 *       - discount
 *       - return
 *       - swap
 *       - claim
 *       - other
 *     example: return
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the refund in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
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
