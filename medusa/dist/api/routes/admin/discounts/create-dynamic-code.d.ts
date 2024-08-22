import { Request, Response } from "express";
/**
 * @oas [post] /admin/discounts/{id}/dynamic-codes
 * operationId: "PostDiscountsDiscountDynamicCodes"
 * summary: "Create a Dynamic Code"
 * description: "Create a dynamic unique code that can map to a parent Discount. This is useful if you want to automatically generate codes with the same rules and conditions."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Discount to create the dynamic code for."
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostDiscountsDiscountDynamicCodesReq"
 * x-codegen:
 *   method: createDynamicCode
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.createDynamicCode(discountId, {
 *         code: "TEST",
 *         usage_limit: 1
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateDynamicDiscountCode } from "medusa-react"
 *
 *       type Props = {
 *         discountId: string
 *       }
 *
 *       const Discount = ({ discountId }: Props) => {
 *         const createDynamicDiscount = useAdminCreateDynamicDiscountCode(discountId)
 *         // ...
 *
 *         const handleCreate = (
 *           code: string,
 *           usageLimit: number
 *         ) => {
 *           createDynamicDiscount.mutate({
 *             code,
 *             usage_limit: usageLimit
 *           }, {
 *             onSuccess: ({ discount }) => {
 *               console.log(discount.is_dynamic)
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
 *       curl -X POST '{backend_url}/admin/discounts/{id}/dynamic-codes' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "code": "TEST"
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
 * @schema AdminPostDiscountsDiscountDynamicCodesReq
 * type: object
 * description: "The details of the dynamic discount to create."
 * required:
 *   - code
 * properties:
 *   code:
 *     type: string
 *     description: A unique code that will be used to redeem the Discount
 *   usage_limit:
 *     type: number
 *     description: Maximum number of times the discount code can be used
 *     default: 1
 *   metadata:
 *     type: object
 *     description: An optional set of key-value pairs to hold additional information.
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostDiscountsDiscountDynamicCodesReq {
    code: string;
    usage_limit: number;
    metadata?: Record<string, unknown>;
}
