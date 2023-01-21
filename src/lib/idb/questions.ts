import type {
	PatchApiQuizzesQuizIdQuestionsId,
	PostApiQuizzesQuizIdQuestions,
	Question
} from '$lib/openapi/quantu';
import { convertToUrlSafe } from '$lib/util';
import { getIndexedDB, type LocalSchema } from './IndexedDB';

export async function idbGetQuestions(userId: number) {
	const db = await getIndexedDB();
	const questions = await db.getAllFromIndex('questions', 'user_id', userId);
	return questions;
}

export async function idbGetQuestionByLocalId(localId: number) {
	const db = await getIndexedDB();
	const question = await db.get('questions', localId);
	return question;
}

export async function idbCreateQuestion(
	userId: number,
	data: PostApiQuizzesQuizIdQuestions & Partial<Question>
) {
	const db = await getIndexedDB();
	const localQuestion = {
		...createEmptyQuestion(userId),
		...data,
		uri: data.name ? convertToUrlSafe(data.name) : undefined
	};
	const localId = await db.put('questions', localQuestion);
	return { ...localQuestion, local_id: localId };
}

export async function idbUpdateQuestion(
	userId: number,
	localId: number,
	data: PatchApiQuizzesQuizIdQuestionsId & Partial<Question>
) {
	const db = await getIndexedDB();
	const localQuestion = (await db.get('questions', localId)) || createEmptyQuestion(userId);
	const updatedQuestion = {
		...localQuestion,
		...data,
		local_id: localId,
		uri: data.name ? convertToUrlSafe(data.name) : localQuestion.uri,
		updated_at: new Date()
	};
	await db.put('questions', updatedQuestion, localId);
	return updatedQuestion;
}

export async function idbSetFromRemoteQuestion(
	userId: number,
	localId: number,
	question: Question
) {
	const db = await getIndexedDB();
	const localQuestion = (await db.get('questions', localId)) || createEmptyQuestion(userId);
	const updatedLocalQuestion = {
		...localQuestion,
		...question,
		local_id: localId
	};
	await db.put('questions', updatedLocalQuestion);
	return updatedLocalQuestion;
}

export async function idbMarkQuestionAsDeleted(userId: number, localId: number) {
	const db = await getIndexedDB();
	const question = (await db.get('questions', localId)) || createEmptyQuestion(userId);
	const deletedQuestion = {
		...question,
		local_id: localId,
		updated_at: new Date(),
		local_deleted: 1
	};
	await db.put('questions', deletedQuestion);
}

export async function idbDeleteQuestion(localId: number) {
	const db = await getIndexedDB();
	await db.delete('questions', localId);
}

function createEmptyQuestion(userId: number) {
	return {
		id: 0,
		local_deleted: 0,
		user_id: userId,
		name: '',
		uri: '',
		created_at: new Date(),
		updated_at: new Date()
	} as LocalSchema<Question>;
}
