"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionsWorkflow = exports.createCollectionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createCollectionsWorkflowId = "create-collections";
exports.createCollectionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCollectionsWorkflowId, (input) => {
    return (0, steps_1.createCollectionsStep)(input.collections);
});
