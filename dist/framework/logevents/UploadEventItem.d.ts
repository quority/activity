import { LogEventsItem } from './LogEventsItem';
export declare class UploadEventItem extends LogEventsItem {
    isUploading(): boolean;
    isOverwriting(): boolean;
    isReverting(): boolean;
}
