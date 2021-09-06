"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(error, _req, res) {
    res.status(400).send({
        message: error.message,
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map