import { Relation } from "typeorm";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { ClaimItem } from "./claim-item";
export declare class ClaimImage extends SoftDeletableEntity {
    claim_item_id: string;
    claim_item: Relation<ClaimItem>;
    url: string;
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema ClaimImage
 * title: "Claim Image"
 * description: "The details of an image attached to a claim."
 * type: object
 * required:
 *   - claim_item_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - updated_at
 *   - url
 * properties:
 *   id:
 *     description: The claim image's ID
 *     type: string
 *     example: cimg_01G8ZH853Y6TFXWPG5EYE81X63
 *   claim_item_id:
 *     description: The ID of the claim item associated with the image
 *     type: string
 *   claim_item:
 *     description: The details of the claim item this image is associated with.
 *     nullable: true
 *     x-expandable: "claim_item"
 *     $ref: "#/components/schemas/ClaimItem"
 *   url:
 *     description: The URL of the image
 *     type: string
 *     format: uri
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
