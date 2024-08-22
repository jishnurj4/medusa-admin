"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePromotionRulesWorkflow = exports.updatePromotionRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updatePromotionRulesWorkflowId = "update-promotion-rules-workflow";
exports.updatePromotionRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updatePromotionRulesWorkflowId, (input) => {
    return (0, steps_1.updatePromotionRulesStep)(input);
});