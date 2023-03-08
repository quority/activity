import type { Wiki } from '@quority/core'

export const getRecentChanges = ( wiki: Wiki, from: Date, to: Date ) => wiki.queryList( {
	list: 'recentchanges',
	rcdir: 'newer',
	rcend: to.toISOString(),
	rclimit: 'max',
	rcprop: [
		'comment', 'ids', 'redirect', 'sizes', 'timestamp', 'title', 'user', 'flags'
	],
	rcshow: '!bot',
	rcstart: from.toISOString(),
	rctype: [
		'categorize', 'edit', 'new'
	]
} )
