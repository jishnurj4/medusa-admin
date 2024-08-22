import { AdminGetDiscountsDiscountRuleParams } from "../../../../types/discount";
import { DateComparisonOperator } from "../../../../types/common";
import { Request, Response } from "express";
/**
 * @oas [get] /admin/discounts
 * operationId: "GetDiscounts"
 * summary: "List Discounts"
 * x-authenticated: true
 * description: "Retrieve a list of Discounts. The discounts can be filtered by fields such as `rule` or `is_dynamic`. The discounts can also be paginated."
 * parameters:
 *   - (query) q {string} term to search discounts' code field.
 *   - in: query
 *     name: rule
 *     description: Filter discounts by rule fields.
 *     schema:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           enum: [fixed, percentage, free_shipping]
 *           description: "Filter discounts by type."
 *         allocation:
 *           type: string
 *           enum: [total, item]
 *           description: "Filter discounts by allocation type."
 *   - (query) is_dynamic {boolean} Filter discounts by whether they're dynamic or not.
 *   - (query) is_disabled {boolean} Filter discounts by whether they're disabled or not.
 *   - (query) limit=20 {number} The number of discounts to return
 *   - (query) offset=0 {number} The number of discounts to skip when retrieving the discounts.
 *   - (query) expand {string} Comma-separated relations that should be expanded in each returned discount.
 *   - (query) order {string} A discount field to sort-order the retrieved discounts by.
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
 *   queryParams: AdminGetDiscountsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.list()
 *       .then(({ discounts, limit, offset, count }) => {
 *         console.log(discounts.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDiscounts } from "medusa-react"
 *
 *       const Discounts = () => {
 *         const { discounts, isLoading } = useAdminDiscounts()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {discounts && !discounts.length && (
 *               <span>No customers</span>
 *             )}
 *             {discounts && discounts.length > 0 && (
 *               <ul>
 *                 {discounts.map((discount) => (
 *                   <li key={discount.id}>{discount.code}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Discounts
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/discounts' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Discounts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDiscountsListRes"
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
declare const AdminGetDiscountsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved discounts.
 */
export declare class AdminGetDiscountsParams extends AdminGetDiscountsParams_base {
    /**
     * Filter discounts by their associated rule.
     */
    rule?: AdminGetDiscountsDiscountRuleParams;
    /**
     * Search terms to search discounts' code fields.
     */
    q?: string;
    /**
     * Filter discounts by whether they're dynamic.
     */
    is_dynamic?: boolean;
    /**
     * Filter discounts by whether they're disabled.
     */
    is_disabled?: boolean;
    /**
     * Date filters to apply on the discounts' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the discounts' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
}
