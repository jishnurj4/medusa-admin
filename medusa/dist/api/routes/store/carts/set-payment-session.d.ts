/**
 * @oas [post] /store/carts/{id}/payment-session
 * operationId: PostCartsCartPaymentSession
 * summary: Select a Payment Session
 * description: "Select the Payment Session that will be used to complete the cart. This is typically used when the customer chooses their preferred payment method during checkout.
 *  The totals of the cart will be recalculated."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartPaymentSessionReq"
 * x-codegen:
 *   method: setPaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.setPaymentSession(cartId, {
 *         provider_id: "manual"
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useSetPaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const setPaymentSession = useSetPaymentSession(cartId)
 *
 *         const handleSetPaymentSession = (
 *           providerId: string
 *         ) => {
 *           setPaymentSession.mutate({
 *             provider_id: providerId,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.payment_session)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/payment-sessions' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "provider_id": "manual"
 *       }'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
 * @schema StorePostCartsCartPaymentSessionReq
 * type: object
 * description: "The details of the payment session to set."
 * required:
 *   - provider_id
 * properties:
 *   provider_id:
 *     type: string
 *     description: The ID of the Payment Provider.
 */
export declare class StorePostCartsCartPaymentSessionReq {
    provider_id: string;
}
