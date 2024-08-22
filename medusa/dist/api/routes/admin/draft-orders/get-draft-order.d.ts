/**
 * @oas [get] /admin/draft-orders/{id}
 * operationId: "GetDraftOrdersDraftOrder"
 * summary: "Get a Draft Order"
 * description: "Retrieve a Draft Order's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.retrieve(draftOrderId)
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDraftOrder } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const {
 *           draft_order,
 *           isLoading,
 *         } = useAdminDraftOrder(draftOrderId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {draft_order && <span>{draft_order.display_id}</span>}
 *
 *           </div>
 *         )
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/draft-orders/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
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
