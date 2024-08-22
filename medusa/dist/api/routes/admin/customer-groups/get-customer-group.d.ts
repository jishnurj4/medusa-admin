import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /admin/customer-groups/{id}
 * operationId: "GetCustomerGroupsGroup"
 * summary: "Get a Customer Group"
 * description: "Retrieve a Customer Group by its ID. You can expand the customer group's relations or select the fields that should be returned."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Customer Group.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned customer group.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned customer group.
 * x-codegen:
 *   method: retrieve
 *   queryParams: AdminGetCustomerGroupsGroupParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.retrieve(customerGroupId)
 *       .then(({ customer_group }) => {
 *         console.log(customer_group.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCustomerGroup } from "medusa-react"
 *
 *       type Props = {
 *         customerGroupId: string
 *       }
 *
 *       const CustomerGroup = ({ customerGroupId }: Props) => {
 *         const { customer_group, isLoading } = useAdminCustomerGroup(
 *           customerGroupId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {customer_group && <span>{customer_group.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default CustomerGroup
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/customer-groups/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customer Groups
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomerGroupsRes"
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
export declare class AdminGetCustomerGroupsGroupParams extends FindParams {
}
