import { UserRoles } from "../../../../models/user";
/**
 * @oas [post] /admin/users/{id}
 * operationId: "PostUsersUser"
 * summary: "Update a User"
 * description: "Update an admin user's details."
 * parameters:
 *   - (path) id=* {string} The ID of the User.
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminUpdateUserRequest"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.update(userId, {
 *         first_name: "Marcellus"
 *       })
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateUser } from "medusa-react"
 *
 *       type Props = {
 *         userId: string
 *       }
 *
 *       const User = ({ userId }: Props) => {
 *         const updateUser = useAdminUpdateUser(userId)
 *         // ...
 *
 *         const handleUpdateUser = (
 *           firstName: string
 *         ) => {
 *           updateUser.mutate({
 *             first_name: firstName,
 *           }, {
 *             onSuccess: ({ user }) => {
 *               console.log(user.first_name)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default User
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/users/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Marcellus"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Users
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminUserRes"
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
 * @schema AdminUpdateUserRequest
 * type: object
 * properties:
 *   first_name:
 *     description: "The first name of the User."
 *     type: string
 *   last_name:
 *     description: "The last name of the User."
 *     type: string
 *   role:
 *     description: "The role assigned to the user. These roles don't provide any different privileges."
 *     type: string
 *     enum: [admin, member, developer]
 *   api_token:
 *     description: "The API token of the User."
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminUpdateUserRequest {
    first_name?: string;
    last_name?: string;
    role?: UserRoles;
    api_token?: string;
    metadata?: Record<string, unknown>;
}
