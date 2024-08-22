import { Relation } from "typeorm";
import { GiftCard } from "./gift-card";
import { Order } from "./order";
export declare class GiftCardTransaction {
    id: string;
    gift_card_id: string;
    gift_card: Relation<GiftCard>;
    order_id: string;
    order: Relation<Order>;
    amount: number;
    created_at: Date;
    is_taxable: boolean;
    tax_rate: number | null;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema GiftCardTransaction
 * title: "Gift Card Transaction"
 * description: "Gift Card Transactions are created once a Customer uses a Gift Card to pay for their Order."
 * type: object
 * required:
 *   - amount
 *   - created_at
 *   - gift_card_id
 *   - id
 *   - is_taxable
 *   - order_id
 *   - tax_rate
 * properties:
 *   id:
 *     description: The gift card transaction's ID
 *     type: string
 *     example: gct_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   gift_card_id:
 *     description: The ID of the Gift Card that was used in the transaction.
 *     type: string
 *     example: gift_01G8XKBPBQY2R7RBET4J7E0XQZ
 *   gift_card:
 *     description: The details of the gift card associated used in this transaction.
 *     x-expandable: "gift_card"
 *     nullable: true
 *     $ref: "#/components/schemas/GiftCard"
 *   order_id:
 *     description: The ID of the order that the gift card was used for payment.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the gift card was used for payment.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   amount:
 *     description: The amount that was used from the Gift Card.
 *     type: integer
 *     example: 10
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   is_taxable:
 *     description: Whether the transaction is taxable or not.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   tax_rate:
 *     description: The tax rate of the transaction
 *     nullable: true
 *     type: number
 *     example: 0
 */
