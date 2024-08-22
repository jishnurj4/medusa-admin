import { Job, Queue } from "bullmq";
import { ConfigModule, Logger } from "../types/global";
type InjectedDependencies = {
    logger: Logger;
};
type ScheduledJobHandler<T = unknown> = (data: T, eventName: string) => Promise<void>;
export type CreateJobOptions = {
    keepExisting?: boolean;
};
export default class JobSchedulerService {
    protected readonly config_: ConfigModule;
    protected readonly logger_: Logger;
    protected readonly handlers_: Map<string | symbol, ScheduledJobHandler[]>;
    protected readonly queue_: Queue;
    constructor({ logger }: InjectedDependencies, config: ConfigModule, singleton?: boolean);
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    protected registerHandler(event: string | symbol, handler: ScheduledJobHandler): void;
    /**
     * Handles incoming scheduled jobs.
     * @param job The job object
     * @return resolves to the results of the subscriber calls.
     */
    protected scheduledJobsWorker: <T>(job: {
        data: {
            eventName: string;
            data: T;
        };
    }) => Promise<unknown[]>;
    /**
     * Registers a scheduled job.
     * @param eventName - the name of the event
     * @param data - the data to be sent with the event
     * @param schedule - the schedule expression
     * @param handler - the handler to call on the job
     * @param options - the create job options
     * @return added job
     */
    create<T>(eventName: string, data: T, schedule: string, handler: ScheduledJobHandler, options: CreateJobOptions): Promise<Job>;
}
export {};
