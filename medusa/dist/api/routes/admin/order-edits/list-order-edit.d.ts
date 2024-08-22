import { Request, Response } from "express";
/**
 * @oas [get] /admin/order-edits
 * operationId: "GetOrderEdits"
 * summary: "List Order Edits"
 * description: "Retrieve a list of order edits. The order edits can be filtered by fields such as `q` or `order_id`. The order edits can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search order edits' internal note.
 *   - (query) order_id {string} Filter by order ID
 *   - (query) limit=20 {number} Limit the number of order edits returned.
 *   - (query) offset=0 {number} The number of order edits to skip when retrieving the order edits.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned order edit.
 *   - (query) fields {string} Comma-separated fields that should be included in each returned order edit.
 * x-codegen:
 *   method: list
 *   queryParams: GetOrderEditsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.list()
 *       .then(({ order_edits, count, limit, offset }) => {
 *         console.log(order_edits.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminOrderEdits } from "medusa-react"
 *
 *       const OrderEdits = () => {
 *         const { order_edits, isLoading } = useAdminOrderEdits()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {order_edits && !order_edits.length && (
 *               <span>No Order Edits</span>
 *             )}
 *             {order_edits && order_edits.length > 0 && (
 *               <ul>
 *                 {order_edits.map((orderEdit) => (
 *                   <li key={orderEdit.id}>
 *                     {orderEdit.status}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default OrderEdits
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/order-edits' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrderEditsListRes"
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
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
declare const GetOrderEditsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved order edits.
 */
export declare class GetOrderEditsParams extends GetOrderEditsParams_base {
    /**
     * Search term to search order edits by their internal note.
     */
    q?: string;
    /**
     * Filter the order edits by their associated order's ID.
     */
    order_id?: string;
}
