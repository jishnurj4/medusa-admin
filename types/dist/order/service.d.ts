import { FindConfig } from "../common";
import { RestoreReturn, SoftDeleteReturn } from "../dal";
import { IModuleService } from "../modules-sdk";
import { Context } from "../shared-context";
import { FilterableOrderAddressProps, FilterableOrderLineItemAdjustmentProps, FilterableOrderLineItemProps, FilterableOrderLineItemTaxLineProps, FilterableOrderProps, FilterableOrderShippingMethodAdjustmentProps, FilterableOrderShippingMethodProps, FilterableOrderShippingMethodTaxLineProps, OrderAddressDTO, OrderChangeActionDTO, OrderChangeDTO, OrderDTO, OrderItemDTO, OrderLineItemAdjustmentDTO, OrderLineItemDTO, OrderLineItemTaxLineDTO, OrderShippingMethodAdjustmentDTO, OrderShippingMethodDTO, OrderShippingMethodTaxLineDTO } from "./common";
import { CancelOrderChangeDTO, ConfirmOrderChangeDTO, CreateOrderAddressDTO, CreateOrderAdjustmentDTO, CreateOrderChangeActionDTO, CreateOrderChangeDTO, CreateOrderDTO, CreateOrderLineItemDTO, CreateOrderLineItemForOrderDTO, CreateOrderLineItemTaxLineDTO, CreateOrderReturnDTO, CreateOrderShippingMethodAdjustmentDTO, CreateOrderShippingMethodDTO, CreateOrderShippingMethodTaxLineDTO, DeclineOrderChangeDTO, RegisterOrderFulfillmentDTO, RegisterOrderShipmentDTO, UpdateOrderAddressDTO, UpdateOrderDTO, UpdateOrderItemDTO, UpdateOrderItemWithSelectorDTO, UpdateOrderLineItemDTO, UpdateOrderLineItemTaxLineDTO, UpdateOrderLineItemWithSelectorDTO, UpdateOrderShippingMethodAdjustmentDTO, UpdateOrderShippingMethodTaxLineDTO, UpsertOrderLineItemAdjustmentDTO } from "./mutations";
/**
 * {summary}
 */
