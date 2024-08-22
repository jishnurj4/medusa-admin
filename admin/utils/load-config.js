"use strict";
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
exports.__esModule = true;
exports.loadConfig = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
var loadConfig = function (isDev) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var configModule = (0, medusa_core_utils_1.getConfigFile)(process.cwd(), "medusa-config").configModule;
    var plugin = configModule.plugins.find(function (p) {
        return (typeof p === "string" && p === "@medusajs/admin") ||
            (typeof p === "object" && p.resolve === "@medusajs/admin");
    });
    if (!plugin) {
        return null;
    }
    var config = {
        serve: true,
        autoRebuild: false,
        path: "/app",
        outDir: "build",
        backend: "/",
        develop: {
            open: true,
            port: 7001,
            host: "localhost",
            allowedHosts: "auto"
        }
    };
    if (isDev) {
        config = __assign(__assign({}, config), { serve: false, path: "/", backend: "http://localhost:9000" });
    }
    if (typeof plugin !== "string") {
        var options = (_a = plugin.options) !== null && _a !== void 0 ? _a : {};
        config = {
            serve: isDev ? false : (_b = options.serve) !== null && _b !== void 0 ? _b : config.serve,
            autoRebuild: (_c = options.autoRebuild) !== null && _c !== void 0 ? _c : config.autoRebuild,
            path: (_d = options.path) !== null && _d !== void 0 ? _d : config.path,
            outDir: (_e = options.outDir) !== null && _e !== void 0 ? _e : config.outDir,
            backend: (_f = options.backend) !== null && _f !== void 0 ? _f : config.backend,
            develop: {
                open: (_h = (_g = options.develop) === null || _g === void 0 ? void 0 : _g.open) !== null && _h !== void 0 ? _h : config.develop.open,
                port: (_k = (_j = options.develop) === null || _j === void 0 ? void 0 : _j.port) !== null && _k !== void 0 ? _k : config.develop.port,
                host: (_m = (_l = options.develop) === null || _l === void 0 ? void 0 : _l.host) !== null && _m !== void 0 ? _m : config.develop.host,
                allowedHosts: (_p = (_o = options.develop) === null || _o === void 0 ? void 0 : _o.allowedHosts) !== null && _p !== void 0 ? _p : config.develop.allowedHosts,
                webSocketURL: (_r = (_q = options.develop) === null || _q === void 0 ? void 0 : _q.webSocketURL) !== null && _r !== void 0 ? _r : config.develop.webSocketURL
            }
        };
    }
    return config;
};
exports.loadConfig = loadConfig;
