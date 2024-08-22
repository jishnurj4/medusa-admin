import { AddressPayload } from "../../../../types/common";
/**
 * @oas [post] /store/customers/me/addresses/{address_id}
 * operationId: PostCustomersCustomerAddressesAddress
 * summary: "Update a Shipping Address"
 * description: "Update the logged-in customer's saved Shipping Address's details."
 * x-authenticated: true
 * parameters:
 *   - (path) address_id=* {String} The ID of the Address.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerAddressesAddressReq"
 * x-codegen:
 *   method: updateAddress
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.addresses.updateAddress(addressId, {
 *         first_name: "Gina"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/customers/me/addresses/{address_id}' \
 *       -H 'Authorization: Bearer {access_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Gina"
 *       }'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreCustomersRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema StorePostCustomersCustomerAddressesAddressReq
 * anyOf:
 *   - $ref: "#/components/schemas/AddressPayload"
 */
export declare class StorePostCustomersCustomerAddressesAddressReq extends AddressPayload {
}
