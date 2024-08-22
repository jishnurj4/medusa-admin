/**
 * @oas [delete] /admin/products/{id}/variants/{variant_id}
 * operationId: "DeleteProductsProductVariantsVariant"
 * summary: "Delete a Product Variant"
 * description: "Delete a Product Variant."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 *   - (path) variant_id=* {string} The ID of the Product Variant.
 * x-codegen:
 *   method: deleteVariant
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.deleteVariant(productId, variantId)
 *       .then(({ variant_id, object, deleted, product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteVariant } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *         variantId: string
 *       }
 *
 *       const ProductVariant = ({
 *         productId,
 *         variantId
 *       }: Props) => {
 *         const deleteVariant = useAdminDeleteVariant(
 *           productId
 *         )
 *         // ...
 *
 *         const handleDelete = () => {
 *           deleteVariant.mutate(variantId, {
 *             onSuccess: ({ variant_id, object, deleted, product }) => {
 *               console.log(product.variants)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ProductVariant
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/products/{id}/variants/{variant_id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsDeleteVariantRes"
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
