import type { User } from '$lib/api/user';
import { derived, writable } from 'svelte/store';

export const userWritable = writable<User | null>(null);
export const user = derived(userWritable, (state) => state);
