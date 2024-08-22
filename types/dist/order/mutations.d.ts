import { BigNumberInput } from "../totals";
import { OrderItemDTO, OrderLineItemDTO } from "./common";
/** ADDRESS START */
export interface UpsertOrderAddressDTO {
    customer_id?: string;
    company?: string;
    first_name?: string;
    last_name?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    country_code?: string;
    province?: string;
    postal_code?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
}
export interface UpdateOrderAddressDTO extends UpsertOrderAddressDTO {
    id: string;
}
export interface CreateOrderAddressDTO extends UpsertOrderAddressDTO {
}
/** ADDRESS END */
/** ORDER START */
export interface CreateOrderDTO {
    region_id?: string;
    customer_id?: string;
    sales_channel_id?: string;
    status?: string;
    email?: string;
    currency_code?: string;
    shipping_address_id?: string;
    billing_address_id?: string;
    shipping_address?: CreateOrderAddressDTO | UpdateOrderAddressDTO;
    billing_address?: CreateOrderAddressDTO | UpdateOrderAddressDTO;
    no_notification?: boolean;
    items?: CreateOrderLineItemDTO[];
    shipping_methods?: Omit<CreateOrderShippingMethodDTO, "order_id">[];
    transactions?: Omit<CreateOrderTransactionDTO, "order_id">[];
    metadata?: Record<string, unknown>;
    promo_codes?: string[];
}
export interface UpdateOrderDTO {
    id?: string;
    version?: number;
    region_id?: string;
    customer_id?: string;
    sales_channel_id?: string;
    items?: CreateOrderLineItemDTO[];
    shipping_address?: CreateOrderAddressDTO | UpdateOrderAddressDTO;
    billing_address?: CreateOrderAddressDTO | UpdateOrderAddressDTO;
    email?: string;
    no_notification?: boolean;
    metadata?: Record<string, unknown>;
}
/** ORDER END */
/** ADJUSTMENT START */
export interface CreateOrderAdjustmentDTO {
    code?: string;
    amount: BigNumberInput;
    description?: string;
    promotion_id?: string;
    provider_id?: string;
}
export interface UpdateOrderAdjustmentDTO {
    id: string;
    code?: string;
    amount: BigNumberInput;
    description?: string;
    promotion_id?: string;
    provider_id?: string;
}
export interface CreateOrderLineItemAdjustmentDTO extends CreateOrderAdjustmentDTO {
    item_id: string;
}
export interface UpdateOrderLineItemAdjustmentDTO extends UpdateOrderAdjustmentDTO {
    item_id: string;
}
export interface UpsertOrderLineItemAdjustmentDTO {
    id?: string;
    item_id: string;
    code?: string;
    amount?: BigNumberInput;
    description?: string;
    promotion_id?: string;
    provider_id?: string;
}
/** ADJUSTMENTS END */
/** TAX LINES START */
export interface CreateOrderTaxLineDTO {
    description?: string;
    tax_rate_id?: string;
    code: string;
    rate: BigNumberInput;
    provider_id?: string;
}
export interface UpdateOrderTaxLineDTO {
    id: string;
    description?: string;
    tax_rate_id?: string;
    code?: string;
    rate?: BigNumberInput;
    provider_id?: string;
}
export interface CreateOrderShippingMethodTaxLineDTO extends CreateOrderTaxLineDTO {
}
export interface UpdateOrderShippingMethodTaxLineDTO extends UpdateOrderTaxLineDTO {
}
export interface CreateOrderLineItemTaxLineDTO extends CreateOrderTaxLineDTO {
}
export interface UpdateOrderLineItemTaxLineDTO extends UpdateOrderTaxLineDTO {
}
/** TAX LINES END */
/** LINE ITEMS START */
export interface CreateOrderLineItemDTO {
    title: string;
    subtitle?: string;
    thumbnail?: string;
    order_id?: string;
    quantity: BigNumberInput;
    product_id?: string;
    product_title?: string;
    product_description?: string;
    product_subtitle?: string;
    product_type?: string;
    product_collection?: string;
    product_handle?: string;
    variant_id?: string;
    variant_sku?: string;
    variant_barcode?: string;
    variant_title?: string;
    variant_option_values?: Record<string, unknown>;
    requires_shipping?: boolean;
    is_discountable?: boolean;
    is_tax_inclusive?: boolean;
    compare_at_unit_price?: BigNumberInput;
    unit_price: BigNumberInput;
    tax_lines?: CreateOrderTaxLineDTO[];
    adjustments?: CreateOrderAdjustmentDTO[];
    metadata?: Record<string, unknown>;
}
export interface CreateOrderLineItemForOrderDTO extends CreateOrderLineItemDTO {
    order_id: string;
}
export interface UpdateOrderLineItemWithSelectorDTO {
    selector: Partial<OrderLineItemDTO>;
    data: Partial<UpdateOrderLineItemDTO>;
}
export interface UpdateOrderLineItemDTO extends Omit<CreateOrderLineItemDTO, "tax_lines" | "adjustments" | "title" | "quantity" | "unit_price"> {
    id: string;
    title?: string;
    quantity?: BigNumberInput;
    unit_price?: BigNumberInput;
    tax_lines?: UpdateOrderTaxLineDTO[] | CreateOrderTaxLineDTO[];
    adjustments?: UpdateOrderAdjustmentDTO[] | CreateOrderAdjustmentDTO[];
}
/** LINE ITEMS END */
/** SHIPPING METHODS START */
export interface CreateOrderShippingMethodDTO {
    name: string;
    order_id: string;
    version?: number;
    amount: BigNumberInput;
    shipping_option_id?: string;
    data?: Record<string, unknown>;
    tax_lines?: CreateOrderTaxLineDTO[];
    adjustments?: CreateOrderAdjustmentDTO[];
}
export interface UpdateOrderShippingMethodDTO {
    id: string;
    name?: string;
    shipping_option_id?: string;
    amount?: BigNumberInput;
    data?: Record<string, unknown>;
    tax_lines?: UpdateOrderTaxLineDTO[] | CreateOrderTaxLineDTO[];
    adjustments?: CreateOrderAdjustmentDTO[] | UpdateOrderAdjustmentDTO[];
}
export interface CreateOrderShippingMethodAdjustmentDTO {
    shipping_method_id: string;
    code: string;
    amount: BigNumberInput;
    description?: string;
    promotion_id?: string;
    provider_id?: string;
}
export interface UpdateOrderShippingMethodAdjustmentDTO {
    id: string;
    code?: string;
    amount?: BigNumberInput;
    description?: string;
    promotion_id?: string;
    provider_id?: string;
}
/** SHIPPING METHODS END */
/** ORDER CHANGE START */
export interface CreateOrderChangeDTO {
    order_id: string;
    description?: string;
    internal_note?: string;
    requested_by?: string;
    requested_at?: Date;
    created_by?: string;
    metadata?: Record<string, unknown>;
    actions?: CreateOrderChangeActionDTO[];
}
export interface UpdateOrderChangeDTO {
    id: string;
    status?: string;
    description?: string;
    internal_note?: string;
    requested_by?: string;
    requested_at?: Date;
    confirmed_by?: string;
    confirmed_at?: Date;
    declined_by?: string;
    declined_reason?: string;
    declined_at?: Date;
    canceled_by?: string;
    metadata?: Record<string, unknown>;
}
export interface CancelOrderChangeDTO {
    id: string;
    canceled_by?: string;
    metadata?: Record<string, unknown>;
}
export interface DeclineOrderChangeDTO {
    id: string;
    declined_by?: string;
    metadata?: Record<string, unknown>;
}
export interface ConfirmOrderChangeDTO {
    id: string;
    confirmed_by?: string;
    metadata?: Record<string, unknown>;
}
/** ORDER CHANGE END */
/** ORDER CHANGE ACTION START */
export interface CreateOrderChangeActionDTO {
    order_change_id?: string;
    version?: number;
    reference?: string;
    reference_id?: string;
    action: string;
    internal_note?: string;
    amount?: BigNumberInput;
    details?: Record<string, unknown>;
}
export interface UpdateOrderChangeActionDTO {
    id: string;
    internal_note?: string;
}
/** ORDER TRANSACTION START */
export interface CreateOrderTransactionDTO {
    order_id: string;
    amount: BigNumberInput;
    currency_code: string;
    reference?: string;
    reference_id?: string;
    metadata?: Record<string, unknown>;
}
export interface UpdateOrderTransactionDTO {
    id: string;
    amount?: BigNumberInput;
    currency_code?: string;
    reference?: string;
    reference_id?: string;
    metadata?: Record<string, unknown>;
}
/** ORDER TRANSACTION END */
/** ORDER DETAIL START */
export interface UpdateOrderItemDTO {
    id: string;
    order_id?: string;
    version?: number;
    item_id?: string;
    quantity?: BigNumberInput;
    fulfilled_quantity?: BigNumberInput;
    return_requested_quantity?: BigNumberInput;
    return_received_quantity?: BigNumberInput;
    return_dismissed_quantity?: BigNumberInput;
    written_off_quantity?: BigNumberInput;
    metadata?: Record<string, unknown>;
}
export interface UpdateOrderItemWithSelectorDTO {
    selector: Partial<OrderItemDTO>;
    data: Partial<UpdateOrderItemDTO>;
}
/** ORDER DETAIL END */
/** ORDER bundled action flows  */
export interface RegisterOrderFulfillmentDTO {
    order_id: string;
    description?: string;
    internal_note?: string;
    reference?: string;
    reference_id?: string;
    created_by?: string;
    items: {
        id: string;
        quantity: BigNumberInput;
        internal_note?: string;
        metadata?: Record<string, unknown>;
    }[];
    metadata?: Record<string, unknown>;
}
export interface RegisterOrderShipmentDTO {
    order_id: string;
    description?: string;
    internal_note?: string;
    reference?: string;
    created_by?: string;
    shipping_method: Omit<CreateOrderShippingMethodDTO, "order_id"> | string;
    items: {
        id: string;
        quantity: BigNumberInput;
        internal_note?: string;
        metadata?: Record<string, unknown>;
    }[];
    metadata?: Record<string, unknown>;
}
export interface CreateOrderReturnDTO {
    order_id: string;
    description?: string;
    reference?: string;
    internal_note?: string;
    created_by?: string;
    shipping_method: Omit<CreateOrderShippingMethodDTO, "order_id"> | string;
    items: {
        id: string;
        quantity: BigNumberInput;
        internal_note?: string;
        metadata?: Record<string, unknown>;
    }[];
    metadata?: Record<string, unknown>;
}
/** ORDER bundled action flows */
//# sourceMappingURL=mutations.d.ts.map