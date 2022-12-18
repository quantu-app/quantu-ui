import { createInsecureID } from '../util';
import type { Readable } from 'svelte/store';
import { writable } from 'svelte/store';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export type Notification = {
	id: string;
	message: string;
	type: NotificationType;
};

const writableNotifications = writable<Notification[]>([]);

export const notifications: Readable<Notification[]> = writableNotifications;

export function createNotification(
	message: string,
	type: NotificationType = 'error',
	deleteAfterMS = 5000
) {
	const id = createInsecureID();
	writableNotifications.update((state) => [
		...state,
		{
			id,
			message,
			type
		}
	]);
	setTimeout(() => removeNotification(id), deleteAfterMS);
	return id;
}

export function removeNotification(id: string): void {
	writableNotifications.update((state) => {
		const index = state.findIndex((notification) => notification.id === id);

		if (index === -1) {
			return state;
		} else {
			state = state.slice();
			state.splice(index, 1);
			return state;
		}
	});
}
