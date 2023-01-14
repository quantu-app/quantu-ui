<svelte:options immutable />

<script lang="ts">
	import { getQuizzes } from '$lib/api/quizzes';

	const quizzesPromise = getQuizzes();
</script>

<div class="container mx-auto">
	{#await quizzesPromise}
		Loading...
	{:then quizzes}
		{#if quizzes.length}
			{#each quizzes as quiz (quiz.id)}
				{quiz.name}
			{/each}
		{:else}
			No Quizzes
		{/if}
	{:catch error}
		{error.message}
	{/await}
</div>
