/**
 * @oas [delete] /admin/discounts/{id}/regions/{region_id}
 * operationId: "DeleteDiscountsDiscountRegionsRegion"
 * summary: "Remove Region"
 * x-authenticated: true
 * description: "Remove a Region from the list of Regions that a Discount can be used in. This does not delete a region, only the association between it and the discount."
 * parameters:
 *   - (path) id=* {string} The ID of the Discount.
 *   - (path) region_id=* {string} The ID of the Region.
 * x-codegen:
 *   method: removeRegion
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.removeRegion(discountId, regionId)
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDiscountRemoveRegion } from "medusa-react"
 *
 *       type Props = {
 *         discountId: string
 *       }
 *
 *       const Discount = ({ discountId }: Props) => {
 *         const deleteRegion = useAdminDiscountRemoveRegion(discountId)
 *         // ...
 *
 *         const handleDelete = (regionId: string) => {
 *           deleteRegion.mutate(regionId, {
 *             onSuccess: ({ discount }) => {
 *               console.log(discount.regions)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Discount
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/discounts/{id}/regions/{region_id}' \
 *       -H 'x-medusa-access-token: {api_token}'
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
