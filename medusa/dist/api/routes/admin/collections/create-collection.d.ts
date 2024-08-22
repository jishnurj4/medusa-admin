import { Request, Response } from "express";
/**
 * @oas [post] /admin/collections
 * operationId: "PostCollections"
 * summary: "Create a Collection"
 * description: "Create a Product Collection."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCollectionsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.create({
 *         title: "New Collection"
 *       })
 *       .then(({ collection }) => {
 *         console.log(collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateCollection } from "medusa-react"
 *
 *       const CreateCollection = () => {
 *         const createCollection = useAdminCreateCollection()
 *         // ...
 *
 *         const handleCreate = (title: string) => {
 *           createCollection.mutate({
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
 *       export default CreateCollection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/collections' \
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
 * @schema AdminPostCollectionsReq
 * type: object
 * description: The product collection's details.
 * required:
 *   - title
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
export declare class AdminPostCollectionsReq {
    title: string;
    handle?: string;
    metadata?: Record<string, unknown>;
}
