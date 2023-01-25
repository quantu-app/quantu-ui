import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';
import EventEmitter from 'eventemitter3';
import { authApi, configuration, defaultConfiguration } from '$lib/openapi';
import { Configuration, type Token, type User } from '$lib/openapi/quantu';

const jwtWritable = localstorageWritable<Token | null>('jwt', null);
const userWritable = localstorageWritable<User | null>('user', null, {
	fromJSON(json) {
		return {
			...json,
			updated_at: new Date(json.updated_at),
			created_at: new Date(json.created_at)
		};
	}
});
export const user = derived(userWritable, (state) => state);

export function getUser() {
	return get(user);
}

function setJWT(jwt: Token) {
	jwtWritable.set(jwt);
	configuration.config = new Configuration({ ...defaultConfiguration, apiKey: jwt.token });
}

function removeJWT() {
	jwtWritable.set(null);
	configuration.config = new Configuration(defaultConfiguration);
}

export async function signIn(email: string, password: string) {
	const jwt = await authApi.postApiAuthLogin({ postApiAuthLogin: { email, password }});
	setJWT(jwt);
	const user = await authApi.getApiAuthMe();
	userWritable.set(user);
	return user;
}

export async function signOut() {
	removeJWT();
	userWritable.set(null);
}

export async function waitForUser() {
	if (initialCall) {
		const currentUser = get(user);
		if (currentUser) {
			return currentUser;
		}
	}
	return new Promise<User>((resolve) => emitter.once('user', resolve));
}

const emitter = new EventEmitter<{ user: User }>();
let initialCall = false;
export async function initializeUser() {
	let currentUser = get(user);
	if (isOnline()) {
		if (!initialCall) {
			const jwt = get(jwtWritable);
			initialCall = true;
			if (jwt) {
				configuration.config = new Configuration({ ...defaultConfiguration, apiKey: jwt.token });
				currentUser = await authApi.getApiAuthMe();
			}
		}
	}
	if (currentUser) {
		emitter.emit('user', currentUser);
	}
	return currentUser;
}
