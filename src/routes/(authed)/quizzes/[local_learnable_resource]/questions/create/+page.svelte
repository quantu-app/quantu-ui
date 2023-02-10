<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import CreateQuestion from '$lib/components/question/CreateQuestion.svelte';
	import { quizzes } from '$lib/stores/quizzes';

	$: localQuizId = parseInt($page.params.local_learnable_resource);

	async function onSelect(e: Event & { currentTarget: HTMLSelectElement }) {
		await goto(`${base}/quizzes/${e.currentTarget.value}/questions/create`);
	}
</script>

<div class="container mx-auto">
	<div class="flex justify-between">
		<a class="flex flex-shrink-1" href={`${base}/quizzes/${localQuizId}`}>Back</a>
		<select class="flex flex-shrink-1 w-[inherit]" on:change={onSelect}>
			{#each $quizzes as quiz (quiz.local_id)}
				<option value={quiz.local_id} selected={quiz.local_id === localQuizId}>{quiz.name}</option>
			{/each}
		</select>
	</div>
	<CreateQuestion {localQuizId} />
</div>
