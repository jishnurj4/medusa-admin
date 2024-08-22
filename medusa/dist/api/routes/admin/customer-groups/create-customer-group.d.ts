import { Request, Response } from "express";
/**
 * @oas [post] /admin/customer-groups
 * operationId: "PostCustomerGroups"
 * summary: "Create a Customer Group"
 * description: "Create a Customer Group."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCustomerGroupsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.create({
 *         name: "VIP"
 *       })
 *       .then(({ customer_group }) => {
 *         console.log(customer_group.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateCustomerGroup } from "medusa-react"
 *
 *       const CreateCustomerGroup = () => {
 *         const createCustomerGroup = useAdminCreateCustomerGroup()
 *         // ...
 *
 *         const handleCreate = (name: string) => {
 *           createCustomerGroup.mutate({
 *             name,
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateCustomerGroup
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/customer-groups' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "VIP"
 *       }'
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
/**
 * @schema AdminPostCustomerGroupsReq
 * type: object
 * description: "The details of the customer group to create."
 * required:
 *   - name
 * properties:
 *   name:
 *     type: string
 *     description: Name of the customer group
 *   metadata:
 *     type: object
 *     description: Metadata of the customer group.
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostCustomerGroupsReq {
    name: string;
    metadata?: Record<string, unknown>;
}
