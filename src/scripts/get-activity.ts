import { BlockEventItem, CommentItem, DeleteEventItem, LogEventsItem, MessageWallItem, MoveEventItem, PostItem, ProtectEventItem, RecentChangesItem, RightsEventItem, UploadEventItem } from '../framework'
import type { ActivityItem } from '../framework/ActivityItem'
import { DiscussionsAPI } from '@quority/fandom'
import { getLogEvents } from './get-log-events'
import { getRecentChanges } from './get-recent-changes'
import { getSocialActivity } from './fandom/get-social-activity'
import type { Wiki } from '@quority/core'

const logEventsConstructors: Record<string, typeof LogEventsItem> = {
	block: BlockEventItem,
	delete: DeleteEventItem,
	move: MoveEventItem,
	protect: ProtectEventItem,
	rights: RightsEventItem,
	upload: UploadEventItem
}

export const getActivityDate = ( item: ActivityItem ): number => {
	if ( item.isDiscussions() ) {
		return item.data.creationDate.epochSecond * 1000
	} else if ( item.isLogEvents() || item.isRecentChanges() ) {
		return item.date.getTime()
	} else {
		return Date.now()
	}
}

export const getActivity = async ( wiki: Wiki, from: Date, to: Date ): Promise<ActivityItem[]> => {
	const activity: ActivityItem[] = []

	for ( const item of await getRecentChanges( wiki, from, to ) ) {
		activity.push( new RecentChangesItem( wiki, item ) )
	}
	for ( const item of await getLogEvents( wiki, from, to ) ) {
		const constructor = logEventsConstructors[ item.type ] ?? LogEventsItem
		activity.push( new constructor( wiki, item ) )
	}
	for ( const item of await getSocialActivity( wiki, from, to ) ) {
		const type = item._embedded.thread?.[ 0 ].containerType
		if ( type === DiscussionsAPI.ContainerTypes.ArticleComment ) {
			activity.push( new CommentItem( wiki, item ) )
		} else if ( type === DiscussionsAPI.ContainerTypes.Forum ) {
			activity.push( new PostItem( wiki, item ) )
		} else {
			activity.push( new MessageWallItem( wiki, item ) )
		}
	}

	return activity.sort( ( a, b ) => getActivityDate( a ) - getActivityDate( b ) )
}
