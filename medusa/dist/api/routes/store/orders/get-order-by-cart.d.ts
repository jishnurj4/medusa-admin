/**
 * @oas [get] /store/orders/cart/{cart_id}
 * operationId: GetOrdersOrderCartId
 * summary: Get by Cart ID
 * description: "Retrieve an Order's details by the ID of the Cart that was used to create the Order."
 * parameters:
 *   - (path) cart_id=* {string} The ID of Cart.
 * x-codegen:
 *   method: retrieveByCartId
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orders.retrieveByCartId(cartId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCartOrder } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Order = ({ cartId }: Props) => {
 *         const {
 *           order,
 *           isLoading,
 *         } = useCartOrder(cartId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {order && <span>{order.display_id}</span>}
 *
 *           </div>
 *         )
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/orders/cart/{cart_id}'
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrdersRes"
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
