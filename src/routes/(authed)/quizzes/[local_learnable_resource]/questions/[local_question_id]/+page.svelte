<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import EditQuestion from '$lib/components/question/EditQuestion.svelte';
	import { questionByLocalQuestionId } from '$lib/stores/questions';

	$: localQuizId = parseInt($page.params.local_learnable_resource);
	$: localQuestionId = parseInt($page.params.local_question_id);
	$: localQuestion = $questionByLocalQuestionId[localQuestionId];

	async function onUpdate() {
		await goto(`${base}/quizzes/${localQuizId}`);
	}
</script>

<div class="container mx-auto">
	<div class="flex justify-between">
		<a class="flex flex-shrink-1" href={`${base}/quizzes/${localQuizId}`}>Back</a>
	</div>
	{#if localQuestion}
		<EditQuestion {localQuizId} {localQuestionId} question={localQuestion} {onUpdate} />
	{/if}
</div>
