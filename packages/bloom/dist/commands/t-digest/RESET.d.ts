import { RedisCommandArgument, RedisCommandArguments } from '@redis/client/dist/lib/commands';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: RedisCommandArgument): RedisCommandArguments;
export declare function transformReply(): 'OK';
