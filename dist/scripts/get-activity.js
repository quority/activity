"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivity = exports.getActivityDate = void 0;
const framework_1 = require("../framework");
const fandom_1 = require("@quority/fandom");
const get_log_events_1 = require("./get-log-events");
const get_recent_changes_1 = require("./get-recent-changes");
const get_social_activity_1 = require("./fandom/get-social-activity");
const logEventsConstructors = {
    block: framework_1.BlockEventItem,
    delete: framework_1.DeleteEventItem,
    move: framework_1.MoveEventItem,
    protect: framework_1.ProtectEventItem,
    rights: framework_1.RightsEventItem,
    upload: framework_1.UploadEventItem
};
const getActivityDate = (item) => {
    if (item.isDiscussions()) {
        return item.data.creationDate.epochSecond * 1000;
    }
    else if (item.isLogEvents() || item.isRecentChanges()) {
        return item.date.getTime();
    }
    else {
        return Date.now();
    }
};
exports.getActivityDate = getActivityDate;
const getActivity = async (wiki, from, to) => {
    const activity = [];
    for (const item of await (0, get_recent_changes_1.getRecentChanges)(wiki, from, to)) {
        activity.push(new framework_1.RecentChangesItem(wiki, item));
    }
    for (const item of await (0, get_log_events_1.getLogEvents)(wiki, from, to)) {
        const constructor = logEventsConstructors[item.type] ?? framework_1.LogEventsItem;
        activity.push(new constructor(wiki, item));
    }
    for (const item of await (0, get_social_activity_1.getSocialActivity)(wiki, from, to)) {
        const type = item._embedded.thread?.[0].containerType;
        if (type === fandom_1.DiscussionsAPI.ContainerTypes.ArticleComment) {
            activity.push(new framework_1.CommentItem(wiki, item));
        }
        else if (type === fandom_1.DiscussionsAPI.ContainerTypes.Forum) {
            activity.push(new framework_1.PostItem(wiki, item));
        }
        else {
            activity.push(new framework_1.MessageWallItem(wiki, item));
        }
    }
    return activity.sort((a, b) => (0, exports.getActivityDate)(a) - (0, exports.getActivityDate)(b));
};
exports.getActivity = getActivity;
//# sourceMappingURL=get-activity.js.map