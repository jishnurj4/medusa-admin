import { Relation } from "typeorm";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { Currency } from "./currency";
import { PriceList } from "./price-list";
import { ProductVariant } from "./product-variant";
import { Region } from "./region";
export declare class MoneyAmount extends SoftDeletableEntity {
    currency_code: string;
    currency?: Relation<Currency>;
    amount: number;
    min_quantity: number | null;
    max_quantity: number | null;
    price_list_id: string | null;
    price_list: Relation<PriceList> | null;
    variants: Relation<ProductVariant>[];
    variant: Relation<ProductVariant>;
    variant_id: string;
    region_id: string | null;
    region?: Relation<Region>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
    /**
     * @apiIgnore
     */
    private beforeUpdate;
    /**
     * @apiIgnore
     */
    private afterLoad;
}
/**
 * @schema MoneyAmount
 * title: "Money Amount"
 * description: "A Money Amount represent a price amount, for example, a product variant's price or a price in a price list. Each Money Amount either has a Currency or Region associated with it to indicate the pricing in a given Currency or, for fully region-based pricing, the given price in a specific Region. If region-based pricing is used, the amount will be in the currency defined for the Region."
 * type: object
 * required:
 *   - amount
 *   - created_at
 *   - currency_code
 *   - deleted_at
 *   - id
 *   - max_quantity
 *   - min_quantity
 *   - price_list_id
 *   - region_id
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The money amount's ID
 *     type: string
 *     example: ma_01F0YESHRFQNH5S8Q0PK84YYZN
 *   currency_code:
 *     description: The 3 character currency code that the money amount may belong to.
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency that the money amount may belong to.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   amount:
 *     description: The amount in the smallest currecny unit (e.g. cents 100 cents to charge $1) that the Product Variant will cost.
 *     type: integer
 *     example: 100
 *   min_quantity:
 *     description: The minimum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   max_quantity:
 *     description: The maximum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   price_list_id:
 *     description: The ID of the price list that the money amount may belong to.
 *     nullable: true
 *     type: string
 *     example: pl_01G8X3CKJXCG5VXVZ87H9KC09W
 *   price_list:
 *     description: The details of the price list that the money amount may belong to.
 *     x-expandable: "price_list"
 *     nullable: true
 *     $ref: "#/components/schemas/PriceList"
 *   variant_id:
 *     description: The ID of the Product Variant contained in the Line Item.
 *     nullable: true
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: The details of the product variant that the money amount may belong to.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   region_id:
 *     description: The region's ID
 *     nullable: true
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region that the money amount may belong to.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
