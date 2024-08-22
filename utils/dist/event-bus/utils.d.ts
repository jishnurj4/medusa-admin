import { CommonEvents } from "./common-events";
import { KebabCase, SnakeCase } from "@medusajs/types";
type ReturnType<TNames extends string[]> = TNames extends [
    infer TFirstName,
    ...infer TRest
] ? {
    [K in Lowercase<CommonEvents>]: `${KebabCase<TFirstName & string>}.${K}`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_created`]: `${KebabCase<K & string>}.created`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_updated`]: `${KebabCase<K & string>}.updated`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_deleted`]: `${KebabCase<K & string>}.deleted`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_restored`]: `${KebabCase<K & string>}.restored`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_attached`]: `${KebabCase<K & string>}.attached`;
} & {
    [K in TRest[number] as `${SnakeCase<K & string>}_detached`]: `${KebabCase<K & string>}.detached`;
} : {};
/**
 * From the given strings it will produce the event names accordingly.
 * the result will look like:
 * input: 'serviceZone'
 * output: {
 *   created: 'fulfillment-set.created',
 *   updated: 'fulfillment-set.updated',
 *   deleted: 'fulfillment-set.deleted',
 *   restored: 'fulfillment-set.restored',
 *   attached: 'fulfillment-set.attached',
 *   detached: 'fulfillment-set.detached',
 *   service_zone_created: 'service-zone.created',
 *   service_zone_updated: 'service-zone.updated',
 *   service_zone_deleted: 'service-zone.deleted',
 *   service_zone_restored: 'service-zone.restored',
 *   service_zone_attached: 'service-zone.attached',
 *   service_zone_detached: 'service-zone.detached',
 *   ...
 * }
 *
 * @param names
 */
export declare function buildEventNamesFromEntityName<TNames extends string[]>(names: TNames): ReturnType<TNames>;
export {};
//# sourceMappingURL=utils.d.ts.map