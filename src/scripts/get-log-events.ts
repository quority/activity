import type { LogEventsItem, Wiki } from '@quority/core'

export const getLogEvents = async ( wiki: Wiki, from: Date, to: Date ): Promise<LogEventsItem[]> => {
	const supportedTypes = new Set( [
		// block
		'block/block', 'block/reblock', 'block/unblock',

		// delete
		'delete/delete', 'delete/restore',

		// move
		'move/move',

		// protect
		'protect/protect', 'protect/modify', 'protect/unprotect',

		// rights
		'rights/rights',

		// upload
		'upload/upload', 'upload/overwrite', 'upload/revert'
	] )

	const activity = await wiki.queryList( {
		ledir: 'newer',
		leend: to.toISOString(),
		lelimit: 'max',
		leprop: [
			'comment', 'details', 'ids', 'tags', 'timestamp', 'title', 'type', 'user', 'userid'
		],
		lestart: from.toISOString(),
		// letype: [ 'block', 'delete', 'move', 'protect', 'rights', 'upload' ],
		list: 'logevents'
	} )

	return activity.filter( item => supportedTypes.has( `${ item.type }/${ item.action }` ) )
}
