"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRemoteQueryStep = exports.useRemoteQueryStepId = void 0;
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.useRemoteQueryStepId = "use-remote-query";
exports.useRemoteQueryStep = (0, workflows_sdk_1.createStep)(exports.useRemoteQueryStepId, async (data, { container }) => {
    const { list = true, fields, variables, entry_point: entryPoint } = data;
    const query = container.resolve("remoteQuery");
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint,
        fields,
        variables,
    });
    const entities = await query(queryObject);
    const result = list ? entities : entities[0];
    return new workflows_sdk_1.StepResponse(result);
});
