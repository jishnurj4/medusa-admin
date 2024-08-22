import { Request, Response } from "express";
/**
 * @oas [post] /admin/collections/{id}/products/batch
 * operationId: "PostProductsToCollection"
 * summary: "Add Products to Collection"
 * description: "Add products to a product collection."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the product collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsToCollectionReq"
 * x-codegen:
 *   method: addProducts
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.addProducts(collectionId, {
 *         product_ids: [
 *           productId1,
 *           productId2
 *         ]
 *       })
 *       .then(({ collection }) => {
 *         console.log(collection.products)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminAddProductsToCollection } from "medusa-react"
 *
 *       type Props = {
 *         collectionId: string
 *       }
 *
 *       const Collection = ({ collectionId }: Props) => {
 *         const addProducts = useAdminAddProductsToCollection(collectionId)
 *         // ...
 *
 *         const handleAddProducts = (productIds: string[]) => {
 *           addProducts.mutate({
 *             product_ids: productIds
 *           }, {
 *             onSuccess: ({ collection }) => {
 *               console.log(collection.products)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Collection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/collections/{id}/products/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "product_ids": [
 *               "prod_01G1G5V2MBA328390B5AXJ610F"
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Collections
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminCollectionsRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * @schema AdminPostProductsToCollectionReq
 * type: object
 * description: "The details of the products to add to the collection."
 * required:
 *   - product_ids
 * properties:
 *   product_ids:
 *     description: "An array of Product IDs to add to the Product Collection."
 *     type: array
 *     items:
 *       description: "The ID of a Product to add to the Product Collection."
 *       type: string
 */
export declare class AdminPostProductsToCollectionReq {
    product_ids: string[];
}
