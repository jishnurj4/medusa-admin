import { Request, Response } from "express";
/**
 * @oas [post] /admin/collections/{id}
 * operationId: "PostCollectionsCollection"
 * summary: "Update a Collection"
 * description: "Update a Product Collection's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCollectionsCollectionReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.update(collectionId, {
 *         title: "New Collection"
 *       })
 *       .then(({ collection }) => {
 *         console.log(collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateCollection } from "medusa-react"
 *
 *       type Props = {
 *         collectionId: string
 *       }
 *
 *       const Collection = ({ collectionId }: Props) => {
 *         const updateCollection = useAdminUpdateCollection(collectionId)
 *         // ...
 *
 *         const handleUpdate = (title: string) => {
 *           updateCollection.mutate({
 *             title
 *           }, {
 *             onSuccess: ({ collection }) => {
 *               console.log(collection.id)
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
 *       curl -X POST '{backend_url}/admin/collections/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "New Collection"
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
 * @schema AdminPostCollectionsCollectionReq
 * type: object
 * description: The product collection's details to update.
 * properties:
 *   title:
 *     type: string
 *     description: The title of the collection.
 *   handle:
 *     type: string
 *     description: An optional handle to be used in slugs. If none is provided, the kebab-case version of the title will be used.
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostCollectionsCollectionReq {
    title?: string;
    handle?: string;
    metadata?: Record<string, unknown>;
}
