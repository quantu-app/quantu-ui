import { apiGetQuizzes, type Quiz } from '$lib/api/quizzes';
import type { LocalSchema } from '$lib/idb/IndexedDB';
import { derived, writable } from 'svelte/store';
import { isOnline } from './online';
import { idbGetQuizzes, idbSyncWithServer } from '$lib/idb/quizzes';
import { waitForUser } from './user';

export type QuizStore = { [local_id: number]: LocalSchema<Quiz> };

const quizzesByIdWritable = writable<QuizStore>({});
export const quizzes = derived(quizzesByIdWritable, (state) => Object.values(state));

waitForUser().then(async (_user) => {
	syncWithLocal();
	if (isOnline()) {
		await syncWithServer();
	}
});

async function syncWithServer() {
	const quizzes = await apiGetQuizzes();
	const localQuizzes = await Promise.all(quizzes.map(idbSyncWithServer));
	quizzesByIdWritable.update((state) =>
		localQuizzes.reduce((state, localQuiz) => {
			state[localQuiz.local_id] = localQuiz;
			return state;
		}, state)
	);
}

async function syncWithLocal() {
	const localQuizzes = await idbGetQuizzes();
	quizzesByIdWritable.update((state) =>
		localQuizzes.reduce((state, localQuiz) => {
			state[localQuiz.local_id] = localQuiz;
			return state;
		}, state)
	);
}
