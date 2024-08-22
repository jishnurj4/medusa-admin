/**
 * @oas [get] /admin/shipping-profiles
 * operationId: "GetShippingProfiles"
 * summary: "List Shipping Profiles"
 * description: "Retrieve a list of Shipping Profiles."
 * x-authenticated: true
 * x-codegen:
 *   method: list
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingProfiles.list()
 *       .then(({ shipping_profiles }) => {
 *         console.log(shipping_profiles.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminShippingProfiles } from "medusa-react"
 *
 *       const ShippingProfiles = () => {
 *         const {
 *           shipping_profiles,
 *           isLoading
 *         } = useAdminShippingProfiles()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {shipping_profiles && !shipping_profiles.length && (
 *               <span>No Shipping Profiles</span>
 *             )}
 *             {shipping_profiles && shipping_profiles.length > 0 && (
 *               <ul>
 *                 {shipping_profiles.map((profile) => (
 *                   <li key={profile.id}>{profile.name}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ShippingProfiles
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/shipping-profiles' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Profiles
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingProfilesListRes"
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
