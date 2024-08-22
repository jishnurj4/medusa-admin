/**
 * @oas [post] /admin/products/{id}/metadata
 * operationId: "PostProductsProductMetadata"
 * summary: "Set Metadata"
 * description: "Set the metadata of a Product. It can be any key-value pair, which allows adding custom data to a product."
 * externalDocs:
 *   description: "Learn about the metadata attribute, and how to delete and update it."
 *   url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductMetadataReq"
 * x-codegen:
 *   method: setMetadata
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.setMetadata(productId, {
 *         key: "test",
 *         value: "true"
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}/metadata' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "key": "test",
 *           "value": "true"
 *       }'
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
 *           $ref: "#/components/schemas/AdminProductsRes"
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
 * @schema AdminPostProductsProductMetadataReq
 * type: object
 * required:
 *   - key
 *   - value
 * properties:
 *   key:
 *     description: The metadata key
 *     type: string
 *   value:
 *     description: The metadata value
 *     type: string
 */
export declare class AdminPostProductsProductMetadataReq {
    key: string;
    value: string;
}
