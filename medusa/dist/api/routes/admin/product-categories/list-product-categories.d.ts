import { Request, Response } from "express";
/**
 * @oas [get] /admin/product-categories
 * operationId: "GetProductCategories"
 * summary: "List Product Categories"
 * description: "Retrieve a list of product categories. The product categories can be filtered by fields such as `q` or `handle`. The product categories can also be paginated."
 * x-authenticated: true
 * x-featureFlag: "product_categories"
 * parameters:
 *   - (query) q {string} term to search product categories' names and handles.
 *   - (query) handle {string} Filter by handle.
 *   - (query) is_internal {boolean} Filter by whether the category is internal or not.
 *   - (query) is_active {boolean} Filter by whether the category is active or not.
 *   - (query) include_descendants_tree {boolean} If set to `true`, all nested descendants of a category are included in the response.
 *   - (query) parent_category_id {string} Filter by the ID of a parent category.
 *   - (query) offset=0 {integer} The number of product categories to skip when retrieving the product categories.
 *   - (query) limit=100 {integer} Limit the number of product categories returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product categories.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product categories.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetProductCategoriesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productCategories.list()
 *       .then(({ product_categories, limit, offset, count }) => {
 *         console.log(product_categories.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminProductCategories } from "medusa-react"
 *
 *       function Categories() {
 *         const {
 *           product_categories,
 *           isLoading
 *         } = useAdminProductCategories()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product_categories && !product_categories.length && (
 *               <span>No Categories</span>
 *             )}
 *             {product_categories && product_categories.length > 0 && (
 *               <ul>
 *                 {product_categories.map(
 *                   (category) => (
 *                     <li key={category.id}>{category.name}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Categories
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Categories
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductCategoriesListRes"
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
declare const AdminGetProductCategoriesParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved product categories.
 *
 * @property {number} limit - Limit the number of product categories returned in the list. The default is `100`.
 */
export declare class AdminGetProductCategoriesParams extends AdminGetProductCategoriesParams_base {
    /**
     * Search term to search product categories' names and handles.
     */
    q?: string;
    /**
     * Handle to filter product categories by.
     */
    handle?: string;
    /**
     * Whether to include child product categories in the response.
     */
    include_descendants_tree?: boolean;
    /**
     * Filter product categories by whether they're internal.
     */
    is_internal?: boolean;
    /**
     * Filter product categories by whether they're active.
     */
    is_active?: boolean;
    /**
     * Filter product categories by their associated parent ID.
     */
    parent_category_id?: string | null;
}
