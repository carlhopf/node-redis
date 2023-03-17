"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const _1 = require(".");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(index, schema) {
    const args = ['FT.ALTER', index, 'SCHEMA', 'ADD'];
    (0, _1.pushSchema)(args, schema);
    return args;
}
exports.transformArguments = transformArguments;
