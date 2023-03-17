export declare const FIRST_KEY_INDEX = 1;
interface SugAddOptions {
    INCR?: true;
    PAYLOAD?: string;
}
export declare function transformArguments(key: string, string: string, score: number, options?: SugAddOptions): Array<string>;
export declare function transformReply(): number;
export {};
