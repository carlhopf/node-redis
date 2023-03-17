"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const AGGREGATE_1 = require("./AGGREGATE");
const _1 = require(".");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(index, query, options) {
    const args = ['FT.PROFILE', index, 'AGGREGATE'];
    if (options?.LIMITED) {
        args.push('LIMITED');
    }
    args.push('QUERY', query);
    (0, AGGREGATE_1.pushAggregatehOptions)(args, options);
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        results: (0, AGGREGATE_1.transformReply)(reply[0]),
        profile: (0, _1.transformProfile)(reply[1])
    };
}
exports.transformReply = transformReply;
