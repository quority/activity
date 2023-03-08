import type { DiscussionsItem } from './discussions'
import type { LogEventsItem } from './logevents'
import type { RecentChangesItem } from './recentchanges'
import type { Wiki } from '@quority/core'

export enum ActivityType {
	Discussions,
	LogEvents,
	RecentChanges
}

export abstract class ActivityItem {
	protected abstract type: ActivityType
	public readonly wiki: Wiki

	public constructor( wiki: Wiki ) {
		this.wiki = wiki
	}
	public isDiscussions(): this is DiscussionsItem {
		return this.type === ActivityType.Discussions
	}

	public isLogEvents(): this is LogEventsItem {
		return this.type === ActivityType.LogEvents
	}

	public isRecentChanges(): this is RecentChangesItem {
		return this.type === ActivityType.RecentChanges
	}
}
