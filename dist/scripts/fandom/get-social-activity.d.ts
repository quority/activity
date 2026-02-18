import { DiscussionsAPI } from '@quority/fandom';
import type { Wiki } from '@quority/core';
export declare const getSocialActivity: (wiki: Wiki, from: Date, to: Date) => Promise<(DiscussionsAPI.DiscussionPost & {
    isReply: boolean;
    threadCreatedBy: DiscussionsAPI.User;
})[]>;
