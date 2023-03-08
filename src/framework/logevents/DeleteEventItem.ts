import { LogEventsItem } from './LogEventsItem'

export class DeleteEventItem extends LogEventsItem {
	public isDeleting() {
		return this.data.action === 'delete'
	}

	public isRestoring() {
		return this.data.action === 'restore'
	}
}
