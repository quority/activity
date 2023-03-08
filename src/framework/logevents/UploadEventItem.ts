import { LogEventsItem } from './LogEventsItem'

export class UploadEventItem extends LogEventsItem {
	public isUploading() {
		return this.data.action === 'upload'
	}

	public isOverwriting() {
		return this.data.action === 'overwrite'
	}

	public isReverting() {
		return this.data.action === 'revert'
	}
}
