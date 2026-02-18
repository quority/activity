"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityItem = exports.ActivityType = void 0;
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["Discussions"] = 0] = "Discussions";
    ActivityType[ActivityType["LogEvents"] = 1] = "LogEvents";
    ActivityType[ActivityType["RecentChanges"] = 2] = "RecentChanges";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
class ActivityItem {
    wiki;
    constructor(wiki) {
        this.wiki = wiki;
    }
    isDiscussions() {
        return this.type === ActivityType.Discussions;
    }
    isLogEvents() {
        return this.type === ActivityType.LogEvents;
    }
    isRecentChanges() {
        return this.type === ActivityType.RecentChanges;
    }
}
exports.ActivityItem = ActivityItem;
//# sourceMappingURL=ActivityItem.js.map