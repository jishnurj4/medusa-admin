import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [delete] /admin/discounts/{discount_id}/conditions/{condition_id}/batch
 * operationId: "DeleteDiscountsDiscountConditionsConditionBatch"
 * summary: "Remove Batch Resources"
 * description: "Remove a batch of resources from a discount condition. This will only remove the association between the resource and the discount condition, not the resource itself."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the discount.
 *   - (path) condition_id=* {string} The ID of the condition to remove the resources from.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned discount.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned discount.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteDiscountsDiscountConditionsConditionBatchReq"
 * x-codegen:
 *   method: deleteConditionResourceBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.deleteConditionResourceBatch(discountId, conditionId, {
 *         resources: [{ id: itemId }]
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminDeleteDiscountConditionResourceBatch
 *       } from "medusa-react"
 *
 *       type Props = {
 *         discountId: string
 *         conditionId: string
 *       }
 *
 *       const DiscountCondition = ({
 *         discountId,
 *         conditionId
 *       }: Props) => {
 *         const deleteConditionResource = useAdminDeleteDiscountConditionResourceBatch(
 *           discountId,
 *           conditionId,
 *         )
 *         // ...
 *
 *         const handleDelete = (itemId: string) => {
 *           deleteConditionResource.mutate({
 *             resources: [
 *               {
 *                 id: itemId
 *               }
 *             ]
 *           }, {
 *             onSuccess: ({ discount }) => {
 *               console.log(discount.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DiscountCondition
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/discounts/{id}/conditions/{condition_id}/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "resources": [{ "id": "item_id" }]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Discounts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDiscountsRes"
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
 * {@inheritDoc FindParams}
 */
export declare class AdminDeleteDiscountsDiscountConditionsConditionBatchParams extends FindParams {
}
/**
 * @schema AdminDeleteDiscountsDiscountConditionsConditionBatchReq
 * type: object
 * description: "The resources to remove."
 * required:
 *   - resources
 * properties:
 *   resources:
 *     description: The resources to be removed from the discount condition
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The id of the item
 *           type: string
 */
export declare class AdminDeleteDiscountsDiscountConditionsConditionBatchReq {
    resources: {
        id: string;
    }[];
}
