import { initializeUserFromToken } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { base } from '$app/paths';

export const ssr = false;

export const load: LayoutLoad = async (_event) => {
	try {
		const user = await initializeUserFromToken();
		if (!user) {
			throw new Error('Signed out');
		}
	} catch (_error) {
		throw redirect(301, `${base}/login`);
	}
};
