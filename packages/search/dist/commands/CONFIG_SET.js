"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(option, value) {
    return ['FT.CONFIG', 'SET', option, value];
}
exports.transformArguments = transformArguments;
