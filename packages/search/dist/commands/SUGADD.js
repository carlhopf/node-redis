"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, string, score, options) {
    const args = ['FT.SUGADD', key, string, score.toString()];
    if (options?.INCR) {
        args.push('INCR');
    }
    if (options?.PAYLOAD) {
        args.push('PAYLOAD', options.PAYLOAD);
    }
    return args;
}
exports.transformArguments = transformArguments;
