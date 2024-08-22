import { DistributedTransaction } from "./distributed-transaction";
import { TransactionStep } from "./transaction-step";
export { TransactionHandlerType, TransactionState, TransactionStepStatus, } from "@medusajs/utils";
/**
 * Defines the structure and behavior of a single step within a transaction workflow.
 */
export type TransactionStepsDefinition = {
    /**
     * A unique identifier for the transaction step.
     * This is set automatically when declaring a workflow with "createWorkflow"
     */
    uuid?: string;
    /**
     * Specifies the action to be performed in this step.
     * "name" is an alias for action when creating a workflow with "createWorkflow".
     */
    action?: string;
    /**
     * Indicates whether the workflow should continue even if there is a permanent failure in this step.
     * In case it is set to true, the children steps of this step will not be executed and their status will be marked as TransactionStepState.SKIPPED.
     */
    continueOnPermanentFailure?: boolean;
    /**
     * If true, no compensation action will be triggered for this step in case of a failure.
     */
    noCompensation?: boolean;
    /**
     * The maximum number of times this step should be retried in case of temporary failures.
     * The default is 0 (no retries).
     */
    maxRetries?: number;
    /**
     * The interval (in seconds) between retry attempts after a temporary failure.
     * The default is to retry immediately.
     */
    retryInterval?: number;
    /**
     * The interval (in seconds) to retry a step even if its status is "TransactionStepStatus.WAITING".
     */
    retryIntervalAwaiting?: number;
    /**
     * The maximum amount of time (in seconds) to wait for this step to complete.
     * This is NOT an execution timeout, the step will always be executed and wait for its response.
     * If the response is not received within the timeout set, it will be marked as "TransactionStepStatus.TIMEOUT" and the workflow will be reverted as soon as it receives the response.
     */
    timeout?: number;
    /**
     * If true, the step is executed asynchronously. This means that the workflow will not wait for the response of this step.
     * Async steps require to have their responses set using "setStepSuccess" or "setStepFailure", unless it is combined with "backgroundExecution: true".
     * If combined with a timeout, and any response is not set within that interval, the step will be marked as "TransactionStepStatus.TIMEOUT" and the workflow will be reverted immediately.
     */
    async?: boolean;
    /**
     * It applies to "async" steps only, allowing them to run in the background and automatically complete without external intervention.
     * It is ideal for time-consuming tasks that will be complete after the execution, contrasting with standard "async" operations that require a response to be set in a later stage.
     */
    backgroundExecution?: boolean;
    /**
     * If true, the compensation function for this step is executed asynchronously. Which means, the response has to be set using "setStepSuccess" or "setStepFailure".
     */
    compensateAsync?: boolean;
    /**
     * If true, the workflow will not wait for their sibling steps to complete before moving to the next step.
     */
    noWait?: boolean;
    /**
     * If true, the response of this step will be stored.
     * Default is true.
     */
    saveResponse?: boolean;
    /**
     * Defines the next step(s) to execute after this step. Can be a single step or an array of steps.
     */
    next?: TransactionStepsDefinition | TransactionStepsDefinition[];
};
/**
 * Defines the options for a transaction model, which are applicable to the entire workflow.
 */
export type TransactionModelOptions = {
    /**
     * The global timeout for the entire transaction workflow (in seconds).
     */
    timeout?: number;
    /**
     * If true, the state of the transaction will be persisted.
     */
    store?: boolean;
    /**
     * TBD
     */
    retentionTime?: number;
    /**
     * If true, the execution details of each step will be stored.
     */
    storeExecution?: boolean;
};
export type TransactionModel = {
    id: string;
    flow: TransactionStepsDefinition;
    hash: string;
    options?: TransactionModelOptions;
};
export declare enum DistributedTransactionEvent {
    BEGIN = "begin",
    RESUME = "resume",
    COMPENSATE_BEGIN = "compensateBegin",
    FINISH = "finish",
    TIMEOUT = "timeout",
    STEP_BEGIN = "stepBegin",
    STEP_SUCCESS = "stepSuccess",
    STEP_FAILURE = "stepFailure",
    STEP_AWAITING = "stepAwaiting",
    COMPENSATE_STEP_SUCCESS = "compensateStepSuccess",
    COMPENSATE_STEP_FAILURE = "compensateStepFailure"
}
export type DistributedTransactionEvents = {
    onBegin?: (args: {
        transaction: DistributedTransaction;
    }) => void;
    onResume?: (args: {
        transaction: DistributedTransaction;
    }) => void;
    onFinish?: (args: {
        transaction: DistributedTransaction;
        result?: unknown;
        errors?: unknown[];
    }) => void;
    onTimeout?: (args: {
        transaction: DistributedTransaction;
    }) => void;
    onStepBegin?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
    onStepSuccess?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
    onStepFailure?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
    onStepAwaiting?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
    onCompensateBegin?: (args: {
        transaction: DistributedTransaction;
    }) => void;
    onCompensateStepSuccess?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
    onCompensateStepFailure?: (args: {
        step: TransactionStep;
        transaction: DistributedTransaction;
    }) => void;
};
