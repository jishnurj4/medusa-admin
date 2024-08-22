import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/stock-locations/{id}
 * operationId: "PostStockLocationsStockLocation"
 * summary: "Update a Stock Location"
 * description: "Update a Stock Location's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Stock Location.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned stock location.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned stock location.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostStockLocationsLocationReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.update(stockLocationId, {
 *         name: 'Main Warehouse'
 *       })
 *       .then(({ stock_location }) => {
 *         console.log(stock_location.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateStockLocation } from "medusa-react"
 *
 *       type Props = {
 *         stockLocationId: string
 *       }
 *
 *       const StockLocation = ({ stockLocationId }: Props) => {
 *         const updateLocation = useAdminUpdateStockLocation(
 *           stockLocationId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           name: string
 *         ) => {
 *           updateLocation.mutate({
 *             name
 *           }, {
 *             onSuccess: ({ stock_location }) => {
 *               console.log(stock_location.name)
 *             }
 *           })
 *         }
 *       }
 *
 *       export default StockLocation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/stock-locations/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Main Warehouse"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Stock Locations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * The attributes of a stock location address to create or update.
 */
declare class StockLocationAddress {
    /**
     * First line address.
     */
    address_1: string;
    /**
     * Second line address.
     */
    address_2?: string;
    /**
     * Company.
     */
    company?: string;
    /**
     * City.
     */
    city?: string;
    /**
     * Country code.
     */
    country_code: string;
    /**
     * Phone.
     */
    phone?: string;
    /**
     * Postal code.
     */
    postal_code?: string;
    /**
     * Province.
     */
    province?: string;
}
/**
 * @schema AdminPostStockLocationsLocationReq
 * type: object
 * description: "The details to update of the stock location."
 * properties:
 *   name:
 *     description: the name of the stock location
 *     type: string
 *   address_id:
 *     description: the stock location address ID
 *     type: string
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   address:
 *     description: The data of an associated address to create or update.
 *     $ref: "#/components/schemas/StockLocationAddressInput"
 */
export declare class AdminPostStockLocationsLocationReq {
    name?: string;
    address?: StockLocationAddress;
    address_id?: string;
    metadata?: Record<string, unknown>;
}
export declare class AdminPostStockLocationsLocationParams extends FindParams {
}
