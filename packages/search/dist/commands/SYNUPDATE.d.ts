import { RedisCommandArguments } from '@redis/client/dist/lib/commands';
export declare const FIRST_KEY_INDEX = 1;
interface SynUpdateOptions {
    SKIPINITIALSCAN?: true;
}
export declare function transformArguments(index: string, groupId: string, terms: string | Array<string>, options?: SynUpdateOptions): RedisCommandArguments;
export declare function transformReply(): 'OK';
export {};
