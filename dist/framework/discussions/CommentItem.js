"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentItem = void 0;
const DiscussionsItem_1 = require("./DiscussionsItem");
class CommentItem extends DiscussionsItem_1.DiscussionsItem {
    get article() {
        return this.data._embedded.thread?.[0].containerId ?? '';
    }
    getUrl() {
        const url = this.wiki.getUrl(this.article);
        url.searchParams.set('commentId', this.data.threadId);
        if (this.data.isReply) {
            url.hash = this.data.id;
        }
        return url;
    }
}
exports.CommentItem = CommentItem;
//# sourceMappingURL=CommentItem.js.map