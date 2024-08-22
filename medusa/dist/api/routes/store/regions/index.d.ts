import { PaginatedResponse } from "@medusajs/types";
import { Region } from "./../../../../";
declare const _default: (app: any, featureFlagRouter: any) => any;
export default _default;
export declare const defaultStoreRegionRelations: string[];
export declare const defaultStoreRegionFields: string[];
/**
 * @schema StoreRegionsListRes
 * type: object
 * description: "The list of regions with pagination fields."
 * x-expanded-relations:
 *   field: regions
 *   relations:
 *     - countries
 *     - payment_providers
 *     - fulfillment_providers
 *   eager:
 *     - payment_providers
 *     - fulfillment_providers
 * required:
 *   - regions
 * properties:
 *   regions:
 *     type: array
 *     description: "An array of regions details."
 *     items:
 *       $ref: "#/components/schemas/Region"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of regions skipped when retrieving the regions.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type StoreRegionsListRes = PaginatedResponse & {
    regions: Region[];
};
/**
 * @schema StoreRegionsRes
 * type: object
 * description: "The region's details."
 * x-expanded-relations:
 *   field: region
 *   relations:
 *     - countries
 *     - payment_providers
 *     - fulfillment_providers
 *   eager:
 *     - payment_providers
 *     - fulfillment_providers
 * required:
 *   - region
 * properties:
 *   region:
 *     description: "Region details."
 *     $ref: "#/components/schemas/Region"
 */
export type StoreRegionsRes = {
    region: Region;
};
export * from "./get-region";
export * from "./list-regions";
