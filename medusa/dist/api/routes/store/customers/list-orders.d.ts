import { Request, Response } from "express";
import { FulfillmentStatus, OrderStatus, PaymentStatus } from "../../../../models/order";
import { DateComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /store/customers/me/orders
 * operationId: GetCustomersCustomerOrders
 * summary: List Orders
 * description: "Retrieve a list of the logged-in Customer's Orders. The orders can be filtered by fields such as `status` or `fulfillment_status`. The orders can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search orders' display ID, email, shipping address's first name, customer's first name, customer's last name, and customer's phone number.
 *   - (query) id {string} Filter by ID.
 *   - in: query
 *     name: status
 *     style: form
 *     explode: false
 *     description: Filter by status.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [pending, completed, archived, canceled, requires_action]
 *   - in: query
 *     name: fulfillment_status
 *     style: form
 *     explode: false
 *     description: Fulfillment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [not_fulfilled, partially_fulfilled, fulfilled, partially_shipped, shipped, partially_returned, returned, canceled, requires_action]
 *   - in: query
 *     name: payment_status
 *     style: form
 *     explode: false
 *     description: Payment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *           enum: [not_paid, awaiting, captured, partially_refunded, refunded, canceled, requires_action]
 *   - (query) display_id {string} Filter by display ID.
 *   - (query) cart_id {string} Filter by cart ID.
 *   - (query) email {string} Filter by email.
 *   - (query) region_id {string} Filter by region ID.
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: Filter by the 3 character ISO currency code of the order.
 *     schema:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 *   - (query) tax_rate {string} Filter by tax rate.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: canceled_at
 *     description: Filter by a cancelation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) limit=10 {integer} Limit the number of orders returned.
 *   - (query) offset=0 {integer} The number of orders to skip when retrieving the orders.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned orders.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned orders.
 * x-codegen:
 *   method: listOrders
 *   queryParams: StoreGetCustomersCustomerOrdersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.listOrders()
 *       .then(({ orders, limit, offset, count }) => {
 *         console.log(orders);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCustomerOrders } from "medusa-react"
 *
 *       const Orders = () => {
 *         // refetch a function that can be used to
 *         // re-retrieve orders after the customer logs in
 *         const { orders, isLoading } = useCustomerOrders()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading orders...</span>}
 *             {orders?.length && (
 *               <ul>
 *                 {orders.map((order) => (
 *                   <li key={order.id}>{order.display_id}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Orders
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/customers/me/orders' \
 *       -H 'Authorization: Bearer {access_token}'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersListOrdersRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * {@inheritDoc FindPaginationParams}
 */
export declare class StoreGetCustomersCustomerOrdersPaginationParams {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 10
     */
    limit: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset: number;
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string;
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string;
}
/**
 * Parameters used to filter and configure the pagination of the retrieved orders.
 */
export declare class StoreGetCustomersCustomerOrdersParams extends StoreGetCustomersCustomerOrdersPaginationParams {
    /**
     * ID to filter orders by.
     */
    id?: string;
    /**
     * Search term to search orders' display ID, email, shipping address's first name, customer's first name, customer's last name, and customer's phone number.
     */
    q?: string;
    /**
     * Statuses to filter orders by.
     */
    status?: OrderStatus[];
    /**
     * Fulfillment statuses to filter orders by.
     */
    fulfillment_status?: FulfillmentStatus[];
    /**
     * Payment statuses to filter orders by.
     */
    payment_status?: PaymentStatus[];
    /**
     * Display ID to filter orders by.
     */
    display_id?: string;
    /**
     * Cart ID to filter orders by.
     */
    cart_id?: string;
    /**
     * Email to filter orders by.
     */
    email?: string;
    /**
     * Region ID to filter orders by.
     */
    region_id?: string;
    /**
     * Currency code to filter orders by.
     */
    currency_code?: string;
    /**
     * Tax rate to filter orders by.
     */
    tax_rate?: string;
    /**
     * Date filters to apply on the orders' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the orders' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the orders' `canceled_at` date.
     */
    canceled_at?: DateComparisonOperator;
}
