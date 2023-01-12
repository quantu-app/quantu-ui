import { getHeaders, jwtWritable } from '$lib/stores/jwt';
import type { IAsJSON } from '@aicacia/json';

export type User = {
	id: number;
	username: string;
	email: string;
	created_at: Date;
	updated_at: Date;
};

export type UserJSON = IAsJSON<User>;

export function userFromJSON(json: UserJSON): User {
	return {
		...json,
		created_at: new Date(json.created_at),
		updated_at: new Date(json.updated_at)
	};
}

export type JWT = {
	exp: Date;
	token: string;
	username: string;
};

export type JWTJSON = IAsJSON<JWT>;

export function jwtFromJSON(json: JWTJSON): JWT {
	return {
		...json,
		exp: new Date(json.exp)
	};
}

export async function signIn(email: string, password: string) {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/auth/login`, {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		const jwt = jwtFromJSON(await res.json());
		jwtWritable.set(jwt);
		return getCurrentUser();
	} else {
		throw res;
	}
}

export async function getCurrentUser() {
	const res = await fetch(`${import.meta.env.VITE_QUANTU_API_URL}/api/auth/me`, {
		headers: {
			...getHeaders(),
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		return userFromJSON(await res.json());
	} else {
		throw res;
	}
}
