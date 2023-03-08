import { DiscussionsItem } from './DiscussionsItem'

export class CommentItem extends DiscussionsItem {
	public get article(): string {
		return this.data._embedded.thread?.[ 0 ].containerId ?? ''
	}

	public getUrl(): URL {
		const url = this.wiki.getUrl( this.article )
		url.searchParams.set( 'commentId', this.data.threadId )
		if ( this.data.isReply ) {
			url.hash = this.data.id
		}
		return url
	}
}
