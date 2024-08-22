/**
 * @oas [post] /admin/return-reasons/{id}
 * operationId: "PostReturnReasonsReason"
 * summary: "Update a Return Reason"
 * description: "Update a Return Reason's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Return Reason.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostReturnReasonsReasonReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returnReasons.update(returnReasonId, {
 *         label: "Damaged"
 *       })
 *       .then(({ return_reason }) => {
 *         console.log(return_reason.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateReturnReason } from "medusa-react"
 *
 *       type Props = {
 *         returnReasonId: string
 *       }
 *
 *       const ReturnReason = ({ returnReasonId }: Props) => {
 *         const updateReturnReason = useAdminUpdateReturnReason(
 *           returnReasonId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           label: string
 *         ) => {
 *           updateReturnReason.mutate({
 *             label,
 *           }, {
 *             onSuccess: ({ return_reason }) => {
 *               console.log(return_reason.label)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ReturnReason
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/return-reasons/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "label": "Damaged"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Return Reasons
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnReasonsRes"
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
 * @schema AdminPostReturnReasonsReasonReq
 * type: object
 * description: "The details to update of the return reason."
 * properties:
 *   label:
 *     description: "The label to display to the Customer."
 *     type: string
 *   value:
 *     description: "A unique value of the return reason."
 *     type: string
 *   description:
 *     description: "The description of the Reason."
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostReturnReasonsReasonReq {
    label?: string;
    value?: string;
    description?: string;
    metadata?: Record<string, unknown>;
}
