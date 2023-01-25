import type {
	PatchApiQuizzesQuizIdQuestionsId,
	PostApiQuizzesQuizIdQuestions,
	Question
} from '$lib/openapi/quantu';
import { convertToUrlSafe } from '$lib/util';
import { getIndexedDB, type LocalQuestion } from './IndexedDB';

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
	localQuizId: number,
	quizId: number,
	data: PostApiQuizzesQuizIdQuestions
) {
	const db = await getIndexedDB();
	const localQuestion = {
		...createEmptyQuestion(userId, localQuizId, quizId),
		...data,
		uri: data.name ? convertToUrlSafe(data.name) : undefined
	};
	const localId = await db.put('questions', localQuestion);
	return { ...localQuestion, local_id: localId };
}

export async function idbUpdateQuestion(
	userId: number,
	localQuizId: number,
	quizId: number,
	localId: number,
	data: PatchApiQuizzesQuizIdQuestionsId
) {
	const db = await getIndexedDB();
	const localQuestion =
		(await db.get('questions', localId)) || createEmptyQuestion(userId, localQuizId, quizId);
	const updatedQuestion = {
		...localQuestion,
		...data,
		user_id: userId,
		local_quiz_id: localQuizId,
		quiz_id: quizId,
		local_id: localId,
		uri: data.name ? convertToUrlSafe(data.name) : localQuestion.uri,
		updated_at: new Date()
	};
	await db.put('questions', updatedQuestion, localId);
	return updatedQuestion;
}

export async function idbSetFromRemoteQuestion(
	userId: number,
	localQuizId: number,
	quizId: number,
	localId: number,
	question: Question
) {
	const db = await getIndexedDB();
	const localQuestion =
		(await db.get('questions', localId)) || createEmptyQuestion(userId, localQuizId, quizId);
	const updatedLocalQuestion = {
		...localQuestion,
		...question,
		user_id: userId,
		local_quiz_id: localQuizId,
		quiz_id: quizId,
		local_id: localId
	};
	await db.put('questions', updatedLocalQuestion);
	return updatedLocalQuestion;
}

export async function idbMarkQuestionAsDeleted(
	userId: number,
	localQuizId: number,
	quizId: number,
	localId: number
) {
	const db = await getIndexedDB();
	const question =
		(await db.get('questions', localId)) || createEmptyQuestion(userId, localQuizId, quizId);
	const deletedQuestion = {
		...question,
		user_id: userId,
		local_quiz_id: localQuizId,
		quiz_id: quizId,
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

function createEmptyQuestion(userId: number, localQuizId: number, quizId: number) {
	return {
		id: 0,
		local_quiz_id: localQuizId,
		local_deleted: 0,
		quiz_id: quizId,
		user_id: userId,
		name: '',
		uri: '',
		created_at: new Date(),
		updated_at: new Date()
	} as LocalQuestion;
}