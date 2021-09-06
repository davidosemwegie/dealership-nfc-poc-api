"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrors = void 0;
const utils_1 = require("../utils");
function logErrors(err, _req, _res, next) {
    utils_1.logger.info(err);
    next(err);
}
exports.logErrors = logErrors;
//# sourceMappingURL=log-errors.js.map