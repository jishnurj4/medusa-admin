/**
 * @oas [post] /admin/invites/accept
 * operationId: "PostInvitesInviteAccept"
 * summary: "Accept an Invite"
 * description: "Accept an Invite. This will also delete the invite and create a new user that can log in and perform admin functionalities. The user will have the email associated with the invite, and the password
 *  provided in the request body."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostInvitesInviteAcceptReq"
 * x-codegen:
 *   method: accept
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.invites.accept({
 *         token,
 *         user: {
 *           first_name: "Brigitte",
 *           last_name: "Collier",
 *           password: "supersecret"
 *         }
 *       })
 *       .then(() => {
 *         // successful
 *       })
 *       .catch(() => {
 *         // an error occurred
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminAcceptInvite } from "medusa-react"
 *
 *       const AcceptInvite = () => {
 *         const acceptInvite = useAdminAcceptInvite()
 *         // ...
 *
 *         const handleAccept = (
 *           token: string,
 *           firstName: string,
 *           lastName: string,
 *           password: string
 *         ) => {
 *           acceptInvite.mutate({
 *             token,
 *             user: {
 *               first_name: firstName,
 *               last_name: lastName,
 *               password,
 *             },
 *           }, {
 *             onSuccess: () => {
 *               // invite accepted successfully.
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default AcceptInvite
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/invites/accept' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "token": "{token}",
 *           "user": {
 *             "first_name": "Brigitte",
 *             "last_name": "Collier",
 *             "password": "supersecret"
 *           }
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Invites
 * responses:
 *   200:
 *     description: OK
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
 * Details of the use accepting the invite.
 */
export declare class AdminPostInvitesInviteAcceptUserReq {
    /**
     * The invite's first name.
     */
    first_name: string;
    /**
     * The invite's last name.
     */
    last_name: string;
    /**
     * The invite's password
     */
    password: string;
}
/**
 * @schema AdminPostInvitesInviteAcceptReq
 * type: object
 * description: "The details of the invite to be accepted."
 * required:
 *   - token
 *   - user
 * properties:
 *   token:
 *     description: "The token of the invite to accept. This is a unique token generated when the invite was created or resent."
 *     type: string
 *   user:
 *     description: "The details of the user to create."
 *     type: object
 *     required:
 *       - first_name
 *       - last_name
 *       - password
 *     properties:
 *       first_name:
 *         type: string
 *         description: the first name of the User
 *       last_name:
 *         type: string
 *         description: the last name of the User
 *       password:
 *         description: The password for the User
 *         type: string
 *         format: password
 */
export declare class AdminPostInvitesInviteAcceptReq {
    token: string;
    user: AdminPostInvitesInviteAcceptUserReq;
}
