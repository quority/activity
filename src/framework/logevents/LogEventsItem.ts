import { ActivityItem, ActivityType } from '../ActivityItem'
import type { LogEventsItem as LogEventsAPI, Wiki } from '@quority/core'
import type { BlockEventItem } from './BlockEventItem'
import type { DeleteEventItem } from './DeleteEventItem'
import type { MoveEventItem } from './MoveEventItem'
import type { ProtectEventItem } from './ProtectEventItem'
import type { RightsEventItem } from './RightsEventItem'
import type { UploadEventItem } from './UploadEventItem'

export class LogEventsItem extends ActivityItem {
	protected type = ActivityType.LogEvents

	public data: LogEventsAPI

	public constructor( wiki: Wiki, data: LogEventsAPI ) {
		super( wiki )
		this.data = data
	}

	public get date(): Date {
		return new Date( this.data.timestamp )
	}
	public isBlock(): this is BlockEventItem {
		return this.data.type === 'block'
	}

	public isDelete(): this is DeleteEventItem {
		return this.data.type === 'delete'
	}

	public isMove(): this is MoveEventItem {
		return this.data.type === 'move'
	}

	public isProtect(): this is ProtectEventItem {
		return this.data.type === 'protect'
	}

	public isRights(): this is RightsEventItem {
		return this.data.type === 'rights'
	}

	public isUpload(): this is UploadEventItem {
		return this.data.type === 'upload'
	}
}
