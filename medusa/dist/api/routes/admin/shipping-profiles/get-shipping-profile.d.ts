/**
 * @oas [get] /admin/shipping-profiles/{id}
 * operationId: "GetShippingProfilesProfile"
 * summary: "Get a Shipping Profile"
 * description: "Retrieve a Shipping Profile's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Shipping Profile.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingProfiles.retrieve(profileId)
 *       .then(({ shipping_profile }) => {
 *         console.log(shipping_profile.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminShippingProfile } from "medusa-react"
 *
 *       type Props = {
 *         shippingProfileId: string
 *       }
 *
 *       const ShippingProfile = ({ shippingProfileId }: Props) => {
 *         const {
 *           shipping_profile,
 *           isLoading
 *         } = useAdminShippingProfile(
 *           shippingProfileId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {shipping_profile && (
 *               <span>{shipping_profile.name}</span>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ShippingProfile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/shipping-profiles/{id}' \
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
 *           $ref: "#/components/schemas/AdminShippingProfilesRes"
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
