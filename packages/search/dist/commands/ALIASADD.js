"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(name, index) {
    return ['FT.ALIASADD', name, index];
}
exports.transformArguments = transformArguments;
