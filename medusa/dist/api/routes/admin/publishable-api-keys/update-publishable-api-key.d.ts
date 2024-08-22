import { Request, Response } from "express";
/**
 * @oas [post] /admin/publishable-api-keys/{id}
 * operationId: "PostPublishableApiKysPublishableApiKey"
 * summary: "Update Publishable API Key"
 * description: "Update a Publishable API Key's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Publishable API Key.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostPublishableApiKeysPublishableApiKeyReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.update(publishableApiKeyId, {
 *         title: "new title"
 *       })
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdatePublishableApiKey } from "medusa-react"
 *
 *       type Props = {
 *         publishableApiKeyId: string
 *       }
 *
 *       const PublishableApiKey = ({
 *         publishableApiKeyId
 *       }: Props) => {
 *         const updateKey = useAdminUpdatePublishableApiKey(
 *           publishableApiKeyId
 *         )
 *         // ...
 *
 *         const handleUpdate = (title: string) => {
 *           updateKey.mutate({
 *             title,
 *           }, {
 *             onSuccess: ({ publishable_api_key }) => {
 *               console.log(publishable_api_key.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PublishableApiKey
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/publishable-api-key/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "new title"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Publishable Api Keys
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPublishableApiKeysRes"
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
 * @schema AdminPostPublishableApiKeysPublishableApiKeyReq
 * type: object
 * description: "The details to update of the publishable API key."
 * properties:
 *   title:
 *     description: The title of the Publishable API Key.
 *     type: string
 */
export declare class AdminPostPublishableApiKeysPublishableApiKeyReq {
    title?: string;
}
