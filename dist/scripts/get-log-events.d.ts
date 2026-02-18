import type { LogEventsItem, Wiki } from '@quority/core';
export declare const getLogEvents: (wiki: Wiki, from: Date, to: Date) => Promise<LogEventsItem[]>;
