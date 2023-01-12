import type { JWT } from '$lib/api/user';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { derived, get } from 'svelte/store';

export const jwtWritable = localstorageWritable<JWT | null>('jwt', null);
export const jwt = derived(jwtWritable, (state) => state);

export function getHeaders() {
	return {
		Authorization: get(jwt)?.token || ''
	};
}
