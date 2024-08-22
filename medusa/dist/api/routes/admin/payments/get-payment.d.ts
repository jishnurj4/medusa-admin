import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /admin/payments/{id}
 * operationId: "GetPaymentsPayment"
 * summary: "Get Payment details"
 * description: "Retrieve a Payment's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Payment.
 * x-codegen:
 *   method: retrieve
 *   queryParams: GetPaymentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.payments.retrieve(paymentId)
 *       .then(({ payment }) => {
 *         console.log(payment.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminPayment } from "medusa-react"
 *
 *       type Props = {
 *         paymentId: string
 *       }
 *
 *       const Payment = ({ paymentId }: Props) => {
 *         const {
 *           payment,
 *           isLoading,
 *         } = useAdminPayment(paymentId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {payment && <span>{payment.amount}</span>}
 *
 *           </div>
 *         )
 *       }
 *
 *       export default Payment
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/payments/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Payments
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPaymentRes"
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
export declare class GetPaymentsParams extends FindParams {
}
