import type { ActivityItem } from '../framework/ActivityItem';
import type { Wiki } from '@quority/core';
export declare const getActivityDate: (item: ActivityItem) => number;
export declare const getActivity: (wiki: Wiki, from: Date, to: Date) => Promise<ActivityItem[]>;
