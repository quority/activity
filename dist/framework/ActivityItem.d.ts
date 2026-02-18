import type { DiscussionsItem } from './discussions';
import type { LogEventsItem } from './logevents';
import type { RecentChangesItem } from './recentchanges';
import type { Wiki } from '@quority/core';
export declare enum ActivityType {
    Discussions = 0,
    LogEvents = 1,
    RecentChanges = 2
}
export declare abstract class ActivityItem {
    protected abstract type: ActivityType;
    readonly wiki: Wiki;
    constructor(wiki: Wiki);
    isDiscussions(): this is DiscussionsItem;
    isLogEvents(): this is LogEventsItem;
    isRecentChanges(): this is RecentChangesItem;
}
