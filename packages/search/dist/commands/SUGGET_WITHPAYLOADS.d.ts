import { SugGetOptions } from './SUGGET';
export { FIRST_KEY_INDEX, IS_READ_ONLY } from './SUGGET';
export declare function transformArguments(key: string, prefix: string, options?: SugGetOptions): Array<string>;
export interface SuggestionWithPayload {
    suggestion: string;
    payload: string | null;
}
export declare function transformReply(rawReply: Array<string | null> | null): Array<SuggestionWithPayload> | null;
