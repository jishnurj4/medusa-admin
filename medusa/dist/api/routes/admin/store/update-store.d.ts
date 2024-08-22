/**
 * @oas [post] /admin/store
 * operationId: "PostStore"
 * summary: "Update Store Details"
 * description: "Update the Store's details."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostStoreReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.store.update({
 *         name: "Medusa Store"
 *       })
 *       .then(({ store }) => {
 *         console.log(store.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateStore } from "medusa-react"
 *
 *       function Store() {
 *         const updateStore = useAdminUpdateStore()
 *         // ...
 *
 *         const handleUpdate = (
 *           name: string
 *         ) => {
 *           updateStore.mutate({
 *             name
 *           }, {
 *             onSuccess: ({ store }) => {
 *               console.log(store.name)
 *             }
 *           })
 *         }
 *       }
 *
 *       export default Store
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/store' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Medusa Store"
 *       }'
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
 *           $ref: "#/components/schemas/AdminStoresRes"
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
 * @schema AdminPostStoreReq
 * type: object
 * description: "The details to update of the store."
 * properties:
 *   name:
 *     description: "The name of the Store"
 *     type: string
 *   swap_link_template:
 *     description: >-
 *       A template for Swap links - use `{{cart_id}}` to insert the Swap Cart ID
 *     type: string
 *     example: "http://example.com/swaps/{{cart_id}}"
 *   payment_link_template:
 *     description: "A template for payment links - use `{{cart_id}}` to insert the Cart ID"
 *     example: "http://example.com/payments/{{cart_id}}"
 *     type: string
 *   invite_link_template:
 *     description: "A template for invite links - use `{{invite_token}}` to insert the invite token"
 *     example: "http://example.com/invite?token={{invite_token}}"
 *     type: string
 *   default_currency_code:
 *     description: "The default currency code of the Store."
 *     type: string
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currencies:
 *     description: "Array of available currencies in the store. Each currency is in 3 character ISO code format."
 *     type: array
 *     items:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 *   metadata:
 *     description: "An optional set of key-value pairs with additional information."
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostStoreReq {
    name?: string;
    swap_link_template?: string;
    payment_link_template?: string;
    invite_link_template?: string;
    default_currency_code?: string;
    currencies?: string[];
    metadata?: Record<string, unknown>;
}
