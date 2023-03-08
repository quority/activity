import { LogEventsItem } from './LogEventsItem'

export class BlockEventItem extends LogEventsItem {
	public get expiryDate(): Date | null {
		if ( this.isBlocking() || this.isReblocking() ) {
			const { params } = this.data as unknown as { params?: { expiry: string } }
			if ( params ) {
				return new Date( params.expiry )
			}
		}
		return null
	}

	public isBlocking() {
		return this.data.action === 'block'
	}

	public isReblocking() {
		return this.data.action === 'reblock'
	}

	public isUnblocking() {
		return this.data.action === 'unblock'
	}
}
