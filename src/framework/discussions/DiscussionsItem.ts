import { ActivityItem, ActivityType } from '../ActivityItem'
import type { CommentItem } from './CommentItem'
import { DiscussionsAPI } from '@quority/fandom'
import type { MessageWallItem } from './MessageWallItem'
import type { PostItem } from './PostItem'
import type { Wiki } from '@quority/core'

export abstract class DiscussionsItem extends ActivityItem {
	protected type = ActivityType.Discussions
	public readonly data: DiscussionsAPI.DiscussionPost

	public constructor( wiki: Wiki, data: DiscussionsAPI.DiscussionPost ) {
		super( wiki )
		this.data = data
	}

	public get containerType(): DiscussionsAPI.ContainerTypes.ArticleComment | DiscussionsAPI.ContainerTypes.Forum | DiscussionsAPI.ContainerTypes.Wall {
		const thread = this.data._embedded.thread?.[ 0 ]
		if ( !thread ) {
			throw new Error( 'Unavailable thread.' )
		} else if ( thread.containerType === DiscussionsAPI.ContainerTypes.Post || thread.containerType === DiscussionsAPI.ContainerTypes.Reply ) {
			throw new Error( `Unexpected container type: ${ thread.containerType }` )
		}
		return thread.containerType
	}

	public isComment(): this is CommentItem {
		return this.containerType === DiscussionsAPI.ContainerTypes.ArticleComment
	}

	public isMessageWall(): this is MessageWallItem {
		return this.containerType === DiscussionsAPI.ContainerTypes.Wall
	}

	public isPost(): this is PostItem {
		return this.containerType === DiscussionsAPI.ContainerTypes.Forum
	}
}
