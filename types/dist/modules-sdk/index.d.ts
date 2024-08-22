import { JoinerRelationship, JoinerServiceConfig, RemoteJoinerOptions, RemoteJoinerQuery } from "../joiner";
import { MedusaContainer } from "../common";
import { RepositoryService } from "../dal";
import { Logger } from "../logger";
export type Constructor<T> = new (...args: any[]) => T;
export * from "../common/medusa-container";
export * from "./internal-module-service";
export * from "./module-provider";
export type LogLevel = "query" | "schema" | "error" | "warn" | "info" | "log" | "migration";
export type LoggerOptions = boolean | "all" | LogLevel[];
export declare enum MODULE_SCOPE {
    INTERNAL = "internal",
    EXTERNAL = "external"
}
export declare enum MODULE_RESOURCE_TYPE {
    SHARED = "shared",
    ISOLATED = "isolated"
}
export type InternalModuleDeclaration = {
    scope: MODULE_SCOPE.INTERNAL;
    resources: MODULE_RESOURCE_TYPE;
    dependencies?: string[];
    definition?: Partial<ModuleDefinition>;
    resolve?: string | ModuleExports;
    options?: Record<string, unknown>;
    /**
     * If multiple modules are registered with the same key, the alias can be used to differentiate them
     */
    alias?: string;
    /**
     * If the module is the main module for the key when multiple ones are registered
     */
    main?: boolean;
    worker_mode?: "shared" | "worker" | "server";
};
export type ExternalModuleDeclaration = {
    scope: MODULE_SCOPE.EXTERNAL;
    definition?: Partial<ModuleDefinition>;
    server?: {
        type: "http";
        url: string;
        keepAlive: boolean;
    };
    options?: Record<string, unknown>;
    /**
     * If multiple modules are registered with the same key, the alias can be used to differentiate them
     */
    alias?: string;
    /**
     * If the module is the main module for the key when multiple ones are registered
     */
    main?: boolean;
};
export type ModuleResolution = {
    resolutionPath: string | false;
    definition: ModuleDefinition;
    options?: Record<string, unknown>;
    dependencies?: string[];
    moduleDeclaration?: InternalModuleDeclaration | ExternalModuleDeclaration;
    moduleExports?: ModuleExports;
};
export type ModuleDefinition = {
    key: string;
    registrationName: string;
    defaultPackage: string | false;
    label: string;
    isRequired?: boolean;
    isQueryable?: boolean;
    isLegacy?: boolean;
    dependencies?: string[];
    defaultModuleDeclaration: InternalModuleDeclaration | ExternalModuleDeclaration;
};
export type LinkModuleDefinition = {
    key: string;
    registrationName: string;
    label: string;
    dependencies?: string[];
    defaultModuleDeclaration: InternalModuleDeclaration;
};
type ModuleDeclaration = ExternalModuleDeclaration | InternalModuleDeclaration;
export type ModuleConfig = ModuleDeclaration & {
    module: string;
    path: string;
    definition: ModuleDefinition;
};
export type LoadedModule = unknown & {
    __joinerConfig: ModuleJoinerConfig;
    __definition: ModuleDefinition;
};
export type LoaderOptions<TOptions = Record<string, unknown>> = {
    container: MedusaContainer;
    options?: TOptions;
    logger?: Logger;
    dataLoaderOnly?: boolean;
};
export type ModuleLoaderFunction = (options: LoaderOptions, moduleDeclaration?: InternalModuleDeclaration) => Promise<void>;
export type ModulesResponse = {
    module: string;
    resolution: string | false;
}[];
export type ModuleJoinerConfig = Omit<JoinerServiceConfig, "serviceName" | "primaryKeys" | "relationships" | "extends"> & {
    /**
     * GraphQL schema for the all module's available entities and fields
     */
    schema?: string;
    relationships?: ModuleJoinerRelationship[];
    extends?: {
        serviceName: string;
        fieldAlias?: Record<string, string | {
            path: string;
            forwardArgumentsOnPath?: string[];
            isList?: boolean;
        }>;
        relationship: ModuleJoinerRelationship;
    }[];
    serviceName?: string;
    primaryKeys?: string[];
    /**
     * If the module is a link module
     */
    isLink?: boolean;
    /**
     * Keys that can be used to link to other modules. e.g { product_id: "Product" } "Product" being the entity it refers to
     */
    linkableKeys?: Record<string, string>;
    /**
     * If true it expands a RemoteQuery property but doesn't create a pivot table
     */
    isReadOnlyLink?: boolean;
    databaseConfig?: {
        /**
         * Name of the pivot table. If not provided it is auto generated
         */
        tableName?: string;
        /**
         * Prefix for the id column. If not provided it is "link"
         */
        idPrefix?: string;
        extraFields?: Record<string, {
            type: "date" | "time" | "datetime" | "bigint" | "blob" | "uint8array" | "array" | "enumArray" | "enum" | "json" | "integer" | "smallint" | "tinyint" | "mediumint" | "float" | "double" | "boolean" | "decimal" | "string" | "uuid" | "text";
            defaultValue?: string;
            nullable?: boolean;
            /**
             * Mikro-orm options for the column
             */
            options?: Record<string, unknown>;
        }>;
    };
};
export declare type ModuleJoinerRelationship = JoinerRelationship & {
    /**
     * If true, the relationship is an internal service from the medusa core TODO: Remove when there are no more "internal" services
     */
    isInternalService?: boolean;
    /**
     * If true, the link joiner will cascade deleting the relationship
     */
    deleteCascade?: boolean;
};
export type ModuleExports = {
    service: Constructor<any>;
    loaders?: ModuleLoaderFunction[];
    /**
     * @deprecated property will be removed in future versions
     */
    migrations?: any[];
    /**
     * @deprecated property will be removed in future versions
     */
    models?: Constructor<any>[];
    runMigrations?(options: LoaderOptions<any>, moduleDeclaration?: InternalModuleDeclaration): Promise<void>;
    revertMigration?(options: LoaderOptions<any>, moduleDeclaration?: InternalModuleDeclaration): Promise<void>;
};
export interface ModuleServiceInitializeOptions {
    database: {
        /**
         * Forces to use a shared knex connection
         */
        connection?: any;
        clientUrl?: string;
        schema?: string;
        host?: string;
        port?: number;
        user?: string;
        password?: string;
        database?: string;
        driverOptions?: Record<string, unknown> & {
            connection?: Record<string, unknown>;
        };
        debug?: boolean;
        pool?: Record<string, unknown>;
    };
}
export type ModuleServiceInitializeCustomDataLayerOptions = {
    manager?: any;
    repositories?: {
        [key: string]: Constructor<RepositoryService>;
    };
};
export type ModuleBootstrapDeclaration = InternalModuleDeclaration | ExternalModuleDeclaration;
export type RemoteQueryFunction = (query: string | RemoteJoinerQuery | object, variables?: Record<string, unknown>, options?: RemoteJoinerOptions) => Promise<any> | null;
export interface IModuleService {
    /**
     * @ignore
     */
    __joinerConfig?(): ModuleJoinerConfig;
    /**
     * @ignore
     */
    __hooks?: {
        onApplicationStart?: () => Promise<void>;
        onApplicationShutdown?: () => Promise<void>;
        onApplicationPrepareShutdown?: () => Promise<void>;
    };
}
//# sourceMappingURL=index.d.ts.map