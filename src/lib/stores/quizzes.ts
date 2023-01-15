import type { LocalSchema } from '$lib/idb/IndexedDB';
import { derived, writable } from 'svelte/store';
import { isOnline } from './online';
import { idbCreateQuiz, idbGetQuizzes, idbSyncWithServer, idbUpdateQuiz } from '$lib/idb/quizzes';
import { waitForUser } from './user';
import type { MercuryEntitiesQuiz, PostApiQuizzes } from '$lib/openapi/quantu';
import { quizApi } from '$lib/openapi';

export type Quiz = MercuryEntitiesQuiz;
export type QuizStore = { [local_id: number]: LocalSchema<Quiz> };

const quizzesByIdWritable = writable<QuizStore>({});
export const quizzes = derived(quizzesByIdWritable, (state) => Object.values(state));

export async function createQuiz(data: PostApiQuizzes) {
	let serverQuiz: Partial<Quiz> = {};
	if (isOnline()) {
		serverQuiz = await quizApi.postApiQuizzes({ postApiQuizzes: data });
	}
	const localQuiz = await idbCreateQuiz({ ...data, ...serverQuiz });
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
		const apiQuizzes = await quizApi.getApiQuizzes();
		const localQuizzes = await Promise.all(
			apiQuizzes.map(idbSyncWithServer).concat(
				localOnlyQuizzes.map(async (localQuiz) => {
					const quiz = {
						...localQuiz,
						...(await quizApi.postApiQuizzes({ postApiQuizzes: localQuiz }))
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
