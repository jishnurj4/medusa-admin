/**
 * @oas [post] /store/payment-collections/{id}/sessions
 * operationId: "PostPaymentCollectionsSessions"
 * summary: "Create a Payment Session"
 * description: "Create a Payment Session for a payment provider in a Payment Collection."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the Payment Collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePaymentCollectionSessionsReq"
 * x-codegen:
 *   method: managePaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.paymentCollections.managePaymentSession(payment_id, { provider_id: "stripe" })
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useManagePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({
 *         paymentCollectionId
 *       }: Props) => {
 *         const managePaymentSession = useManagePaymentSession(
 *           paymentCollectionId
 *         )
 *
 *         const handleManagePaymentSession = (
 *           providerId: string
 *         ) => {
 *           managePaymentSession.mutate({
 *             provider_id: providerId
 *           }, {
 *             onSuccess: ({ payment_collection }) => {
 *               console.log(payment_collection.payment_sessions)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PaymentCollection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/payment-collections/{id}/sessions' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *         "provider_id": "stripe"
 *       }'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Payment Collections
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StorePaymentCollectionsRes"
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
 * @schema StorePaymentCollectionSessionsReq
 * type: object
 * description: "The details of the payment session to manage."
 * required:
 *   - provider_id
 * properties:
 *   provider_id:
 *     type: string
 *     description: The ID of the Payment Provider.
 */
export declare class StorePaymentCollectionSessionsReq {
    provider_id: string;
}
