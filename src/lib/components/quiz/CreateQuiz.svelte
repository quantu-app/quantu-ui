<svelte:options immutable />

<script lang="ts">
	import { createQuiz } from '$lib/stores/quizzes';
	import { autofocus } from '$lib/util';
	import Modal from '../Modal.svelte';

	let name: string;

	async function onSubmit() {
		const _quiz = await createQuiz({ name });
		name = '';
		open = false;
	}

	let open = false;
	function onOpen() {
		open = true;
	}
</script>

<button class="btn primary" on:click={onOpen}>Create Quiz</button>

<Modal bind:open>
	<h3 slot="title">Create a Quiz</h3>
	<form on:submit|preventDefault={onSubmit}>
		<input type="text" use:autofocus class="mb-1" placeholder="Name" bind:value={name} />
		<div class="flex flex-column justify-end">
			<div class="flex">
				<input type="submit" class="btn primary" value="Create Quiz" disabled={!name} />
			</div>
		</div>
	</form>
</Modal>
