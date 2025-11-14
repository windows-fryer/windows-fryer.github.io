<script lang="ts">
	import type { PageData } from "./$types";
	import type { Post } from "$lib/post";

	const { data } = $props<{ data: PageData }>();

	const posts = data.posts.sort((a: Post, b: Post) => new Date(a.date).getTime() - new Date(b.date).getTime());
</script>

<div class="m-2 w-4/5 mx-auto max-w-5xl">
	<h1 class="text-3xl font-bold">Wednesday Blog</h1>
	<h2 class="text-xl text-gray-500">Rambles of the mentally deranged</h2>

	<hr class="border-dashed my-2" />

	<ul class="list-disc pl-5">
		{#each posts as post}
			<li class="text-lg">
				<a class="text-blue-500 hover:underline" href={`/post/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</div>