/**
 * @oas [post] /admin/draft-orders/{id}/line-items
 * operationId: "PostDraftOrdersDraftOrderLineItems"
 * summary: "Create a Line Item"
 * description: "Create a Line Item in the Draft Order."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderLineItemsReq"
 * x-codegen:
 *   method: addLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.addLineItem(draftOrderId, {
 *         quantity: 1
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDraftOrderAddLineItem } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const addLineItem = useAdminDraftOrderAddLineItem(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handleAdd = (quantity: number) => {
 *           addLineItem.mutate({
 *             quantity,
 *           }, {
 *             onSuccess: ({ draft_order }) => {
 *               console.log(draft_order.cart)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}/line-items' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostDraftOrdersDraftOrderLineItemsReq
 * type: object
 * description: "The details of the line item to create."
 * required:
 *   - quantity
 * properties:
 *   variant_id:
 *     description: The ID of the Product Variant associated with the line item. If the line item is custom, the `variant_id` should be omitted.
 *     type: string
 *   unit_price:
 *     description: The custom price of the line item. If a `variant_id` is supplied, the price provided here will override the variant's price.
 *     type: integer
 *   title:
 *     description: The title of the line item if `variant_id` is not provided.
 *     type: string
 *     default: "Custom item"
 *   quantity:
 *     description: The quantity of the line item.
 *     type: integer
 *   metadata:
 *     description: The optional key-value map with additional details about the Line Item.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostDraftOrdersDraftOrderLineItemsReq {
    title?: string;
    unit_price?: number;
    variant_id?: string;
    quantity: number;
    metadata?: Record<string, unknown>;
}
