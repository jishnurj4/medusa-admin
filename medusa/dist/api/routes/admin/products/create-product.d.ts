import { ProductProductCategoryReq, ProductSalesChannelReq, ProductTagReq, ProductTypeReq } from "../../../../types/product";
import { ProductVariantPricesCreateReq } from "../../../../types/product-variant";
import { ProductStatus } from "../../../../models";
/**
 * @oas [post] /admin/products
 * operationId: "PostProducts"
 * summary: "Create a Product"
 * x-authenticated: true
 * description: "Create a new Product. This API Route can also be used to create a gift card if the `is_giftcard` field is set to `true`."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.create({
 *         title: "Shirt",
 *         is_giftcard: false,
 *         discountable: true
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateProduct } from "medusa-react"
 *
 *       type CreateProductData = {
 *         title: string
 *         is_giftcard: boolean
 *         discountable: boolean
 *         options: {
 *           title: string
 *         }[]
 *         variants: {
 *           title: string
 *           prices: {
 *             amount: number
 *             currency_code :string
 *           }[]
 *           options: {
 *             value: string
 *           }[]
 *         }[],
 *         collection_id: string
 *         categories: {
 *           id: string
 *         }[]
 *         type: {
 *           value: string
 *         }
 *         tags: {
 *           value: string
 *         }[]
 *       }
 *
 *       const CreateProduct = () => {
 *         const createProduct = useAdminCreateProduct()
 *         // ...
 *
 *         const handleCreate = (productData: CreateProductData) => {
 *           createProduct.mutate(productData, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateProduct
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Shirt"
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
}
declare class ProductOptionReq {
    title: string;
}
declare class ProductVariantReq {
    title: string;
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
    prices: ProductVariantPricesCreateReq[];
    options?: ProductVariantOptionReq[];
}
/**
 * @schema AdminPostProductsReq
 * type: object
 * description: "The details of the product to create."
 * required:
 *   - title
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
 *   is_giftcard:
 *     description: A flag to indicate if the Product represents a Gift Card. Purchasing Products with this flag set to `true` will result in a Gift Card being created.
 *     type: boolean
 *     default: false
 *   discountable:
 *     description: A flag to indicate if discounts can be applied to the Line Items generated from this Product
 *     type: boolean
 *     default: true
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
 *     default: draft
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
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a Product Category.
 *           type: string
 *   options:
 *     description: The Options that the Product should have. A new product option will be created for every item in the array.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           description: The title of the Product Option.
 *           type: string
 *   variants:
 *     description: An array of Product Variants to create with the Product. Each product variant must have a unique combination of Product Option values.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           description: The title of the Product Variant.
 *           type: string
 *         sku:
 *           description: The unique SKU of the Product Variant.
 *           type: string
 *         ean:
 *           description: The EAN number of the item.
 *           type: string
 *         upc:
 *           description: The UPC number of the item.
 *           type: string
 *         barcode:
 *           description: A generic GTIN field of the Product Variant.
 *           type: string
 *         hs_code:
 *           description: The Harmonized System code of the Product Variant.
 *           type: string
 *         inventory_quantity:
 *           description: The amount of stock kept of the Product Variant.
 *           type: integer
 *           default: 0
 *         allow_backorder:
 *           description: Whether the Product Variant can be purchased when out of stock.
 *           type: boolean
 *         manage_inventory:
 *           description: Whether Medusa should keep track of the inventory of this Product Variant.
 *           type: boolean
 *         weight:
 *           description: The wieght of the Product Variant.
 *           type: number
 *         length:
 *           description: The length of the Product Variant.
 *           type: number
 *         height:
 *           description: The height of the Product Variant.
 *           type: number
 *         width:
 *           description: The width of the Product Variant.
 *           type: number
 *         origin_country:
 *           description: The country of origin of the Product Variant.
 *           type: string
 *         mid_code:
 *           description: The Manufacturer Identification code of the Product Variant.
 *           type: string
 *         material:
 *           description: The material composition of the Product Variant.
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
 *           description: An array of Product Option values that the variant corresponds to. The option values should be added into the array in the same index as in the `options` field of the product.
 *           externalDocs:
 *             url: https://docs.medusajs.com/modules/products/admin/manage-products#create-a-product
 *             description: Example of how to create a product with options and variants
 *           items:
 *             type: object
 *             required:
 *               - value
 *             properties:
 *               value:
 *                 description: The value to give for the Product Option at the same index in the Product's `options` field.
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
 *     description: The Harmonized System code of the Product.
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
export declare class AdminPostProductsReq {
    title: string;
    subtitle?: string;
    description?: string;
    is_giftcard: boolean;
    discountable: boolean;
    images?: string[];
    thumbnail?: string;
    handle?: string;
    status?: ProductStatus;
    type?: ProductTypeReq;
    collection_id?: string;
    tags?: ProductTagReq[];
    sales_channels?: ProductSalesChannelReq[];
    categories?: ProductProductCategoryReq[];
    options?: ProductOptionReq[];
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
    constructor();
}
