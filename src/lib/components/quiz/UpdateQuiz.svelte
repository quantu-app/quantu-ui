<svelte:options immutable />

<script lang="ts">
	import { updateQuiz } from '$lib/stores/quizzes';
	import { autofocus } from '$lib/util';
	import Modal from '../Modal.svelte';

	export let name: string;
	export let localId: number;
	export let open: boolean = false;
	export let onClose: () => void = () => undefined;

	async function onSubmit() {
		// TODO: handle errors
		const _quiz = await updateQuiz(localId, { name });
		name = '';
		open = false;
	}
</script>

<Modal bind:open {onClose}>
	<h3 slot="title">Update a Quiz</h3>
	<form on:submit|preventDefault={onSubmit}>
		<input type="text" use:autofocus class="mb-1" placeholder="Name" bind:value={name} />
		<div class="flex flex-column justify-end">
			<div class="flex">
				<input type="submit" class="btn primary" value="Update Quiz" disabled={!name} />
			</div>
		</div>
	</form>
</Modal>
