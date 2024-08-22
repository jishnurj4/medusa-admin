import { Request, Response } from "express";
/**
 * @oas [post] /store/order-edits/{id}/decline
 * operationId: "PostOrderEditsOrderEditDecline"
 * summary: "Decline an Order Edit"
 * description: "Decline an Order Edit. The changes are not reflected on the original order."
 * parameters:
 *   - (path) id=* {string} The ID of the OrderEdit.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostOrderEditsOrderEditDecline"
 * x-codegen:
 *   method: decline
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orderEdits.decline(orderEditId)
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useDeclineOrderEdit } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const declineOrderEdit = useDeclineOrderEdit(orderEditId)
 *         // ...
 *
 *         const handleDeclineOrderEdit = (
 *           declinedReason: string
 *         ) => {
 *           declineOrderEdit.mutate({
 *             declined_reason: declinedReason,
 *           }, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.declined_at)
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
 *       curl -X POST '{backend_url}/store/order-edits/{id}/decline'
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrderEditsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * @schema StorePostOrderEditsOrderEditDecline
 * type: object
 * description: "The details of the order edit's decline."
 * properties:
 *   declined_reason:
 *     type: string
 *     description: The reason for declining the Order Edit.
 */
export declare class StorePostOrderEditsOrderEditDecline {
    declined_reason?: string;
}
