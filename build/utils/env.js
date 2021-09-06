"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = exports.isStaging = exports.isDevelopment = void 0;
const isProduction = () => {
    return process.env.APP_ENV === 'production';
};
exports.isProduction = isProduction;
const isDevelopment = () => {
    return process.env.APP_ENV === 'development';
};
exports.isDevelopment = isDevelopment;
const isStaging = () => {
    return process.env.APP_ENV === 'development';
};
exports.isStaging = isStaging;
//# sourceMappingURL=env.js.map