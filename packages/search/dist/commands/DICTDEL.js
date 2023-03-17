"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("@redis/client/dist/lib/commands/generic-transformers");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(dictionary, term) {
    return (0, generic_transformers_1.pushVerdictArguments)(['FT.DICTDEL', dictionary], term);
}
exports.transformArguments = transformArguments;
