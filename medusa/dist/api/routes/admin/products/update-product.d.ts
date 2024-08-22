import { ProductStatus } from "../../../../models";
import { ProductProductCategoryReq, ProductSalesChannelReq, ProductTagReq, ProductTypeReq } from "../../../../types/product";
import { ProductVariantPricesUpdateReq } from "../../../../types/product-variant";
/**
 * @oas [post] /admin/products/{id}
 * operationId: "PostProductsProduct"
 * summary: "Update a Product"
 * description: "Update a Product's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.update(productId, {
 *         title: "Shirt",
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateProduct } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *       }
 *
 *       const Product = ({ productId }: Props) => {
 *         const updateProduct = useAdminUpdateProduct(
 *           productId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           title: string
 *         ) => {
 *           updateProduct.mutate({
 *             title,
 *           }, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Product
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Size"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsRes"
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
declare class ProductVariantOptionReq {
    value: string;
    option_id: string;
}
declare class ProductVariantReq {
    id?: string;
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: ProductVariantPricesUpdateReq[];
    options?: ProductVariantOptionReq[];
}
/**
 * @schema AdminPostProductsProductReq
 * type: object
 * description: "The details to update of the product."
 * properties:
 *   title:
 *     description: "The title of the Product"
 *     type: string
 *   subtitle:
 *     description: "The subtitle of the Product"
 *     type: string
 *   description:
 *     description: "The description of the Product."
 *     type: string
 *   discountable:
 *     description: A flag to indicate if discounts can be applied to the Line Items generated from this Product
 *     type: boolean
 *   images:
 *     description: An array of images of the Product. Each value in the array is a URL to the image. You can use the upload API Routes to upload the image and obtain a URL.
 *     type: array
 *     items:
 *       type: string
 *   thumbnail:
 *     description: The thumbnail to use for the Product. The value is a URL to the thumbnail. You can use the upload API Routes to upload the thumbnail and obtain a URL.
 *     type: string
 *   handle:
 *     description: A unique handle to identify the Product by. If not provided, the kebab-case version of the product title will be used. This can be used as a slug in URLs.
 *     type: string
 *   status:
 *     description: The status of the product. The product is shown to the customer only if its status is `published`.
 *     type: string
 *     enum: [draft, proposed, published, rejected]
 *   type:
 *     description: The Product Type to associate the Product with.
 *     type: object
 *     required:
 *       - value
 *     properties:
 *       id:
 *         description: The ID of an existing Product Type. If not provided, a new product type will be created.
 *         type: string
 *       value:
 *         description: The value of the Product Type.
 *         type: string
 *   collection_id:
 *     description: The ID of the Product Collection the Product belongs to.
 *     type: string
 *   tags:
 *     description: Product Tags to associate the Product with.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         id:
 *           description: The ID of an existing Product Tag. If not provided, a new product tag will be created.
 *           type: string
 *         value:
 *           description: The value of the Tag. If the `id` is provided, the value of the existing tag will be updated.
 *           type: string
 *   sales_channels:
 *     description: "Sales channels to associate the Product with."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of an existing Sales channel.
 *           type: string
 *   categories:
 *     description: "Product categories to add the Product to."
 *     x-featureFlag: "product_categories"
 *     type: array
 *     items:
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a Product Category.
 *           type: string
 *   variants:
 *     description: An array of Product Variants to create with the Product. Each product variant must have a unique combination of Product Option values.
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           description: The id of an existing product variant. If provided, the details of the product variant will be updated. If not, a new product variant will be created.
 *           type: string
 *         title:
 *           description: The title of the product variant.
 *           type: string
 *         sku:
 *           description: The unique SKU of the product variant.
 *           type: string
 *         ean:
 *           description: The EAN number of the product variant.
 *           type: string
 *         upc:
 *           description: The UPC number of the product variant.
 *           type: string
 *         barcode:
 *           description: A generic GTIN field of the product variant.
 *           type: string
 *         hs_code:
 *           description: The Harmonized System code of the product variant.
 *           type: string
 *         inventory_quantity:
 *           description: The amount of stock kept of the product variant.
 *           type: integer
 *         allow_backorder:
 *           description: Whether the product variant can be purchased when out of stock.
 *           type: boolean
 *         manage_inventory:
 *           description: Whether Medusa should keep track of the inventory of this product variant.
 *           type: boolean
 *         weight:
 *           description: The weight of the product variant.
 *           type: number
 *         length:
 *           description: The length of the product variant.
 *           type: number
 *         height:
 *           description: The height of the product variant.
 *           type: number
 *         width:
 *           description: The width of the product variant.
 *           type: number
 *         origin_country:
 *           description: The country of origin of the product variant.
 *           type: string
 *         mid_code:
 *           description: The Manufacturer Identification code of the product variant.
 *           type: string
 *         material:
 *           description: The material composition of the product variant.
 *           type: string
 *         metadata:
 *           description: An optional set of key-value pairs with additional information.
 *           type: object
 *           externalDocs:
 *             description: "Learn about the metadata attribute, and how to delete and update it."
 *             url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *         prices:
 *           type: array
 *           description: An array of product variant prices. A product variant can have different prices for each region or currency code.
 *           externalDocs:
 *             url: https://docs.medusajs.com/modules/products/admin/manage-products#product-variant-prices
 *             description: Product variant pricing.
 *           items:
 *             type: object
 *             required:
 *               - amount
 *             properties:
 *               id:
 *                 description: The ID of the Price. If provided, the existing price will be updated. Otherwise, a new price will be created.
 *                 type: string
 *               region_id:
 *                 description: The ID of the Region the price will be used in. This is only required if `currency_code` is not provided.
 *                 type: string
 *               currency_code:
 *                 description: The 3 character ISO currency code the price will be used in. This is only required if `region_id` is not provided.
 *                 type: string
 *                 externalDocs:
 *                   url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *                   description: See a list of codes.
 *               amount:
 *                 description: The price amount.
 *                 type: integer
 *               min_quantity:
 *                 description: The minimum quantity required to be added to the cart for the price to be used.
 *                 type: integer
 *               max_quantity:
 *                 description: The maximum quantity required to be added to the cart for the price to be used.
 *                 type: integer
 *         options:
 *           type: array
 *           description: An array of Product Option values that the variant corresponds to.
 *           items:
 *             type: object
 *             required:
 *               - option_id
 *               - value
 *             properties:
 *               option_id:
 *                 description: The ID of the Option.
 *                 type: string
 *               value:
 *                 description: The value of the Product Option.
 *                 type: string
 *   weight:
 *     description: The weight of the Product.
 *     type: number
 *   length:
 *     description: The length of the Product.
 *     type: number
 *   height:
 *     description: The height of the Product.
 *     type: number
 *   width:
 *     description: The width of the Product.
 *     type: number
 *   hs_code:
 *     description: The Harmonized System code of the product variant.
 *     type: string
 *   origin_country:
 *     description: The country of origin of the Product.
 *     type: string
 *   mid_code:
 *     description: The Manufacturer Identification code of the Product.
 *     type: string
 *   material:
 *     description: The material composition of the Product.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostProductsProductReq {
    title?: string;
    subtitle?: string;
    description?: string;
    discountable?: boolean;
    images?: string[];
    thumbnail?: string;
    handle?: string;
    status?: ProductStatus;
    type?: ProductTypeReq;
    collection_id?: string;
    tags?: ProductTagReq[];
    sales_channels?: ProductSalesChannelReq[] | null;
    categories?: ProductProductCategoryReq[];
    variants?: ProductVariantReq[];
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
}