export interface IOrderModuleService extends IModuleService {
    /**
     * This method retrieves a {return type} by its ID.
     *
     * @param {string} orderId - The order's ID.
     * @param {FindConfig<OrderDTO>} config - The configurations determining how the order is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO>} The retrieved {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.retrieve("orderId123");
     * ```
     *
     */
    retrieve(orderId: string, config?: FindConfig<OrderDTO>, sharedContext?: Context): Promise<OrderDTO>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderProps} filters - The filters to apply on the retrieved order.
     * @param {FindConfig<OrderDTO>} config - The configurations determining how the order is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * const orderDTOs = await orderModuleService.list();
     * ```
     *
     */
    list(filters?: FilterableOrderProps, config?: FindConfig<OrderDTO>, sharedContext?: Context): Promise<OrderDTO[]>;
    /**
     * This method retrieves a paginated list of {return type} along with the total count of available {return type}(s) satisfying the provided filters.
     *
     * @param {FilterableOrderProps} filters - The filters to apply on the retrieved order.
     * @param {FindConfig<OrderDTO>} config - The configurations determining how the order is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<[OrderDTO[], number]>} The list of {return type}(s) along with their total count.
     *
     * @example
     * ```typescript
     * await orderModuleService.listAndCount();
     * ```
     *
     */
    listAndCount(filters?: FilterableOrderProps, config?: FindConfig<OrderDTO>, sharedContext?: Context): Promise<[OrderDTO[], number]>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderDTO[]} data - The order to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO[]>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * const orderData: CreateOrderDTO[] = [
     *     {
     *         currency_code: "USD",
     *         items: [
     *             {
     *                 title: "Product Name",
     *                 quantity: 1,
     *                 unit_price: 1999, // Assuming type is an integer for price in cents
     *             }
     *         ]
     *     }
     * ];
     *
     * const result = await orderModuleService.create(orderData);
     * ```
     *
     */
    create(data: CreateOrderDTO[], sharedContext?: Context): Promise<OrderDTO[]>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderDTO} data - The order to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * // Example execution of the create method of IOrderModuleService
     * const orderData: CreateOrderDTO = {
     *     currency_code: "USD"
     * };
     *
     * const createdOrder = await orderModuleService.create(orderData);
     * ```
     *
     */
    create(data: CreateOrderDTO, sharedContext?: Context): Promise<OrderDTO>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {UpdateOrderDTO[]} data - The attributes to update in the order.
     * @returns {Promise<OrderDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const updatedOrders = await orderModuleService.update([
     *     {
     *         id: "order_id_1",
     *         status: "shipped"
     *     },
     *     {
     *         id: "order_id_2",
     *         status: "delivered"
     *     }
     * ]);
     * ```
     *
     */
    update(data: UpdateOrderDTO[]): Promise<OrderDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {string} orderId - The order's ID.
     * @param {UpdateOrderDTO} data - The attributes to update in the order.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.update("orderId123", {
     *   status: "shipped"
     * });
     * ```
     *
     */
    update(orderId: string, data: UpdateOrderDTO, sharedContext?: Context): Promise<OrderDTO>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {Partial<OrderDTO>} selector - Make all properties in T optional
     * @param {UpdateOrderDTO} data - The attributes to update in the order.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.update(
     *   { id: "order-123" },
     *   { status: "completed" }
     * );
     * ```
     *
     */
    update(selector: Partial<FilterableOrderProps>, data: UpdateOrderDTO, sharedContext?: Context): Promise<OrderDTO[]>;
    /**
     * This method deletes {return type} by its ID.
     *
     * @param {string[]} orderIds - The list of {summary}
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.delete(["12345abc", "67890def"]);
     * ```
     *
     */
    delete(orderIds: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method deletes {return type} by its ID.
     *
     * @param {string} orderId - The order's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.delete("orderId");
     * ```
     *
     */
    delete(orderId: string, sharedContext?: Context): Promise<void>;
    softDelete<TReturnableLinkableKeys extends string = string>(storeIds: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    restore<TReturnableLinkableKeys extends string = string>(storeIds: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    listAddresses(filters?: FilterableOrderAddressProps, config?: FindConfig<OrderAddressDTO>, sharedContext?: Context): Promise<OrderAddressDTO[]>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderAddressDTO[]} data - The order address to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderAddressDTO[]>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.createAddresses([
     *   {
     *     first_name: "John",
     *     last_name: "Doe",
     *     address_1: "123 Main St",
     *     city: "Anytown",
     *     country_code: "US",
     *     province: "AnyState",
     *     postal_code: "12345"
     *   }
     * ]);
     * ```
     *
     */
    createAddresses(data: CreateOrderAddressDTO[], sharedContext?: Context): Promise<OrderAddressDTO[]>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderAddressDTO} data - The order address to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderAddressDTO>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * const orderAddressData: CreateOrderAddressDTO = {
     *   orderId: '123',
     *   line1: '123 Main St',
     *   city: 'Metropolis',
     *   state: 'NY',
     *   postalCode: '12345',
     *   country: 'USA'
     * };
     *
     * const result = await orderModuleService.createAddresses(orderAddressData);
     * ```
     *
     */
    createAddresses(data: CreateOrderAddressDTO, sharedContext?: Context): Promise<OrderAddressDTO>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {UpdateOrderAddressDTO[]} data - The attributes to update in the order address.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderAddressDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const updatedAddress: UpdateOrderAddressDTO[] = [
     *   {
     *     id: "address1",
     *     first_name: "John",
     *     last_name: "Doe",
     *     address_1: "123 Main St",
     *     city: "Anytown",
     *     country_code: "US",
     *     province: "AnyState",
     *     postal_code: "12345"
     *   }
     * ];
     *
     * const result = await orderModuleService.updateAddresses(updatedAddress);
     * ```
     *
     */
    updateAddresses(data: UpdateOrderAddressDTO[], sharedContext?: Context): Promise<OrderAddressDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {UpdateOrderAddressDTO} data - The attributes to update in the order address.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderAddressDTO>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const updateOrderAddressData: UpdateOrderAddressDTO = {
     *   id: '123',
     *   address_1: '123 Main St',
     *   city: 'Metropolis',
     *   province: 'NY',
     *   postal_code: '12345',
     * };
     *
     * const updatedAddress = await orderModuleService.updateAddresses(updateOrderAddressData);
     * ```
     *
     */
    updateAddresses(data: UpdateOrderAddressDTO, sharedContext?: Context): Promise<OrderAddressDTO>;
    /**
     * This method deletes {return type} by its ID.
     *
     * @param {string[]} ids - The list of {summary}
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.deleteAddresses(["your_address_id_1", "your_address_id_2"]);
     * ```
     *
     */
    deleteAddresses(ids: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method deletes {return type} by its ID.
     *
     * @param {string} ids - {summary}
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.deleteAddresses("123456");
     * ```
     *
     */
    deleteAddresses(ids: string, sharedContext?: Context): Promise<void>;
    /**
     * This method retrieves a {return type} by its ID.
     *
     * @param {string} itemId - The item's ID.
     * @param {FindConfig<OrderLineItemDTO>} config - The configurations determining how the order line item is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order line item.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemDTO>} The retrieved {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.retrieveLineItem("12345");
     * ```
     *
     */
    retrieveLineItem(itemId: string, config?: FindConfig<OrderLineItemDTO>, sharedContext?: Context): Promise<OrderLineItemDTO>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderLineItemProps} filters - The filters to apply on the retrieved order line item.
     * @param {FindConfig<OrderLineItemDTO>} config - The configurations determining how the order line item is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order line item.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.listLineItems({
     *   title: "Sample Product Title",
     * });
     * ```
     *
     */
    listLineItems(filters: FilterableOrderLineItemProps, config?: FindConfig<OrderLineItemDTO>, sharedContext?: Context): Promise<OrderLineItemDTO[]>;
    createLineItems(data: CreateOrderLineItemForOrderDTO): Promise<OrderLineItemDTO[]>;
    createLineItems(data: CreateOrderLineItemForOrderDTO[]): Promise<OrderLineItemDTO[]>;
    createLineItems(orderId: string, items: CreateOrderLineItemDTO[], sharedContext?: Context): Promise<OrderLineItemDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {UpdateOrderLineItemWithSelectorDTO[]} data - The attributes to update in the order line item with selector.
     * @returns {Promise<OrderLineItemDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const updateOrderLineItems: UpdateOrderLineItemWithSelectorDTO[] = [
     *   {
     *     selector: {
     *       id: "line-item-id-1"
     *     },
     *     data: {
     *       id: "line-item-id-1",
     *       quantity: 2,
     *       unit_price: 1999
     *     }
     *   }
     * ];
     *
     * const updatedLineItems = await orderModuleService.updateLineItems(updateOrderLineItems);
     * ```
     *
     */
    updateLineItems(data: UpdateOrderLineItemWithSelectorDTO[]): Promise<OrderLineItemDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {Partial<OrderLineItemDTO>} selector - Make all properties in T optional
     * @param {Partial<UpdateOrderLineItemDTO>} data - Make all properties in T optional
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.updateLineItems(
     *   { id: "line-item-id-1" },
     *   { quantity: 10 }
     * );
     * ```
     *
     */
    updateLineItems(selector: Partial<FilterableOrderLineItemProps>, data: Partial<UpdateOrderLineItemDTO>, sharedContext?: Context): Promise<OrderLineItemDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {string} lineId - The line's ID.
     * @param {Partial<UpdateOrderLineItemDTO>} data - Make all properties in T optional
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemDTO>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.updateLineItems(
     *   "lineIdExample",
     *   {
     *     quantity: 10,
     *   }
     * );
     * ```
     *
     */
    updateLineItems(lineId: string, data: Partial<UpdateOrderLineItemDTO>, sharedContext?: Context): Promise<OrderLineItemDTO>;
    deleteLineItems(itemIds: string[], sharedContext?: Context): Promise<void>;
    deleteLineItems(itemIds: string, sharedContext?: Context): Promise<void>;
    deleteLineItems(selector: Partial<FilterableOrderLineItemProps>, sharedContext?: Context): Promise<void>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {Partial<OrderItemDTO>} selector - Make all properties in T optional
     * @param {UpdateOrderItemDTO} data - The attributes to update in the order item.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderItemDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.updateOrderItem(
     *   { id: "item123" },
     *   { quantity: "2" }
     * );
     * ```
     *
     */
    updateOrderItem(selector: Partial<FilterableOrderShippingMethodProps>, data: UpdateOrderItemDTO, sharedContext?: Context): Promise<OrderItemDTO[]>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {string} orderDetailId - The order detail's ID.
     * @param {Partial<UpdateOrderItemDTO>} data - Make all properties in T optional
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderItemDTO>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.updateOrderItem(
     *   'orderDetailId123',
     *   {
     *     item_id: 'item123',
     *     quantity: 2
     *   }
     * );
     * ```
     *
     */
    updateOrderItem(orderDetailId: string, data: Partial<UpdateOrderItemDTO>, sharedContext?: Context): Promise<OrderItemDTO>;
    /**
     * This method updates existing {return type}(s).
     *
     * @param {string | Partial<OrderItemDTO> | UpdateOrderItemWithSelectorDTO[]} orderDetailIdOrDataOrSelector - The string |  partial< order item d t o> |  update order item with selector details.
     * @param {UpdateOrderItemDTO | Partial<UpdateOrderItemDTO>} data - {summary}
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderItemDTO | OrderItemDTO[]>} The updated {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.updateOrderItem(
     *   "order-detail-id",
     *   {
     *     quantity: 2,
     *     item_id: 'item123',
     *   }
     * );
     * ```
     *
     */
    updateOrderItem(orderDetailIdOrDataOrSelector: string | UpdateOrderItemWithSelectorDTO[] | Partial<OrderItemDTO>, data?: UpdateOrderItemDTO | Partial<UpdateOrderItemDTO>, sharedContext?: Context): Promise<OrderItemDTO[] | OrderItemDTO>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderShippingMethodProps} filters - The filters to apply on the retrieved order shipping method.
     * @param {FindConfig<OrderShippingMethodDTO>} config - The configurations determining how the order shipping method is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order shipping method.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderShippingMethodDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.listShippingMethods(
     *   { order_id: "order_123" },
     *   { limit: 10, offset: 0 }
     * );
     * ```
     *
     */
    listShippingMethods(filters: FilterableOrderShippingMethodProps, config: FindConfig<OrderShippingMethodDTO>, sharedContext?: Context): Promise<OrderShippingMethodDTO[]>;
    createShippingMethods(data: CreateOrderShippingMethodDTO): Promise<OrderShippingMethodDTO>;
    createShippingMethods(data: CreateOrderShippingMethodDTO[]): Promise<OrderShippingMethodDTO[]>;
    createShippingMethods(orderId: string, methods: CreateOrderShippingMethodDTO[], sharedContext?: Context): Promise<OrderShippingMethodDTO[]>;
    deleteShippingMethods(methodIds: string[], sharedContext?: Context): Promise<void>;
    deleteShippingMethods(methodIds: string, sharedContext?: Context): Promise<void>;
    deleteShippingMethods(selector: Partial<FilterableOrderShippingMethodProps>, sharedContext?: Context): Promise<void>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderLineItemAdjustmentProps} filters - The filters to apply on the retrieved order line item adjustment.
     * @param {FindConfig<OrderLineItemAdjustmentDTO>} config - The configurations determining how the order line item adjustment is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order line item adjustment.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemAdjustmentDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * const orderLineItemAdjustments = await orderModuleService.listLineItemAdjustments({ item_id: "order-line-item-123" });
     * ```
     *
     */
    listLineItemAdjustments(filters: FilterableOrderLineItemAdjustmentProps, config?: FindConfig<OrderLineItemAdjustmentDTO>, sharedContext?: Context): Promise<OrderLineItemAdjustmentDTO[]>;
    createLineItemAdjustments(data: CreateOrderAdjustmentDTO[]): Promise<OrderLineItemAdjustmentDTO[]>;
    createLineItemAdjustments(data: CreateOrderAdjustmentDTO): Promise<OrderLineItemAdjustmentDTO[]>;
    createLineItemAdjustments(orderId: string, data: CreateOrderAdjustmentDTO[]): Promise<OrderLineItemAdjustmentDTO[]>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {UpsertOrderLineItemAdjustmentDTO[]} data - The upsert order line item adjustment details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemAdjustmentDTO[]>} Represents the completion of an asynchronous operation
     *
     * @example
     * ```typescript
     * const adjustmentsData: UpsertOrderLineItemAdjustmentDTO[] = [{
     *   item_id: "item123",
     *   amount: 1000
     * }];
     *
     * const result = await orderModuleService.setLineItemAdjustments("order456", adjustmentsData);
     * ```
     *
     */
    setLineItemAdjustments(orderId: string, data: UpsertOrderLineItemAdjustmentDTO[], sharedContext?: Context): Promise<OrderLineItemAdjustmentDTO[]>;
    deleteLineItemAdjustments(adjustmentIds: string[], sharedContext?: Context): Promise<void>;
    deleteLineItemAdjustments(adjustmentIds: string, sharedContext?: Context): Promise<void>;
    deleteLineItemAdjustments(selector: Partial<OrderLineItemAdjustmentDTO>, sharedContext?: Context): Promise<void>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderShippingMethodAdjustmentProps} filters - The filters to apply on the retrieved order shipping method adjustment.
     * @param {FindConfig<OrderShippingMethodAdjustmentDTO>} config - The configurations determining how the order shipping method adjustment is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order shipping method adjustment.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderShippingMethodAdjustmentDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.listShippingMethodAdjustments({
     *   id: "12345",
     * });
     * ```
     *
     */
    listShippingMethodAdjustments(filters: FilterableOrderShippingMethodAdjustmentProps, config?: FindConfig<OrderShippingMethodAdjustmentDTO>, sharedContext?: Context): Promise<OrderShippingMethodAdjustmentDTO[]>;
    createShippingMethodAdjustments(data: CreateOrderShippingMethodAdjustmentDTO[]): Promise<OrderShippingMethodAdjustmentDTO[]>;
    createShippingMethodAdjustments(data: CreateOrderShippingMethodAdjustmentDTO): Promise<OrderShippingMethodAdjustmentDTO>;
    createShippingMethodAdjustments(orderId: string, data: CreateOrderShippingMethodAdjustmentDTO[], sharedContext?: Context): Promise<OrderShippingMethodAdjustmentDTO[]>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {(CreateOrderShippingMethodAdjustmentDTO | UpdateOrderShippingMethodAdjustmentDTO)[]} data - The list of The order shipping method adjustment d t o |  update order shipping method adjustment to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderShippingMethodAdjustmentDTO[]>} Represents the completion of an asynchronous operation
     *
     * @example
     * ```typescript
     * await orderModuleService.setShippingMethodAdjustments("orderId123", [
     *   {
     *     shipping_method_id: "shipMethodId123",
     *     code: "CODE123",
     *     amount: 1000,
     *   }
     * ]);
     * ```
     *
     */
    setShippingMethodAdjustments(orderId: string, data: (CreateOrderShippingMethodAdjustmentDTO | UpdateOrderShippingMethodAdjustmentDTO)[], sharedContext?: Context): Promise<OrderShippingMethodAdjustmentDTO[]>;
    deleteShippingMethodAdjustments(adjustmentIds: string[], sharedContext?: Context): Promise<void>;
    deleteShippingMethodAdjustments(adjustmentId: string, sharedContext?: Context): Promise<void>;
    deleteShippingMethodAdjustments(selector: Partial<OrderShippingMethodAdjustmentDTO>, sharedContext?: Context): Promise<void>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderLineItemTaxLineProps} filters - The filters to apply on the retrieved order line item tax line.
     * @param {FindConfig<OrderLineItemTaxLineDTO>} config - The configurations determining how the order line item tax line is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order line item tax line.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemTaxLineDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * await orderModuleService.listLineItemTaxLines({ id: "123" });
     * ```
     *
     */
    listLineItemTaxLines(filters: FilterableOrderLineItemTaxLineProps, config?: FindConfig<OrderLineItemTaxLineDTO>, sharedContext?: Context): Promise<OrderLineItemTaxLineDTO[]>;
    createLineItemTaxLines(taxLines: CreateOrderLineItemTaxLineDTO[]): Promise<OrderLineItemTaxLineDTO[]>;
    createLineItemTaxLines(taxLine: CreateOrderLineItemTaxLineDTO): Promise<OrderLineItemTaxLineDTO>;
    createLineItemTaxLines(orderId: string, taxLines: CreateOrderLineItemTaxLineDTO[] | CreateOrderLineItemTaxLineDTO, sharedContext?: Context): Promise<OrderLineItemTaxLineDTO[]>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {(CreateOrderLineItemTaxLineDTO | UpdateOrderLineItemTaxLineDTO)[]} taxLines - The list of The order line item tax line d t o |  update order line item tax line to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderLineItemTaxLineDTO[]>} Represents the completion of an asynchronous operation
     *
     * @example
     * ```typescript
     * const orderId = '12345';
     * const taxLines: (CreateOrderLineItemTaxLineDTO | UpdateOrderLineItemTaxLineDTO)[] = [
     *   {
     *     code: "TAX1001",
     *     rate: 70,
     *   }
     * ];
     *
     * const result = await orderModuleService.setLineItemTaxLines(orderId, taxLines);
     *
     * console.log(result);
     * ```
     *
     */
    setLineItemTaxLines(orderId: string, taxLines: (CreateOrderLineItemTaxLineDTO | UpdateOrderLineItemTaxLineDTO)[], sharedContext?: Context): Promise<OrderLineItemTaxLineDTO[]>;
    deleteLineItemTaxLines(taxLineIds: string[], sharedContext?: Context): Promise<void>;
    deleteLineItemTaxLines(taxLineIds: string, sharedContext?: Context): Promise<void>;
    deleteLineItemTaxLines(selector: FilterableOrderLineItemTaxLineProps, sharedContext?: Context): Promise<void>;
    /**
     * This method retrieves a paginated list of {return type}(s) based on optional filters and configuration.
     *
     * @param {FilterableOrderShippingMethodTaxLineProps} filters - The filters to apply on the retrieved order shipping method tax line.
     * @param {FindConfig<OrderShippingMethodTaxLineDTO>} config - The configurations determining how the order shipping method tax line is retrieved. Its properties, such as `select` or `relations`, accept the
     * attributes or relations associated with a order shipping method tax line.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderShippingMethodTaxLineDTO[]>} The list of {return type}(s).
     *
     * @example
     * ```typescript
     * async function executeMethod() {
     *   const result = await orderModuleService.listShippingMethodTaxLines({
     *     id: "123",
     *   });
     * }
     * ```
     *
     */
    listShippingMethodTaxLines(filters: FilterableOrderShippingMethodTaxLineProps, config?: FindConfig<OrderShippingMethodTaxLineDTO>, sharedContext?: Context): Promise<OrderShippingMethodTaxLineDTO[]>;
    createShippingMethodTaxLines(taxLines: CreateOrderShippingMethodTaxLineDTO[]): Promise<OrderShippingMethodTaxLineDTO[]>;
    createShippingMethodTaxLines(taxLine: CreateOrderShippingMethodTaxLineDTO): Promise<OrderShippingMethodTaxLineDTO>;
    createShippingMethodTaxLines(orderId: string, taxLines: CreateOrderShippingMethodTaxLineDTO[] | CreateOrderShippingMethodTaxLineDTO, sharedContext?: Context): Promise<OrderShippingMethodTaxLineDTO[]>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {(CreateOrderShippingMethodTaxLineDTO | UpdateOrderShippingMethodTaxLineDTO)[]} taxLines - The list of The order shipping method tax line d t o |  update order shipping method tax line to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderShippingMethodTaxLineDTO[]>} Represents the completion of an asynchronous operation
     *
     * @example
     * ```typescript
     * const orderId = "someOrderId";
     * const taxLines = [
     *   {
     *     code: "VAT20",
     *     rate: 20,
     *   }
     * ];
     *
     * const result = await orderModuleService.setShippingMethodTaxLines(orderId, taxLines);
     * ```
     *
     */
    setShippingMethodTaxLines(orderId: string, taxLines: (CreateOrderShippingMethodTaxLineDTO | UpdateOrderShippingMethodTaxLineDTO)[], sharedContext?: Context): Promise<OrderShippingMethodTaxLineDTO[]>;
    deleteShippingMethodTaxLines(taxLineIds: string[], sharedContext?: Context): Promise<void>;
    deleteShippingMethodTaxLines(taxLineIds: string, sharedContext?: Context): Promise<void>;
    deleteShippingMethodTaxLines(selector: FilterableOrderShippingMethodTaxLineProps, sharedContext?: Context): Promise<void>;
    createOrderChange(data: CreateOrderChangeDTO, sharedContext?: Context): Promise<OrderChangeDTO>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderChangeDTO[]} data - The order change to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderChangeDTO[]>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * // Example call to createOrderChange
     *
     * const createOrderChangeData: CreateOrderChangeDTO[] = [{
     *     order_id: "order123",
     *     description: "Change due to customer request"
     * }];
     *
     * const result = await orderModuleService.createOrderChange(createOrderChangeData);
     * ```
     *
     */
    createOrderChange(data: CreateOrderChangeDTO[], sharedContext?: Context): Promise<OrderChangeDTO[]>;
    /**
     * This method creates {return type}(s)
     *
     * @param {CreateOrderChangeDTO | CreateOrderChangeDTO[]} data - The order change d t o |  create order change to be created.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<OrderChangeDTO | OrderChangeDTO[]>} The created {return type}(s).
     *
     * @example
     * ```typescript
     * const result = await orderModuleService.createOrderChange({
     *   order_id: "order123",
     *   description: "Adding new item to the order"
     * });
     * ```
     *
     */
    createOrderChange(data: CreateOrderChangeDTO | CreateOrderChangeDTO[], sharedContext?: Context): Promise<OrderChangeDTO | OrderChangeDTO[]>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.cancelOrderChange("orderId123");
     * ```
     *
     */
    cancelOrderChange(orderId: string, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string[]} orderId - The order's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.cancelOrderChange(["1234ABCD"]);
     * ```
     *
     */
    cancelOrderChange(orderId: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {CancelOrderChangeDTO} data - The cancel order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * const cancelOrderChangeData: CancelOrderChangeDTO = {
     *   id: "orderChangeId",
     * };
     *
     * await orderModuleService.cancelOrderChange(cancelOrderChangeData);
     * ```
     *
     */
    cancelOrderChange(data: CancelOrderChangeDTO, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {CancelOrderChangeDTO[]} data - The cancel order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.cancelOrderChange([{ id: "orderChangeId" }]);
     * ```
     *
     */
    cancelOrderChange(data: CancelOrderChangeDTO[], sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderId - The order's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.confirmOrderChange("123456789");
     * ```
     *
     */
    confirmOrderChange(orderChangeId: string, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string[]} orderChangeId - The order change's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.confirmOrderChange(["12345"]);
     * ```
     *
     */
    confirmOrderChange(orderChangeId: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {ConfirmOrderChangeDTO} data - The confirm order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.confirmOrderChange({
     *   id: "123456"
     * });
     * ```
     *
     */
    confirmOrderChange(data: ConfirmOrderChangeDTO, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {ConfirmOrderChangeDTO[]} data - The confirm order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * const confirmOrderChangesData: ConfirmOrderChangeDTO[] = [{
     *   id: "orderChangeId",
     * }];
     *
     * await orderModuleService.confirmOrderChange(confirmOrderChangesData);
     * ```
     *
     */
    confirmOrderChange(data: ConfirmOrderChangeDTO[], sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string} orderChangeId - The order change's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.declineOrderChange("orderChangeId");
     * ```
     *
     */
    declineOrderChange(orderChangeId: string, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {string[]} orderChangeId - The order change's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.declineOrderChange(["orderChangeId"]);
     * ```
     *
     */
    declineOrderChange(orderChangeId: string[], sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {DeclineOrderChangeDTO} data - The decline order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.declineOrderChange({
     *   id: "123456",
     * });
     * ```
     *
     */
    declineOrderChange(data: DeclineOrderChangeDTO, sharedContext?: Context): Promise<void>;
    /**
     * This method Represents the completion of an asynchronous operation
     *
     * @param {DeclineOrderChangeDTO[]} data - The decline order change details.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {Promise<void>} Resolves when {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.declineOrderChange([
     *   {
     *     id: "12345",
     *   }
     * ]);
     * ```
     *
     */
    declineOrderChange(data: DeclineOrderChangeDTO[], sharedContext?: Context): Promise<void>;
    /**
     * This method {summary}
     *
     * @param {string | string[]} orderId - The order's ID.
     * @param {Context} sharedContext - A context used to share resources, such as transaction manager, between the application and the module.
     * @returns {(orderId: string | string[], sharedContext?: Context) => any} {summary}
     *
     * @example
     * ```typescript
     * await orderModuleService.applyPendingOrderActions("12345");
     * ```
     *
     */
    applyPendingOrderActions(orderId: string | string[], sharedContext?: Context): any;
    addOrderAction(data: CreateOrderChangeActionDTO, sharedContext?: Context): Promise<OrderChangeActionDTO>;
    addOrderAction(data: CreateOrderChangeActionDTO[], sharedContext?: Context): Promise<OrderChangeActionDTO[]>;
    softDeleteAddresses<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreAddresses<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteLineItems<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreLineItems<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteShippingMethods<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreShippingMethods<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteLineItemAdjustments<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreLineItemAdjustments<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteShippingMethodAdjustments<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreShippingMethodAdjustments<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteLineItemTaxLines<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreLineItemTaxLines<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    softDeleteShippingMethodTaxLines<TReturnableLinkableKeys extends string = string>(ids: string[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    restoreShippingMethodTaxLines<TReturnableLinkableKeys extends string = string>(ids: string[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<TReturnableLinkableKeys, string[]> | void>;
    revertLastVersion(orderId: string, sharedContext?: Context): Promise<void>;
    registerFulfillment(data: RegisterOrderFulfillmentDTO, sharedContext?: Context): Promise<void>;
    registerShipment(data: RegisterOrderShipmentDTO, sharedContext?: Context): Promise<void>;
    createReturn(returnData: CreateOrderReturnDTO, sharedContext?: Context): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map