"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageWallItem = void 0;
const DiscussionsItem_1 = require("./DiscussionsItem");
class MessageWallItem extends DiscussionsItem_1.DiscussionsItem {
    get wall() {
        const { forumName } = this.data;
        return forumName.replace('Message Wall', '').trim();
    }
    getUrl() {
        const url = this.wiki.getUrl(`Message Wall:${this.wall}`);
        url.searchParams.set('threadId', this.data.threadId);
        if (this.data.isReply) {
            url.hash = this.data.id;
        }
        return url;
    }
}
exports.MessageWallItem = MessageWallItem;
//# sourceMappingURL=MessageWallItem.js.map