<svelte:options immutable />

<script lang="ts">
	import Quizzes from '$lib/components/quiz/Quizzes.svelte';
	import { quizzes } from '$lib/stores/quizzes';
</script>

<div class="container mx-auto">
	<Quizzes quizzes={$quizzes} />
</div>
