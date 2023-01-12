import type { IAsJSON } from '@aicacia/json';
import { getHeaders } from '$lib/stores/jwt';

export type Quiz = {
	id: number;
	name: string;
	uri: string;
	created_at: Date;
	updated_at: Date;
};

export type QuizJSON = IAsJSON<Quiz>;

export function quizFromJSON(json: QuizJSON): Quiz {
	return {
		...json,
		created_at: new Date(json.created_at),
		updated_at: new Date(json.updated_at)
	};
}

export async function getQuizzes() {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/quizzes`, {
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		const json: QuizJSON[] = await res.json();
		return json.map(quizFromJSON);
	} else {
		throw res;
	}
}

export async function getQuizById(id: number) {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/quizzes/${id}`, {
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		return quizFromJSON(await res.json());
	} else {
		throw res;
	}
}

export type CreateQuiz = {
	name: string;
	uri: string;
};

export async function createQuiz(data: CreateQuiz) {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/quizzes`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		return quizFromJSON(await res.json());
	} else {
		throw res;
	}
}

export type UpdateQuiz = {
	name: string;
	uri: string;
};

export async function updateQuiz(id: number, data: UpdateQuiz) {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/quizzes/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		return quizFromJSON(await res.json());
	} else {
		throw res;
	}
}

export async function deleteQuiz(id: number) {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/quizzes/${id}`, {
		method: 'DELETE',
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (!res.ok) {
		throw res;
	}
}
