import { BatchMethodResponse, MedusaContainer, ProductDTO, ProductVariantDTO } from "@medusajs/types";
export declare const remapKeysForProduct: (selectFields: string[]) => string[];
export declare const remapKeysForVariant: (selectFields: string[]) => string[];
export declare const remapProductResponse: (product: ProductDTO) => {
    variants: {
        prices: any;
        price_set: undefined;
        id: string;
        title: string;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        inventory_quantity: number;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        hs_code?: string | null | undefined;
        origin_country?: string | null | undefined;
        mid_code?: string | null | undefined;
        material?: string | null | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        options: import("@medusajs/types").ProductOptionValueDTO[];
        metadata?: Record<string, unknown> | null | undefined;
        product?: ProductDTO | null | undefined;
        product_id?: string | null | undefined;
        variant_rank?: number | null | undefined;
        created_at: string | Date;
        updated_at: string | Date;
        deleted_at: string | Date;
    }[];
    id: string;
    title: string;
    handle?: string | null | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    is_giftcard: boolean;
    status: import("@medusajs/types").ProductStatus;
    thumbnail?: string | null | undefined;
    width?: number | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    collection?: import("@medusajs/types").ProductCollectionDTO | null | undefined;
    collection_id?: string | null | undefined;
    categories?: import("@medusajs/types").ProductCategoryDTO[] | null | undefined;
    type?: import("@medusajs/types").ProductTypeDTO | null | undefined;
    type_id?: string | null | undefined;
    tags: import("@medusajs/types").ProductTagDTO[];
    options: import("@medusajs/types").ProductOptionDTO[];
    images: import("@medusajs/types").ProductImageDTO[];
    discountable?: boolean | undefined;
    external_id?: string | null | undefined;
    created_at?: string | Date | undefined;
    updated_at?: string | Date | undefined;
    deleted_at?: string | Date | undefined;
    metadata?: Record<string, unknown> | undefined;
};
export declare const remapVariantResponse: (variant: ProductVariantDTO) => {
    prices: any;
    price_set: undefined;
    id: string;
    title: string;
    sku?: string | null | undefined;
    barcode?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    inventory_quantity: number;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    hs_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    options: import("@medusajs/types").ProductOptionValueDTO[];
    metadata?: Record<string, unknown> | null | undefined;
    product?: ProductDTO | null | undefined;
    product_id?: string | null | undefined;
    variant_rank?: number | null | undefined;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date;
};
export declare const refetchProduct: (productId: string, scope: MedusaContainer, fields: string[]) => Promise<any>;
export declare const refetchBatchProducts: (batchResult: BatchMethodResponse<ProductDTO>, scope: MedusaContainer, fields: string[]) => Promise<{
    created: ProductDTO[];
    updated: ProductDTO[];
    deleted: {
        ids: string[];
        object: string;
        deleted: boolean;
    };
}>;
export declare const refetchBatchVariants: (batchResult: BatchMethodResponse<ProductVariantDTO>, scope: MedusaContainer, fields: string[]) => Promise<{
    created: ProductVariantDTO[];
    updated: ProductVariantDTO[];
    deleted: {
        ids: string[];
        object: string;
        deleted: boolean;
    };
}>;
