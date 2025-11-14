import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

const collectPostAssetEntries = () => {
	try {
		const baseDir = fileURLToPath(new URL('./src/lib/assets/posts', import.meta.url));

		if (!existsSync(baseDir)) return [];

		const walk = (dir, prefix = '') => {
			const entries = readdirSync(dir, { withFileTypes: true });

			return entries.flatMap((entry) => {
				const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

				if (entry.isDirectory()) {
					return walk(join(dir, entry.name), relativePath);
				}

				return [relativePath];
			});
		};

		return walk(baseDir).map((relativePath) => `/post/${relativePath}`.replace(/\\/g, '/'));
	} catch {
		return [];
	}
};

const additionalPrerenderEntries = collectPostAssetEntries();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', ...new Set(additionalPrerenderEntries)]
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
