export const FIRST_KEY_INDEX = 1;

export function transformArguments(name: string, index: string): Array<string> {
    return ['FT.ALIASDEL', name, index];
}

export declare function transformReply(): 'OK';
