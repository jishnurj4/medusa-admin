import { Request, Response } from "express";
/**
 * @oas [get] /admin/collections/{id}
 * operationId: "GetCollectionsCollection"
 * summary: "Get a Collection"
 * description: "Retrieve a Product Collection by its ID. The products associated with it are expanded and returned as well."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product Collection
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.retrieve(collectionId)
 *       .then(({ collection }) => {
 *         console.log(collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCollection } from "medusa-react"
 *
 *       type Props = {
 *         collectionId: string
 *       }
 *
 *       const Collection = ({ collectionId }: Props) => {
 *         const { collection, isLoading } = useAdminCollection(collectionId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {collection && <span>{collection.title}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Collection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/collections/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
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
