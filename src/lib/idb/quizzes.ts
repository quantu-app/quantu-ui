import type { PatchApiQuizzesId, PostApiQuizzes, Quiz } from '$lib/openapi/quantu';
import { convertToUrlSafe } from '$lib/util';
import { getIndexedDB, type LocalSchema } from './IndexedDB';

export async function idbGetQuizzes(userId: number) {
	const db = await getIndexedDB();
	const quizzes = await db.getAllFromIndex('quizzes', 'user_id', userId);
	return quizzes;
}

export async function idbGetQuizByLocalId(localId: number) {
	const db = await getIndexedDB();
	const quiz = await db.get('quizzes', localId);
	return quiz;
}

export async function idbCreateQuiz(userId: number, data: PostApiQuizzes & Partial<Quiz>) {
	const db = await getIndexedDB();
	const localQuiz = {
		...createEmptyQuiz(userId),
		...data,
		uri: convertToUrlSafe(data.name)
	};
	const localId = await db.put('quizzes', localQuiz);
	return { ...localQuiz, local_id: localId };
}

export async function idbUpdateQuiz(
	userId: number,
	localId: number,
	data: PatchApiQuizzesId & Partial<Quiz>
) {
	const db = await getIndexedDB();
	const localQuiz = (await db.get('quizzes', localId)) || createEmptyQuiz(userId);
	const updatedQuiz = {
		...localQuiz,
		...data,
		local_id: localId,
		uri: data.name ? convertToUrlSafe(data.name) : localQuiz.uri,
		updated_at: new Date()
	};
	await db.put('quizzes', updatedQuiz, localId);
	return updatedQuiz;
}

export async function idbSetFromRemoteQuiz(userId: number, localId: number, quiz: Quiz) {
	const db = await getIndexedDB();
	const localQuiz = (await db.get('quizzes', localId)) || createEmptyQuiz(userId);
	const updatedLocalQuiz = {
		...localQuiz,
		...quiz,
		local_id: localId
	};
	await db.put('quizzes', updatedLocalQuiz);
	return updatedLocalQuiz;
}

export async function idbMarkQuizAsDeleted(userId: number, localId: number) {
	const db = await getIndexedDB();
	const quiz = (await db.get('quizzes', localId)) || createEmptyQuiz(userId);
	const deletedQuiz = { ...quiz, local_id: localId, updated_at: new Date(), local_deleted: 1 };
	await db.put('quizzes', deletedQuiz);
}

export async function idbDeleteQuiz(localId: number) {
	const db = await getIndexedDB();
	await db.delete('quizzes', localId);
}

function createEmptyQuiz(userId: number) {
	return {
		id: 0,
		local_deleted: 0,
		user_id: userId,
		name: '',
		uri: '',
		created_at: new Date(),
		updated_at: new Date()
	} as LocalSchema<Quiz>;
}
