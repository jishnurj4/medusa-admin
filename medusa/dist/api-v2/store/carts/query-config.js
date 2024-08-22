"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveTransformQueryConfig = exports.defaultStoreCartFields = void 0;
exports.defaultStoreCartFields = [
    "id",
    "currency_code",
    "email",
    "created_at",
    "updated_at",
    "total",
    "subtotal",
    "tax_total",
    "discount_total",
    "discount_tax_total",
    "original_total",
    "original_tax_total",
    "item_total",
    "item_subtotal",
    "item_tax_total",
    "original_item_total",
    "original_item_subtotal",
    "original_item_tax_total",
    "shipping_total",
    "shipping_subtotal",
    "shipping_tax_total",
    "original_shipping_tax_total",
    "original_shipping_tax_subtotal",
    "original_shipping_total",
    "items.id",
    "items.variant_id",
    "items.product_id",
    "items.product_title",
    "items.product_description",
    "items.product_subtitle",
    "items.product_type",
    "items.product_collection",
    "items.product_handle",
    "items.variant_sku",
    "items.variant_barcode",
    "items.variant_title",
    "items.created_at",
    "items.updated_at",
    "items.title",
    "items.quantity",
    "items.unit_price",
    "items.tax_lines.id",
    "items.tax_lines.description",
    "items.tax_lines.code",
    "items.tax_lines.rate",
    "items.tax_lines.provider_id",
    "items.adjustments.id",
    "items.adjustments.code",
    "items.adjustments.amount",
    "customer.id",
    "customer.email",
    "customer.groups.id",
    "shipping_methods.tax_lines.id",
    "shipping_methods.tax_lines.description",
    "shipping_methods.tax_lines.code",
    "shipping_methods.tax_lines.rate",
    "shipping_methods.tax_lines.provider_id",
    "shipping_methods.shipping_option_id",
    "shipping_methods.amount",
    "shipping_methods.adjustments.id",
    "shipping_methods.adjustments.code",
    "shipping_methods.adjustments.amount",
    "shipping_address.id",
    "shipping_address.first_name",
    "shipping_address.last_name",
    "shipping_address.address_1",
    "shipping_address.address_2",
    "shipping_address.city",
    "shipping_address.postal_code",
    "shipping_address.country_code",
    "shipping_address.region_code",
    "shipping_address.province",
    "shipping_address.phone",
    "billing_address.id",
    "billing_address.first_name",
    "billing_address.last_name",
    "billing_address.address_1",
    "billing_address.address_2",
    "billing_address.city",
    "billing_address.postal_code",
    "billing_address.country_code",
    "billing_address.region_code",
    "billing_address.phone",
    "region.id",
    "region.name",
    "region.currency_code",
    "region.automatic_taxes",
    "sales_channel_id",
    // TODO: To be updated when payment sessions are introduces in the Rest API
    "payment_collection.id",
    "payment_collection.amount",
    "payment_collection.payment_sessions",
];
var allowedFields = __spreadArray([], __read(exports.defaultStoreCartFields), false);
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultStoreCartFields,
    allowed: allowedFields,
    isList: false,
};
//# sourceMappingURL=query-config.js.map