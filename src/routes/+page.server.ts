import type { Post } from "$lib/post";
import type { PageServerLoad } from "./$types";

type MarkdownModule = {
	default: unknown;
	metadata: Omit<Post, "slug">;
};

const postFiles = import.meta.glob<MarkdownModule>("../posts/*.md", {
	eager: true
});

export const load = (async () => {
	const posts = Object.entries(postFiles)
		.map(([path, post]) => {
			const slug = path.split("/").pop()?.replace(".md", "") ?? "";

			return {
				slug,
				...post.metadata
			};
		})
		.filter((post) => post.published || import.meta.env.DEV)
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

	return { posts };
}) satisfies PageServerLoad;

