/**
 * @oas [delete] /admin/invites/{invite_id}
 * operationId: "DeleteInvitesInvite"
 * summary: "Delete an Invite"
 * description: "Delete an Invite. Only invites that weren't accepted can be deleted."
 * x-authenticated: true
 * parameters:
 *   - (path) invite_id=* {string} The ID of the Invite
 * x-codegen:
 *   method: delete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.invites.delete(inviteId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteInvite } from "medusa-react"
 *
 *       type Props = {
 *         inviteId: string
 *       }
 *
 *       const DeleteInvite = ({ inviteId }: Props) => {
 *         const deleteInvite = useAdminDeleteInvite(inviteId)
 *         // ...
 *
 *         const handleDelete = () => {
 *           deleteInvite.mutate(void 0, {
 *             onSuccess: ({ id, object, deleted }) => {
 *               console.log(id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Invite
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/invites/{invite_id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Invites
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInviteDeleteRes"
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
