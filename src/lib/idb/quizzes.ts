import type { Quiz, APICreateQuiz, APIUpdateQuiz } from '$lib/api/quizzes';
import { getIndexedDB, type LocalSchema } from './IndexedDB';

export async function idbGetQuizzes() {
	const db = await getIndexedDB();
	const quizzes = await db.getAllFromIndex('quizzes', 'local_deleted', 0);
	return quizzes;
}

export async function idbGetQuizByLocalUUID(localId: number) {
	const db = await getIndexedDB();
	const quiz = await db.get('quizzes', localId);
	return quiz;
}

export async function idbCreateQuiz(data: APICreateQuiz) {
	const db = await getIndexedDB();
	const quiz = {
		...data,
		...createEmptyQuiz()
	};
	const localId = await db.put('quizzes', quiz);
	return { ...quiz, local_id: localId };
}

export async function idbUpdateQuiz(localId: number, data: APIUpdateQuiz) {
	const db = await getIndexedDB();
	const quiz = (await db.get('quizzes', localId)) || createEmptyQuiz();
	const updatedQuiz = { ...quiz, ...data, updated_at: new Date() };
	await db.put('quizzes', updatedQuiz, localId);
	return updatedQuiz;
}

export async function idbDeleteQuiz(localId: number) {
	const db = await getIndexedDB();
	const quiz = (await db.get('quizzes', localId)) || createEmptyQuiz();
	const deletedQuiz = { ...quiz, local_deleted: 1 };
	await db.put('quizzes', deletedQuiz, localId);
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
	const localId = await db.put('quizzes', quiz);
	return { ...quiz, local_id: localId };
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
