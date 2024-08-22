/**
 * @oas [post] /admin/uploads
 * operationId: "PostUploads"
 * summary: "Upload Files"
 * description: "Upload at least one file to a public bucket or storage. The file upload is handled by the file service installed on the Medusa backend."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     multipart/form-data:
 *       schema:
 *         type: object
 *         properties:
 *           files:
 *             type: string
 *             format: binary
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.uploads.create(file)
 *       .then(({ uploads }) => {
 *         console.log(uploads.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUploadFile } from "medusa-react"
 *
 *       const UploadFile = () => {
 *         const uploadFile = useAdminUploadFile()
 *         // ...
 *
 *         const handleFileUpload = (file: File) => {
 *           uploadFile.mutate(file, {
 *             onSuccess: ({ uploads }) => {
 *               console.log(uploads[0].key)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default UploadFile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/uploads' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: image/jpeg' \
 *       --form 'files=@"<FILE_PATH_1>"' \
 *       --form 'files=@"<FILE_PATH_1>"'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Uploads
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminUploadsRes"
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
export declare class IAdminPostUploadsFileReq {
    originalName: string;
    path: string;
}
