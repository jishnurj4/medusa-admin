import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /store/payment-collections/{id}
 * operationId: "GetPaymentCollectionsPaymentCollection"
 * summary: "Get a PaymentCollection"
 * description: "Retrieve a Payment Collection's details."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the PaymentCollection.
 *   - (query) fields {string} Comma-separated fields that should be expanded in the returned payment collection.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned payment collection.
 * x-codegen:
 *   method: retrieve
 *   queryParams: StoreGetPaymentCollectionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.paymentCollections.retrieve(paymentCollectionId)
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { usePaymentCollection } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({
 *         paymentCollectionId
 *       }: Props) => {
 *         const {
 *           payment_collection,
 *           isLoading
 *         } = usePaymentCollection(
 *           paymentCollectionId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {payment_collection && (
 *               <span>{payment_collection.status}</span>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default PaymentCollection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/payment-collections/{id}'
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
export declare class StoreGetPaymentCollectionsParams extends FindParams {
}
