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
exports.adminProductTypeRoutesMiddlewares = void 0;
var QueryConfig = __importStar(require("./query-config"));
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_query_1 = require("../../utils/validate-query");
var validators_1 = require("./validators");
var validate_body_1 = require("../../utils/validate-body");
exports.adminProductTypeRoutesMiddlewares = [
    {
        method: ["ALL"],
        matcher: "/admin/product-types/*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/product-types",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetProductTypesParams, QueryConfig.listProductTypesTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/product-types/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetProductTypeParams, QueryConfig.retrieveProductTypeTransformQueryConfig),
        ],
    },
    // Create/update/delete methods are new in v2
    {
        method: ["POST"],
        matcher: "/admin/product-types",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateProductType),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetProductTypeParams, QueryConfig.retrieveProductTypeTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/product-types/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminUpdateProductType),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetProductTypeParams, QueryConfig.retrieveProductTypeTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/product-types/:id",
        middlewares: [],
    },
];
//# sourceMappingURL=middlewares.js.map