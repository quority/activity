import { DiscussionsItem } from './DiscussionsItem';
export declare class CommentItem extends DiscussionsItem {
    get article(): string;
    getUrl(): URL;
}
