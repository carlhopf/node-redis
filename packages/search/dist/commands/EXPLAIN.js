"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const _1 = require(".");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(index, query, options) {
    const args = ['FT.EXPLAIN', index, query];
    (0, _1.pushParamsArgs)(args, options?.PARAMS);
    if (options?.DIALECT) {
        args.push('DIALECT', options.DIALECT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
