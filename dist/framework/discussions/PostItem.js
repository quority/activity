"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostItem = void 0;
const DiscussionsItem_1 = require("./DiscussionsItem");
class PostItem extends DiscussionsItem_1.DiscussionsItem {
    get category() {
        const { forumName } = this.data;
        return forumName;
    }
    getUrl() {
        const url = this.wiki.getUrl(`../f/p/${this.data.threadId}`);
        if (this.data.isReply) {
            url.pathname += `/r/${this.data.id}`;
        }
        return url;
    }
}
exports.PostItem = PostItem;
//# sourceMappingURL=PostItem.js.map