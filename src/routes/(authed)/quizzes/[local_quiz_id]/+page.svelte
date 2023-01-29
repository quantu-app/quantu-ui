<svelte:options immutable />

<script lang="ts">
	import Questions from '$lib/components/question/Questions.svelte';
	import { questionByLocalQuizId } from '$lib/stores/questions';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	$: localQuizId = parseInt($page.params.local_quiz_id);
	$: questions = $questionByLocalQuizId[localQuizId] || [];
</script>

<div class="container mx-auto">
	<div class="flex justify-between">
		<a class="flex flex-shrink-1" href={`${base}/`}>Back</a>
	</div>
	<Questions {localQuizId} {questions} />
</div>
