/**
 * @oas [post] /store/customers
 * operationId: PostCustomers
 * summary: Create a Customer
 * description: "Register a new customer. This will also automatically authenticate the customer and set their login session in the response Cookie header.
 *  The cookie session can be used in subsequent requests to authenticate the customer.
 *  When using Medusa's JS or Medusa React clients, the cookie is automatically attached to subsequent requests."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.customers.create({
 *         first_name: "Alec",
 *         last_name: "Reynolds",
 *         email: "user@example.com",
 *         password: "supersecret"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateCustomer } from "medusa-react"
 *
 *       const RegisterCustomer = () => {
 *         const createCustomer = useCreateCustomer()
 *         // ...
 *
 *         const handleCreate = (
 *           customerData: {
 *             first_name: string
 *             last_name: string
 *             email: string
 *             password: string
 *           }
 *         ) => {
 *           // ...
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
 *       export default RegisterCustomer
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/customers' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Alec",
 *           "last_name": "Reynolds",
 *           "email": "user@example.com",
 *           "password": "supersecret"
 *       }'
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersRes"
 *   422:
 *     description: A customer with the same email exists
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             code:
 *               type: string
 *               description: The error code
 *             type:
 *               type: string
 *               description: The type of error
 *             message:
 *               type: string
 *               description: Human-readable message with details about the error
 *         example:
 *           code: "invalid_request_error"
 *           type: "duplicate_error"
 *           message: "A customer with the given email already has an account. Log in instead"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema StorePostCustomersReq
 * type: object
 * description: "The details of the customer to create."
 * required:
 *   - first_name
 *   - last_name
 *   - email
 *   - password
 * properties:
 *   first_name:
 *     description: "The customer's first name."
 *     type: string
 *   last_name:
 *     description: "The customer's last name."
 *     type: string
 *   email:
 *     description: "The customer's email."
 *     type: string
 *     format: email
 *   password:
 *     description: "The customer's password."
 *     type: string
 *     format: password
 *   phone:
 *     description: "The customer's phone number."
 *     type: string
 */
export declare class StorePostCustomersReq {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone?: string;
}
