"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecentChanges = void 0;
const getRecentChanges = (wiki, from, to) => wiki.queryList({
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
        'edit', 'new'
    ]
});
exports.getRecentChanges = getRecentChanges;
//# sourceMappingURL=get-recent-changes.js.map