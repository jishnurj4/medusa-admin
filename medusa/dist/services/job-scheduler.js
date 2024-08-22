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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bullmq_1 = require("bullmq");
var ioredis_1 = __importDefault(require("ioredis"));
var utils_1 = require("@medusajs/utils");
var JobSchedulerService = /** @class */ (function () {
    function JobSchedulerService(_a, config, singleton) {
        var logger = _a.logger;
        if (singleton === void 0) { singleton = true; }
        var _this = this;
        var _b, _c, _d, _e;
        this.handlers_ = new Map();
        /**
         * Handles incoming scheduled jobs.
         * @param job The job object
         * @return resolves to the results of the subscriber calls.
         */
        this.scheduledJobsWorker = function (job) { return __awaiter(_this, void 0, void 0, function () {
            var _a, eventName, data, observers;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = job.data, eventName = _a.eventName, data = _a.data;
                        observers = this.handlers_.get(eventName) || [];
                        this.logger_.info("Processing scheduled job: ".concat(eventName));
                        return [4 /*yield*/, (0, utils_1.promiseAll)(observers.map(function (subscriber) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, subscriber(data, eventName).catch(function (err) {
                                            _this.logger_.warn("An error occured while processing ".concat(eventName, ": ").concat(err));
                                            return err;
                                        })];
                                });
                            }); }))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        }); };
        this.config_ = config;
        this.logger_ = logger;
        var prefix = "".concat((_c = (_b = config === null || config === void 0 ? void 0 : config.projectConfig) === null || _b === void 0 ? void 0 : _b.redis_prefix) !== null && _c !== void 0 ? _c : "").concat(this.constructor.name);
        if (singleton && ((_d = config === null || config === void 0 ? void 0 : config.projectConfig) === null || _d === void 0 ? void 0 : _d.redis_url)) {
            // Required config
            // See: https://github.com/OptimalBits/bull/blob/develop/CHANGELOG.md#breaking-changes
            var connection = new ioredis_1.default(config.projectConfig.redis_url, __assign({ maxRetriesPerRequest: null, enableReadyCheck: false }, ((_e = config.projectConfig.redis_options) !== null && _e !== void 0 ? _e : {})));
            this.queue_ = new bullmq_1.Queue("scheduled-jobs:queue", {
                connection: connection,
                prefix: prefix,
            });
            // Register scheduled job worker
            new bullmq_1.Worker("scheduled-jobs:queue", this.scheduledJobsWorker, {
                connection: connection,
                prefix: prefix,
            });
        }
    }
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    JobSchedulerService.prototype.registerHandler = function (event, handler) {
        var _a;
        if (typeof handler !== "function") {
            throw new Error("Handler must be a function");
        }
        var handlers = (_a = this.handlers_.get(event)) !== null && _a !== void 0 ? _a : [];
        this.handlers_.set(event, __spreadArray(__spreadArray([], __read(handlers), false), [handler], false));
    };
    /**
     * Registers a scheduled job.
     * @param eventName - the name of the event
     * @param data - the data to be sent with the event
     * @param schedule - the schedule expression
     * @param handler - the handler to call on the job
     * @param options - the create job options
     * @return added job
     */
    JobSchedulerService.prototype.create = function (eventName, data, schedule, handler, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var jobToCreate, baseJobOptions, existingJobs, existingJob;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger_.info("Registering ".concat(eventName));
                        this.registerHandler(eventName, handler);
                        jobToCreate = {
                            eventName: eventName,
                            data: data,
                        };
                        baseJobOptions = {
                            repeat: { pattern: schedule },
                            removeOnComplete: {
                                // keep completed jobs not older than 24 hours
                                age: 60 * 60 * 24,
                            },
                            removeOnFail: {
                                // keep failed jobs not older than 1 week and not more than 5000
                                count: 5000,
                                age: 60 * 60 * 24 * 7,
                            },
                        };
                        if (!(options === null || options === void 0 ? void 0 : options.keepExisting)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.queue_.add(eventName, jobToCreate, baseJobOptions)];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, this.queue_.getRepeatableJobs()];
                    case 3:
                        existingJobs = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : [];
                        existingJob = existingJobs.find(function (job) { return job.name === eventName; });
                        if (!existingJob) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.queue_.removeRepeatableByKey(existingJob.key)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.queue_.add(eventName, jobToCreate, baseJobOptions)];
                    case 6: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return JobSchedulerService;
}());
exports.default = JobSchedulerService;
//# sourceMappingURL=job-scheduler.js.map