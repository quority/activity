import type { Wiki } from '@quority/core';
export declare const getRecentChanges: (wiki: Wiki, from: Date, to: Date) => Promise<import("@quority/core").RecentChangesItem[]>;
