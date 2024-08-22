/**
 * @oas [delete] /admin/notes/{id}
 * operationId: "DeleteNotesNote"
 * summary: "Delete a Note"
 * description: "Delete a Note."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Note to delete.
 * x-codegen:
 *   method: delete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.delete(noteId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteNote } from "medusa-react"
 *
 *       type Props = {
 *         noteId: string
 *       }
 *
 *       const Note = ({ noteId }: Props) => {
 *         const deleteNote = useAdminDeleteNote(noteId)
 *         // ...
 *
 *         const handleDelete = () => {
 *           deleteNote.mutate()
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Note
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/notes/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notes
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotesDeleteRes"
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
