import type { LocalQuiz } from '$lib/idb/IndexedDB';
import { derived, get, writable } from 'svelte/store';
import { isOnline, onlineEmitter } from './online';
import {
	idbCreateQuiz,
	idbDeleteQuiz,
	idbGetQuizByLocalId,
	idbGetQuizzes,
	idbMarkQuizAsDeleted,
	idbSetFromRemoteQuiz,
	idbUpdateQuiz
} from '$lib/idb/quizzes';
import { waitForUser, getUser } from './user';
import type { Quiz, PostApiQuizzes } from '$lib/openapi/quantu';
import { quizApi } from '$lib/openapi';
import { EventEmitter } from 'eventemitter3';

export type QuizStore = { [localId: string]: LocalQuiz };

const quizzesByIdWritable = writable<QuizStore>({});
export const quizzes = derived(quizzesByIdWritable, (state) => Object.values(state));

export async function createQuiz(data: PostApiQuizzes) {
	const userId = getUser()?.id as number;
	let serverQuiz: Partial<Quiz> = {};
	if (isOnline()) {
		serverQuiz = await quizApi.postApiQuizzes({ postApiQuizzes: data });
	}
	const localQuiz = await idbCreateQuiz(userId, { ...data, ...serverQuiz });
	quizzesByIdWritable.update((state) => ({ ...state, [localQuiz.local_id]: localQuiz }));
	return localQuiz;
}

export async function updateQuiz(localId: number, data: PostApiQuizzes) {
	const userId = getUser()?.id as number;
	const localQuiz = await idbGetQuizByLocalId(localId);
	if (localQuiz) {
		let serverQuiz: Partial<Quiz> = {};
		if (isOnline()) {
			serverQuiz = await quizApi.patchApiQuizzesId({ id: localQuiz.id, patchApiQuizzesId: data });
		}
		const updatedLocalQuiz = await idbUpdateQuiz(userId, localId, { ...localQuiz, ...serverQuiz });
		quizzesByIdWritable.update((state) => ({
			...state,
			[updatedLocalQuiz.local_id]: updatedLocalQuiz
		}));
		return updatedLocalQuiz;
	}
}

export async function deleteQuiz(localId: number) {
	const userId = getUser()?.id as number;
	if (isOnline()) {
		const localQuiz = await idbGetQuizByLocalId(localId);
		if (localQuiz) {
			await quizApi.deleteApiQuizzesId({ id: localQuiz.id });
			await idbDeleteQuiz(localId);
		}
	} else {
		await idbMarkQuizAsDeleted(userId, localId);
	}
	quizzesByIdWritable.update((state) => {
		state = { ...state };
		delete state[localId];
		return state;
	});
}

export function getQuizzes(): Promise<QuizStore> {
	if (syncing) {
		return new Promise((resolve) => emitter.once('quizzes', resolve));
	} else {
		return Promise.resolve(get(quizzesByIdWritable));
	}
}

const emitter = new EventEmitter<{ quizzes: QuizStore }>();
let syncing = false;

async function syncQuizzes(userId: number) {
	syncing = true;
	try {
		const localQuizzes = await idbGetQuizzes(userId);
		const localQuizzesByLocalId: QuizStore = {};
		const localQuizzesById: QuizStore = {};
		const localOnlyQuizzes: LocalQuiz[] = [];

		for (const localQuiz of localQuizzes) {
			if (localQuiz.id === 0) {
				localOnlyQuizzes.push(localQuiz);
			} else {
				localQuizzesById[localQuiz.id] = localQuiz;
			}
			if (localQuiz.local_deleted === 0) {
				localQuizzesByLocalId[localQuiz.local_id] = localQuiz;
			}
		}
		quizzesByIdWritable.update((state) => ({ ...state, ...localQuizzesByLocalId }));

		if (isOnline()) {
			const apiQuizzes = await quizApi.getApiQuizzes();
			const apiQuizzesByLocalId: QuizStore = {};
			const deletedQuizzesLocalIds = new Set<number>();

			const tasks: Promise<void>[] = [];
			for (const apiQuiz of apiQuizzes) {
				const localQuiz = localQuizzesById[apiQuiz.id];
				if (localQuiz) {
					if (localQuiz.updated_at > apiQuiz.updated_at) {
						if (localQuiz.local_deleted === 1) {
							// delete remote and local quiz
							tasks.push(
								quizApi
									.deleteApiQuizzesId({ id: apiQuiz.id })
									.then(() => idbDeleteQuiz(localQuiz.local_id))
									.then(() => {
										deletedQuizzesLocalIds.add(localQuiz.local_id);
									})
							);
						} else {
							// update api quiz with local
							tasks.push(
								quizApi
									.patchApiQuizzesId({
										id: apiQuiz.id,
										patchApiQuizzesId: { ...apiQuiz, ...localQuiz }
									})
									.then((apiUpdatedQuiz) => {
										apiQuizzesByLocalId[localQuiz.id] = { ...localQuiz, ...apiUpdatedQuiz };
									})
							);
						}
					} else if (localQuiz.updated_at < apiQuiz.updated_at) {
						// update local with remote
						tasks.push(
							idbUpdateQuiz(userId, localQuiz.local_id, { ...localQuiz, ...apiQuiz }).then(
								(updatedLocalQuiz) => {
									apiQuizzesByLocalId[updatedLocalQuiz.local_id] = updatedLocalQuiz;
								}
							)
						);
					} else {
						// local and remote in sync
						apiQuizzesByLocalId[localQuiz.local_id] = { ...localQuiz, ...apiQuiz };
					}
				} else {
					// add remote to local
					tasks.push(
						idbCreateQuiz(userId, apiQuiz).then((localQuiz) => {
							apiQuizzesByLocalId[localQuiz.local_id] = localQuiz;
						})
					);
				}
			}
			for (const localQuiz of localOnlyQuizzes) {
				tasks.push(
					quizApi
						.postApiQuizzes({ postApiQuizzes: localQuiz })
						.then((apiQuiz) => idbSetFromRemoteQuiz(userId, localQuiz.local_id, apiQuiz))
						.then((updatedLocalQuiz) => {
							apiQuizzesByLocalId[updatedLocalQuiz.local_id] = updatedLocalQuiz;
						})
				);
			}
			await Promise.all(tasks);
			await Promise.all(
				Object.values(localQuizzesById).map(async (localQuiz) => {
					const apiQuiz = apiQuizzesByLocalId[localQuiz.local_id];
					if (!apiQuiz) {
						deletedQuizzesLocalIds.add(localQuiz.local_id);
						await idbDeleteQuiz(localQuiz.local_id);
					}
				})
			);
			quizzesByIdWritable.update((state) => {
				state = { ...state, ...apiQuizzesByLocalId };
				for (const localId of deletedQuizzesLocalIds) {
					delete state[localId];
				}
				return state;
			});
		}
	} finally {
		syncing = false;
		emitter.emit('quizzes', get(quizzesByIdWritable));
	}
}

onlineEmitter.on('online', async () => {
	const user = await waitForUser();
	syncQuizzes(user.id);
});
waitForUser().then((user) => syncQuizzes(user.id));
