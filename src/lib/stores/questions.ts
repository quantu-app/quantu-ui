import type { LocalQuestion } from '$lib/idb/IndexedDB';
import { derived, writable } from 'svelte/store';
import { isOnline, onlineEmitter } from './online';
import {
	idbCreateQuestion,
	idbDeleteQuestion,
	idbGetQuestionByLocalId,
	idbGetQuestions,
	idbSetFromRemoteQuestion,
	idbUpdateQuestion
} from '$lib/idb/questions';
import { waitForUser, getUser } from './user';
import type { PostApiQuestions, Question } from '$lib/openapi/quantu';
import { questionApi } from '$lib/openapi';
import { idbMarkQuestionAsDeleted } from '$lib/idb/questions';
import { idbGetQuizByLocalId } from '$lib/idb/quizzes';
import { getQuizzes, type QuizStore } from './quizzes';

export type QuestionStore = { [localId: string]: LocalQuestion };
export type QuestionsByLocalQuizIdStore = { [localQuizId: string]: LocalQuestion[] };

const questionsByIdWritable = writable<QuestionStore>({});
export const questions = derived(questionsByIdWritable, (state) => Object.values(state));
export const questionByLocalQuestionId = derived(questionsByIdWritable, (state) => state);
export const questionByLocalQuizId = derived(questionsByIdWritable, (state) =>
	Object.values(state).reduce((state, localQuestion) => {
		const localQuestions =
			state[localQuestion.local_learnable_resource] ||
			(state[localQuestion.local_learnable_resource] = []);
		localQuestions.push(localQuestion);
		return state;
	}, {} as QuestionsByLocalQuizIdStore)
);

export async function createQuestion(localQuizId: number, data: PostApiQuestions) {
	const localQuiz = await idbGetQuizByLocalId(localQuizId);
	if (localQuiz) {
		const userId = getUser()?.id as number;
		let serverQuestion: Partial<Question> = {};
		if (isOnline()) {
			serverQuestion = await questionApi.postApiQuestions({
				quizId: localQuiz.id,
				postApiQuestions: data
			});
		}
		const localQuestion = await idbCreateQuestion(userId, localQuiz.local_id, localQuiz.id, {
			...data,
			...serverQuestion
		});
		questionsByIdWritable.update((state) => ({
			...state,
			[localQuestion.local_id]: localQuestion
		}));
		return localQuestion;
	}
}

export async function updateQuestion(localQuizId: number, localId: number, data: PostApiQuestions) {
	const localQuiz = await idbGetQuizByLocalId(localQuizId);
	if (localQuiz) {
		const localQuestion = await idbGetQuestionByLocalId(localId);
		if (localQuestion) {
			const userId = getUser()?.id as number;
			let serverQuestion: Partial<Question> = {};
			if (isOnline()) {
				serverQuestion = await questionApi.patchApiQuestionsId({
					quizId: localQuiz.id,
					id: localQuestion.id,
					patchApiQuestionsId: data
				});
			}
			const updatedLocalQuestion = await idbUpdateQuestion(
				userId,
				localQuiz.local_id,
				localQuiz.id,
				localId,
				{
					...localQuestion,
					...serverQuestion
				}
			);
			questionsByIdWritable.update((state) => ({
				...state,
				[updatedLocalQuestion.local_id]: updatedLocalQuestion
			}));
			return updatedLocalQuestion;
		}
	}
}

export async function deleteQuestion(localQuizId: number, localId: number) {
	const localQuiz = await idbGetQuizByLocalId(localQuizId);
	if (localQuiz) {
		const userId = getUser()?.id as number;
		if (isOnline()) {
			const localQuestion = await idbGetQuestionByLocalId(localId);
			if (localQuestion) {
				await questionApi.deleteApiQuestionsId({
					quizId: localQuiz.id,
					id: localQuestion.id
				});
				await idbDeleteQuestion(localId);
			}
		} else {
			await idbMarkQuestionAsDeleted(userId, localQuiz.local_id, localQuiz.id, localId);
		}
		questionsByIdWritable.update((state) => {
			state = { ...state };
			delete state[localId];
			return state;
		});
	}
}

