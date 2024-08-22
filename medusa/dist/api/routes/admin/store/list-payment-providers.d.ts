/**
 * @oas [get] /admin/store/payment-providers
 * operationId: "GetStorePaymentProviders"
 * summary: "List Payment Providers"
 * description: "Retrieve a list of available Payment Providers in a store."
 * x-authenticated: true
 * x-codegen:
 *   method: listPaymentProviders
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.store.listPaymentProviders()
 *       .then(({ payment_providers }) => {
 *         console.log(payment_providers.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStorePaymentProviders } from "medusa-react"
 *
 *       const PaymentProviders = () => {
 *         const {
 *           payment_providers,
 *           isLoading
 *         } = useAdminStorePaymentProviders()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {payment_providers && !payment_providers.length && (
 *               <span>No Payment Providers</span>
 *             )}
 *             {payment_providers &&
 *               payment_providers.length > 0 &&(
 *                 <ul>
 *                   {payment_providers.map((provider) => (
 *                     <li key={provider.id}>{provider.id}</li>
 *                   ))}
 *                 </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default PaymentProviders
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/store/payment-providers' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Store
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPaymentProvidersList"
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
