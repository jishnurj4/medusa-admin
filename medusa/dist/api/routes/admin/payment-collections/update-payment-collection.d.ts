/**
 * @oas [post] /admin/payment-collections/{id}
 * operationId: "PostPaymentCollectionsPaymentCollection"
 * summary: "Update Payment Collection"
 * description: "Update a Payment Collection's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Payment Collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminUpdatePaymentCollectionsReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.paymentCollections.update(paymentCollectionId, {
 *         description
 *       })
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdatePaymentCollection } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({ paymentCollectionId }: Props) => {
 *         const updateCollection = useAdminUpdatePaymentCollection(
 *           paymentCollectionId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           description: string
 *         ) => {
 *           updateCollection.mutate({
 *             description
 *           }, {
 *             onSuccess: ({ payment_collection }) => {
 *               console.log(payment_collection.description)
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
 *       curl -X POST '{backend_url}/admin/payment-collections/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "description": "Description of payment collection"
 *       }'
 * security:
 *   - api_token: []
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
 *           $ref: "#/components/schemas/AdminPaymentCollectionsRes"
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
 * @schema AdminUpdatePaymentCollectionsReq
 * type: object
 * description: "The details to update of the payment collection."
 * properties:
 *   description:
 *     description: A description to create or update the payment collection.
 *     type: string
 *   metadata:
 *     description: A set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminUpdatePaymentCollectionsReq {
    description?: string;
    metadata?: Record<string, unknown>;
}
