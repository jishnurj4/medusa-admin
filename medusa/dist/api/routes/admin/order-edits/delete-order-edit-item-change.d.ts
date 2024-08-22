/**
 * @oas [delete] /admin/order-edits/{id}/changes/{change_id}
 * operationId: "DeleteOrderEditsOrderEditItemChange"
 * summary: "Delete a Line Item Change"
 * description: "Delete a line item change that indicates the addition, deletion, or update of a line item in the original order."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 *   - (path) change_id=* {string} The ID of the Line Item Change to delete.
 * x-codegen:
 *   method: deleteItemChange
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.deleteItemChange(orderEdit_id, itemChangeId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteOrderEditItemChange } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *         itemChangeId: string
 *       }
 *
 *       const OrderEditItemChange = ({
 *         orderEditId,
 *         itemChangeId
 *       }: Props) => {
 *         const deleteItemChange = useAdminDeleteOrderEditItemChange(
 *           orderEditId,
 *           itemChangeId
 *         )
 *
 *         const handleDeleteItemChange = () => {
 *           deleteItemChange.mutate(void 0, {
 *             onSuccess: ({ id, object, deleted }) => {
 *               console.log(id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEditItemChange
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/order-edits/{id}/changes/{change_id}' \
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
 *           $ref: "#/components/schemas/AdminOrderEditItemChangeDeleteRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
