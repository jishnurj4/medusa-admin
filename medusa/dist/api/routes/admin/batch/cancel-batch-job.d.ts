/**
 * @oas [post] /admin/batch-jobs/{id}/cancel
 * operationId: "PostBatchJobsBatchJobCancel"
 * summary: "Cancel a Batch Job"
 * description: "Mark a batch job as canceled. When a batch job is canceled, the processing of the batch job doesn’t automatically stop."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the batch job.
 * x-codegen:
 *   method: cancel
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.batchJobs.cancel(batchJobId)
 *       .then(({ batch_job }) => {
 *         console.log(batch_job.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelBatchJob } from "medusa-react"
 *
 *       type Props = {
 *         batchJobId: string
 *       }
 *
 *       const BatchJob = ({ batchJobId }: Props) => {
 *         const cancelBatchJob = useAdminCancelBatchJob(batchJobId)
 *         // ...
 *
 *         const handleCancel = () => {
 *           cancelBatchJob.mutate(undefined, {
 *             onSuccess: ({ batch_job }) => {
 *               console.log(batch_job)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default BatchJob
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/batch-jobs/{id}/cancel' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Batch Jobs
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminBatchJobRes"
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
