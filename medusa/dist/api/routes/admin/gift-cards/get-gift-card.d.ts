/**
 * @oas [get] /admin/gift-cards/{id}
 * operationId: "GetGiftCardsGiftCard"
 * summary: "Get a Gift Card"
 * description: "Retrieve a Gift Card's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Gift Card.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.giftCards.retrieve(giftCardId)
 *       .then(({ gift_card }) => {
 *         console.log(gift_card.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminGiftCard } from "medusa-react"
 *
 *       type Props = {
 *         giftCardId: string
 *       }
 *
 *       const CustomGiftCard = ({ giftCardId }: Props) => {
 *         const { gift_card, isLoading } = useAdminGiftCard(giftCardId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {gift_card && <span>{gift_card.code}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default CustomGiftCard
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/gift-cards/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Gift Cards
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGiftCardsRes"
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
