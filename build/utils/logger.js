"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const _1 = require(".");
const logger = (0, pino_1.default)({ prettyPrint: (0, _1.isDevelopment)() });
exports.logger = logger;
//# sourceMappingURL=logger.js.map