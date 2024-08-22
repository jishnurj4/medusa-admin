import { Request, Response } from "express";
/**
 * @oas [delete] /admin/order-edits/{id}/items/{item_id}
 * operationId: "DeleteOrderEditsOrderEditLineItemsLineItem"
 * summary: "Delete Line Item"
 * description: "Create a line item change in the order edit that indicates deleting an item in the original order. The item in the original order will not be deleted until the order edit is
 *  confirmed."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 *   - (path) item_id=* {string} The ID of line item in the original order.
 * x-codegen:
 *   method: removeLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.removeLineItem(orderEditId, lineItemId)
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminOrderEditDeleteLineItem } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *         itemId: string
 *       }
 *
 *       const OrderEditLineItem = ({
 *         orderEditId,
 *         itemId
 *       }: Props) => {
 *         const removeLineItem = useAdminOrderEditDeleteLineItem(
 *           orderEditId,
 *           itemId
 *         )
 *
 *         const handleRemoveLineItem = () => {
 *           removeLineItem.mutate(void 0, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.changes)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEditLineItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/order-edits/{id}/items/{item_id}' \
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
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
