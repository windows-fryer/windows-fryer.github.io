import type { Post } from "$lib/post";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";
import type { PageLoad } from "./$types";

type MarkdownModule = {
	default: Component;
	metadata: Omit<Post, "slug">;
};

const postFiles = import.meta.glob<MarkdownModule>("/src/posts/*.md");

export const load = (async ({ params }) => {
	const entry = postFiles[`/src/posts/${params.slug}.md`];

	if (!entry) {
		error(404, `Could not find ${params.slug}`);
	}

	const post = await entry();

	return {
		content: post.default,
		meta: post.metadata
	};
}) satisfies PageLoad;