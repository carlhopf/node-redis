export const FIRST_KEY_INDEX = 1;

export function transformArguments(dictionary: string): Array<string> {
    return ['FT.DICTDUMP', dictionary];
}

export declare function transformReply(): Array<string>;
