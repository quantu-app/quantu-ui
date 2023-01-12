<svelte:options immutable />

<script lang="ts">
	import { getQuizzes } from '$lib/api/quizzes';
	import { signIn } from '$lib/api/user';
	import Layout from '$lib/components/Layout.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		const user = await signIn('nathanfaucett@gmail.com', 'password');
		const quizzes = await getQuizzes();
		console.log(quizzes);
	});
</script>

<Layout />
