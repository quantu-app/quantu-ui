import type { LocalSchema } from '$lib/idb/IndexedDB';
import { derived, writable } from 'svelte/store';
import { isOnline } from './online';
import { idbCreateQuestion } from '$lib/idb/questions';
import { getUser } from './user';
import type { Question, PostApiQuizzesQuizIdQuestions } from '$lib/openapi/quantu';
import { quizApi } from '$lib/openapi';

export type QuestionStore = { [localId: string]: LocalSchema<Question> };

const questionsByIdWritable = writable<QuestionStore>({});
export const questions = derived(questionsByIdWritable, (state) => Object.values(state));

export async function createQuestion(quizId: number, data: PostApiQuizzesQuizIdQuestions) {
	const userId = getUser()?.id as number;
	let serverQuestion: Partial<Question> = {};
	if (isOnline()) {
		serverQuestion = await quizApi.postApiQuizzesQuizIdQuestions({
			quizId,
			postApiQuizzesQuizIdQuestions: data
		});
	}
	const localQuestion = await idbCreateQuestion(userId, {
		...data,
		...serverQuestion,
		quiz_id: quizId
	});
	questionsByIdWritable.update((state) => ({ ...state, [localQuestion.local_id]: localQuestion }));
	return localQuestion;
}
