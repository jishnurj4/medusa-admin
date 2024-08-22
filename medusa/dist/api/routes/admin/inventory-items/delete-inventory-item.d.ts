import { Request, Response } from "express";
/**
 * @oas [delete] /admin/inventory-items/{id}
 * operationId: "DeleteInventoryItemsInventoryItem"
 * summary: "Delete an Inventory Item"
 * description: "Delete an Inventory Item. This does not delete the associated product variant."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item to delete.
 * x-codegen:
 *   method: delete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.delete(inventoryItemId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteInventoryItem } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const deleteInventoryItem = useAdminDeleteInventoryItem(
 *           inventoryItemId
 *         )
 *         // ...
 *
 *         const handleDelete = () => {
 *           deleteInventoryItem.mutate()
 *         }
 *
 *         // ...
 *       }
 *
 *       export default InventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/inventory-items/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsDeleteRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
