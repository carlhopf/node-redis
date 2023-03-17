"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(index, fieldName) {
    return ['FT.TAGVALS', index, fieldName];
}
exports.transformArguments = transformArguments;
