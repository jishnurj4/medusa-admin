import { Request, Response } from "express";
/**
 * @oas [get] /admin/publishable-api-keys/{id}
 * operationId: "GetPublishableApiKeysPublishableApiKey"
 * summary: "Get a Publishable API Key"
 * description: "Retrieve a publishable API key's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Publishable API Key.
 * x-authenticated: true
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.retrieve(publishableApiKeyId)
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminPublishableApiKey,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         publishableApiKeyId: string
 *       }
 *
 *       const PublishableApiKey = ({
 *         publishableApiKeyId
 *       }: Props) => {
 *         const { publishable_api_key, isLoading } =
 *           useAdminPublishableApiKey(
 *             publishableApiKeyId
 *           )
 *
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {publishable_api_key && <span>{publishable_api_key.title}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default PublishableApiKey
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/publishable-api-keys/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
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
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
