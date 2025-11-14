<script lang="ts">
	import type { PageData } from "./$types";

	const { data } = $props<{ data: PageData }>();
	const Content = data.content;
	const date = new Date(data.meta.date).toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
</script>

<article class="m-2 w-4/5 mx-auto max-w-5xl">
	<h1 class="text-3xl font-bold">{data.meta.title}</h1>
	<p class="text-base text-gray-500">"{data.meta.description}" - By {data.meta.author} on {date}</p>
	
	<hr class="border-dashed my-2" />
	
	<ol class="list-decimal pl-5">
		{#each data.meta.chapters as chapter}
				<li><a href={`#${chapter.anchor}`}>{chapter.title}</a></li>
		{/each}
	</ol>

	<hr class="border-dashed my-2" />

	<div class="post-content">
		<Content />
	</div>
</article>