import { DateComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /store/regions
 * operationId: GetRegions
 * summary: List Regions
 * description: "Retrieve a list of regions. The regions can be filtered by fields such as `created_at`. The regions can also be paginated. This API Route is useful to
 *  show the customer all available regions to choose from."
 * externalDocs:
 *   description: "How to use regions in a storefront"
 *   url: "https://docs.medusajs.com/modules/regions-and-currencies/storefront/use-regions"
 * parameters:
 *   - (query) offset=0 {integer} The number of regions to skip when retrieving the regions.
 *   - (query) limit=100 {integer} Limit the number of regions returned.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetRegionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.regions.list()
 *       .then(({ regions, count, limit, offset }) => {
 *         console.log(regions.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useRegions } from "medusa-react"
 *
 *       const Regions = () => {
 *         const { regions, isLoading } = useRegions()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {regions?.length && (
 *               <ul>
 *                 {regions.map((region) => (
 *                   <li key={region.id}>
 *                     {region.name}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Regions
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/regions'
 * tags:
 *   - Regions
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreRegionsListRes"
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
declare const StoreGetRegionsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class StoreGetRegionsParams extends StoreGetRegionsParams_base {
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
