"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.MAX_FACES = exports.PORT = exports.ACCESS_TOKEN_SECRET = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.ACCESS_TOKEN_SECRET = _a.ACCESS_TOKEN_SECRET, exports.PORT = _a.PORT, exports.MAX_FACES = _a.MAX_FACES, exports.DATABASE_URL = _a.DATABASE_URL;
//# sourceMappingURL=config.js.map