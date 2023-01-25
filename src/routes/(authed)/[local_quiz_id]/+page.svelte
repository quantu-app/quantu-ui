<svelte:options immutable />

<script>
	import Questions from '$lib/components/question/Questions.svelte';
	import { questionByLocalQuizId } from '$lib/stores/questions';
	import { page } from '$app/stores';

	$: localQuizId = parseInt($page.params.local_quiz_id);
	$: questions = $questionByLocalQuizId[localQuizId] || [];
</script>

<div class="container mx-auto">
	<Questions {localQuizId} {questions} />
</div>
