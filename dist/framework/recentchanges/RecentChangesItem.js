"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentChangesItem = void 0;
const ActivityItem_1 = require("../ActivityItem");
class RecentChangesItem extends ActivityItem_1.ActivityItem {
    type = ActivityItem_1.ActivityType.RecentChanges;
    data;
    constructor(wiki, data) {
        super(wiki);
        this.data = data;
    }
    get date() {
        return new Date(this.data.timestamp);
    }
    get sizediff() {
        return this.data.newlen - this.data.oldlen;
    }
}
exports.RecentChangesItem = RecentChangesItem;
//# sourceMappingURL=RecentChangesItem.js.map