import { DiscussionsItem } from './DiscussionsItem'

export class MessageWallItem extends DiscussionsItem {
	public get wall(): string {
		const { forumName } = this.data as unknown as { forumName: string }
		return forumName.replace( 'Message Wall', '' ).trim()
	}

	public getUrl(): URL {
		const url = this.wiki.getUrl( `Message Wall:${ this.wall }` )
		url.searchParams.set( 'threadId', this.data.threadId )
		if ( this.data.isReply ) {
			url.hash = this.data.id
		}
		return url
	}
}
