import { apiGetCurrentUser, apiSignIn, type User } from '$lib/api/user';
import { derived, get, writable } from 'svelte/store';
import { jwt } from './jwt';

const userWritable = writable<User | null>(null);
export const user = derived(userWritable, (state) => state);

export async function signIn(email: string, password: string) {
	const user = await apiSignIn(email, password);
	userWritable.set(user);
	return user;
}

export async function getUserFromToken() {
	const token = get(jwt)?.token;
	if (token) {
		const user = await apiGetCurrentUser();
		userWritable.set(user);
		return user;
	} else {
		return null;
	}
}

let initialCall = false;
export async function initializeUserFromToken() {
	if (initialCall) {
		return get(user);
	} else {
		initialCall = true;
		return getUserFromToken();
	}
}
