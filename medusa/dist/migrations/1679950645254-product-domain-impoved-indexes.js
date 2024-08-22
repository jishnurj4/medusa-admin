"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDomainImprovedIndexes1679950645254 = void 0;
var productDomainImprovedIndexes1679950645254 = /** @class */ (function () {
    function productDomainImprovedIndexes1679950645254() {
    }
    productDomainImprovedIndexes1679950645254.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // If you want to reset it to 'on' run 'set enable_nestloop to on;'
                    // Improve large IN queries, since we have separate queries every time it is better to turn it off
                    return [4 /*yield*/, queryRunner.query("\n      /* You can turn of this settings if you are in a context with lots of variants) set enable_nestloop to off; */\n      \n      DROP INDEX IF EXISTS \"IDX_17a06d728e4cfbc5bd2ddb70af\";\n      CREATE INDEX IF NOT EXISTS idx_money_amount_variant_id ON money_amount (variant_id);\n\n      DROP INDEX IF EXISTS \"IDX_b433e27b7a83e6d12ab26b15b0\";\n      CREATE INDEX IF NOT EXISTS idx_money_amount_region_id ON money_amount (region_id);\n\n      DROP INDEX IF EXISTS \"IDX_7234ed737ff4eb1b6ae6e6d7b0\";\n      CREATE INDEX IF NOT EXISTS idx_product_option_value_variant_id ON product_option_value (variant_id);\n\n      DROP INDEX IF EXISTS \"IDX_cdf4388f294b30a25c627d69fe\";\n      CREATE INDEX IF NOT EXISTS idx_product_option_value_option_id ON product_option_value (option_id);\n    ")];
                    case 1:
                        // If you want to reset it to 'on' run 'set enable_nestloop to on;'
                        // Improve large IN queries, since we have separate queries every time it is better to turn it off
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    productDomainImprovedIndexes1679950645254.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      DROP INDEX IF EXISTS idx_money_amount_variant_id;\n      DROP INDEX IF EXISTS idx_money_amount_region_id;\n      DROP INDEX IF EXISTS idx_product_option_value_variant_id;\n      DROP INDEX IF EXISTS idx_product_option_value_option_id;\n      \n      CREATE INDEX IF NOT EXISTS \"IDX_17a06d728e4cfbc5bd2ddb70af\" ON \"money_amount\" (\"variant_id\");\n      CREATE INDEX IF NOT EXISTS \"IDX_b433e27b7a83e6d12ab26b15b0\" ON \"money_amount\" (\"region_id\");\n      CREATE INDEX IF NOT EXISTS \"IDX_7234ed737ff4eb1b6ae6e6d7b0\" ON \"product_option_value\" (\"variant_id\");\n      CREATE INDEX IF NOT EXISTS \"IDX_cdf4388f294b30a25c627d69fe\" ON \"product_option_value\" (\"option_id\");\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return productDomainImprovedIndexes1679950645254;
}());
exports.productDomainImprovedIndexes1679950645254 = productDomainImprovedIndexes1679950645254;
//# sourceMappingURL=1679950645254-product-domain-impoved-indexes.js.map