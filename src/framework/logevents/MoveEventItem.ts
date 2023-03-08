import { LogEventsItem } from './LogEventsItem'

export class MoveEventItem extends LogEventsItem {
	public get from(): string {
		return this.data.title
	}

	public get to(): string {
		const { params } = this.data as unknown as {
			params: { target_title: string }
		}
		return params.target_title
	}
}
