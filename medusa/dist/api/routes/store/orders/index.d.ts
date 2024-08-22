import "reflect-metadata";
import { Order } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreOrdersRelations: string[];
export declare const allowedStoreOrdersRelations: string[];
export declare const defaultStoreOrdersFields: (keyof Order)[];
export declare const allowedStoreOrdersFields: string[];
/**
 * @schema StoreOrdersRes
 * type: object
 * description: "The order's details."
 * required:
 *   - order
 * x-expanded-relations:
 *   field: order
 *   relations:
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.tracking_links
 *     - items
 *     - items.variant
 *     - payments
 *     - region
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - fulfillments.items
 *     - region.fulfillment_providers
 *     - region.payment_providers
 *     - shipping_methods.shipping_option
 *   implicit:
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.adjustments
 *     - claims.additional_items.refundable
 *     - claims.additional_items.tax_lines
 *     - discounts
 *     - discounts.rule
 *     - gift_card_transactions
 *     - gift_card_transactions.gift_card
 *     - gift_cards
 *     - items
 *     - items.adjustments
 *     - items.refundable
 *     - items.tax_lines
 *     - items.variant
 *     - items.variant.product
 *     - items.variant.product.profiles
 *     - refunds
 *     - region
 *     - shipping_methods
 *     - shipping_methods.tax_lines
 *     - swaps
 *     - swaps.additional_items
 *     - swaps.additional_items.adjustments
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.tax_lines
 *   totals:
 *     - discount_total
 *     - gift_card_tax_total
 *     - gift_card_total
 *     - paid_total
 *     - refundable_amount
 *     - refunded_total
 *     - shipping_total
 *     - subtotal
 *     - tax_total
 *     - total
 *     - claims.additional_items.discount_total
 *     - claims.additional_items.gift_card_total
 *     - claims.additional_items.original_tax_total
 *     - claims.additional_items.original_total
 *     - claims.additional_items.refundable
 *     - claims.additional_items.subtotal
 *     - claims.additional_items.tax_total
 *     - claims.additional_items.total
 *     - items.discount_total
 *     - items.gift_card_total
 *     - items.original_tax_total
 *     - items.original_total
 *     - items.refundable
 *     - items.subtotal
 *     - items.tax_total
 *     - items.total
 *     - swaps.additional_items.discount_total
 *     - swaps.additional_items.gift_card_total
 *     - swaps.additional_items.original_tax_total
 *     - swaps.additional_items.original_total
 *     - swaps.additional_items.refundable
 *     - swaps.additional_items.subtotal
 *     - swaps.additional_items.tax_total
 *     - swaps.additional_items.total
 * properties:
 *   order:
 *     description: "Order details."
 *     $ref: "#/components/schemas/Order"
 */
export type StoreOrdersRes = {
    order: Order;
};
export * from "./confirm-order-request";
export * from "./lookup-order";
export * from "./request-order";
