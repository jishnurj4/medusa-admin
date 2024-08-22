"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
var models_1 = require("../models");
var cart_1 = require("../types/cart");
var utils_2 = require("../utils");
var is_email_1 = require("../utils/is-email");
/* Provides layer to manipulate carts.
 * @implements BaseService
 */
var CartService = /** @class */ (function (_super) {
    __extends(CartService, _super);
    function CartService(_a) {
        var cartRepository = _a.cartRepository, shippingMethodRepository = _a.shippingMethodRepository, lineItemRepository = _a.lineItemRepository, eventBusService = _a.eventBusService, paymentProviderService = _a.paymentProviderService, productService = _a.productService, productVariantService = _a.productVariantService, taxProviderService = _a.taxProviderService, regionService = _a.regionService, lineItemService = _a.lineItemService, shippingOptionService = _a.shippingOptionService, shippingProfileService = _a.shippingProfileService, customerService = _a.customerService, discountService = _a.discountService, giftCardService = _a.giftCardService, totalsService = _a.totalsService, newTotalsService = _a.newTotalsService, addressRepository = _a.addressRepository, paymentSessionRepository = _a.paymentSessionRepository, customShippingOptionService = _a.customShippingOptionService, lineItemAdjustmentService = _a.lineItemAdjustmentService, priceSelectionStrategy = _a.priceSelectionStrategy, salesChannelService = _a.salesChannelService, featureFlagRouter = _a.featureFlagRouter, storeService = _a.storeService, remoteQuery = _a.remoteQuery, productVariantInventoryService = _a.productVariantInventoryService, pricingService = _a.pricingService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.shippingMethodRepository_ = shippingMethodRepository;
        _this.cartRepository_ = cartRepository;
        _this.lineItemRepository_ = lineItemRepository;
        _this.eventBus_ = eventBusService;
        _this.productVariantService_ = productVariantService;
        _this.productService_ = productService;
        _this.regionService_ = regionService;
        _this.lineItemService_ = lineItemService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.customerService_ = customerService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.shippingProfileService_ = shippingProfileService;
        _this.discountService_ = discountService;
        _this.giftCardService_ = giftCardService;
        _this.totalsService_ = totalsService;
        _this.newTotalsService_ = newTotalsService;
        _this.addressRepository_ = addressRepository;
        _this.paymentSessionRepository_ = paymentSessionRepository;
        _this.customShippingOptionService_ = customShippingOptionService;
        _this.taxProviderService_ = taxProviderService;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        _this.priceSelectionStrategy_ = priceSelectionStrategy;
        _this.salesChannelService_ = salesChannelService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.storeService_ = storeService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.pricingService_ = pricingService;
        _this.remoteQuery_ = remoteQuery;
        return _this;
    }
    /**
     * @param selector - the query object for find
     * @param config - config object
     * @return the result of the find operation
     */
    CartService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cartRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartRepo = this.activeManager_.withRepository(this.cartRepository_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, cartRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a cart by id.
     * @param cartId - the id of the cart to get.
     * @param options - the options to get a cart
     * @param totalsConfig
     * @return the cart document.
     */
    CartService.prototype.retrieve = function (cartId, options, totalsConfig) {
        if (options === void 0) { options = {}; }
        if (totalsConfig === void 0) { totalsConfig = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var i, totalsToSelect, cartRepo, query, queryRelations, raw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(cartId)) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "\"cartId\" must be defined");
                        }
                        if (this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                            if (Array.isArray(options.relations)) {
                                for (i = 0; i < options.relations.length; i++) {
                                    if (options.relations[i].startsWith("items.variant")) {
                                        options.relations[i] = "items";
                                    }
                                }
                            }
                            options.relations = __spreadArray([], __read(new Set(options.relations)), false);
                        }
                        totalsToSelect = this.transformQueryForTotals_(options).totalsToSelect;
                        if (!totalsToSelect.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieveLegacy(cartId, options, totalsConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        cartRepo = this.activeManager_.withRepository(this.cartRepository_);
                        query = (0, utils_2.buildQuery)({ id: cartId }, options);
                        if ((options.select || []).length === 0) {
                            query.select = undefined;
                        }
                        queryRelations = __assign({}, query.relations);
                        delete query.relations;
                        return [4 /*yield*/, cartRepo.findOneWithRelations(queryRelations, query)];
                    case 3:
                        raw = _a.sent();
                        if (!raw) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Cart with ".concat(cartId, " was not found"));
                        }
                        return [2 /*return*/, raw];
                }
            });
        });
    };
    /**
     * @deprecated
     * @param cartId
     * @param options
     * @param totalsConfig
     * @protected
     */
    CartService.prototype.retrieveLegacy = function (cartId, options, totalsConfig) {
        if (options === void 0) { options = {}; }
        if (totalsConfig === void 0) { totalsConfig = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cartRepo, _a, select, relations, totalsToSelect, query, raw;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cartRepo = this.activeManager_.withRepository(this.cartRepository_);
                        _a = this.transformQueryForTotals_(options), select = _a.select, relations = _a.relations, totalsToSelect = _a.totalsToSelect;
                        query = (0, utils_2.buildQuery)({ id: cartId }, __assign(__assign({}, options), { select: select, relations: relations }));
                        return [4 /*yield*/, cartRepo.findOne(query)];
                    case 1:
                        raw = _b.sent();
                        if (!raw) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Cart with ".concat(cartId, " was not found"));
                        }
                        return [4 /*yield*/, this.decorateTotals_(raw, totalsToSelect, totalsConfig)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    CartService.prototype.retrieveWithTotals = function (cartId, options, totalsConfig) {
        if (options === void 0) { options = {}; }
        if (totalsConfig === void 0) { totalsConfig = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var relations, opt, i, cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relations = this.getTotalsRelations(options);
                        opt = __assign(__assign({}, options), { relations: relations });
                        if (this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                            if (Array.isArray(opt.relations)) {
                                for (i = 0; i < opt.relations.length; i++) {
                                    if (opt.relations[i].startsWith("items.variant")) {
                                        opt.relations[i] = "items";
                                    }
                                }
                            }
                            opt.relations = __spreadArray([], __read(new Set(opt.relations)), false);
                        }
                        return [4 /*yield*/, this.retrieve(cartId, opt)];
                    case 1:
                        cart = _a.sent();
                        return [4 /*yield*/, this.decorateTotals(cart, totalsConfig)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a cart.
     * @param data - the data to create the cart with
     * @return the result of the create operation
     */
    CartService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, addressRepo, rawCart, _a, customer, _b, _c, customer, region, _d, regCountries, addr, addr, remainingFields, remainingFields_1, remainingFields_1_1, remainingField, key, createdCart, cart, salesChannel;
                            var e_1, _e;
                            var _f, _g;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0:
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        addressRepo = transactionManager.withRepository(this.addressRepository_);
                                        rawCart = {
                                            context: (_f = data.context) !== null && _f !== void 0 ? _f : {},
                                        };
                                        if (!(this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key) &&
                                            !this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key))) return [3 /*break*/, 2];
                                        _a = rawCart;
                                        return [4 /*yield*/, this.getValidatedSalesChannel(data.sales_channel_id)];
                                    case 1:
                                        _a.sales_channel_id = (_h.sent()).id;
                                        _h.label = 2;
                                    case 2:
                                        if (!(data.customer_id || data.customer)) return [3 /*break*/, 7];
                                        if (!((_g = data.customer) !== null && _g !== void 0)) return [3 /*break*/, 3];
                                        _b = _g;
                                        return [3 /*break*/, 6];
                                    case 3:
                                        _c = data.customer_id;
                                        if (!_c) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.customerService_
                                                .withTransaction(transactionManager)
                                                .retrieve(data.customer_id)
                                                .catch(function () { return undefined; })];
                                    case 4:
                                        _c = (_h.sent());
                                        _h.label = 5;
                                    case 5:
                                        _b = (_c);
                                        _h.label = 6;
                                    case 6:
                                        customer = (_b);
                                        rawCart.customer = customer;
                                        rawCart.customer_id = customer === null || customer === void 0 ? void 0 : customer.id;
                                        rawCart.email = customer === null || customer === void 0 ? void 0 : customer.email;
                                        _h.label = 7;
                                    case 7:
                                        if (!(!rawCart.email && data.email)) return [3 /*break*/, 9];
                                        return [4 /*yield*/, this.createOrFetchGuestCustomerFromEmail_(data.email)];
                                    case 8:
                                        customer = _h.sent();
                                        rawCart.customer = customer;
                                        rawCart.customer_id = customer.id;
                                        rawCart.email = customer.email;
                                        _h.label = 9;
                                    case 9:
                                        if (!data.region_id && !data.region) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "A region_id must be provided when creating a cart");
                                        }
                                        rawCart.region_id = data.region_id;
                                        if (!data.region) return [3 /*break*/, 10];
                                        _d = data.region;
                                        return [3 /*break*/, 12];
                                    case 10: return [4 /*yield*/, this.regionService_
                                            .withTransaction(transactionManager)
                                            .retrieve(data.region_id, {
                                            relations: ["countries"],
                                        })];
                                    case 11:
                                        _d = _h.sent();
                                        _h.label = 12;
                                    case 12:
                                        region = _d;
                                        regCountries = region.countries.map(function (_a) {
                                            var iso_2 = _a.iso_2;
                                            return iso_2;
                                        });
                                        if (!(!data.shipping_address && !data.shipping_address_id)) return [3 /*break*/, 13];
                                        if (region.countries.length === 1) {
                                            rawCart.shipping_address = addressRepo.create({
                                                country_code: regCountries[0],
                                            });
                                        }
                                        return [3 /*break*/, 15];
                                    case 13:
                                        if (data.shipping_address) {
                                            if (!regCountries.includes(data.shipping_address.country_code)) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Shipping country not in region");
                                            }
                                            rawCart.shipping_address = data.shipping_address;
                                        }
                                        if (!data.shipping_address_id) return [3 /*break*/, 15];
                                        return [4 /*yield*/, addressRepo.findOne({
                                                where: { id: data.shipping_address_id },
                                            })];
                                    case 14:
                                        addr = _h.sent();
                                        if ((addr === null || addr === void 0 ? void 0 : addr.country_code) &&
                                            !regCountries.includes(addr.country_code)) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Shipping country not in region");
                                        }
                                        rawCart.shipping_address_id = data.shipping_address_id;
                                        _h.label = 15;
                                    case 15:
                                        if (data.billing_address) {
                                            if (!regCountries.includes(data.billing_address.country_code)) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Billing country not in region");
                                            }
                                            rawCart.billing_address = data.billing_address;
                                        }
                                        if (!data.billing_address_id) return [3 /*break*/, 17];
                                        return [4 /*yield*/, addressRepo.findOne({
                                                where: { id: data.billing_address_id },
                                            })];
                                    case 16:
                                        addr = _h.sent();
                                        if ((addr === null || addr === void 0 ? void 0 : addr.country_code) && !regCountries.includes(addr.country_code)) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Billing country not in region");
                                        }
                                        rawCart.billing_address_id = data.billing_address_id;
                                        _h.label = 17;
                                    case 17:
                                        remainingFields = [
                                            "context",
                                            "type",
                                            "metadata",
                                            "discounts",
                                            "gift_cards",
                                        ];
                                        try {
                                            for (remainingFields_1 = __values(remainingFields), remainingFields_1_1 = remainingFields_1.next(); !remainingFields_1_1.done; remainingFields_1_1 = remainingFields_1.next()) {
                                                remainingField = remainingFields_1_1.value;
                                                if ((0, utils_1.isDefined)(data[remainingField]) && remainingField !== "object") {
                                                    key = remainingField;
                                                    rawCart[key] = data[remainingField];
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (remainingFields_1_1 && !remainingFields_1_1.done && (_e = remainingFields_1.return)) _e.call(remainingFields_1);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        createdCart = cartRepo.create(rawCart);
                                        return [4 /*yield*/, cartRepo.save(createdCart)];
                                    case 18:
                                        cart = _h.sent();
                                        if (!this.featureFlagRouter_.isFeatureEnabled([
                                            sales_channels_1.default.key,
                                            utils_1.MedusaV2Flag.key,
                                        ])) return [3 /*break*/, 20];
                                        return [4 /*yield*/, this.getValidatedSalesChannel(data.sales_channel_id)];
                                    case 19:
                                        salesChannel = _h.sent();
                                        cart.sales_channel_id = salesChannel.id;
                                        _h.label = 20;
                                    case 20: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.CREATED, {
                                            id: cart.id,
                                        })];
                                    case 21:
                                        _h.sent();
                                        return [2 /*return*/, cart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.getValidatedSalesChannel = function (salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannel, query;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(salesChannelId)) return [3 /*break*/, 5];
                        if (!this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                        query = {
                            sales_channel: {
                                __args: {
                                    id: salesChannelId,
                                },
                            },
                        };
                        return [4 /*yield*/, this.remoteQuery_(query)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), salesChannel = _a[0];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.salesChannelService_
                            .withTransaction(this.activeManager_)
                            .retrieve(salesChannelId)];
                    case 3:
                        salesChannel = _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.storeService_.withTransaction(this.activeManager_).retrieve({
                            relations: ["default_sales_channel"],
                        })];
                    case 6:
                        salesChannel = (_b.sent()).default_sales_channel;
                        _b.label = 7;
                    case 7:
                        if (salesChannel.is_disabled) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Unable to assign the cart to a disabled Sales Channel \"".concat(salesChannel.name, "\""));
                        }
                        return [2 /*return*/, salesChannel];
                }
            });
        });
    };
    /**
     * Removes a line item from the cart.
     * @param cartId - the id of the cart that we will remove from
     * @param lineItemId - the line item(s) to remove.
     * @return the result of the update operation
     */
    CartService.prototype.removeLineItem = function (cartId, lineItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, lineItemIdsToRemove, lineItems, lineItemRepository, result;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["items.variant.product.profiles", "shipping_methods"],
                                        })];
                                    case 1:
                                        cart = _b.sent();
                                        lineItemIdsToRemove = new Set(Array.isArray(lineItemId) ? lineItemId : [lineItemId]);
                                        lineItems = cart.items.filter(function (item) {
                                            return lineItemIdsToRemove.has(item.id);
                                        });
                                        if (!lineItems.length) {
                                            return [2 /*return*/];
                                        }
                                        if (!((_a = cart.shipping_methods) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(transactionManager)
                                                .deleteShippingMethods(cart.shipping_methods)];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        lineItemRepository = transactionManager.withRepository(this.lineItemRepository_);
                                        return [4 /*yield*/, lineItemRepository.update({
                                                id: (0, typeorm_1.In)(cart.items.map(function (item) { return item.id; })),
                                            }, {
                                                has_shipping: false,
                                            })];
                                    case 4:
                                        _b.sent();
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(transactionManager)
                                                .delete(__spreadArray([], __read(lineItemIdsToRemove), false))];
                                    case 5:
                                        _b.sent();
                                        return [4 /*yield*/, this.retrieve(cartId, {
                                                relations: [
                                                    "items.variant.product.profiles",
                                                    "discounts.rule",
                                                    "region",
                                                ],
                                            })];
                                    case 6:
                                        result = _b.sent();
                                        return [4 /*yield*/, this.refreshAdjustments_(result)
                                            // Notify subscribers
                                        ];
                                    case 7:
                                        _b.sent();
                                        // Notify subscribers
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, {
                                                id: cart.id,
                                            })];
                                    case 8:
                                        // Notify subscribers
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if a given line item has a shipping method that can fulfill it.
     * Returns true if all products in the cart can be fulfilled with the current
     * shipping methods.
     * @param shippingMethods - the set of shipping methods to check from
     * @param lineItemShippingProfiledId - the line item
     * @return boolean representing whether shipping method is validated
     */
    CartService.prototype.validateLineItemShipping_ = function (shippingMethods, lineItemShippingProfiledId) {
        if (!lineItemShippingProfiledId) {
            return true;
        }
        if (shippingMethods &&
            shippingMethods.length &&
            lineItemShippingProfiledId) {
            var selectedProfiles = shippingMethods.map(function (_a) {
                var shipping_option = _a.shipping_option;
                return shipping_option.profile_id;
            });
            return selectedProfiles.includes(lineItemShippingProfiledId);
        }
        return false;
    };
    /**
     * Check if line item's variant belongs to the cart's sales channel.
     *
     * @param sales_channel_id - the cart for the line item
     * @param lineItem - the line item being added
     * @return a boolean indicating validation result
     */
    CartService.prototype.validateLineItem = function (_a, lineItem) {
        var _b;
        var sales_channel_id = _a.sales_channel_id;
        return __awaiter(this, void 0, void 0, function () {
            var lineItemVariant, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!sales_channel_id || !lineItem.variant_id) {
                            return [2 /*return*/, true];
                        }
                        if (!((_b = lineItem.variant) === null || _b === void 0 ? void 0 : _b.product_id)) return [3 /*break*/, 1];
                        _c = lineItem.variant;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.productVariantService_
                            .withTransaction(this.activeManager_)
                            .retrieve(lineItem.variant_id, { select: ["id", "product_id"] })];
                    case 2:
                        _c = _d.sent();
                        _d.label = 3;
                    case 3:
                        lineItemVariant = _c;
                        return [4 /*yield*/, this.productService_
                                .withTransaction(this.activeManager_)
                                .filterProductsBySalesChannel([lineItemVariant.product_id], sales_channel_id)];
                    case 4: return [2 /*return*/, !!(_d.sent()).length];
                }
            });
        });
    };
    /**
     * Adds a line item to the cart.
     * @param cartId - the id of the cart that we will add to
     * @param lineItem - the line item to add.
     * @param config
     *    validateSalesChannels - should check if product belongs to the same sales channel as cart
     *                            (if cart has associated sales channel)
     * @return the result of the update operation
     * @deprecated Use {@link addOrUpdateLineItems} instead.
     */
    CartService.prototype.addLineItem = function (cartId, lineItem, config) {
        if (config === void 0) { config = { validateSalesChannels: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var fields, relations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = ["id"];
                        relations = ["shipping_methods"];
                        if (this.featureFlagRouter_.isFeatureEnabled("sales_channels")) {
                            if (this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                                relations.push("sales_channels");
                            }
                            else {
                                fields.push("sales_channel_id");
                            }
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var cart, lineItemIsValid, lineItemServiceTx, currentItem, _a, existingItem, quantity, isCovered;
                                var _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                                select: fields,
                                                relations: relations,
                                            })];
                                        case 1:
                                            cart = _c.sent();
                                            if (!this.featureFlagRouter_.isFeatureEnabled("sales_channels")) return [3 /*break*/, 3];
                                            if (!config.validateSalesChannels) return [3 /*break*/, 3];
                                            if (!lineItem.variant_id) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.validateLineItem(cart, lineItem)];
                                        case 2:
                                            lineItemIsValid = _c.sent();
                                            if (!lineItemIsValid) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The product \"".concat(lineItem.title, "\" must belongs to the sales channel on which the cart has been created."));
                                            }
                                            _c.label = 3;
                                        case 3:
                                            lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                            if (!lineItem.should_merge) return [3 /*break*/, 5];
                                            return [4 /*yield*/, lineItemServiceTx.list({
                                                    cart_id: cart.id,
                                                    variant_id: lineItem.variant_id,
                                                    should_merge: true,
                                                }, { take: 1, select: ["id", "metadata", "quantity"] })];
                                        case 4:
                                            _a = __read.apply(void 0, [_c.sent(), 1]), existingItem = _a[0];
                                            if (existingItem &&
                                                (0, lodash_1.isEqual)(existingItem.metadata, lineItem.metadata)) {
                                                currentItem = existingItem;
                                            }
                                            _c.label = 5;
                                        case 5:
                                            quantity = currentItem
                                                ? (currentItem.quantity += lineItem.quantity)
                                                : lineItem.quantity;
                                            if (!lineItem.variant_id) return [3 /*break*/, 7];
                                            return [4 /*yield*/, this.productVariantInventoryService_.confirmInventory(lineItem.variant_id, quantity, { salesChannelId: cart.sales_channel_id })];
                                        case 6:
                                            isCovered = _c.sent();
                                            if (!isCovered) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Variant with id: ".concat(lineItem.variant_id, " does not have the required inventory"), utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY);
                                            }
                                            _c.label = 7;
                                        case 7:
                                            if (!currentItem) return [3 /*break*/, 9];
                                            return [4 /*yield*/, lineItemServiceTx.update(currentItem.id, {
                                                    quantity: currentItem.quantity,
                                                })];
                                        case 8:
                                            _c.sent();
                                            return [3 /*break*/, 11];
                                        case 9: return [4 /*yield*/, lineItemServiceTx.create(__assign(__assign({}, lineItem), { has_shipping: false, cart_id: cart.id }))];
                                        case 10:
                                            _c.sent();
                                            _c.label = 11;
                                        case 11: return [4 /*yield*/, lineItemServiceTx
                                                .update({ cart_id: cartId, has_shipping: true }, { has_shipping: false })
                                                .catch(function (err) {
                                                // We only want to catch the errors related to not found items since we don't care if there is not item to update
                                                if ("type" in err && err.type === utils_1.MedusaError.Types.NOT_FOUND) {
                                                    return;
                                                }
                                                throw err;
                                            })];
                                        case 12:
                                            _c.sent();
                                            if (!((_b = cart.shipping_methods) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 14];
                                            return [4 /*yield*/, this.shippingOptionService_
                                                    .withTransaction(transactionManager)
                                                    .deleteShippingMethods(cart.shipping_methods)];
                                        case 13:
                                            _c.sent();
                                            _c.label = 14;
                                        case 14: return [4 /*yield*/, this.retrieve(cart.id, {
                                                relations: [
                                                    "items.variant.product.profiles",
                                                    "discounts",
                                                    "discounts.rule",
                                                    "region",
                                                ],
                                            })];
                                        case 15:
                                            cart = _c.sent();
                                            return [4 /*yield*/, this.refreshAdjustments_(cart)];
                                        case 16:
                                            _c.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(CartService.Events.UPDATED, { id: cart.id })];
                                        case 17:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds or update one or multiple line items to the cart. It also update all existing items in the cart
     * to have has_shipping to false. Finally, the adjustments will be updated.
     * @param cartId - the id of the cart that we will add to
     * @param lineItems - the line items to add.
     * @param config
     *    validateSalesChannels - should check if product belongs to the same sales channel as cart
     *                            (if cart has associated sales channel)
     * @return the result of the update operation
     */
    CartService.prototype.addOrUpdateLineItems = function (cartId, lineItems, config) {
        if (config === void 0) { config = { validateSalesChannels: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var items, fields, relations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = Array.isArray(lineItems) ? lineItems : [lineItems];
                        fields = ["id", "customer_id", "region_id"];
                        relations = ["shipping_methods"];
                        if (this.featureFlagRouter_.isFeatureEnabled("sales_channels")) {
                            if (this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                                relations.push("sales_channels");
                            }
                            else {
                                fields.push("sales_channel_id");
                            }
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var cart, areValid, invalidProducts, lineItemServiceTx, productVariantInventoryServiceTx, existingItems, existingItemsVariantMap, lineItemsToCreate, lineItemsToUpdate, items_1, items_1_1, item, currentItem, existingItem, isSufficient, variantsPricing, calculated_price, e_2_1, itemKeysToUpdate;
                                var e_2, _a;
                                var _this = this;
                                var _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                                select: fields,
                                                relations: relations,
                                            })];
                                        case 1:
                                            cart = _c.sent();
                                            if (!this.featureFlagRouter_.isFeatureEnabled("sales_channels")) return [3 /*break*/, 3];
                                            if (!config.validateSalesChannels) return [3 /*break*/, 3];
                                            return [4 /*yield*/, (0, utils_1.promiseAll)(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!item.variant_id) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, this.validateLineItem(cart, item)];
                                                            case 1: return [2 /*return*/, _a.sent()];
                                                            case 2: return [2 /*return*/, true];
                                                        }
                                                    });
                                                }); }))];
                                        case 2:
                                            areValid = _c.sent();
                                            invalidProducts = areValid
                                                .map(function (valid, index) {
                                                return !valid ? { title: items[index].title } : undefined;
                                            })
                                                .filter(function (v) { return !!v; });
                                            if (invalidProducts.length) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The products [".concat(invalidProducts
                                                    .map(function (item) { return item.title; })
                                                    .join(" - "), "] must belongs to the sales channel on which the cart has been created."));
                                            }
                                            _c.label = 3;
                                        case 3:
                                            lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                            productVariantInventoryServiceTx = this.productVariantInventoryService_.withTransaction(transactionManager);
                                            return [4 /*yield*/, lineItemServiceTx.list({
                                                    cart_id: cart.id,
                                                    variant_id: (0, typeorm_1.In)(items.map(function (item) { return item.variant_id; })),
                                                    should_merge: true,
                                                }, { select: ["id", "metadata", "quantity", "variant_id"] })];
                                        case 4:
                                            existingItems = _c.sent();
                                            existingItemsVariantMap = new Map();
                                            existingItems.forEach(function (item) {
                                                existingItemsVariantMap.set(item.variant_id, item);
                                            });
                                            lineItemsToCreate = [];
                                            lineItemsToUpdate = [];
                                            _c.label = 5;
                                        case 5:
                                            _c.trys.push([5, 13, 14, 15]);
                                            items_1 = __values(items), items_1_1 = items_1.next();
                                            _c.label = 6;
                                        case 6:
                                            if (!!items_1_1.done) return [3 /*break*/, 12];
                                            item = items_1_1.value;
                                            currentItem = void 0;
                                            existingItem = existingItemsVariantMap.get(item.variant_id);
                                            if (item.should_merge) {
                                                if (existingItem && (0, lodash_1.isEqual)(existingItem.metadata, item.metadata)) {
                                                    currentItem = existingItem;
                                                }
                                            }
                                            // If content matches one of the line items currently in the cart we can
                                            // simply update the quantity of the existing line item
                                            item.quantity = currentItem
                                                ? (currentItem.quantity += item.quantity)
                                                : item.quantity;
                                            if (!item.variant_id) return [3 /*break*/, 8];
                                            return [4 /*yield*/, productVariantInventoryServiceTx.confirmInventory(item.variant_id, item.quantity, { salesChannelId: cart.sales_channel_id })];
                                        case 7:
                                            isSufficient = _c.sent();
                                            if (!isSufficient) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Variant with id: ".concat(item.variant_id, " does not have the required inventory"), utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY);
                                            }
                                            _c.label = 8;
                                        case 8:
                                            if (!currentItem) return [3 /*break*/, 10];
                                            return [4 /*yield*/, this.pricingService_
                                                    .withTransaction(transactionManager)
                                                    .getProductVariantsPricing([
                                                    {
                                                        variantId: item.variant_id,
                                                        quantity: item.quantity,
                                                    },
                                                ], {
                                                    region_id: cart.region_id,
                                                    customer_id: cart.customer_id,
                                                    include_discount_prices: true,
                                                })];
                                        case 9:
                                            variantsPricing = _c.sent();
                                            calculated_price = variantsPricing[currentItem.variant_id].calculated_price;
                                            lineItemsToUpdate[currentItem.id] = {
                                                quantity: item.quantity,
                                                has_shipping: false,
                                            };
                                            if ((0, utils_1.isDefined)(calculated_price)) {
                                                lineItemsToUpdate[currentItem.id].unit_price = calculated_price;
                                            }
                                            return [3 /*break*/, 11];
                                        case 10:
                                            // Since the variant is eager loaded, we are removing it before the line item is being created.
                                            delete item.variant;
                                            item.has_shipping = false;
                                            item.cart_id = cart.id;
                                            lineItemsToCreate.push(item);
                                            _c.label = 11;
                                        case 11:
                                            items_1_1 = items_1.next();
                                            return [3 /*break*/, 6];
                                        case 12: return [3 /*break*/, 15];
                                        case 13:
                                            e_2_1 = _c.sent();
                                            e_2 = { error: e_2_1 };
                                            return [3 /*break*/, 15];
                                        case 14:
                                            try {
                                                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                            return [7 /*endfinally*/];
                                        case 15:
                                            itemKeysToUpdate = Object.keys(lineItemsToUpdate);
                                            if (!itemKeysToUpdate.length) return [3 /*break*/, 17];
                                            return [4 /*yield*/, (0, utils_1.promiseAll)(itemKeysToUpdate.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, lineItemServiceTx.update(id, lineItemsToUpdate[id])];
                                                            case 1: return [2 /*return*/, _a.sent()];
                                                        }
                                                    });
                                                }); }))];
                                        case 16:
                                            _c.sent();
                                            _c.label = 17;
                                        case 17: 
                                        // Create all items that needs to be created
                                        return [4 /*yield*/, lineItemServiceTx.create(lineItemsToCreate)];
                                        case 18:
                                            // Create all items that needs to be created
                                            _c.sent();
                                            return [4 /*yield*/, lineItemServiceTx
                                                    .update({
                                                    cart_id: cartId,
                                                    has_shipping: true,
                                                }, { has_shipping: false })
                                                    .catch(function (err) {
                                                    // We only want to catch the errors related to not found items since we don't care if there is not item to update
                                                    if ("type" in err && err.type === utils_1.MedusaError.Types.NOT_FOUND) {
                                                        return;
                                                    }
                                                    throw err;
                                                })];
                                        case 19:
                                            _c.sent();
                                            if (!((_b = cart.shipping_methods) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 21];
                                            return [4 /*yield*/, this.shippingOptionService_
                                                    .withTransaction(transactionManager)
                                                    .deleteShippingMethods(cart.shipping_methods)];
                                        case 20:
                                            _c.sent();
                                            _c.label = 21;
                                        case 21: return [4 /*yield*/, this.retrieve(cart.id, {
                                                relations: [
                                                    "items.variant.product.profiles",
                                                    "discounts",
                                                    "discounts.rule",
                                                    "region",
                                                ],
                                            })];
                                        case 22:
                                            cart = _c.sent();
                                            return [4 /*yield*/, this.refreshAdjustments_(cart)];
                                        case 23:
                                            _c.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(CartService.Events.UPDATED, { id: cart.id })];
                                        case 24:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a cart's existing line item.
     * @param cartId - the id of the cart to update
     * @param lineItemId - the id of the line item to update.
     * @param update - the line item to update. Must include an id field.
     * @return the result of the update operation
     */
    CartService.prototype.updateLineItem = function (cartId, lineItemId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var should_calculate_prices, lineItemUpdate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        should_calculate_prices = update.should_calculate_prices, lineItemUpdate = __rest(update, ["should_calculate_prices"]);
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var select, cart, lineItem, hasInventory, variantsPricing, calculated_price, updatedCart;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            select = ["id", "region_id", "customer_id"];
                                            if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) {
                                                select.push("sales_channel_id");
                                            }
                                            return [4 /*yield*/, this.retrieve(cartId, {
                                                    select: select,
                                                    relations: ["shipping_methods"],
                                                })];
                                        case 1:
                                            cart = _b.sent();
                                            return [4 /*yield*/, this.lineItemService_.retrieve(lineItemId, {
                                                    select: ["id", "quantity", "variant_id", "cart_id"],
                                                })];
                                        case 2:
                                            lineItem = _b.sent();
                                            if (lineItem.cart_id !== cartId) {
                                                // Ensure that the line item exists in the cart
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "A line item with the provided id doesn't exist in the cart");
                                            }
                                            if (!lineItemUpdate.quantity) return [3 /*break*/, 5];
                                            if (!lineItem.variant_id) return [3 /*break*/, 5];
                                            return [4 /*yield*/, this.productVariantInventoryService_.confirmInventory(lineItem.variant_id, lineItemUpdate.quantity, { salesChannelId: cart.sales_channel_id })];
                                        case 3:
                                            hasInventory = _b.sent();
                                            if (!hasInventory) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Inventory doesn't cover the desired quantity", utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY);
                                            }
                                            if (!should_calculate_prices) return [3 /*break*/, 5];
                                            return [4 /*yield*/, this.pricingService_
                                                    .withTransaction(transactionManager)
                                                    .getProductVariantsPricing([
                                                    {
                                                        variantId: lineItem.variant_id,
                                                        quantity: lineItemUpdate.quantity,
                                                    },
                                                ], {
                                                    region_id: cart.region_id,
                                                    customer_id: cart.customer_id,
                                                    include_discount_prices: true,
                                                })];
                                        case 4:
                                            variantsPricing = _b.sent();
                                            calculated_price = variantsPricing[lineItem.variant_id].calculated_price;
                                            lineItemUpdate.unit_price = calculated_price !== null && calculated_price !== void 0 ? calculated_price : undefined;
                                            _b.label = 5;
                                        case 5:
                                            if (!((_a = cart.shipping_methods) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 7];
                                            return [4 /*yield*/, this.shippingOptionService_
                                                    .withTransaction(transactionManager)
                                                    .deleteShippingMethods(cart.shipping_methods)];
                                        case 6:
                                            _b.sent();
                                            _b.label = 7;
                                        case 7: return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(transactionManager)
                                                .update(lineItemId, lineItemUpdate)];
                                        case 8:
                                            _b.sent();
                                            return [4 /*yield*/, this.retrieve(cartId, {
                                                    relations: [
                                                        "items.variant.product.profiles",
                                                        "discounts",
                                                        "discounts.rule",
                                                        "region",
                                                    ],
                                                })];
                                        case 9:
                                            updatedCart = _b.sent();
                                            return [4 /*yield*/, this.refreshAdjustments_(updatedCart)
                                                // Update the line item
                                            ];
                                        case 10:
                                            _b.sent();
                                            // Update the line item
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(CartService.Events.UPDATED, updatedCart)];
                                        case 11:
                                            // Update the line item
                                            _b.sent();
                                            return [2 /*return*/, updatedCart];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Ensures shipping total on cart is correct in regards to a potential free
     * shipping discount
     * If a free shipping is present, we set shipping methods price to 0
     * if a free shipping was present, we set shipping methods to original amount
     * @param cart - the cart to adjust free shipping for
     * @param shouldAdd - flag to indicate, if we should add or remove
     * @return void
     */
    CartService.prototype.adjustFreeShipping_ = function (cart, shouldAdd) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var shippingMethodRepository_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!((_a = cart.shipping_methods) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 4];
                        shippingMethodRepository_1 = this.activeManager_.withRepository(this.shippingMethodRepository_);
                        if (!shouldAdd) return [3 /*break*/, 2];
                        return [4 /*yield*/, shippingMethodRepository_1.update({
                                id: (0, typeorm_1.In)(cart.shipping_methods.map(function (shippingMethod) { return shippingMethod.id; })),
                            }, {
                                price: 0,
                            })];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, utils_1.promiseAll)(cart.shipping_methods.map(function (shippingMethod) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        // if free shipping discount is removed, we adjust the shipping
                                        // back to its original amount
                                        // if shipping option amount is null, we assume the option is calculated
                                        _a = shippingMethod;
                                        if (!((_c = shippingMethod.shipping_option.amount) !== null && _c !== void 0)) return [3 /*break*/, 1];
                                        _b = _c;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.shippingOptionService_.getPrice_(shippingMethod.shipping_option, shippingMethod.data, cart)];
                                    case 2:
                                        _b = (_d.sent());
                                        _d.label = 3;
                                    case 3:
                                        // if free shipping discount is removed, we adjust the shipping
                                        // back to its original amount
                                        // if shipping option amount is null, we assume the option is calculated
                                        _a.price = _b;
                                        return [2 /*return*/, shippingMethodRepository_1.save(shippingMethod)];
                                }
                            });
                        }); }))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.update = function (cartOrId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, relations, cart, _a, originalCartCustomer, customer, shippingAddress_1, countryCode, addrRepo, billingAddress, shippingAddress, salesChannel, previousDiscounts, hasFreeShipping, prevContext, updatedCart;
                            var _this = this;
                            var _b, _c, _d, _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        relations = [
                                            "items.variant.product.profiles",
                                            "shipping_methods",
                                            "shipping_methods.shipping_option",
                                            "shipping_address",
                                            "billing_address",
                                            "gift_cards",
                                            "customer",
                                            "region",
                                            "payment_sessions",
                                            "region.countries",
                                            "discounts",
                                            "discounts.rule",
                                        ];
                                        if (!!(0, utils_2.isString)(cartOrId)) return [3 /*break*/, 1];
                                        _a = cartOrId;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.retrieve(cartOrId, {
                                            relations: relations,
                                        })];
                                    case 2:
                                        _a = _g.sent();
                                        _g.label = 3;
                                    case 3:
                                        cart = _a;
                                        originalCartCustomer = __assign({}, ((_b = cart.customer) !== null && _b !== void 0 ? _b : {}));
                                        if (!data.customer_id) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.updateCustomerId_(cart, data.customer_id)];
                                    case 4:
                                        _g.sent();
                                        return [3 /*break*/, 7];
                                    case 5:
                                        if (!(0, utils_1.isDefined)(data.email)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, this.createOrFetchGuestCustomerFromEmail_(data.email)];
                                    case 6:
                                        customer = _g.sent();
                                        cart.customer = customer;
                                        cart.customer_id = customer.id;
                                        cart.email = customer.email;
                                        _g.label = 7;
                                    case 7:
                                        if (!((0, utils_1.isDefined)(data.customer_id) || (0, utils_1.isDefined)(data.region_id))) return [3 /*break*/, 9];
                                        return [4 /*yield*/, this.updateUnitPrices_(cart, data.region_id, data.customer_id)];
                                    case 8:
                                        _g.sent();
                                        _g.label = 9;
                                    case 9:
                                        if (!((0, utils_1.isDefined)(data.region_id) && cart.region_id !== data.region_id)) return [3 /*break*/, 11];
                                        shippingAddress_1 = typeof data.shipping_address !== "string"
                                            ? data.shipping_address
                                            : {};
                                        countryCode = (_c = (data.country_code || (shippingAddress_1 === null || shippingAddress_1 === void 0 ? void 0 : shippingAddress_1.country_code))) !== null && _c !== void 0 ? _c : null;
                                        return [4 /*yield*/, this.setRegion_(cart, data.region_id, countryCode)];
                                    case 10:
                                        _g.sent();
                                        _g.label = 11;
                                    case 11:
                                        addrRepo = transactionManager.withRepository(this.addressRepository_);
                                        billingAddress = (_d = data.billing_address_id) !== null && _d !== void 0 ? _d : data.billing_address;
                                        if (!(billingAddress !== undefined)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, this.updateBillingAddress_(cart, billingAddress, addrRepo)];
                                    case 12:
                                        _g.sent();
                                        _g.label = 13;
                                    case 13:
                                        shippingAddress = (_e = data.shipping_address_id) !== null && _e !== void 0 ? _e : data.shipping_address;
                                        if (!(shippingAddress !== undefined)) return [3 /*break*/, 15];
                                        return [4 /*yield*/, this.updateShippingAddress_(cart, shippingAddress, addrRepo)];
                                    case 14:
                                        _g.sent();
                                        _g.label = 15;
                                    case 15:
                                        if (!(this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key) &&
                                            (0, utils_1.isDefined)(data.sales_channel_id) &&
                                            data.sales_channel_id != cart.sales_channel_id)) return [3 /*break*/, 18];
                                        return [4 /*yield*/, this.getValidatedSalesChannel(data.sales_channel_id)];
                                    case 16:
                                        salesChannel = _g.sent();
                                        return [4 /*yield*/, this.onSalesChannelChange(cart, data.sales_channel_id)];
                                    case 17:
                                        _g.sent();
                                        cart.sales_channel_id = salesChannel.id;
                                        _g.label = 18;
                                    case 18:
                                        if (!((0, utils_1.isDefined)(data.discounts) && data.discounts.length)) return [3 /*break*/, 24];
                                        previousDiscounts = __spreadArray([], __read(cart.discounts), false);
                                        cart.discounts.length = 0;
                                        return [4 /*yield*/, this.applyDiscounts(cart, data.discounts.map(function (d) { return d.code; }))];
                                    case 19:
                                        _g.sent();
                                        hasFreeShipping = cart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return (rule === null || rule === void 0 ? void 0 : rule.type) === models_1.DiscountRuleType.FREE_SHIPPING;
                                        });
                                        if (!(previousDiscounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        }) &&
                                            !hasFreeShipping)) return [3 /*break*/, 21];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, false)];
                                    case 20:
                                        _g.sent();
                                        _g.label = 21;
                                    case 21:
                                        if (!hasFreeShipping) return [3 /*break*/, 23];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, true)];
                                    case 22:
                                        _g.sent();
                                        _g.label = 23;
                                    case 23: return [3 /*break*/, 26];
                                    case 24:
                                        if (!((0, utils_1.isDefined)(data.discounts) && !data.discounts.length)) return [3 /*break*/, 26];
                                        cart.discounts.length = 0;
                                        return [4 /*yield*/, this.refreshAdjustments_(cart)];
                                    case 25:
                                        _g.sent();
                                        _g.label = 26;
                                    case 26:
                                        if (!("gift_cards" in data)) return [3 /*break*/, 28];
                                        cart.gift_cards = [];
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(((_f = data.gift_cards) !== null && _f !== void 0 ? _f : []).map(function (_a) {
                                                var code = _a.code;
                                                return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_b) {
                                                        return [2 /*return*/, this.applyGiftCard_(cart, code)];
                                                    });
                                                });
                                            }))];
                                    case 27:
                                        _g.sent();
                                        _g.label = 28;
                                    case 28:
                                        if (data === null || data === void 0 ? void 0 : data.metadata) {
                                            cart.metadata = (0, utils_2.setMetadata)(cart, data.metadata);
                                        }
                                        if ("context" in data) {
                                            prevContext = cart.context || {};
                                            cart.context = __assign(__assign({}, prevContext), data.context);
                                        }
                                        if ("completed_at" in data) {
                                            cart.completed_at = data.completed_at;
                                        }
                                        if ("payment_authorized_at" in data) {
                                            cart.payment_authorized_at = data.payment_authorized_at;
                                        }
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 29:
                                        updatedCart = _g.sent();
                                        if (!((data.email && data.email !== originalCartCustomer.email) ||
                                            (data.customer_id && data.customer_id !== originalCartCustomer.id))) return [3 /*break*/, 31];
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.CUSTOMER_UPDATED, updatedCart.id)];
                                    case 30:
                                        _g.sent();
                                        _g.label = 31;
                                    case 31: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 32:
                                        _g.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove the cart line item that does not belongs to the newly assigned sales channel
     *
     * @param cart - The cart being updated
     * @param newSalesChannelId - The new sales channel being assigned to the cart
     * @return void
     * @protected
     */
    CartService.prototype.onSalesChannelChange = function (cart, newSalesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var productIds, productsToKeep, productIdsToKeep, itemsToRemove, itemIdsToRemove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getValidatedSalesChannel(newSalesChannelId)];
                    case 1:
                        _a.sent();
                        productIds = cart.items.map(function (item) { return item.variant.product_id; });
                        return [4 /*yield*/, this.productService_
                                .withTransaction(this.activeManager_)
                                .filterProductsBySalesChannel(productIds, newSalesChannelId, {
                                select: ["id"],
                                take: productIds.length,
                            })];
                    case 2:
                        productsToKeep = _a.sent();
                        productIdsToKeep = new Set(productsToKeep.map(function (product) { return product.id; }));
                        itemsToRemove = cart.items.filter(function (item) {
                            return !productIdsToKeep.has(item.variant.product_id);
                        });
                        if (!itemsToRemove.length) {
                            return [2 /*return*/];
                        }
                        itemIdsToRemove = new Set(itemsToRemove.map(function (item) { return item.id; }));
                        return [4 /*yield*/, this.removeLineItem(cart.id, __spreadArray([], __read(itemIdsToRemove), false))];
                    case 3:
                        _a.sent();
                        cart.items = cart.items.filter(function (item) { return !itemIdsToRemove.has(item.id); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the customer id of a cart
     * @param cart - the cart to add email to
     * @param customerId - the customer to add to cart
     * @return the result of the update operation
     */
    CartService.prototype.updateCustomerId_ = function (cart, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customerService_
                            .withTransaction(this.activeManager_)
                            .retrieve(customerId)];
                    case 1:
                        customer = _a.sent();
                        cart.customer = customer;
                        cart.customer_id = customer.id;
                        cart.email = customer.email;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates or fetches a user based on an email.
     * @param email - the email to use
     * @return the resultign customer object
     */
    CartService.prototype.createOrFetchGuestCustomerFromEmail_ = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedEmail, customerServiceTx, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedEmail = (0, is_email_1.validateEmail)(email);
                        customerServiceTx = this.customerService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, customerServiceTx
                                .retrieveUnregisteredByEmail(validatedEmail)
                                .catch(function () { return undefined; })];
                    case 1:
                        customer = _a.sent();
                        if (!!customer) return [3 /*break*/, 3];
                        return [4 /*yield*/, customerServiceTx.create({ email: validatedEmail })];
                    case 2:
                        customer = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, customer];
                }
            });
        });
    };
    /**
     * Updates the cart's billing address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the billing address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    CartService.prototype.updateBillingAddress_ = function (cart, addressOrId, addrRepo) {
        return __awaiter(this, void 0, void 0, function () {
            var address, _a, addr;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof addressOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: addressOrId },
                            })];
                    case 1:
                        address = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        address = addressOrId;
                        _b.label = 3;
                    case 3:
                        if (!address.id) return [3 /*break*/, 5];
                        _a = cart;
                        return [4 /*yield*/, addrRepo.save(address)];
                    case 4:
                        _a.billing_address = _b.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!cart.billing_address_id) return [3 /*break*/, 8];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.billing_address_id },
                            })];
                    case 6:
                        addr = _b.sent();
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        cart.billing_address = addrRepo.create(__assign({}, address));
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the cart's shipping address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the shipping address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    CartService.prototype.updateShippingAddress_ = function (cart, addressOrId, addrRepo) {
        return __awaiter(this, void 0, void 0, function () {
            var address, _a, addr;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (addressOrId === null) {
                            cart.shipping_address = null;
                            return [2 /*return*/];
                        }
                        if (!(typeof addressOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: addressOrId },
                            })];
                    case 1:
                        address = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        address = addressOrId;
                        _b.label = 3;
                    case 3:
                        if (address.country_code &&
                            !cart.region.countries.find(function (_a) {
                                var _b;
                                var iso_2 = _a.iso_2;
                                return ((_b = address.country_code) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === iso_2;
                            })) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Shipping country must be in the cart region");
                        }
                        if (!address.id) return [3 /*break*/, 5];
                        _a = cart;
                        return [4 /*yield*/, addrRepo.save(address)];
                    case 4:
                        _a.shipping_address = _b.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!cart.shipping_address_id) return [3 /*break*/, 8];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.shipping_address_id },
                            })];
                    case 6:
                        addr = _b.sent();
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        cart.shipping_address = addrRepo.create(__assign({}, address));
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.applyGiftCard_ = function (cart, code) {
        return __awaiter(this, void 0, void 0, function () {
            var giftCard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.giftCardService_
                            .withTransaction(this.activeManager_)
                            .retrieveByCode(code)];
                    case 1:
                        giftCard = _a.sent();
                        if (giftCard.is_disabled) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "The gift card is disabled");
                        }
                        if (giftCard.region_id !== cart.region_id) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The gift card cannot be used in the current region");
                        }
                        // if discount is already there, we simply resolve
                        if (cart.gift_cards.find(function (_a) {
                            var id = _a.id;
                            return id === giftCard.id;
                        })) {
                            return [2 /*return*/];
                        }
                        cart.gift_cards = __spreadArray(__spreadArray([], __read(cart.gift_cards), false), [giftCard], false);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the cart's discounts.
     * If discount besides free shipping is already applied, this
     * will be overwritten
     * Throws if discount regions does not include the cart region
     * @param cart - the cart to update
     * @param discountCode - the discount code
     */
    CartService.prototype.applyDiscount = function (cart, discountCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applyDiscounts(cart, [discountCode])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates the cart's discounts.
     * If discount besides free shipping is already applied, this
     * will be overwritten
     * Throws if discount regions does not include the cart region
     * @param cart - the cart to update
     * @param discountCodes - the discount code(s) to apply
     */
    CartService.prototype.applyDiscounts = function (cart, discountCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var discounts, rules, discountsMap, toParse, sawNotShipping, newDiscounts, hadNonFreeShippingDiscounts;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.discountService_
                                            .withTransaction(transactionManager)
                                            .listByCodes(discountCodes, {
                                            relations: ["rule", "rule.conditions", "regions"],
                                        })];
                                    case 1:
                                        discounts = _a.sent();
                                        return [4 /*yield*/, this.discountService_
                                                .withTransaction(transactionManager)
                                                .validateDiscountForCartOrThrow(cart, discounts)];
                                    case 2:
                                        _a.sent();
                                        rules = new Map();
                                        discountsMap = new Map(discounts.map(function (d) {
                                            rules.set(d.id, d.rule);
                                            return [d.id, d];
                                        }));
                                        cart.discounts.forEach(function (discount) {
                                            if (discountsMap.has(discount.id)) {
                                                discountsMap.delete(discount.id);
                                            }
                                        });
                                        toParse = __spreadArray(__spreadArray([], __read(cart.discounts), false), __read(discountsMap.values()), false);
                                        sawNotShipping = false;
                                        newDiscounts = toParse.map(function (discountToParse) {
                                            var _a;
                                            switch ((_a = discountToParse.rule) === null || _a === void 0 ? void 0 : _a.type) {
                                                case models_1.DiscountRuleType.FREE_SHIPPING:
                                                    if (discountToParse.rule.type ===
                                                        rules.get(discountToParse.id).type) {
                                                        return discountsMap.get(discountToParse.id);
                                                    }
                                                    return discountToParse;
                                                default:
                                                    if (!sawNotShipping) {
                                                        sawNotShipping = true;
                                                        if (rules.get(discountToParse.id).type !==
                                                            models_1.DiscountRuleType.FREE_SHIPPING) {
                                                            return discountsMap.get(discountToParse.id);
                                                        }
                                                        return discountToParse;
                                                    }
                                                    return null;
                                            }
                                        });
                                        cart.discounts = newDiscounts.filter(function (newDiscount) {
                                            return !!newDiscount;
                                        });
                                        hadNonFreeShippingDiscounts = __spreadArray([], __read(rules.values()), false).some(function (rule) { return rule.type !== models_1.DiscountRuleType.FREE_SHIPPING; });
                                        if (!(hadNonFreeShippingDiscounts && (cart === null || cart === void 0 ? void 0 : cart.items))) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.refreshAdjustments_(cart)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a discount based on a discount code.
     * @param cartId - the id of the cart to remove from
     * @param discountCode - the discount code to remove
     * @return the resulting cart
     */
    CartService.prototype.removeDiscount = function (cartId, discountCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo, updatedCart;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "items.variant.product.profiles",
                                                "region",
                                                "discounts",
                                                "discounts.rule",
                                                "payment_sessions",
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                            ],
                                        })];
                                    case 1:
                                        cart = _b.sent();
                                        if (!cart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        })) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.adjustFreeShipping_(cart, false)];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        cart.discounts = cart.discounts.filter(function (discount) { return discount.code !== discountCode; });
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 4:
                                        updatedCart = _b.sent();
                                        return [4 /*yield*/, this.refreshAdjustments_(updatedCart)];
                                    case 5:
                                        _b.sent();
                                        if (!((_a = cart.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, this.setPaymentSessions(cartId)];
                                    case 6:
                                        _b.sent();
                                        _b.label = 7;
                                    case 7: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 8:
                                        _b.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates the currently selected payment session.
     * @param cartId - the id of the cart to update the payment session for
     * @param update - the data to update the payment session with
     * @return the resulting cart
     */
    CartService.prototype.updatePaymentSession = function (cartId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, updatedCart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (!cart.payment_session) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .updateSessionData(cart.payment_session, update)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, this.retrieve(cart.id)];
                                    case 4:
                                        updatedCart = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authorizes a payment for a cart.
     * Will authorize with chosen payment provider. This will return
     * a payment object, that we will use to update our cart payment with.
     * Additionally, if the payment does not require more or fails, we will
     * set the payment on the cart.
     * @param cartOrId - the id of the cart to authorize payment for
     * @param context - object containing whatever is relevant for
     *    authorizing the payment with the payment provider. As an example,
     *    this could be IP address or similar for fraud handling.
     * @return the resulting cart
     */
    CartService.prototype.authorizePayment = function (cartOrId, context) {
        if (context === void 0) { context = { cart_id: "" }; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = __assign(__assign({}, context), { cart_id: (0, utils_2.isString)(cartOrId) ? cartOrId : cartOrId.id });
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var cartRepository, cart, _a, session, freshCart, _b, updatedCart;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            cartRepository = transactionManager.withRepository(this.cartRepository_);
                                            if (!!(0, utils_2.isString)(cartOrId)) return [3 /*break*/, 1];
                                            _a = cartOrId;
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, this.retrieveWithTotals(cartOrId, {
                                                relations: ["payment_sessions", "items.variant.product.profiles"],
                                            })
                                            // If cart total is 0, we don't perform anything payment related
                                        ];
                                        case 2:
                                            _a = _c.sent();
                                            _c.label = 3;
                                        case 3:
                                            cart = _a;
                                            if (!(cart.total <= 0)) return [3 /*break*/, 6];
                                            cart.payment_authorized_at = new Date();
                                            return [4 /*yield*/, cartRepository.save({
                                                    id: cart.id,
                                                    payment_authorized_at: cart.payment_authorized_at,
                                                })];
                                        case 4:
                                            _c.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(CartService.Events.UPDATED, cart)];
                                        case 5:
                                            _c.sent();
                                            return [2 /*return*/, cart];
                                        case 6:
                                            if (!cart.payment_session) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "You cannot complete a cart without a payment session.");
                                            }
                                            return [4 /*yield*/, this.paymentProviderService_
                                                    .withTransaction(transactionManager)
                                                    .authorizePayment(cart.payment_session, context)];
                                        case 7:
                                            session = (_c.sent());
                                            return [4 /*yield*/, this.retrieve(cart.id, {
                                                    relations: ["payment_sessions"],
                                                })];
                                        case 8:
                                            freshCart = (_c.sent());
                                            if (!(session.status === "authorized")) return [3 /*break*/, 10];
                                            _b = freshCart;
                                            return [4 /*yield*/, this.paymentProviderService_
                                                    .withTransaction(transactionManager)
                                                    .createPayment({
                                                    cart_id: cart.id,
                                                    currency_code: cart.region.currency_code,
                                                    amount: cart.total,
                                                    payment_session: freshCart.payment_session,
                                                })];
                                        case 9:
                                            _b.payment = _c.sent();
                                            freshCart.payment_authorized_at = new Date();
                                            _c.label = 10;
                                        case 10: return [4 /*yield*/, cartRepository.save(freshCart)];
                                        case 11:
                                            updatedCart = _c.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(CartService.Events.UPDATED, updatedCart)];
                                        case 12:
                                            _c.sent();
                                            return [2 /*return*/, updatedCart];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Selects a payment session for a cart and creates a payment object in the external provider system
     * @param cartId - the id of the cart to add payment method to
     * @param providerId - the id of the provider to be set to the cart
     */
    CartService.prototype.setPaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var psRepo, cart, isProviderPresent, currentlySelectedSession, psRepo_1, cartPaymentSessionIds, paymentSession, sessionInput;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        psRepo = transactionManager.withRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, this.retrieveWithTotals(cartId, {
                                                relations: [
                                                    "items.variant.product.profiles",
                                                    "customer",
                                                    "region",
                                                    "region.payment_providers",
                                                    "payment_sessions",
                                                ],
                                            })];
                                    case 1:
                                        cart = _a.sent();
                                        isProviderPresent = cart.region.payment_providers.find(function (_a) {
                                            var id = _a.id;
                                            return providerId === id;
                                        });
                                        if (providerId !== "system" && !isProviderPresent) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "The payment method is not available in this region");
                                        }
                                        currentlySelectedSession = cart.payment_sessions.find(function (s) { return s.is_selected; });
                                        if (!(currentlySelectedSession &&
                                            currentlySelectedSession.provider_id !== providerId)) return [3 /*break*/, 5];
                                        psRepo_1 = transactionManager.withRepository(this.paymentSessionRepository_);
                                        if (!currentlySelectedSession.is_initiated) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .deleteSession(currentlySelectedSession)];
                                    case 2:
                                        _a.sent();
                                        currentlySelectedSession = psRepo_1.create(currentlySelectedSession);
                                        _a.label = 3;
                                    case 3:
                                        currentlySelectedSession.is_initiated = false;
                                        currentlySelectedSession.is_selected = false;
                                        return [4 /*yield*/, psRepo_1.save(currentlySelectedSession)];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5:
                                        cartPaymentSessionIds = cart.payment_sessions.map(function (p) { return p.id; });
                                        return [4 /*yield*/, psRepo.update({ id: (0, typeorm_1.In)(cartPaymentSessionIds) }, {
                                                is_selected: null,
                                                is_initiated: false,
                                            })];
                                    case 6:
                                        _a.sent();
                                        paymentSession = cart.payment_sessions.find(function (ps) { return ps.provider_id === providerId; });
                                        if (!paymentSession) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Could not find payment session");
                                        }
                                        sessionInput = {
                                            cart: cart,
                                            customer: cart.customer,
                                            amount: cart.total,
                                            currency_code: cart.region.currency_code,
                                            provider_id: providerId,
                                            payment_session_id: paymentSession.id,
                                        };
                                        if (!paymentSession.is_initiated) return [3 /*break*/, 8];
                                        // update the session remotely
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .updateSession(paymentSession, sessionInput)];
                                    case 7:
                                        // update the session remotely
                                        _a.sent();
                                        return [3 /*break*/, 10];
                                    case 8: return [4 /*yield*/, this.paymentProviderService_
                                            .withTransaction(transactionManager)
                                            .createSession(sessionInput)];
                                    case 9:
                                        // Create the session remotely
                                        paymentSession = _a.sent();
                                        _a.label = 10;
                                    case 10: return [4 /*yield*/, psRepo.update(paymentSession.id, {
                                            is_selected: true,
                                            is_initiated: true,
                                        })];
                                    case 11:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, { id: cartId })];
                                    case 12:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates, updates and sets payment sessions associated with the cart. The
     * first time the method is called payment sessions will be created for each
     * provider. Additional calls will ensure that payment sessions have correct
     * amounts, currencies, etc. as well as make sure to filter payment sessions
     * that are not available for the cart's region.
     * @param cartOrCartId - the id of the cart to set payment session for
     * @return the result of the update operation.
     */
    CartService.prototype.setPaymentSessions = function (cartOrCartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var psRepo, paymentProviderServiceTx, cart, _a, total, region, deleteSessionAppropriately, providerSet, alreadyConsumedProviderIds, partialSessionInput, partialPaymentSessionData, paymentProvider, paymentSessionInput, paymentSession;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        psRepo = transactionManager.withRepository(this.paymentSessionRepository_);
                                        paymentProviderServiceTx = this.paymentProviderService_.withTransaction(transactionManager);
                                        if (!!(0, utils_2.isString)(cartOrCartId)) return [3 /*break*/, 1];
                                        _a = cartOrCartId;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.retrieveWithTotals(cartOrCartId, {
                                            relations: [
                                                "items.variant.product.profiles",
                                                "items.adjustments",
                                                "discounts",
                                                "discounts.rule",
                                                "gift_cards",
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                                "billing_address",
                                                "shipping_address",
                                                "region",
                                                "region.tax_rates",
                                                "region.payment_providers",
                                                "payment_sessions",
                                                "customer",
                                            ],
                                        }, { force_taxes: true })];
                                    case 2:
                                        _a = _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        cart = _a;
                                        total = cart.total, region = cart.region;
                                        deleteSessionAppropriately = function (session) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (session.is_initiated) {
                                                    return [2 /*return*/, paymentProviderServiceTx.deleteSession(session)];
                                                }
                                                return [2 /*return*/, psRepo.remove(session)];
                                            });
                                        }); };
                                        if (!(total <= 0)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(cart.payment_sessions.map(function (session) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    return [2 /*return*/, deleteSessionAppropriately(session)];
                                                });
                                            }); }))];
                                    case 4:
                                        _b.sent();
                                        return [2 /*return*/];
                                    case 5:
                                        providerSet = new Set(region.payment_providers.map(function (p) { return p.id; }));
                                        alreadyConsumedProviderIds = new Set();
                                        partialSessionInput = {
                                            cart: cart,
                                            customer: cart.customer,
                                            amount: total,
                                            currency_code: cart.region.currency_code,
                                        };
                                        partialPaymentSessionData = {
                                            cart_id: cart.id,
                                            data: {},
                                            status: models_1.PaymentSessionStatus.PENDING,
                                            amount: total,
                                        };
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(cart.payment_sessions.map(function (session) { return __awaiter(_this, void 0, void 0, function () {
                                                var paymentSessionInput, updatedSession;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!!providerSet.has(session.provider_id)) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, deleteSessionAppropriately(session)];
                                                        case 1: 
                                                        /**
                                                         * if the provider does not belong to the region then delete the session.
                                                         * The deletion occurs locally if the session is not initiated
                                                         * otherwise the deletion will also occur remotely through the external provider.
                                                         */
                                                        return [2 /*return*/, _a.sent()];
                                                        case 2:
                                                            /**
                                                             * if the provider belongs to the region then update or delete the session.
                                                             * The update occurs locally if it is not selected
                                                             * otherwise the update will also occur remotely through the external provider.
                                                             */
                                                            // We are saving the provider id on which the work below will be done. That way,
                                                            // when handling the providers from the cart region at a later point below, we do not double the work on the sessions that already
                                                            // exists for the same provider.
                                                            alreadyConsumedProviderIds.add(session.provider_id);
                                                            // Update remotely
                                                            if (session.is_selected && session.is_initiated) {
                                                                paymentSessionInput = __assign(__assign({}, partialSessionInput), { provider_id: session.provider_id });
                                                                return [2 /*return*/, paymentProviderServiceTx.updateSession(session, paymentSessionInput)];
                                                            }
                                                            if (!session.is_initiated) return [3 /*break*/, 4];
                                                            return [4 /*yield*/, paymentProviderServiceTx.deleteSession(session)];
                                                        case 3:
                                                            _a.sent();
                                                            updatedSession = psRepo.create(__assign(__assign({}, partialPaymentSessionData), { is_initiated: false, provider_id: session.provider_id }));
                                                            return [3 /*break*/, 5];
                                                        case 4:
                                                            updatedSession = __assign(__assign({}, session), { amount: total });
                                                            _a.label = 5;
                                                        case 5: return [2 /*return*/, psRepo.save(updatedSession)];
                                                    }
                                                });
                                            }); }))
                                            /**
                                             * From now on, the sessions have been cleanup. We can now
                                             * - Set the provider session as selected if it is the only one existing and there is no payment session on the cart
                                             * - Create a session per provider locally if it does not already exists on the cart as per the previous step
                                             */
                                            // If only one provider exists and there is no session on the cart, create the session and select it.
                                        ];
                                    case 6:
                                        _b.sent();
                                        if (!(region.payment_providers.length === 1 && !cart.payment_session)) return [3 /*break*/, 9];
                                        paymentProvider = region.payment_providers[0];
                                        paymentSessionInput = __assign(__assign({}, partialSessionInput), { provider_id: paymentProvider.id });
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .createSession(paymentSessionInput)];
                                    case 7:
                                        paymentSession = _b.sent();
                                        return [4 /*yield*/, psRepo.update(paymentSession.id, {
                                                is_selected: true,
                                                is_initiated: true,
                                            })];
                                    case 8:
                                        _b.sent();
                                        return [2 /*return*/];
                                    case 9: return [4 /*yield*/, (0, utils_1.promiseAll)(region.payment_providers.map(function (paymentProvider) { return __awaiter(_this, void 0, void 0, function () {
                                            var paymentSession;
                                            return __generator(this, function (_a) {
                                                if (alreadyConsumedProviderIds.has(paymentProvider.id)) {
                                                    return [2 /*return*/];
                                                }
                                                paymentSession = psRepo.create(__assign(__assign({}, partialPaymentSessionData), { provider_id: paymentProvider.id }));
                                                return [2 /*return*/, psRepo.save(paymentSession)];
                                            });
                                        }); }))];
                                    case 10:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a payment session from the cart.
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whose payment session
     *    should be removed.
     * @return the resulting cart.
     */
    CartService.prototype.deletePaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo, paymentSession, psRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        if (!cart.payment_sessions) return [3 /*break*/, 5];
                                        paymentSession = cart.payment_sessions.find(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id === providerId;
                                        });
                                        cart.payment_sessions = cart.payment_sessions.filter(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id !== providerId;
                                        });
                                        psRepo = transactionManager.withRepository(this.paymentSessionRepository_);
                                        if (!paymentSession) return [3 /*break*/, 5];
                                        if (!(paymentSession.is_selected || paymentSession.is_initiated)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .deleteSession(paymentSession)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 3: return [4 /*yield*/, psRepo.delete({ id: paymentSession.id })];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [4 /*yield*/, cartRepo.save(cart)];
                                    case 6:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, { id: cart.id })];
                                    case 7:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Refreshes a payment session on a cart
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whose payment session
     *    should be removed.
     * @return {Promise<void>} the resulting cart.
     */
    CartService.prototype.refreshPaymentSession = function (cartId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, paymentSession, psRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveWithTotals(cartId, {
                                            relations: ["payment_sessions"],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (!cart.payment_sessions) return [3 /*break*/, 5];
                                        paymentSession = cart.payment_sessions.find(function (_a) {
                                            var provider_id = _a.provider_id;
                                            return provider_id === providerId;
                                        });
                                        if (!paymentSession) return [3 /*break*/, 5];
                                        if (!paymentSession.is_selected) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .refreshSession(paymentSession, {
                                                cart: cart,
                                                customer: cart.customer,
                                                amount: cart.total,
                                                currency_code: cart.region.currency_code,
                                                provider_id: providerId,
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        psRepo = transactionManager.withRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, psRepo.update(paymentSession.id, {
                                                amount: cart.total,
                                            })];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, { id: cartId })];
                                    case 6:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds the shipping method to the list of shipping methods associated with
     * the cart. Shipping Methods are the ways that an order is shipped, whereas a
     * Shipping Option is a possible way to ship an order. Shipping Methods may
     * also have additional details in the data field such as an id for a package
     * shop.
     * @param cartOrId - the id of the cart to add shipping method to
     * @param optionId - id of shipping option to add as valid method
     * @param data - the fulmillment data for the method
     * @return the result of the update operation
     */
    CartService.prototype.addShippingMethod = function (cartOrId, optionId, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, _a, cartCustomShippingOptions, customShippingOption, shipping_methods, shippingMethodConfig, newShippingMethod, methods, shippingOptionServiceTx, shipping_methods_1, shipping_methods_1_1, shippingMethod, e_3_1, lineItemServiceTx_1, productShippingProfileMap_1, updatedCart;
                            var e_3, _b;
                            var _this = this;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (!!(0, utils_2.isString)(cartOrId)) return [3 /*break*/, 1];
                                        _a = cartOrId;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.retrieveWithTotals(cartOrId, {
                                            relations: [
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                                "items.variant.product.profiles",
                                                "payment_sessions",
                                            ],
                                        })];
                                    case 2:
                                        _a = _d.sent();
                                        _d.label = 3;
                                    case 3:
                                        cart = _a;
                                        return [4 /*yield*/, this.customShippingOptionService_
                                                .withTransaction(transactionManager)
                                                .list({ cart_id: cart.id })];
                                    case 4:
                                        cartCustomShippingOptions = _d.sent();
                                        customShippingOption = this.findCustomShippingOption(cartCustomShippingOptions, optionId);
                                        shipping_methods = cart.shipping_methods;
                                        shippingMethodConfig = customShippingOption
                                            ? { cart_id: cart.id, price: customShippingOption.price }
                                            : { cart: cart };
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(transactionManager)
                                                .createShippingMethod(optionId, data, shippingMethodConfig)];
                                    case 5:
                                        newShippingMethod = _d.sent();
                                        methods = [newShippingMethod];
                                        if (!(shipping_methods === null || shipping_methods === void 0 ? void 0 : shipping_methods.length)) return [3 /*break*/, 14];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _d.label = 6;
                                    case 6:
                                        _d.trys.push([6, 12, 13, 14]);
                                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                                        _d.label = 7;
                                    case 7:
                                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 11];
                                        shippingMethod = shipping_methods_1_1.value;
                                        if (!(shippingMethod.shipping_option.profile_id ===
                                            newShippingMethod.shipping_option.profile_id)) return [3 /*break*/, 9];
                                        return [4 /*yield*/, shippingOptionServiceTx.deleteShippingMethods(shippingMethod)];
                                    case 8:
                                        _d.sent();
                                        return [3 /*break*/, 10];
                                    case 9:
                                        methods.push(shippingMethod);
                                        _d.label = 10;
                                    case 10:
                                        shipping_methods_1_1 = shipping_methods_1.next();
                                        return [3 /*break*/, 7];
                                    case 11: return [3 /*break*/, 14];
                                    case 12:
                                        e_3_1 = _d.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 14];
                                    case 13:
                                        try {
                                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_b = shipping_methods_1.return)) _b.call(shipping_methods_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 14:
                                        if (!((_c = cart.items) === null || _c === void 0 ? void 0 : _c.length)) return [3 /*break*/, 19];
                                        lineItemServiceTx_1 = this.lineItemService_.withTransaction(transactionManager);
                                        productShippingProfileMap_1 = new Map();
                                        if (!this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 16];
                                        return [4 /*yield*/, this.shippingProfileService_.getMapProfileIdsByProductIds(cart.items.map(function (item) { return item.variant.product_id; }))];
                                    case 15:
                                        productShippingProfileMap_1 =
                                            _d.sent();
                                        return [3 /*break*/, 17];
                                    case 16:
                                        productShippingProfileMap_1 = new Map(cart.items.map(function (item) {
                                            var _a, _b, _c, _d;
                                            return [
                                                (_b = (_a = item.variant) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.id,
                                                (_d = (_c = item.variant) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.profile_id,
                                            ];
                                        }));
                                        _d.label = 17;
                                    case 17: return [4 /*yield*/, (0, utils_1.promiseAll)(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                return [2 /*return*/, lineItemServiceTx_1.update(item.id, {
                                                        has_shipping: this.validateLineItemShipping_(methods, productShippingProfileMap_1.get((_a = item.variant) === null || _a === void 0 ? void 0 : _a.product_id)),
                                                    })];
                                            });
                                        }); }))];
                                    case 18:
                                        _d.sent();
                                        _d.label = 19;
                                    case 19: return [4 /*yield*/, this.retrieve(cart.id, {
                                            relations: [
                                                "discounts",
                                                "discounts.rule",
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                            ],
                                        })
                                        // if cart has freeshipping, adjust price
                                    ];
                                    case 20:
                                        updatedCart = _d.sent();
                                        if (!updatedCart.discounts.some(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type === models_1.DiscountRuleType.FREE_SHIPPING;
                                        })) return [3 /*break*/, 22];
                                        return [4 /*yield*/, this.adjustFreeShipping_(updatedCart, true)];
                                    case 21:
                                        _d.sent();
                                        _d.label = 22;
                                    case 22: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 23:
                                        _d.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); }, "SERIALIZABLE")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Finds the cart's custom shipping options based on the passed option id.
     * throws if custom options is not empty and no shipping option corresponds to optionId
     * @param cartCustomShippingOptions - the cart's custom shipping options
     * @param optionId - id of the normal or custom shipping option to find in the cartCustomShippingOptions
     * @return custom shipping option
     */
    CartService.prototype.findCustomShippingOption = function (cartCustomShippingOptions, optionId) {
        var customOption = cartCustomShippingOptions === null || cartCustomShippingOptions === void 0 ? void 0 : cartCustomShippingOptions.find(function (cso) { return cso.shipping_option_id === optionId; });
        var hasCustomOptions = cartCustomShippingOptions === null || cartCustomShippingOptions === void 0 ? void 0 : cartCustomShippingOptions.length;
        if (hasCustomOptions && !customOption) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Wrong shipping option");
        }
        return customOption;
    };
    CartService.prototype.updateUnitPrices_ = function (cart, regionId, customer_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var region, lineItemServiceTx, calculateVariantPriceData, availablePriceMap, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_a = cart.items) === null || _a === void 0 ? void 0 : _a.length)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(this.activeManager_)
                                .retrieve(regionId || cart.region_id, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region = _d.sent();
                        lineItemServiceTx = this.lineItemService_.withTransaction(this.activeManager_);
                        calculateVariantPriceData = cart.items
                            .filter(function (i) { return i.variant_id; })
                            .map(function (item) {
                            return { variantId: item.variant_id, quantity: item.quantity };
                        });
                        return [4 /*yield*/, this.priceSelectionStrategy_
                                .withTransaction(this.activeManager_)
                                .calculateVariantPrice(calculateVariantPriceData, {
                                region_id: region.id,
                                currency_code: region.currency_code,
                                customer_id: customer_id || cart.customer_id,
                                include_discount_prices: true,
                            })];
                    case 2:
                        availablePriceMap = _d.sent();
                        _b = cart;
                        return [4 /*yield*/, (0, utils_1.promiseAll)(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var availablePrice;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!item.variant_id) {
                                                return [2 /*return*/, item];
                                            }
                                            availablePrice = availablePriceMap.get(item.variant_id);
                                            if (!(availablePrice !== undefined &&
                                                availablePrice.calculatedPrice !== null)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, lineItemServiceTx.update(item.id, {
                                                    has_shipping: false,
                                                    unit_price: availablePrice.calculatedPrice,
                                                })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2: return [4 /*yield*/, lineItemServiceTx.delete(item.id)];
                                        case 3: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 3:
                        _b.items = (_d.sent())
                            .flat()
                            .filter(function (item) { return !!item; });
                        _c = cart;
                        return [4 /*yield*/, lineItemServiceTx.list({ id: cart.items.map(function (i) { return i.id; }) }, {
                                relations: ["variant.product.profiles"],
                            })];
                    case 4:
                        _c.items = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set's the region of a cart.
     * @param cart - the cart to set region on
     * @param regionId - the id of the region to set the region to
     * @param countryCode - the country code to set the country to
     * @return the result of the update operation
     */
    CartService.prototype.setRegion_ = function (cart, regionId, countryCode) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var region, addrRepo, shippingAddress, updated, updated, discounts, paymentSessionRepo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (cart.completed_at || cart.payment_authorized_at) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot change the region of a completed cart");
                        }
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(this.activeManager_)
                                .retrieve(regionId, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region = _b.sent();
                        cart.region = region;
                        cart.region_id = region.id;
                        addrRepo = this.activeManager_.withRepository(this.addressRepository_);
                        shippingAddress = {};
                        if (!cart.shipping_address_id) return [3 /*break*/, 3];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: cart.shipping_address_id },
                            })];
                    case 2:
                        shippingAddress = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (!(countryCode !== null)) return [3 /*break*/, 6];
                        if (!region.countries.find(function (_a) {
                            var iso_2 = _a.iso_2;
                            return iso_2 === countryCode.toLowerCase();
                        })) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Country not available in region");
                        }
                        updated = addrRepo.create(__assign(__assign({}, shippingAddress), { country_code: countryCode.toLowerCase() }));
                        return [4 /*yield*/, addrRepo.save(updated)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.updateShippingAddress_(cart, updated, addrRepo)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        updated = __assign({}, shippingAddress);
                        // If the country code of a shipping address is set we need to clear it
                        if (!(0, lodash_1.isEmpty)(shippingAddress) && shippingAddress.country_code) {
                            updated = __assign(__assign({}, updated), { country_code: null });
                        }
                        // If there is only one country in the region preset it
                        if (region.countries.length === 1) {
                            updated = __assign(__assign({}, updated), { country_code: region.countries[0].iso_2 });
                        }
                        return [4 /*yield*/, this.updateShippingAddress_(cart, updated, addrRepo)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        if (!(cart.shipping_methods && cart.shipping_methods.length)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.shippingOptionService_
                                .withTransaction(this.activeManager_)
                                .deleteShippingMethods(cart.shipping_methods)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        if (!(cart.discounts && cart.discounts.length)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.discountService_
                                .withTransaction(this.activeManager_)
                                .list({
                                id: __spreadArray([], __read(cart.discounts.map(function (_a) {
                                    var id = _a.id;
                                    return id;
                                })), false),
                            }, { relations: ["rule", "regions"] })];
                    case 11:
                        discounts = _b.sent();
                        cart.discounts = discounts.filter(function (discount) {
                            return discount.regions.find(function (_a) {
                                var id = _a.id;
                                return id === regionId;
                            });
                        });
                        _b.label = 12;
                    case 12:
                        if (!((_a = cart === null || cart === void 0 ? void 0 : cart.items) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 14];
                        // line item adjustments should be refreshed on region change after having filtered out inapplicable discounts
                        return [4 /*yield*/, this.refreshAdjustments_(cart)];
                    case 13:
                        // line item adjustments should be refreshed on region change after having filtered out inapplicable discounts
                        _b.sent();
                        _b.label = 14;
                    case 14:
                        cart.gift_cards = [];
                        if (!(cart.payment_sessions && cart.payment_sessions.length)) return [3 /*break*/, 16];
                        paymentSessionRepo = this.activeManager_.withRepository(this.paymentSessionRepository_);
                        return [4 /*yield*/, paymentSessionRepo.delete({
                                id: (0, typeorm_1.In)(cart.payment_sessions.map(function (paymentSession) { return paymentSession.id; })),
                            })];
                    case 15:
                        _b.sent();
                        cart.payment_sessions.length = 0;
                        cart.payment_session = null;
                        _b.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a cart from the database. Completed carts cannot be deleted.
     * @param cartId - the id of the cart to delete
     * @return the deleted cart or undefined if the cart was not found.
     */
    CartService.prototype.delete = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, cartRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(cartId, {
                                            relations: [
                                                "items.variant.product.profiles",
                                                "discounts",
                                                "discounts.rule",
                                                "payment_sessions",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        if (cart.completed_at) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Completed carts cannot be deleted");
                                        }
                                        if (cart.payment_authorized_at) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't delete a cart with an authorized payment");
                                        }
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        return [2 /*return*/, cartRepo.remove(cart)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Dedicated method to set metadata for a cart.
     * To ensure that plugins does not overwrite each
     * others metadata fields, setMetadata is provided.
     * @param cartId - the cart to apply metadata to.
     * @param key - key for metadata field
     * @param value - value for metadata field.
     * @return resolves to the updated result.
     */
    CartService.prototype.setMetadata = function (cartId, key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartRepo, cart, existing, updatedCart;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        cartRepo = transactionManager.withRepository(this.cartRepository_);
                                        if (typeof key !== "string") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Key type is invalid. Metadata keys must be strings");
                                        }
                                        return [4 /*yield*/, cartRepo.findOne({ where: { id: cartId } })];
                                    case 1:
                                        cart = _b.sent();
                                        if (!cart) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Unable to find the cart with the given id");
                                        }
                                        existing = cart.metadata || {};
                                        cart.metadata = __assign(__assign({}, existing), (_a = {}, _a[key] = value, _a));
                                        return [4 /*yield*/, cartRepo.save(cart)];
                                    case 2:
                                        updatedCart = _b.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(CartService.Events.UPDATED, updatedCart)];
                                    case 3:
                                        _b.sent();
                                        return [2 /*return*/, updatedCart];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.createTaxLines = function (cartOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart, _a, calculationContext;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(0, cart_1.isCart)(cartOrId)) return [3 /*break*/, 1];
                                        _a = cartOrId;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.retrieve(cartOrId, {
                                            relations: [
                                                "customer",
                                                "discounts",
                                                "discounts.rule",
                                                "gift_cards",
                                                "items.variant.product.profiles",
                                                "items.adjustments",
                                                "region",
                                                "region.tax_rates",
                                                "shipping_address",
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                            ],
                                        })];
                                    case 2:
                                        _a = _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        cart = _a;
                                        return [4 /*yield*/, this.totalsService_
                                                .withTransaction(transactionManager)
                                                .getCalculationContext(cart)];
                                    case 4:
                                        calculationContext = _b.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(transactionManager)
                                                .createTaxLines(cart, calculationContext)];
                                    case 5:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.deleteTaxLines = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var cart;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: [
                                                "items",
                                                "items.tax_lines",
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                                "shipping_methods.tax_lines",
                                            ],
                                        })];
                                    case 1:
                                        cart = _a.sent();
                                        return [4 /*yield*/, transactionManager.remove(cart.items.flatMap(function (i) { return i.tax_lines; }))];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, transactionManager.remove(cart.shipping_methods.flatMap(function (s) { return s.tax_lines; }))];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.decorateTotals = function (cart, totalsConfig) {
        var _a, _b, _c, _d;
        if (totalsConfig === void 0) { totalsConfig = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var newTotalsServiceTx, calculationContext, includeTax, cartItems, cartShippingMethods, taxLinesMaps_1, itemsTotals, shippingTotals, giftCardableAmount, giftCardTotal;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        newTotalsServiceTx = this.newTotalsService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, this.totalsService_.getCalculationContext(cart)];
                    case 1:
                        calculationContext = _e.sent();
                        includeTax = (totalsConfig === null || totalsConfig === void 0 ? void 0 : totalsConfig.force_taxes) || ((_a = cart.region) === null || _a === void 0 ? void 0 : _a.automatic_taxes);
                        cartItems = __spreadArray([], __read(((_b = cart.items) !== null && _b !== void 0 ? _b : [])), false);
                        cartShippingMethods = __spreadArray([], __read(((_c = cart.shipping_methods) !== null && _c !== void 0 ? _c : [])), false);
                        if (!includeTax) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.taxProviderService_
                                .withTransaction(this.activeManager_)
                                .getTaxLinesMap(cartItems, calculationContext)];
                    case 2:
                        taxLinesMaps_1 = _e.sent();
                        cartItems.forEach(function (item) {
                            var _a;
                            if (item.is_return) {
                                return;
                            }
                            item.tax_lines = (_a = taxLinesMaps_1.lineItemsTaxLines[item.id]) !== null && _a !== void 0 ? _a : [];
                        });
                        cartShippingMethods.forEach(function (method) {
                            var _a;
                            method.tax_lines = (_a = taxLinesMaps_1.shippingMethodsTaxLines[method.id]) !== null && _a !== void 0 ? _a : [];
                        });
                        _e.label = 3;
                    case 3: return [4 /*yield*/, newTotalsServiceTx.getLineItemTotals(cartItems, {
                            includeTax: includeTax,
                            calculationContext: calculationContext,
                        })];
                    case 4:
                        itemsTotals = _e.sent();
                        return [4 /*yield*/, newTotalsServiceTx.getShippingMethodTotals(cartShippingMethods, {
                                discounts: cart.discounts,
                                includeTax: includeTax,
                                calculationContext: calculationContext,
                            })];
                    case 5:
                        shippingTotals = _e.sent();
                        cart.subtotal = 0;
                        cart.discount_total = 0;
                        cart.item_tax_total = 0;
                        cart.shipping_total = 0;
                        cart.shipping_tax_total = 0;
                        cart.items = (cart.items || []).map(function (item) {
                            var _a, _b, _c, _d;
                            var itemWithTotals = Object.assign(item, (_a = itemsTotals[item.id]) !== null && _a !== void 0 ? _a : {});
                            cart.subtotal += (_b = itemWithTotals.subtotal) !== null && _b !== void 0 ? _b : 0;
                            cart.discount_total += (_c = itemWithTotals.raw_discount_total) !== null && _c !== void 0 ? _c : 0;
                            cart.item_tax_total += (_d = itemWithTotals.tax_total) !== null && _d !== void 0 ? _d : 0;
                            return itemWithTotals;
                        });
                        cart.shipping_methods = (cart.shipping_methods || []).map(function (shippingMethod) {
                            var _a, _b, _c;
                            var methodWithTotals = Object.assign(shippingMethod, (_a = shippingTotals[shippingMethod.id]) !== null && _a !== void 0 ? _a : {});
                            cart.shipping_total += (_b = methodWithTotals.subtotal) !== null && _b !== void 0 ? _b : 0;
                            cart.shipping_tax_total += (_c = methodWithTotals.tax_total) !== null && _c !== void 0 ? _c : 0;
                            return methodWithTotals;
                        });
                        cart.tax_total = cart.item_tax_total + cart.shipping_tax_total;
                        cart.raw_discount_total = cart.discount_total;
                        cart.discount_total = Math.round(cart.discount_total);
                        giftCardableAmount = this.newTotalsService_.getGiftCardableAmount({
                            gift_cards_taxable: (_d = cart.region) === null || _d === void 0 ? void 0 : _d.gift_cards_taxable,
                            subtotal: cart.subtotal,
                            discount_total: cart.discount_total,
                            shipping_total: cart.shipping_total,
                            tax_total: cart.tax_total,
                        });
                        return [4 /*yield*/, this.newTotalsService_.getGiftCardTotals(giftCardableAmount, {
                                region: cart.region,
                                giftCards: cart.gift_cards,
                            })];
                    case 6:
                        giftCardTotal = _e.sent();
                        cart.gift_card_total = giftCardTotal.total || 0;
                        cart.gift_card_tax_total = giftCardTotal.tax_total || 0;
                        cart.total =
                            cart.subtotal +
                                cart.shipping_total +
                                cart.tax_total -
                                (cart.gift_card_total + cart.discount_total + cart.gift_card_tax_total);
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    CartService.prototype.refreshAdjustments_ = function (cart) {
        return __awaiter(this, void 0, void 0, function () {
            var nonReturnLineIDs, lineItemAdjustmentServiceTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nonReturnLineIDs = cart.items
                            .filter(function (item) { return !item.is_return; })
                            .map(function (i) { return i.id; });
                        lineItemAdjustmentServiceTx = this.lineItemAdjustmentService_.withTransaction(this.activeManager_);
                        // delete all old non return line item adjustments
                        return [4 /*yield*/, lineItemAdjustmentServiceTx.delete({
                                item_id: nonReturnLineIDs,
                                discount_id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                            })
                            // potentially create/update line item adjustments
                        ];
                    case 1:
                        // delete all old non return line item adjustments
                        _a.sent();
                        // potentially create/update line item adjustments
                        return [4 /*yield*/, lineItemAdjustmentServiceTx.createAdjustments(cart)];
                    case 2:
                        // potentially create/update line item adjustments
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.transformQueryForTotals_ = function (config) {
        var select = config.select, relations = config.relations;
        if (!select) {
            return {
                select: select,
                relations: relations,
                totalsToSelect: [],
            };
        }
        var totalFields = [
            "subtotal",
            "tax_total",
            "shipping_total",
            "discount_total",
            "gift_card_total",
            "total",
        ];
        var totalsToSelect = select.filter(function (v) {
            return totalFields.includes(v);
        });
        if (totalsToSelect.length > 0) {
            var relationSet = new Set(relations);
            relationSet.add("items");
            relationSet.add("items.tax_lines");
            relationSet.add("gift_cards");
            relationSet.add("discounts");
            relationSet.add("discounts.rule");
            // relationSet.add("discounts.parent_discount")
            // relationSet.add("discounts.parent_discount.rule")
            // relationSet.add("discounts.parent_discount.regions")
            relationSet.add("shipping_methods");
            relationSet.add("shipping_address");
            relationSet.add("region");
            relationSet.add("region.tax_rates");
            relations = Array.from(relationSet.values());
            select = select.filter(function (v) { return !totalFields.includes(v); });
        }
        return {
            relations: relations,
            select: select,
            totalsToSelect: totalsToSelect,
        };
    };
    /**
     * @deprecated Use decorateTotals instead
     * @param cart
     * @param totalsToSelect
     * @param options
     * @protected
     */
    CartService.prototype.decorateTotals_ = function (cart, totalsToSelect, options) {
        if (options === void 0) { options = { force_taxes: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var totals, totalsToSelect_1, totalsToSelect_1_1, key, _a, _b, _c, _d, _e, giftCardBreakdown, _f, e_4_1;
            var e_4, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        totals = {};
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 18, 19, 20]);
                        totalsToSelect_1 = __values(totalsToSelect), totalsToSelect_1_1 = totalsToSelect_1.next();
                        _h.label = 2;
                    case 2:
                        if (!!totalsToSelect_1_1.done) return [3 /*break*/, 17];
                        key = totalsToSelect_1_1.value;
                        _a = key;
                        switch (_a) {
                            case "total": return [3 /*break*/, 3];
                            case "shipping_total": return [3 /*break*/, 5];
                            case "discount_total": return [3 /*break*/, 7];
                            case "tax_total": return [3 /*break*/, 9];
                            case "gift_card_total": return [3 /*break*/, 11];
                            case "subtotal": return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 3:
                        _b = totals;
                        return [4 /*yield*/, this.totalsService_.getTotal(cart, {
                                force_taxes: options.force_taxes,
                            })];
                    case 4:
                        _b.total = _h.sent();
                        return [3 /*break*/, 16];
                    case 5:
                        _c = totals;
                        return [4 /*yield*/, this.totalsService_.getShippingTotal(cart)];
                    case 6:
                        _c.shipping_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 7:
                        _d = totals;
                        return [4 /*yield*/, this.totalsService_.getDiscountTotal(cart)];
                    case 8:
                        _d.discount_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 9:
                        _e = totals;
                        return [4 /*yield*/, this.totalsService_.getTaxTotal(cart, options.force_taxes)];
                    case 10:
                        _e.tax_total = _h.sent();
                        return [3 /*break*/, 16];
                    case 11: return [4 /*yield*/, this.totalsService_.getGiftCardTotal(cart)];
                    case 12:
                        giftCardBreakdown = _h.sent();
                        totals.gift_card_total = giftCardBreakdown.total;
                        totals.gift_card_tax_total = giftCardBreakdown.tax_total;
                        return [3 /*break*/, 16];
                    case 13:
                        _f = totals;
                        return [4 /*yield*/, this.totalsService_.getSubtotal(cart)];
                    case 14:
                        _f.subtotal = _h.sent();
                        return [3 /*break*/, 16];
                    case 15: return [3 /*break*/, 16];
                    case 16:
                        totalsToSelect_1_1 = totalsToSelect_1.next();
                        return [3 /*break*/, 2];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        e_4_1 = _h.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 20];
                    case 19:
                        try {
                            if (totalsToSelect_1_1 && !totalsToSelect_1_1.done && (_g = totalsToSelect_1.return)) _g.call(totalsToSelect_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/, Object.assign(cart, totals)];
                }
            });
        });
    };
    CartService.prototype.getTotalsRelations = function (config) {
        var relationSet = new Set(config.relations);
        relationSet.add("items.variant.product.profiles");
        relationSet.add("items.tax_lines");
        relationSet.add("items.adjustments");
        relationSet.add("gift_cards");
        relationSet.add("discounts");
        relationSet.add("discounts.rule");
        relationSet.add("shipping_methods");
        relationSet.add("shipping_methods.tax_lines");
        relationSet.add("shipping_address");
        relationSet.add("region");
        relationSet.add("region.tax_rates");
        return Array.from(relationSet.values());
    };
    CartService.Events = {
        CUSTOMER_UPDATED: "cart.customer_updated",
        CREATED: "cart.created",
        UPDATED: "cart.updated",
    };
    return CartService;
}(interfaces_1.TransactionBaseService));
exports.default = CartService;
//# sourceMappingURL=cart.js.map