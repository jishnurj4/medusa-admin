"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertUpdateProducts = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function revertUpdateProducts({ container, data, }) {
    const productModuleService = container.resolve(modules_sdk_1.ModulesDefinition[modules_sdk_1.Modules.PRODUCT].registrationName);
    // restore variants that have been soft deleted during update products step
    await productModuleService.restoreVariants(data.variants.map((v) => v.id));
    data.originalProducts.forEach((product) => {
        // @ts-ignore
        product.variants = product.variants.map((v) => ({ id: v.id }));
    });
    return await productModuleService.upsert(data.originalProducts);
}
exports.revertUpdateProducts = revertUpdateProducts;
revertUpdateProducts.aliases = {
    preparedData: "preparedData",
    variants: "variants",
};
