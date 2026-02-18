"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogEventsItem = void 0;
const ActivityItem_1 = require("../ActivityItem");
class LogEventsItem extends ActivityItem_1.ActivityItem {
    type = ActivityItem_1.ActivityType.LogEvents;
    data;
    constructor(wiki, data) {
        super(wiki);
        this.data = data;
    }
    get date() {
        return new Date(this.data.timestamp);
    }
    isBlock() {
        return this.data.type === 'block';
    }
    isDelete() {
        return this.data.type === 'delete';
    }
    isMove() {
        return this.data.type === 'move';
    }
    isProtect() {
        return this.data.type === 'protect';
    }
    isRights() {
        return this.data.type === 'rights';
    }
    isThanks() {
        return this.data.type === 'thanks';
    }
    isUpload() {
        return this.data.type === 'upload';
    }
}
exports.LogEventsItem = LogEventsItem;
//# sourceMappingURL=LogEventsItem.js.map