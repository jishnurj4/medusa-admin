/**
 * @oas [get] /store/gift-cards/{code}
 * operationId: "GetGiftCardsCode"
 * summary: "Get Gift Card by Code"
 * description: "Retrieve a Gift Card's details by its associated unique code."
 * parameters:
 *   - (path) code=* {string} The unique Gift Card code.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.giftCards.retrieve(code)
 *       .then(({ gift_card }) => {
 *         console.log(gift_card.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useGiftCard } from "medusa-react"
 *
 *       type Props = {
 *         giftCardCode: string
 *       }
 *
 *       const GiftCard = ({ giftCardCode }: Props) => {
 *         const { gift_card, isLoading, isError } = useGiftCard(
 *           giftCardCode
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {gift_card && <span>{gift_card.value}</span>}
 *             {isError && <span>Gift Card does not exist</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default GiftCard
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/gift-cards/{code}'
 * tags:
 *   - Gift Cards
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreGiftCardsRes"
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
