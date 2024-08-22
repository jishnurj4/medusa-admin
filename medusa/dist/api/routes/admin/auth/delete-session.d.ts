/**
 * @oas [delete] /admin/auth
 * operationId: "DeleteAuth"
 * summary: "User Logout"
 * x-authenticated: true
 * description: "Delete the current session for the logged in user. This will only work if you're using Cookie session for authentication. If the API token is still passed in the header,
 * the user is still authorized to perform admin functionalities in other API Routes."
 * x-codegen:
 *   method: deleteSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in
 *       medusa.admin.auth.deleteSession()
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteSession } from "medusa-react"
 *
 *       const Logout = () => {
 *         const adminLogout = useAdminDeleteSession()
 *         // ...
 *
 *         const handleLogout = () => {
 *           adminLogout.mutate(undefined, {
 *             onSuccess: () => {
 *               // user logged out.
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Logout
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/auth' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
