import { DiscussionsItem } from './DiscussionsItem'

export class PostItem extends DiscussionsItem {
	public get category(): string {
		const { forumName } = this.data as unknown as { forumName: string }
		return forumName
	}

	public getUrl(): URL {
		const url = this.wiki.getUrl( `../f/p/${ this.data.threadId }` )
		if ( this.data.isReply ) {
			url.pathname += `/r/${ this.data.id }`
		}
		return url
	}
}
