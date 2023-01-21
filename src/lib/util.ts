import { tick } from 'svelte';

export function createInsecureID() {
	return Math.random().toString(36).substring(2);
}

export function convertToUrlSafe(value: string): string {
	return value
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-_]/gi, '')
		.toLowerCase();
}

export function autofocus(element: HTMLElement) {
	tick().then(() => element.focus());
}
