import { Cart, Order } from "..";
import { RequirementType } from "../models/shipping-option-requirement";
import { ShippingOptionPriceType } from "../models/shipping-option";
export type ShippingRequirement = {
    type: RequirementType;
    amount: number;
    id: string;
};
export type ShippingMethodUpdate = {
    data?: any;
    price?: number;
    return_id?: string;
    swap_id?: string;
    order_id?: string;
    claim_order_id?: string | null;
};
export type CreateShippingMethod = {
    data?: any;
    shipping_option_id?: string;
    price?: number;
    return_id?: string;
    swap_id?: string;
    cart_id?: string;
    order_id?: string;
    draft_order_id?: string;
    claim_order_id?: string;
};
export type CreateShippingMethodDto = CreateShippingMethod & {
    cart?: Cart;
    order?: Order;
};
export type CreateShippingOptionInput = {
    price_type: ShippingOptionPriceType;
    name: string;
    region_id: string;
    profile_id: string;
    provider_id: string;
    data: Record<string, unknown>;
    includes_tax?: boolean;
    amount?: number;
    is_return?: boolean;
    admin_only?: boolean;
    metadata?: Record<string, unknown>;
    requirements?: RequirementInput[];
};
export type RequirementInput = {
    type: RequirementType;
    amount: number;
};
export type ValidateRequirementTypeInput = {
    id?: string;
    type: RequirementType;
    amount: number;
};
export type CreateCustomShippingOptionInput = {
    price: number;
    shipping_option_id: string;
    cart_id?: string;
    metadata?: Record<string, unknown>;
};
export type UpdateShippingOptionInput = {
    metadata?: Record<string, unknown>;
    price_type?: ShippingOptionPriceType;
    amount?: number;
    name?: string;
    admin_only?: boolean;
    is_return?: boolean;
    requirements?: RequirementInput[];
    region_id?: string;
    provider_id?: string;
    profile_id?: string;
    data?: string;
    includes_tax?: boolean;
};
export type ValidatePriceTypeAndAmountInput = {
    amount?: number;
    price_type?: ShippingOptionPriceType;
};
