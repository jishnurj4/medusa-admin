import "reflect-metadata";
import { Order, Return } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultRelations: string[];
export declare const defaultRelationsList: string[];
export declare const defaultReturnCancelRelations: string[];
export declare const defaultReturnCancelFields: (keyof Order)[];
/**
 * @schema AdminReturnsCancelRes
 * type: object
 * description: "The associated order's details."
 * x-expanded-relations:
 *   field: order
 *   relations:
 *     - billing_address
 *     - claims
 *     - claims.additional_items
 *     - claims.additional_items.variant
 *     - claims.claim_items
 *     - claims.claim_items.images
 *     - claims.claim_items.item
 *     - claims.fulfillments
 *     - claims.fulfillments.tracking_links
 *     - claims.return_order
 *     - claims.return_order.shipping_method
 *     - claims.return_order.shipping_method.tax_lines
 *     - claims.shipping_address
 *     - claims.shipping_methods
 *     - customer
 *     - discounts
 *     - discounts.rule
 *     - fulfillments
 *     - fulfillments.items
 *     - fulfillments.tracking_links
 *     - gift_card_transactions
 *     - gift_cards
 *     - items
 *     - payments
 *     - refunds
 *     - region
 *     - returns
 *     - returns.items
 *     - returns.items.reason
 *     - returns.shipping_method
 *     - returns.shipping_method.tax_lines
 *     - shipping_address
 *     - shipping_methods
 *     - swaps
 *     - swaps.additional_items
 *     - swaps.additional_items.variant
 *     - swaps.fulfillments
 *     - swaps.fulfillments.tracking_links
 *     - swaps.payment
 *     - swaps.return_order
 *     - swaps.return_order.shipping_method
 *     - swaps.return_order.shipping_method.tax_lines
 *     - swaps.shipping_address
 *     - swaps.shipping_methods
 *     - swaps.shipping_methods.tax_lines
 * required:
 *   - order
 * properties:
 *   order:
 *     description: Order details.
 *     $ref: "#/components/schemas/Order"
 */
export type AdminReturnsCancelRes = {
    order: Order;
};
/**
 * @schema AdminReturnsListRes
 * type: object
 * description: "The list of returns with pagination fields."
 * x-expanded-relation:
 *   field: returns
 *   relations:
 *     - order
 *     - swap
 * required:
 *   - returns
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   returns:
 *     type: array
 *     description: An array of returns details.
 *     items:
 *       $ref: "#/components/schemas/Return"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of returns skipped when retrieving the returns.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminReturnsListRes = PaginatedResponse & {
    returns: Return[];
};
/**
 * @schema AdminReturnsRes
 * type: object
 * description: "The return's details."
 * x-expanded-relation:
 *   field: return
 *   relations:
 *     - swap
 * required:
 *   - return
 * properties:
 *   return:
 *     description: Return details.
 *     $ref: "#/components/schemas/Return"
 */
export type AdminReturnsRes = {
    return: Return;
};
export * from "./list-returns";
export * from "./receive-return";
