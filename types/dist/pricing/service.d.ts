import { FindConfig } from "../common";
import { RestoreReturn, SoftDeleteReturn } from "../dal";
import { IModuleService } from "../modules-sdk";
import { Context } from "../shared-context";
import { AddPriceListPricesDTO, AddPricesDTO, AddRulesDTO, CalculatedPriceSet, CreatePriceListDTO, CreatePriceListRuleDTO, CreatePriceRuleDTO, CreatePriceSetDTO, CreateRuleTypeDTO, FilterablePriceListProps, FilterablePriceListRuleProps, FilterablePriceProps, FilterablePriceRuleProps, FilterablePriceSetProps, FilterableRuleTypeProps, PriceDTO, PriceListDTO, PriceListRuleDTO, PriceRuleDTO, PriceSetDTO, PricingContext, PricingFilters, RemovePriceListRulesDTO, RemovePriceSetRulesDTO, RuleTypeDTO, SetPriceListRulesDTO, UpdatePriceListDTO, UpdatePriceListPricesDTO, UpdatePriceListRuleDTO, UpdatePriceRuleDTO, UpdatePriceSetDTO, UpdateRuleTypeDTO, UpsertPriceSetDTO } from "./common";
/**
 * The main service interface for the Pricing Module.
 */
export interface IPricingModuleService extends IModuleService {
    /**
     * This method is used to calculate prices based on the provided filters and context.
     *
     * @param {PricingFilters} filters - The filters to apply on prices.
     * @param {PricingContext} context -
     * The context used to select the prices. For example, you can specify the region ID in this context, and only prices having the same value
     * will be retrieved.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<CalculatedPriceSet[]>} The calculated prices matching the context and filters provided.
     *
     * @example
     * When you calculate prices, you must at least specify the currency code:
     *
     * ```ts
     * const price = await pricingModuleService.calculatePrices(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     context: {
     *       currency_code: "usd",
     *     },
     *   }
     * )
     * ```
     *
     * To calculate prices for specific minimum and/or maximum quantity:
     *
     * ```ts
     * const price = await pricingModuleService.calculatePrices(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     context: {
     *       currency_code: "usd",
     *       min_quantity: 4,
     *     },
     *   }
     * )
     * ```
     *
     * To calculate prices for custom rule types:
     *
     * ```ts
     * const price = await pricingModuleService.calculatePrices(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     context: {
     *       currency_code: "usd",
     *       region_id: "US",
     *     },
     *   }
     * )
     * ```
     */
    calculatePrices(filters: PricingFilters, context?: PricingContext, sharedContext?: Context): Promise<CalculatedPriceSet[]>;
    /**
     * This method is used to retrieve a price set by its ID.
     *
     * @param {string} id - The ID of the price set to retrieve.
     * @param {FindConfig<PriceSetDTO>} config -
     * The configurations determining how the price set is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The retrieved price set.
     *
     * @example
     * A simple example that retrieves a price set by its ID:
     *
     * ```ts
     * const priceSet =
     *   await pricingModuleService.retrieve("pset_123")
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const priceSet = await pricingModuleService.retrieve(
     *   "pset_123",
     *   {
     *     relations: ["prices"],
     *   }
     * )
     * ```
     */
    retrieve(id: string, config?: FindConfig<PriceSetDTO>, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method is used to retrieve a paginated list of price sets based on optional filters and configuration.
     *
     * @param {FilterablePriceSetProps} filters - The filters to apply on the retrieved price lists.
     * @param {FindConfig<PriceSetDTO>} config -
     * The configurations determining how the price sets are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The list of price sets.
     *
     * @example
     *
     * To retrieve a list of price sets using their IDs:
     *
     * ```ts
     * const priceSets = await pricingModuleService.list({
     *   id: ["pset_123", "pset_321"],
     * })
     * ```
     *
     * To specify relations that should be retrieved within the price sets:
     *
     * ```ts
     * const priceSets = await pricingModuleService.list(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     relations: ["prices"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const priceSets = await pricingModuleService.list(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     relations: ["prices"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    list(filters?: FilterablePriceSetProps, config?: FindConfig<PriceSetDTO>, sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method is used to retrieve a paginated list of price sets along with the total count of available price sets satisfying the provided filters.
     *
     * @param {FilterablePriceSetProps} filters - The filters to apply on the retrieved price lists.
     * @param {FindConfig<PriceSetDTO>} config -
     * The configurations determining how the price sets are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[PriceSetDTO[], number]>} The list of price sets along with their total count.
     *
     * @example
     *
     * To retrieve a list of prices sets using their IDs:
     *
     * ```ts
     * const [priceSets, count] =
     *   await pricingModuleService.listAndCount({
     *     id: ["pset_123", "pset_321"],
     *   })
     * ```
     *
     * To specify relations that should be retrieved within the price sets:
     *
     * ```ts
     * const [priceSets, count] =
     *   await pricingModuleService.listAndCount(
     *     {
     *       id: ["pset_123", "pset_321"],
     *     },
     *     {
     *       relations: ["prices"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [priceSets, count] =
     *   await pricingModuleService.listAndCount(
     *     {
     *       id: ["pset_123", "pset_321"],
     *     },
     *     {
     *       relations: ["prices"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listAndCount(filters?: FilterablePriceSetProps, config?: FindConfig<PriceSetDTO>, sharedContext?: Context): Promise<[PriceSetDTO[], number]>;
    /**
     * This method is used to create a new price set.
     *
     * @param {CreatePriceSetDTO} data - The attributes of the price set to create.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The created price set.
     *
     * @example
     * To create a default price set, don't pass any rules. For example:
     *
     * ```ts
     * const priceSet = await pricingModuleService.create({
     *   rules: [],
     *   prices: [
     *     {
     *       amount: 500,
     *       currency_code: "USD",
     *       min_quantity: 0,
     *       max_quantity: 4,
     *       rules: {},
     *     },
     *     {
     *       amount: 400,
     *       currency_code: "USD",
     *       min_quantity: 5,
     *       max_quantity: 10,
     *       rules: {},
     *     },
     *   ],
     * })
     * ```
     *
     * To create a price set and associate it with rule types:
     *
     * ```ts
     * const priceSet = await pricingModuleService.create({
     *   rules: [
     *     { rule_attribute: "region_id" },
     *     { rule_attribute: "city" },
     *   ],
     *   prices: [
     *     {
     *       amount: 300,
     *       currency_code: "EUR",
     *       rules: {
     *         region_id: "PL",
     *         city: "krakow",
     *       },
     *     },
     *     {
     *       amount: 400,
     *       currency_code: "EUR",
     *       rules: {
     *         region_id: "PL",
     *       },
     *     },
     *     {
     *       amount: 450,
     *       currency_code: "EUR",
     *       rules: {
     *         city: "krakow",
     *       },
     *     },
     *   ],
     * })
     * ```
     */
    create(data: CreatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method is used to create multiple price sets.
     *
     * @param {CreatePriceSetDTO[]} data - The price sets to create.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The list of created price sets.
     *
     * @example
     * const priceSets = await pricingModuleService.create([
     *   // default price set
     *   {
     *     rules: [],
     *     prices: [
     *       {
     *         amount: 500,
     *         currency_code: "USD",
     *         min_quantity: 0,
     *         max_quantity: 4,
     *         rules: {},
     *       },
     *       {
     *         amount: 400,
     *         currency_code: "USD",
     *         min_quantity: 5,
     *         max_quantity: 10,
     *         rules: {},
     *       },
     *     ],
     *   },
     *   // price set with rules
     *   {
     *     rules: [
     *       { rule_attribute: "region_id" },
     *       { rule_attribute: "city" },
     *     ],
     *     prices: [
     *       {
     *         amount: 300,
     *         currency_code: "EUR",
     *         rules: {
     *           region_id: "PL",
     *           city: "krakow",
     *         },
     *       },
     *       {
     *         amount: 400,
     *         currency_code: "EUR",
     *         rules: {
     *           region_id: "PL",
     *         },
     *       },
     *       {
     *         amount: 450,
     *         currency_code: "EUR",
     *         rules: {
     *           city: "krakow",
     *         },
     *       },
     *     ],
     *   },
     * ])
     */
    create(data: CreatePriceSetDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method updates existing price sets, or creates new ones if they don't exist.
     *
     * @param {UpsertPriceSetDTO[]} data - The attributes to update or create for each price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The updated and created price sets.
     *
     * @example
     * const priceSets = await pricingModuleService.upsert([
     *   {
     *     prices: [
     *       {
     *         amount: 100,
     *         currency_code: "USD",
     *       },
     *     ],
     *   },
     *   {
     *     id: "pset_123",
     *     rules: [{ rule_attribute: "region_id" }],
     *   },
     * ])
     */
    upsert(data: UpsertPriceSetDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method updates the price set if it exists, or creates a new ones if it doesn't.
     *
     * @param {UpsertPriceSetDTO} data - The attributes to update or create for the new price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The updated or created price set.
     *
     * @example
     * const priceSet = await pricingModuleService.upsert({
     *   id: "pset_123",
     *   rules: [{ rule_attribute: "region_id" }],
     * })
     */
    upsert(data: UpsertPriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method is used to update a price set.
     *
     * @param {string} id - The ID of the price set to be updated.
     * @param {UpdatePriceSetDTO} data - The attributes of the price set to be updated
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The updated price set.
     *
     * @example
     * const priceSet = await pricingModuleService.update(
     *   "pset_123",
     *   {
     *     rules: [{ rule_attribute: "region_id" }],
     *   }
     * )
     */
    update(id: string, data: UpdatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method is used to update a list of price sets determined by the selector filters.
     *
     * @param {FilterablePriceSetProps} selector - The filters that will determine which price sets will be updated.
     * @param {UpdatePriceSetDTO} data - The attributes to be updated on the selected price sets
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The updated price sets.
     *
     * @example
     * const priceSets = await pricingModuleService.update(
     *   {
     *     id: ["pset_123", "pset_321"],
     *   },
     *   {
     *     rules: [{ rule_attribute: "region_id" }],
     *   }
     * )
     */
    update(selector: FilterablePriceSetProps, data: UpdatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method remove rules from a price set.
     *
     * @param {RemovePriceSetRulesDTO[]} data - The rules to remove per price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when rules are successfully removed.
     *
     * @example
     * await pricingModuleService.removeRules([
     *   {
     *     id: "pset_123",
     *     rules: ["region_id"],
     *   },
     * ])
     */
    removeRules(data: RemovePriceSetRulesDTO[], sharedContext?: Context): Promise<void>;
    /**
     * This method deletes price sets by their IDs.
     *
     * @param {string[]} ids - The IDs of the price sets to delete.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when the price sets are successfully deleted.
     *
     * @example
     * await pricingModuleService.delete(["pset_123", "pset_321"])
     */
    delete(ids: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method adds prices to a price set.
     *
     * @param {AddPricesDTO} data - The data defining the price set to add the prices to, along with the prices to add.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The price set that the prices were added to.
     *
     * @example
     *
     * To add a default price to a price set, don't pass it any rules and make sure to pass it the `currency_code`:
     *
     * ```ts
     * const priceSet = await pricingModuleService.addPrices({
     *   priceSetId: "pset_123",
     *   prices: [
     *     {
     *       amount: 500,
     *       currency_code: "USD",
     *       rules: {},
     *     },
     *   ],
     * })
     * ```
     *
     * To add prices with rules:
     *
     * ```ts
     * const priceSet = await pricingModuleService.addPrices({
     *   priceSetId: "pset_123",
     *   prices: [
     *     {
     *       amount: 300,
     *       currency_code: "EUR",
     *       rules: {
     *         region_id: "PL",
     *         city: "krakow",
     *       },
     *     },
     *     {
     *       amount: 400,
     *       currency_code: "EUR",
     *       min_quantity: 0,
     *       max_quantity: 4,
     *       rules: {
     *         region_id: "PL",
     *       },
     *     },
     *     {
     *       amount: 450,
     *       currency_code: "EUR",
     *       rules: {
     *         city: "krakow",
     *       },
     *     },
     *   ],
     * })
     * ```
     */
    addPrices(data: AddPricesDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method adds prices to multiple price sets.
     *
     * @param {AddPricesDTO[]} data - The data defining the prices to add per price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The list of the price sets that prices were added to.
     *
     * @example
     * const priceSets = await pricingModuleService.addPrices([
     *   {
     *     priceSetId: "pset_123",
     *     prices: [
     *       // default price because it doesn't
     *       // have rules
     *       {
     *         amount: 500,
     *         currency_code: "USD",
     *         rules: {},
     *       },
     *     ],
     *   },
     *   {
     *     priceSetId: "pset_321",
     *     prices: [
     *       // prices with rules
     *       {
     *         amount: 300,
     *         currency_code: "EUR",
     *         rules: {
     *           region_id: "PL",
     *           city: "krakow",
     *         },
     *       },
     *     ],
     *   },
     * ])
     */
    addPrices(data: AddPricesDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method adds rules to a price set.
     *
     * @param {AddRulesDTO} data - The data defining the price set to add the rules to, along with the rules to add.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO>} The price set that the rules were added to.
     *
     * @example
     * const priceSet = await pricingModuleService.addRules({
     *   priceSetId: "pset_123",
     *   rules: [
     *     {
     *       attribute: "region_id",
     *     },
     *   ],
     * })
     */
    addRules(data: AddRulesDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    /**
     * This method adds rules to multiple price sets.
     *
     * @param {AddRulesDTO[]} data - The data defining the rules to add per price set.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceSetDTO[]>} The list of the price sets that the rules were added to.
     *
     * @example
     * const priceSets = await pricingModuleService.addRules([
     *   {
     *     priceSetId: "pset_123",
     *     rules: [
     *       {
     *         attribute: "region_id",
     *       },
     *     ],
     *   },
     *   {
     *     priceSetId: "pset_321",
     *     rules: [
     *       {
     *         attribute: "customer_group_id",
     *       },
     *     ],
     *   },
     * ])
     */
    addRules(data: AddRulesDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    /**
     * This method is used to retrieve a rule type by its ID and and optionally based on the provided configurations.
     *
     * @param {string} id - The ID of the rule type to retrieve.
     * @param {FindConfig<RuleTypeDTO>} config -
     * The configurations determining how the rule type is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a rule type.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<RuleTypeDTO>} The retrieved rule type.
     *
     * @example
     * A simple example that retrieves a rule type by its code:
     *
     * ```ts
     * const ruleType =
     *   await pricingModuleService.retrieveRuleType("rul-typ_123")
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const ruleType = await pricingModuleService.retrieveRuleType(
     *   "rul-typ_123",
     *   {
     *     relations: ["price_sets"],
     *   }
     * )
     * ```
     */
    retrieveRuleType(id: string, config?: FindConfig<RuleTypeDTO>, sharedContext?: Context): Promise<RuleTypeDTO>;
    /**
     * This method is used to retrieve a paginated list of rule types based on optional filters and configuration.
     *
     * @param {FilterableRuleTypeProps} filters - The filters to apply on the retrieved rule types.
     * @param {FindConfig<RuleTypeDTO>} config -
     * The configurations determining how the rule types are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a rule type.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<RuleTypeDTO[]>} The list of rule types.
     *
     * @example
     *
     * To retrieve a list of rule types using their IDs:
     *
     * ```ts
     * const ruleTypes = await pricingModuleService.listRuleTypes({
     *   id: ["rul-typ_123", "rul-typ_321"],
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const ruleTypes = await pricingModuleService.listRuleTypes(
     *   {
     *     id: ["rul-typ_123", "rul-typ_321"],
     *   },
     *   {
     *     relations: ["price_sets"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const ruleTypes = await pricingModuleService.listRuleTypes(
     *   {
     *     id: ["rul-typ_123", "rul-typ_321"],
     *   },
     *   {
     *     relations: ["price_sets"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    listRuleTypes(filters?: FilterableRuleTypeProps, config?: FindConfig<RuleTypeDTO>, sharedContext?: Context): Promise<RuleTypeDTO[]>;
    /**
     * This method is used to retrieve a paginated list of rule types along with the total count of available rule types satisfying the provided filters.
     *
     * @param {FilterableRuleTypeProps} filters - The filters to apply on the retrieved rule types.
     * @param {FindConfig<RuleTypeDTO>} config -
     * The configurations determining how the rule types are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a rule type.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[RuleTypeDTO[], number]>} The list of rule types along with their total count.
     *
     * @example
     *
     * To retrieve a list of rule types using their IDs:
     *
     * ```ts
     * const [ruleTypes, count] =
     *   await pricingModuleService.listAndCountRuleTypes({
     *     id: ["rul-typ_123", "rul-typ_321"],
     *   })
     * ```
     *
     * To specify attributes that should be retrieved within the rule types:
     *
     * ```ts
     * const [ruleTypes, count] =
     *   await pricingModuleService.listAndCountRuleTypes(
     *     {
     *       id: ["rul-typ_123", "rul-typ_321"],
     *     },
     *     {
     *       relations: ["price_sets"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [ruleTypes, count] =
     *   await pricingModuleService.listAndCountRuleTypes(
     *     {
     *       id: ["rul-typ_123", "rul-typ_321"],
     *     },
     *     {
     *       relations: ["price_sets"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listAndCountRuleTypes(filters?: FilterableRuleTypeProps, config?: FindConfig<RuleTypeDTO>, sharedContext?: Context): Promise<[RuleTypeDTO[], number]>;
    /**
     * This method is used to create new rule types.
     *
     * @param {CreateRuleTypeDTO[]} data - The rule types to create.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<RuleTypeDTO[]>} The list of created rule types.
     *
     * @example
     * const ruleTypes = await pricingModuleService.createRuleTypes([
     *   {
     *     name: "Region",
     *     rule_attribute: "region_id",
     *   },
     *   {
     *     name: "Customer Group",
     *     rule_attribute: "customer_group_id",
     *   },
     * ])
     */
    createRuleTypes(data: CreateRuleTypeDTO[], sharedContext?: Context): Promise<RuleTypeDTO[]>;
    /**
     * This method is used to update existing rule types with the provided data.
     *
     * @param {UpdateRuleTypeDTO[]} data - The rule types to update, each having the attributes that should be updated in a rule type.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<RuleTypeDTO[]>} The list of updated rule types.
     *
     * @example
     * const ruleTypes = await pricingModuleService.updateRuleTypes([
     *   {
     *     id: "rul-typ_123",
     *     name: "Region",
     *   },
     *   {
     *     id: "rul-typ_321",
     *     name: "Customer Group",
     *   },
     * ])
     */
    updateRuleTypes(data: UpdateRuleTypeDTO[], sharedContext?: Context): Promise<RuleTypeDTO[]>;
    /**
     * This method is used to delete rule types based on the provided IDs.
     *
     * @param {string[]} ruleTypeIds - The IDs of the rule types to delete.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves once the rule types are deleted.
     *
     * @example
     * const ruleTypes = await pricingModuleService.deleteRuleTypes([
     *   "rul-typ_123",
     *   "rul-typ_321",
     * ])
     */
    deleteRuleTypes(ruleTypeIds: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method is used to retrieve a paginated list of prices based on optional filters and configuration.
     *
     * @param {FilterablePriceProps} filters - The filters to apply on the retrieved prices.
     * @param {FindConfig<PriceDTO>} config -
     * The configurations determining how the prices are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceDTO[]>} The list of prices.
     *
     * @example
     *
     * To retrieve a list of prices using their IDs:
     *
     * ```ts
     * const prices = await pricingModuleService.listPrices({
     *   id: ["price_123", "price_321"],
     * })
     * ```
     *
     * To specify relations that should be retrieved within the prices:
     *
     * ```ts
     * const prices = await pricingModuleService.listPrices(
     *   {
     *     id: ["price_123", "price_321"],
     *   },
     *   {
     *     relations: ["price_rules"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const prices = await pricingModuleService.listPrices(
     *   {
     *     id: ["price_123", "price_321"],
     *   },
     *   {
     *     relations: ["price_rules"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    listPrices(filters?: FilterablePriceProps, config?: FindConfig<PriceDTO>, sharedContext?: Context): Promise<PriceDTO[]>;
    /**
     * This method soft deletes prices by their IDs.
     *
     * @param {string[]} priceIds - The IDs of the prices.
     * @param {SoftDeleteReturn<TReturnableLinkableKeys>} config - An object that is used to specify an entity's related entities that should be soft-deleted when the main entity is soft-deleted.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void | Record<string, string[]>>} An object that includes the IDs of related records that were also soft deleted, such as the ID of the associated price rules.
     * The object's keys are the ID attribute names of the price entity's relations, such as `price_rule_id`, and its value is an array of strings, each being the ID of a record associated
     * with the price through this relation, such as the IDs of associated price rule.
     *
     * If there are no related records, the promise resolves to `void`.
     *
     * @example
     * await pricingModuleService.softDeletePrices([
     *   "price_123",
     *   "price_321",
     * ])
     */
    softDeletePrices<TReturnableLinkableKeys extends string = string>(priceIds: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    /**
     * This method restores soft deleted prices by their IDs.
     *
     * @param {string[]} priceIds - The IDs of the prices.
     * @param {RestoreReturn<TReturnableLinkableKeys>} config - Configurations determining which relations to restore along with each of the prices. You can pass to its `returnLinkableKeys`
     * property any of the price's relation attribute names, such as price_rules`.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void | Record<string, string[]>>} An object that includes the IDs of related records that were restored, such as the ID of associated price rules.
     * The object's keys are the ID attribute names of the prices entity's relations, such as `price_rule_id`,
     * and its value is an array of strings, each being the ID of the record associated with the prices through this relation,
     * such as the IDs of associated price rules.
     *
     * If there are no related records restored, the promise resolves to `void`.
     *
     * @example
     * await pricingModuleService.restorePrices([
     *   "price_123",
     *   "price_321",
     * ])
     */
    restorePrices<TReturnableLinkableKeys extends string = string>(priceIds: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    /**
     * This method is used to retrieve a paginated list of prices along with the total count of
     * available prices satisfying the provided filters.
     *
     * @param {FilterablePriceProps} filters - The filters to apply on the retrieved prices.
     * @param {FindConfig<PriceDTO>} config -
     * The configurations determining how the prices are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[PriceDTO[], number]>} The list of prices and their total count.
     *
     * @example
     *
     * To retrieve a list of prices using their IDs:
     *
     * ```ts
     * const [prices, count] = await pricingModuleService.listPrices(
     *   {
     *     id: ["price_123", "price_321"],
     *   }
     * )
     * ```
     *
     * To specify relations that should be retrieved within the prices:
     *
     * ```ts
     * const [prices, count] = await pricingModuleService.listPrices(
     *   {
     *     id: ["price_123", "price_321"],
     *   },
     *   {
     *     relations: ["price_rules"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [prices, count] = await pricingModuleService.listPrices(
     *   {
     *     id: ["price_123", "price_321"],
     *   },
     *   {
     *     relations: ["price_rules"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    listAndCountPrices(filters?: FilterablePriceProps, config?: FindConfig<PriceDTO>, sharedContext?: Context): Promise<[PriceDTO[], number]>;
    /**
     * This method is used to retrieve a price rule by its ID.
     *
     * @param {string} id - The ID of the price rule to retrieve.
     * @param {FindConfig<PriceRuleDTO>} config -
     * The configurations determining how the price rule is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceRuleDTO>} The retrieved price rule.
     *
     * @example
     * A simple example that retrieves a price rule by its ID:
     *
     * ```ts
     * const priceRule =
     *   await pricingModuleService.retrievePriceRule("prule_123")
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const priceRule =
     *   await pricingModuleService.retrievePriceRule("prule_123", {
     *     relations: ["price_set"],
     *   })
     * ```
     */
    retrievePriceRule(id: string, config?: FindConfig<PriceRuleDTO>, sharedContext?: Context): Promise<PriceRuleDTO>;
    /**
     * This method is used to retrieve a paginated list of price rules based on optional filters and configuration.
     *
     * @param {FilterablePriceRuleProps} filters - The filters to apply on the retrieved price rules.
     * @param {FindConfig<PriceRuleDTO>} config -
     * The configurations determining how the price rule is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceRuleDTO[]>} The list of price rules.
     *
     * @example
     *
     * To retrieve a list of price rules using their IDs:
     *
     * ```ts
     * const priceRules = await pricingModuleService.listPriceRules({
     *   id: ["prule_123", "prule_321"],
     * })
     * ```
     *
     * To specify relations that should be retrieved within the price rules:
     *
     * ```ts
     * const priceRules = await pricingModuleService.listPriceRules(
     *   {
     *     id: ["prule_123", "prule_321"],
     *   },
     *   {
     *     relations: ["price_set"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const priceRules = await pricingModuleService.listPriceRules(
     *   {
     *     id: ["prule_123", "prule_321"],
     *   },
     *   {
     *     relations: ["price_set"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    listPriceRules(filters?: FilterablePriceRuleProps, config?: FindConfig<PriceRuleDTO>, sharedContext?: Context): Promise<PriceRuleDTO[]>;
    /**
     * This method is used to retrieve a paginated list of price rules along with the total count of available price rules satisfying the provided filters.
     *
     * @param {FilterablePriceRuleProps} filters - The filters to apply on the retrieved price rules.
     * @param {FindConfig<PriceRuleDTO>} config -
     * The configurations determining how the price rule is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceRuleDTO[]>} The list of price rules along with their total count.
     *
     * @example
     *
     * To retrieve a list of price rules using their IDs:
     *
     * ```ts
     * const [priceRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules({
     *     id: ["prule_123", "prule_321"],
     *   })
     * ```
     *
     * To specify relations that should be retrieved within the price rules:
     *
     * ```ts
     * const [priceRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules(
     *     {
     *       id: ["prule_123", "prule_321"],
     *     },
     *     {
     *       relations: ["price_set"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [priceRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules(
     *     {
     *       id: ["prule_123", "prule_321"],
     *     },
     *     {
     *       relations: ["price_set"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listAndCountPriceRules(filters?: FilterablePriceRuleProps, config?: FindConfig<PriceRuleDTO>, sharedContext?: Context): Promise<[PriceRuleDTO[], number]>;
    /**
     * This method is used to create new price rules based on the provided data.
     *
     * @param {CreatePriceRuleDTO[]} data - The price rules to create.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceRuleDTO[]>} The list of created price rules.
     *
     * @example
     * const priceRules =
     *   await pricingModuleService.createPriceRules([
     *     {
     *       value: "VIP",
     *       rule_type_id: "rul-typ_123",
     *       price_set_id: "pset_123",
     *     },
     *   ])
     */
    createPriceRules(data: CreatePriceRuleDTO[], sharedContext?: Context): Promise<PriceRuleDTO[]>;
    /**
     * This method is used to update price rules, each with their provided data.
     *
     * @param {UpdatePriceRuleDTO[]} data - The price rules to update, each having attributes that should be updated in a price rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceRuleDTO[]>} The list of updated price rules.
     *
     * @example
     * const priceRules =
     *   await pricingModuleService.updatePriceRules([
     *     {
     *       id: "prule_123",
     *       price_id: "price_123",
     *     },
     *   ])
     */
    updatePriceRules(data: UpdatePriceRuleDTO[], sharedContext?: Context): Promise<PriceRuleDTO[]>;
    /**
     * This method is used to delete price rules based on the specified IDs.
     *
     * @param {string[]} priceRuleIds - The IDs of the price rules to delete.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves once the price rules are deleted.
     *
     * @example
     * await pricingModuleService.deletePriceRules([
     *   "prule_123",
     *   "prule_321",
     * ])
     */
    deletePriceRules(priceRuleIds: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method is used to retrieve a price list by its ID.
     *
     * @param {string} id - The ID of the price list to retrieve.
     * @param {FindConfig<PriceListDTO>} config -
     * The configurations determining how the price list is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO>} The retrieved price list.
     *
     * @example
     * A simple example that retrieves a price list by its ID:
     *
     * ```ts
     * const priceList =
     *   await pricingModuleService.retrievePriceList("plist_123")
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const priceList =
     *   await pricingModuleService.retrievePriceList("plist_123", {
     *     relations: ["prices"],
     *   })
     * ```
     */
    retrievePriceList(id: string, config?: FindConfig<PriceListDTO>, sharedContext?: Context): Promise<PriceListDTO>;
    /**
     * This method is used to retrieve a paginated list of price lists based on optional filters and configuration.
     *
     * @param {FilterablePriceListProps} filters - The filters to apply on the retrieved price lists.
     * @param {FindConfig<PriceListDTO>} config -
     * The configurations determining how the price lists are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO[]>} The list of price lists.
     *
     * @example
     *
     * To retrieve a list of price lists using their IDs:
     *
     * ```ts
     * const priceLists = await pricingModuleService.listPriceLists({
     *   id: ["plist_123", "plist_321"],
     * })
     * ```
     *
     * To specify relations that should be retrieved within the price lists:
     *
     * ```ts
     * const priceLists = await pricingModuleService.listPriceLists(
     *   {
     *     id: ["plist_123", "plist_321"],
     *   },
     *   {
     *     relations: ["prices"],
     *   }
     * )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const priceLists = await pricingModuleService.listPriceLists(
     *   {
     *     id: ["plist_123", "plist_321"],
     *   },
     *   {
     *     relations: ["prices"],
     *     take: 20,
     *     skip: 2,
     *   }
     * )
     * ```
     */
    listPriceLists(filters?: FilterablePriceListProps, config?: FindConfig<PriceListDTO>, sharedContext?: Context): Promise<PriceListDTO[]>;
    /**
     * This method is used to retrieve a paginated list of price lists along with the total count of available price lists satisfying the provided filters.
     *
     * @param {FilterablePriceListProps} filters - The filters to apply on the retrieved price lists.
     * @param {FindConfig<PriceListDTO>} config -
     * The configurations determining how the price lists are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[PriceListDTO[], number]>} The list of price lists along with their total count.
     *
     * @example
     *
     * To retrieve a list of price lists using their IDs:
     *
     * ```ts
     * const [priceLists, count] =
     *   await pricingModuleService.listAndCountPriceLists({
     *     id: ["plist_123", "plist_321"],
     *   })
     * ```
     *
     * To specify relations that should be retrieved within the price lists:
     *
     * ```ts
     * const [priceLists, count] =
     *   await pricingModuleService.listAndCountPriceLists(
     *     {
     *       id: ["plist_123", "plist_321"],
     *     },
     *     {
     *       relations: ["prices"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [priceLists, count] =
     *   await pricingModuleService.listAndCountPriceLists(
     *     {
     *       id: ["plist_123", "plist_321"],
     *     },
     *     {
     *       relations: ["prices"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listAndCountPriceLists(filters?: FilterablePriceListProps, config?: FindConfig<PriceListDTO>, sharedContext?: Context): Promise<[PriceListDTO[], number]>;
    /**
     * This method is used to create price lists.
     *
     * @param {CreatePriceListDTO[]} data - The details of each price list to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO[]>} The created price lists.
     *
     * @example
     * const priceLists =
     *   await pricingModuleService.createPriceLists([
     *     {
     *       title: "Sale 1",
     *       description: "Summer sale",
     *     },
     *     {
     *       title: "Sale 2",
     *       description: "Winter sale",
     *       starts_at: "2024-12-21",
     *     },
     *   ])
     */
    createPriceLists(data: CreatePriceListDTO[], sharedContext?: Context): Promise<PriceListDTO[]>;
    /**
     * This method is used to update price lists.
     *
     * @param {UpdatePriceListDTO[]} data - The attributes to update in each price list. The price list is identifed by the `id` field.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO[]>} The updated price lists.
     *
     * @example
     * const priceLists =
     *   await pricingModuleService.updatePriceLists([
     *     {
     *       id: "plist_123",
     *       title: "Sale 1",
     *     },
     *     {
     *       id: "plist_321",
     *       description: "Winter sale",
     *     },
     *   ])
     */
    updatePriceLists(data: UpdatePriceListDTO[], sharedContext?: Context): Promise<PriceListDTO[]>;
    /**
     * This method is used to delete price lists.
     *
     * @param {string[]} priceListIds - The IDs of the price lists to delete.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when the price lists are deleted successfully.
     *
     * @example
     * await pricingModuleService.deletePriceLists([
     *   "plist_123",
     *   "plist_321",
     * ])
     */
    deletePriceLists(priceListIds: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method soft deletes price lists by their IDs.
     *
     * @param {string[]} priceListIds - The IDs of the price lists.
     * @param {SoftDeleteReturn<TReturnableLinkableKeys>} config - An object that is used to specify an entity's related entities that should be soft-deleted when the main entity is soft-deleted.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void | Record<string, string[]>>} An object that includes the IDs of related records that were also soft deleted, such as the ID of the associated price list rules.
     * The object's keys are the ID attribute names of the price list entity's relations, such as `price_list_rule_id`, and its value is an array of strings, each being the ID of a record associated
     * with the price list through this relation, such as the IDs of associated price list rule.
     *
     * If there are no related records, the promise resolves to `void`.
     *
     * @example
     * await pricingModuleService.softDeletePriceLists([
     *   "plist_123",
     *   "plist_321",
     * ])
     */
    softDeletePriceLists<TReturnableLinkableKeys extends string = string>(priceListIds: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    /**
     * This method restores a soft deleted price lists by its IDs.
     *
     * @param {string[]} priceListIds - The list of {summary}
     * @param {RestoreReturn<TReturnableLinkableKeys>} config - Configurations determining which relations to restore along with each of the price lists. You can pass to its `returnLinkableKeys`
     * property any of the price list's relation attribute names, such as `price_list_rules`.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void | Record<string, string[]>>} An object that includes the IDs of related records that were restored, such as the ID of associated price list rules.
     * The object's keys are the ID attribute names of the price list entity's relations, such as `price_list_rule_id`,
     * and its value is an array of strings, each being the ID of the record associated with the price list through this relation,
     * such as the IDs of associated price list rules.
     *
     * If there are no related records restored, the promise resolves to `void`.
     *
     * @example
     * await pricingModuleService.restorePriceLists([
     *   "plist_123",
     *   "plist_321",
     * ])
     */
    restorePriceLists<TReturnableLinkableKeys extends string = string>(priceListIds: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    /**
     * This method is used to retrieve a price list rule by its ID.
     *
     * @param {string} id - The ID of the price list rule to retrieve.
     * @param {FindConfig<PriceListRuleDTO>} config -
     * The configurations determining how the price list rule is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListRuleDTO>} The retrieved price list rule.
     *
     * @example
     * A simple example that retrieves a price list rule by its ID:
     *
     * ```ts
     * const priceListRule =
     *   await pricingModuleService.retrievePriceListRule(
     *     "plrule_123"
     *   )
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * const priceListRule =
     *   await pricingModuleService.retrievePriceListRule(
     *     "plrule_123",
     *     {
     *       relations: ["price_list"],
     *     }
     *   )
     * ```
     */
    retrievePriceListRule(id: string, config?: FindConfig<PriceListRuleDTO>, sharedContext?: Context): Promise<PriceListRuleDTO>;
    /**
     * This method is used to retrieve a paginated list of price list rules based on optional filters and configuration.
     *
     * @param {FilterablePriceListRuleProps} filters - The filters to apply on the retrieved price list rules.
     * @param {FindConfig<PriceListRuleDTO>} config -
     * The configurations determining how the price list rules are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListRuleDTO[]>} The list of price list rules.
     *
     * @example
     *
     * To retrieve a list of price list vs using their IDs:
     *
     * ```ts
     * const priceListRules =
     *   await pricingModuleService.listPriceListRules({
     *     id: ["plrule_123", "plrule_321"],
     *   })
     * ```
     *
     * To specify relations that should be retrieved within the price list rules:
     *
     * ```ts
     * const priceListRules =
     *   await pricingModuleService.listPriceListRules(
     *     {
     *       id: ["plrule_123", "plrule_321"],
     *     },
     *     {
     *       relations: ["price_list_rule_values"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const priceListRules =
     *   await pricingModuleService.listPriceListRules(
     *     {
     *       id: ["plrule_123", "plrule_321"],
     *     },
     *     {
     *       relations: ["price_list_rule_values"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listPriceListRules(filters?: FilterablePriceListRuleProps, config?: FindConfig<PriceListRuleDTO>, sharedContext?: Context): Promise<PriceListRuleDTO[]>;
    /**
     * This method is used to retrieve a paginated list of price list ruless along with the total count of available price list ruless satisfying the provided filters.
     *
     * @param {FilterablePriceListRuleProps} filters - The filters to apply on the retrieved price list rules.
     * @param {FindConfig<PriceListRuleDTO>} config -
     * The configurations determining how the price list rules are retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a price list rule.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[PriceListRuleDTO[], number]>} The list of price list rules along with their total count.
     *
     * @example
     *
     * To retrieve a list of price list vs using their IDs:
     *
     * ```ts
     * const [priceListRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules({
     *     id: ["plrule_123", "plrule_321"],
     *   })
     * ```
     *
     * To specify relations that should be retrieved within the price list rules:
     *
     * ```ts
     * const [priceListRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules(
     *     {
     *       id: ["plrule_123", "plrule_321"],
     *     },
     *     {
     *       relations: ["price_list_rule_values"],
     *     }
     *   )
     * ```
     *
     * By default, only the first `15` records are retrieved. You can control pagination by specifying the `skip` and `take` properties of the `config` parameter:
     *
     * ```ts
     * const [priceListRules, count] =
     *   await pricingModuleService.listAndCountPriceListRules(
     *     {
     *       id: ["plrule_123", "plrule_321"],
     *     },
     *     {
     *       relations: ["price_list_rule_values"],
     *       take: 20,
     *       skip: 2,
     *     }
     *   )
     * ```
     */
    listAndCountPriceListRules(filters?: FilterablePriceListRuleProps, config?: FindConfig<PriceListRuleDTO>, sharedContext?: Context): Promise<[PriceListRuleDTO[], number]>;
    /**
     * This method is used to create price list rules.
     *
     * @param {CreatePriceListRuleDTO[]} data - The price list rules to create.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListRuleDTO[]>} The created price list rules.
     *
     * @example
     * const priceListRules =
     *   await pricingModuleService.createPriceListRules([
     *     {
     *       rule_type_id: "rul-typ_123",
     *       price_list_id: "plist_123",
     *     },
     *   ])
     */
    createPriceListRules(data: CreatePriceListRuleDTO[], sharedContext?: Context): Promise<PriceListRuleDTO[]>;
    /**
     * This method is used to update price list rules.
     *
     * @param {UpdatePriceListRuleDTO[]} data - The attributes to update for each price list rule. The price list rule is identified by the `id` property.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListRuleDTO[]>} The updated price list rules.
     *
     * @example
     * const priceListRules =
     *   await pricingModuleService.updatePriceListRules([
     *     {
     *       id: "plrule_123",
     *       rule_type_id: "rul-typ_123",
     *     },
     *   ])
     */
    updatePriceListRules(data: UpdatePriceListRuleDTO[], sharedContext?: Context): Promise<PriceListRuleDTO[]>;
    /**
     * This method is used to delete price list rules.
     *
     * @param {string[]} priceListRuleIds - The IDs of the price list rules to delete.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves successfully when the price list rules are deleted.
     *
     * @example
     * await pricingModuleService.deletePriceListRules([
     *   "plrule_123",
     *   "plrule_321",
     * ])
     */
    deletePriceListRules(priceListRuleIds: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method is used to add prices to price lists.
     *
     * @param {AddPriceListPricesDTO[]} data - The prices to add for each price list.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO[]>} The updated price lists.
     *
     * @example
     * const priceLists =
     *   await pricingModuleService.addPriceListPrices([
     *     {
     *       price_list_id: "plist_123",
     *       prices: [
     *         {
     *           currency_code: "usd",
     *           amount: 500,
     *           price_set_id: "pset_123",
     *         },
     *       ],
     *     },
     *   ])
     */
    addPriceListPrices(data: AddPriceListPricesDTO[], sharedContext?: Context): Promise<PriceDTO[]>;
    /**
     * This method updates existing price list's prices.
     *
     * @param {UpdatePriceListPricesDTO[]} data - The attributes to update in a price list's prices. The price list's ID is specified
     * in the `price_list_id` field.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceDTO[]>} The updated price list's prices.
     *
     * @example
     * const priceLists =
     *   await pricingModuleService.updatePriceListPrices([
     *     {
     *       price_list_id: "plist_123",
     *       prices: [
     *         {
     *           id: "price_123",
     *           currency_code: "usd",
     *           amount: 500,
     *           price_set_id: "pset_123",
     *         },
     *       ],
     *     },
     *   ])
     */
    updatePriceListPrices(data: UpdatePriceListPricesDTO[], sharedContext?: Context): Promise<PriceDTO[]>;
    /**
     * This method is used to set the rules of a price list. Previous rules are removed.
     *
     * @param {SetPriceListRulesDTO} data - The rules to set for a price list. The price list is identified by the
     * `price_list_id` property.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceDTO>} The updated price list's prices.
     *
     * @example
     * const priceList =
     *   await pricingModuleService.setPriceListRules({
     *     price_list_id: "plist_123",
     *     rules: {
     *       region_id: "reg_123",
     *     },
     *   })
     */
    setPriceListRules(data: SetPriceListRulesDTO, sharedContext?: Context): Promise<PriceListDTO>;
    /**
     * This method is used to remove rules from a price list.
     *
     * @param {RemovePriceListRulesDTO} data - The rules to remove from a price list. The price list is identified by the
     * `price_list_id` property.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<PriceListDTO>} The updated price lists.
     *
     * @example
     * const priceList =
     *   await pricingModuleService.removePriceListRules({
     *     price_list_id: "plist_123",
     *     rules: ["region_id"],
     *   })
     */
    removePriceListRules(data: RemovePriceListRulesDTO, sharedContext?: Context): Promise<PriceListDTO>;
    /**
     * This method deletes prices by their IDs.
     *
     * @param {string[]} ids - The IDs of the prices.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when the prices are deleted successfully.
     *
     * @example
     * await pricingModuleService.removePrices([
     *   "price_123",
     *   "price_321",
     * ])
     */
    removePrices(ids: string[], sharedContext?: Context): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map