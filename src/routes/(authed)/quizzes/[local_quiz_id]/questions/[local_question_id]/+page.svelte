<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import EditQuestion from '$lib/components/question/EditQuestion.svelte';
	import { questionByLocalQuestionId } from '$lib/stores/questions';

	$: localQuizId = parseInt($page.params.local_quiz_id);
	$: localQuestionId = parseInt($page.params.local_question_id);
	$: localQuestion = $questionByLocalQuestionId[localQuestionId];
</script>

<div class="container mx-auto">
	<div class="flex justify-between">
		<a class="flex flex-shrink-1" href={`${base}/quizzes/${localQuizId}`}>Back</a>
	</div>
	{#if localQuestion}
		<EditQuestion {localQuizId} {localQuestionId} question={localQuestion} />
	{/if}
</div>
