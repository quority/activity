import * as _quority_core from '@quority/core';
import { LogEventsItem as LogEventsItem$1, Wiki, RecentChangesItem as RecentChangesItem$1 } from '@quority/core';
import { DiscussionsAPI } from '@quority/fandom';

declare class DeleteEventItem extends LogEventsItem {
    isDeleting(): boolean;
    isRestoring(): boolean;
}

declare class MoveEventItem extends LogEventsItem {
    get from(): string;
    get to(): string;
}

declare class ProtectEventItem extends LogEventsItem {
    isProtecting(): boolean;
    isModifying(): boolean;
    isUnprotecting(): boolean;
}

declare class RightsEventItem extends LogEventsItem {
}

declare class ThanksEventItem extends LogEventsItem {
}

declare class UploadEventItem extends LogEventsItem {
    isUploading(): boolean;
    isOverwriting(): boolean;
    isReverting(): boolean;
}

declare class LogEventsItem extends ActivityItem {
    protected type: ActivityType;
    data: LogEventsItem$1;
    constructor(wiki: Wiki, data: LogEventsItem$1);
    get date(): Date;
    isBlock(): this is BlockEventItem;
    isDelete(): this is DeleteEventItem;
    isMove(): this is MoveEventItem;
    isProtect(): this is ProtectEventItem;
    isRights(): this is RightsEventItem;
    isThanks(): this is ThanksEventItem;
    isUpload(): this is UploadEventItem;
}

declare class BlockEventItem extends LogEventsItem {
    get expiryDate(): Date | null;
    isBlocking(): boolean;
    isReblocking(): boolean;
    isUnblocking(): boolean;
}

declare class RecentChangesItem extends ActivityItem {
    protected type: ActivityType;
    readonly data: RecentChangesItem$1;
    constructor(wiki: Wiki, data: RecentChangesItem$1);
    get date(): Date;
    get sizediff(): number;
}

declare enum ActivityType {
    Discussions = 0,
    LogEvents = 1,
    RecentChanges = 2
}
declare abstract class ActivityItem {
    protected abstract type: ActivityType;
    readonly wiki: Wiki;
    constructor(wiki: Wiki);
    isDiscussions(): this is DiscussionsItem;
    isLogEvents(): this is LogEventsItem;
    isRecentChanges(): this is RecentChangesItem;
}

declare class MessageWallItem extends DiscussionsItem {
    get wall(): string;
    getUrl(): URL;
}

declare class PostItem extends DiscussionsItem {
    get category(): string;
    getUrl(): URL;
}

declare abstract class DiscussionsItem extends ActivityItem {
    protected type: ActivityType;
    readonly data: DiscussionsAPI.DiscussionPost;
    constructor(wiki: Wiki, data: DiscussionsAPI.DiscussionPost);
    get containerType(): DiscussionsAPI.ContainerTypes.ArticleComment | DiscussionsAPI.ContainerTypes.Forum | DiscussionsAPI.ContainerTypes.Wall;
    isComment(): this is CommentItem;
    isMessageWall(): this is MessageWallItem;
    isPost(): this is PostItem;
    abstract getUrl(): URL;
}

declare class CommentItem extends DiscussionsItem {
    get article(): string;
    getUrl(): URL;
}

declare const getSocialActivity: (wiki: Wiki, from: Date, to: Date) => Promise<(DiscussionsAPI.DiscussionPost & {
    isReply: boolean;
    threadCreatedBy: DiscussionsAPI.User;
})[]>;

declare const getActivityDate: (item: ActivityItem) => number;
declare const getActivity: (wiki: Wiki, from: Date, to: Date) => Promise<ActivityItem[]>;

declare const getLogEvents: (wiki: Wiki, from: Date, to: Date) => Promise<LogEventsItem$1[]>;

declare const getRecentChanges: (wiki: Wiki, from: Date, to: Date) => Promise<_quority_core.RecentChangesItem[]>;

export { ActivityItem, ActivityType, BlockEventItem, CommentItem, DeleteEventItem, DiscussionsItem, LogEventsItem, MessageWallItem, MoveEventItem, PostItem, ProtectEventItem, RecentChangesItem, RightsEventItem, ThanksEventItem, UploadEventItem, getActivity, getActivityDate, getLogEvents, getRecentChanges, getSocialActivity };
