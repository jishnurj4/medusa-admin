import { ServiceZoneResponse } from "./service-zone";
/**
 * @experimental
 */
export interface FulfillmentSetResponse {
    id: string;
    name: string;
    type: string;
    metadata: Record<string, unknown> | null;
    service_zones: ServiceZoneResponse[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}
/**
 * @experimental
 */
export interface AdminFulfillmentSetResponse {
    fulfillment_set: FulfillmentSetResponse;
}
//# sourceMappingURL=fulfillment-set.d.ts.map