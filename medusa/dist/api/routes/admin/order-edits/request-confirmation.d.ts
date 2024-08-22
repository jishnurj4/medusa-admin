/**
 * @oas [post] /admin/order-edits/{id}/request
 * operationId: "PostOrderEditsOrderEditRequest"
 * summary: "Request Confirmation"
 * description: "Request customer confirmation of an Order Edit. This would emit the event `order-edit.requested` which Notification Providers listen to and send
 *  a notification to the customer about the order edit."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * x-codegen:
 *   method: requestConfirmation
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.requestConfirmation(orderEditId)
 *       .then({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminRequestOrderEditConfirmation,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const requestOrderConfirmation =
 *           useAdminRequestOrderEditConfirmation(
 *             orderEditId
 *           )
 *
 *         const handleRequestConfirmation = () => {
 *           requestOrderConfirmation.mutate(void 0, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(
 *                 order_edit.requested_at,
 *                 order_edit.requested_by
 *               )
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEdit
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/order-edits/{id}/request' \
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
 *           $ref: "#/components/schemas/AdminOrderEditsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
export declare class AdminPostOrderEditsRequestConfirmationReq {
    payment_collection_description?: string | undefined;
}
