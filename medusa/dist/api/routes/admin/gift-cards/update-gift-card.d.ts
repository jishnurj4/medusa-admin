/**
 * @oas [post] /admin/gift-cards/{id}
 * operationId: "PostGiftCardsGiftCard"
 * summary: "Update a Gift Card"
 * description: "Update a Gift Card's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Gift Card.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostGiftCardsGiftCardReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.giftCards.update(giftCardId, {
 *         region_id
 *       })
 *       .then(({ gift_card }) => {
 *         console.log(gift_card.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateGiftCard } from "medusa-react"
 *
 *       type Props = {
 *         customGiftCardId: string
 *       }
 *
 *       const CustomGiftCard = ({ customGiftCardId }: Props) => {
 *         const updateGiftCard = useAdminUpdateGiftCard(
 *           customGiftCardId
 *         )
 *         // ...
 *
 *         const handleUpdate = (regionId: string) => {
 *           updateGiftCard.mutate({
 *             region_id: regionId,
 *           }, {
 *             onSuccess: ({ gift_card }) => {
 *               console.log(gift_card.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CustomGiftCard
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/gift-cards/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "region_id": "{region_id}"
 *       }'
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
/**
 * @schema AdminPostGiftCardsGiftCardReq
 * type: object
 * description: "The details to update of the gift card."
 * properties:
 *   balance:
 *     type: integer
 *     description: The value (excluding VAT) that the Gift Card should represent.
 *   is_disabled:
 *     type: boolean
 *     description: >-
 *       Whether the Gift Card is disabled on creation. If set to `true`, the gift card will not be available for customers.
 *   ends_at:
 *     type: string
 *     format: date-time
 *     description: The date and time at which the Gift Card should no longer be available.
 *   region_id:
 *     description: The ID of the Region in which the Gift Card can be used.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostGiftCardsGiftCardReq {
    balance?: number;
    is_disabled?: boolean;
    ends_at?: Date | null;
    region_id?: string;
    metadata?: Record<string, unknown>;
}
