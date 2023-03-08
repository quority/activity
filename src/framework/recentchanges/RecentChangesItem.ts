import { ActivityItem, ActivityType } from '../ActivityItem'
import { type RecentChangesItem as RecentChangesAPI } from '@quority/core'
import type { Wiki } from '@quority/core'


export class RecentChangesItem extends ActivityItem {
	protected type = ActivityType.RecentChanges

	public readonly data: RecentChangesAPI

	public constructor( wiki: Wiki, data: RecentChangesAPI ) {
		super( wiki )
		this.data = data
	}

	public get date(): Date {
		return new Date( this.data.timestamp )
	}

	public get sizediff(): number {
		return this.data.newlen - this.data.oldlen
	}
}
