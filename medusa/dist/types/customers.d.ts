import { AddressPayload, DateComparisonOperator } from "./common";
/**
 * Filters used to filter retrieved customers.
 */
export declare class AdminListCustomerSelector {
    /**
     * Search term used to search customers' email, first name, last name.
     */
    q?: string;
    /**
     * Filter customers by whether they have an account.
     */
    has_account?: boolean;
    /**
     * Filter customers by the customer's customer groups.
     */
    groups?: string[];
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
    /**
     * Date filters to apply on the customers' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the customers' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
}
export type CreateCustomerInput = {
    email: string;
    password?: string;
    password_hash?: string;
    has_account?: boolean;
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
};
export type UpdateCustomerInput = {
    password?: string;
    metadata?: Record<string, unknown>;
    billing_address?: AddressPayload | string;
    billing_address_id?: string;
    groups?: {
        id: string;
    }[];
    email?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
};
