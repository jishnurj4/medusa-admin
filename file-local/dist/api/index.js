"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
exports.default = (function (rootDirectory, pluginOptions) {
    var _a;
    var app = express_1.default.Router();
    var uploadDir = (_a = pluginOptions.upload_dir) !== null && _a !== void 0 ? _a : "uploads/images";
    app.use("/".concat(uploadDir), express_1.default.static(uploadDir));
    return app;
});
//# sourceMappingURL=index.js.map