async function syncQuestions(userId: number) {
	const quizzesByLocalId = await getQuizzes();
	const quizzesById = Object.values(quizzesByLocalId).reduce((state, localQuiz) => {
		state[localQuiz.id] = localQuiz;
		return state;
	}, {} as QuizStore);

	const localQuestions = await idbGetQuestions(userId);
	const localQuestionsByLocalId: QuestionStore = {};
	const localQuestionsById: QuestionStore = {};
	const localOnlyQuestions: LocalQuestion[] = [];

	for (const localQuestion of localQuestions) {
		if (localQuestion.id === 0) {
			localOnlyQuestions.push(localQuestion);
		} else {
			localQuestionsById[localQuestion.id] = localQuestion;
		}
		if (localQuestion.local_deleted === 0) {
			localQuestionsByLocalId[localQuestion.local_id] = localQuestion;
		}
	}
	questionsByIdWritable.update((state) => ({ ...state, ...localQuestionsByLocalId }));

	if (isOnline()) {
		const apiQuestions = (
			await Promise.all(
				Object.keys(quizzesById).map((quizId) =>
					questionApi.getApiQuestions({ quizId: parseInt(quizId) })
				)
			)
		).flat(1);
		const apiQuestionsByLocalId: QuestionStore = {};
		const deletedQuestionsLocalIds = new Set<number>();

		const tasks: Promise<void>[] = [];
		for (const apiQuestion of apiQuestions) {
			const localQuestion = localQuestionsById[apiQuestion.id];
			if (localQuestion) {
				if (localQuestion.updated_at > apiQuestion.updated_at) {
					if (localQuestion.local_deleted === 1) {
						// delete remote and local question
						tasks.push(
							questionApi
								.deleteApiQuestionsId({
									quizId: apiQuestion.learnable_resource,
									id: apiQuestion.id
								})
								.then(() => idbDeleteQuestion(localQuestion.local_id))
								.then(() => {
									deletedQuestionsLocalIds.add(localQuestion.local_id);
								})
						);
					} else {
						// update api question with local
						tasks.push(
							questionApi
								.patchApiQuestionsId({
									quizId: apiQuestion.learnable_resource,
									id: apiQuestion.id,
									patchApiQuestionsId: { ...apiQuestion, ...localQuestion }
								})
								.then((apiUpdatedQuestion) => {
									apiQuestionsByLocalId[localQuestion.id] = {
										...localQuestion,
										...apiUpdatedQuestion
									};
								})
						);
					}
				} else if (localQuestion.updated_at < apiQuestion.updated_at) {
					// update local with remote
					tasks.push(
						idbUpdateQuestion(
							userId,
							localQuestion.local_learnable_resource,
							apiQuestion.learnable_resource,
							localQuestion.local_id,
							{
								...localQuestion,
								...apiQuestion
							}
						).then((updatedLocalQuestion) => {
							apiQuestionsByLocalId[updatedLocalQuestion.local_id] = updatedLocalQuestion;
						})
					);
				} else {
					// local and remote in sync
					apiQuestionsByLocalId[localQuestion.local_id] = { ...localQuestion, ...apiQuestion };
				}
			} else {
				const localQuiz = quizzesById[apiQuestion.learnable_resource];
				// add remote to local
				tasks.push(
					idbCreateQuestion(userId, localQuiz.local_id, localQuiz.id, apiQuestion).then(
						(localQuestion) => {
							apiQuestionsByLocalId[localQuestion.local_id] = localQuestion;
						}
					)
				);
			}
		}
		for (const localQuestion of localOnlyQuestions) {
			tasks.push(
				questionApi
					.postApiQuestions({
						quizId: localQuestion.learnable_resource,
						postApiQuestions: localQuestion
					})
					.then((apiQuestion) =>
						idbSetFromRemoteQuestion(
							userId,
							localQuestion.local_learnable_resource,
							localQuestion.learnable_resource,
							localQuestion.local_id,
							apiQuestion
						)
					)
					.then((updatedLocalQuestion) => {
						apiQuestionsByLocalId[updatedLocalQuestion.local_id] = updatedLocalQuestion;
					})
			);
		}
		await Promise.all(tasks);
		await Promise.all(
			Object.values(localQuestionsById).map(async (localQuestion) => {
				const apiQuestion = apiQuestionsByLocalId[localQuestion.local_id];
				if (!apiQuestion) {
					deletedQuestionsLocalIds.add(localQuestion.local_id);
					await idbDeleteQuestion(localQuestion.local_id);
				}
			})
		);
		questionsByIdWritable.update((state) => {
			state = { ...state, ...apiQuestionsByLocalId };
			for (const localId of deletedQuestionsLocalIds) {
				delete state[localId];
			}
			return state;
		});
	}
}

onlineEmitter.on('online', async () => {
	const user = await waitForUser();
	syncQuestions(user.id);
});
waitForUser().then((user) => syncQuestions(user.id));
