import { BatchJobResultError, BatchJobResultStatDescriptor, BatchJobStatus } from "../types/batch-job";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { User } from "./user";
export declare class BatchJob extends SoftDeletableEntity {
    type: string;
    created_by: string | null;
    created_by_user: User;
    context: Record<string, unknown>;
    result: {
        count?: number;
        advancement_count?: number;
        progress?: number;
        errors?: (BatchJobResultError | string)[];
        stat_descriptors?: BatchJobResultStatDescriptor[];
        file_key?: string;
        file_size?: number;
    } & Record<string, unknown>;
    dry_run: boolean;
    pre_processed_at?: Date;
    processing_at?: Date;
    confirmed_at?: Date;
    completed_at?: Date;
    canceled_at?: Date;
    failed_at?: Date;
    status: BatchJobStatus;
    /**
     * @apiIgnore
     */
    loadStatus(): void;
    /**
     * @apiIgnore
     */
    private beforeInsert;
    toJSON(): this;
}
/**
 * @schema BatchJob
 * title: "Batch Job"
 * description: "A Batch Job indicates an asynchronus task stored in the Medusa backend. Its status determines whether it has been executed or not."
 * type: object
 * required:
 *   - canceled_at
 *   - completed_at
 *   - confirmed_at
 *   - context
 *   - created_at
 *   - created_by
 *   - deleted_at
 *   - dry_run
 *   - failed_at
 *   - id
 *   - pre_processed_at
 *   - processing_at
 *   - result
 *   - status
 *   - type
 *   - updated_at
 * properties:
 *  id:
 *    description: The unique identifier for the batch job.
 *    type: string
 *    example: batch_01G8T782965PYFG0751G0Z38B4
 *  type:
 *    description: The type of batch job.
 *    type: string
 *    enum:
 *      - product-import
 *      - product-export
 *  status:
 *    description: The status of the batch job.
 *    type: string
 *    enum:
 *      - created
 *      - pre_processed
 *      - confirmed
 *      - processing
 *      - completed
 *      - canceled
 *      - failed
 *    default: created
 *  created_by:
 *    description: The unique identifier of the user that created the batch job.
 *    nullable: true
 *    type: string
 *    example: usr_01G1G5V26F5TB3GPAPNJ8X1S3V
 *  created_by_user:
 *    description: The details of the user that created the batch job.
 *    x-expandable: "created_by_user"
 *    nullable: true
 *    $ref: "#/components/schemas/User"
 *  context:
 *    description: The context of the batch job, the type of the batch job determines what the context should contain.
 *    nullable: true
 *    type: object
 *    example:
 *      shape:
 *        prices:
 *          - region: null
 *            currency_code: "eur"
 *        dynamicImageColumnCount: 4
 *        dynamicOptionColumnCount: 2
 *      list_config:
 *        skip: 0
 *        take: 50
 *        order:
 *          created_at: "DESC"
 *        relations:
 *          - variants
 *          - variant.prices
 *          - images
 *  dry_run:
 *    description: Specify if the job must apply the modifications or not.
 *    type: boolean
 *    default: false
 *  result:
 *    description: The result of the batch job.
 *    nullable: true
 *    allOf:
 *    - type: object
 *      example: {}
 *    - type: object
 *      properties:
 *        count:
 *          type: number
 *        advancement_count:
 *          type: number
 *        progress:
 *          type: number
 *        errors:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            code:
 *              oneOf:
 *                - type: string
 *                - type: number
 *            err:
 *              type: array
 *        stat_descriptors:
 *          type: object
 *          properties:
 *            key:
 *              type: string
 *            name:
 *              type: string
 *            message:
 *              type: string
 *        file_key:
 *          type: string
 *        file_size:
 *          type: number
 *    example:
 *      errors:
 *        - err: []
 *          code: "unknown"
 *          message: "Method not implemented."
 *      stat_descriptors:
 *        - key: "product-export-count"
 *          name: "Product count to export"
 *          message: "There will be 8 products exported by this action"
 *  pre_processed_at:
 *    description: The date from which the job has been pre-processed.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  processing_at:
 *    description: The date the job is processing at.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  confirmed_at:
 *    description: The date when the confirmation has been done.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  completed_at:
 *    description: The date of the completion.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  canceled_at:
 *    description: The date of the concellation.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  failed_at:
 *    description: The date when the job failed.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  created_at:
 *    description: The date with timezone at which the resource was created.
 *    type: string
 *    format: date-time
 *  updated_at:
 *    description: The date with timezone at which the resource was last updated.
 *    type: string
 *    format: date-time
 *  deleted_at:
 *    description: The date with timezone at which the resource was deleted.
 *    nullable: true
 *    type: string
 *    format: date-time
 */
