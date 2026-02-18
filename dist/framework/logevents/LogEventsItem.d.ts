import { ActivityItem, ActivityType } from '../ActivityItem';
import type { LogEventsItem as LogEventsAPI, Wiki } from '@quority/core';
import type { BlockEventItem } from './BlockEventItem';
import type { DeleteEventItem } from './DeleteEventItem';
import type { MoveEventItem } from './MoveEventItem';
import type { ProtectEventItem } from './ProtectEventItem';
import type { RightsEventItem } from './RightsEventItem';
import type { ThanksEventItem } from './ThanksEventItem';
import type { UploadEventItem } from './UploadEventItem';
export declare class LogEventsItem extends ActivityItem {
    protected type: ActivityType;
    data: LogEventsAPI;
    constructor(wiki: Wiki, data: LogEventsAPI);
    get date(): Date;
    isBlock(): this is BlockEventItem;
    isDelete(): this is DeleteEventItem;
    isMove(): this is MoveEventItem;
    isProtect(): this is ProtectEventItem;
    isRights(): this is RightsEventItem;
    isThanks(): this is ThanksEventItem;
    isUpload(): this is UploadEventItem;
}
