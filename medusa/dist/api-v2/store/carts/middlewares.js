"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCartRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var QueryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
exports.storeCartRoutesMiddlewares = [
    {
        method: "ALL",
        matcher: "/store/carts*",
        middlewares: [
            (0, authenticate_middleware_1.authenticate)("store", ["session", "bearer"], {
                allowUnauthenticated: true,
            }),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/carts/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreCreateCart),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreUpdateCart),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/line-items",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreAddCartLineItem),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/line-items/:line_id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreUpdateCartLineItem),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/store/carts/:id/line-items/:line_id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/promotions",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreAddCartPromotions),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/taxes",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreCalculateCartTaxes),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/payment-collections",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreUpdateCart),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/store/carts/:id/shipping-methods",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreAddCartShippingMethods),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/store/carts/:id/promotions",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.StoreRemoveCartPromotions),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map