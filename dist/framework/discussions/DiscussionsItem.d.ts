import { ActivityItem, ActivityType } from '../ActivityItem';
import type { CommentItem } from './CommentItem';
import { DiscussionsAPI } from '@quority/fandom';
import type { MessageWallItem } from './MessageWallItem';
import type { PostItem } from './PostItem';
import type { Wiki } from '@quority/core';
export declare abstract class DiscussionsItem extends ActivityItem {
    protected type: ActivityType;
    readonly data: DiscussionsAPI.DiscussionPost;
    constructor(wiki: Wiki, data: DiscussionsAPI.DiscussionPost);
    get containerType(): DiscussionsAPI.ContainerTypes.ArticleComment | DiscussionsAPI.ContainerTypes.Forum | DiscussionsAPI.ContainerTypes.Wall;
    isComment(): this is CommentItem;
    isMessageWall(): this is MessageWallItem;
    isPost(): this is PostItem;
    abstract getUrl(): URL;
}
