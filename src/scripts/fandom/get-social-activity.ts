import { DiscussionsAPI, Fandom } from '@quority/fandom'
import type { Wiki } from '@quority/core'

const hasDiscussions = async ( wiki: Wiki<Fandom> ): Promise<boolean> => {
	const url = new URL( './wikia.php', wiki.api )
	url.searchParams.set( 'controller', 'DiscussionPost' )
	url.searchParams.set( 'method', 'getPosts' )
	const { statusCode } = await wiki.request.raw( url, { method: 'HEAD' } )
	return statusCode === 200
}

export const getSocialActivity = async ( wiki: Wiki, from: Date, to: Date ) => {
	if ( !( wiki.platform instanceof Fandom ) ) return []
	const discussions = await hasDiscussions( wiki as Wiki<Fandom> )
	if ( !discussions ) return []

	const fandom = wiki as Wiki<Fandom>
	const controller = fandom.custom.wikia.DiscussionPostController
	const result = await controller.getPosts()

	const fromMs = from.getTime()
	const toMs = to.getTime()

	const posts = result._embedded[ 'doc:posts' ].filter( post => {
		const created = post.creationDate.epochSecond * 1000
		return created >= fromMs && created <= toMs
	} )

	const pageIds = posts.filter( i => i._embedded.thread?.[ 0 ].containerType === DiscussionsAPI.ContainerTypes.ArticleComment )
		.map( i => i._embedded.thread?.[ 0 ].containerId )
		.filter( Boolean ) as Array<`${ number }`>
	const articleNames = await fandom.custom.wikia.FeedsAndPostsController.getArticleNamesAndUsernames( pageIds ) as {
		articleNames: {
			[ key in `${ number }` ]: {
				title: string
			}
		}
	}
	const titles = Object.entries( articleNames.articleNames ).reduce( ( list, [
		pageId, item
	] ) => {
		list[ pageId ] = item.title
		return list
	}, {} as Record<string, string> )

	return posts.map( post => {
		if ( post._embedded.thread?.[ 0 ].containerType === DiscussionsAPI.ContainerTypes.ArticleComment ) {
			const id = post._embedded.thread[ 0 ].containerId
			post._embedded.thread[ 0 ].containerId = titles[ id ] as `${ number }` | undefined ?? id
		}
		return post
	} )
}
