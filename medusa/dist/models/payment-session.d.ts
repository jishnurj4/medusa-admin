import { Relation } from "typeorm";
import { BaseEntity } from "../interfaces";
import { Cart } from "./cart";
/**
 * @enum
 *
 * The status of a payment session.
 */
export declare enum PaymentSessionStatus {
    /**
     * The payment is authorized.
     */
    AUTHORIZED = "authorized",
    /**
     * The payment is pending.
     */
    PENDING = "pending",
    /**
     * The payment requires an action.
     */
    REQUIRES_MORE = "requires_more",
    /**
     * An error occurred while processing the payment.
     */
    ERROR = "error",
    /**
     * The payment is canceled.
     */
    CANCELED = "canceled"
}
export declare class PaymentSession extends BaseEntity {
    cart_id: string | null;
    cart: Relation<Cart>;
    provider_id: string;
    is_selected: boolean | null;
    is_initiated: boolean;
    status: string;
    data: Record<string, unknown>;
    idempotency_key: string;
    amount: number;
    payment_authorized_at: Date;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema PaymentSession
 * title: "Payment Session"
 * description: "A Payment Session is created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, which is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for payment processing such as capture or refund. Payment sessions can also be used as part of payment collections."
 * type: object
 * required:
 *   - amount
 *   - cart_id
 *   - created_at
 *   - data
 *   - id
 *   - is_initiated
 *   - is_selected
 *   - idempotency_key
 *   - payment_authorized_at
 *   - provider_id
 *   - status
 *   - updated_at
 * properties:
 *   id:
 *     description: The payment session's ID
 *     type: string
 *     example: ps_01G901XNSRM2YS3ASN9H5KG3FZ
 *   cart_id:
 *     description: The ID of the cart that the payment session was created for.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart that the payment session was created for.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   provider_id:
 *     description: The ID of the Payment Provider that is responsible for the Payment Session
 *     type: string
 *     example: manual
 *   is_selected:
 *     description: A flag to indicate if the Payment Session has been selected as the method that will be used to complete the purchase.
 *     nullable: true
 *     type: boolean
 *     example: true
 *   is_initiated:
 *     description: A flag to indicate if a communication with the third party provider has been initiated.
 *     type: boolean
 *     default: false
 *     example: true
 *   status:
 *     description: Indicates the status of the Payment Session. Will default to `pending`, and will eventually become `authorized`. Payment Sessions may have the status of `requires_more` to indicate that further actions are to be completed by the Customer.
 *     type: string
 *     enum:
 *       - authorized
 *       - pending
 *       - requires_more
 *       - error
 *       - canceled
 *     example: pending
 *   data:
 *     description: The data required for the Payment Provider to identify, modify and process the Payment Session. Typically this will be an object that holds an id to the external payment session, but can be an empty object if the Payment Provider doesn't hold any state.
 *     type: object
 *     example: {}
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of a cart in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 *   amount:
 *     description: The amount that the Payment Session has been authorized for.
 *     nullable: true
 *     type: integer
 *     example: 100
 *   payment_authorized_at:
 *     description: The date with timezone at which the Payment Session was authorized.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 */
