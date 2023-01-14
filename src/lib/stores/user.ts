import { apiGetCurrentUser, apiSignIn, type User } from '$lib/api/user';
import { derived, get } from 'svelte/store';
import { jwt } from './jwt';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';
import EventEmitter from 'eventemitter3';

const userWritable = localstorageWritable<User | null>('user', null);
export const user = derived(userWritable, (state) => state);

export async function signIn(email: string, password: string) {
	const user = await apiSignIn(email, password);
	userWritable.set(user);
	return user;
}

export async function signOut() {
	userWritable.set(null);
}

export async function waitForUser() {
	return new Promise<User>((resolve) => emitter.once('user', resolve));
}

const emitter = new EventEmitter<{ user: User }>();
let initialCall = false;
export async function initializeUser() {
	let currentUser = get(user);
	if (isOnline()) {
		if (!initialCall) {
			initialCall = true;
			currentUser = await getUserFromToken();
		}
	}
	if (currentUser) {
		emitter.emit('user', currentUser);
	}
	return currentUser;
}

async function getUserFromToken() {
	const token = get(jwt)?.token;
	if (token) {
		const user = await apiGetCurrentUser();
		userWritable.set(user);
		return user;
	} else {
		return null;
	}
}
