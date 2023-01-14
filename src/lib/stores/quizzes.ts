import { apiCreateQuiz, apiGetQuizzes, type APICreateQuiz, type Quiz } from '$lib/api/quizzes';
import type { LocalSchema } from '$lib/idb/IndexedDB';
import { derived, writable } from 'svelte/store';
import { isOnline } from './online';
import { idbCreateQuiz, idbGetQuizzes, idbSyncWithServer, idbUpdateQuiz } from '$lib/idb/quizzes';
import { waitForUser } from './user';

export type QuizStore = { [local_id: number]: LocalSchema<Quiz> };

const quizzesByIdWritable = writable<QuizStore>({});
export const quizzes = derived(quizzesByIdWritable, (state) => Object.values(state));

export async function createQuiz(data: APICreateQuiz) {
	const localQuiz = await idbCreateQuiz(data);
	quizzesByIdWritable.update((state) => ({ ...state, [localQuiz.local_id]: localQuiz }));
	return localQuiz;
}

waitForUser().then(async (_user) => {
	const localQuizzes = await idbGetQuizzes();
	const localOnlyQuizzes: LocalSchema<Quiz>[] = [];
	quizzesByIdWritable.update((state) =>
		localQuizzes.reduce(
			(state, localQuiz) => {
				state[localQuiz.local_id] = localQuiz;
				if (localQuiz.id === 0) {
					localOnlyQuizzes.push(localQuiz);
				}
				return state;
			},
			{ ...state }
		)
	);
	if (isOnline()) {
		const apiQuizzes = await apiGetQuizzes();
		const localQuizzes = await Promise.all(
			apiQuizzes.map(idbSyncWithServer).concat(
				localOnlyQuizzes.map(async (localQuiz) => {
					const quiz = {
						...localQuiz,
						...(await apiCreateQuiz(localQuiz))
					};
					await idbUpdateQuiz(quiz.local_id, quiz);
					return quiz;
				})
			)
		);
		quizzesByIdWritable.update((state) =>
			localQuizzes.reduce(
				(state, localQuiz) => {
					state[localQuiz.local_id] = localQuiz;
					return state;
				},
				{ ...state }
			)
		);
	}
});
