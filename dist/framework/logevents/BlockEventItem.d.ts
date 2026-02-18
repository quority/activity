import { LogEventsItem } from './LogEventsItem';
export declare class BlockEventItem extends LogEventsItem {
    get expiryDate(): Date | null;
    isBlocking(): boolean;
    isReblocking(): boolean;
    isUnblocking(): boolean;
}
