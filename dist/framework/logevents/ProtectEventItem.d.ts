import { LogEventsItem } from './LogEventsItem';
export declare class ProtectEventItem extends LogEventsItem {
    isProtecting(): boolean;
    isModifying(): boolean;
    isUnprotecting(): boolean;
}
