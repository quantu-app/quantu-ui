import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { internalIpV4 } from 'internal-ip';

export default defineConfig(async () => {
	const host = await internalIpV4();

	/** @type {import('vite').UserConfig} */
	const config = {
		server: {
			host: '0.0.0.0',
			port: 3000,
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host,
				port: 5183
			}
		},
		preview: {
			port: 3000
		},
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};

	return config;
});
