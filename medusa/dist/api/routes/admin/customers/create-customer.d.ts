/**
 * @oas [post] /admin/customers
 * operationId: "PostCustomers"
 * summary: "Create a Customer"
 * description: "Create a customer as an admin."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCustomersReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customers.create({
 *         email: "user@example.com",
 *         first_name: "Caterina",
 *         last_name: "Yost",
 *         password: "supersecret"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateCustomer } from "medusa-react"
 *
 *       type CustomerData = {
 *         first_name: string
 *         last_name: string
 *         email: string
 *         password: string
 *       }
 *
 *       const CreateCustomer = () => {
 *         const createCustomer = useAdminCreateCustomer()
 *         // ...
 *
 *         const handleCreate = (customerData: CustomerData) => {
 *           createCustomer.mutate(customerData, {
 *             onSuccess: ({ customer }) => {
 *               console.log(customer.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateCustomer
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/customers' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "first_name": "Caterina",
 *           "last_name": "Yost",
 *           "password": "supersecret"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   201:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomersRes"
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
 * @schema AdminPostCustomersReq
 * type: object
 * description: "The details of the customer to create."
 * required:
 *   - email
 *   - first_name
 *   - last_name
 *   - password
 * properties:
 *   email:
 *     type: string
 *     description: The customer's email.
 *     format: email
 *   first_name:
 *     type: string
 *     description: The customer's first name.
 *   last_name:
 *     type: string
 *     description: The customer's last name.
 *   password:
 *     type: string
 *     description: The customer's password.
 *     format: password
 *   phone:
 *     type: string
 *     description: The customer's phone number.
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostCustomersReq {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone?: string;
    metadata?: Record<string, unknown>;
}
