import { RedisCommandArguments } from '@redis/client/dist/lib/commands';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(dictionary: string, term: string | Array<string>): RedisCommandArguments;
export declare function transformReply(): number;
