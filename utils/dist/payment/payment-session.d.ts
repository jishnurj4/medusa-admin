/**
 * @enum
 *
 * The status of a payment session.
 */
export declare enum PaymentSessionStatus {
    /**
     * The payment is authorized.
     */
    AUTHORIZED = "authorized",
    /**
     * The payment is pending.
     */
    PENDING = "pending",
    /**
     * The payment requires an action.
     */
    REQUIRES_MORE = "requires_more",
    /**
     * An error occurred while processing the payment.
     */
    ERROR = "error",
    /**
     * The payment is canceled.
     */
    CANCELED = "canceled"
}
//# sourceMappingURL=payment-session.d.ts.map