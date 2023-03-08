import { LogEventsItem } from './LogEventsItem'

export class ProtectEventItem extends LogEventsItem {
	public isProtecting() {
		return this.data.action === 'protect'
	}

	public isModifying() {
		return this.data.action === 'modify'
	}

	public isUnprotecting() {
		return this.data.action === 'unprotect'
	}
}
