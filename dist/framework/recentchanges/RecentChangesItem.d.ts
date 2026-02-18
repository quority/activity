import { ActivityItem, ActivityType } from '../ActivityItem';
import { type RecentChangesItem as RecentChangesAPI } from '@quority/core';
import type { Wiki } from '@quority/core';
export declare class RecentChangesItem extends ActivityItem {
    protected type: ActivityType;
    readonly data: RecentChangesAPI;
    constructor(wiki: Wiki, data: RecentChangesAPI);
    get date(): Date;
    get sizediff(): number;
}
