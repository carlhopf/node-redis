import { RedisCommandArguments } from '@redis/client/dist/lib/commands';
import { pushVerdictArguments } from '@redis/client/dist/lib/commands/generic-transformers';

export const FIRST_KEY_INDEX = 1;

export function transformArguments(dictionary: string, term: string | Array<string>): RedisCommandArguments {
    return pushVerdictArguments(['FT.DICTADD', dictionary], term);
}

export declare function transformReply(): number;
