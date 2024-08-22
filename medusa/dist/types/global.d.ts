import { CommonTypes } from "@medusajs/types";
import { Request } from "express";
import { MedusaContainer as coreMedusaContainer } from "medusa-core-utils";
import { Customer, User } from "../models";
import { FindConfig, RequestQueryFields } from "./common";
declare global {
    namespace Express {
        interface Request {
            user?: (User | Customer) & {
                customer_id?: string;
                userId?: string;
            };
            scope: MedusaContainer;
            validatedQuery: RequestQueryFields & Record<string, unknown>;
            validatedBody: unknown;
            /**
             * TODO: shouldn't this correspond to returnable fields instead of allowed fields? also it is used by the cleanResponseData util
             */
            allowedProperties: string[];
            /**
             * An object containing the select, relation, skip, take and order to be used with medusa internal services
             */
            listConfig: FindConfig<unknown>;
            /**
             * An object containing the select, relation to be used with medusa internal services
             */
            retrieveConfig: FindConfig<unknown>;
            /**
             * An object containing fields and variables to be used with the remoteQuery
             */
            remoteQueryConfig: {
                fields: string[];
                pagination: {
                    order?: Record<string, string>;
                    skip?: number;
                    take?: number;
                };
            };
            /**
             * An object containing the fields that are filterable e.g `{ id: Any<String> }`
             */
            filterableFields: Record<string, unknown>;
            includes?: Record<string, boolean>;
            /**
             * An array of fields and relations that are allowed to be queried, this can be set by the
             * consumer as part of a middleware and it will take precedence over the defaultAllowedFields
             * @deprecated use `allowed` instead
             */
            allowedFields?: string[];
            /**
             * An array of fields and relations that are allowed to be queried, this can be set by the
             * consumer as part of a middleware and it will take precedence over the defaultAllowedFields set
             * by the api
             */
            allowed?: string[];
            errors: string[];
            requestId?: string;
        }
    }
}
export type ExtendedRequest<TEntity> = Request & {
    resource: TEntity;
};
export type ClassConstructor<T> = {
    new (...args: unknown[]): T;
};
export type MedusaContainer = coreMedusaContainer;
export type Logger = {
    panic: (data: any) => void;
    shouldLog: (level: string) => void;
    setLogLevel: (level: string) => void;
    unsetLogLevel: () => void;
    activity: (message: string, config?: any) => void;
    progress: (activityId: any, message: any) => void;
    error: (messageOrError: any, error?: any) => void;
    failure: (activityId: any, message: any) => void;
    success: (activityId: any, message: any) => void;
    debug: (message: any) => void;
    info: (message: any) => void;
    warn: (message: any) => void;
    log: (...args: any[]) => void;
};
export type Constructor<T> = new (...args: any[]) => T;
export type ConfigModule = CommonTypes.ConfigModule;
