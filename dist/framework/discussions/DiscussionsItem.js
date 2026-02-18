"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionsItem = void 0;
const ActivityItem_1 = require("../ActivityItem");
const fandom_1 = require("@quority/fandom");
class DiscussionsItem extends ActivityItem_1.ActivityItem {
    type = ActivityItem_1.ActivityType.Discussions;
    data;
    constructor(wiki, data) {
        super(wiki);
        this.data = data;
    }
    get containerType() {
        const thread = this.data._embedded.thread?.[0];
        if (!thread) {
            throw new Error('Unavailable thread.');
        }
        else if (thread.containerType === fandom_1.DiscussionsAPI.ContainerTypes.Post || thread.containerType === fandom_1.DiscussionsAPI.ContainerTypes.Reply) {
            throw new Error(`Unexpected container type: ${thread.containerType}`);
        }
        return thread.containerType;
    }
    isComment() {
        return this.containerType === fandom_1.DiscussionsAPI.ContainerTypes.ArticleComment;
    }
    isMessageWall() {
        return this.containerType === fandom_1.DiscussionsAPI.ContainerTypes.Wall;
    }
    isPost() {
        return this.containerType === fandom_1.DiscussionsAPI.ContainerTypes.Forum;
    }
}
exports.DiscussionsItem = DiscussionsItem;
//# sourceMappingURL=DiscussionsItem.js.map