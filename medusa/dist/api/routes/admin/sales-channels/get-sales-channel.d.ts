import { Request, Response } from "express";
/**
 * @oas [get] /admin/sales-channels/{id}
 * operationId: "GetSalesChannelsSalesChannel"
 * summary: "Get a Sales Channel"
 * description: "Retrieve a sales channel's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Sales channel.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.salesChannels.retrieve(salesChannelId)
 *       .then(({ sales_channel }) => {
 *         console.log(sales_channel.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminSalesChannel } from "medusa-react"
 *
 *       type Props = {
 *         salesChannelId: string
 *       }
 *
 *       const SalesChannel = ({ salesChannelId }: Props) => {
 *         const {
 *           sales_channel,
 *           isLoading,
 *         } = useAdminSalesChannel(salesChannelId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {sales_channel && <span>{sales_channel.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default SalesChannel
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/sales-channels/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Sales Channels
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminSalesChannelsRes"
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
