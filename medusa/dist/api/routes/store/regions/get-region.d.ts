import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /store/regions/{id}
 * operationId: GetRegionsRegion
 * summary: Get a Region
 * description: "Retrieve a Region's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Region.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.regions.retrieve(regionId)
 *       .then(({ region }) => {
 *         console.log(region.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useRegion } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Region = ({ regionId }: Props) => {
 *         const { region, isLoading } = useRegion(
 *           regionId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {region && <span>{region.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Region
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/regions/{id}'
 * tags:
 *   - Regions
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreRegionsRes"
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
export declare class StoreGetRegionsRegionParams extends FindParams {
}
