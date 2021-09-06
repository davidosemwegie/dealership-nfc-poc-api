"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const APP_ENV = (process.env.APP_ENV = process.env.APP_ENV || 'development');
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
//Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json({ message: `Dealership NFC API is running in: ${APP_ENV} mode` });
});
//Routes
//Error handle middleware
app.use(middleware_1.logErrors);
app.use(middleware_1.errorHandler);
//Listening
const port = config_1.PORT || 8000;
app.listen(port, () => {
    console.log(`Dealership NFC API is running in: ${APP_ENV} mode`);
});
//# sourceMappingURL=app.js.map