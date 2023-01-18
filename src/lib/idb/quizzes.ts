import type { PatchApiQuizzesId, PostApiQuizzes, Quiz } from '$lib/openapi/quantu';
import { convertToUrlSafe } from '$lib/util';
import { getIndexedDB, type LocalSchema } from './IndexedDB';

export async function idbGetQuizzes() {
	const db = await getIndexedDB();
	const quizzes = await db.getAllFromIndex('quizzes', 'local_deleted', 0);
	return quizzes;
}

export async function idbGetQuizByLocalUUID(local_id: number) {
	const db = await getIndexedDB();
	const quiz = await db.get('quizzes', local_id);
	return quiz;
}

export async function idbCreateQuiz(data: PostApiQuizzes & Partial<Quiz>) {
	const db = await getIndexedDB();
	const quiz = {
		...createEmptyQuiz(),
		...data,
		uri: convertToUrlSafe(data.name)
	};
	const local_id = await db.put('quizzes', quiz);
	return { ...quiz, local_id };
}

export async function idbUpdateQuiz(local_id: number, data: PatchApiQuizzesId & Partial<Quiz>) {
	const db = await getIndexedDB();
	const quiz = (await db.get('quizzes', local_id)) || createEmptyQuiz();
	const updatedQuiz = {
		...quiz,
		...data,
		uri: data.name ? convertToUrlSafe(data.name) : quiz.uri,
		updated_at: new Date()
	};
	await db.put('quizzes', updatedQuiz, local_id);
	return updatedQuiz;
}

export async function idbDeleteQuiz(local_id: number) {
	const db = await getIndexedDB();
	const quiz = (await db.get('quizzes', local_id)) || createEmptyQuiz();
	const deletedQuiz = { ...quiz, local_deleted: 1 };
	await db.put('quizzes', deletedQuiz, local_id);
}

export async function idbSyncWithServer(serverQuiz: Quiz) {
	const db = await getIndexedDB();
	const localQuiz = await db.getFromIndex('quizzes', 'id', serverQuiz.id);
	let quiz: LocalSchema<Quiz>;
	if (localQuiz) {
		if (localQuiz.updated_at > serverQuiz.updated_at) {
			quiz = { ...serverQuiz, ...localQuiz };
		} else {
			quiz = { ...localQuiz, ...serverQuiz };
		}
	} else {
		quiz = { ...serverQuiz, local_deleted: 0 } as LocalSchema<Quiz>;
	}
	const local_id = await db.put('quizzes', quiz);
	return { ...quiz, local_id };
}

function createEmptyQuiz() {
	return {
		id: 0,
		local_deleted: 0,
		name: '',
		uri: '',
		created_at: new Date(),
		updated_at: new Date()
	} as LocalSchema<Quiz>;
}
