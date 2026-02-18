"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogEvents = void 0;
const getLogEvents = async (wiki, from, to) => {
    const supportedTypes = new Set([
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
        'upload/upload', 'upload/overwrite', 'upload/revert',
        // thanks
        'thanks/thank'
    ]);
    const activity = await wiki.queryList({
        ledir: 'newer',
        leend: to.toISOString(),
        lelimit: 'max',
        leprop: [
            'comment', 'details', 'ids', 'tags', 'timestamp', 'title', 'type', 'user', 'userid'
        ],
        lestart: from.toISOString(),
        // letype: [ 'block', 'delete', 'move', 'protect', 'rights', 'upload' ],
        list: 'logevents'
    });
    return activity.filter(item => supportedTypes.has(`${item.type}/${item.action}`));
};
exports.getLogEvents = getLogEvents;
//# sourceMappingURL=get-log-events.js.map